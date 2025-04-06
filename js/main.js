simpleCart({
        cartColumns: [
{ attr: "thumb", label: false, view: "thumb" },
{ attr: "name", label: false, view: "link" },
{ view: "remove", text: false, label: !1 },
{ attr: "price", label: false, view: "harga" },
{ attr: "warna", label: 'Warna', view: "warna" },
{ attr: "varian", label: false, view: "varian" },
{ view: "decrement", label: false },
{ attr: "quantity", label: 'false', view: "qty" },
{ view: "increment", label: false },
{ attr: "total", label: false, view: "currency" },
{ attr: "link", label: false, view: "link" },
],
        currency: "IDR",
});