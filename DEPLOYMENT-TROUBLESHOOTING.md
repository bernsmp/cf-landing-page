# Deployment Troubleshooting Guide for AI Assistants

## 🚨 CRITICAL: Always Check Git Status FIRST

When a user reports that their Vercel deployment isn't showing the latest changes, **ALWAYS check git status before debugging build errors or deployment configurations**.

### The Most Common Issue: Uncommitted Changes

**Pattern:** Code works locally but doesn't appear on production.

**Root Cause:** Vercel only deploys what's committed and pushed to the repository. Uncommitted local changes will never be deployed.

---

## Step-by-Step Debugging Workflow

### Step 1: Check Git Status (DO THIS FIRST)

```bash
git status
```

**What to look for:**
- `Changes not staged for commit` - Modified files that aren't committed
- `Untracked files` - New files that aren't in git
- `Your branch is ahead of 'origin/main'` - Commits that aren't pushed

**If you find uncommitted changes:**
1. Check what changed: `git diff`
2. Commit the changes: `git add <files>` then `git commit -m "message"`
3. Push to trigger deployment: `git push`

**DO NOT:**
- ❌ Start debugging build errors
- ❌ Check Vercel dashboard first
- ❌ Force deploy via CLI before checking git status
- ❌ Assume the code is deployed just because it works locally

### Step 2: Verify What's Actually Deployed

Compare local commits with what's on the remote:

```bash
# Check recent commits
git log --oneline -5

# Check if local branch is ahead of remote
git log origin/main..HEAD

# Check if remote branch is ahead of local
git fetch && git log HEAD..origin/main
```

### Step 3: Check for Unpushed Commits

```bash
# See commits that haven't been pushed
git log origin/main..HEAD

# If there are unpushed commits, push them
git push
```

### Step 4: Only Then Check Build/Deployment Issues

Only after confirming all changes are committed and pushed:
- Check Vercel build logs
- Verify build configuration
- Check for TypeScript/build errors
- Force redeploy if needed: `npx vercel --prod --yes`

---

## Common Scenarios

### Scenario 1: "My changes aren't showing on production"

**Checklist:**
1. ✅ `git status` - Are there uncommitted changes?
2. ✅ `git log origin/main..HEAD` - Are there unpushed commits?
3. ✅ Check Vercel dashboard - Is the latest commit deployed?

**Most likely cause:** Uncommitted changes (90% of cases)

### Scenario 2: "Build succeeded but site looks wrong"

**Checklist:**
1. ✅ `git diff` - What's different locally vs committed?
2. ✅ Check if the file with changes is actually committed
3. ✅ Verify the commit was pushed: `git log --oneline -1`

**Most likely cause:** Changes exist locally but weren't committed

### Scenario 3: "I pushed but Vercel didn't deploy"

**Checklist:**
1. ✅ Verify push succeeded: `git log origin/main -1`
2. ✅ Check Vercel project settings - Is Git integration enabled?
3. ✅ Check Vercel dashboard for build status
4. ✅ Verify correct branch is connected in Vercel

---

## Red Flags That Indicate Uncommitted Changes

Watch for these patterns in user reports:

- "It works on my localhost but not on production"
- "I made changes but they're not showing up"
- "The site looks different locally vs deployed"
- "I updated a file but the old version is still live"

**When you hear these, check `git status` immediately.**

---

## Quick Reference Commands

```bash
# Check for uncommitted changes
git status

# See what changed
git diff

# See what files changed
git diff --name-only

# Commit all changes
git add .
git commit -m "Description of changes"
git push

# Check if commits are pushed
git log origin/main..HEAD

# Force Vercel deployment (only after confirming git is clean)
npx vercel --prod --yes
```

---

## Why This Matters

**The Mistake:** Assuming deployment issues are build/config problems when they're actually uncommitted changes.

**The Cost:** 
- Wasted time debugging non-existent build errors
- User frustration from repeated failed attempts
- Multiple unnecessary deployments

**The Solution:** Always check `git status` first. It takes 2 seconds and solves 90% of "deployment not updating" issues.

---

## Example: Correct Workflow

**User:** "My latest changes aren't showing on Vercel"

**AI Assistant Response:**
1. ✅ Run `git status` immediately
2. ✅ If uncommitted changes found: `git diff` to see what changed
3. ✅ Commit and push: `git add <files> && git commit -m "..." && git push`
4. ✅ Wait for Vercel auto-deploy (1-2 minutes)
5. ✅ Only if still not working: Check Vercel build logs

**Time saved:** 10-30 minutes of unnecessary debugging

---

## Remember

> **"If it works locally but not in production, check git status first. Always."**

This single check prevents 90% of deployment troubleshooting time.

