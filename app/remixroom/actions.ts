"use server";

export type SubscribeState = {
  ok: boolean;
  error?: string;
  email?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function subscribeToRemixRoom(
  formDataOrState: FormData | SubscribeState,
  maybeFormData?: FormData,
): Promise<SubscribeState> {
  const formData = maybeFormData ?? formDataOrState;

  if (!(formData instanceof FormData)) {
    return { ok: false, error: "Please enter a valid email." };
  }

  const email = String(formData.get("email") ?? "").trim().toLowerCase();

  if (!EMAIL_PATTERN.test(email)) {
    return { ok: false, error: "Please enter a valid email." };
  }

  const apiKey = process.env.CONVERTKIT_API_KEY;

  if (!apiKey) {
    return { ok: false, error: "Email service is not configured." };
  }

  // Tag IDs from Kit account (created via API 2026-04-24).
  // Subscribing to each tag directly via /v3/tags/:id/subscribe is more
  // reliable than /v3/forms/:id/subscribe — the form endpoint expects
  // tag IDs but silently ignored the names we were passing, so the
  // nurture-automation trigger never fired.
  const TAG_IDS = [
    19132532, // remix-room-subscriber — triggers the nurture automation
    19132533, // source-dan-koe-2026-04-23
    19132534, // nurture-active
  ];

  try {
    const responses = await Promise.all(
      TAG_IDS.map((tagId) =>
        fetch(`https://api.convertkit.com/v3/tags/${tagId}/subscribe`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ api_key: apiKey, email }),
        }),
      ),
    );

    if (responses.some((r) => !r.ok)) {
      return { ok: false, error: "Something went sideways. Try again." };
    }

    return { ok: true, email };
  } catch {
    return { ok: false, error: "Something went sideways. Try again." };
  }
}

export async function subscribeToRemixRoomWithState(
  _state: SubscribeState,
  formData: FormData,
): Promise<SubscribeState> {
  return subscribeToRemixRoom(formData);
}
