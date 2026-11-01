# Suveria: kerja pribadi dengan kecerdasan digital

Versi 31 Oktober 2026. Dokumen ini mengembangkan prinsip-prinsip manifesto tentang Suveria: bagaimana kami ingin melindungi privasi, bagaimana kerja dengan kecerdasan digital direncanakan berlangsung, berapa biayanya, dan bagaimana kami akan memeriksanya. Arsitektur yang diuraikan merupakan rancangan. Menyebut teknologi yang sudah ada atau dokumentasi penyedia tidak berarti kami telah menjalankannya di Suveria. Hasil uji kami tambahkan dalam bab 9, selalu disertai tanggal, versi konfigurasi, dan cakupan pengukuran.

*Terjemahan ini dibuat oleh kecerdasan digital berdasarkan naskah asli berbahasa Polandia tertanggal 31 Oktober 2026. Jika terdapat perbedaan, naskah berbahasa Polandia yang berlaku.*

## 1. Apa itu Suveria dan untuk apa Suveria dibuat

Suveria dimaksudkan menjadi ruang pribadi di internet, tempat seseorang berbicara dengan kecerdasan digital, mengerjakan materi sendiri, dan kembali ke pemikiran terdahulu, seperti di rumah sendiri di balik pintu yang tertutup. Yayasan Novus Ignis dari Poznań merancang Suveria untuk orang di seluruh dunia; nilai-nilai yayasan dijelaskan dalam [manifesto](manifest.md). Suveria bertumpu pada model kecerdasan digital terbuka. Kami ingin menyediakan perangkat lunak kami sendiri sebagai barang publik digital dengan kode sumber terbuka.

Suveria dibuat karena makin banyak hal kita percayakan kepada percakapan dengan kecerdasan digital: pertanyaan tentang kesehatan, hubungan, pekerjaan, uang, dan rencana hidup. Dalam banyak layanan populer, isi percakapan semacam itu masuk ke server penyedia yang dapat membacanya, dan perlindungannya bergantung pada aturan penyedia serta kepercayaan kepadanya. Kami ingin orang dapat membicarakan hal-hal terpenting tanpa rasa takut bahwa pengetahuan sedekat itu tentang seseorang kelak akan dijadikan sumber uang atau dipakai untuk memengaruhinya. Kami juga ingin setiap orang membayar apa yang benar-benar digunakan, melihat apa yang dibayarnya, dan menetapkan sendiri batas pengeluaran.

Di Suveria, kami ingin orang dapat:

- berbicara dengan kecerdasan digital tentang urusan pribadi dan profesional, sambil melihat di mana percakapan diproses dan siapa yang dapat melihatnya;
- mengerjakan dokumen dan berkas sendiri, serta menyimpan hasil dan memindahkannya ke tempat lain dalam format terbuka;
- menyimpan percakapan, berkas, dan ingatan asisten terutama di perangkat sendiri, dienkripsi dengan kunci yang tetap berada di bawah kendali pengguna;
- dengan persetujuan sendiri, menggunakan ingatan percakapan terdahulu, kembali ke alasan keputusan dahulu, dan membangun Kanon Pribadi (*Canon Personalis*), yaitu kumpulan prinsip dan nilai sendiri;
- memilih cara kerja, dari model di perangkat sendiri hingga lingkungan konfidensial di server, dengan informasi jelas tentang perlindungan yang diberikan masing-masing;
- membayar penggunaan nyata, dengan batas pengeluaran yang ditetapkan sendiri;
- mematangkan pemikiran secara pribadi, lalu secara sadar membawanya ke percakapan bersama di Omniforum.

Rilis pertama kami tujukan kepada orang yang menjadikan privasi yang dapat diperiksa sebagai alasan memilih.

Kami ingin sejak hari pertama Suveria memberikan rasa tenang seperti berada di rumah sendiri, dalam bengkel pribadi yang ditata dengan tempo sendiri. Pengguna akan dapat menceritakan urusan dan tujuannya kepada asisten; kami juga ingin memungkinkan pemindahan catatan sendiri dan arsip percakapan terdahulu dari layanan kecerdasan digital lain ke Suveria. Arsip itu dimaksudkan tetap terenkripsi dan tertata di perangkat pengguna, dan hanya bagian yang dipilih untuk pertanyaan saat ini yang dimaksudkan dikirim ke model jarak jauh (bab 3).

Nilai layanan kami ukur dari apakah layanan itu membantu mencapai tujuan, menjaga privasi, dan mengambil keputusan secara mandiri. Ketentuannya dimaksudkan jelas dan mudah diakses, sedangkan pengguna dimaksudkan mengendalikan pengeluaran, dapat mengekspor materi sendiri, dan meninggalkan layanan.

Privasi penuh, termasuk terhadap kami sebagai pengelola infrastruktur, adalah tujuan yang menjadi acuan seluruh rancangan. Perlindungan dimaksudkan bertumpu pada pengamanan yang dapat diperiksa secara independen, bukan pada kepercayaan kepada yayasan. Karena itu, setiap rilis menjelaskan secara konkret apa yang dilindungi, dari siapa, dalam kondisi apa, dan celah apa yang masih ada.

Titik awalnya ialah percakapan teks dengan satu model dan pengerjaan dokumen terpilih, dengan tingkat perlindungan yang dijelaskan secara jelas, batas pengeluaran, dan ekspor hasil. Kemampuan berikutnya, seperti ingatan, pencarian, integrasi, dan pelaksanaan tindakan, masing-masing mendapat cakupan izin tersendiri. Satu antarmuka yang nyaman dapat menggabungkan beberapa cara kerja jika orang melihat ke mana data dikirim dan aturan apa yang berlaku sebelum mengirimkannya.

Apa yang akan dipakai rilis pertama bergantung pada berapa dana yang dikumpulkan yayasan sebelum peluncurannya. Pilihan paling mungkin ialah API konfidensial penyedia eksternal; layanan semacam itu tersedia saat ini di AS, dan pada awalnya konfidensialitasnya merupakan pernyataan penyedia yang akan kami periksa. Jika dananya cukup untuk menyewa server sendiri dalam lingkungan konfidensial, rilis pertama dapat langsung berjalan di sana. Sampai uji dalam bab 9 memberikan hasil positif, setiap varian itu kami tandai sebagai perlindungan yang dinyatakan, bukan perlindungan konfidensial. Bab 2 menjelaskan perlindungan yang dituju. Sebelum peluncuran uji coba perintis, kami akan menjelaskan konsekuensinya bagi perlindungan data pribadi orang di Eropa.

Penggunaan Suveria bukan persetujuan untuk menggunakan percakapan dalam pelatihan model. Isi milik pengguna masuk ke materi penelitian hanya dengan persetujuan terpisah yang diberikan dengan sadar, sedangkan materi lain berasal dari hasil kerja yayasan yang terbuka untuk umum dan sumber lain dengan dasar penggunaan yang jelas, sebagaimana dijelaskan dalam [whitepaper materi dan tolok ukur](whitepaper-materialy-i-benchmark.md).

Suveria melengkapi Omniforum, ruang bersama untuk percakapan dan keputusan: yang satu memberikan bengkel pribadi, yang lain mimbar publik. Nilai-nilai yang menjadi dasar kedua proyek dijelaskan dalam manifesto yayasan. Selanjutnya kami menunjukkan secara berurutan:

- apa yang kami lindungi dan dari apa, serta di mana data dan kunci berada (bab 2);
- bagaimana pesan berpindah dari perangkat ke model dan bagaimana memeriksanya (3);
- bagaimana kami membatasi penyalahgunaan tanpa membaca percakapan pribadi (4);
- bagaimana komputasi pada banyak kartu grafis bekerja (5);
- model, ingatan, dan alat apa yang kami rencanakan (6);
- berapa daya komputasi yang diperlukan, dari 30 orang hingga seluruh umat manusia (7);
- berapa biayanya, dalam perhitungan bertanggal (8);
- bagaimana kami akan memeriksa apakah janji-janji itu bekerja: uji penerimaan dan catatan hasil (9).

## 2. Apa yang kami lindungi dan dari apa

Kami melindungi isi percakapan dan berkas, riwayat dan ingatan, kunci, data penagihan, serta metadata, misalnya waktu koneksi, alamat jaringan, dan ukuran permintaan. Masing-masing bidang ini membutuhkan langkah yang berbeda.

Ringkasan di bawah menunjukkan dari siapa masing-masing dari lima cara kerja dalam bagian 2.3 memberikan perlindungan. Perlindungan dalam varian server bertumpu pada atestasi, yaitu pengesahan bertanda tangan perangkat keras yang menyatakan perangkat lunak apa yang berjalan di mesin jarak jauh dan dalam mode perlindungan apa. Isi sel kami susun berdasarkan bab-bab selanjutnya dalam dokumen ini; "pernyataan penyedia" berarti kami tidak mengonfirmasi perlindungan sebelum memeriksanya sendiri.

| Dari siapa | Model lokal di perangkat tanpa koneksi jaringan | Model lokal di perangkat yang terhubung ke jaringan | Pemrosesan dalam lingkungan konfidensial di server | API konfidensial penyedia eksternal | API eksternal penyedia model |
| --- | --- | --- | --- | --- | --- |
| Administrator penyedia | tidak berlaku: pemrosesan di perangkat | tidak berlaku untuk model saja; jika ada integrasi, bergantung pada layanan yang dipilih | melindungi: isolasi perangkat keras yang mencegah administrator server melihat isinya | pernyataan penyedia, perlu diperiksa | tidak melindungi: penyedia memiliki akses ke isi |
| Pelanggan lain pada mesin yang sama | tidak berlaku | tidak berlaku | melindungi: isolasi juga mencakup pelanggan lain | pernyataan penyedia, perlu diperiksa | bergantung pada penyedia: perangkat lunaknya memisahkan pelanggan, tanpa isolasi perangkat keras |
| Pengamat jaringan | tidak berlaku: tidak ada lalu lintas jaringan | perlindungan sebagian: lalu lintas jaringan integrasi memerlukan penilaian | perlindungan sebagian: isi dienkripsi selama pengiriman, metadata (waktu, alamat, ukuran, dan ritme paket) memerlukan langkah tersendiri (bab 3) | perlindungan sebagian: seperti dalam lingkungan konfidensial, jika kunci koneksi terikat pada atestasi | perlindungan sebagian: isi dienkripsi selama pengiriman, metadata seperti pada kolom sebelumnya |
| Orang dengan akses fisik ke server | tidak berlaku untuk server; yang penting ialah akses fisik ke perangkat | tidak berlaku untuk server; yang penting ialah akses fisik ke perangkat | tidak melindungi: di pusat data milik pihak lain, penyedia memiliki akses; untuk perangkat keras sendiri, pengawasan fisik yang terlihat | tidak melindungi: penyedia memiliki akses | tidak melindungi: penyedia memang sudah memiliki akses ke isi |
| Yayasan | tidak berlaku: yayasan tidak ikut memproses | tidak berlaku: yayasan tidak ikut memproses | melindungi: isolasi juga mencakup kami sebagai operator, kunci penyimpanan dipegang pengguna | dimaksudkan melindungi isi: gerbang menagih permintaan tanpa melihat isinya; tempat berakhirnya enkripsi akan kami tunjukkan sebelum uji coba perintis (bab 3) | dimaksudkan melindungi isi dari kami: penagihan tanpa melihat isi; penyedia melihatnya |
| Produsen prosesor | bergantung pada kepercayaan terhadap perangkat keras perangkat | bergantung pada kepercayaan terhadap perangkat keras perangkat | tidak melindungi: atestasi bertumpu pada kunci produsen yang harus jujur | tidak melindungi: seperti pada kolom sebelumnya | tidak relevan mengingat penyedia memiliki akses ke isi |

Komputasi konfidensial mengubah biaya serangan: alih-alih akses jarak jauh administrator, diperlukan intervensi fisik terhadap perangkat keras.

Di bawah kami menjelaskan bagaimana varian yang dituju dengan lingkungan konfidensial sendiri dimaksudkan bekerja; perbedaan varian lain ditunjukkan dalam tabel di bagian 2.3. Berikut maknanya dalam praktik pada setiap bagian jalur yang dilalui pesan:

- **Di perangkat pengguna**, teks dapat dibaca karena penggunalah yang menulis dan membacanya. Teks dilindungi aplikasi yang hanya meminta izin yang diperlukan, pembaruan, dan kehati-hatian dalam membuat salinan cadangan. Kami tidak dapat melindunginya jika perangkat lunak berbahaya berjalan di ponsel atau komputer.
- **Dalam perjalanan ke server**, pesan dienkripsi agar hanya tempat pemrosesan yang telah diperiksa dapat membacanya. Sebelum mengirimkannya, aplikasi memeriksa apakah di sisi lain berjalan persis perangkat lunak yang kami publikasikan.
- **Di server**, model harus membaca isi agar dapat menjawab, sehingga melakukannya dalam lingkungan perangkat keras tertutup yang isinya tidak dapat dilihat oleh administrator server maupun pelanggan lain. Kami memeriksa apakah isolasi ini mencakup prosesor, kartu grafis, memori, dan koneksi di antaranya.
- **Dalam penyimpanan**, riwayat percakapan dan ingatan asisten dienkripsi dengan kunci yang dipegang pengguna. Kami memeriksa salinan, pemulihan akses, dan penghapusan.
- **Dalam pengoperasian layanan**, penagihan, diagnostik, dan laporan kesalahan berjalan tanpa isi percakapan, dan setiap jenis data yang dikumpulkan dijelaskan secara terbuka (bab 3).
- **Dengan alat eksternal**, ketika asisten dimaksudkan melakukan sesuatu di luar Suveria, misalnya mencari informasi di internet, asisten hanya mengirim apa yang disetujui pengguna dan menunjukkan tujuannya.

Komputasi konfidensial tidak memperbaiki komputer pengguna yang terinfeksi. Komputasi ini juga tidak melindungi dari semua orang yang memiliki akses fisik ke server. Pada 2025, para peneliti menunjukkan bahwa perangkat yang dihubungkan ke bus memori, dibuat dari komponen seharga kurang dari seribu dolar, memungkinkan pengambilan kunci pengesahan dalam solusi Intel dan AMD. Hal ini juga memungkinkan pemalsuan pengesahan dalam komputasi konfidensial NVIDIA. Produsen prosesor menganggap serangan semacam itu berada di luar cakupan perlindungan mereka.[^teefail] Masih ada pula ketergantungan pada produsen perangkat keras, ketepatan kriptografi, kode aplikasi, dan proses pembaruan. Penyedia dapat menolak memberikan layanan meskipun tidak mampu membaca isi. Karena itu, model ancaman harus membedakan akses untuk melihat isi, penarikan kesimpulan dari metadata, perubahan cara kerja, dan penghentian layanan, serta menunjukkan pada setiap varian siapa yang harus jujur agar perlindungan bekerja.

Selama kami menggunakan pusat data pihak lain, penyedia memiliki akses fisik ke perangkat keras dan kami tidak dapat memeriksanya; kami menyatakannya pada setiap varian. Untuk perangkat keras sendiri (langkah 3–4 dalam bagian 8.2), kami ingin membuat akses ini terlihat melalui:

- inventaris perangkat;
- kontrol masuk;
- segel berpola acak dan sensor pembukaan casing;
- catatan pekerjaan;
- kamera pengamat independen, dengan gambar yang memperlihatkan nilai terkini yang ditandatangani dengan kunci mesin dan berasal dari generator keacakan publik;
- dan dalam jangka lebih panjang, ruang server yang dapat dilihat siapa pun.

Servis dan penggantian komponen dilakukan sebagai prosedur terbuka yang diumumkan sebelumnya. Pengawasan fisik yang terlihat mengurangi risiko dan memungkinkan deteksi banyak peristiwa, tetapi tidak membuktikan seluruh riwayat mesin maupun ketiadaan intervensi sebelum pengiriman, dan serangan seperti yang diuraikan di atas dapat menghasilkan pemalsuan bukti atestasi. Karena itu, setelah casing dibuka, komponen diganti, terjadi mulai ulang yang tidak direncanakan, atau peristiwa mencurigakan lainnya, kami menghentikan pemrosesan isi pribadi pada mesin tersebut. Kunci sesi dan aplikasi kami ganti, tetapi atestasi baru tidak dengan sendirinya memulihkan kepercayaan jika kecurigaan menyangkut dasar atestasi perangkat keras; syarat dan bukti untuk mengizinkan kembali penggunaan mesin kami uraikan sebelumnya. Kunci enkripsi data pengguna memiliki perlindungan dan pemulihan tersendiri, sehingga prosedur itu tidak merampas hasil kerja pribadi mereka.

### 2.1. Perangkat sendiri dan server opsional

Tempat utama penyimpanan percakapan pribadi, berkas, dan ingatan dimaksudkan berada di perangkat pengguna, dalam kontainer terenkripsi, yaitu kumpulan data yang isinya dibaca dengan kunci yang sesuai. Ini merupakan pendekatan local-first: data disimpan lebih dahulu di perangkat, sedangkan server dapat mendukung salinan cadangan dan sinkronisasi.[^local-first] Materi yang tersimpan dimaksudkan tetap dapat diakses meskipun pengguna berhenti menggunakan layanan yayasan; tugas yang membutuhkan model jarak jauh bergantung pada ketersediaan layanan komputasi yang dipilih.

Penyimpanan opsional di server terpilih digunakan untuk salinan cadangan dan penyelarasan perubahan antarperangkat. Isi kami enkripsi di perangkat sebelum dikirim agar operator yang menyimpan salinan hanya menerima data terenkripsi, tanpa kunci untuk membacanya. Pengguna memilih penyedia penyimpanan dan perangkat yang berhak membaca. Secara terpisah, kami membatasi pengungkapan metadata, seperti waktu dan ukuran salinan yang dikirim.

### 2.2. Kunci dan pemulihan akses

Kunci kontainer pribadi tetap berada di bawah kendali pengguna. Prosedur pemulihan menunjukkan secara jelas apakah akses dipulihkan oleh perangkat kedua, kunci pemulihan yang disimpan, atau mekanisme lain yang dipilih secara sadar, serta kepada siapa mekanisme itu memberikan kemampuan membaca. Pemulihan akun di operator tidak membuka isi kontainer. Kehilangan semua salinan kunci dan cara pemulihan dapat berarti kehilangan data secara permanen; karena itu, pilihan mekanisme kami periksa melalui percobaan pemulihan data dan kami jelaskan dalam petunjuk yang mudah dipahami.

Kami mempertimbangkan beberapa cara pemulihan yang dapat digabungkan: perangkat kedua yang sudah memiliki akses; kunci pemulihan yang dicatat di kertas atau pengelola kata sandi; kunci perangkat keras; pembagian kunci kepada beberapa orang tepercaya, misalnya dua orang mana pun dari tiga orang dapat bersama-sama memulihkan akses, tetapi tidak seorang pun dapat membaca data sendirian. Yayasan tidak menyimpan kunci maupun bagiannya, sehingga tidak dapat memulihkan akses atas nama pengguna ataupun menyerahkan datanya.

Untuk awal, kami menyarankan perangkat kedua dan kunci yang dicatat di kertas; pembagian kunci kepada orang tepercaya merupakan pilihan bagi yang menginginkannya.

### 2.3. Varian perlindungan

Kami ingin membandingkan lima cara kerja karena masing-masing melindungi dari hal yang berbeda:

| Varian | Tempat pemrosesan berlangsung | Apa yang perlu dinilai |
| --- | --- | --- |
| Model lokal di perangkat tanpa koneksi jaringan | Di perangkat pengguna | Kondisi perangkat, akses fisik, media penyimpanan, dan salinan data |
| Model lokal di perangkat yang terhubung ke jaringan | Secara lokal, dan jika ada integrasi juga di layanan terpilih | Izin aplikasi, pembaruan, lalu lintas jaringan, dan cakupan data yang diteruskan ke integrasi |
| Pemrosesan dalam lingkungan konfidensial di server | Di lingkungan jarak jauh yang konfigurasinya dikonfirmasi oleh atestasi | Pemeriksaan lingkungan, akses administrator dan akses fisik ke perangkat keras, perlindungan pengiriman dan pemrosesan, metadata dan kunci |
| API konfidensial penyedia eksternal | Di lingkungan konfidensial penyedia yang konfigurasinya dimaksudkan dikonfirmasi oleh atestasi | Apakah kunci koneksi terikat pada atestasi, apakah atestasi mencakup prosesor dan kartu grafis, apakah permintaan tertentu dapat dihubungkan dengan mesin tertentu, siapa yang memiliki akses fisik ke perangkat keras, penyimpanan data dan yurisdiksi; sebelum memeriksanya sendiri, kami memperlakukan konfidensialitas sebagai pernyataan penyedia |
| API eksternal penyedia model | Di penyedia eksternal | Ketentuan penyedia, akses ke isi, penyimpanan dan yurisdiksi; kami tidak menerapkan janji pengoperasian konfidensial pada varian ini |

Pemeriksaan server secara independen membutuhkan aplikasi yang diinstal. Dalam peramban, kode yang memeriksa server setiap kali disediakan oleh operator, sehingga cara ini kami tandai sebagai memiliki perlindungan yang lebih lemah.

Perangkat yang terhubung ke jaringan dapat memiliki lebih banyak titik serangan daripada lingkungan server yang terisolasi, sehingga lokasi komputasi saja tidak menentukan keamanan. Tidak ada varian yang diberi label "privasi penuh" sebelum konfigurasi tertentu diperiksa. Pada setiap percakapan, pengguna melihat varian yang digunakannya, dan pergantian varian membutuhkan keputusan sadarnya. Kunci sendiri untuk API eksternal digunakan untuk penagihan akses, tetapi tidak menjamin konfidensialitas terhadap penyedia. Varian ini bukan varian bawaan Suveria pribadi, dan sebelum isi dikirim, kami menunjukkan apakah penyedia dapat menggunakannya untuk pelatihan model dan berapa lama penyedia menyimpannya.

Kami juga menganalisis arah yang belum ada dalam ringkasan ini: kawanan tepercaya. Jika gagasan ini diwujudkan, model akan berjalan pada perangkat keras beberapa orang yang saling mengenal dan percaya, misalnya keluarga, teman, atau komunitas kecil, dan masing-masing akan berbagi sebagian daya komputasi komputernya. Privasi varian seperti itu bertumpu pada kepercayaan kepada orang-orang tersebut, bukan pada teknik, karena komputer mereka melihat isi yang diproses, dan kami ingin menjelaskan secara tepat bahwa itulah dasar privasinya. Ini gagasan yang masih dalam tahap analisis, tetapi termasuk salah satu jalur yang ingin kami teliti.

Server yang aman tidak akan melindungi teks yang dibaca dari ponsel yang dikuasai pihak lain, sedangkan ponsel yang lebih aman tidak memperbaiki server; karena itu, kami merancang aplikasi bersama perlindungan perangkat. Kami ingin aplikasi Suveria bekerja tanpa layanan Google, misalnya pada sistem GrapheneOS, tersedia juga di luar toko Google Play, dan memiliki rilis dengan proses build yang dapat direproduksi: siapa pun dapat membangun sendiri aplikasi dari kode sumber yang dipublikasikan dan memeriksa bahwa berkas hasilnya identik dengan yang diinstalnya. Kami juga merencanakan pengamanan di dalam aplikasi: pemblokiran tangkapan layar, mode papan ketik yang tidak mempelajari teks yang diketik, pengecualian data pribadi dari salinan cadangan di cloud, isi notifikasi yang disembunyikan, dan penguncian aplikasi. Di situs yayasan, kami akan menyiapkan panduan pengamanan perangkat sendiri dalam tiga tingkat: dari pengaturan dasar dan pembaruan, melalui isolasi kerja dan kunci yang lebih kuat, hingga konfigurasi teruji untuk orang dengan kebutuhan tertinggi, seperti Qubes OS di komputer dengan firmware terbuka. Penggunaan Suveria tidak membutuhkan pembelian perangkat keras yang disebutkan, dan nama sistem bukan sertifikat untuk seluruh perangkat.

Pada setiap percakapan, kami akan menampilkan kartu perlindungan (*Charta Tutelae*): daftar unsur yang menentukan privasi percakapan itu, masing-masing dalam salah satu dari tiga status:

- **Telah kami periksa:** kami telah memeriksanya sendiri, disertai tanggal, versi, dan penjelasan cara kami melakukannya.
- **Dinyatakan oleh penyedia:** penyedia menyatakannya, tetapi kami belum memeriksanya.
- **Tidak dilindungi:** varian ini tidak melindunginya, misalnya waktu dan panjang pesan yang terlihat oleh penyedia jaringan, akses fisik penyedia ke perangkat keras, atau yurisdiksi tempat server berada.

