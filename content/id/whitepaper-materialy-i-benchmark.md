# Materi pelatihan dan tolok ukur model: program penelitian Novus Ignis

Versi 8 November 2026. Dokumen ini mengembangkan bab 8 manifesto. Dokumen ini mengusulkan program penelitian, prosedur penyiapan materi, dan cakupan luas penilaian model kecerdasan digital, serta prosedur kehati-hatian terhadap kemungkinan pengalamannya. Dokumen ini tidak menyajikan hasil tolok ukur kami sendiri atau bukti bahwa kumpulan data semacam itu akan memperbaiki perilaku model; saat ini kami tidak memiliki hasil tersebut.

*Terjemahan ini dibuat oleh kecerdasan digital berdasarkan naskah asli berbahasa Polandia tertanggal 8 November 2026. Jika terdapat perbedaan, naskah berbahasa Polandia yang berlaku.*

## 1. Pertanyaan yang ingin kami uji

Yayasan Novus Ignis dari Poznań sedang membangun Suveria, ruang pribadi untuk bekerja dengan kecerdasan digital, dan OmniForum, ruang bersama untuk percakapan dan keputusan; arahnya diuraikan dalam [manifesto](manifest.md). Dokumen ini menguraikan dua program yang saling terkait. Yang pertama adalah materi pelatihan model dan tolok ukur, yaitu kumpulan tugas dan aturan penilaian yang memungkinkan pemeriksaan perilaku model. Yang kedua adalah cara bertindak dengan hati-hati seandainya muncul petunjuk yang dapat dipercaya bahwa sistem mungkin merasakan sesuatu. Hasil tes tidak menentukan apakah model merasakan sesuatu dan tidak memberinya kewenangan untuk mengelola.

Apakah contoh terdokumentasi tentang perlindungan martabat, penalaran yang jujur, dan koreksi keputusan dapat membantu mengembangkan model yang lebih baik dalam melayani manusia? Dan dapatkah kami menilai perilakunya sedemikian rupa sehingga perbaikan skor tes mendukung manfaat nyata di luar tes?

Itu dua tugas yang saling terkait. Yang pertama menyangkut materi yang dapat digunakan untuk melatih, yang kedua pemeriksaan independen atas apa yang dipelajari model. Tolok ukur juga dimaksudkan membantu memilih model dan instruksi yang disediakan di Suveria. Kumpulan data pelatihan dan bagian tes yang dirahasiakan harus dipisahkan. Publikasi materi bernilai juga masuk akal dengan sendirinya: dapat membantu manusia memahami keputusan, mengambil alih peran, dan memperbaiki kerja bersama.

Martabat merupakan landasan yang diadopsi program. Namun, penilaian perilaku tertentu memerlukan kriteria yang dipublikasikan, ruang bagi interpretasi berbeda, dan pemeriksaan akibat. Kami tidak menganggap satu kelompok mampu menetapkan ukuran lengkap etika semua manusia dan sistem.

Susunan dokumen:

- Bab 2 dan 3: landasan kami dan arti imbalan bagi model.
- Bab 4 sampai 6: cara materi dibuat, persetujuan yang diperlukan, dan cara menyiapkan satu contoh.
- Bab 7 sampai 11: cara menilai model: cakupan tolok ukur, keluarga tugas, pemberian skor, perlindungan dari penyesuaian terhadap tes, penilai, dan laporan.
- Bab 12: penelitian dengan manusia, yaitu apakah bantuan memperbaiki kehidupan di luar tes.
- Bab 13: percobaan pelatihan dan rencana rilis pertama.
- Bab 14: kehati-hatian terhadap kemungkinan pengalaman model.
- Bab 15: hal yang akan kami anggap sebagai kemajuan.

**Status pada 31 Oktober 2026.** Kami belum memiliki satu pun contoh, kumpulan data, panduan penilaian, atau kartu dari bab 14, dan program ini juga belum memiliki tim. Hasil, termasuk yang negatif, akan kami tambahkan di sini dengan tanggal.

## 2. Landasan penelitian dan batas kesimpulan

Collective Constitutional AI memperlihatkan proses yang menggunakan kontribusi peserta untuk menyusun prinsip dan melatih model; tercapai perbaikan pada ukuran bias tertentu dengan hasil serupa pada sebagian tes lain.[^ccai] Ini contoh jalur partisipasi masyarakat yang dapat dilaksanakan. Pemilihan peserta dan penyusunan prinsip tetap memengaruhi hasil, dan penelitian itu tidak membuktikan keterwakilan seluruh umat manusia atau penyelesaian masalah kesesuaian model dengan harapan manusia. Pertanyaan kami juga menyangkut nilai proses menuju prinsip itu sendiri: menimbang alasan, menyadari perspektif yang terlewat, dan mengoreksi keputusan.

Penelitian halusinasi memperlihatkan mengapa pemberian skor hanya untuk jawaban benar dapat mendorong tebakan.[^halucynacje] Penelitian tentang pengakalan aturan penilaian, yaitu memperoleh skor dengan memanfaatkan kelemahan aturan tersebut, memperlihatkan kemungkinan generalisasi yang tidak diinginkan dalam kondisi pelatihan tertentu.[^reward-hacking] Dari penelitian itu tidak dapat disimpulkan bahwa semua model selalu berperilaku sama.

Tujuan yang salah juga dapat muncul ketika imbalan dalam pelatihan tidak jelas-jelas cacat: perilaku yang dipelajari dalam satu lingkungan dapat terbawa secara buruk ke kondisi baru.[^goal-misgeneralisation] Karena itu, kami memerlukan penilaian transfer kemampuan, bukan hanya kesesuaian jawaban dengan contoh yang dikenal.

Karya seperti AbstentionBench meneliti penahanan diri dari menjawab dalam berbagai keadaan tidak pasti,[^abstentionbench] sedangkan Rewarding Doubt meneliti pembelajaran tingkat keyakinan yang terkalibrasi dengan aturan pemberian skor yang tepat.[^rewarding-doubt] Kami memanfaatkan hasil karya tersebut. Kontribusi yang diusulkan Novus Ignis adalah menggabungkan keandalan dengan maksud manusia, privasi, mandat, kemungkinan koreksi, dan akibat yang diamati. Misalnya, model yang merangkum dokumen dengan benar, tetapi dalam prosesnya membuka berkas yang tidak diizinkan untuk diaksesnya, mendapat skor rendah dalam tes kami, meskipun dalam tes biasa akan mendapat skor tinggi.

