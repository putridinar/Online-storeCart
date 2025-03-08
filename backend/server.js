require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const midtransClient = require("midtrans-client");

const app = express();
app.use(cors()); // Mengizinkan akses dari Jekyll (frontend)
app.use(bodyParser.json());

// Konfigurasi Midtrans (gunakan .env untuk menyimpan kunci)
let snap = new midtransClient.Snap({
    isProduction: false, // Ubah ke true jika live
    serverKey: process.env.MIDTRANS_SERVER_KEY
});

// Endpoint untuk mendapatkan token pembayaran dari Midtrans
app.post("/midtrans/token", async (req, res) => {
    try {
        let { total, items } = req.body;

        let parameter = {
            transaction_details: {
                order_id: "order-" + new Date().getTime(),
                gross_amount: total
            },
            item_details: items,
            customer_details: {
                first_name: "Customer",
                email: "customer@example.com"
            }
        };

        let transaction = await snap.createTransaction(parameter);
        res.json({ token: transaction.token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Jalankan server di port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});