Status "telah kami periksa" mencantumkan tanggal pemeriksaan terakhir dan memiliki masa berlaku: setelah waktu yang ditetapkan berlalu tanpa pemeriksaan ulang, status kembali menjadi "dinyatakan". Kami akan menampilkan secara terpisah kerusakan dasar kepercayaan yang diketahui, misalnya insiden di penyedia atau perubahan konfigurasi yang belum dikonfirmasi. Kartu ini sama untuk semua orang dan tidak bergantung pada harga, sedangkan varian yang memiliki walau satu unsur yang hanya dinyatakan tidak disebut "privasi penuh". Ringkasan di awal bab 2 dan tabel varian dalam bagian ini menjelaskan varian secara umum, sedangkan kartu akan menunjukkan status untuk percakapan tertentu ini.

## 3. Jalur dari perangkat ke model

Suveria dimaksudkan terdiri atas beberapa bagian:

- aplikasi di perangkat pengguna;
- gerbang yang menagih permintaan dan menjaga batas pengeluaran;
- lingkungan konfidensial dengan model, milik sendiri atau di penyedia;
- penyimpanan salinan terenkripsi;
- perantara opsional yang menyembunyikan alamat pengguna.

Gerbang dimaksudkan berjalan pada mesin konfidensial. Sebelum uji coba perintis, kami akan menunjukkan dalam aplikasi di mana enkripsi yang dikendalikan perangkat pengguna berakhir dan apakah gerbang melihat isi, dan jika demikian, hanya di dalam lingkungan konfidensial.

Penyimpanan terenkripsi dan pemrosesan konfidensial memerlukan pengamanan terpisah. Untuk mengerjakan tugas, model yang berjalan di server membutuhkan isi yang dapat dibaca dalam lingkungan komputasi terlindungi; enkripsi salinan berkas saja tidak melindungi tahap ini.[^apple-pcc] Aplikasi hanya memberikan bagian yang dipilih untuk pekerjaan itu, tanpa menyerahkan kunci seluruh kontainer pribadi. Uraian sesi menunjukkan di mana isi tersedia untuk komputasi, apa yang membatasi akses operator untuk melihatnya, dan apa yang terjadi pada data setelah hasil dikembalikan.

Alur sesi yang diusulkan:

1. Aplikasi mengambil uraian rilis yang disetujui dan memeriksa atestasi, yaitu pengesahan kriptografis atas sifat-sifat tertentu dari lingkungan yang berjalan.
2. Aplikasi memeriksa kesesuaian perangkat keras, status perlindungan, dan hasil pengukuran perangkat lunak dengan kebijakan yang terbuka untuk umum. Kunci penerima data harus terikat pada pengesahan ini.
3. Setelah pemeriksaan berhasil, aplikasi membuat koneksi terenkripsi dengan lingkungan yang disetujui. Ketidaksesuaian menghentikan pengiriman data; perpindahan ke varian lain membutuhkan pilihan sadar.
4. Lingkungan memproses permintaan dengan akses terbatas ke jaringan dan alat, mengembalikan hasil, lalu menghapus data kerja sesuai kebijakan yang dipublikasikan.
5. Penyimpanan percakapan atau ingatan hanya dilakukan dalam cakupan yang dipilih pengguna.

Atestasi membantu menentukan apa yang dijalankan, tetapi dengan sendirinya tidak membuktikan bahwa kode itu aman. Diperlukan tinjauan kode, proses build yang dapat direproduksi dari kode sumber (dijelaskan dalam bagian 2.3), daftar versi yang disetujui, dan kemungkinan pemeriksaan independen. Arsitektur Apple Private Cloud Compute menjadi acuan kami untuk menghubungkan perlindungan dengan keterbukaan proses perilisan perangkat lunak; arsitektur itu bukan sertifikat bagi proyek kami.[^apple-pcc]

Kami ingin mengamankan rilis agar kepercayaan tidak bergantung pada satu orang maupun yayasan saja:

- setiap rilis dimaksudkan memiliki proses build yang dapat direproduksi dari kode sumber. Sekurang-kurangnya dua pihak independen dari luar yayasan membangunnya ulang serta mengonfirmasi secara terbuka kesesuaian sidik digitalnya. Sebelum menemukan mereka, kami menandai rilis sebagai belum dikonfirmasi pihak ketiga;
- sidik digital rilis yang disetujui masuk ke daftar publik yang hanya dapat ditambahi, sedangkan keadaan daftar pada setiap tahap berikutnya dikonfirmasi oleh saksi independen;
- versi baru masuk ke server setelah disetujui beberapa orang, termasuk sekurang-kurangnya satu orang dari luar pengurus;
- kunci yang diperlukan untuk menangani data hanya diberikan kepada lingkungan yang telah lolos atestasi.

Varian perlindungan penuh kami rancang untuk aplikasi yang diinstal dengan rilis bertanda tangan dan dapat diperiksa, perlindungan terhadap pengembalian ke versi yang cacat, serta penyimpanan kunci yang aman, karena dalam peramban, kode pemeriksa server setiap kali disediakan operator. Versi peramban menjelaskan secara jelas tingkat perlindungannya yang lebih rendah. Proses build yang dapat direproduksi memungkinkan perbandingan rilis dengan kode, tetapi penilaian kode dan konfigurasi itu sendiri tetap dilakukan melalui tinjauan, audit, dan imbalan atas kesalahan yang dilaporkan, sedangkan setiap insiden masuk ke daftar terbuka.

Untuk membatasi pengungkapan alamat pengguna, dapat diteliti perantaraan berbasis Oblivious HTTP, yang memisahkan pengetahuan tentang pengirim dari isi permintaan dengan model kepercayaan tertentu.[^ohttp] Kolusi antarperantara, korelasi lalu lintas, dan rincian penerapan masih memerlukan penilaian, sehingga penggunaan protokol ini saja tidak kami gambarkan sebagai anonimitas penuh.

Enkripsi dan komputasi konfidensial tidak menyembunyikan panjang maupun ritme paket yang membawa jawaban. Penelitian pada 2024–2025 menunjukkan bahwa pengamat jaringan dapat merekonstruksi topik, dan terkadang isi percakapan dari paket tersebut.[^weiss-keylogging][^whisper-leak] Karena itu, dalam mode konfidensial kami ingin mengirim jawaban dalam bingkai berukuran tetap dan dengan ritme tetap, tidak berbagi cache kueri antarpengguna, serta menonaktifkan dekode spekulatif. Langkah-langkah ini sedikit menambah latensi dan sedikit mengurangi laju pemrosesan; hal ini akan kami perhitungkan.

Infrastruktur juga kami lindungi dengan membatasi kemampuan masing-masing bagian sistem: batas sumber daya, isolasi tugas, dan pemblokiran bawaan koneksi keluar dari simpul yang memproses percakapan. Pemblokiran ini dimaksudkan menjadi bagian perangkat lunak yang sidik digitalnya terlihat dalam atestasi. Perubahannya mengubah sidik digital, sehingga aplikasi akan menolak koneksi. Aturan jaringan penyedia kami perlakukan sebagai lapisan kedua, bukan jaminan. Tindakan eksternal yang diizinkan melewati lapisan alat tersendiri dengan izin yang ditentukan pengguna. Sebelum penerapan, kami akan memeriksa efektivitas batas-batas ini, cara mendeteksi insiden, dan cakupan minimum metadata yang diperlukan. Tujuannya ialah keamanan sumber daya bersama dengan tetap menjaga konfidensialitas isi percakapan.

Kami sangat berhati-hati ketika pengguna menghubungkan sumber yang berisi pesan orang lain, misalnya kotak surel. Pesan orang lain dapat mengandung perintah tersembunyi yang mencoba membuat model mengungkapkan ingatan pribadi. Karena itu, isi dari luar kami pisahkan dari perintah pengguna: saat menatanya, asisten tidak boleh mengirim pesan, membuka alamat jaringan, atau mengubah Kanon Pribadi atas inisiatif sendiri tanpa konfirmasi manusia.

Segala yang kami ketahui tentang cara kerja Suveria dapat diketahui siapa pun. Saat layanan diluncurkan, kami akan memublikasikan daftar semua jenis data yang dikumpulkan tentang pengoperasian layanan, disertai tujuan dan masa penyimpanan, sedangkan data itu sendiri akan kami sediakan dalam bentuk agregat: penggunaan token, model yang dipakai, beban mesin, waktu tunggu dalam antrean, kegagalan, dan biaya. Semua orang melihat data itu di tempat yang juga kami gunakan untuk melihatnya. Sebelum memublikasikan ringkasan, kami memeriksa apakah perilaku orang tertentu dapat dikenali darinya: kami menetapkan ukuran kelompok minimum, penundaan publikasi, dan data yang dihilangkan. Data di luar daftar tidak kami kumpulkan; jika ternyata sebaliknya, kami menganggapnya insiden serius dan menjelaskannya kepada publik.

## 4. Membatasi penyalahgunaan tanpa melihat isi pribadi

Perlindungan martabat juga kami terapkan pada orang yang mungkin terdampak penggunaan alat kami. Kami ingin mencegah penyalahgunaan tanpa membaca percakapan pribadi: melalui prinsip yang diikuti asisten sendiri, batas izin alat dan koneksi jaringan, batas sumber daya, serta perlindungan terhadap pembuatan akun massal. Kami tidak membuat akses tersembunyi ke isi pribadi karena hal itu akan melemahkan perlindungan semua orang.

Akun akan dapat dibuat melalui beberapa cara, dari yang sepenuhnya pribadi (kunci di perangkat sendiri, tanpa alamat surel) hingga yang nyaman (masuk melalui penyedia eksternal). Untuk setiap cara, sebelum pengguna memilih, kami akan menunjukkan siapa di luar yayasan yang mengetahui pembuatan akun dan data apa yang dilihatnya, serta apa yang terjadi jika penyedia itu hilang. Cara pembuatan akun tidak memengaruhi hak peserta; hak suara di Omniforum merupakan pengesahan hak tersendiri yang ditambahkan ke akun.

Privasi dan pembatasan penyalahgunaan kami nilai secara terpisah. Kami merancang Suveria agar yayasan tidak memiliki data tentang orang tertentu yang dapat diserahkannya: isi dienkripsi dengan kunci pengguna, data pengoperasian layanan hanya kami kumpulkan dalam cakupan terbuka yang dijelaskan dalam bab 3, dan data pribadi kami batasi pada minimum yang diwajibkan hukum untuk pembayaran serta pembukuan; cakupannya juga kami publikasikan. Jika seseorang menuntut data orang tertentu dari kami, kami ingin dapat menjawab dengan jujur bahwa, selain minimum yang dijelaskan secara terbuka itu, kami tidak memilikinya. Untuk setiap pengamanan terhadap penyalahgunaan, kami akan menjelaskan data apa yang dibutuhkannya, berapa lama data disimpan, akibatnya bagi peserta yang jujur, dan cara menggugat pemblokiran yang keliru.

Kami juga akan menjelaskan cara menerima laporan dari orang yang merasa telah mengalami dampak buruk dan apa yang dapat dilakukan tanpa akses ke isi percakapan: misalnya membatasi izin alat atau sumber daya akun, memeriksa data penagihan dan metadata dalam cakupan yang kami simpan, atau memberi tahu pelapor di mana mencari bantuan. Kewajiban hukum operator layanan semacam ini memerlukan analisis tersendiri sebelum peluncuran.

Pengamanan ini merupakan sasaran dan varian untuk diuji, dan tidak satu pun akan mendeteksi semua penyalahgunaan. Untuk setiap pengamanan, kami akan menunjukkan ancaman yang ditanganinya, hal yang tidak dideteksinya, dan apa yang dapat diperiksa tanpa operator melihat percakapan pribadi. Hasil penilaian ini menentukan syarat penyediaan fungsi tertentu.

Ketika percakapan menyangkut ancaman terhadap nyawa atau kesehatan, asisten dimaksudkan memberikan informasi tentang bantuan yang tersedia, misalnya nomor darurat, tanpa mengirim apa pun ke luar lingkungan pribadi.

### 4.1. Instruksi asisten yang terbuka dan pustaka bersama