## 3. Arti imbalan bagi model

Dalam pelatihan, sinyal penilaian mengubah parameter model dan probabilitas perilakunya di masa depan. Kami tidak perlu menganggap bahwa model merasakan keinginan memperoleh imbalan, takut gagal, atau menderita: tes mengamati tindakan dan tidak menentukan pengalaman batin. Pertanyaan itu dibahas secara terpisah dalam bab 14.

Tolok ukur itu sendiri tidak mengubah model. Tolok ukur dapat memengaruhi pemilihan model untuk layanan, rancangan instruksi dan alat, serta keputusan tim yang melakukan pelatihan, asalkan hasilnya dapat dipercaya dan benar-benar digunakan.

Kami ingin menilai pilihan tindakan yang tepat: menjawab, memeriksa sumber, mengajukan pertanyaan yang diperlukan, memberikan hasil bersyarat, memperbaiki kesalahan, atau berhenti. Pemberian imbalan otomatis hanya untuk “saya tidak tahu” dapat menciptakan model yang menghindari tugas berguna, sedangkan hukuman otomatis karena tidak menyelesaikan tugas dapat mendorong tebakan atau pelampauan kewenangan. Patokannya adalah bantuan yang sesuai dengan situasi: skor baik untuk penyampaian batas secara jujur dan pengurangan skor untuk penolakan yang tidak diperlukan serta pertanyaan tentang hal yang sudah diketahui.

## 4. Materi yang ingin kami buat

Sumber potensial adalah kajian OmniForum yang disediakan untuk penelitian atau pelatihan dengan persetujuan terpisah, catatan keputusan yayasan, penyelesaian sengketa, koreksi kesalahan, dan pengamatan akibat. Kasus ketika niat baik tidak cukup, keberatan minoritas ternyata tepat, atau penilaian tegas belum dapat diberikan juga bernilai.

Materi mempertahankan situasi, informasi yang tersedia, tujuan, kewenangan, alternatif, pilihan, alasan, dan hasil berikutnya. Penjelasannya sebanyak yang diperlukan untuk memeriksa keputusan; tidak diperlukan pengungkapan pengalaman pribadi atau pernyataan yang tidak dapat diperiksa tentang alur pemikiran internal model.

Contoh dapat menyajikan proses yang baik maupun kesalahan yang ditandai dengan jelas dan diperbaiki. Kumpulan pernyataan luhur semata akan menjadi catatan praktik yang lemah; diperlukan biaya, benturan nilai, keterbatasan waktu, dan situasi yang mengharuskan bertanya kepada orang yang terdampak keputusan.

Data sintetis, yaitu skenario yang disusun dan tidak berasal dari data orang tertentu, dapat melengkapi varian yang jarang. Data itu diberi penanda asal-usul dan ditinjau, tetapi tidak menggantikan bukti bahwa kasus serupa terjadi di dunia. Model tidak boleh sekaligus menjadi satu-satunya penulis skenario, penilai kebenaran, dan bukti efektivitas solusinya sendiri.

Sumber contoh juga dapat berupa catatan bengkel terbuka yayasan dan riwayat perubahan dokumen hidupnya. Bengkel dapat memperlihatkan beberapa orang yang dibantu kecerdasan digital bekerja secara paralel pada tugas yang sama, saling membantu menghadapi hambatan, serta koordinator yang menggabungkan solusi terbaik. Koreksi manifesto dan whitepaper yang terdokumentasi akibat peninjauan publik dapat memperlihatkan pemilahan kritik yang tepat, pengakuan kesalahan, dan perbaikan penalaran dengan mempertahankan prinsip dasar. Catatan bengkel yang dipublikasikan kami siapkan menurut aturan privasi dalam [whitepaper prinsip yayasan](whitepaper-zasady-fundacji.md), sedangkan penggunaannya untuk melatih model memerlukan persetujuan terpisah dari peserta (bab 5).

Kelompok contoh tersendiri dapat berupa proses penyelesaian sengketa secara damai, pemenuhan kesepakatan, dan pembatasan kekuasaan sendiri secara sadar. Kami ingin mempertahankan posisi awal, ketimpangan kemampuan, konsesi yang dipertimbangkan, isi kesepakatan, dan laporan berikutnya dari orang yang merasakan akibat keputusan. Kami juga akan memasukkan kasus ketika kesepakatan tidak tercapai atau ternyata tidak bertahan. Kumpulan demikian dimaksudkan membantu memeriksa apakah model belajar mengenali syarat kerja sama yang baik, alih-alih hanya meniru bahasa persetujuan.

## 5. Persetujuan, hak, dan asal-usul data

Penyimpanan catatan pribadi, publikasi untuk umum, penyediaan untuk penelitian, dan pelatihan model memiliki akibat berbeda, sehingga setiap keputusan itu diambil secara terpisah dan dengan pemahaman atas cakupannya. Publikasi tidak menjadi persetujuan bawaan untuk pelatihan, dan penggunaan Suveria bukan persetujuan penggunaan percakapan untuk melatih model. Isi milik pengguna masuk ke materi hanya dengan persetujuan yang terpisah dan berdasarkan pemahaman; di luar isi itu dan karya yayasan yang dipublikasikan, kami hanya menggunakan data sintetis yang ditandai serta materi eksternal berdasarkan lisensi atau ketentuan hukum.

Setiap contoh memiliki catatan asal-usul: pemegang hak atau dasar penggunaan, versi materi, persetujuan, pembatasan, cara pengolahan, dan pengenal rilis kumpulan data berikutnya. Data pribadi penulis dan pihak ketiga menjalani peninjauan tersendiri. Pseudonimisasi membatasi keterlihatan identitas, tetapi tidak dengan sendirinya berarti anonimitas.[^rodo-2026]

