import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const waId = body.waId;
    const text = (body.text || '').toLowerCase().trim();

    console.log('INCOMING:', text, 'from', waId);

    if (!waId) return NextResponse.json({ success: true });

    // Only reply to hi/hello
    if (text === 'hi' || text === 'hello' || text === 'hey') {
      const token = process.env.WATI_API_KEY; // wati_a2dc587c...
      const tenant = process.env.WATI_TENANT_ID || '10141519';

      const url = `https://live-server-${tenant}.wati.io/api/v1/sendSessionMessage/${waId}`;

      const watiRes = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: token as string,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messageText: 'Hi 👋 Welcome to Bhawani Spaces! 🏠\nTell me what you are looking for?',
        }),
      });

      const result = await watiRes.text();
      console.log('WATI SEND:', watiRes.status, result);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('WEBHOOK ERROR', err);
    return NextResponse.json({ success: true });
  }
}

export async function GET() {
  return NextResponse.json({ status: 'Active' });
}
