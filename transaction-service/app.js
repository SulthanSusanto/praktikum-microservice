const express = require('express');
const sequelize = require('./config/db');
const db = require('./models');
// import file route disini

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('API aktif!'));

// tambahkan routing kamu dibawah sini

const transactionRoutes = require('./routes/transaction.route');

app.use('/api/transactions', transactionRoutes);

// Koneksi ke database
sequelize
  .authenticate()
  .then(() => {
    console.log('✅ Terkoneksi ke MySQL');
    return db.sequelize.sync({ alter: true });
  })
  .then(() => {
    console.log('✅ Sinkronisasi selesai');
  })
  .catch((err) => {
    console.error('❌ Gagal konek:', err);
  });

// Jalankan server
app.listen(3000, () => {
  console.log('🚀 Server jalan di http://localhost:3000');
});