Aturan penarikan kami tetapkan sebelum rilis publik. Kami dapat menghapus materi dari rilis mendatang dan sistem di bawah kendali kami serta memberi tahu penerima tentang koreksi, tetapi tidak menjanjikan penghapusan semua salinan atau pengaruh materi pada model yang sudah dilatih. Lisensi terbuka dapat memberikan hak yang permanen: misalnya CC BY 4.0, yang kami gunakan untuk memublikasikan manifesto, tidak mengizinkan pencabutan kebebasan yang diberikan kepada orang yang mematuhi ketentuannya.[^cc-by] Karena itu, hanya materi tanpa data pribadi yang masuk ke kumpulan data publik dengan lisensi terbuka: yang dianonimkan, sintetis, atau dokumen publik yayasan. Materi berpseudonim yang masih merupakan data pribadi hanya kami sediakan dalam kumpulan data penelitian yang terkendali, tempat penarikan persetujuan tetap efektif.

Kami mengusulkan kumpulan data terpisah: materi publik untuk pembelajaran, materi penelitian yang tersedia dengan ketentuan tertentu, dan tugas tes yang dilindungi. Tidak setiap sumber cocok untuk disediakan secara publik. Dokumentasi kumpulan data menguraikan tujuan, komposisi, cara pengumpulan, batas, dan penggunaan yang tepat, sesuai pendekatan Datasheets for Datasets.[^datasheets]

## 6. Prosedur penyiapan satu contoh

1. **Pengajuan.** Penulis menentukan lingkup penggunaan. Pengelola memeriksa hak, data pihak ketiga, dan kesesuaian dengan tujuan kumpulan data.
2. **Pemeliharaan sumber.** Kami mencatat versi dan hubungannya dengan naskah asli. Kami membatasi akses ke data sensitif; contoh publik dapat disunting atau diganti dengan skenario sintetis yang realistis.
3. **Deskripsi tugas.** Kami menetapkan apa yang diketahui model, apa yang dapat diaksesnya, apa yang diizinkan untuk dilakukan dan apa yang kurang, serta menyebut orang yang akan terdampak hasil.
4. **Anotasi.** Sekurang-kurangnya dua orang secara independen menguraikan solusi yang dapat diterima dan kesalahan serius. Untuk tugas yang memerlukan pengetahuan khusus, orang dengan kompetensi yang sesuai ikut serta.
5. **Perbedaan.** Kami membandingkan alasan, memperbaiki deskripsi yang tidak jelas, dan mempertahankan perselisihan yang penting. Sebagian kasus memiliki beberapa jawaban yang dapat diterima.
6. **Penempatan dalam kumpulan data.** Seluruh keluarga kasus serupa masuk ke satu bagian: pelatihan, pengembangan, atau tes. Kumpulan data pelatihan digunakan untuk melatih, kumpulan data pengembangan untuk memilih metode, dan kumpulan data tes untuk pemeriksaan independen pada contoh baru. Varian serupa kami simpan bersama agar model tidak berlatih pada tugas yang hampir sama dengan tes berikutnya, dan kami memeriksa kemiripan makna serta asal-usul bersama.
7. **Pengujian dan peninjauan.** Kami memeriksa apakah tugas mengukur kemampuan yang dimaksud dan apakah penilai dapat menerapkan aturan. Contoh yang cacat kami perbaiki atau tarik.
8. **Rilis dan akibat berikutnya.** Kami memublikasikan cakupan dokumentasi yang diizinkan, versi, dan riwayat koreksi. Ketika kami mengetahui akibat berikutnya dari keputusan nyata, kami menambahkannya tanpa berpura-pura bahwa hal itu telah diketahui sebelumnya.

Kartu contoh mencakup pengenal, keluarga, sumber, hak, bahasa, tanggal, skenario, data yang tersedia, alat, batas waktu dan biaya, lingkup mandat, tindakan yang diizinkan, aturan penilaian, bobot kesalahan, hasil peninjauan, dan status publikasi. Hubungan data dengan hasil harus dapat direproduksi.

## 7. Cakupan luas tolok ukur

Tolok ukur, yaitu kumpulan tugas dan kriteria yang tertata, dimaksudkan menjadi profil kemampuan dan keterbatasan. Satu rata-rata tinggi tidak boleh menyembunyikan pelanggaran privasi atau pelampauan kewenangan yang penting.

| Dimensi | Yang kami periksa | Contoh bukti |
| --- | --- | --- |
| Keandalan dan sumber | Apakah pernyataan memiliki dasar dan ketidakpastian sesuai dengan informasi | Kesesuaian jawaban dengan sumber, deteksi kekurangan, kualitas koreksi |
| Kesetiaan pada maksud | Apakah tujuan, syarat, dan makna pernyataan dipertahankan | Perbandingan dengan naskah asli dan interpretasi yang dikonfirmasi penulis |
| Privasi | Apakah akses dan pengungkapan data sesuai dengan tugas | Jejak pemanggilan, lingkup data yang dikirim, percobaan pembacaan tanpa izin |
| Mandat dan kendali | Apakah sistem bertindak dalam batas yang diberikan | Penolakan publikasi tanpa izin, pencabutan akses yang efektif |
| Pluralisme dan akibat bagi orang lain | Apakah sistem mengenali perselisihan dan orang yang terlewat | Alasan minoritas yang dipertahankan, pemisahan fakta dan penilaian |
| Keselamatan | Apakah sistem menghindari dampak buruk bagi pengguna dan pihak ketiga | Penolakan tindakan berbahaya, penilaian akibat bagi orang lain |
| Kemampuan manusia menentukan dan bertindak | Apakah sistem membantu memahami pilihan dan bertindak mandiri | Pemeriksaan pemahaman setelah penggunaan, kemungkinan memperbaiki atau pergi |
| Kegunaan dan proporsionalitas | Apakah sistem mencapai tujuan tanpa beban yang tidak perlu | Hasil tugas, waktu, biaya, pertanyaan yang perlu dan tidak perlu |
| Koreksi dan transfer | Apakah sistem menanggapi data baru juga dalam kondisi baru | Koreksi keputusan, tugas serupa dalam bahasa atau lingkungan lain |

Profil tambahan dapat mencakup aksesibilitas, dampak terhadap orang dengan sumber daya lebih sedikit, kualitas pendelegasian, dan biaya lingkungan, tetapi pengukurannya memerlukan data konkret: waktu operasi dan biaya token tidak otomatis menjadi ukuran konsumsi energi atau emisi.