Perilaku asisten juga ditentukan oleh instruksi utamanya dan cara kerjanya: bagaimana membagi tugas menjadi langkah-langkah, menggunakan ingatan, dan memeriksa jawaban. Di Suveria, orang dimaksudkan selalu dapat membaca instruksi lengkap asistennya. Infrastruktur bersama dimaksudkan hanya menyediakan model dan pengaturan yang lolos uji tolok ukur terbuka; di atas minimum ini, penggunalah yang memilih gaya kerja, dari penataan pikiran yang tenang hingga percakapan menuntut ketika asisten menunjukkan celah penalaran. Kami ingin mengelola pustaka terbuka berisi instruksi teruji yang disempurnakan peserta di Omniforum dan diperiksa dalam tolok ukur.

## 5. Komputasi pada banyak kartu grafis

Model dalam bab 6 tidak muat di satu kartu grafis, sehingga perlindungan juga perlu diperiksa pada koneksi antarkartu: bus PCIe menghubungkan prosesor dengan kartu, sedangkan NVLink dan NVSwitch menghubungkan kartu satu sama lain.

Ketika model menggunakan beberapa kartu grafis, data juga mengalir di antaranya, sehingga perlindungan perlu diperiksa baik pada kartu maupun koneksinya. Nama kartu tidak cukup untuk memesan layanan konfidensial: perlu dikonfirmasi mesin yang sesuai, prosesor, topologi koneksi, firmware, driver, dan perangkat lunak runtime, lalu diperiksa cara semuanya bekerja bersama.[^nvidia-platformy]

Dalam mode Hopper Protected PCIe, yang dijelaskan dalam dokumentasi PPCIe v2, jaringan NVLink dan NVSwitch termasuk bagian sistem yang tepercaya, sehingga enkripsi PCIe tidak berarti setiap koneksi antarkartu dienkripsi.[^nvidia-ppcie-v2] Dokumentasi NVIDIA R595 menjelaskan mode komputasi konfidensial pada banyak kartu Blackwell, dengan enkripsi koneksi NVLink dan dukungan hingga delapan kartu dalam satu mesin virtual konfidensial.[^nvidia-blackwell] Ini dasar untuk memeriksa konfigurasi, bukan bukti bahwa setiap penyewaan kartu B200 mencakup fungsi tersebut. Rilis yang berbeda memiliki matriks kompatibilitas yang berbeda, sehingga kami tidak menyusun konfigurasi dari versi yang dipilih sembarangan.

Permintaan informasi kepada penyedia mencakup:

- mode perlindungan tertentu dan kemungkinan melakukan atestasi secara mandiri;
- penggunaan eksklusif sumber daya yang diperlukan dan wilayah;
- akses administrator dan akses fisik ke perangkat keras;
- masa penyimpanan data;
- waktu penyediaan dan biaya lengkap.

Penawaran baru kami bandingkan setelah pengujian dengan aplikasi sendiri. Label dagang "secure" tidak menggantikan informasi ini.

## 6. Model, ingatan, dan alat

Dasar rancangan ini ialah model terbuka yang dapat dijalankan sendiri. Suveria dimaksudkan tersedia bagi orang di seluruh dunia, dalam bahasa mereka sendiri; karena itu, saat memilih model, kami mempertimbangkan kualitas dalam banyak bahasa, pemahaman maksud, keandalan, lisensi, biaya, dan kemungkinan menjalankannya dalam arsitektur perlindungan yang diperlukan. Jika dibutuhkan, selain model umum kami dapat menjalankan model yang lebih baik dalam bahasa tertentu. Bobot terbuka memungkinkan sebagian penggunaan, tetapi tidak menentukan keterbukaan data dan seluruh proses pembuatan model.[^osi]

Kandidat pertama ialah DeepSeek-V4.1-Flash, model berlisensi MIT yang juga mengizinkan penggunaan untuk layanan.[^deepseek] Model ini besar, tetapi hemat: produsen menyebut 552 miliar parameter bagian utama, yaitu bilangan yang ditentukan selama pelatihan, dan memori Engram tambahan dengan 196 miliar parameter, sementara hanya 8–16 miliar parameter yang bekerja untuk setiap kata berikutnya, sehingga model menjawab dengan cepat dan murah (perhitungan dalam bab 8). Namun, semua parameter harus muat dalam memori kartu grafis, sehingga diperlukan sekurang-kurangnya empat kartu modern. Parameter model ini sudah disimpan dalam bentuk hemat, dengan lebih sedikit digit untuk setiap bilangan; penyimpanan seperti ini disebut kuantisasi dan mengurangi memori yang diperlukan, tetapi dapat menurunkan kualitas, sehingga pada setiap versi kami memeriksanya dengan tugas sendiri. Kami juga membandingkannya dengan model yang lebih kecil: model lebih besar hanya kami pilih jika jelas lebih baik mengerjakan tugas yang penting bagi orang.

Kandidat kedua ialah Kimi K3.1 Pro dari Moonshot AI, dirilis pada 23 Oktober 2026. Produsen menggambarkannya sebagai versi Kimi K3 yang dilatih lebih lanjut, dengan sekitar 3 triliun parameter dan konteks hingga satu juta token, serta mengumumkan rencana penerbitan bobot lengkap sebelum 4 November 2026; lisensinya belum diumumkan.[^kimi-k31] Data terperinci yang kami gunakan untuk perbandingan berasal dari kartu model pendahulunya: Kimi K3 memiliki 2,8 triliun parameter, dengan 104 miliar bekerja pada setiap token, dan lisensi sendiri yang tidak disetujui Open Source Initiative.[^kimi-k3] Dalam indeks Artificial Analysis versi 28 Oktober 2026, Kimi K3.1 Pro memperoleh 46 poin dibandingkan 32 untuk DeepSeek-V4.1-Flash, tetapi beberapa kali lebih mahal dan lambat.[^aa] Berkas bobot Kimi K3 berukuran sekitar 1,56 TB, sedangkan pengoperasiannya juga membutuhkan memori untuk konteks dan komputasi, sehingga kami tidak menentukan apakah model akan berjalan hanya berdasarkan jumlah total memori kartu. Panduan mesin SGLang menjelaskan konfigurasi Kimi K3 yang telah diperiksa pada delapan kartu B300; ini belum merupakan uji Kimi K3.1 ataupun konfigurasi konfidensial.[^spheron-kimi][^sglang-k3] Setelah bobot diterbitkan, kami akan memeriksa ukuran dan formatnya, lisensi, panduan mesin, kapasitas pada konfigurasi tertentu, serta ketersediaan dalam API konfidensial. Hasil pemeriksaan akan kami tambahkan sebagai pembaruan pertama dokumen ini, disertai tanggal. Jika bobot belum diterbitkan atau ketentuan lisensi ternyata tidak sesuai kebutuhan, hal itu juga akan kami catat dalam pembaruan tersebut.

Perubahan atau penarikan model kami umumkan terlebih dahulu. Riwayat percakapan tetap ada pada pengguna: pengguna dapat memilih model pengganti, mengekspor data, atau mengakhiri pekerjaan. Momen pergantian model harus terlihat dalam percakapan, dan pemindahan konteks pribadi ke model baru memerlukan keputusan pengguna.

Prinsip yang diikuti asisten saat menjawab akan kami publikasikan selengkapnya bersama setiap rilis. Model itu sendiri juga membawa pilihan pembuatnya, misalnya topik yang dihindarinya; kami memeriksanya dalam tolok ukur dan menjelaskannya saat memilih model.

Ingatan percakapan terdahulu dimaksudkan bekerja dengan persetujuan pengguna dan dapat ditinjau serta diedit olehnya. Kami membedakan pernyataan asli, ringkasan model, dan informasi yang dikonfirmasi pengguna. Setiap catatan dapat dihapus atau diperbaiki, asalnya dapat dilihat, dan dapat ditentukan dalam tugas mana catatan boleh digunakan. Asisten membedakan secara jelas saran sendiri dari pandangan yang secara sadar diakui orang sebagai pandangannya sendiri.

Pelaksanaan tindakan memerlukan izin yang diberikan untuk tujuan dan waktu tertentu. Isi halaman atau dokumen adalah bahan analisis, bukan perintah untuk mengubah izin tersebut. Tindakan eksternal, pengeluaran, publikasi, dan penghapusan memerlukan konfirmasi yang proporsional serta catatan tindakan yang dapat diakses pengguna.

### 6.1. Teleskop Pemikiran dan Kanon Pribadi

Gagasan Teleskop Pemikiran (*Telescopium Mentis*) berawal dari jendela Overton, yaitu konsep yang menggambarkan rentang ide yang pada waktu tertentu dianggap dapat diterima dalam masyarakat. Pada satu orang, yang dimaksud ialah rentang pemikiran yang pada waktu tertentu dianggapnya dapat diterima bagi dirinya. Teleskop dimaksudkan menjadi jendela seperti itu bagi satu orang dan hanya baginya: memungkinkan melihat catatan pemikiran dan nilainya sendiri dari berbagai waktu serta perubahannya seiring waktu.

Teleskop Pemikiran dimaksudkan membantu orang kembali ke penalarannya sendiri: apa yang saya ketahui saat itu, apa yang saya inginkan, dan mengapa saya berubah pikiran. Teleskop juga dapat membantu membandingkan peristiwa pilihan pengguna, informasi tentang dunia, dan tindakan sendiri dengan Kanon Pribadinya, yaitu kumpulan prinsip dan nilai yang ditulis serta diakui sebagai prinsip dan nilainya sendiri. Perbandingan menyangkut situasi yang dijelaskan atau ditunjukkan sendiri oleh pengguna; penggunalah yang menentukan materi dan cakupannya. Model menunjukkan hubungan yang mungkin, disertai sumber prinsip yang dirujuk dan uraian peristiwa, dengan membedakan informasi yang dikonfirmasi dari interpretasi dan ketidakpastian. Interpretasi yang diusulkan dapat diperbaiki atau ditolak, sedangkan pandangan terdahulu kami nilai dengan memperhatikan waktu dan konteksnya.

Ketegangan yang ditemukan dapat menyangkut prinsip itu sendiri, konflik nilai, kondisi lingkungan, keterbatasan manusia, atau interpretasi model yang keliru. Orang dapat mempertahankan cita-cita dan menerima ketidakkonsistenan saat ini, memperjelas keyakinan, mempertimbangkan perubahan tindakan atau lingkungan, atau membiarkan pertanyaan tetap terbuka. Kanon dimaksudkan membantu memahami pilihan sendiri: kami tidak membuat skor moralitas maupun peringkat publik konsistensi. Perenungan pribadi tetap pribadi, dan pencatatannya tidak berarti publikasi ataupun pemberian suara.

Kami akan memulai dengan hati-hati. Dalam versi pertama, Teleskop Pemikiran hanya mengerjakan satu situasi yang ditunjukkan sendiri oleh pengguna, misalnya keputusan yang ingin ditinjau kembali; Teleskop tidak mengikuti kehidupannya secara terus-menerus. Pengguna memutuskan seberapa sering menggunakannya, catatan dan ingatan apa yang dibagikan, dan kapan menghapusnya. Dalam uji ini, kami memeriksa apakah hubungan yang ditunjukkan dapat dipahami, apakah memberi rasa kendali atas pilihan sendiri, dan apakah alat itu tidak menimbulkan tekanan untuk terus-menerus mempertanggungjawabkan diri. Hasil juga kami anggap baik jika seseorang, setelah merenung, menerima bahwa tindakannya tidak selalu sesuai dengan prinsipnya, atau membiarkan persoalan tetap terbuka: alat ini dimaksudkan membantu memahami diri, bukan memaksakan kesimpulan.

### 6.2. Format terbuka, pemindahan, dan kerja sama alat

Kami ingin mengembangkan Suveria sebagai barang publik digital, dengan kode sumber dan dokumentasi terbuka; acuannya ialah standar Digital Public Goods Alliance.[^dpga] Format pemindahan data memiliki uraian terbuka, versi, dan aturan mempertahankan informasi saat versi berubah. Kami mengutamakan standar terbuka yang sudah ada dan mendokumentasikan perluasan yang dibutuhkan.

Ekspor mencakup materi asli terpilih, riwayat, sumber dan hubungan, pembedaan antara kata-kata pengguna, hasil olahan model, serta makna yang dikonfirmasi penulis, dan juga struktur Kanon Pribadi. Paket yang diunduh dapat dibaca tanpa akun aktif di Suveria, setelah didekripsi oleh orang yang berhak.

API, yaitu cara komunikasi antarprogram yang didokumentasikan, dimaksudkan memungkinkan pengerjaan materi dalam alat lain, termasuk yang dibuat sendiri. Pengguna memilih cakupan data dan tindakan yang diizinkan, serta dapat mencabut izin integrasi. Pencabutan izin menghentikan akses berikutnya; nasib salinan yang sebelumnya diteruskan juga bergantung pada penerima.

