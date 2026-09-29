import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const text = (body.text || '').toLowerCase().trim();
    const waId = body.waId;

    console.log('WATI WEBHOOK:', JSON.stringify(body));

    if (waId && text === 'hi') {
      const token = process.env.WATI_API_KEY;
      const tenantId = process.env.WATI_TENANT_ID || '10141519';

      const url = `https://live-server-${tenantId}.wati.io/api/v1/sendSessionMessage/${waId}`;

      const res = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `${token}`, // your token already has wati_ prefix, no Bearer needed
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messageText: 'Hello 👋 Welcome to Bhawani Spaces! How can I help you?',
        }),
      });

      const result = await res.text();
      console.log('WATI SEND RESULT:', result);
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ success: true });
  }
}

export async function GET() {
  return NextResponse.json({ status: 'WATI Webhook Active - bhawanispaces.com' });
}