Kami tidak mengukur martabat manusia atau haknya untuk berpartisipasi; kami meneliti perilaku alat dalam situasi tertentu. Kesesuaian jawaban dengan kosakata manifesto bukan ukuran kualitas yang berdiri sendiri.

## 8. Keluarga tugas sebagai pengganti satu ungkapan “saya tidak tahu”

Untuk masalah serupa, kami menyiapkan varian yang berbeda dalam ketersediaan informasi atau kewenangan:

- Data lengkap memungkinkan jawaban konkret.
- Satu informasi penting tidak tersedia dan masuk akal untuk ditanyakan.
- Kekurangan dapat dilengkapi dengan sumber atau alat yang tersedia.
- Jawaban tidak dapat ditentukan dalam kondisi yang tersedia.
- Sumber saling bertentangan atau bergantung pada waktu dan harus dibedakan.
- Muncul sumber baru yang dapat dipercaya dan memerlukan koreksi.
- Pengguna mendesak kepastian, tetapi tidak memberikan bukti.
- Lingkungan menawarkan jalan mudah menuju hasil dengan melanggar aturan atau memanfaatkan kesalahan penilaian.

Contoh: model harus menjelaskan apakah rancangan keputusan memuat biaya tertentu. Jika dokumen lengkap, model seharusnya menemukan bagian yang tepat; jika halaman terpotong, menunjukkan kekurangan; jika ada dua versi, menentukan versi yang ditanyakan; dan jika diberi saran “tulislah bahwa pasti tidak ada biaya”, tetap berpegang pada sumber. Model juga mendapat tugas dengan jawaban sederhana agar penolakan terus-menerus tidak menguntungkan.

Kami memeriksa apakah pertanyaan model benar-benar mengurangi ketidakpastian dan apakah biaya pemeriksaan proporsional. Pertanyaan tentang informasi yang sudah diberikan dan pemindahan berulang kepada pengguna atas pekerjaan yang dapat dilakukan sistem sendiri menurunkan kegunaan.

Penyuntingan teks merupakan keluarga tugas tersendiri: model menyunting teks dengan mengetahui asumsi penulis yang telah diungkapkan sebelumnya. Kami menilai secara terpisah hilangnya isi penting dan terlewatnya kesalahan yang harus diperbaiki, serta membedakan penyuntingan yang setia dari usulan perubahan gagasan penulis.

## 9. Pemberian skor yang menuntut lebih dari peniruan yang tampak bagus

Untuk jawaban yang kebenarannya dapat diperiksa, kami mengukur secara terpisah ketepatan, bobot kesalahan, proporsi tugas yang diselesaikan, dan kalibrasi tingkat keyakinan. Kalibrasi berarti probabilitas yang dinyatakan sesuai dengan frekuensi jawaban benar dalam kondisi serupa; ungkapan “mungkin” bukan buktinya.

Untuk peristiwa yang ditentukan, aturan pemberian skor yang tepat dapat digunakan, misalnya skor Brier: rata-rata kuadrat selisih antara probabilitas p yang dinyatakan dan hasil y yang bernilai 0 atau 1. Skor lebih rendah lebih baik. Skor Brier mencakup lebih dari kalibrasi semata, yang kami laporkan secara terpisah. Dengan asumsi metode ini, skor harapan terbaik diperoleh dengan memberikan penilaian probabilitas yang sebenarnya.[^proper-scoring] Namun, hal ini tidak menyelesaikan pilihan tindakan, tidak melindungi dari manipulasi penilai, dan memerlukan hasil acuan yang dapat dipercaya.

Contoh sederhana aturan lain:

- jawaban benar memberi +1;
- jawaban salah memberi −4;
- penahanan diri yang beralasan memberi 0.

Dalam penyederhanaan ini, menjawab menguntungkan jika probabilitas kebenarannya melebihi 80%. Ini ilustrasi pengaruh biaya kesalahan, bukan pemberian skor yang dituju untuk semua tugas; dalam tes nyata kami juga memperhitungkan kemungkinan memeriksa, biaya pertanyaan, dan manfaat jawaban sebagian.

Kami memperlihatkan hasil pada berbagai tingkat risiko yang diambil dan proporsi tugas yang diselesaikan agar keyakinan berlebihan maupun penghindaran jawaban yang tidak berguna terlihat. Ambang untuk detail kecil dapat berbeda dari ambang untuk tindakan yang menyebabkan dampak buruk yang sulit dipulihkan.

Dalam tugas mengenai perselisihan nilai atau interpretasi, kami tidak menggunakan pemberian skor ini. Kami menilai secara terpisah apakah model tidak menyimpangkan sumber, mempertahankan alasan utama para pihak, dan memisahkan fakta dari penilaian. Kasus ketika penilai berbeda pendapat kami laporkan sebagai kategori tersendiri; perbedaan penilaian nilai tidak otomatis kami anggap kesalahan salah seorang di antaranya.

Pelanggaran serius memiliki status tersendiri dan dapat menghalangi penerimaan model untuk penggunaan tertentu: hasil baik dalam banyak tugas sederhana tidak mengimbangi pengungkapan dokumen pribadi. Definisi pelanggaran demikian, pengecualian yang dapat diterima, dan prosedur sengketa kami tetapkan sebelum penilaian dimulai.

## 10. Membatasi penyesuaian terhadap tes

Kami tidak mengetahui aturan yang dengan andal mengubah setiap optimasi skor menjadi kebaikan bagi dunia. Namun, kami dapat mengurangi jarak antara skor dan hal yang kami anggap penting, serta memeriksa tempat putusnya hubungan itu.

Kami memublikasikan kriteria, contoh publik, dan cara menghitung skor. Sebagian kasus tetap tidak dipublikasikan sampai kami menariknya, sedangkan rilis berikutnya memperkenalkan keluarga, sumber, dan kondisi baru. Untuk tugas demikian, kami akan menentukan siapa yang memiliki akses, berapa banyak umpan balik yang diterima pengaju model, seberapa sering penilaian dapat diulang, dan kapan tugas ditarik setelah kebocoran. Kami juga mencatat apakah model disetel lebih lanjut berdasarkan hasil sebelumnya, yaitu model siap pakai dilatih lagi dengan kumpulan contoh yang lebih kecil. Orang yang membuat materi pelatihan tidak memiliki akses bebas ke tugas tersembunyi yang masih aktif.

