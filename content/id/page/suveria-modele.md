---
tytul: Model kecerdasan digital di Suveria
opis: Sumber model bagi Suveria, cara memilihnya, apa yang terjadi saat model berganti, dan prinsip terbuka yang dimaksudkan diikuti asisten
grupa: suveria
kolejnosc: 4
menu: Model
---
# Model kecerdasan digital di Suveria

Model kecerdasan digital adalah program yang membaca kata-kata Anda dan menyusun jawaban; asisten Suveria dimaksudkan bekerja dengan model tersebut. Halaman ini menjelaskan sumber model, cara memilihnya, apa yang terjadi saat model berganti, dan prinsip yang dimaksudkan diikuti asisten secara terbuka.

Saat ini Suveria masih berupa rancangan. Catatan hasil whitepaper (status pada 29 Oktober 2026) menyatakan dengan jelas: kami belum menjalankan model apa pun di Suveria ataupun satu pun percobaan yang dijelaskan. Semua uraian berikut merupakan niat dan kandidat, bukan layanan yang berfungsi.

Selengkapnya: [whitepaper Suveria, bab 9](../whitepaper-suveria.md#s9).

## Mengapa model terbuka

Dasar rancangan ini adalah model terbuka, yaitu model yang disediakan dengan syarat yang memungkinkan pengoperasian secara mandiri. Dengan demikian, yayasan dapat menyediakannya dengan harga yang praktis sesuai biaya dan memusatkan pekerjaan pada lingkungan pribadi untuk menggunakan model yang sudah ada, sambil mempertahankan kemungkinan mengembangkan model sendiri pada masa depan.

Pada awalnya kami ingin menggunakannya melalui penyedia komputasi konfidensial, dan jika perhitungan serta kondisi membenarkan, pada server sendiri. Manifesto menegaskan bahwa Suveria adalah "jalan terbaik kami menuju kerja pribadi dengan kecerdasan digital, bukan tujuan pada dirinya sendiri": jika model dapat dijalankan pada perangkat sendiri atau muncul cara perlindungan yang lebih baik, sebagian jalan ini akan menjadi tidak diperlukan.

Selengkapnya: [manifesto, bagian 3.1](../manifest.md#s3-1) dan [whitepaper Suveria, bab 6](../whitepaper-suveria.md#s6).

## Cara memilih model

Suveria dimaksudkan tersedia bagi orang di seluruh dunia dalam bahasa mereka sendiri. Karena itu, dalam memilih model kami mempertimbangkan:

- mutu dalam banyak bahasa;
- pemahaman maksud;
- keandalan;
- lisensi, yaitu syarat penggunaan model yang diizinkan pembuatnya;
- biaya;
- apakah model dapat dijalankan dalam lingkungan terlindungi yang kami uraikan pada halaman [Privasi dan keamanan](suveria-prywatnosc.md).

Kami memilih model yang lebih besar hanya jika model itu jelas lebih baik dalam melaksanakan tugas yang penting bagi manusia. Tolok ukur yayasan dimaksudkan membantu dalam hal ini, yaitu kumpulan tugas dan aturan penilaian untuk memeriksa perilaku model; saat ini tolok ukur tersebut merupakan program penelitian tanpa hasil.

Whitepaper menyebut dua kandidat. Keduanya merupakan kandidat untuk diperiksa, bukan keputusan: model pertama dan tingkat mutu yang dapat diterima masih perlu diputuskan.

- **DeepSeek-V4.1-Flash.** Model dengan lisensi MIT yang juga mengizinkan penggunaannya untuk layanan. Produsen menyatakan 552 miliar parameter bagian utama (parameter adalah angka yang ditentukan selama pelatihan model) dan ingatan tambahan bernama Engram dengan 196 miliar parameter. Untuk setiap kata, hanya 8–16 miliar di antaranya yang bekerja, sehingga model menjawab dengan cepat dan murah, meskipun untuk menjalankannya diperlukan setidaknya empat kartu grafis modern. Angka parameternya disimpan dalam bentuk yang lebih ringkas (kuantisasi). Ini menghemat memori tetapi dapat menurunkan mutu, sehingga akan kami periksa melalui tugas sendiri.
- **Kimi K3.1 Pro.** Produsen telah mengumumkan rencana penerbitan bobot lengkap, yaitu parameter, tetapi belum mengumumkan lisensinya. Setelah penerbitan, kami akan memeriksa antara lain ukuran, lisensi, dan ketersediaannya pada penyedia komputasi konfidensial, lalu menambahkan hasil bertanggal ke whitepaper, juga jika syaratnya ternyata tidak sesuai.

Selengkapnya: [whitepaper Suveria, bab 6](../whitepaper-suveria.md#s6) dan [whitepaper materi dan tolok ukur, bab 1](../whitepaper-materialy-i-benchmark.md#s1).

## Apa yang terjadi ketika model berganti

Pergantian atau penarikan model kami umumkan terlebih dahulu. Riwayat percakapan tetap Anda miliki: Anda dapat memilih model baru, mengekspor data, atau mengakhiri pekerjaan.

Titik pergantian model dimaksudkan terlihat dalam percakapan, dan pemindahan konteks pribadi ke model baru memerlukan keputusan Anda. Pergantian model juga dapat memerlukan pemeriksaan ulang perlindungan karena pembaruan tidak boleh diam-diam melemahkan mekanisme pengamanan yang disepakati.

Selengkapnya: [whitepaper Suveria, bab 6](../whitepaper-suveria.md#s6) dan [bab 9](../whitepaper-suveria.md#s9).

## Prinsip asisten akan dipublikasikan secara terbuka

Prinsip yang mendasari jawaban asisten akan kami terbitkan secara lengkap bersama setiap rilis. Di Suveria, Anda nantinya selalu dapat membaca instruksi lengkap asisten, yaitu prinsip tertulis yang mendasari jawabannya, serta uraian cara kerja: cara membagi tugas menjadi langkah, menggunakan ingatan, dan memeriksa jawaban.

Infrastruktur bersama dimaksudkan hanya menyediakan model dan pengaturan yang lulus percobaan tolok ukur terbuka. Di atas standar minimum ini, Anda memilih gaya kerja, dari menata pemikiran dengan tenang hingga percakapan menantang ketika asisten menunjukkan celah penalaran.

Kami ingin mengelola pustaka terbuka berisi instruksi yang telah diuji, yang diperbaiki peserta di OmniForum (ruang bersama untuk percakapan dan keputusan) serta diperiksa melalui tolok ukur. Pustaka ini belum ada.

Selengkapnya: [whitepaper Suveria, bab 4](../whitepaper-suveria.md#s4) dan [bagian 4.1](../whitepaper-suveria.md#s4-1).

## Asisten, Kanon Pribadi, dan Teleskop Pemikiran

Ingatan percakapan terdahulu dimaksudkan bekerja dengan persetujuan Anda dan dapat disunting secara terbuka: setiap entri dapat dihapus atau diperbaiki serta dilihat asalnya. Asisten membedakan dengan jelas sarannya sendiri dari pendirian yang secara sadar diterima seseorang sebagai pendiriannya.

Kanon Pribadi adalah kumpulan prinsip dan nilai yang Anda tulis dan terima sebagai milik sendiri. Teleskop Pemikiran dimaksudkan memungkinkan Anda melihat catatan perenungan dari berbagai waktu dan perubahannya, serta membandingkan situasi yang Anda tunjuk dengan Kanon. Ide ini tumbuh dari jendela Overton, yaitu rentang ide yang dianggap dapat diterima masyarakat pada suatu waktu. Bagi satu orang, ini adalah rentang pemikiran yang pada suatu waktu dianggap dapat diterima untuk dirinya; Teleskop dimaksudkan menjadi jendela seperti itu bagi satu orang dan hanya bagi orang tersebut.

Model menunjukkan kemungkinan keterkaitan beserta sumber prinsip yang dirujuk, dan interpretasinya dapat diperbaiki atau ditolak. Kami tidak membuat skor moralitas ataupun peringkat publik. Pada versi pertama, Teleskop hanya bekerja atas satu situasi yang Anda tunjuk dan tidak mengikuti kehidupan Anda secara berkelanjutan.

Selengkapnya: [whitepaper Suveria, bab 6](../whitepaper-suveria.md#s6) dan [bagian 6.1](../whitepaper-suveria.md#s6-1).

## Batas: apa yang dilakukan model dan yang tidak

- **Krisis.** Ketika percakapan menyangkut ancaman terhadap nyawa atau kesehatan, asisten dimaksudkan memberikan informasi bantuan yang tersedia, misalnya nomor darurat, tanpa mengirim apa pun ke luar lingkungan pribadi.
- **Pesan orang lain.** Pesan orang lain, misalnya dari kotak masuk surel yang dihubungkan, dapat memuat instruksi tersembunyi, sehingga konten eksternal kami pisahkan dari perintah Anda: saat menatanya, asisten tidak boleh mengirim pesan, membuka alamat jaringan, ataupun mengubah Kanon Pribadi sendiri tanpa konfirmasi Anda.
- **Pilihan pembuat.** Model itu sendiri juga membawa pilihan pembuatnya, misalnya topik yang dihindarinya; kami memeriksanya melalui tolok ukur dan menguraikannya ketika memilih model.
- **Tanpa akses tersembunyi.** Kami ingin mencegah penyalahgunaan tanpa membaca percakapan pribadi. Kami tidak membuat akses tersembunyi ke konten pribadi.

Selengkapnya: [whitepaper Suveria, bab 4](../whitepaper-suveria.md#s4), [bab 3](../whitepaper-suveria.md#s3), dan [bab 6](../whitepaper-suveria.md#s6).

## Baca dan sampaikan pendapat Anda

Angka, catatan kaki, dan daftar isu yang perlu diputuskan tersedia dalam [whitepaper Suveria](../whitepaper-suveria.md), sedangkan cara penilaian model dalam [whitepaper materi dan tolok ukur](../whitepaper-materialy-i-benchmark.md). Jika ada hal yang membuat Anda bertanya-tanya atau tampak keliru, tandai bagian itu dan gunakan tombol "Saya punya masukan", atau tulis ke salve@novusignis.org.
