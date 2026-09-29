import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const waId = body.waId;
    const text = (body.text || '').toLowerCase().trim();

    console.log('INCOMING:', text, 'from', waId);

    if (!waId) return NextResponse.json({ success: true });

    const token = process.env.WATI_API_KEY?.trim();
    const tenant = process.env.WATI_TENANT_ID?.trim() || '10141519';

    if (!token) {
      console.error('MISSING WATI_API_KEY in Vercel Env!');
      return NextResponse.json({ success: true });
    }

    // Reply to any greeting
    if (text.includes('hi') || text.includes('hello') || text.includes('hey')) {
      const url = `https://live-server-${tenant}.wati.io/api/v1/sendSessionMessage/${waId}`;

      console.log('SENDING TO:', url);

      const watiRes = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messageText:
            'Hi 👋 Welcome to Bhawani Spaces! 🏠\nTell me what you are looking for?\n\n1. Office Space\n2. Coworking\n3. Meeting Room',
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
  return NextResponse.json({ status: 'Active - Bhawani Spaces Webhook' });
}
