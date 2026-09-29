import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('WATI WEBHOOK:', JSON.stringify(body, null, 2));

    const waId = body.waId || body.data?.waId || body.from || '';
    const text = (body.text || body.data?.text || body.message?.text || '')
      .toString()
      .toLowerCase()
      .trim();

    // Auto-reply when someone says hi
    if (waId && (text === 'hi' || text === 'hello' || text === 'hii')) {
      const token = process.env.WATI_API_KEY;
      const tenantId = process.env.WATI_TENANT_ID;

      // For your account - new Cloud API URL
      const url = `https://live-server-${tenantId}.wati.io/api/v1/sendSessionMessage/${waId}`;

      await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messageText: 'Hello 👋 Welcome to Bhawani Spaces! Tell me what space you need?',
        }),
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ success: true }, { status: 200 });
  }
}

export async function GET() {
  return NextResponse.json({ status: 'WATI Webhook Active - bhawanispaces.com' });
}
