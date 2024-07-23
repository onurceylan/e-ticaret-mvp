const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Public klasörünü statik dosyalar için kullan
app.use(express.static(path.join(__dirname, 'public')));

// Ana sayfa
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'anaSayfa.html'));
});

// Diğer sayfalar
app.get('/girisYap', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'girisYap.html'));
});

app.get('/urun-ekleme-sayfasi', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'urun-ekleme-sayfasi.html'));
});

app.get('/uyeOl', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'uyeOl.html'));
});

app.get('/hesapSayfasi', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'hesapSayfasi.html'));
});

app.get('/urunSayfasi', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'urunSayfasi.html'));
});

// Sunucuyu başlat
app.listen(PORT, () => {
    console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});
