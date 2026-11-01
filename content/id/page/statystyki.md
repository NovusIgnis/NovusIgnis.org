---
tytul: Statistik situs
opis: Frekuensi pembacaan situs dan dokumen kami, dihitung secara agregat dari log server, tanpa skrip analitik dan tanpa cookie
grupa: skroty
kolejnosc: 11
menu: Statistik situs
---
# Statistik situs

Kami ingin mengetahui perubahan minat terhadap yayasan dan teks yang paling sering dibaca, serta menunjukkannya secara terbuka. Kami menghitungnya dengan cara paling sederhana: dari log server yang memang mencatat setiap pengambilan halaman. Situs tidak memiliki skrip analitik, cookie, ataupun sesuatu yang mengenali Anda pada kunjungan berikutnya.

**Status pada 31 Oktober 2026.** Situs sedang beralih ke paket hosting yang menyediakan log server. Kami mulai menghitung statistik sejak November 2026; aturan di bawah berlaku sejak bulan pertama yang dihitung.

## Apa yang kami hitung

- **Tampilan halaman:** frekuensi pengambilan setiap halaman dan dokumen, terpisah dalam bahasa Polandia dan Inggris.
- **Unduhan berkas:** misalnya `llms-full.txt`, yaitu manifesto dan whitepaper dalam satu berkas.
- **Kunjungan bot** dalam empat kelompok: mesin pencari; bot perusahaan yang membangun model kecerdasan digital; model yang membaca situs atas permintaan manusia, misalnya ketika seseorang meminta asisten digital yang digunakannya membaca manifesto; bot lain.
- **Berkas untuk model:** frekuensi pengambilan `llms.txt` dan `llms-full.txt` oleh bot model.

## Apa yang tidak kami catat

- Alamat IP, deskripsi lengkap peramban, ataupun hal lain yang memungkinkan pengenalan satu orang.
- Riwayat kunjungan satu orang: kami tidak menggabungkan tampilan halaman menjadi kunjungan ataupun profil.
- Data dari situs dan layanan lain.

Karena itu, kami tidak mengetahui jumlah orang yang berkunjung, hanya frekuensi pengambilan halaman. Satu orang dapat membuka halaman beberapa kali, dan sebagian bot menyamar sebagai peramban biasa, sehingga angkanya bersifat perkiraan.

## Cara menghitung

Setiap minggu, kami mengunduh log server dari panel perusahaan Infomaniak yang mengelola situs karena log hanya disimpan di sana selama beberapa hari. Pada akhir bulan, skrip `tools/statystyki.mjs` hanya menghitung jumlah yang disebutkan di atas dan menyimpannya tanpa alamat IP serta deskripsi peramban. Salinan log yang diunduh kami simpan paling lama hingga akhir bulan dan langsung dihapus setelah penghitungan. Aturan pemrosesan data dijelaskan pada halaman [Data Anda](twoje-dane.md).

## Hasil

{{statystyki}}
