export async function POST(req) {
  try {
    const body = await req.json();
    console.log('WATI Webhook Body:', JSON.stringify(body));

    // WATI sends different formats, handle both
    const waId = body.waId || body.whatsappNumber || body.phone || body.contact?.waId;
    const messageText = (body.text || body.message?.text || body.message?.body || '').toLowerCase();
    const contactName = body.contact?.name || 'Customer';

    if (!waId) {
      return Response.json({ success: false, error: 'No waId found' });
    }

    // Only reply if message contains "balance"
    if (
      !messageText.includes('balance') &&
      !messageText.includes('khata') &&
      !messageText.includes('outstanding')
    ) {
      return Response.json({ success: true, ignored: true });
    }

    // ========== DUMMY DATABASE (Replace with Tally later) ==========
    const dummyBalances = {
      919425544397: { name: 'Bhawani Traders Owner', balance: '₹ 0', status: 'Paid' },
      918950475004: { name: 'Crontex', balance: '₹ 12,500 Dr', status: 'Pending' },
      917999367389: { name: 'Sharma Paints', balance: '₹ 8,250 Dr', status: 'Pending' },
      DEFAULT: { balance: `₹ ${Math.floor(Math.random() * 25000) + 1000} Dr`, status: 'Pending' },
    };

    // Find customer or use random
    let customer = dummyBalances[waId] || dummyBalances['DEFAULT'];
    let customerName = customer.name || contactName;

    // Format reply message
    const replyMessage = `*Bhawani Hardware & Paints*\n\nHi ${customerName} 👋\n\nYour account balance:\n*${customer.balance}*\nStatus: ${customer.status}\n\n_Dummy data - Tally will be connected soon._\n\nFor payment details, type *PAY*\nType *Hi* for main menu`;

    // ========== SEND BACK VIA WATI API ==========
    const WATI_TOKEN = process.env.WATI_API_TOKEN; // Get from Wati > API Docs
    const TENANT_ID = process.env.WATI_TENANT_ID || '10141519'; // Your ID is 10141519

    if (!WATI_TOKEN) {
      console.error('Missing WATI_API_TOKEN');
      // Still return balance for testing
      return Response.json({
        success: true,
        reply: replyMessage,
        note: 'Add WATI_API_TOKEN in Vercel Env',
      });
    }

    const watiUrl = `https://live.wati.io/${TENANT_ID}/api/v1/sendSessionMessage/${waId}`;

    const watiRes = await fetch(watiUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${WATI_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messageText: replyMessage,
      }),
    });

    const watiResult = await watiRes.json();
    console.log('WATI Send Result:', watiResult);

    return Response.json({ success: true, sent: true, balance: customer.balance });
  } catch (err) {
    console.error(err);
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}

// Allow GET for testing in browser
export async function GET() {
  return Response.json({
    status: 'Dummy Balance API Running',
    usage: 'POST from WATI webhook with {waId, text}',
    dummyData: {
      919425544397: '₹ 0',
      'any other number': 'Random ₹1000-₹26000 Dr',
    },
  });
}
