import { NextRequest, NextResponse } from 'next/server'
import { unsealData } from 'iron-session'
import { sessionOptions, SessionData } from '@/lib/session'

// Gate the admin area: every /admin/* page (dashboard, order print, etc.)
// requires a valid admin session. The bare /admin login page is left open —
// the `:path+` matcher requires at least one sub-segment, so it's excluded.
// This is defense-in-depth on top of the per-route requireAdmin() guards in
// the API handlers, which are the real enforcement for the data endpoints.
export async function proxy(req: NextRequest) {
  const redirectToLogin = () => {
    const loginUrl = new URL('/admin', req.url)
    loginUrl.searchParams.set('redirected', '1')
    return NextResponse.redirect(loginUrl)
  }

  const cookieValue = req.cookies.get(sessionOptions.cookieName)?.value
  if (!cookieValue) return redirectToLogin()

  try {
    const session = await unsealData<SessionData>(cookieValue, {
      password: sessionOptions.password as string,
    })
    if (!session.isLoggedIn) return redirectToLogin()
  } catch {
    return redirectToLogin()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path+'],
}
