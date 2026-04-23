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
  const formId = process.env.CONVERTKIT_FORM_ID;

  if (!apiKey || !formId) {
    return { ok: false, error: "Email service is not configured." };
  }

  try {
    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key: apiKey,
          email,
          tags: [
            "remix-room-subscriber",
            "source-dan-koe-2026-04-23",
            "nurture-active",
          ],
        }),
      },
    );

    if (!response.ok) {
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
