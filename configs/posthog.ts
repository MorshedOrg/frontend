import posthog from 'posthog-js'

function onPostHogLoad() {
  // Save for later!
}

export function init() {
  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    console.warn('[PostHog] Error: No API key available')
    return
  }

  console.log(
    'process.env.NEXT_PUBLIC_POSTHOG_KEY',
    process.env.NEXT_PUBLIC_POSTHOG_KEY
  )

  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: 'https://us.posthog.com',
    loaded: onPostHogLoad,
    autocapture: true,
  })
}
