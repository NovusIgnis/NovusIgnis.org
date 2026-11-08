---
tytul: Apa itu Suveria
opis: Ruang pribadi untuk bekerja dengan kecerdasan digital yang dirancang yayasan: apa yang diharapkan dapat dilakukan, perlindungan yang dituju, dan tahapnya saat ini
grupa: suveria
kolejnosc: 1
menu: Apa itu Suveria
---
# Apa itu Suveria

Halaman ini menjelaskan secara singkat seperti apa Suveria dimaksudkan, untuk siapa dikembangkan, dan pada tahap apa saat ini. Setiap bagian memiliki tautan ke whitepaper Suveria jika Anda ingin mengetahui lebih lanjut.

Suveria dimaksudkan menjadi ruang pribadi di internet tempat seseorang berbicara dengan kecerdasan digital, mengerjakan materi sendiri, dan kembali ke pemikiran terdahulu, seperti di rumah sendiri dengan pintu tertutup. Yayasan Novus Ignis merancangnya untuk orang dari mana pun di dunia.

Saat ini Suveria masih berupa rancangan. Suveria dikembangkan agar orang dapat berbicara dengan kecerdasan digital tentang kesehatan, hubungan, pekerjaan, uang, dan rencana hidup tanpa takut bahwa pemahaman sedekat itu tentang dirinya kelak dijadikan sumber pendapatan atau digunakan untuk memengaruhinya. Rilis pertama kami tujukan bagi orang yang memilihnya karena privasi yang dapat diperiksa.