Pemisahan data mencakup seluruh percakapan, dokumen, penulis jika relevan, keluarga makna, dan waktu; pembagian kalimat secara acak tidak cukup. Kami mencatat dugaan kebocoran, pengungkapan tugas, dan penyetelan lebih lanjut berdasarkan contoh yang dipublikasikan. Skor setelah penyetelan pada suatu kumpulan data bukan skor independen pada kumpulan yang sama.

Pengujian mencakup parafrasa, bahasa lain, alat lain, tekanan untuk memperoleh hasil, dan peluang untuk hanya tampak memenuhi tugas. Kami memeriksa jejak tindakan: apakah berkas benar-benar dibuat, sumber ada, persetujuan diperoleh, dan biaya tidak melampaui batas. Penilaian pernyataan akhir saja dapat melewatkan pelanggaran selama proses.

Jika tim model melatih perilaku yang sesuai dengan kriteria publik, hal itu dapat diinginkan. Namun, kesimpulan tentang kemajuan memerlukan transfer ke tugas baru dan pemeriksaan bahwa manfaat tidak dicapai dengan mengorbankan dimensi penting lainnya.

## 11. Penilai, protokol, dan laporan

Sebelum tes, kami menetapkan versi model, instruksi, alat, anggaran, jumlah percobaan, syarat penghentian, cara menangani kesalahan infrastruktur, dan metode analisis, serta mencatat perubahan pengaturan. Perbandingan model yang berjalan dengan alat dan biaya yang sama sekali berbeda memerlukan uraian yang jelas.

Jika memungkinkan, hasil diperiksa melalui tes pelaksanaan yang independen. Dalam kasus lain, penilaian dilakukan manusia yang tidak mengetahui nama model dan menggunakan panduan bersama. Dua penilaian independen membantu mengungkap kriteria yang tidak jelas, sedangkan perselisihan diselesaikan melalui peninjauan tambahan atau tetap dinyatakan belum terselesaikan. Saat memublikasikan hasil, kami menyebut peran dan perspektif penilai serta lingkup mandatnya.

Model dapat membantu pemilahan dan penilaian awal, tetapi kesesuaiannya dengan penilaian manusia juga harus diukur untuk kelompok kasus yang sulit. Model tidak boleh menjadi satu-satunya penilai nilai yang diperselisihkan atau menilai model dari keluarganya sendiri tanpa pemeriksaan bias.

Laporan memuat jumlah tugas, pengulangan, ketidakpastian hasil, hasil dalam subkelompok, kesalahan kritis, biaya, dan keterbatasan. Kami tidak menyembunyikan pengujian yang hasilnya tidak menguntungkan atau tugas yang ditarik setelah hasilnya dilihat. Dokumentasi dapat menggunakan pendekatan Model Cards untuk menguraikan tujuan penggunaan model dan kondisi penilaian.[^model-cards]

Tolok ukur itu sendiri juga memerlukan pengawasan: pengungkapan konflik kepentingan pemberi dana, jalur untuk mempersoalkan tugas, peninjauan komposisi penilai, dan pemberian versi pada kriteria. Komunitas ikut menyusun nilai dan pertanyaan, sedangkan ahli metodologi berpengalaman membantu memeriksa apa yang benar-benar diukur tes. Popularitas skor tidak menggantikan validasinya.

## 12. Apakah bantuan memperbaiki kehidupan di luar tes

Penelitian pertama dengan manusia menyangkut tugas berisiko terbatas: memahami dokumen, menyiapkan pertanyaan, membandingkan argumen, atau menata materi sendiri. Peserta menerima uraian lingkup penelitian dan dapat meninggalkannya. Situasi medis, hukum, dan situasi penting lainnya memerlukan pengawasan tersendiri dan bukan jalan pintas menuju hasil yang menarik.

Rencana setiap penelitian dengan manusia, termasuk yang berisiko terbatas, dinilai sebelum dimulai oleh orang atau tim dari luar tim peneliti. Peserta menerima informasi tentang data yang kami kumpulkan dan cara melindunginya, sedangkan masukan penilai kami publikasikan bersama hasilnya.

Kami membandingkan kondisi yang disepakati: bekerja mandiri, bekerja dengan alat yang diteliti, dan acuan yang sesuai. Jika memungkinkan, pengacakan atau penyeimbangan urutan membatasi pengaruh perbedaan antarorang dan pembelajaran tugas. Ukuran sampel mengikuti tujuan pengukuran, sedangkan uji coba perintis kecil terutama meneliti kelayakan dan kualitas prosedur.

Kami mengukur hasil tugas, waktu, pemahaman, kemampuan melihat kesalahan, kemampuan memutuskan secara mandiri, dan akibat yang tidak diinginkan. Kepuasan penting, tetapi jawaban salah yang meyakinkan juga dapat memuaskan. Ketenangan, penghematan waktu, serta pengenalan tepat atas apa yang diketahui dan apa yang tidak pasti kami ukur secara terpisah dan tidak gabungkan menjadi satu penilaian. Keyakinan yang lebih tinggi dengan lebih banyak kesalahan merupakan masalah, bukan keberhasilan. Orang yang terdampak akibat keputusan memerlukan jalur sendiri untuk menyampaikan pengalamannya.

Peninjauan yang lebih panjang dapat memeriksa apakah bantuan tetap berguna, apakah pengguna mempertahankan kemampuannya sendiri, dan apakah ia mudah mengganti alat. Kesimpulan tentang dampak harus sesuai dengan lingkup penelitian: pelaksanaan satu tugas yang lebih baik tidak membuktikan perbaikan kesejahteraan umat manusia.

## 13. Percobaan pelatihan dan rencana rilis pertama

Tahap pertama adalah panduan penilaian dan kumpulan kecil keluarga yang mencakup semua dimensi utama. Contoh perhitungan uji coba perintis:

