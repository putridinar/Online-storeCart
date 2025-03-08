simpleCart({
  checkout: {
    type: "PayPal",
    email: "you@yours.com",
  },

  tax: 0.05, // 5% tax
  
  cartStyle: "div", // Pastikan ada elemen <div>

  cartColumns: [
    { attr: "name", label: "Name" },
    { attr: "price", label: "Price", view: "currency" },
    { attr: "size", label: "Size" },
    { attr: "color", label: "Color" },
    { view: "decrement", label: false, text: "- 1" },
    { attr: "quantity", label: "Qty" },
    { view: "increment", label: false, text: "+ 1" },
    { attr: "total", label: "SubTotal", view: "currency" },
    { view: "remove", text: "Remove", label: false },
  ]
});

simpleCart.currency({
  code: "IDR",
  name: "Indonesian Rupiah",
  symbol: "Rp",
  delimiter: ".",
  decimal: ",",
  after: false, // Agar formatnya "Rp 1.000" bukan "1.000 Rp"
  accuracy: 0
});