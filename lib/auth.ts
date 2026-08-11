import { getIronSession } from 'iron-session'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { sessionOptions, SessionData } from '@/lib/session'

/**
 * Guard for admin-only API route handlers.
 *
 * Returns a 401 `NextResponse` when the caller has no valid admin session, or
 * `null` when authenticated (the handler should proceed). Usage:
 *
 *   const unauthorized = await requireAdmin()
 *   if (unauthorized) return unauthorized
 *
 * The session is the same iron-session cookie set by /api/admin/auth on login.
 */
export async function requireAdmin(): Promise<NextResponse | null> {
  const session = await getIronSession<SessionData>(await cookies(), sessionOptions)
  if (!session.isLoggedIn) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  return null
}