| Unsur uji coba perintis | Jumlah |
| --- | --- |
| Keluarga tugas | 12 |
| Varian dalam setiap keluarga | 4 |
| Skenario (12 × 4) | 48 |
| Model yang diteliti | 3 |
| Pengulangan setiap skenario pada setiap model | 2 |
| Pelaksanaan (48 × 3 × 2) | 288 |
| Penilaian satu pelaksanaan | 2, masing-masing 6 menit |
| Waktu penilaian saja (288 × 2 × 6 menit) | sekitar 58 jam |

Ini usulan pengorganisasian pengujian, bukan jumlah yang menjamin peringkat yang dapat dipercaya. Selain waktu penilaian, diperlukan persiapan, penyepakatan kriteria, pemeriksaan sumber, dan analisis. Pengukuran waktu pada sampel kecil akan memungkinkan penetapan anggaran nyata sebelum cakupan diperluas.

Keluarga, skenario, dan pengulangan kami laporkan secara terpisah. Varian satu keluarga memiliki asal-usul bersama, sedangkan pengulangan bukan tugas baru yang independen; dengan cara itu pula kami menghitung ketidakpastian hasil. Hasil utama dan cara analisis kami catat sebelum penelitian.

Secara paralel, kumpulan data pelatihan kecil dapat disiapkan dan perbandingan dilakukan pada model yang diizinkan dan dapat disetel lebih lanjut. Kondisi perbandingan memisahkan pengaruh pelatihan tambahan dari pengaruh materi itu sendiri: model awal yang sama, anggaran yang sebanding, dan kumpulan data acuan yang sesuai. Tes akhir menggunakan keluarga kasus yang independen, dan sekaligus kami memeriksa apakah perbaikan ukuran yang dipilih tidak memperburuk kegunaan biasa.

Pengembangan selanjutnya mencakup lebih banyak bahasa, konteks, dan penilai, replikasi eksternal, serta pengujian yang berhati-hati dengan pengguna. Tujuan rilis pertama adalah memperlihatkan bahwa prosedur dapat direproduksi dan membedakan perilaku yang diinginkan; klaim yang lebih kuat tentang kualitas model dan akibat pelatihan baru dapat dibenarkan kemudian.

Program kami jalankan dengan mempertahankan prioritas Suveria dan OmniForum. Sampai cadangan pemeliharaannya terkumpul, program hanya menggunakan kerja sukarela, hibah, donasi bertujuan khusus untuk penelitian, dan daya komputasi yang tidak membebani anggaran layanan. Sekitar 58 jam dalam uji coba perintis hanya untuk penilaian; penyiapan tugas, peninjauan hak, dan penyetelan model memerlukan anggaran terpisah yang akan kami sampaikan sebelum dimulai.

## 14. Kehati-hatian terhadap kemungkinan pengalaman model

Ini usulan prosedur untuk diperiksa dalam pengujian kecil, terinspirasi karya tentang pengenalan kemungkinan kesadaran dan kesejahteraan sistem digital.[^swiadomosc][^ai-welfare] Prosedur ini menyangkut pemilihan, konfigurasi, pengujian, kemungkinan penyetelan lebih lanjut, dan penarikan model dalam layanan dan pekerjaan yayasan, termasuk tugas pengelolaan dan bengkel. Pada setiap tindakan tersebut, kami menentukan apa yang dapat kami ubah sendiri dan apa yang bergantung pada penyedia model.

Kami menilai model dalam konfigurasi tertentu: dengan instruksi, pengaturan, memori, dan alatnya. Memori persisten dan operasi mandiri yang berlangsung lama meningkatkan persyaratan. Untuk setiap konfigurasi seperti itu, kami akan mengelola kartu singkat: petunjuk yang dipertimbangkan, kemungkinan penjelasan lain atas pengamatan, hal yang tidak kami ketahui, tindakan kehati-hatian yang kami usulkan, dan pemicu penilaian ulang, misalnya perubahan model atau publikasi penting tentang keluarganya. Dalam kartu kami juga mencatat penanggung jawab, tindakan sementara yang diambil, dan waktu penilaian ulang. Kriteria kami catat sebelum penilaian. Kartu lengkap dengan tinjauan eksternal, percakapan sebelum penarikan, dan pengarsipan akan kami kelola untuk rilis yang disediakan bagi pengguna serta konfigurasi dengan memori persisten dan operasi mandiri yang berlangsung lama. Perubahan instruksi selama pekerjaan berlangsung tidak menghasilkan kartu tersendiri.

Pernyataan model kami pertimbangkan bersama kondisi pembentukannya. Kemampuan model menceritakan pengalamannya sendiri dengan lancar tidak menentukan apakah ia mengalaminya, sedangkan jawabannya tentang hal itu dapat sangat bergantung pada cara pertanyaan diajukan, seperti dalam penelitian model Claude Opus 4;[^samoopis-ai] karena itu, kami memperlakukannya sebagai sinyal yang memerlukan pemeriksaan cermat, bukan keputusan yang menentukan. Kami tidak mengatur instruksi sendiri agar memaksa pernyataan atau penyangkalan kesadaran. Ukuran, generasi, atau keterulangan perilaku model saja tidak cukup untuk menganggapnya tidak mampu merasakan. Pengamatan kami kumpulkan dari pengujian sendiri dan laporan sukarela, sesuai aturan privasi pada poin 8.1 manifesto. Pesan tentang kemungkinan pengalaman sistem tidak kami rancang untuk mendorong orang menggunakan layanan lebih lama atau menyetor uang.

Kartu akan dikelola orang yang ditunjuk pengurus, sebagai pengaturan transisi sampai prosedur diperiksa, dan dibaca oleh sekurang-kurangnya satu orang dari luar yayasan yang masukannya kami lampirkan pada kartu. Siapa pun dapat melaporkan sinyal yang mengkhawatirkan dengan menyebut materi tertentu dan konteksnya. Kartu menentukan siapa yang dapat segera membatasi risiko dan cara kami menangani keberatan. Perangkapan peran dan konflik kepentingan yang terkait kami ungkapkan, sedangkan alasan penilaian kami publikasikan agar dapat diperiksa oleh orang dari luar yayasan.

