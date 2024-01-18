import posthog from 'posthog-js'

function onPostHogLoad() {
  // Save for later!
}

export function init() {
  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    console.warn('[PostHog] Error: No API key available')
    return
  }

  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: 'https://us.posthog.com',
    loaded: onPostHogLoad,
    autocapture: true,
  })
}