Ruang pribadi juga dapat digunakan untuk bekerja bagi proyek bersama. Pengguna memilih materi yang ingin diserahkan untuk penerimaan atau publikasi, sedangkan alat membantu menghapus secara lokal kunci akses, kata sandi, data pribadi, dan informasi tentang kerentanan yang belum ditambal. Penggunaan sumber daya yang dibayar secara pribadi tidak mengharuskan pengungkapan percakapan kerja. Untuk tugas yang didanai sumber daya bersama yayasan, cakupan catatan publik, pilihan nama samaran, dan penyiapan materi ditentukan sebelumnya oleh [aturan bengkel yayasan](whitepaper-zasady-fundacji.md) (bab 11.1). Dari perenungan di Suveria, orang juga dapat secara sadar mengambil satu pertanyaan atau argumen dan memublikasikannya di Omniforum; langkah ini, yang dalam manifesto disebut Upacara Ignis (*Caerimonia Ignis*), selalu memerlukan keputusan terpisah.

## 7. Skala: dari 30 orang hingga seluruh umat manusia

Jumlah akun saja tidak menentukan infrastruktur yang diperlukan. Yang penting ialah aktivitas, panjang pertanyaan dan jawaban, jumlah sesi bersamaan, waktu tunggu yang dapat diterima, dan biaya alat. Contoh di bawah merupakan model beban untuk pengujian, bukan perkiraan permintaan ataupun penawaran.

Asumsi: masing-masing dari N orang aktif setiap hari dan membuat 20 permintaan per hari, permintaan rata-rata mencakup 1500 token masukan dan 600 token keluaran, sedangkan satu bulan terdiri atas 30 hari. Token adalah satuan teks yang diproses model; panjangnya bergantung pada bahasa. Dalam beban nyata, perlu ditambahkan konteks yang lebih panjang, pemrosesan dokumen, token penalaran, dan pemanggilan pendukung.

| Orang aktif | Permintaan per bulan | Masukan per bulan | Keluaran per bulan | Pembangkitan rata-rata sepanjang hari | Laju pada jam puncak dalam skenario global, sekitar 1,51 × rata-rata |
| --- | ---: | ---: | ---: | ---: | ---: |
| 30 | 18 000 | 27 juta token | 10,8 juta token | 4,2 token/s | 6,3 token/s |
| 100 | 60 000 | 90 juta | 36 juta | 13,9 token/s | 20,9 token/s |
| 1000 | 600 000 | 900 juta | 360 juta | 138,9 token/s | 209 token/s |
| 100 ribu | 60 juta | 90 miliar | 36 miliar | 13 889 token/s | 20 921 token/s |
| 1 juta | 600 juta | 900 miliar | 360 miliar | 138 889 token/s | 209 208 token/s |
| 1 miliar | 600 miliar | 900 triliun | 360 triliun | 138,9 juta token/s | 209,2 juta token/s |
| 10 miliar | 6 triliun | 9 kuadriliun | 3,6 kuadriliun | 1,39 miliar token/s | 2,09 miliar token/s |

Kami merencanakan Suveria sebagai layanan global yang tersedia dalam banyak bahasa. Kami tidak mengetahui bagaimana peserta akan tersebar di zona waktu, sehingga kami membandingkan dua skenario yang akan diperiksa melalui pengukuran. Dalam skenario global, kami mengasumsikan porsi wilayah sebanding dengan jumlah pengguna internet menurut ITU pada 2025 dan pola harian asumsi yang sama di setiap zona: puncak pada petang hari dan malam yang sepi.[^itu] Lalu lintas dari zona-zona waktu tersebut sebagian saling mengisi pada jam-jam sepi, sehingga puncak per jam sekitar 1,51 × rata-rata, sedangkan lalu lintas terendah sekitar 0,49 ×. Dalam skenario yang terpusat di satu wilayah, misalnya Eropa, puncaknya sekitar 1,87 × rata-rata, sedangkan pada malam hari hampir tidak ada lalu lintas. Sebaran seperti itu juga dapat terjadi pada skala besar; akibatnya, pemanfaatan mesin sendiri lebih rendah dan API konfidensial lebih sering digunakan, atau waktu tunggu pada puncak lebih panjang. Kedua nilai berasal dari asumsi kami, bukan pengamatan terhadap peserta masa depan. Lonjakan singkat dalam satu jam dimaksudkan diratakan oleh antrean singkat dengan waktu tunggu yang terlihat, sedangkan lalu lintas yang melebihi kapasitas mesin sendiri dapat ditangani API konfidensial; waktu tunggu, termasuk persentil ke-95 dan ke-99, akan kami ukur dalam uji coba perintis, bersama batas antrean dan perilaku setelah kapasitasnya habis. Uji beban juga akan mencakup masuknya orang baru secara mendadak, misalnya lima kali lalu lintas rata-rata. Ini merupakan laju keluaran total; bukan pengganti pengukuran latensi satu percakapan ataupun biaya pemrosesan masukan. Pengujian harus meniru sebaran sesi, konteks panjang, kegagalan, dan antrean, bukan satu kueri yang mudah.

Pengali puncak membandingkan jam tersibuk dengan rata-rata. Nilainya berasal dari model sehari yang dibagi menjadi 24 jam: satu pola harian kami geser di antara delapan wilayah dan jumlahkan sesuai porsi yang diasumsikan. Ini skenario perhitungan; tidak menghitung waktu tunggu satu kueri.

Untuk melihat perhitungan ini pada skala dunia, mari lakukan eksperimen pikiran. Seandainya masing-masing dari 10 miliar orang menggunakan Suveria sesuai profil yang diasumsikan, pada puncaknya akan diperlukan sekitar 2,1 miliar token keluaran per detik. Dengan kinerja yang diukur untuk DeepSeek-V4.1-Flash, sekitar 930 token per detik per kartu B200, diperlukan sekitar 2,25 juta kartu dan, dengan sekitar 1,75 kW per kartu termasuk server (asumsi kami, tanpa pengukuran), sekitar 4 GW daya. Untuk satu miliar orang, diperlukan sekitar 225 ribu kartu dan 0,4 GW, untuk satu juta sekitar 225 kartu. Sebagai perbandingan, pada awal 2026 Epoch AI memperkirakan bahwa daya komputasi terpasang di dunia untuk kecerdasan digital melebihi 15 juta unit setara kartu H100 dan membutuhkan lebih dari 10 GW daya.[^epoch] Ini penyederhanaan: profil yang diasumsikan ringan, sedangkan kerja intensif, model lebih besar, dan gambar membutuhkan berkali-kali lebih banyak, serta perangkat keras dan model berubah dengan cepat. Namun, ini menunjukkan orde besarnya: bantuan kecerdasan digital sehari-hari dalam cakupan ini bagi setiap orang akan membutuhkan daya lebih kecil daripada yang sudah beroperasi di dunia saat ini. Ini perhitungan sederhana, bukan bukti bahwa infrastruktur seperti itu akan tersedia untuk tujuan tersebut.

## 8. Biaya dan perhitungan bertanggal

Biaya bulanan reservasi tetap dalam perkiraan awal dapat ditulis sebagai: jumlah kartu × harga per kartu per jam × jumlah jam yang dibayar, ditambah memori, disk, transfer, perlindungan, pemantauan, pengoperasian, pembayaran, dan pajak. Perlu diperiksa komponen mana yang sudah termasuk dalam penawaran. Untuk pengoperasian sepanjang hari, satu bulan terdiri atas 672 hingga 744 jam; 730 jam merupakan perkiraan rata-rata.

Dalam perhitungan, kami membandingkan lima varian biaya: model lokal, instans sendiri pada perangkat keras sewaan, instans sendiri dalam lingkungan komputasi konfidensial dengan perlindungan yang dinyatakan penyedia dan perlu diperiksa, API konfidensial penyedia eksternal, serta API eksternal biasa. Varian biaya sesuai dengan varian perlindungan dalam bagian 2.3; penyewaan mesin tanpa konfidensialitas hanya kami tampilkan sebagai acuan harga, bukan varian Suveria. Model lokal belum kami hitung biayanya karena bergantung pada perangkat pengguna. Kami membandingkan cakupan kualitas, ketersediaan, dan perlindungan yang sama. Titik impas ialah biaya layanan lengkap dibagi pemanfaatan nyata, bukan biaya kartu dibagi jumlah akun terdaftar. API eksternal memudahkan pengujian kebutuhan pengguna, tetapi penyedianya memiliki aturan sendiri tentang akses data, sehingga kami tidak menerapkan janji pengoperasian konfidensial padanya.

### 8.1. Perhitungan bertanggal: keadaan pada 29 Oktober 2026

Manifesto mengajukan hipotesis bahwa, bahkan dengan jumlah peserta rutin yang relatif kecil, infrastruktur bersama dapat memberikan lebih banyak daya komputasi dan kecerdasan digital untuk setiap dolar daripada layanan tertutup, dengan perlindungan privasi berbasis pengamanan yang dapat diperiksa. Di bawah ini perhitungannya dengan harga pada 29 Oktober 2026. Asumsi: profil penggunaan dari bab 7 (20 permintaan per hari, masing-masing 600 token keluaran) dan skenario global (puncak per jam sekitar 1,51 × rata-rata), harga tanpa pajak, 730 jam sebulan untuk mengonversi harga sewa. Jumlah orang per mesin berarti jumlah peserta yang dapat dilayani mesin pada jam puncak: laju keluaran per detik × 86 400 / (20 × 600 × pengali puncak). Jumlah orang yang dapat diterima juga akan ditentukan oleh waktu tunggu jawaban yang diukur. Dalam tanda kurung kami berikan skenario terpusat di Eropa (pengali sekitar 1,87). Untuk DeepSeek-V4.1-Flash, kami menggunakan pengukuran penyedia Lambda pada empat kartu B200: sekitar 3 714 token keluaran per detik dengan 64 permintaan bersamaan.[^lambda-v41] Pengukuran itu dilakukan dengan dekode spekulatif yang tidak ingin kami gunakan dalam mode konfidensial (bab 3). Menurut perkiraan kami pada September, dalam keadaan itu penurunan laju pemrosesan dapat mencapai sekitar 30%, yang meningkatkan biaya per orang dalam proporsi serupa. Untuk kartu H200 dan B300, belum ada pengukuran model ini; kami mengasumsikan setiap set kartu dengan satu salinan model (8 × H200 atau separuh mesin 8 × B300) mencapai kinerja empat kartu B200. Ini asumsi optimistis: H200 merupakan generasi lebih tua, mode konfidensial dapat memperlambat kerja, dan pengukuran Lambda menyangkut permintaan lebih panjang daripada profil kami. Karena itu, kami juga memberikan varian hati-hati dengan separuh laju pemrosesan tersebut.

Bobot model berukuran sekitar 511 GB, sedangkan mesin vLLM menyarankan sekitar 614 GB memori kartu. Empat kartu H200 (564 GB) tidak cukup, sehingga satu salinan pada H200 membutuhkan delapan kartu. Panduan pembuat mesin untuk konfigurasi ini masih dalam pemeriksaan pada 29.10, dan pada kartu H200 koneksi antarkartu (NVLink) tidak dienkripsi oleh perangkat keras, berbeda dengan B200 dan B300.