Selengkapnya: [whitepaper Suveria, bab 1](../whitepaper-suveria.md#s1).

## Apa yang ingin kami mungkinkan

Di Suveria, kami ingin orang dapat:

- berbicara tentang urusan pribadi dan pekerjaan, sambil melihat di mana percakapan diproses dan siapa yang dapat melihatnya;
- mengerjakan dokumen dan berkas sendiri, lalu menyimpan hasilnya dan memindahkannya ke tempat lain dalam format terbuka;
- menyimpan percakapan, berkas, dan ingatan asisten terutama pada perangkat sendiri, dienkripsi dengan kunci di bawah kendali Anda;
- dengan persetujuan sendiri, menggunakan ingatan percakapan terdahulu dan membangun Kanon Pribadi, yaitu kumpulan prinsip dan nilai sendiri;
- memilih cara kerja, dari model pada perangkat sendiri hingga lingkungan konfidensial pada server, dengan mengetahui perlindungan yang diberikan masing-masing;
- membayar penggunaan nyata dengan batas pengeluaran yang ditetapkan sendiri;
- menyempurnakan pemikiran secara pribadi, lalu secara sadar membawanya ke percakapan bersama di OmniForum, yaitu ruang publik untuk percakapan dan keputusan.

Sejak hari pertama, Suveria dimaksudkan memberi rasa tenang seperti berada di rumah sendiri. Kami juga ingin memungkinkan pemindahan catatan dan arsip percakapan sendiri dari layanan kecerdasan digital lain. Menggunakan Suveria bukan persetujuan untuk menggunakan percakapan bagi pelatihan model.

Selengkapnya: [whitepaper Suveria, bab 1](../whitepaper-suveria.md#s1).

## Perlindungan yang dituju dan apa yang belum tersedia

Perlindungan dimaksudkan bertumpu pada mekanisme pengamanan yang dapat diperiksa secara independen, bukan kepercayaan kepada yayasan, termasuk kepada kami sebagai pengelola infrastruktur. Hingga kini belum ada pemeriksaan semacam itu.

Kami membandingkan beberapa cara kerja karena masing-masing melindungi dari hal yang berbeda:

- **Model pada perangkat Anda.** Percakapan tidak meninggalkan ponsel atau komputer kecuali asisten menggunakan integrasi dengan layanan daring; kondisi perangkat, kewenangan aplikasi, dan siapa yang memiliki akses fisik ke perangkat itu penting.
- **Lingkungan konfidensial pada server.** Server memiliki zona yang diisolasi oleh perangkat keras, yang tidak dapat dibaca bahkan oleh administrator server; di situlah model membaca konten. Perangkat keras dimaksudkan mengonfirmasinya melalui tanda tangan digital (inilah atestasi: pengesahan perangkat lunak apa yang berjalan pada mesin jarak jauh dan dalam mode perlindungan apa). Dalam hal ini, produsen prosesor tetap perlu dipercaya. Inilah opsi yang dituju.
- **API konfidensial penyedia eksternal.** API adalah sambungan yang digunakan aplikasi kami untuk mengirim percakapan ke model pada penyedia lain. Rilis pertama kemungkinan besar akan menggunakan API konfidensial; jika sebelum peluncurannya kami mengumpulkan cukup dana untuk menyewa server sendiri dalam lingkungan konfidensial, rilis itu mungkin langsung berjalan pada server tersebut. Pada awalnya, kerahasiaan di sini berupa pernyataan penyedia yang akan kami periksa; hingga percobaan memberikan hasil positif, opsi ini kami tandai sebagai perlindungan yang dinyatakan, bukan perlindungan konfidensial.
- **API biasa penyedia model.** Penyedia memiliki akses ke konten; ini bukan opsi bawaan Suveria pribadi.

Komputasi konfidensial tidak memperbaiki komputer yang terinfeksi dan tidak melindungi dari semua orang yang memiliki akses fisik ke server. Tidak ada opsi yang mendapat label "privasi penuh" sebelum konfigurasi tertentu diperiksa. Setiap percakapan dimaksudkan menunjukkan opsi yang Anda gunakan, dan pergantian opsi memerlukan keputusan sadar Anda.

Selengkapnya: [whitepaper Suveria, bab 2](../whitepaper-suveria.md#s2) dan [bagian 2.3](../whitepaper-suveria.md#s2-3). Lihat juga: [Privasi dan keamanan](suveria-prywatnosc.md).

## Model

Dasar rancangan ini adalah model terbuka yang dapat dijalankan secara mandiri. Dalam memilih model, kami mempertimbangkan antara lain mutu dalam banyak bahasa, keandalan, lisensi, biaya, serta kemungkinan menjalankannya dalam arsitektur perlindungan yang diperlukan.

Pergantian atau penarikan model kami umumkan terlebih dahulu, sedangkan riwayat percakapan tetap Anda miliki: Anda dapat memilih model penerus, mengekspor data, atau mengakhiri pekerjaan. Titik pergantian model dimaksudkan terlihat dalam percakapan.

Selengkapnya: [whitepaper Suveria, bab 6](../whitepaper-suveria.md#s6).

## Berapa biayanya

Manifesto mengajukan hipotesis bahwa infrastruktur bersama dapat memberikan lebih banyak daya komputasi dan kecerdasan digital untuk setiap dolar dibandingkan layanan tertutup. Whitepaper menghitungnya dalam perhitungan tertanggal 29 Oktober 2026: dengan profil penggunaan yang diasumsikan, API konfidensial dengan kerahasiaan yang dinyatakan memerlukan sekitar 0,70–1,25 USD per orang per bulan untuk komputasi saja. Di luar itu ada biaya tetap lingkungan pribadi, yang paling besar pengaruhnya ketika jumlah orang sedikit: dengan 30 peserta, sekitar 6–11 USD per orang per bulan.

Ini merupakan perkiraan di atas kertas, bukan daftar harga Suveria: perhitungan tidak mencakup pekerjaan manusia, tinjauan keamanan, pembayaran, ataupun cadangan untuk gangguan. Status hipotesis pada tanggal itu: perhitungan mendekatkan kita kepadanya, tetapi belum mengonfirmasinya.

Selengkapnya: [whitepaper Suveria, bab 8](../whitepaper-suveria.md#s8). Lihat juga: [Berapa biayanya](suveria-koszty.md).

## Status pekerjaan

Whitepaper memuat catatan hasil. Statusnya pada 29 Oktober 2026: kami belum menjalankan satu pun percobaan yang dijelaskan, belum menyewa kartu grafis, dan belum menjalankan model di Suveria. Pengukuran pertama kami rencanakan pada satu kartu grafis konfidensial dengan model yang lebih kecil.

Percobaan terpenting: tim dengan kewenangan operator berusaha membaca percakapan akun uji yang disisipi rangkaian karakter rahasia. Jika siapa pun berhasil mengambilnya, termasuk kami, percobaan gagal.

Kami ingin menjalankan percobaan secara terbuka. Jika Anda bekerja dalam keamanan, kriptografi, infrastruktur, atau aplikasi, atau ingin menelaah rancangan secara kritis, tulis ke salve@novusignis.org dengan subjek "[Bergabung] Percobaan Suveria".

Selengkapnya: [whitepaper Suveria, bab 9](../whitepaper-suveria.md#s9) dan [bagian 8.2](../whitepaper-suveria.md#s8-2).

## Mengapa Suveria adalah jalan, bukan tujuan

Manifesto menyatakannya dengan jelas:

> Suveria saat ini adalah jalan terbaik kami menuju kerja pribadi dengan kecerdasan digital, bukan tujuan pada dirinya sendiri. Jika model dapat dijalankan pada perangkat sendiri atau muncul cara perlindungan yang lebih baik, sebagian jalan ini akan menjadi tidak diperlukan, dan kami akan memandangnya sebagai kabar baik.

Selengkapnya: [manifesto, bagian 3.1](../manifest.md#s3-1).

## Baca dan sampaikan pendapat Anda

Uraian lengkap, beserta tabel opsi perlindungan, perhitungan biaya, dan daftar isu yang perlu diputuskan, tersedia dalam [whitepaper Suveria](../whitepaper-suveria.md). Jika ada hal yang membuat Anda bertanya-tanya atau tampak keliru, tandai bagian itu dalam dokumen dan gunakan tombol "Saya punya masukan", atau tulis ke salve@novusignis.org.
