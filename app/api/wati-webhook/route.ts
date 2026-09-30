// import { NextRequest, NextResponse } from 'next/server';

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const waId = body.waId;
//     const text = (body.text || '').toLowerCase().trim();

//     console.log('INCOMING:', text, 'from', waId);

//     if (!waId) return NextResponse.json({ success: true });

//     const token = process.env.WATI_API_KEY?.trim();
//     const tenant = process.env.WATI_TENANT_ID?.trim() || '10141519';

//     if (!token) {
//       console.error('MISSING WATI_API_KEY in Vercel Env!');
//       return NextResponse.json({ success: true });
//     }

//     // Reply to any greeting
//     if (text.includes('hi') || text.includes('hello') || text.includes('hey')) {
//       const url = `https://live-server-${tenant}.wati.io/api/v1/sendSessionMessage/${waId}`;

//       console.log('SENDING TO:', url);

//       const watiRes = await fetch(url, {
//         method: 'POST',
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           messageText:
//             'Hi 👋 Welcome to Bhawani Spaces! 🏠\nTell me what you are looking for?\n\n1. Office Space\n2. Coworking\n3. Meeting Room',
//         }),
//       });

//       const result = await watiRes.text();
//       console.log('WATI SEND:', watiRes.status, result);
//     }

//     return NextResponse.json({ success: true });
//   } catch (err) {
//     console.error('WEBHOOK ERROR', err);
//     return NextResponse.json({ success: true });
//   }
// }

// export async function GET() {
//   return NextResponse.json({ status: 'Active - Bhawani Spaces Webhook' });
// }

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
    if (!token) return NextResponse.json({ success: true });

    const baseUrl = `https://live-server-${tenant}.wati.io/api/v1`;

    // 1. If user says Hi -> Send Buttons (like your screenshot)
    if (text.includes('hi') || text.includes('hello') || text.includes('hey')) {
      await fetch(`${baseUrl}/sendInteractiveButtonsMessage/${waId}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          body: 'Thank you for contacting Bhawani Traders 🙏\n\nWe have Paints, Hardware, Tools & Sanitary at best price in Bilaspur.\n\nWhat do you need today?',
          buttons: [{ text: 'Contact US' }, { text: 'Visit us' }, { text: 'Price List' }],
        }),
      });
    }
    // 2. Handle button clicks - NO extra rules needed!
    else if (text === 'contact us') {
      await fetch(`${baseUrl}/sendSessionMessage/${waId}`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messageText: '📍 Bhawani Traders, Bilaspur\n📞 +91 94255 544397\n🕒 Open 9AM - 9PM',
        }),
      });
    } else if (text === 'visit us' || text === 'price list') {
      await fetch(`${baseUrl}/sendSessionMessage/${waId}`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messageText:
            text === 'visit us'
              ? '🌐 Location: https://maps.app.goo.gl/your-link\n'
              : '💰 Send your list - we will share best price!',
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('WEBHOOK ERROR', err);
    return NextResponse.json({ success: true });
  }
}

export async function GET() {
  return NextResponse.json({ status: 'Active - Bhawani Trader Webhook' });
}