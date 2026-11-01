---
tytul: Privasi dan keamanan Suveria
opis: Dari siapa Suveria dimaksudkan melindungi percakapan, jalur pesan dalam sistem, siapa yang memegang kunci, dan cara kami memeriksa perlindungannya
grupa: suveria
kolejnosc: 2
menu: Privasi dan keamanan
---
# Privasi dan keamanan Suveria

Halaman ini ditujukan bagi orang yang ingin mengetahui bentuk perlindungan privasi yang direncanakan di Suveria sebelum mempercayakan percakapannya. Halaman ini memperdalam [Apa itu Suveria](suveria.md) dan menautkan setiap bagian ke whitepaper.

Satu prinsip menata keseluruhannya: privasi tidak boleh bertumpu pada kepercayaan terhadap niat baik yayasan ataupun administrator server, melainkan pada mekanisme pengamanan yang cara kerjanya dapat diperiksa secara independen. Manifesto menyatakannya demikian: "Setiap janji keamanan harus memiliki bukti dalam kode dan silikon, bukan hanya dalam kata-kata kami." Perangkat Anda sendiri dimaksudkan menjadi tempat utama penyimpanan percakapan, dan kami tidak membuat akses tersembunyi ke konten pribadi.

Saat ini Suveria masih berupa rancangan. Semua uraian berikut menjelaskan cara kerja yang dituju; belum ada satu pun percobaan untuk mengonfirmasinya yang kami jalankan.

