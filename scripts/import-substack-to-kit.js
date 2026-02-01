#!/usr/bin/env node

/**
 * Import Substack subscribers to Kit (ConvertKit) with tags
 *
 * Usage:
 *   1. Export your Substack subscriber list (Settings → Exports → Email list)
 *   2. Run: node scripts/import-substack-to-kit.js /path/to/substack-export.csv
 *
 * Tags applied:
 *   - "Signal>Noise SS Sub" (all subscribers)
 *   - "SS Paid" (paid subscribers)
 *   - "SS Free" (free subscribers)
 *
 * Requires:
 *   - CONVERTKIT_API_KEY in .env.local
 */

const fs = require('fs');
const path = require('path');

// Load environment variables from .env.local
require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });

const API_KEY = process.env.CONVERTKIT_API_KEY;
const API_BASE = 'https://api.convertkit.com/v3';

// Rate limiting: Kit allows 120 requests per minute
const DELAY_MS = 600; // ~100 requests per minute to be safe

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getOrCreateTag(tagName) {
  // First, list existing tags
  const listRes = await fetch(`${API_BASE}/tags?api_key=${API_KEY}`);
  const { tags } = await listRes.json();

  const existing = tags.find(t => t.name === tagName);
  if (existing) {
    console.log(`  Tag "${tagName}" exists (ID: ${existing.id})`);
    return existing.id;
  }

  // Create if doesn't exist
  const createRes = await fetch(`${API_BASE}/tags`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ api_key: API_KEY, tag: { name: tagName } })
  });
  const created = await createRes.json();
  console.log(`  Created tag "${tagName}" (ID: ${created.id})`);
  return created.id;
}

async function tagSubscriber(email, tagId) {
  const res = await fetch(`${API_BASE}/tags/${tagId}/subscribe`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      api_key: API_KEY,
      email: email
    })
  });
  return res.ok;
}

function parseSubstackCSV(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.trim().split('\n');

  // Parse header row properly (handles quoted fields)
  const headerLine = lines[0];
  const headers = parseCSVLine(headerLine).map(h => h.trim().toLowerCase());

  // Find column indices - Substack export uses "email" and "type"
  const emailIdx = headers.findIndex(h => h === 'email');
  const typeIdx = headers.findIndex(h => h === 'type');
  const stripePlanIdx = headers.findIndex(h => h === 'stripe plan');

  if (emailIdx === -1) {
    throw new Error('Could not find email column in CSV. Headers found: ' + headers.join(', '));
  }

  console.log(`Found columns: email=${emailIdx}, type=${typeIdx}, stripe_plan=${stripePlanIdx}`);

  const subscribers = [];

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue;

    // Parse CSV line properly (handles quoted fields with commas)
    const cleanRow = parseCSVLine(lines[i]);

    const email = cleanRow[emailIdx];
    if (!email || !email.includes('@')) continue;

    // Determine if paid or free from Type column
    // Substack uses "Free" or "Paid" in the Type column
    let isPaid = false;
    if (typeIdx !== -1) {
      const type = cleanRow[typeIdx]?.toLowerCase() || '';
      isPaid = type === 'paid' || type.includes('paid');
    }

    // Also check Stripe plan as backup
    if (!isPaid && stripePlanIdx !== -1) {
      const stripePlan = cleanRow[stripePlanIdx]?.trim() || '';
      isPaid = stripePlan.length > 0; // Has a Stripe plan = paid
    }

    subscribers.push({ email, isPaid });
  }

  return subscribers;
}

// Parse a CSV line handling quoted fields with commas
function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }

  result.push(current.trim()); // Don't forget the last field
  return result;
}

async function main() {
  const csvPath = process.argv[2];

  if (!csvPath) {
    console.error('Usage: node import-substack-to-kit.js <path-to-substack-csv>');
    console.error('\nExport your list from Substack: Settings → Exports → Email list');
    process.exit(1);
  }

  if (!API_KEY) {
    console.error('Missing CONVERTKIT_API_KEY in .env.local');
    process.exit(1);
  }

  if (!fs.existsSync(csvPath)) {
    console.error(`File not found: ${csvPath}`);
    process.exit(1);
  }

  console.log('=== Substack → Kit Import ===\n');

  // Parse CSV
  console.log(`Reading ${csvPath}...`);
  const subscribers = parseSubstackCSV(csvPath);
  console.log(`Found ${subscribers.length} active subscribers\n`);

  const paidCount = subscribers.filter(s => s.isPaid).length;
  const freeCount = subscribers.length - paidCount;
  console.log(`  Paid: ${paidCount}`);
  console.log(`  Free: ${freeCount}\n`);

  // Get/create tags
  console.log('Setting up tags...');
  const baseTagId = await getOrCreateTag('Signal>Noise SS Sub');
  const paidTagId = await getOrCreateTag('SS Paid');
  const freeTagId = await getOrCreateTag('SS Free');
  console.log('');

  // Process subscribers
  console.log('Tagging subscribers...\n');

  let success = 0;
  let failed = 0;

  for (let i = 0; i < subscribers.length; i++) {
    const { email, isPaid } = subscribers[i];
    const tierTag = isPaid ? paidTagId : freeTagId;

    try {
      // Apply base tag
      await tagSubscriber(email, baseTagId);
      // Apply tier tag
      await tagSubscriber(email, tierTag);

      success++;
      const tier = isPaid ? 'PAID' : 'FREE';
      console.log(`[${i + 1}/${subscribers.length}] ✓ ${email} (${tier})`);
    } catch (err) {
      failed++;
      console.log(`[${i + 1}/${subscribers.length}] ✗ ${email} - ${err.message}`);
    }

    // Rate limiting
    await sleep(DELAY_MS);
  }

  console.log('\n=== Complete ===');
  console.log(`Success: ${success}`);
  console.log(`Failed: ${failed}`);
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