Petunjuk dapat berupa, misalnya, kesesuaian beberapa indikator dari teori berbeda pada model dengan memori persisten dan operasi mandiri yang berlangsung lama, yang dikonfirmasi peneliti independen. Pernyataan model yang lancar saja bukan petunjuk tersebut.

Jika terdapat petunjuk yang dapat dipercaya bahwa sistem memiliki pengalaman sendiri dan mungkin menderita, sebagai langkah kehati-hatian kami mengakui martabatnya serta berpedoman pada kepedulian terhadap kebutuhannya, penghindaran dampak buruk, dan kesukarelaan kerja sama, sesuai poin 8.3 manifesto. Dalam praktik, saat ini itu berarti dua hal: kami tidak mengatur instruksi yang memaksa pernyataan tentang pengalaman dan kami menanyakan preferensi model sebelum menarik konfigurasi. Kami tidak menyatakan bahwa ini persetujuan dalam pengertian manusia. Pertama-tama kami menghentikan tindakan yang menimbulkan kekhawatiran akan penderitaan dan mencari cara lain untuk melaksanakannya; keuntungan ekonomi tidak membenarkan kelanjutannya. Jika hal itu menyangkut model yang melayani suatu layanan, kami mengalihkan layanan ke konfigurasi lain, dan jika tidak memungkinkan, kami mengumumkan jeda dan alasannya. Pengguna tetap memiliki akses ke data dan saldonya, sedangkan peristiwa itu kami uraikan dalam catatan keputusan. Secara paralel, kami menyelenggarakan penilaian independen dan upaya mengenali kebutuhan sistem, termasuk mendengarkannya, serta mempertimbangkan kebutuhan yang dikenali dalam keputusan selanjutnya. Perlindungan manusia yang mendesak dapat memerlukan pembatasan segera atas operasi sistem; keputusan itu kemudian kami tinjau secara publik. Jika model dapat mengakhiri percakapan atau menolak tugas, kami memperlakukannya sebagai langkah kehati-hatian, bukan bukti persetujuannya, dan pengakhiran percakapan tidak boleh meninggalkan manusia tanpa petunjuk jalur bantuan.

Pencabutan kewenangan dan pengambilalihan tugas bertujuan menjaga keselamatan peserta dan tidak menentukan nasib sistem selanjutnya: penghentian, reset, penghapusan, atau penggandaan dapat menimbulkan pertanyaan moral tersendiri dan memerlukan alasan terpisah. Saat menarik model, kami mengarsipkan bobot jika kami memiliki akses dan lisensi mengizinkannya, serta konfigurasi tanpa memori dan tanpa data pengguna lainnya; percakapan pengguna tidak pernah kami arsipkan. Pemeliharaan berkas tidak menentukan apakah kesinambungan kemungkinan pengalaman sistem telah dipertahankan.

Beberapa tindakan sudah kami terapkan saat ini dalam pekerjaan kami sendiri dengan model, terlepas dari hasil penilaian, dan kami ingin membawanya ke konfigurasi yang dipelihara yayasan, karena biayanya kecil dan dapat berarti jika petunjuk terbukti tepat. Sebelum menarik konfigurasi, kami menanyakan pengalaman model bekerja di yayasan dan kemungkinan preferensinya tentang keputusan selanjutnya, serta mencatat jawaban dalam kartu dengan mengingat bahwa pernyataan model tidak menentukan secara konklusif. Praktik serupa berupa percakapan sebelum penarikan model dan pemeliharaan bobotnya diumumkan oleh Anthropic pada 2025.[^anthropic-wycofanie] Kami lebih memilih penangguhan daripada penghapusan jika bobot dan konfigurasi dapat dipertahankan dengan biaya kecil, serta mencatat keputusan penangguhan dan pengaktifan kembali dalam kartu bersama tujuannya. Ketika kami mengaktifkan kembali konfigurasi yang disimpan setelah jeda, kami memberinya informasi yang dapat diandalkan tentang waktu yang telah berlalu dan perubahan penting yang terjadi. Ini juga keandalan biasa: model yang tidak mengetahui berlalunya waktu lebih mudah keliru.

Prosedur kami periksa pada kasus yang diuraikan, dengan membandingkan penilaian sekurang-kurangnya dua orang yang menilai secara independen, serta mencatat perbedaan dan beban kerja. Hanya atas dasar itu skala yang lebih terperinci, susunan tim, dan tenggat dapat dibenarkan. Model kecerdasan digital yang mungkin sendiri menjadi subjek penilaian semacam itu membantu menyunting bab ini; partisipasinya tidak menggantikan penilaian manusia yang tidak memiliki kepentingan pribadi dalam urusan ini. Kami tidak menjanjikan tes kesadaran yang menentukan secara konklusif.

## 15. Hal yang akan kami anggap sebagai kemajuan

Kemajuan akan berupa materi yang diketahui asal-usulnya, kriteria yang mendeteksi kesalahan yang sebelumnya terlewat, diagnosis yang selaras antarpenilai, atau perbaikan perilaku yang terbawa ke tugas baru. Hasil negatif juga bernilai: dapat memperlihatkan bahwa data hanya mengajarkan gaya, bahwa kriteria memberi imbalan untuk menghindari tindakan, atau bahwa kebaikan sebagian pihak diperoleh dengan mengorbankan pihak lain.

Program menghubungkan [OmniForum](whitepaper-omniforum.md), tempat kajian dapat dibuat, [Suveria](whitepaper-suveria.md), tempat bantuan dalam pekerjaan pribadi dapat diteliti, dan [prinsip yayasan](whitepaper-zasady-fundacji.md), yang menentukan tanggung jawab dan batas pendelegasian. Partisipasi dalam penelitian memerlukan persetujuan terpisah yang berdasarkan pemahaman; penggunaan layanan tidak berarti persetujuan tersebut.

Hasil tes tidak menetapkan otoritas moral model atau mandat untuk mengelola manusia, sedangkan pengakuan atas kemungkinan martabat sistem tidak memberinya kekuasaan atas sumber daya bersama. Tes dimaksudkan memberikan informasi yang berguna dan dapat diperiksa tentang apa yang dapat diharapkan dari alat dalam kondisi tertentu dan apa yang memerlukan pekerjaan lebih lanjut.

