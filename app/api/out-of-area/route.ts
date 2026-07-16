import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body = await req.json()
    const { firstName, lastName, phone, email, address, city, zip, waterType, bottleSize, website } = body

    // Honeypot
    if (website) return NextResponse.json({ success: true })

    if (!firstName || !lastName || !phone || !email || !zip) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'DTLA Water <orders@dtlawater.com>',
      to: process.env.OWNER_EMAIL as string,
      subject: `Sister Company Referral — ${firstName} ${lastName} (ZIP: ${zip})`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#1B3A6B;padding:24px 32px;">
            <h1 style="color:#fff;margin:0;font-size:22px;">Sister Company Referral</h1>
            <p style="color:#29ABE2;margin:6px 0 0;font-size:14px;">This customer is outside DTLA Water's service area — ZIP ${zip}</p>
          </div>

          <div style="padding:32px;background:#F5F8FB;">
            <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;">
              <tr style="background:#F5F8FB;">
                <td colspan="2" style="padding:12px 16px;font-weight:bold;color:#1B3A6B;font-size:13px;text-transform:uppercase;letter-spacing:.05em;">Customer Info</td>
              </tr>
              <tr><td style="padding:10px 16px;color:#5a7080;font-size:14px;width:40%;">Name</td><td style="padding:10px 16px;font-size:14px;font-weight:600;">${firstName} ${lastName}</td></tr>
              <tr style="background:#fafafa;"><td style="padding:10px 16px;color:#5a7080;font-size:14px;">Phone</td><td style="padding:10px 16px;font-size:14px;"><a href="tel:${phone}" style="color:#29ABE2;">${phone}</a></td></tr>
              <tr><td style="padding:10px 16px;color:#5a7080;font-size:14px;">Email</td><td style="padding:10px 16px;font-size:14px;"><a href="mailto:${email}" style="color:#29ABE2;">${email}</a></td></tr>
              <tr style="background:#fafafa;"><td style="padding:10px 16px;color:#5a7080;font-size:14px;">Address</td><td style="padding:10px 16px;font-size:14px;">${address || '—'}, ${city || '—'}, CA ${zip}</td></tr>

              <tr style="background:#F5F8FB;">
                <td colspan="2" style="padding:12px 16px;font-weight:bold;color:#1B3A6B;font-size:13px;text-transform:uppercase;letter-spacing:.05em;">Water Preferences</td>
              </tr>
              <tr><td style="padding:10px 16px;color:#5a7080;font-size:14px;">Water Type</td><td style="padding:10px 16px;font-size:14px;font-weight:600;">${waterType || '—'}</td></tr>
              <tr style="background:#fafafa;"><td style="padding:10px 16px;color:#5a7080;font-size:14px;">Bottle Size</td><td style="padding:10px 16px;font-size:14px;">${bottleSize || '—'}</td></tr>
            </table>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Out-of-area referral error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
