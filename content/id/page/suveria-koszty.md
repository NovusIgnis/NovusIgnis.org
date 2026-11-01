---
tytul: Berapa biaya Suveria
opis: Apa saja yang nantinya perlu dibayar di Suveria, hasil perhitungan bertanggal, dan mengapa itu perkiraan, bukan daftar harga
grupa: suveria
kolejnosc: 3
menu: Berapa biayanya
---
# Berapa biaya Suveria

Halaman ini menyangkut uang Anda: apa saja yang nantinya perlu dibayar di Suveria, cara menghitung tagihan, dan hasil perhitungan kami. Saat ini Suveria masih berupa rancangan. Layanan belum ada, sehingga belum ada harga apa pun. Angka di bawah berasal dari perhitungan tertanggal 29 Oktober 2026 (kecuali baris "Total" yang kami jumlahkan sendiri). Ini perhitungan di atas kertas, bukan daftar harga.

Selengkapnya: [whitepaper Suveria, bab 8](../whitepaper-suveria.md#s8).

## Apa yang Anda bayar

Prinsipnya sederhana: Anda membayar apa yang benar-benar digunakan beserta bagian biaya bersama yang dihitung secara adil (biaya yang tidak dapat dikaitkan dengan satu orang, misalnya keamanan atau akuntansi), mengetahui apa yang dibayar, dan menetapkan batas pengeluaran sendiri. Biaya layanan menutup biaya sesungguhnya dan tidak lebih. Segala sesuatu di atasnya merupakan donasi sukarela yang ditampilkan terpisah.

Tagihan memiliki dua bagian:

- **penggunaan nyata** dalam suatu siklus: komputasi, memori, transfer data;
- **bagian biaya tetap yang dialokasikan secara terbuka**, yang menjaga kesiapan infrastruktur: keamanan, pembayaran, akuntansi, dukungan operasional, keausan, dan penggantian perangkat keras.

Kami ingin membagi biaya bersama menurut aturan terbuka yang dipilih dalam uji coba: sebanding dengan penggunaan atau sama rata di antara akun aktif. Perkiraan biaya tugas dimaksudkan selalu dapat diperiksa, sedangkan bagian Anda atas biaya bersama akan kami umumkan sebelum siklus penagihan dan selalu berada dalam batas Anda. Setiap perubahan harga akan kami umumkan beserta alasan dan dampaknya bagi pengguna.

Selengkapnya: [whitepaper prinsip yayasan, bab 3](../whitepaper-zasady-fundacji.md#s3) dan [bagian 3.1](../whitepaper-zasady-fundacji.md#s3-1); [manifesto, bagian 6.1](../manifest.md#s6-1).

## Hasil perhitungan

Untuk perhitungan, kami mengasumsikan contoh pengguna: 20 pertanyaan per hari, setiap jawaban sepanjang sekitar 600 token (token adalah bagian teks, kira-kira satu kata pendek), setiap hari selama 30 hari. Ini merupakan model beban untuk percobaan, bukan prediksi. Harga berasal dari daftar harga terbuka, belum termasuk pajak.

Rilis pertama kemungkinan besar menggunakan API konfidensial (jika cukup dana terkumpul, rilis itu mungkin langsung berjalan pada server sendiri yang disewa): model kecerdasan digital berjalan pada penyedia eksternal yang menyatakan tidak membaca konten percakapan, dan kami akan memeriksa pernyataan itu. Di luar itu ada lingkungan pribadi: satu atau dua mesin konfidensial dengan gerbang, ingatan, dan berkas pengguna. Biaya ini tetap, sehingga paling besar pengaruhnya pada kelompok kecil.

| Per orang per bulan, jika Suveria digunakan oleh (perhitungan 29.10.2026) | 30 orang | 100 orang | 1000 orang |
| --- | --- | --- | --- |
| Komputasi saja dalam API konfidensial | 0,70–1,25 USD | 0,70–1,25 USD | 0,70–1,25 USD |
| Biaya tetap lingkungan pribadi (170–340 USD per bulan) | sekitar 6–11 USD | sekitar 1,70–3,40 USD | beberapa puluh sen |

Ini perkiraan di atas kertas: belum mencakup pekerjaan manusia, tinjauan keamanan, pembayaran, ataupun cadangan untuk gangguan, dan kecukupan ukuran mesin ini akan kami periksa dalam uji coba. Kami ingin menunjukkan biaya tetap secara terpisah dan menutupnya melalui anggaran dukungan uji coba, misalnya donasi untuk Suveria. Kami tidak beranggapan dana tersebut sudah dimiliki.

Selengkapnya: [whitepaper Suveria, bab 7](../whitepaper-suveria.md#s7) dan [bagian 8.1](../whitepaper-suveria.md#s8-1); [whitepaper prinsip yayasan, bagian 3.1](../whitepaper-zasady-fundacji.md#s3-1).

## Dari 30 orang hingga seluruh umat manusia

Contoh pengguna yang sama memungkinkan perhitungan beban kerja model pada jumlah orang yang berbeda. Dalam tabel, "puncak" adalah jam tersibuk dalam satu hari ketika Suveria digunakan orang dari berbagai zona waktu (sekitar 1,51 × rata-rata).

| Orang aktif | Pertanyaan per bulan | Teks jawaban pada puncak |
| --- | ---: | ---: |
| 30 | 18.000 | 6,3 token per detik |
| 100 | 60.000 | 20,9 token per detik |
| 1000 | 600.000 | 209 token per detik |
| 100 ribu | 60 juta | 20.921 token per detik |
| 1 juta | 600 juta | 209.208 token per detik |
| 1 miliar | 600 miliar | 209,2 juta token per detik |
| 10 miliar | 6 triliun | 2,09 miliar token per detik |

Berapa banyak perangkat keras yang diperlukan? Whitepaper menjalankan eksperimen pemikiran. Jika masing-masing dari 10 miliar orang menggunakan Suveria dengan cara ini, berdasarkan kinerja yang diukur untuk model DeepSeek-V4.1-Flash, diperlukan sekitar 2,25 juta kartu B200 dan daya sekitar 4 GW. Untuk satu miliar orang, jumlahnya sekitar 225 ribu kartu dan 0,4 GW, sedangkan untuk satu juta sekitar 225 kartu. Sebagai perbandingan, pada awal 2026 Epoch AI memperkirakan bahwa di seluruh dunia lebih dari 15 juta kartu setara H100 digunakan untuk kecerdasan digital dan memerlukan daya lebih dari 10 GW. Ini merupakan penyederhanaan: contoh pengguna ini hemat, sedangkan pekerjaan intensif, model lebih besar, dan gambar memerlukan berkali-kali lipat lebih banyak.

Kami tidak memberikan biaya per orang untuk jutaan orang: pada skala itu, perangkat keras, harga, dan cara memelihara layanan akan berubah, sehingga angka semacam itu hanya tebakan. Perhitungan 29.10.2026 hanya menunjukkan bahwa menurut asumsi kami, infrastruktur sendiri dapat menjadi lebih murah daripada API konfidensial pada belasan hingga beberapa puluh ribu orang aktif.

Selengkapnya: [whitepaper Suveria, bab 7](../whitepaper-suveria.md#s7).

## Mengapa kami menghitung dalam dolar

Harga layanan akan kami nyatakan dalam dolar karena daya komputasi dibeli dalam mata uang tersebut. Kami ingin menerima setoran juga dalam mata uang lain dengan kurs yang ditampilkan pada tagihan. Pembukuan yayasan kami lakukan dalam zloty.

Selengkapnya: [whitepaper prinsip yayasan, bagian 3.1](../whitepaper-zasady-fundacji.md#s3-1).

## Pembayaran di muka, pengembalian, pembulatan

- **Pembayaran di muka.** Anda memasukkan satu jumlah dan jumlah yang persis sama masuk ke saldo, terlepas dari metode pembayaran. Pembayaran di muka dimaksudkan disimpan pada rekening bank terpisah; kami tidak menggunakannya untuk menutup biaya yayasan sebelum layanan diberikan.
- **Batas.** Saat menyetor, Anda menetapkan jumlah maksimum yang ingin dibelanjakan. Batas dimaksudkan bekerja sebagai pembatas, bukan peringatan setelah kejadian. Ini persyaratan yang perlu dibangun dan diuji, bukan fungsi yang sudah berjalan.
- **Pengembalian.** Saldo yang belum digunakan dimaksudkan dapat diambil kembali kapan saja, dengan sasaran kelak cukup satu tombol; batas waktu pengembalian, kemungkinan biayanya, setoran minimum, dan rincian lain akan ditentukan dalam peraturan. Setelah akun ditutup atau layanan dihentikan, saldo dikembalikan otomatis melalui jalur yang sama. Saldo yang tidak diambil tidak masuk ke anggaran yayasan.
- **Pembulatan.** Saat pembuatan akun, kami menanyakan apakah Anda ingin membulatkan setiap tagihan ke atas menjadi dolar bulat atau nilai yang mendekatinya dalam mata uang setempat; selisihnya masuk sebagai donasi ke anggaran bersama. Kami bertanya alih-alih memilihkan opsi bagi orang lain, dan keputusan dapat diubah kapan saja melalui satu pengaturan.

Tagihan menampilkan biaya layanan dan jumlah donasi secara terpisah. Batas waktu pengembalian, setoran minimum, dan rincian lain akan ditentukan dalam peraturan yang disiapkan sebelum pembayaran di muka pertama diterima.

Selengkapnya: [whitepaper prinsip yayasan, bagian 3.2](../whitepaper-zasady-fundacji.md#s3-2) dan [bagian 3.3](../whitepaper-zasady-fundacji.md#s3-3); [whitepaper Suveria, bagian 8.3](../whitepaper-suveria.md#s8-3).

## Perbandingan dengan langganan

Harga langganan pada platform komersial biasanya menggabungkan dalam satu jumlah biaya penggunaan dengan pemeliharaan akun gratis, pemasaran, pengelolaan, dan laba investor, sementara pengguna tidak melihat bagian masing-masing komponen. Manifesto mengajukan hipotesis bahwa tanpa biaya tambahan tersembunyi ini, bahkan dengan jumlah peserta tetap yang relatif kecil, infrastruktur bersama dapat memberikan lebih banyak daya komputasi dan kecerdasan digital untuk setiap dolar yang dibelanjakan dibandingkan layanan tertutup, dengan privasi yang bertumpu pada mekanisme pengamanan yang dapat diperiksa.

Status hipotesis pada 29 Oktober 2026: perhitungan mendekatkan kita kepadanya, tetapi belum mengonfirmasinya. Pemrosesan dengan kerahasiaan yang dinyatakan sudah tersedia dalam daftar harga terbuka, sehingga kelompok kecil dapat memulainya dengan harga sesuai biaya, dan menurut asumsi kami, infrastruktur sendiri dapat menjadi lebih murah pada belasan hingga beberapa puluh ribu orang aktif. Kami tidak bersaing dalam harga dengan paket 100–200 USD yang, dalam pekerjaan agen intensif, memberikan nilai setara ribuan dolar menurut harga katalog API. Kami mengusulkan penagihan penggunaan nyata dengan privasi yang dapat diperiksa.

Selengkapnya: [manifesto, bagian 2.4](../manifest.md#s2-4); [whitepaper Suveria, bagian 8.1](../whitepaper-suveria.md#s8-1).

## Apa yang akan mengubah perhitungan

Kami memperbarui perhitungan setiap kali ada perubahan harga penting dan setelah setiap percobaan, sambil menyimpan versi terdahulu. Tiga hal akan menentukan dan kami periksa dalam percobaan:

- apakah kerahasiaan layanan ini lolos verifikasi independen;
- apakah mutu model yang tersedia memadai untuk tugas yang membuat orang datang ke Suveria;
- seperti apa profil lalu lintas yang sesungguhnya.

Kami ingin mengembangkan infrastruktur selangkah demi selangkah: mula-mula API konfidensial dan lingkungan pribadi pada mesin konfidensial, kemudian menyewa mesin konfidensial sendiri, selanjutnya membeli perangkat keras untuk pusat data eksternal, dan dalam jangka jauh, jika terbukti lebih menguntungkan, bangunan sendiri. Setiap langkah didukung data pengukuran dan kartu keputusan yang mencakup seluruh biaya, risiko, dan syarat penarikan diri. Pembelian server saat ini hanya kami hitung sebagai perkiraan, bukan penawaran.

Selengkapnya: [whitepaper Suveria, bagian 8.1](../whitepaper-suveria.md#s8-1) dan [bagian 8.2](../whitepaper-suveria.md#s8-2).

## Baca dan sampaikan pendapat Anda

Perhitungan lengkap beserta tabel opsi dan sumber harga tersedia dalam [whitepaper Suveria](../whitepaper-suveria.md#s8), sedangkan aturan tagihan, pembayaran di muka, dan pengembalian dalam [whitepaper prinsip yayasan](../whitepaper-zasady-fundacji.md#s3). Jika ada angka atau asumsi yang menurut Anda tidak sesuai, tandai bagian itu dalam dokumen dan gunakan tombol "Saya punya masukan", atau tulis ke salve@novusignis.org.