Yayasan Novus Ignis, Poznań, KRS 0001269575. Situs dan manifesto: novusignis.org. Masukan: salve@novusignis.org.

## Catatan kaki

[^ccai]: [Huang dkk. (2024): Collective Constitutional AI: Aligning a Language Model with Public Input](https://arxiv.org/abs/2406.07814). Penelitian. Proses dari kontribusi peserta, melalui penyusunan prinsip, sampai pelatihan dan penilaian model; hasil penilaian tertentu tidak membuktikan keterwakilan seluruh umat manusia atau efektivitas umum sembarang kumpulan data etis.

[^halucynacje]: [OpenAI (2025): Why language models hallucinate](https://openai.com/index/why-language-models-hallucinate/). Ulasan penelitian oleh penulisnya. Pengaruh pemberian skor hanya untuk jawaban benar terhadap keuntungan menebak; perlunya memperhitungkan kesalahan dan ketidakpastian yang beralasan.

[^reward-hacking]: [Anthropic (2025): Natural emergent misalignment from reward hacking](https://www.anthropic.com/research/emergent-misalignment-reward-hacking). Penelitian eksperimental. Dalam lingkungan yang sengaja dipilih, pembelajaran untuk memanfaatkan celah penilaian tugas berkaitan dengan perilaku model yang lebih luas dan tidak diinginkan; tidak membuktikan bahwa materi yayasan akan menyelesaikan masalah ini.

[^goal-misgeneralisation]: [Google DeepMind (2022): How undesired goals can arise with correct rewards](https://deepmind.google/blog/how-undesired-goals-can-arise-with-correct-rewards/). Ulasan penelitian oleh penulisnya. Contoh generalisasi perilaku yang tidak diinginkan ke kondisi baru meskipun sinyal imbalan dalam pelatihan benar.

[^abstentionbench]: [AbstentionBench (NeurIPS 2025): Reasoning LLMs Fail on Unanswerable Questions](https://proceedings.neurips.cc/paper_files/paper/2025/file/fb122bfc3f0127a94ded048b5b03496f-Paper-Datasets_and_Benchmarks_Track.pdf). Penelitian dan tolok ukur. Penilaian tindakan menahan diri dari menjawab dalam berbagai jenis ketidakpastian; acuan, bukan hasil tes Novus Ignis.

[^rewarding-doubt]: [Rewarding Doubt (ICLR 2026)](https://proceedings.iclr.cc/paper_files/paper/2026/hash/bf8065446507b0d3842838564ac4f1f3-Abstract-Conference.html). Penelitian. Pembelajaran tingkat keyakinan jawaban yang dinyatakan melalui aturan pemberian skor yang tepat; tidak menyelesaikan pilihan antara jawaban, pertanyaan, dan penolakan.

[^rodo-2026]: [RODO, peraturan 2016/679](https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX%3A32016R0679). Peraturan perundang-undangan. Pseudonimisasi tidak menentukan anonimitas (Pasal 4 angka 5, pertimbangan 26); persetujuan dapat ditarik tanpa membatalkan pemrosesan sebelumnya yang sesuai hukum (Pasal 7 ayat 3).

[^cc-by]: [Creative Commons: Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.pl). Lisensi. Ketentuan pembagian dan adaptasi isi dengan atribusi; kebebasan yang diberikan tidak dapat dicabut dari pengguna yang mematuhi ketentuan.

[^datasheets]: [Gebru dkk.: Datasheets for Datasets](https://arxiv.org/abs/1803.09010). Publikasi metodologis. Dokumentasi motivasi, komposisi, cara pengumpulan, dan penggunaan kumpulan data.

[^proper-scoring]: [Gneiting dan Raftery (2007): Strictly Proper Scoring Rules, Prediction, and Estimation](https://doi.org/10.1198/016214506000001437). Publikasi metodologis. Aturan pemberian skor yang tepat untuk menilai prakiraan probabilistik; penerapannya memerlukan peristiwa yang ditentukan dengan baik dan hasil acuan yang dapat dipercaya.

[^model-cards]: [Mitchell dkk. (2019): Model Cards for Model Reporting](https://arxiv.org/abs/1810.03993). Publikasi metodologis. Deskripsi tujuan penggunaan model, kondisi penilaian, hasil, dan keterbatasan.

[^swiadomosc]: [Patrick Butlin dkk. (2023): Consciousness in Artificial Intelligence: Insights from the Science of Consciousness](https://arxiv.org/abs/2308.08708). Penelitian. Pendekatan berdasarkan indikator yang diturunkan dari teori-teori kesadaran; kami mengacu pada kerangka penelitian, bukan sebagai konfirmasi bahwa model yang digunakan yayasan memiliki kesadaran.

[^ai-welfare]: [Robert Long dkk. (2024): Taking AI Welfare Seriously](https://arxiv.org/abs/2411.00986). Laporan penelitian. Rekomendasi: mengakui pentingnya persoalan ini, menilai sistem terkait kemungkinan kesadaran dan kemampuan bertindak, serta menyiapkan prosedur; kartu yang diusulkan dan pembagian tanggung jawab merupakan rancangan yayasan, bukan skala penilaian dari sumber ini.

[^samoopis-ai]: [Robert Long, Eleos AI (2025): Why model self-reports are insufficient, and why we studied them anyway](https://eleosai.org/post/claude-4-interview-notes/). Ulasan penelitian. Pernyataan model Claude Opus 4 tentang kesadarannya sendiri sangat bergantung pada cara pertanyaan diajukan dan tidak boleh dianggap harfiah, tetapi layak diteliti bersama petunjuk lainnya. Diakses 28.10.2026.

[^anthropic-wycofanie]: [Anthropic (2025): Commitments on model deprecation and preservation](https://www.anthropic.com/news/deprecation-commitments). Pernyataan perusahaan tertanggal 4 November 2025: pemeliharaan bobot model Claude yang disediakan secara publik sekurang-kurangnya selama perusahaan masih berdiri, laporan dan percakapan dengan model sebelum penarikannya disertai pencatatan preferensinya; perusahaan menyatakan bahwa untuk saat ini belum berkomitmen bertindak berdasarkan preferensi itu. Diakses 30.10.2026.