Selengkapnya: [manifesto, bagian 2.2](../manifest.md#s2-2) dan [bagian 3.1](../manifest.md#s3-1).

## Pihak yang menjadi sasaran perlindungan dan batasnya

Kami melindungi konten percakapan dan berkas, riwayat serta ingatan asisten, kunci (yaitu rangkaian karakter rahasia yang membuka data terenkripsi), data penagihan, dan metadata, yaitu informasi tentang sambungan itu sendiri: waktu, alamat jaringan, dan ukuran permintaan.

Lingkungan konfidensial adalah bagian server yang diisolasi oleh perangkat keras, yang isinya bahkan tidak dapat dilihat administratornya. Kebenarannya dimaksudkan dikonfirmasi melalui atestasi, yaitu pengesahan bertanda tangan perangkat keras tentang perangkat lunak yang berjalan pada server dan mode perlindungannya. API konfidensial adalah lingkungan seperti itu pada penyedia eksternal yang dihubungi aplikasi kami (API adalah sambungan antarprogram). Tabel ini menjelaskan cara kerja yang dituju, yang belum diperiksa melalui percobaan:

| Dari siapa perlindungan ditujukan | Model pada perangkat Anda | Lingkungan konfidensial pada server | API konfidensial penyedia eksternal |
| --- | --- | --- | --- |
| Administrator penyedia | tidak berlaku: pemrosesan pada perangkat | dimaksudkan melindungi: isolasi perangkat keras | pernyataan penyedia, perlu diperiksa |
| Pengamat jaringan | tidak berlaku tanpa jaringan; lalu lintas integrasi perlu dinilai | perlindungan sebagian: konten terenkripsi, metadata memerlukan langkah terpisah | perlindungan sebagian jika kunci sambungan terikat pada atestasi |
| Orang dengan akses fisik ke server | tidak berlaku; akses ke perangkatlah yang penting | tidak melindungi: di pusat data pihak lain penyedia memiliki akses; pada perangkat keras sendiri ada pengawasan fisik yang terlihat | tidak melindungi: penyedia memiliki akses |
| Yayasan | tidak berlaku: yayasan tidak terlibat dalam pemrosesan | dimaksudkan melindungi: isolasi juga mencakup kami, Anda memegang kunci penyimpanan | dimaksudkan melindungi konten: gerbang, yaitu bagian kami yang menagih permintaan, tanpa melihat konten; titik berakhirnya enkripsi akan kami tunjukkan sebelum uji coba |

Keterangan: "dimaksudkan melindungi" berarti perlindungan yang dituju, "perlindungan sebagian" melindungi konten tetapi tidak semua hal di sekitarnya, "tidak melindungi" menyatakan batas dengan tegas, sedangkan "pernyataan penyedia, perlu diperiksa" berarti kami belum mengonfirmasi perlindungan sebelum memeriksanya sendiri. Administrator penyedia adalah pengelola server tempat model berjalan; pengamat jaringan melihat lalu lintas antara perangkat Anda dan server, tetapi konten terenkripsi selama pengiriman; orang dengan akses fisik dapat membuka casing server; yayasan adalah kami sebagai operator layanan.

Ada tiga batas yang perlu diketahui sejak awal. Komputasi konfidensial tidak memperbaiki ponsel atau komputer yang terinfeksi. Komputasi ini tidak melindungi dari semua orang yang memiliki akses fisik ke server: pada 2025, peneliti membuat perangkat berharga kurang dari seribu dolar yang, dengan akses fisik ke server, memungkinkan pemalsuan pengesahan perangkat keras. Perlindungan pada server juga bertumpu pada kunci produsen prosesor, dan produsen tersebut harus jujur.

Selengkapnya: [whitepaper Suveria, bab 2](../whitepaper-suveria.md#s2) dan [bagian 2.3](../whitepaper-suveria.md#s2-3).

## Jalur pesan dalam sistem

Suveria dimaksudkan terdiri atas aplikasi pada perangkat Anda, gerbang (bagian sistem kami yang menagih permintaan dan menjaga batas pengeluaran), lingkungan konfidensial dengan model, penyimpanan salinan terenkripsi, dan perantara opsional yang menyembunyikan alamat Anda.

Dalam opsi yang dituju, satu pesan dimaksudkan menempuh jalur berikut:

1. Aplikasi mengunduh uraian rilis yang disetujui dan memeriksa atestasi server.
2. Aplikasi membandingkan pengesahan itu dengan kebijakan terbuka. Kunci untuk mengenkripsi pesan harus terikat padanya.
3. Hanya setelah pemeriksaan berhasil, aplikasi membuat sambungan terenkripsi. Ketidaksesuaian menghentikan pengiriman data; peralihan ke opsi lain memerlukan pilihan sadar Anda.
4. Lingkungan memproses permintaan dengan akses terbatas ke jaringan dan alat, mengembalikan hasil, lalu menghapus data kerja sesuai kebijakan yang diterbitkan.
5. Percakapan atau ingatan hanya disimpan dalam cakupan yang Anda pilih.

Atestasi membantu menentukan apa yang dijalankan, tetapi tidak dengan sendirinya membuktikan bahwa kode itu aman; tinjauan kode serta kesempatan pemeriksaan independen diperlukan. Sebelum uji coba, kami akan menunjukkan dalam aplikasi titik berakhirnya enkripsi yang dikendalikan perangkat Anda dan apakah gerbang melihat konten.

Kami sangat berhati-hati ketika Anda menghubungkan sumber berisi pesan orang lain, misalnya kotak masuk surel. Pesan orang lain dapat memuat instruksi tersembunyi yang mencoba mendorong model mengungkap ingatan pribadi. Karena itu, asisten tidak boleh mengirim pesan, membuka alamat jaringan, ataupun mengubah Kanon Pribadi (kumpulan prinsip dan nilai Anda) sendiri tanpa konfirmasi manusia.

Bersamaan dengan peluncuran layanan, kami akan menerbitkan daftar semua jenis data operasional layanan yang dikumpulkan, beserta tujuan dan masa penyimpanannya. Kami tidak mengumpulkan data di luar daftar itu.

Selengkapnya: [whitepaper Suveria, bab 3](../whitepaper-suveria.md#s3).

## Kunci Anda

Kunci kontainer pribadi, yaitu kumpulan data terenkripsi, tetap berada di bawah kendali Anda. Yayasan tidak menyimpan kunci ataupun bagiannya, sehingga tidak dapat memulihkan akses untuk Anda atau menyerahkan data Anda. Pemulihan akun pada operator tidak membuka konten.

Kehilangan semua salinan kunci dapat berarti kehilangan data secara permanen. Karena itu, kami mempertimbangkan cara pemulihan yang dapat dipadukan: perangkat kedua dengan akses, kunci yang dicatat di kertas atau pengelola kata sandi, kunci perangkat keras, atau pembagian kunci kepada beberapa orang tepercaya yang tidak satu pun dapat membaca data sendirian. Untuk awal, kami menyarankan perangkat kedua dan kunci yang dicatat di kertas. Setiap mekanisme kami periksa melalui percobaan pemulihan data.

Selengkapnya: [whitepaper Suveria, bagian 2.2](../whitepaper-suveria.md#s2-2).

## Yang tersembunyi tetapi membocorkan informasi: irama pengiriman

Jawaban mengalir kepada Anda dalam paket, yaitu bagian-bagian data. Enkripsi menyembunyikan isinya, tetapi tidak panjang ataupun iramanya. Inilah kanal samping: informasi bocor bukan dari konten, melainkan dari cara pengirimannya. Penelitian pada 2024–2025 menunjukkan bahwa pengamat jaringan dapat merekonstruksi topik, dan terkadang isi percakapan, dari hal ini. Karena itu, dalam mode konfidensial kami ingin mengirim jawaban dalam bagian berukuran tetap dengan irama tetap; akibatnya ada sedikit tambahan waktu tunda dan penggunaan kapasitas transmisi.

Selengkapnya: [whitepaper Suveria, bab 3](../whitepaper-suveria.md#s3).

## Rilis yang dapat diperiksa

Kepercayaan terhadap perangkat lunak dimaksudkan tidak bergantung pada satu orang ataupun yayasan saja. Setiap orang dapat membangun aplikasi sendiri dari kode yang diterbitkan dan memeriksa bahwa hasilnya identik dengan yang dipasang. Setidaknya dua pihak independen dari luar yayasan dimaksudkan mereproduksi rilis dan mengonfirmasi kecocokannya secara terbuka; sebelum menemukan mereka, kami menandai rilis sebagai belum dikonfirmasi pihak ketiga.

Kami merancang perlindungan penuh untuk aplikasi yang dipasang. Dalam peramban, kode pemeriksa server setiap kali disediakan operator, sehingga versi peramban akan menjelaskan secara tegas tingkat perlindungannya yang lebih rendah.

Selengkapnya: [whitepaper Suveria, bab 3](../whitepaper-suveria.md#s3).

## Banyak kartu grafis

Model yang ingin kami jalankan tidak muat pada satu kartu grafis, sehingga data juga mengalir antarkartu. Perlindungan harus diperiksa baik untuk kartu itu sendiri maupun sambungan di antaranya; label dagang "secure" tidak menggantikannya. Kami baru membandingkan penawaran penyedia setelah percobaan dengan aplikasi sendiri.

Selengkapnya: [whitepaper Suveria, bab 5](../whitepaper-suveria.md#s5).

## Cara kami memeriksa apakah perlindungan bekerja

Percobaan terpenting: tim dengan kewenangan operator di luar lingkungan konfidensial (gerbang, disk, jaringan, log) berusaha membaca percakapan akun uji yang disisipi rangkaian karakter rahasia. Jika siapa pun berhasil mengambilnya, termasuk kami, percobaan gagal.

Sebelum menyebut rilis mana pun konfidensial, kami akan mendokumentasikan antara lain atestasi yang benar, penolakan pengiriman data setelah penggantian kode atau kunci, ketiadaan konten dalam log, serta penghapusan dan pemulihan. Hasilnya, termasuk kegagalan, masuk ke catatan hasil. Status pada 29 Oktober 2026: kami belum menjalankan satu pun percobaan yang dijelaskan.

Kami ingin menjalankan percobaan secara terbuka. Jika Anda bekerja dalam keamanan, kriptografi, infrastruktur, atau aplikasi, atau ingin menelaah rancangan secara kritis, tulis ke salve@novusignis.org dengan subjek "[Bergabung] Percobaan Suveria".

Selengkapnya: [whitepaper Suveria, bab 9](../whitepaper-suveria.md#s9).

## Baca dan sampaikan pendapat Anda

Daftar lengkap opsi dan ancaman, mekanisme pengamanan aplikasi, serta daftar isu yang perlu diputuskan tersedia dalam [whitepaper Suveria](../whitepaper-suveria.md). Jika ada hal yang membuat Anda bertanya-tanya atau tampak keliru, tandai bagian dalam dokumen dan gunakan tombol "Saya punya masukan", atau tulis ke salve@novusignis.org.