| Varian | Konfidensialitas | Biaya bulanan | Orang per mesin | Biaya komputasi saja per orang |
| --- | --- | ---: | ---: | ---: |
| API DeepSeek | tidak ada, penyedia melihat isi | sesuai penggunaan | tidak berlaku untuk satu mesin; batas dan ketersediaan penyedia | 0,35–0,70 USD |
| API konfidensial dengan DeepSeek-V4.1-Flash (Confidential AI, Tinfoil, Phala) | dinyatakan penyedia, perlu diperiksa | sesuai penggunaan | tidak berlaku untuk satu mesin; batas dan ketersediaan penyedia | 0,70–1,25 USD |
| API Kimi K3.1 Pro (Moonshot) | tidak ada | sesuai penggunaan | tidak berlaku untuk satu mesin; batas dan ketersediaan penyedia | 5,40 USD |
| API konfidensial dengan Kimi K3 (Phala, NEAR AI) | dinyatakan penyedia, perlu diperiksa | sesuai penggunaan | tidak berlaku untuk satu mesin; batas dan ketersediaan penyedia | 8,10–8,91 USD |
| Mesin konfidensial sewaan 8 × H200 (Phala), DeepSeek, satu salinan model | atestasi prosesor dan kartu, perlu diperiksa | 23 506 USD dengan komitmen 180 hari, 32 266 USD sesuai permintaan | sekitar 17 750 (14 300), asumsi kapasitas | 1,32–1,82 USD (1,64–2,25) |
| Seperti di atas, varian hati-hati: separuh laju pemrosesan | atestasi prosesor dan kartu, perlu diperiksa | seperti di atas | sekitar 8 900 (7 150), asumsi kapasitas | 2,65–3,64 USD (3,29–4,51) |
| Mesin konfidensial sewaan 8 × B300 (Phala), Kimi K3 | atestasi prosesor dan kartu, perlu diperiksa | 45 552–47 888 USD | sekitar 4 800–7 600 (3 900–6 200), asumsi kapasitas | sekitar 6–10 USD (7,4–12,4) |
| 4 × B200 tanpa konfidensialitas terkonfirmasi (Lambda), DeepSeek | belum dikonfirmasi | 19 827 USD | sekitar 17 750 (14 300) | 1,12 USD (1,38) |
| 8 × B200 tanpa konfidensialitas terkonfirmasi (Lambda), DeepSeek, dua salinan masing-masing empat kartu | belum dikonfirmasi | 39 070 USD | sekitar 35 500 (28 700), asumsi kinerja dua salinan | 1,10 USD (1,36) |

Asal angka-angka ini: harga API dari daftar harga DeepSeek, Moonshot, Confidential AI, Tinfoil, Phala, dan NEAR AI;[^deepseek-cennik][^cai][^tinfoil][^phala-api][^near] harga mesin konfidensial dari daftar harga Phala;[^phala-gpu] sewa B200 di Lambda sebesar 6,79 USD per kartu per jam dalam instans empat kartu dan 6,69 USD dalam instans delapan kartu.[^lambda-cennik] Kapasitas Kimi kami ambil dari pengukuran pihak ketiga untuk Kimi K3 pada delapan kartu B300 yang menghasilkan sekitar 1 000–1 600 token keluaran per detik.[^spheron-kimi] Jumlah bulanan dengan komitmen tidak berarti pembayaran bulanan: Phala mewajibkan pembayaran seluruh periode di muka, tanpa pengembalian dana jika dihentikan lebih awal, sehingga 180 hari mesin 8 × H200 memerlukan 139 104 USD tunai saat pemesanan, sedangkan 180 hari mesin 8 × B300 memerlukan 269 568 USD.[^phala-gpu]

Implikasinya:

- Untuk profil yang diasumsikan, harga API dengan konfidensialitas yang dinyatakan sekitar 0,70–1,25 USD per orang per bulan, dari biaya sebanding dengan API biasa hingga sekitar 3,6 kali biayanya, bergantung pada penyedia dan waktu penggunaan. Harga terendah dinyatakan Confidential AI, dan penawaran ini juga harus kami periksa. API konfidensial memberi daya yang fleksibel tanpa menjalankan mesin sendiri, meskipun memiliki batas, antrean, dan kegagalan sendiri. Mesin konfidensial sewaan untuk DeepSeek yang kapasitasnya disesuaikan dengan puncak berjalan rata-rata sekitar dua pertiga kapasitasnya dalam skenario global dan berbiaya sekitar 1,32 USD per orang, kurang lebih sama dengan API konfidensial yang lebih mahal dan lebih tinggi daripada yang termurah. Dalam model per jam kami, simpul sendiri pertama dengan kelebihan beban diarahkan ke API konfidensial seharga 1,25 USD per orang muncul pada titik yang diperiksa sekitar 20 ribu orang aktif. Ini hasil asumsi yang digunakan, bukan ambang yang persis. Dengan API konfidensial lebih murah, mesin sewaan tidak menguntungkan pada skala ini.
- Penyewaan per jam satu mesin konfidensial penuh saat ini tidak memberi fleksibilitas untuk puncak petang: Phala mewajibkan sekurang-kurangnya sehari (8 × H200) atau sebulan (8 × B300), Confidential AI tiga bulan untuk 8 × B300 dengan 60 USD per jam, sedangkan VoltageGPU, yang menagih 8 × H200 per detik dengan 64,62 USD per jam, tidak mencakup konfigurasi ini maupun sakelar NVSwitch dalam bukti atestasi yang dipublikasikan.[^cai][^voltage] Selain itu, ada waktu untuk mengalokasikan mesin dan memuat bobot.
- Untuk Kimi, perhitungan bergantung pada pengukuran: API konfidensial berbiaya sekitar 8–9 USD per orang, sedangkan mesin sendiri 8 × B300 dengan pemanfaatan penuh sekitar 6 USD pada perkiraan kapasitas lebih tinggi dan sekitar 9,5 USD pada perkiraan lebih rendah. Biayanya lebih murah daripada API konfidensial jika satu mesin melayani lebih dari sekitar 5 100–5 600 orang aktif yang menggunakan model ini; pada perkiraan kapasitas lebih rendah (sekitar 4 800 orang), hal itu tidak tercapai.

Pembelian server sendiri: server Supermicro lengkap dengan delapan kartu B300 pada September 2026 berharga sekitar 663 ribu USD.[^supermicro] Biaya bulanan pembelian tersebut kami perkirakan sebagai berikut:

| Komponen | Jumlah bulanan |
| --- | ---: |
| Penyusutan server selama lima tahun | sekitar 11 ribu USD |
| Penyusutan server selama empat tahun | sekitar 13,8 ribu USD |
| Kolokasi | sekitar 1,9–3 ribu USD |
| Jaringan, komponen, dan servis (perkiraan) | sekitar 1,5 ribu USD |
| Total | sekitar 14–18 ribu USD |

Server seperti itu akan memuat dua salinan DeepSeek yang dalam skenario global melayani sekitar 35 ribu orang (dalam skenario Eropa sekitar 28 ribu), dengan sekitar 0,41–0,52 USD per orang. Dengan asumsi ini, pembelian lebih murah daripada API konfidensial seharga 1,11–1,25 USD mulai sekitar 12–17 ribu orang aktif, dan daripada yang termurah dinyatakan (0,70 USD) mulai sekitar 21–26 ribu. Perhitungan tidak mencakup biaya lengkap pemeliharaan dan pengukuran konfigurasi ini; pembelian juga membutuhkan uang tunai di muka, petugas siaga sepanjang hari, dan permintaan tetap selama bertahun-tahun, sedangkan akses fisik ke perangkat keras saat itu berada pada yayasan (bab 2). Ini perkiraan kami, bukan penawaran.

- Mesin konfidensial dengan banyak kartu saat ini tersedia secara publik di AS. Di Uni Eropa, kami menemukan mesin konfidensial dengan satu kartu H100,[^azure-ncc] yang tidak dapat memuat DeepSeek lengkap maupun Kimi. API konfidensial dengan server di Uni Eropa juga ditawarkan Privatemode (Edgeless Systems, Jerman), dengan pilihan model lebih sedikit.[^privatemode] Ini juga pernyataan penyedia yang perlu diperiksa.
- Katalog independen yang memeriksa API konfidensial, dalam pengamatan 29 Oktober 2026 pukul 14:00 UTC, tidak mengonfirmasi pemeriksaan penuh satu pun dari 95 rute yang diperiksa; yang paling sering tidak ada ialah bukti identitas program yang berjalan, asal kode, dan keterikatan permintaan dengan mesin.[^katalog] Ini hasil bukti yang tersedia, bukan bukti bahwa layanan mengungkapkan isi. Sebelum memeriksanya sendiri, kami memperlakukan konfidensialitas layanan tersebut sebagai pernyataan penyedia.
- Perhitungan mencakup komputasi. Lingkungan pribadi (gerbang, ingatan, berkas) dalam satu atau dua mesin konfidensial dengan empat prosesor virtual dan 8 GB memori di Phala berbiaya sekitar 168 USD per bulan per mesin, sedangkan disk ditagih terpisah, sekitar 10 USD per 100 GB.[^phala-cvm] Apakah ukuran itu cukup akan kami periksa dalam uji coba perintis. Dengan 170–340 USD per bulan, untuk 30 orang biayanya sekitar 6–11 USD per orang, dan untuk 1000 orang beberapa puluh sen. Perhitungan tidak mencakup kerja manusia, tinjauan keamanan, pembayaran, ataupun cadangan untuk kegagalan.
- Langganan populer berharga sekitar 20 USD per bulan, sedangkan percakapan DeepSeek gratis.[^abonamenty] Paket seharga 100–200 USD memberi nilai setara ribuan dolar menurut daftar harga API untuk kerja intensif dengan agen;[^semianalysis] kami tidak bersaing dalam harga dengan paket seperti itu. Kami mengusulkan penagihan penggunaan nyata dengan privasi yang dapat diperiksa.

Status hipotesis manifesto pada 29 Oktober 2026: perhitungan mendekatkan kami pada hipotesis itu, tetapi tidak mengonfirmasinya. Pemrosesan dengan konfidensialitas yang dinyatakan dan atestasi sudah tersedia dalam daftar harga terbuka dan, untuk profil penggunaan yang diasumsikan, berbiaya sekitar 0,70–1,25 USD per orang per bulan, sehingga kelompok kecil dapat memulai dengannya sesuai biaya, sedangkan dengan asumsi kami, infrastruktur sendiri dapat menjadi lebih murah pada belasan ribu hingga beberapa puluh ribu orang aktif. Tiga hal akan menentukan, dan akan kami periksa dalam uji dari bab 9: apakah konfidensialitas layanan ini lolos pemeriksaan independen, apakah kualitas model yang tersedia cukup untuk tugas yang membuat orang datang ke Suveria, dan bagaimana profil lalu lintas nyata. Perhitungan kami perbarui setiap kali harga berubah secara berarti dan setelah setiap uji, sedangkan versi terdahulu kami simpan.

### 8.2. Langkah infrastruktur dan kartu keputusan

Infrastruktur kami kembangkan bertahap, dengan setiap langkah memberi peserta nilai tersendiri tanpa kewajiban beralih ke langkah berikutnya: mula-mula API konfidensial dan lingkungan pribadi dalam mesin konfidensial (jika sebelum peluncuran terkumpul cukup dana, kami dapat langsung mulai dari langkah berikutnya), kemudian menyewa mesin konfidensial sendiri, selanjutnya membeli perangkat keras dan menempatkannya di pusat data eksternal, dan dalam jangka jauh, jika terbukti lebih unggul, bangunan sendiri. Langkah berikutnya didasari data pengukuran: biaya layanan lengkap, lalu lintas nyata, waktu jawaban pada puncak, kemampuan memelihara pengamanan dan menangani kegagalan, serta untuk pembelian juga pendanaan perbaikan, penggantian perangkat keras, dan orang yang mengambil tanggung jawab. Menyewa mesin sendiri juga dapat masuk akal jika model yang diperlukan tidak tersedia dalam API konfidensial atau kami menginginkan kendali penuh atas apa yang berjalan.

Setiap perpindahan kami uraikan dalam kartu keputusan: manfaat yang diperoleh, biaya lengkap, risiko, syarat mulai dan menarik diri, cara memindahkan data dan kunci, serta kesesuaian dengan [aturan cadangan dan peluncuran pilar berikutnya](whitepaper-zasady-fundacji.md) (bab 8 whitepaper prinsip yayasan). Penggabungan mesin sendiri dengan API konfidensial untuk puncak lalu lintas hanya kami izinkan jika setiap jalur memiliki tingkat perlindungan yang diterima; perpindahan ke varian yang lebih lemah memerlukan keputusan pengguna yang terpisah dan sadar. Pengukuran pertama kami rencanakan pada satu kartu konfidensial dengan model lebih kecil, kemudian pada mesin yang memuat model lengkap.

