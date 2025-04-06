export async function onRequestPost(context) {
  const { request } = context;
  const body = await request.json();

  const response = await fetch("https://app.sandbox.midtrans.com/snap/v1/transactions", {
    method: "POST",
    headers: {
      "Authorization": "Basic " + btoa("SB-Mid-server-CyKGMYV99Y-uQX8Cdhnewuxy" + ":"),
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      transaction_details: {
        order_id: "order-" + Date.now(),
        gross_amount: body.total
      },
      item_details: body.items,
      customer_details: {
        first_name: body.customer.first_name,
        last_name: body.customer.last_name,
        email: body.customer.email,
        billing_address: {
          ...body.customer.address
        }
      }
    })
  });

  const snap = await response.json();
  return new Response(JSON.stringify(snap), {
    headers: { "Content-Type": "application/json" }
  });
}