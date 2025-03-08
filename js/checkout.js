<!-- Midtrans Snap.js -->
<script src="https://app.sandbox.midtrans.com/snap/snap.js" data-client-key="{{site.CLIENT_KEY}}"></script>

<!-- Tombol Checkout -->
<button id="pay-button">Checkout with Midtrans</button>

<script>
simpleCart.ready(function () {
    // Pastikan form checkout ada di halaman
    if (!$('form#checkout-form').length) {
        $('body').append('<form id="checkout-form" method="POST"></form>');
    }

    // Loop semua item dalam cart dan tambahkan ke form sebagai input hidden
    simpleCart.each(function (item, x) {
        $('#checkout-form').append('<input type="hidden" name="items[' + x + '][id]" value="' + item.get('id') + '">');
        $('#checkout-form').append('<input type="hidden" name="items[' + x + '][name]" value="' + item.get('name') + '">');
        $('#checkout-form').append('<input type="hidden" name="items[' + x + '][color]" value="' + item.get('color') + '">');
        $('#checkout-form').append('<input type="hidden" name="items[' + x + '][size]" value="' + item.get('size') + '">');
        $('#checkout-form').append('<input type="hidden" name="items[' + x + '][quantity]" value="' + item.get('quantity') + '">');
        $('#checkout-form').append('<input type="hidden" name="items[' + x + '][price]" value="' + item.get('price') + '">');
        $('#checkout-form').append('<input type="hidden" name="items[' + x + '][total]" value="' + item.get('total') + '">');
    });

    // Tombol Checkout dengan Midtrans
    document.getElementById("pay-button").addEventListener("click", function () {
        let totalAmount = simpleCart.grandTotal(); // Total harga
        let cartItems = simpleCart.items(); // Ambil daftar item dalam cart

        // Format daftar produk
        let items = cartItems.map(item => ({
            id: item.get("id") || "item-" + Math.random().toString(36).substring(7),
            name: item.get("name"),
            price: item.get("price"),
            quantity: item.get("quantity")
        }));

        // Data transaksi yang dikirim ke backend
        let transactionData = {
            total: totalAmount,
            items: items
        };

        // Kirim data ke backend untuk mendapatkan token Midtrans
        fetch("/midtrans/token", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(transactionData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.token) {
                // Tampilkan modal pembayaran Midtrans
                snap.pay(data.token, {
                    onSuccess: function (result) {
                        alert("Pembayaran berhasil!");
                        console.log(result);
                        simpleCart.empty(); // Kosongkan keranjang setelah pembayaran sukses
                    },
                    onPending: function (result) {
                        alert("Pembayaran pending!");
                        console.log(result);
                    },
                    onError: function (result) {
                        alert("Pembayaran gagal!");
                        console.log(result);
                    }
                });
            } else {
                alert("Gagal mendapatkan token pembayaran");
            }
        })
        .catch(error => console.error("Error:", error));
    });
});
</script>