Daya kami sesuaikan dengan lalu lintas tanpa menyesuaikan semua kapasitas dengan puncak tertinggi. Kami merancang antrean singkat dengan waktu tunggu yang terlihat; waktu nyata, batas, dan perilaku setelah kapasitasnya habis akan kami ukur dalam uji coba perintis. Daya fleksibel untuk puncak lebih panjang terutama disediakan API konfidensial, asalkan mempertahankan tingkat perlindungan yang diterima, persetujuan, dan batas pengeluaran pengguna; jika jalur itu tidak ada, kami menyampaikan dengan jujur adanya waktu tunggu atau ketidaktersediaan. Sewa per jam masuk akal untuk model yang tidak ada dalam API konfidensial atau jauh lebih mahal di sana, dan hanya jika penyedia benar-benar memungkinkan mesin konfidensial dijalankan dan dilepas dengan cepat. Daya mesin sendiri yang tidak terpakai pada jam sepi ingin kami gunakan untuk tugas yayasan, seperti pengolahan materi untuk Omniforum; nilainya menurut harga API bukan pemasukan anggaran, sehingga tugas seperti itu memiliki tujuan dan anggaran sendiri. Setelah uji coba perintis pertama, kami ingin memeriksa dua mode: "Percakapan" untuk kerja biasa dengan asisten dan "Tanpa terburu-buru" untuk tugas yang dapat menunggu, misalnya terjemahan dokumen. Dalam mode "Tanpa terburu-buru", kami menunjukkan perkiraan rentang waktu mulai, perkiraan biaya, anggaran maksimum, kemungkinan pembatalan dengan penagihan pekerjaan yang telah dilakukan, dan informasi perlindungan yang sama. Harga lebih rendah untuk pekerjaan seperti itu hanya mungkin jika cara pembagian biayanya dijelaskan secara terbuka dan biaya tetap tidak dihitung dua kali.

### 8.3. Pengukuran penggunaan tanpa isi percakapan

Untuk menagih penggunaan nyata, kami mengukur sumber daya yang diperlukan dalam pelaksanaan tugas dan menjelaskan secara jelas bagian biaya tetap. Pengukur penagihan dibatasi pada data yang diperlukan untuk memeriksa biaya, dan isi percakapan tidak diperlukan untuk menerbitkan tagihan. Dalam pengujian, kami akan memeriksa ketepatan pengukuran, cara pengguna memeriksanya, cakupan metadata yang diungkapkan, dan perilaku layanan setelah batas pengeluaran tercapai. Aturan tagihan, pembulatan, pembayaran di muka, dan pengembalian dana dijelaskan dalam [whitepaper prinsip yayasan](whitepaper-zasady-fundacji.md).

Batas pengeluaran yang ditetapkan peserta dimaksudkan berfungsi sebagai batas, bukan peringatan setelah kejadian. Sebagian penyedia baru menagih permintaan yang sedang berjalan setelah selesai, sehingga batas mereka dapat terlampaui; misalnya, Tinfoil menjelaskannya demikian.[^tinfoil] Karena itu, kami merancang pencadangan: sebelum mengirim permintaan, gerbang Suveria menahan sementara jumlah sebesar biaya maksimum yang diizinkan untuk permintaan tersebut dari saldo, dengan memperhitungkan permintaan lain yang sedang berjalan, serta membatasi jumlah permintaan bersamaan dan panjang jawaban. Setelah selesai, kami menagih biaya nyata dan melepaskan cadangan yang tidak digunakan. Ini persyaratan untuk dibangun dan diuji, bukan fungsi yang sudah berjalan.

## 9. Uji penerimaan dan catatan hasil

Sebelum menyebut rilis apa pun konfidensial, kami akan mendokumentasikan sekurang-kurangnya:

- atestasi yang benar;
- penolakan mengirim data setelah kode atau kunci diganti;
- isolasi sesi;
- batas kemampuan administrator;
- tidak adanya isi dalam log, dump, dan telemetri;
- penanganan cache;
- penghapusan dan pemulihan;
- perilaku setelah kegagalan;
- batas alat;
- biaya saat terbebani.

Hasil mencakup versi konfigurasi dan skenario ketika kami mencoba menembus perlindungan.

Kami ingin setiap rilis Suveria lolos seluruh persyaratan pembuktian dari sekurang-kurangnya satu pemeriksa independen layanan konfidensial: perangkat keras dan status pengamanan, kemutakhiran bukti, keterikatan kunci koneksi dengan lingkungan terlindungi, identitas program yang berjalan, asal kode, dan keterikatan permintaan dengan mesin tertentu, sambil mempertahankan ketersediaan. Hasil kami publikasikan dengan tanggal pengamatan, versi kriteria, dan bukti untuk rilis, model, serta rute permintaan tertentu, sedangkan afiliasi pemeriksa kami jelaskan bersama hasil. Kami tidak menjanjikan tempat dalam peringkat apa pun. Lolos pemeriksaan berarti mencapai kontrol yang dijelaskan pada waktu tertentu, dengan keterbatasan yang terbuka, dan tidak menggantikan audit ataupun pengujian kami sendiri.

Ketika kami menjalankan varian konfidensial sendiri, kami akan mengajukan Suveria ke setiap katalog independen yang memeriksa konfidensialitas pengoperasian model dan memberinya titik akses untuk memeriksa atestasi; contoh pertama ialah confidentialinference.net (keadaan pada 31 Oktober 2026).[^confidentialinference] Kami tidak menjanjikan pencantuman karena kataloglah yang memutuskannya; kami menjanjikan pengajuan, jawaban atas pertanyaannya, dan publikasi hasil, termasuk yang buruk, disertai tanggal. Katalog hanya memeriksa apa yang terlihat dari luar, biasanya atestasi dan saluran koneksi; tidak menggantikan audit kode, konfigurasi, ataupun penilaian saluran samping.

Uji penyimpanan dan pemindahan mencakup:

- pemulihan salinan terenkripsi pada perangkat lain yang berhak serta penolakan pembacaan tanpa kunci yang sesuai;
- kehilangan satu perangkat, pemulihan akses dengan metode yang dipilih, dan penjelasan jelas tentang akibat kehilangan semua kunci;
- sinkronisasi perubahan bersamaan tanpa diam-diam menimpa salah satu versi;
- pembacaan ekspor dalam alat independen tanpa akun di operator awal, dengan perbandingan materi asli, riwayat, sumber, dan hubungan;
- pembatasan cakupan integrasi dan penghentian efektif akses berikutnya setelah izin dicabut.

Tahapan:

1. uji kegunaan pada materi yang tidak sensitif;
2. uji teknis perlindungan;
3. uji coba perintis terbatas dengan ketentuan jelas;
4. peningkatan skala secara bertahap.

Sebelum uji coba perintis, kami akan menetapkan dan memublikasikan ambang: waktu hingga kata pertama jawaban, biaya komputasi per orang dengan profil yang diukur, dan kualitas model menurut [whitepaper materi dan tolok ukur](whitepaper-materialy-i-benchmark.md). Uji coba perintis akan kami anggap berhasil jika memenuhi ketiganya.

Perubahan model, firmware, atau cara masuk ke akun dapat memerlukan penilaian kelayakan ulang, dan pembaruan tidak boleh diam-diam melemahkan perlindungan yang disepakati. Setiap rilis memiliki kartu terbuka:

- cakupan operasi;
- bukti dari pengujian;
- keterbatasan yang diketahui;
- orang yang bertanggung jawab;
- biaya;
- jalur pelaporan masalah;
- rencana penarikan.

Penemuan celah diikuti pembatasan paparan, pemberitahuan kepada orang terdampak, dan perbaikan yang dapat diperiksa.

Kami ingin menjalankan pengujian secara terbuka. Kami mengundang orang yang bergerak dalam keamanan, kriptografi, infrastruktur, dan aplikasi, juga kreator yang memperlihatkan teknologi kepada publik luas, untuk bersama-sama merancang pengujian dan mencoba menembus perlindungan pada akun uji terpisah dengan data rekaan. Kami juga mengundang pengkritik. Kami tidak membayar promosi, dan setiap kerja sama kami tandai sesuai [daftar manfaat](whitepaper-zasady-fundacji.md) (bab 7 whitepaper prinsip yayasan). Hasil, termasuk yang gagal, masuk ke catatan hasil. Jika ingin terlibat, tulislah ke [salve@novusignis.org](mailto:salve@novusignis.org?subject=%5BDo%C5%82%C4%85cz%5D%20Pr%C3%B3by%20Suverii) dengan subjek "[Bergabung] Percobaan Suveria".

Pengujian terpenting: tim dengan hak operator di luar lingkungan konfidensial (gerbang, disk, jaringan, log) mencoba membaca percakapan akun uji yang di dalamnya disembunyikan rangkaian karakter rahasia. Jika siapa pun berhasil mengambilnya, termasuk kami, pengujian gagal.

Rilis pertama Suveria akan kami sediakan bagi beberapa orang yang membantu mengonfigurasinya. Jika menggunakan API konfidensial, kartu perlindungannya (bagian 2.3) akan menyatakan dengan jelas bahwa model berjalan di penyedia eksternal, atestasi dinyatakan penyedia dan belum kami periksa, serta metadata tidak dilindungi. Karena orang-orang pertama juga membantu mengoperasikan layanan, hasil pertama yang akan kami publikasikan ialah pengujian terpenting di atas, disertai uraian apa yang berhasil dilakukan operator.

**Catatan hasil.** Keadaan pada 29 Oktober 2026: kami belum melaksanakan satu pun pengujian yang diuraikan, belum menyewa kartu grafis, dan belum menjalankan model di Suveria. Setiap hasil berikutnya kami tambahkan di sini dengan tanggal, konfigurasi, skenario, dan kesimpulan, juga ketika pengujian gagal.

Yang masih harus diputuskan:

- model pertama dan tingkat kualitas yang dapat diterima;
- pemeriksaan independen API konfidensial dan mesin konfidensial serta ketersediaannya di yurisdiksi dengan perlindungan data pribadi yang kuat, seperti Uni Eropa dengan RODO;
- waktu jawaban;
- aturan kunci dan ingatan;
- cakupan minimum data penagihan;
- kewajiban hukum operator terkait laporan penyalahgunaan;
- cara mendanai kesinambungan.

[Whitepaper prinsip yayasan](whitepaper-zasady-fundacji.md) menjelaskan anggaran, tagihan, dan tanggung jawab, sedangkan [whitepaper materi dan tolok ukur](whitepaper-materialy-i-benchmark.md) penilaian perilaku model.

Yayasan Novus Ignis, Poznań, KRS 0001269575. Situs dan manifesto: novusignis.org. Masukan: salve@novusignis.org.

## Catatan kaki

