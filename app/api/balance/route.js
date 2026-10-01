// File: app/api/balance/route.js - FIXED for original number lookup
export async function POST(req) {
  try {
    const body = await req.json();
    console.log('WATI Body:', body);

    // WATI can send waId in different fields
    const waIdRaw = body.waId || body.whatsappNumber || body.phone || body.contact?.waId || '';
    const messageText = (body.text || body.message?.text || body.body || '').toLowerCase();
    const contactName = body.contact?.name || 'Customer';

    if (!waIdRaw) return Response.json({ success: false, error: 'No waId' });

    // Normalize original number: remove + and spaces
    const originalNumber = waIdRaw.toString().replace(/\+/g, '').replace(/\s/g, '').trim();
    console.log('Original Number:', originalNumber);

    if (!messageText.includes('balance') && !messageText.includes('khata')) {
      return Response.json({ success: true, ignored: true });
    }

    // === DUMMY DB WITH STRING KEYS (original numbers) ===
    const dummyBalances = {
      919425544397: { name: 'Bhawani Traders Owner', balance: '₹ 0', status: 'Paid' },
      919000000000: { name: 'Crontex', balance: '₹ 12,500 Dr', status: 'Pending' },
      919876543210: { name: 'Sharma Paints', balance: '₹ 8,250 Dr', status: 'Pending' },
    };

    // Use ORIGINAL number to get balance
    let customer = dummyBalances[originalNumber];

    // If number not in DB, generate dummy based on original number
    if (!customer) {
      const randomBal = Math.floor(Math.random() * 25000) + 1000;
      customer = {
        name: contactName,
        balance: `₹ ${randomBal} Dr`,
        status: 'Pending',
      };
    }

    const replyMessage = `*Bhawani Hardware & Paints*\n\nHi ${customer.name} 👋\nNumber: ${originalNumber}\n\nYour balance is:\n*${customer.balance}*\nStatus: ${customer.status}\n\n_Dummy data - Tally later._\n\nType *Hi* for menu`;

    const WATI_TOKEN = process.env.WATI_API_TOKEN;
    const TENANT_ID = process.env.WATI_TENANT_ID || '10141519';

    if (!WATI_TOKEN) {
      return Response.json({
        success: true,
        originalNumber,
        reply: replyMessage,
        note: 'Add token to send real WhatsApp',
      });
    }

    const watiUrl = `https://live.wati.io/${TENANT_ID}/api/v1/sendSessionMessage/${originalNumber}`;

    const watiRes = await fetch(watiUrl, {
      method: 'POST',
      headers: { Authorization: `Bearer ${WATI_TOKEN}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ messageText: replyMessage }),
    });

    const result = await watiRes.json();
    return Response.json({
      success: true,
      originalNumber,
      balance: customer.balance,
      watiResult: result,
    });
  } catch (err) {
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function GET() {
  return Response.json({ status: 'OK - Use original number', example: '919425544397 => ₹ 0' });
}
