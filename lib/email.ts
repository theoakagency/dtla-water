// Centralized email config, sourced from env so senders/recipients aren't
// hardcoded across the API routes.

/**
 * Admin-notification recipients for order / contact / out-of-area emails.
 *
 * Parsed from ADMIN_NOTIFY_EMAILS, a comma-separated list — whitespace around
 * each address is trimmed and empty entries (e.g. a trailing comma) are dropped.
 * Returns an array, which the Resend SDK accepts directly for `to`.
 */
export function adminRecipients(): string[] {
  return (process.env.ADMIN_NOTIFY_EMAILS ?? '')
    .split(',')
    .map((addr) => addr.trim())
    .filter(Boolean)
}