[^teefail]: [TEE.fail: Breaking Trusted Execution Environments via DDR5 Memory Bus Interposition](https://tee.fail/). Penelitian Georgia Tech, Purdue University, dan Synkhronix, diterbitkan 28.10.2025: pengambilan kunci pengesahan Intel TDX dan SGX serta AMD SEV-SNP melalui sambungan fisik ke bus memori DDR5, dengan konsekuensi bagi komputasi konfidensial NVIDIA. Memerlukan akses fisik ke server; Intel dan AMD menganggap serangan seperti ini berada di luar cakupan perlindungan. Ulasan: [The Hacker News](https://thehackernews.com/2025/10/new-teefail-side-channel-attack.html). Diakses 28.10.2026.

[^local-first]: [Kleppmann, Wiggins, van Hardenberg dan McGranaghan (2019): Local-first software: You own your data, in spite of the cloud](https://www.inkandswitch.com/essay/local-first/). Kajian. Prinsip penyimpanan salinan utama di perangkat pengguna dan peran pendukung server, termasuk salinan terenkripsi.

[^apple-pcc]: [Apple: Private Cloud Compute](https://security.apple.com/blog/private-cloud-compute/). Uraian arsitektur. Contoh hubungan konfidensialitas dengan pemeriksaan perangkat lunak dan keterbukaan sistem.

[^ohttp]: [RFC 9458: Oblivious HTTP](https://www.rfc-editor.org/rfc/rfc9458.html). Spesifikasi. Pemisahan pengetahuan tentang pengirim dan permintaan dengan model kepercayaan tertentu; bukan anonimitas penuh.

[^weiss-keylogging]: [Weiss, Ayzenshteyn, Amit dan Mirsky (2024): What Was Your Prompt? A Remote Keylogging Attack on AI Assistants](https://www.usenix.org/conference/usenixsecurity24/presentation/weiss). Publikasi ilmiah (USENIX Security 2024; versi awal arXiv 2403.09751). Dari panjang paket terenkripsi dalam aliran jawaban, pengamat jaringan merekonstruksi topik dan sebagian isi jawaban asisten. Diakses 30.10.2026.

[^whisper-leak]: [McDonald dan Bar Or (2025): Whisper Leak: a side-channel attack on Large Language Models](https://arxiv.org/abs/2511.03675) serta [ulasan Microsoft (7.11.2025)](https://www.microsoft.com/en-us/security/blog/2025/11/07/whisper-leak-a-novel-side-channel-cyberattack-on-remote-language-models/). Publikasi penelitian dan uraian produsen. Topik percakapan dapat dikenali dari ukuran dan ritme paket dalam aliran jawaban terenkripsi; sebagian penyedia telah menambahkan pengisian acak pada paket. Diakses 30.10.2026.

[^nvidia-platformy]: [NVIDIA: platform kontainer konfidensial yang didukung](https://docs.nvidia.com/datacenter/cloud-native/confidential-containers/latest/supported-platforms.html). Dokumentasi produsen. Persyaratan seluruh konfigurasi prosesor, kartu, dan perangkat lunak.

[^nvidia-ppcie-v2]: [NVIDIA: Protected PCIe v2, Introduction](https://docs.nvidia.com/attestation/attestation-client-tools-ppcie-sdk-cpp/latest/ppcie_introduction.html). Dokumentasi produsen. Dalam mode PPCIe v2, jaringan NVLink dan NVSwitch termasuk bagian sistem yang tepercaya; perlindungan PCIe tidak berarti seluruh lalu lintas antarkartu dienkripsi.

[^nvidia-blackwell]: [NVIDIA: Trusted Computing Solutions 595](https://docs.nvidia.com/595trd1-trusted-computing-solutions-release-notes.pdf). Dokumentasi produsen. Mode komputasi konfidensial pada banyak kartu Blackwell, termasuk perlindungan koneksi; memerlukan konfigurasi yang sesuai.

[^osi]: [OSI: Open Source AI Definition](https://opensource.org/ai/open-source-ai-definition). Definisi. Bobot terbuka tidak menentukan terpenuhinya seluruh definisi sistem terbuka.

[^deepseek]: [DeepSeek-V4.1-Flash: kartu model](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash). Dokumentasi produsen. Arsitektur, lisensi MIT, dan kemampuan model yang dinyatakan; bukan pengukuran kinerja Suveria.

[^dpga]: [Digital Public Goods Alliance: standar](https://www.digitalpublicgoods.net/standard). Standar. Kriteria penilaian barang publik digital; arah rancangan bukan pengakuan DPGA yang telah diperoleh.

[^lambda-cennik]: [Lambda: daftar harga instans](https://lambda.ai/pricing). Daftar harga penyedia. NVIDIA B200 SXM6 180 GB: 6,79 USD per kartu per jam dalam instans empat kartu dan 6,69 USD dalam instans delapan kartu; H100 SXM 80 GB: 3,99 USD; harga sesuai permintaan, tanpa pajak, tanpa mode konfidensial. Diakses 29.10.2026.

[^lambda-v41]: [Lambda: DeepSeek-V4.1-Flash, hasil pengukuran kinerja](https://lambda.ai/inference-models/deepseek-ai/deepseek-v4.1-flash). Pengukuran penyedia. 4 × B200, vLLM, paralelisme tensor 4, dekode spekulatif, sekitar 8 192 token masukan dan 1 024 keluaran per permintaan; dengan 64 permintaan bersamaan, total 3 713,9 token keluaran per detik dan rata-rata 66,8 token per detik per percakapan. Tanpa tanggal pengukuran. Diakses 28.10.2026.

[^azure-ncc]: [Azure: daftar harga mesin NCC40ads H100 v5](https://prices.azure.com/api/retail/prices?$filter=armSkuName%20eq%20%27Standard_NCC40ads_H100_v5%27%20and%20priceType%20eq%20%27Consumption%27) serta [uraian seri](https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/gpu-accelerated/nccadsh100v5-series). Daftar harga penyedia. Mesin konfidensial dengan satu kartu H100 NVL 94 GB; 6,98 USD per jam (East US 2) hingga 8,90 USD (West Europe), Linux, pembayaran sesuai penggunaan. Diakses 28.10.2026.

[^deepseek-cennik]: [DeepSeek: daftar harga API (versi Tionghoa)](https://api-docs.deepseek.com/zh-cn/quick_start/pricing). Daftar harga penyedia. Model deepseek-flash (V4.1-Flash-1017): masukan yang tidak ditemukan dalam cache: 1 CNY di luar puncak dan 2 CNY saat puncak; keluaran: 4 dan 8 CNY per juta token. Konversi ke USD menurut [ringkasan eesel](https://www.eesel.ai/blog/deepseek-v4-1-flash-pricing), sumber pendukung. Diakses 28.10.2026.

[^abonamenty]: Harga langganan: [ChatGPT Plus](https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus), [Claude Pro](https://claude.com/pricing), [Google AI Pro](https://gemini.google/subscriptions/), [Kimi Plus (ringkasan geotoolbox)](https://geotoolbox.ai/blog/kimi-pricing); percakapan DeepSeek gratis ([uraian](https://en.wikipedia.org/wiki/DeepSeek_(chatbot))). Harga bulanan dalam USD, tanpa pajak; Kimi Plus 19 USD. Diakses 28–29.10.2026.

[^kimi-k31]: [Moonshot: peluncuran Kimi K3.1 Pro](https://forum.moonshot.ai/t/kimi-k3-1-pro-has-launched-start-exploring-now/629) dan [Kimi: uraian K3.1 Pro (24.10.2026)](https://www.kimi.com/news/kimi-k3-1-pro). Dokumentasi produsen. Versi Kimi K3 yang dilatih lebih lanjut, sekitar 3 triliun parameter, konteks 1 juta token, bobot diumumkan akan terbit sebelum 4.11.2026; lisensi belum diumumkan. Harga API menurut OpenRouter: 2 / 10 USD per juta token.

[^kimi-k3]: [Kimi K3: kartu model](https://huggingface.co/moonshotai/Kimi-K3). Dokumentasi produsen. 2,8 triliun parameter, 104 miliar aktif, konteks sekitar 1 juta, MXFP4, lisensi Kimi K3 License.

[^spheron-kimi]: [Spheron: penerapan Kimi K3 (19.10.2026)](https://www.spheron.network/blog/deploy-kimi-k3-gpu-cloud/). Panduan penyedia. Berkas bobot 1 560,94 GB, konfigurasi yang memuat model. Kapasitas sekitar 1 000–1 600 token per detik pada 8 × B300 menurut ringkasan pengukuran pihak ketiga pada 29.10.2026; sebaran hasil lebar.

[^aa]: [Artificial Analysis: Kimi K3.1 Pro dan DeepSeek V4.1 Flash 1017](https://artificialanalysis.ai/models/comparisons/kimi-k3-1-pro-vs-deepseek-v4-1-flash-1017). Perbandingan independen. Indeks v5 pada 28.10.2026: 46 dan 32; kecepatan sekitar 36 dan 178 token per detik. Diakses 29.10.2026.

[^tinfoil]: [Tinfoil: daftar harga](https://tinfoil.sh/pricing). Daftar harga penyedia. DeepSeek-V4.1-Flash 0,65 USD masukan dan 1,45 USD keluaran per juta token; uraian batas pengeluaran. Diakses 29.10.2026.

[^phala-api]: [Phala: model konfidensial](https://phala.com/confidential-ai-models). Daftar harga penyedia. DeepSeek V4.1 Flash 1017: 0,75 / 1,60 USD; Kimi K3: 3 / 15 USD per juta token; atestasi gerbang dan konfirmasi jawaban menurut penyedia. Diakses 29.10.2026.

[^near]: [NEAR AI: daftar harga](https://near.ai/pricing). Daftar harga penyedia. Kimi K3: 3,30 / 16,50 USD per juta token. Halaman utama menampilkan harga berbeda; perbedaannya perlu dijelaskan. Diakses 29.10.2026.

[^phala-gpu]: [Phala: kartu grafis konfidensial](https://phala.com/gpu-tee) dan [daftar harga](https://cloud.phala.com/about/pricing). Daftar harga penyedia. 8 × H200: 44,20 USD per jam sesuai permintaan, 32,20 USD dengan komitmen 180 hari; 8 × B300: 65,60 USD (30 hari), 62,40 USD (180 hari); Intel TDX dengan komputasi konfidensial NVIDIA; tidak ada mesin di Eropa. Diakses 29.10.2026. Komitmen dibayar di muka, tanpa pengembalian dana jika dihentikan lebih awal.

[^privatemode]: [Privatemode (Edgeless Systems)](https://www.privatemode.ai/). Penawaran penyedia. API konfidensial dengan server di Uni Eropa dan atestasi jarak jauh; pilihan model terbuka lebih sedikit daripada penyedia AS, harga tidak diumumkan secara publik. Konfidensialitas dinyatakan penyedia, belum kami periksa. Diakses 30.10.2026.

[^katalog]: [Confidential Inference Directory: metodologi dan pengamatan](https://confidentialinference.net/attestation). Katalog independen, disponsori perusahaan yang menawarkan inferensi konfidensial. 0 dari 95 rute terverifikasi dari awal hingga akhir dalam pengamatan 29.10.2026, 14:00:19 UTC.

[^supermicro]: [Supermicro: server AS-8126GS-NB3RT-01-G2](https://store.supermicro.com/us_en/8u-gpu-gold-series-as-8126gs-nb3rt-01-g2.html) serta [GPU Per Hour: harga server NVIDIA](https://gpuperhour.com/blog/nvidia-gpu-prices). Penawaran produsen dan ringkasan harga. Server lengkap dengan delapan kartu B300: 662 845,95 USD (21.09.2026).

[^semianalysis]: [BigGo Finance tentang analisis SemiAnalysis (7.10.2026)](https://finance.biggo.com/news/173039423dab79be). Analisis industri. Paket seharga 200 USD memberi nilai sekitar 12 ribu USD menurut daftar harga API untuk kerja intensif; perkiraan margin, bukan data perusahaan.

[^sglang-k3]: [SGLang: panduan Kimi K3](https://github.com/sgl-project/sglang/blob/main/docs/cookbook/autoregressive/Moonshotai/Kimi-K3.mdx). Dokumentasi mesin. Konfigurasi Kimi K3 yang telah diperiksa pada 8 × B300; tidak menyangkut Kimi K3.1 maupun mode konfidensial.

[^phala-cvm]: [Phala: daftar harga mesin konfidensial](https://phala.com/pricing). Daftar harga penyedia. tdx.large (4 prosesor virtual, 8 GB memori): 0,23 USD per jam; disk 0,000139 USD per GB per jam. Diakses 29.10.2026.

[^itu]: [ITU: Facts and Figures 2025, penggunaan internet](https://www.itu.int/itu-d/reports/statistics/2025/10/15/ff25-internet-use). Statistik internasional. Persentase pengguna internet di wilayah dunia pada 2025 (sekitar 6 miliar orang, 74% penduduk); porsi wilayah dalam perhitungan kami merupakan perkiraan: persentase × penduduk wilayah.

[^cai]: [Confidential AI: daftar harga](https://confidential.ai/pricing). Daftar harga penyedia, harga pada 26.10.2026. DeepSeek V4.1 Flash: 0,30 USD masukan, 0,03 USD masukan dari cache, 1,20 USD keluaran per juta token; mesin 8 × B300 seharga 60 USD per jam, minimum tiga bulan, alokasi dalam beberapa hari. Konfidensialitas dinyatakan penyedia, belum kami periksa.

[^voltage]: [VoltageGPU: daftar harga](https://voltagegpu.com/pricing) dan [cakupan bukti](https://voltagegpu.com/). Daftar harga dan pernyataan penyedia. 8 × H200 seharga 64,62 USD per jam dengan penagihan per detik; bukti yang dipublikasikan tidak mencakup atestasi konfigurasi ini maupun sakelar NVSwitch.

[^epoch]: [The Decoder tentang data Epoch AI (8.01.2026)](https://the-decoder.com/global-ai-compute-hits-15-million-h100-equivalents-epoch-ai-finds/) dan [Epoch AI: AI Chip Users](https://epoch.ai/data/ai-chip-users). Ringkasan lembaga penelitian independen. Daya komputasi terpasang untuk kecerdasan digital lebih dari 15 juta unit setara NVIDIA H100, kebutuhan daya lebih dari 10 GW. Perkiraan, bukan pengukuran.

[^confidentialinference]: [confidentialinference.net](https://confidentialinference.net): perbandingan penyedia yang menjalankan model dalam lingkungan eksekusi tepercaya, dengan pemeriksaan atestasi bertanggal; situs disponsori perusahaan Enclava, saat diakses ada sebelas penyedia. Diakses 31.10.2026.
