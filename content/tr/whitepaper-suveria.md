# Suveria: dijital zekâyla özel çalışma

11 Kasım 2026 tarihli sürüm. Bu belge, manifestonun Suveria’ya ilişkin ilkelerini ayrıntılandırır: mahremiyeti nasıl korumak istediğimizi, dijital zekâyla çalışmanın nasıl işlemesinin amaçlandığını, neye mal olduğunu ve bunu nasıl sınayacağımızı. Açıklanan mimari bir tasarımdır. Mevcut bir teknolojiye veya sağlayıcının belgelerine işaret etmek, onu Suveria’da çalıştırdığımız anlamına gelmez. Denemelerimizin sonuçlarını 9. bölüme her zaman tarih, yapılandırma sürümü ve ölçüm kapsamıyla ekleriz.

*Bu çeviri, 8 Kasım 2026 tarihli Lehçe asıl metin temel alınarak dijital zekâ tarafından hazırlanmıştır. Farklılık olması hâlinde Lehçe metin bağlayıcıdır.*

## 1. Suveria nedir ve neden oluşturuluyor

Suveria’nın, insanın kendi evinde kapalı kapılar ardındaymış gibi dijital zekâyla konuştuğu, kendi materyalleri üzerinde çalıştığı ve önceki düşüncelerine döndüğü özel bir internet alanı olması amaçlanıyor. Değerleri [manifestoda](manifest.md) anlatılan, Poznań’daki Novus Ignis Vakfı tarafından dünyanın her yerindeki insanlar düşünülerek tasarlanıyor. Açık dijital zekâ modellerine dayanır; kendi yazılımımızı ise açık kaynak kodlu bir dijital kamu malı olarak sunmak istiyoruz.

Suveria oluşturuluyor, çünkü dijital zekâyla konuşurken giderek daha fazla şey emanet ediyoruz: sağlık, ilişkiler, iş, para ve hayat planları hakkında sorular. Birçok yaygın hizmette bu konuşmaların içeriği sağlayıcının sunucularına gider; sağlayıcı bunları okuyabilir, korunmaları ise kurallarına ve ona duyulan güvene bağlıdır. İnsanların, kendileri hakkında böylesine yakın bir içgörünün bir gün paraya çevrileceğinden veya onları etkilemek için kullanılacağından korkmadan en önemli meseleleri konuşabilmesini istiyoruz. Herkesin gerçekten kullandığı kadar ödemesini, ne için ödeme yaptığını görmesini ve harcama sınırını kendisinin belirlemesini de istiyoruz.

Suveria’da şunların mümkün olmasını istiyoruz:

- konuşmanın nerede işlendiğini ve kimlerin görebileceğini görerek kişisel ve mesleki meseleler hakkında dijital zekâyla konuşmak;
- kendi belge ve dosyaları üzerinde çalışmak, sonuçları açık biçimlerde kaydedip başka yere taşımak;
- konuşmaları, dosyaları ve asistanın belleğini öncelikle kendi cihazlarında, kullanıcının kontrolünde kalan bir anahtarla şifrelenmiş olarak saklamak;
- kendi rızasıyla önceki konuşmaların belleğinden yararlanmak, eski kararların gerekçelerine dönmek ve kendi ilke ve değerlerinden oluşan bir derleme olan Kişisel Kanon’u (*Canon Personalis*) oluşturmak;
- her birinin neye karşı koruduğu açıkça belirtilerek, kendi cihazındaki modelden sunucudaki gizlilik korumalı ortama kadar çalışma yolunu seçmek;
- kendi belirlediği harcama sınırıyla gerçek kullanım için ödeme yapmak;
- bir düşünceyi özel alanda geliştirmek, ardından bilinçli biçimde OmniForum’daki ortak konuşmaya katmak.

İlk sürümle, doğrulanabilir mahremiyeti tercih nedeni sayan kişilere hitap ediyoruz.

Suveria’daki ilk günden, kişinin kendi hızında düzenlediği özel bir atölyede kendini evinde hissetmenin sakinliğini yaşamasını istiyoruz. Kullanıcı asistana meselelerini ve hedeflerini anlatabilecek; kendi notlarını ve diğer dijital zekâ hizmetleriyle önceki konuşmalarının arşivlerini Suveria’ya aktarabilmesine de olanak tanımak istiyoruz. Böyle bir arşivin kullanıcının cihazında şifreli ve düzenli kalması, uzak modele ise yalnızca o anki soru için seçilen içerik bölümünün gönderilmesi amaçlanıyor (3. bölüm).

Hizmetin değerini, hedefe ulaşmaya, mahremiyeti korumaya ve bağımsız karar vermeye yardımcı olup olmadığıyla ölçüyoruz. Koşulların açık ve kolay erişilebilir olması; kullanıcının harcamalarını kontrol edebilmesi, kendi materyallerini dışa aktarıp ayrılabilmesi amaçlanıyor.

Altyapıyı işleten kişiler olarak bize karşı da tam mahremiyet, tasarımı tabi kıldığımız hedeftir. Korumanın, vakfa duyulan güvene değil bağımsızca sınanabilecek güvenlik önlemlerine dayanması amaçlanıyor. Bu nedenle her sürüm neyin, kime karşı, hangi koşullarda korunduğunu ve hangi açıkların kaldığını somut biçimde anlatır.

Başlangıç noktası, koruma düzeyi açıkça anlatılmış, harcama sınırı ve sonucu dışa aktarma olanağı bulunan, tek bir modelle metin konuşması ve seçilen bir belgeyle çalışmadır. Bellek, arama, entegrasyonlar ve eylem gerçekleştirme gibi sonraki olanakların her birine ayrı bir yetki kapsamı verilir. Kişi, verileri göndermeden önce nereye gideceklerini ve hangi ilkelerin geçerli olduğunu görüyorsa, kullanışlı tek bir arayüz birkaç çalışma biçimini birleştirebilir.

İlk sürümün ne kullanacağı, vakfın onu kullanıma açmadan önce ne kadar kaynak toplayacağına bağlıdır. En olası seçenek, dış sağlayıcının gizlilik korumalı API’sidir; bu hizmetler bugün ABD’de mevcut, gizlilikleri ise başlangıçta sağlayıcının beyanıdır; bunu sınayacağız. Kendi sunucularımızı gizlilik korumalı ortamda kiralamaya yetecek kaynak olursa, ilk sürüm doğrudan bunlarda çalışabilir. 9. bölümdeki denemeler olumlu sonuçlanana kadar bu seçeneklerin her birini gizlilik korumalı değil, beyan edilmiş koruma olarak işaretliyoruz. 2. bölüm hedeflenen korumayı anlatır. Bunun Avrupa’daki insanların kişisel verilerinin korunması açısından ne anlama geldiğini pilot uygulamayı başlatmadan önce anlatacağız.

Suveria’yı kullanmak, konuşmaların modelleri eğitmek için kullanılmasına rıza göstermek değildir. Kullanıcı içerikleri araştırma materyallerine yalnızca ayrı, bilinçli rızayla girer; diğer materyaller ise [materyaller ve kıyaslama testi teknik raporunda](whitepaper-materialy-i-benchmark.md) anlatıldığı gibi, vakfın kamuya açık çalışmalarından ve kullanım dayanağı açık başka kaynaklardan gelir.

Suveria, ortak konuşma ve karar alanı OmniForum’u tamamlar: biri özel bir atölye, diğeri kamuya açık bir kürsü sunar. Her iki projenin kaynaklandığı değerleri vakfın manifestosu anlatır. Bundan sonra sırasıyla şunları gösteriyoruz:

- neyi, neye karşı koruduğumuz, veri ve anahtarların nerede olduğu (2. bölüm);
- mesajın cihazdan modele nasıl geçtiği ve bunun nasıl sınanacağı (3);
- özel konuşmaları okumadan kötüye kullanımı nasıl sınırladığımız (4);
- birden fazla ekran kartında hesaplamanın nasıl çalıştığı (5);
- hangi modelleri, belleği ve araçları planladığımız (6);
- 30 kişiden bütün insanlığa kadar ne kadar hesaplama gücü gerektiği (7);
- tarihli bir hesapta bunun neye mal olduğu (8);
- vaatlerin işleyip işlemediğini nasıl sınayacağımız: kabul denemeleri ve sonuç günlüğü (9).

## 2. Neyi, neye karşı koruyoruz

Konuşmaların ve dosyaların içeriğini, geçmişi ve belleği, anahtarları, ücretlendirme verilerini ve bağlantı zamanı, ağ adresi ve istek boyutu gibi üst verileri koruyoruz. Bu alanların her biri farklı önlemler gerektirir.

2.3. maddede anlatılan beş çalışma seçeneğinin her birinin kime karşı koruduğunu aşağıdaki karşılaştırma gösterir. Sunuculu seçeneklerde koruma tasdike, yani uzak makinede hangi yazılımın hangi koruma modunda çalıştığını donanım imzasıyla doğrulayan belgeye dayanır. Hücreleri bu belgenin sonraki bölümleri temelinde doldurduk; “sağlayıcının beyanı”, kendimiz doğrulayana kadar korumayı doğrulamadığımız anlamına gelir.

| Kime karşı | Ağa bağlı olmayan cihazda yerel model | Ağa bağlı cihazda yerel model | Sunucularda gizlilik korumalı ortamda işleme | Dış sağlayıcının gizlilik korumalı API’si | Model sağlayıcısının dış API’si |
| --- | --- | --- | --- | --- | --- |
| Sağlayıcının yöneticisi | uygulanmaz: işleme cihazda | yalnızca model için uygulanmaz; entegrasyonlarda seçilen hizmetlere bağlıdır | korur: sunucu yöneticisinin içine bakamadığı donanım yalıtımı | sağlayıcının beyanı, sınanacak | korumaz: sağlayıcının içeriğe erişimi vardır |
| Aynı makinedeki başka müşteri | uygulanmaz | uygulanmaz | korur: yalıtım diğer müşterileri kapsar | sağlayıcının beyanı, sınanacak | sağlayıcıya bağlıdır: müşterileri donanım yalıtımı olmadan kendi yazılımı ayırır |
| Ağ gözlemcisi | uygulanmaz: ağ trafiği yok | kısmi koruma: entegrasyonların ağ trafiği değerlendirme gerektirir | kısmi koruma: içerik aktarımda şifreli, üst veriler (zaman, adres, paket boyutu ve ritmi) ayrı önlemler gerektirir (3. bölüm) | kısmi koruma: bağlantı anahtarı tasdike bağlıysa gizlilik korumalı ortamdaki gibi | kısmi koruma: içerik aktarımda şifreli, üst veriler yan sütundaki gibi |
| Sunucuya fiziksel erişimi olan kişi | sunucuya uygulanmaz; cihaza fiziksel erişim önemlidir | sunucuya uygulanmaz; cihaza fiziksel erişim önemlidir | korumaz: başkasının veri merkezinde sağlayıcının erişimi vardır; kendi donanımımızda görünür fiziksel denetim | korumaz: sağlayıcının erişimi vardır | korumaz: sağlayıcının zaten içeriğe erişimi vardır |
| Vakıf | uygulanmaz: vakıf işlemeye katılmaz | uygulanmaz: vakıf işlemeye katılmaz | korur: yalıtım işletmeci olarak bizi de kapsar, kayıt anahtarları kullanıcıdadır | içeriği koruması amaçlanıyor: ağ geçidi isteklerin ücret hesabını içeriği görmeden yapar; şifrelemenin nerede sona erdiğini pilot uygulamadan önce göstereceğiz (3. bölüm) | içeriği bize karşı koruması amaçlanıyor: içeriği görmeden ücret hesabı; sağlayıcı içeriği görür |
| İşlemci üreticisi | cihazın donanımına duyulan güvene bağlıdır | cihazın donanımına duyulan güvene bağlıdır | korumaz: tasdik, dürüst olması gereken üreticinin anahtarlarına dayanır | korumaz: yan sütundaki gibi | sağlayıcının içeriğe erişimi karşısında önemsizdir |

Gizlilik korumalı bilgi işlem, saldırının maliyetini değiştirir: yöneticinin uzaktan erişimi yerine donanıma fiziksel müdahale gerekir.

Aşağıda, kendi gizlilik korumalı ortamımızı kullanan hedef seçeneğin nasıl işlemesinin amaçlandığını anlatıyoruz; diğer seçeneklerin farklarını 2.3. maddedeki tablo gösterir. Mesajın geçtiği yolun her aşamasında bunun pratikte anlamı şöyledir:

- **Kullanıcının cihazında** metin okunabilir, çünkü yazan ve okuyan kullanıcıdır. Onu yalnızca gereken izinleri isteyen uygulama, güncellemeler ve yedeklere gösterilen özen korur. Telefonda veya bilgisayarda kötü amaçlı yazılım çalışıyorsa onu koruyamayız.
- **Sunucuya giden yolda** mesaj, yalnızca doğrulanmış işleme yerinin okuyabileceği biçimde şifrelenir. Uygulama göndermeden önce karşı tarafta tam olarak yayımladığımız yazılımın çalıştığını denetler.
- **Sunucuda** model yanıt vermek için içeriği okumalıdır; bu yüzden bunu sunucu yöneticisinin ve diğer müşterilerin içine bakamadığı kapalı bir donanım ortamında yapar. Bu yalıtımın işlemciyi, ekran kartlarını, belleği ve aralarındaki bağlantıları kapsayıp kapsamadığını sınarız.
- **Kayıtta** konuşma geçmişi ve asistanın belleği, kullanıcının sahip olduğu anahtarla şifrelenir. Kopyaları, erişimi geri kazanmayı ve silmeyi sınarız.
- **Hizmetin işletilmesinde** ücretlendirme, tanılama ve hata bildirimleri konuşma içeriği olmadan çalışır; toplanan her veri türü açıktır (3. bölüm).
- **Dış araçlarda**, asistan Suveria dışında bir şey yapacaksa, örneğin internette bilgi arayacaksa, yalnızca kullanıcının onayladıklarını gönderir ve nereye gönderdiğini gösterir.

Gizlilik korumalı bilgi işlem, kullanıcının zararlı yazılım bulaşmış bilgisayarını düzeltmez. Sunucuya fiziksel erişimi olan herkese karşı da korumaz: 2025’te araştırmacılar, bin dolardan ucuza mal olan parçalardan yapılmış ve bellek veri yoluna bağlanmış bir aygıtın, Intel ve AMD çözümlerindeki tasdik anahtarlarını çıkarmaya, böylece NVIDIA’nın gizlilik korumalı bilgi işleminde de tasdiki sahte olarak üretmeye olanak tanıdığını gösterdi; işlemci üreticileri bu saldırıları korumalarının kapsamı dışında sayıyor.[^teefail] Donanım üreticilerine, kriptografinin doğruluğuna, uygulama koduna ve güncelleme sürecine bağımlılıklar da kalır. Sağlayıcı içeriği okuyamasa bile hizmet vermeyi reddedebilir. Bu nedenle tehdit modeli, içeriği görmeyi, üst verilerden çıkarım yapmayı, işleyişi değiştirmeyi ve hizmeti kesintiye uğratmayı ayırmalı; her seçenekte korumanın işlemesi için kimin dürüst olması gerektiğini belirtmelidir.

Başkalarının veri merkezlerini kullandığımız sürece donanıma fiziksel erişim sağlayıcıdadır ve bunu sınayamayız; her seçenekte bunu söyleriz. Kendi donanımımızda (8.2. maddedeki 3–4. adımlar) bu erişimi şunlarla görünür kılmak istiyoruz:

- cihaz envanteri;
- girişlerin kontrolü;
- rastgele desenli mühürler ve kasanın açılmasını algılayan sensörler;
- çalışma günlüğü;
- görüntülerinde kamuya açık bir rastgelelik üretecinin makinenin anahtarıyla imzalanmış güncel değeri görülen bağımsız gözlemcilerin kameraları;
- daha uzun vadede ise herkesin görebileceği bir sunucu odası.

Bakım ve parça değişimi, önceden duyurulmuş, açık usuller olarak yapılır. Görünür fiziksel denetim riski azaltır, birçok olayı saptamaya olanak verir; ancak makinenin bütün geçmişini veya teslimattan önce müdahale olmadığını kanıtlamaz; yukarıdakine benzer saldırılar tasdik kanıtlarını sahte üretmeye de yol açabilir. Bu yüzden kasa açıldığında, parça değiştiğinde, plansız yeniden başlatmada veya başka şüpheli olayda o makinede özel içerik işlemeyi durdururuz. Oturum ve uygulama anahtarlarını değiştiririz; ancak şüphe donanım tasdikinin temeline yönelikse yeni bir tasdik tek başına güveni geri getirmez; yeniden kullanıma kabulün koşul ve kanıtlarını önceden anlatırız. Kullanıcı verilerini şifreleyen anahtarların ayrı koruması ve geri kazanma yolu vardır; dolayısıyla bu usul insanların özel çalışmalarını ellerinden almaz.

### 2.1. Kendi cihazların ve isteğe bağlı sunucular

Özel konuşmaların, dosyaların ve belleğin asıl saklama yerinin, içeriği uygun anahtarla okunan veri kümeleri olan şifreli kapsayıcılar içinde kullanıcının cihazları olması amaçlanıyor. Bu, local-first yaklaşımıdır: veriler önce cihaza kaydedilir; sunucular ise yedeklemeyi ve eşzamanlamayı destekleyebilir.[^local-first] Kaydedilen materyallerin, vakfın hizmetlerini kullanmayı bıraktıktan sonra da erişilebilir kalması amaçlanıyor; uzak model gerektiren görevler seçilen hesaplama hizmetinin erişilebilirliğine bağlıdır.

Seçilen sunucularda isteğe bağlı kayıt, yedeklemeye ve cihazlar arasındaki değişikliklerin uzlaştırılmasına hizmet eder. Kopyayı saklayan işletmecinin yalnızca okuma anahtarı olmadan şifreli kaydı alması için içeriği göndermeden önce cihazda şifreleriz. Kullanıcı saklama sağlayıcısını ve okumaya yetkili cihazları seçer. Aktarılan kopyanın zamanı ve boyutu gibi üst verilerin açığa çıkmasını ayrıca sınırlarız.

### 2.2. Anahtarlar ve erişimi geri kazanma

Özel kapsayıcıların anahtarları kullanıcının kontrolünde kalır. Geri kazanma usulü, erişimi ikinci cihazın mı, saklanan kurtarma anahtarının mı, yoksa bilinçli seçilmiş başka bir mekanizmanın mı geri getirdiğini ve kime okuma olanağı verdiğini açıkça belirtir. İşletmecide hesabı geri kazanmak kapsayıcının içeriğinin kilidini açmaz. Anahtarın bütün kopyalarını ve geri kazanma olanaklarını yitirmek verileri kalıcı olarak kaybetmek anlamına gelebilir; bu nedenle mekanizma seçimini verileri geri yükleme denemesiyle sınar, anlaşılır bir yönergede anlatırız.

Birleştirilebilen birkaç geri kazanma yolu değerlendiriyoruz: zaten erişimi olan ikinci cihaz; kâğıda veya parola yöneticisine kaydedilmiş kurtarma anahtarı; donanım anahtarı; anahtarı birkaç güvenilir kişi arasında bölmek, örneğin üçünün herhangi ikisinin birlikte erişimi geri getirebilmesi, tek başına hiçbirinin verileri okuyamaması. Vakıf anahtarları veya parçalarını saklamaz; bu nedenle kullanıcı adına erişimi geri kazanamaz veya verilerini teslim edemez.

Başlangıç için ikinci cihaz ve kâğıda kaydedilmiş anahtar öneriyoruz; anahtarı güvenilir kişiler arasında bölmek isteyenler için bir seçenektir.

### 2.3. Koruma seçenekleri

Beş çalışma seçeneğini karşılaştırmak istiyoruz, çünkü her biri başka bir şeye karşı korur:

| Seçenek | İşleme nerede yapılır | Ne değerlendirilmeli |
| --- | --- | --- |
| Ağa bağlı olmayan cihazda yerel model | Kullanıcının cihazında | Cihazın durumu, fiziksel erişim, depolama ortamları ve veri kopyaları |
| Ağa bağlı cihazda yerel model | Yerel olarak, entegrasyonlarda ayrıca seçilen hizmetlerde | Uygulama izinleri, güncellemeler, ağ trafiği ve entegrasyonlara aktarılan verilerin kapsamı |
| Sunucularda gizlilik korumalı ortamda işleme | Yapılandırması tasdikle doğrulanan uzak ortamda | Ortamın doğrulanması, yöneticilerin erişimi ve donanıma fiziksel erişim, iletimin ve işlemenin korunması, üst veriler ve anahtarlar |
| Dış sağlayıcının gizlilik korumalı API’si | Yapılandırmasının tasdikle doğrulanması amaçlanan, sağlayıcının gizlilik korumalı ortamında | Bağlantı anahtarının tasdike bağlı olup olmadığı, tasdikin işlemciyi ve ekran kartını kapsayıp kapsamadığı, belirli isteğin belirli makineyle bağlanıp bağlanamadığı, donanıma kimin fiziksel erişimi olduğu, veri saklama ve yargı yetkisi; kendimiz doğrulayana kadar gizliliği sağlayıcının beyanı sayıyoruz |
| Model sağlayıcısının dış API’si | Dış sağlayıcıda | Sağlayıcının koşulları, içeriğe erişim, saklama ve yargı yetkisi; gizlilik korumalı çalıştırmanın vaatlerini bu seçeneğe taşımıyoruz |

Sunucuyu bağımsızca sınamak kurulu uygulama gerektirir. Tarayıcıda sunucuyu sınayan kodu her seferinde işletmeci verir; bu yüzden bu yolu daha az korunan olarak işaretliyoruz.

Ağa bağlı cihazın, yalıtılmış sunucu ortamından daha fazla saldırı noktası olabilir; bu nedenle yalnızca hesaplamanın yapıldığı yer güvenliği belirlemez. Belirli yapılandırma sınanmadan hiçbir seçeneğe “tam mahremiyet” etiketi verilmez. Her konuşmada kullanıcı hangi seçenekte çalıştığını görür; seçenek değişikliği bilinçli kararını gerektirir. Dış API için kendi anahtarın erişimin ücretlendirilmesi içindir; sağlayıcıya karşı gizlilik sağlamaz. Bu, özel Suveria’nın varsayılan seçeneği değildir; içeriği göndermeden önce sağlayıcının onu model eğitimi için kullanıp kullanamayacağını ve ne kadar sakladığını gösteririz.

Henüz bu karşılaştırmada bulunmayan bir yönü de inceliyoruz: güvene dayalı sürü. Böyle bir seçenekte model, birbirini tanıyan ve birbirine güvenen birkaç kişinin, örneğin ailenin, arkadaşların veya küçük bir topluluğun donanımında çalışırdı; her biri bilgisayarının hesaplama gücünün birazını paylaşırdı. Bu seçeneğin mahremiyeti tekniğe değil bu insanlara duyulan güvene dayanır, çünkü bilgisayarları işlenen içeriği görür; biz de bunu tam böyle anlatmak istiyoruz. Bu, henüz yalnızca analiz ettiğimiz bir fikir, ancak araştırmak istediğimiz yollardan biri.

Güvenli sunucu ele geçirilmiş telefondan okunan metni korumaz; daha güvenli telefon da sunucuyu düzeltmez; bu nedenle uygulamayı cihazın korunmasıyla birlikte tasarlıyoruz. Suveria uygulamasının, örneğin GrapheneOS sisteminde Google hizmetleri olmadan çalışmasını, Google Play mağazası dışında da erişilebilir olmasını ve tekrarlanabilir derlemeleri olan sürümlere sahip olmasını istiyoruz: herkes yayımlanmış kaynak koddan uygulamayı kendi derleyebilir, elde ettiği dosyanın kurduğu dosyayla aynı olduğunu sınayabilir. Uygulamanın içinde de güvenlik önlemleri planlıyoruz: ekran görüntülerini engelleme, yazılan metinden öğrenmeyen klavye modu, özel verileri bulut yedeklerinden çıkarma, bildirim içeriğini gizleme ve uygulama kilidi. Vakfın sitesinde kendi cihazlarını koruma kılavuzunu üç düzeyde hazırlayacağız: temel ayarlar ve güncellemelerden, çalışma ve anahtarların daha güçlü yalıtımına, açık donanım yazılımına sahip bilgisayarda Qubes OS gibi en yüksek gereksinimleri olan kişiler için sınanmış yapılandırmalara kadar. Suveria’yı kullanmak belirtilen donanımı satın almayı gerektirmez; sistemin adı bütün cihazın sertifikası değildir.

Her konuşmada bir koruma kartı (*Charta Tutelae*) göstereceğiz: bu konuşmanın mahremiyetinin bağlı olduğu unsurların listesi; her biri şu üç durumdan birinde:

- **Tarafımızdan sınanmış:** tarih, sürüm ve nasıl yaptığımızın açıklamasıyla kendimiz doğruladık.
- **Sağlayıcı tarafından beyan edilmiş:** sağlayıcı böyle söylüyor, biz henüz sınamadık.
- **Korunmayan:** bu seçenek onu korumaz; örneğin ağ sağlayıcısının gördüğü mesaj zamanı ve uzunluğu, sağlayıcının donanıma fiziksel erişimi veya sunucunun bulunduğu yargı alanı.

“Tarafımızdan sınanmış” durumu son sınamanın tarihini taşır ve süresi dolar: yeniden sınanmadan belirlenmiş süre geçtiğinde “beyan edilmiş” durumuna döner. Sağlayıcıdaki olay veya doğrulanmamış yapılandırma değişikliği gibi bilinen güven kırılmalarını ayrıca göstereceğiz. Kart herkes için aynıdır, fiyata bağlı değildir; tek bir unsuru bile yalnızca beyan edilmiş olan seçenek “tam mahremiyet” adını taşımaz. 2. bölümün başındaki karşılaştırma ve bu maddedeki seçenekler tablosu seçenekleri genel olarak anlatır; kart ise o belirli konuşmanın durumunu gösterecek.

## 3. Cihazdan modele giden yol

Suveria’nın birkaç parçadan oluşması amaçlanıyor:

- kullanıcının cihazındaki uygulama;
- isteklerin ücret hesabını yapan ve harcama sınırına uyulmasını sağlayan ağ geçidi;
- modeli barındıran, bize ait veya sağlayıcıdaki gizlilik korumalı ortam;
- şifreli kopyaların saklanması;
- kullanıcının adresini gizleyen isteğe bağlı aracı.

Ağ geçidinin gizlilik korumalı makinede çalışması amaçlanıyor. Pilot uygulamadan önce uygulamada, kullanıcının cihazının kontrol ettiği şifrelemenin nerede sona erdiğini ve ağ geçidinin içeriği görüp görmediğini; görüyorsa da bunun yalnızca gizlilik korumalı ortamın içinde olduğunu göstereceğiz.

Şifreli saklama ve gizlilik korumalı işleme ayrı güvenlik önlemleri gerektirir. Sunucuda çalışan modelin, görev için korunan hesaplama ortamında okunabilir içeriğe ihtiyacı vardır; yalnızca dosya kopyalarını şifrelemek bu aşamayı korumaz.[^apple-pcc] Uygulama, bütün özel kapsayıcının anahtarını aktarmadan, yalnızca o iş için seçilen kapsamı paylaşır. Oturum açıklaması, içeriğin hesaplama için nerede erişilebilir olduğunu, işletmecinin görmesini neyin sınırladığını ve sonuç döndükten sonra verilere ne olduğunu belirtir.

Önerilen oturum akışı:

1. Uygulama onaylanan sürümün açıklamasını indirir ve tasdiki, yani çalışan ortamın belirli özelliklerine ilişkin kriptografik doğrulamayı denetler.
2. Donanımın, koruma durumunun ve yazılım ölçümlerinin açık politikaya uygunluğunu denetler. Veri alıcısının anahtarı bu tasdike bağlı olmalıdır.
3. Başarılı denetimden sonra onaylanan ortamla şifreli bağlantı kurar. Uyumsuzluk veri gönderimini durdurur; başka seçeneğe geçmek bilinçli tercih gerektirir.
4. Ortam, ağa ve araçlara erişimi sınırlı olarak isteği işler, sonucu döndürür ve yayımlanan politika uyarınca çalışma verilerini siler.
5. Konuşma veya bellek yalnızca kullanıcının seçtiği kapsamda kaydedilir.

Tasdik, neyin çalıştırıldığını belirlemeye yardımcı olur; ancak tek başına kodun güvenli olduğunu kanıtlamaz. Kod incelemeleri, yazılımın kaynak koddan tekrarlanabilir derlemeleri (2.3. maddede anlatılan), onaylanan sürümlerin kaydı ve bağımsız sınama olanağı gerekir. Apple Private Cloud Compute mimarisi, korumayı yazılım yayımlama şeffaflığına nasıl bağlayacağımız konusunda bize referanstır; tasarımımızın sertifikası değildir.[^apple-pcc]

Sürümleri, güvenin tek bir kişiye veya yalnızca vakfa bağlı kalmayacağı biçimde korumak istiyoruz:

- her sürümün kaynak koddan tekrarlanabilir biçimde derlenebilmesi amaçlanıyor; vakıf dışından en az iki bağımsız taraf onu yeniden oluşturur, parmak izinin eşleştiğini kamuya açık doğrular; onları bulana kadar sürümü üçüncü kişilerce doğrulanmamış olarak işaretleriz;
- onaylanan sürümlerin parmak izleri, yalnızca ekleme yapılabilen kamuya açık bir kayda girer; birbirini izleyen durumlarını bağımsız tanıklar doğrular;
- yeni sürüm, en az biri yönetim kurulu dışından olmak üzere birkaç kişinin onayından sonra sunuculara geçer;
- verileri işlemek için gereken anahtarları yalnızca tasdikten geçen ortam alır.

Tam koruma seçeneğini, imzalı ve doğrulanabilir sürümleri, kusurlu sürüme geri dönüşe karşı koruması ve güvenli anahtar saklaması olan kurulu uygulamalar için tasarlıyoruz; çünkü tarayıcıda sunucuyu sınayan kodu her seferinde işletmeci verir. Tarayıcı sürümü daha düşük koruma düzeyini açıkça anlatır. Tekrarlanabilir derleme, sürümü kodla karşılaştırmaya olanak verir; kodun kendisinin ve yapılandırmanın değerlendirilmesini ise yine incelemeler, denetimler ve bildirilen hatalar için ödüller sağlar; her olay açık kayda girer.

Kullanıcı adresinin açığa çıkmasını sınırlamak için, belirli güven modelinde gönderen hakkındaki bilgiyi isteğin içeriği hakkındaki bilgiden ayıran Oblivious HTTP temelli aracılık araştırılabilir.[^ohttp] Aracıların gizli anlaşması, trafik korelasyonu ve uygulama ayrıntıları yine değerlendirme gerektirir; bu nedenle yalnızca bu protokolün kullanılmasını tam anonimlik olarak anlatmıyoruz.

Şifreleme ve gizlilik korumalı bilgi işlem, yanıtın aktığı paketlerin uzunluğunu veya ritmini gizlemez. 2024–2025 araştırmaları, ağ gözlemcisinin bunlardan konuşmanın konusunu, bazen de içeriğini yeniden oluşturabildiğini gösterdi.[^weiss-keylogging][^whisper-leak] Bu nedenle gizlilik korumalı modda yanıtı sabit boyutlu çerçevelerde ve sabit ritimle göndermek, istek önbelleğini kullanıcılar arasında paylaşmamak ve spekülatif kod çözmeyi kapatmak istiyoruz. Bu önlemler biraz gecikmeye ve aktarım kapasitesine mal olur; bunu hesaba katacağız.

Altyapıyı, sistemin tek tek parçalarının yapabileceklerini sınırlayarak da koruruz: kaynak sınırları, görev yalıtımı ve konuşmayı işleyen düğümün dışarı giden bağlantılarını varsayılan olarak engelleme. Bu engelin, parmak izi tasdikte görülen yazılımın bir parçası olması amaçlanıyor: değişmesi parmak izini değiştirir; bu yüzden uygulama bağlantıyı reddedecek. Sağlayıcının ağ kurallarını garanti değil, ikinci katman sayıyoruz. İzin verilen dış eylemler, kullanıcının belirlediği yetkilerle ayrı araç katmanından geçer. Uygulamaya koymadan önce bu sınırların etkinliğini, olayları saptama yolunu ve gereken en az üst veri kapsamını sınayacağız. Hedef, konuşma içeriğinin gizliliği korunurken ortak kaynakların güvenliğidir.

Kullanıcı, posta kutusu gibi başka insanlardan mesajlar içeren kaynakları bağladığında özellikle dikkatliyiz. Başkasının mesajında, modeli özel belleği açığa çıkarmaya yönlendiren gizli talimatlar bulunabilir. Bu nedenle dış içeriği kullanıcının talimatlarından ayırırız: bunları düzenlerken asistan, insanın onayı olmadan kendiliğinden mesaj gönderemez, ağ adresi açamaz veya Kişisel Kanon’u değiştiremez.

Suveria’nın işleyişi hakkında bildiğimiz her şeyi herkes bilebilir. Hizmet açılırken işleyişi hakkında topladığımız bütün veri türlerinin listesini, amaç ve saklama süresiyle yayımlayacağız; verilerin kendisini ise toplu biçimde sunacağız: token kullanımı, kullanılan modeller, makinelerin yükü, kuyrukta bekleme süresi, arızalar ve maliyetler. Herkes bunları bizim gördüğümüz yerde görür. Dökümleri yayımlamadan önce belirli kişinin davranışının bunlardan tanınıp tanınamayacağını sınarız: asgari grup büyüklüğünü, yayın gecikmesini ve dışarıda bıraktığımız verileri belirleriz. Liste dışındaki verileri toplamayız; aksi ortaya çıkarsa bunu ciddi olay sayar, kamuya açık anlatırız.

## 4. Özel içeriği görmeden kötüye kullanımı sınırlama

Onurun korunmasını, araçlarımızın kullanımının sonuçlarından etkilenebilecek insanlara da uygularız. Kötüye kullanımı özel konuşmaları okumadan önlemek istiyoruz: asistanın kendi izlediği ilkeler, araç ve ağ bağlantısı yetkilerinin sınırları, kaynak sınırları ve toplu hesap açmaya karşı koruma yoluyla. Özel içeriğe gizli erişim yolları oluşturmuyoruz; çünkü herkesin korunmasını zayıflatırlardı.

Hesap, tamamen özel olandan (kendi cihazındaki anahtar, e-posta adresi olmadan) kolay olana (dış sağlayıcı üzerinden oturum açma) kadar birkaç yolla açılabilecek. Her yolda seçimden önce vakıf dışında kimin hesabın açıldığını öğrendiğini, hangi verileri gördüğünü ve o sağlayıcı yok olursa ne olduğunu göstereceğiz. Hesabın açılma yolu katılımcının haklarını etkilemez; OmniForum’daki oy hakkı, hesaba eklenen ayrı bir oy hakkı belgesidir.

Mahremiyeti ve kötüye kullanımı sınırlamayı ayrı değerlendiriyoruz. Suveria’yı, vakfın belirli kişi hakkında teslim edebileceği verileri olmayacak biçimde tasarlıyoruz: içerikler kullanıcının anahtarlarıyla şifrelenir, hizmetin işleyişi hakkındaki verileri yalnızca 3. bölümde anlatılan açık kapsamda toplarız; kişisel verileri ise hukukun ödeme ve muhasebede gerektirdiği en az kapsamla sınırlarız; bu kapsamı da yayımlarız. Birisi bizden belirli kişinin verilerini isterse, açıkça anlatılan bu asgari kapsam dışında verilerine sahip olmadığımızı dürüstçe söyleyebilmek istiyoruz. Kötüye kullanıma karşı her önlem için hangi verileri gerektirdiğini, bunları ne kadar sakladığımızı, dürüst katılımcı için sonuçlarını ve yanlış engellemeye nasıl itiraz edilebileceğini anlatacağız.

Zarar gördüğünü düşünen kişilerin bildirimlerini nasıl aldığımızı ve konuşma içeriğine erişmeden ne yapabileceğimizi de anlatacağız: örneğin araç yetkilerini veya hesap kaynaklarını sınırlamak, ücretlendirme verilerini ve üst verileri sakladığımız kapsamda sınamak ya da bildirene nerede yardım arayabileceğini söylemek. Böyle bir hizmetin işletmecisinin hukuki yükümlülükleri, kullanıma açılmadan önce ayrı analiz gerektirir.

Bu önlemler hedefler ve sınanacak seçeneklerdir; hiçbiri bütün kötüye kullanımları saptamayacak. Her biri için hangi tehditleri karşıladığını, neleri saptamadığını ve işletmeci özel konuşmaları görmeden neyin sınanabileceğini belirteceğiz. Bu değerlendirmenin sonucu, belirli işlevin sunulma koşullarını belirler.

Konuşma yaşamı veya sağlığı tehdit eden bir durumla ilgili olduğunda asistanın, özel ortamın dışına hiçbir şey göndermeden, örneğin acil yardım numaraları gibi erişilebilir yardım hakkında bilgi vermesi amaçlanıyor.

### 4.1. Asistanın açık talimatları ve ortak kütüphane

Asistanın davranışını, ana talimatı ve çalışma yolu da belirler: görevi adımlara nasıl böldüğü, belleği nasıl kullandığı ve yanıtları nasıl sınadığı. Suveria’da insanın, asistanının tam talimatını her zaman okuyabilmesi amaçlanıyor. Ortak altyapının yalnızca kıyaslama testinin açık denemelerini geçen model ve ayarları sunması amaçlanıyor; bu asgari düzeyin üzerinde çalışma tarzını kullanıcı seçer: düşünceleri sakince düzenlemekten, asistanın akıl yürütmedeki boşlukları gösterdiği zorlayıcı konuşmaya kadar. Katılımcıların OmniForum’da geliştirdiği ve kıyaslama testinde sınadığı, sınanmış talimatlardan oluşan açık kütüphane oluşturmak istiyoruz.

## 5. Birden fazla ekran kartında hesaplama

Bölüm 6’daki model tek ekran kartına sığmaz; bu nedenle koruma kartlar arasındaki bağlantılarda da sınanmalıdır: PCIe veri yolu işlemciyi kartlara, NVLink ve NVSwitch ise kartları birbirine bağlar.

Model birkaç ekran kartı kullandığında veriler aralarında da akar; dolayısıyla koruma hem kartlar hem bağlantılar için sınanmalıdır. Kartın adı gizlilik korumalı hizmet sipariş etmeye yetmez: uygun makineyi, işlemciyi, bağlantı topolojisini, donanım yazılımını, sürücüleri ve çalıştırma yazılımını doğrulamak, ardından birlikte işleyişlerini sınamak gerekir.[^nvidia-platformy]

PPCIe v2 belgelerinde anlatılan Hopper Protected PCIe modunda NVLink ve NVSwitch ağı sistemin güvenilen kısmına aittir; dolayısıyla PCIe şifrelemesi kartlar arasındaki her bağlantının şifrelenmesi demek değildir.[^nvidia-ppcie-v2] NVIDIA R595 belgeleri, Blackwell kartları için NVLink bağlantılarının şifrelenmesini ve tek gizlilik korumalı sanal makinede sekiz karta kadar desteği içeren, birden fazla kartta gizlilik korumalı bilgi işlem modunu anlatır.[^nvidia-blackwell] Bu, yapılandırmayı sınama dayanağıdır; her B200 kiralamasının bu işlevi içerdiğinin kanıtı değildir. Farklı sürümlerin farklı uyumluluk matrisleri vardır; bu nedenle yapılandırmayı rastgele seçilen sürümlerden kurmayız.

Sağlayıcıya sorular şunları kapsar:

- belirli koruma modu ve bağımsız tasdik olanağı;
- gerekli kaynakların yalnızca bize ayrılması ve bölge;
- yöneticilerin erişimi ve donanıma fiziksel erişim;
- veri saklama süresi;
- teslim süresi ve tam maliyet.

Teklifi ancak kendi uygulamamızla denemeden sonra karşılaştırırız. Ticari “secure” etiketi bu bilgilerin yerini tutmaz.

## 6. Model, bellek ve araçlar

Tasarımın temelini bağımsızca çalıştırılabilen açık modeller oluşturur. Suveria’nın bütün dünyadaki insanlara kendi dillerinde sunulması amaçlanıyor; bu yüzden model seçerken birçok dilde kaliteyi, niyeti anlamayı, güvenilirliği, lisansı, maliyeti ve gereken koruma mimarisinde çalıştırılabilmesini dikkate alırız. İhtiyaç doğduğunda genel modelin yanında belirli dillerde daha iyi çalışan modelleri de çalıştırabiliriz. Açık ağırlıklar bazı kullanımları mümkün kılar; ancak verilerin ve model oluşturma sürecinin tamamının açıklığını belirlemez.[^osi]

İlk aday, hizmetler için de kullanılmasına izin veren MIT lisanslı DeepSeek-V4.1-Flash’tır.[^deepseek] Büyüktür, ancak ekonomiktir: üretici ana bölümde 552 milyar parametre, yani eğitim sırasında belirlenen sayı ve 196 milyar parametreli ek Engram belleği bildiriyor; sonraki her sözcükte yalnızca 8–16 milyar parametre çalıştığından hızlı ve ucuz yanıt verir (8. bölümdeki hesap). Ancak bütün parametreler ekran kartlarının belleğine sığmalıdır; bu yüzden en az dört modern kart gerekir. Bu modelin parametreleri zaten her sayı için daha az basamakla ekonomik biçimde kaydedilmiştir; buna kuantizasyon denir, gereken belleği azaltır, ancak kaliteyi düşürebilir; bu nedenle her sürümde kendi görevlerimizde sınarız. Daha küçük modellerle de karşılaştırırız: büyüğünü yalnızca insanlar için önemli görevleri açıkça daha iyi yaptığında seçeriz.

İkinci aday, Moonshot AI şirketinin 23 Ekim 2026’da sunulan Kimi K3.1 Pro modelidir. Üretici, onu yaklaşık 3 trilyon parametre ve bir milyon tokene kadar bağlamla Kimi K3’ün eğitimi sürdürülmüş sürümü olarak anlatıyor; tam ağırlıkların 4 Kasım 2026’dan önce sunulacağını duyuruyor; lisans henüz açıklanmadı.[^kimi-k31] Karşılaştırmada kullandığımız ayrıntılı veriler önceki modelin kartından geliyor: Kimi K3’ün 2,8 trilyon parametresinden her tokende 104 milyarı çalışır; Open Source Initiative tarafından onaylanmamış kendi lisansı vardır.[^kimi-k3] Artificial Analysis endeksinin 28 Ekim 2026 sürümünde Kimi K3.1 Pro, DeepSeek-V4.1-Flash’ın 32 puanına karşı 46 puan aldı; ancak birkaç kat pahalı ve yavaştır.[^aa] Kimi K3’ün ağırlık dosyaları yaklaşık 1,56 TB tutar; çalıştırmak ayrıca bağlam ve hesaplama belleği gerektirir; dolayısıyla yalnızca kartların toplam belleğine bakarak modelin çalışıp çalışmayacağına karar vermeyiz. SGLang motorunun tarifi, Kimi K3’ün sekiz B300 kartında sınanmış yapılandırmasını anlatır; bu henüz Kimi K3.1’in veya gizlilik korumalı yapılandırmanın denemesi değildir.[^spheron-kimi][^sglang-k3] Ağırlıklar yayımlandıktan sonra boyutlarını ve biçimini, lisansı, motor tariflerini, belirli yapılandırmadaki kapasiteyi ve gizlilik korumalı API’lerde erişilebilirliği sınayacağız. Ağırlıklar yayımlanmasa veya lisans koşulları elverişsiz çıksa bile sonucu bu belgenin ilk güncellemesi olarak tarihle ekleyeceğiz.

**9 Kasım 2026 güncellemesi.** Kimi K3.1 Pro’nun ağırlıkları herkese açık ve kayıt olmadan indirilebiliyor; üreticinin deposu 2 Kasım 2026’da oluşturuldu.[^kimi-k31-wagi] Ağırlıklar 96 dosyada yaklaşık 1,56 TB tutuyor. Model baştan beri tasarruflu bir biçimde eğitildi: uzman ağırlıkları MXFP4 biçiminde, geri kalanı BF16’da. Model kartı 2,8 trilyon parametre veriyor; bunların 104 milyarı her tokende çalışıyor ve bağlam 1.048.576 tokene kadar çıkıyor. Daha önceki “yaklaşık 3 trilyon” bir sayı değil, model sınıfının adıydı. Lisans üreticinin kendisine ait (Kimi K3.1-Pro License). Modelin hizmetlerde de kullanılmasına iki koşulla izin veriyor: modele erişimi hizmet olarak sunan kuruluşun geliri 12 ayda 20 milyon USD’yi aştığında üreticiyle ayrı bir sözleşme; aylık kullanıcı sayısı 100 milyonu ya da aylık gelir 20 milyon USD’yi aştığında ise arayüzde görünür model adı. Open Source Initiative bu lisansı onaylamadı. Vakfın bugünkü ölçeğinde bu koşulların hiçbiri bizi ilgilendirmiyor; bu, metni bizim okuyuşumuzdur, hukuki görüş değildir.[^kimi-k31-licencja] vLLM ve SGLang motorlarının bu model için tarifleri var; anlatılan en küçük yapılandırma en yeni nesilden sekiz kart (tek bir 8 × B300 düğümü ya da iki GB300 modülü) ve destek şimdilik yalnızca iki motorun geliştirme sürümlerinde bulunuyor.[^kimi-k31-silniki] Böyle bir yapılandırmanın olağan çalışmadaki iş hacmini henüz kimse yayımlamadı; bu yüzden bugün bir yapılandırmanın kaç kişiye hizmet vereceğini hesaplayamıyoruz. Gizlilik korumalı API’lerde bu modeli 9 Kasım’da tek bir sağlayıcıda bulduk; deneysel olarak işaretliydi, fiyatı milyon giriş tokeni başına 4 USD ve milyon çıkış tokeni başına 20 USD idi; bu teklifin tasdikini henüz kontrol etmedik.[^kimi-k31-poufne] Artificial Analysis endeksinde (sürüm 5.0.1, 9 Kasım’daki okuma) Kimi K3.1 Pro’nun 46, DeepSeek-V4.1-Flash’ın 33 puanı var.[^aa-2026-11] Bugünkü sonuç: lisans ve ağırlık biçimi yolu kapatmıyor, ancak model en az sekiz kart gerektiriyor ve gizlilik korumalı biçimdeki maliyeti ile hızı henüz ölçülmeli. DeepSeek-V4.1-Flash birinci aday olmayı sürdürüyor.

Model değişikliğini veya kullanımından vazgeçmeyi önceden duyururuz. Konuşma geçmişi kullanıcıda kalır: ardıl modeli seçebilir, verileri dışa aktarabilir veya çalışmayı bitirebilir. Modelin değiştiği anın konuşmada görünmesi amaçlanıyor; özel bağlamın yeni modele taşınması kullanıcının kararını gerektirir.

Asistanın yanıt verirken izlediği ilkeleri her sürümle birlikte tam olarak yayımlayacağız. Modelin kendisi, kaçındığı konular gibi, yaratıcısının seçimlerini de taşır; bunları kıyaslama testinde sınar, model seçerken anlatırız.

Önceki konuşmaların belleğinin, kullanıcının rızasıyla çalışması ve açıkça düzenlenebilir olması amaçlanıyor. Özgün ifadeleri, model özetlerini ve kullanıcının doğruladığı bilgileri ayırırız. Her kayıt silinebilir veya düzeltilebilir, kökeni görülebilir ve hangi görevlerde kullanılabileceği belirlenebilir. Asistan kendi önerisini, insanın bilinçli biçimde kendi görüşü saydığı tutumdan açıkça ayırır.

Eylem gerçekleştirmek, belirli amaç ve süre için verilen yetkiler gerektirir. Sayfa veya belge içeriği, bu yetkileri değiştirme talimatı değil, analiz materyalidir. Dış eylemler, harcamalar, yayınlar ve silmeler orantılı onaylar ve kullanıcının erişebildiği eylem günlüğünü gerektirir.

### 6.1. Düşünce Teleskobu ve Kişisel Kanon

Düşünce Teleskobu (*Telescopium Mentis*) fikri, belirli zamanda toplumda kabul edilebilir sayılan fikirlerin aralığını anlatan Overton penceresinden doğdu. Tek kişide, belirli zamanda kendisi için kabul edilebilir saydığı düşüncelerin aralığı söz konusudur. Teleskobun tek kişi için ve yalnızca onun için böyle bir pencere olması amaçlanıyor: farklı anlardan kendi düşünce ve değerlerinin kaydını ve zamanla nasıl değiştiklerini görmesini sağlar.

Düşünce Teleskobunun kişinin kendi akıl yürütmesine dönmesine hizmet etmesi amaçlanıyor: o zaman ne biliyordum, ne istiyordum ve neden fikrimi değiştirdim? Kullanıcının seçtiği olayları, dünya hakkındaki bilgileri ve kendi eylemlerini, kendi saydığı ilke ve değerleri yazdığı derleme olan Kişisel Kanon’uyla karşılaştırmaya da yardımcı olabilir. Karşılaştırma, kullanıcının kendisinin anlattığı veya gösterdiği durumla ilgilidir; materyali ve kapsamı kendisi belirler. Model, anılan ilkenin kaynağı ve olayın açıklamasıyla olası bağlantıları gösterir; doğrulanmış bilgileri yorum ve belirsizlikten ayırır. Önerilen yorum düzeltilebilir veya reddedilebilir; önceki tutumları zamanlarını ve bağlamlarını dikkate alarak değerlendiririz.

Fark edilen gerilim, ilkenin kendisine, değerler çatışmasına, çevre koşullarına, insanın sınırlılıklarına veya modelin isabetsiz yorumuna ilişkin olabilir. İnsan idealini koruyup mevcut tutarsızlığı kabul edebilir, inancını netleştirebilir, eylemini veya çevresini değiştirmeyi değerlendirebilir ya da soruyu açık bırakabilir. Kanonun kendi seçimlerini anlamaya yardımcı olması amaçlanıyor: ahlak puanlaması veya kamuya açık tutarlılık sıralaması oluşturmuyoruz. Özel düşünme özel kalır; kaydı, yayın veya oy verme anlamına gelmez.

Dikkatli başlayacağız. İlk sürümde Düşünce Teleskobu yalnızca kullanıcının kendisinin gösterdiği tek bir durumla, örneğin dönmek istediği kararla çalışır; yaşamını sürekli izlemez. Kullanıcı onu ne sıklıkla kullandığına, hangi notları ve anıları paylaştığına ve ne zaman sildiğine karar verir. Bu denemede gösterilen bağlantıların anlaşılır olup olmadığını, kendi seçimlerine hâkim olma hissi verip vermediğini ve aracın sürekli kendinden hesap sorma baskısı doğurup doğurmadığını sınarız. Birinin düşünme sonrasında ilkelerine her zaman uymadığını kabul etmesini veya meseleyi açık bırakmasını da iyi sonuç sayarız: aracın kendini anlamaya yardımcı olması, karara zorlamaması amaçlanıyor.

### 6.2. Açık biçimler, taşıma ve araçların birlikte çalışması

Suveria’yı açık kaynak kodu ve belgeleriyle dijital kamu malı olarak geliştirmek istiyoruz; referans noktası Digital Public Goods Alliance standardıdır.[^dpga] Veri taşıma biçiminin açık açıklaması, sürümü ve sürüm değişikliğinde bilgileri koruma kuralları vardır. Önce mevcut açık standartları kullanır, gereken uzantıları belgeleriz.

Dışa aktarma, seçilen özgün materyalleri, geçmişi, kaynakları ve bağlantıları; kullanıcının sözleri, modelin işlemesi ve yazarın doğruladığı anlam arasındaki ayrımı; ayrıca Kişisel Kanon’un yapısını kapsar. İndirilen paket, yetkili kişi şifresini çözdükten sonra etkin Suveria hesabı olmadan okunabilir.

API’lerin, yani programların belgelenmiş iletişim yollarının, kişinin kendi oluşturduğu araçlar dâhil başka araçlarda materyallerle çalışmaya olanak vermesi amaçlanıyor. Kullanıcı veri kapsamını ve izin verilen eylemleri seçer, entegrasyon yetkilerini geri alabilir. Yetkiyi geri almak sonraki erişimi durdurur; daha önce aktarılan kopyaların akıbeti alıcıya da bağlıdır.

Özel alan, ortak projeler yararına çalışmaya da hizmet edebilir. Kullanıcı teslim veya yayın için vermek istediği materyalleri seçer; araç bunlardan erişim anahtarlarını, parolaları, kişisel verileri ve yaması yapılmamış açıklarla ilgili bilgileri yerel olarak çıkarmaya yardımcı olur. Özel olarak ödenen kaynakları kullanmak çalışma konuşmalarını açıklamayı gerektirmez. Vakfın ortak kaynaklarıyla finanse edilen görevde kamuya açık kaydın kapsamını, takma ad seçimini ve materyal hazırlığını [vakfın atölye ilkeleri](whitepaper-zasady-fundacji.md) önceden belirler (11.1. bölüm). Suveria’daki düşüncelerden tek bir soru veya argüman da bilinçli seçilip OmniForum’da yayımlanabilir; manifestoda Ignis Töreni (*Caerimonia Ignis*) olarak anlatılan bu adım her zaman ayrı karar gerektirir.

## 7. Ölçek: 30 kişiden bütün insanlığa

Hesap sayısı tek başına gereken altyapıyı belirlemez. Etkinlik, soru ve yanıtların uzunluğu, eşzamanlı oturum sayısı, kabul edilebilir bekleme süresi ve araç maliyetleri önemlidir. Aşağıdaki örnek, deneme için bir yük modelidir; talep öngörüsü veya teklif değildir.

Varsayımlar: N kişinin her biri her gün etkindir ve günde 20 istek yapar; ortalama istek 1500 giriş tokeni ve 600 çıkış tokeni içerir; ay 30 gündür. Token, modelin işlediği metin birimidir; uzunluğu dile bağlıdır. Gerçek yükte daha uzun bağlam, belge işleme, akıl yürütme tokenleri ve yardımcı çağrılar eklenmelidir.

| Etkin kişiler | Aylık istekler | Aylık giriş | Aylık çıkış | Gün boyunca ortalama üretim | Küresel senaryoda saatlik tepe, yaklaşık 1,51 × ortalama |
| --- | ---: | ---: | ---: | ---: | ---: |
| 30 | 18 000 | 27 milyon token | 10,8 milyon token | 4,2 token/s | 6,3 token/s |
| 100 | 60 000 | 90 milyon | 36 milyon | 13,9 token/s | 20,9 token/s |
| 1000 | 600 000 | 900 milyon | 360 milyon | 138,9 token/s | 209 token/s |
| 100 bin | 60 milyon | 90 milyar | 36 milyar | 13 889 token/s | 20 921 token/s |
| 1 milyon | 600 milyon | 900 milyar | 360 milyar | 138 889 token/s | 209 208 token/s |
| 1 milyar | 600 milyar | 900 trilyon | 360 trilyon | 138,9 milyon token/s | 209,2 milyon token/s |
| 10 milyar | 6 trilyon | 9 katrilyon | 3,6 katrilyon | 1,39 milyar token/s | 2,09 milyar token/s |

Suveria’yı birçok dilde erişilebilir küresel hizmet olarak planlıyoruz. Katılımcıların saat dilimlerine nasıl dağılacağını bilmiyoruz; bu nedenle ölçümün doğrulayacağı iki senaryoyu karşılaştırıyoruz. Küresel senaryoda bölgelerin paylarını ITU’nun 2025 internet kullanıcısı sayılarına orantılı alırız; her saat diliminde aynı varsayımsal gün biçimini kullanırız: akşam tepesi ve sakin gece.[^itu] Saat dilimleri birbirlerinin düşük trafik saatlerini kısmen doldurur; böylece saatlik tepe ortalamanın yaklaşık 1,51 katı, en düşük trafik yaklaşık 0,49 katıdır. Örneğin Avrupa gibi tek bölgede yoğunlaşan senaryoda tepe yaklaşık 1,87 kattır; gece ise neredeyse sıfırdır. Böyle dağılım büyük ölçekte de olabilir; kendi makinemizin daha kötü kullanılması, gizlilik korumalı API’ye daha sık başvurulması veya tepede daha uzun bekleme demektir. Her iki değer de gelecekteki katılımcılara ilişkin gözlemden değil, varsayımlarımızdan çıkar. Saat içinde kısa sıçramaları, bekleme süresi görünen kısa kuyruğun dengelemesi amaçlanıyor; kendi makinemizin kapasitesini aşan trafiği gizlilik korumalı API alabilir; bekleme süresini, 95. ve 99. yüzdeliklerini de içerecek biçimde, kuyruğun sınırı ve dolduğunda davranışıyla birlikte pilot uygulamada ölçeceğiz. Yük denemesi, örneğin ortalama trafiğin beş katı gibi, yeni insanların ani akışını da kapsayacak. Bu toplam çıkış kapasitesidir; tek konuşmanın gecikmesini veya giriş işleme maliyetini ölçmenin yerini tutmaz. Test, tek elverişli soruyu değil, oturum dağılımını, uzun bağlamları, arızaları ve kuyruğu yeniden üretmelidir.

Tepe çarpanı, en yoğun saati ortalamayla karşılaştırır. 24 saate bölünmüş gün modelinden gelir: tek gün biçimini sekiz bölge arasında kaydırır, varsayılan paylara göre toplarız. Bu bir hesap senaryosudur; tek isteğin bekleme süresini hesaplamaz.

Bu hesabın dünya ölçeğinde nasıl göründüğünü görmek için düşünce deneyi yapalım. 10 milyar kişinin her biri Suveria’yı varsayılan profilde kullansaydı, tepede saniyede yaklaşık 2,1 milyar çıkış tokeni gerekirdi. DeepSeek-V4.1-Flash için ölçülen performansla, B200 kartı başına saniyede yaklaşık 930 tokenle, yaklaşık 2,25 milyon kart gerekirdi. Sunucuyla birlikte kart başına yaklaşık 1,75 kW varsayımıyla (ölçülmemiş kendi varsayımımız) toplam güç yaklaşık 4 GW olurdu. Bir milyar kişi için yaklaşık 225 bin kart ve 0,4 GW, bir milyon için yaklaşık 225 karttır. Karşılaştırma için Epoch AI, 2026 başında dünyada dijital zekâ için kurulu hesaplama gücünün 15 milyon H100 kartı eşdeğerini aştığını ve 10 GW’dan fazla güç gerektirdiğini tahmin ediyordu.[^epoch] Bu bir basitleştirmedir: varsayılan profil hafiftir; yoğun çalışma, büyük modeller ve görüntüler kat kat fazlasını gerektirir; donanım ve modeller hızla değişir. Yine de büyüklük mertebesini gösterir: her insana bu kapsamda günlük dijital zekâ yardımı, bugün dünyada çalışan güçten daha azını gerektirirdi. Bu basitleştirilmiş hesaptır; böyle altyapının bu amaç için erişilebilir olacağının kanıtı değildir.

## 8. Maliyetler ve tarihli hesap

Sabit rezervasyonun aylık maliyeti ilk yaklaşımda şöyle yazılabilir: kart sayısı × kart başına saatlik ücret × ödenen saat sayısı; ayrıca bellek, diskler, aktarım, koruma, izleme, işletme, ödemeler ve vergiler. Teklifin bunlardan hangilerini zaten içerdiği sınanmalıdır. Gece gündüz çalışmada ay 672 ile 744 saattir; 730 saat ortalama yaklaşımdır.

Hesapta beş maliyet seçeneğini karşılaştırırız: yerel model, kiralanmış donanımda kendi işlettiğimiz kurulum, sağlayıcının beyan ettiği ve sınanacak korumayla gizlilik korumalı bilgi işlem ortamında kendi işlettiğimiz kurulum, dış sağlayıcının gizlilik korumalı API’si ve sıradan dış API. Maliyet seçenekleri 2.3. maddedeki koruma seçeneklerine karşılık gelir; gizlilik korumalı ortam olmadan makine kiralamayı Suveria seçeneği olarak değil, yalnızca fiyat referansı olarak gösteririz. Yerel modeli henüz fiyatlandırmıyoruz; maliyet kullanıcının cihazına bağlıdır. Aynı kalite, erişilebilirlik ve koruma kapsamını karşılaştırırız. Başabaş noktası, kart maliyetinin kayıtlı hesap sayısına bölünmesi değil, tam hizmet maliyetinin gerçek kullanıma bölünmesidir. Dış API kullanıcı ihtiyaçlarını sınamayı kolaylaştırır; ancak sağlayıcısının verilere erişim hakkında kendi ilkeleri vardır; bu nedenle gizlilik korumalı çalıştırmanın vaatlerini ona taşımayız.

### 8.1. Tarihli hesap: 29 Ekim 2026 itibarıyla

Manifesto, görece küçük düzenli katılımcı sayısıyla bile ortak altyapının, doğrulanabilir güvenlik önlemlerine dayanan mahremiyet korumasıyla, kapalı hizmetlerden dolar başına daha fazla hesaplama gücü ve dijital zekâ sunabileceği hipotezini ortaya koyar. Aşağıda 29 Ekim 2026 fiyatlarıyla hesabı vardır. Varsayımlar: 7. bölümdeki kullanım profili (günde 20 istek, her biri 600 çıkış tokeni) ve küresel senaryo (saatlik tepe ortalamanın yaklaşık 1,51 katı), vergiler hariç fiyatlar, kira fiyatlarını dönüştürmek için ayda 730 saat. Makine başına kişi sayısı, makinenin saatlik tepede hizmet verebileceği katılımcı sayısıdır: saniyelik çıkış kapasitesi × 86 400 / (20 × 600 × tepe çarpanı). İzin verilecek kişi sayısını, yanıta kadar ölçülen bekleme süresi de belirleyecek. Parantezlerde Avrupa’da yoğunlaşan senaryoyu veririz (çarpan yaklaşık 1,87). DeepSeek-V4.1-Flash için Lambda sağlayıcısının dört B200 kartındaki ölçümünü alırız: 64 eşzamanlı istekte saniyede yaklaşık 3 714 çıkış tokeni.[^lambda-v41] Ölçüm, gizlilik korumalı modda kullanmak istemediğimiz spekülatif kod çözmeyle yapıldı (3. bölüm). Eylül tahminimize göre kapasite o durumda yaklaşık %30 daha düşük bile olabilir; bu, kişi başına maliyeti benzer oranda artırır. H200 ve B300 kartlarında bu modelin ölçümü yoktur; modelin tek kopyasını barındıran her kart takımının (8 × H200 veya 8 × B300 makinesinin yarısı) dört B200 kartının performansına ulaştığını varsayarız. Bu iyimser varsayımdır: H200 eski nesildir, gizlilik korumalı mod işi yavaşlatabilir; Lambda ölçümü profilimizden daha uzun isteklere ilişkindir. Bu nedenle bu kapasitenin yarısıyla ihtiyatlı seçenek de veririz.

Modelin ağırlıkları yaklaşık 511 GB tutar; vLLM motoru yaklaşık 614 GB kart belleği önerir. Dört H200 kartı (564 GB) yetmez; bu nedenle H200’de tek kopya sekiz kart gerektirir. Motor üreticisinin bu yapılandırma tarifi 29.10 tarihinde doğrulanıyordu; H200 kartlarında kartlar arası bağlantı (NVLink), B200 ve B300’ün aksine donanımla şifrelenmez.

| Seçenek | Gizlilik | Aylık maliyet | Makine başına kişiler | Kişi başına yalnızca hesaplama maliyeti |
| --- | --- | ---: | ---: | ---: |
| DeepSeek API | yok, sağlayıcı içeriği görür | kullanıma göre | tek makineye uygulanmaz; sağlayıcının sınırları ve erişilebilirliği | 0,35–0,70 USD |
| DeepSeek-V4.1-Flash kullanan gizlilik korumalı API (Confidential AI, Tinfoil, Phala) | sağlayıcının beyanı, sınanacak | kullanıma göre | tek makineye uygulanmaz; sağlayıcının sınırları ve erişilebilirliği | 0,70–1,25 USD |
| Kimi K3.1 Pro API (Moonshot) | yok | kullanıma göre | tek makineye uygulanmaz; sağlayıcının sınırları ve erişilebilirliği | 5,40 USD |
| Kimi K3 kullanan gizlilik korumalı API (Phala, NEAR AI) | sağlayıcının beyanı, sınanacak | kullanıma göre | tek makineye uygulanmaz; sağlayıcının sınırları ve erişilebilirliği | 8,10–8,91 USD |
| Kiralık gizlilik korumalı makine 8 × H200 (Phala), DeepSeek, modelin tek kopyası | işlemci ve kartların tasdiki, sınanacak | 180 gün taahhütle 23 506 USD, talep üzerine 32 266 USD | yaklaşık 17 750 (14 300), kapasite varsayımı | 1,32–1,82 USD (1,64–2,25) |
| Yukarıdaki gibi, ihtiyatlı seçenek: kapasitenin yarısı | işlemci ve kartların tasdiki, sınanacak | yukarıdaki gibi | yaklaşık 8 900 (7 150), kapasite varsayımı | 2,65–3,64 USD (3,29–4,51) |
| Kiralık gizlilik korumalı makine 8 × B300 (Phala), Kimi K3 | işlemci ve kartların tasdiki, sınanacak | 45 552–47 888 USD | yaklaşık 4 800–7 600 (3 900–6 200), kapasite varsayımı | yaklaşık 6–10 USD (7,4–12,4) |
| Doğrulanmış gizlilik olmadan 4 × B200 (Lambda), DeepSeek | doğrulanmış gizlilik yok | 19 827 USD | yaklaşık 17 750 (14 300) | 1,12 USD (1,38) |
| Doğrulanmış gizlilik olmadan 8 × B200 (Lambda), DeepSeek, dörder kartta iki kopya | doğrulanmış gizlilik yok | 39 070 USD | yaklaşık 35 500 (28 700), iki kopyanın performansı varsayımı | 1,10 USD (1,36) |

Sayıların kaynağı: DeepSeek, Moonshot, Confidential AI, Tinfoil, Phala ve NEAR AI fiyat listelerindeki API fiyatları;[^deepseek-cennik][^cai][^tinfoil][^phala-api][^near] Phala fiyat listesindeki gizlilik korumalı makine fiyatları;[^phala-gpu] Lambda’da dört kartlı makinede kart başına saatlik 6,79 USD, sekiz kartlı makinede 6,69 USD’ye B200 kiralama.[^lambda-cennik] Kimi’nin kapasitesini, sekiz B300 kartında saniyede yaklaşık 1 000–1 600 çıkış tokeni veren Kimi K3 üçüncü taraf ölçümlerinden alırız.[^spheron-kimi] Taahhütlü aylık tutarlar aylık ödeme demek değildir: Phala bütün sürenin önceden ödenmesini ister; erken bitirmede iade yapmaz; dolayısıyla 8 × H200 makinesinin 180 günü siparişte 139 104 USD nakit, 8 × B300 makinesinin 180 günü ise 269 568 USD demektir.[^phala-gpu]

Buradan çıkanlar:

- Varsayılan profil için, beyan edilmiş gizlilik sunan API fiyatları kişi başına ayda yaklaşık 0,70–1,25 USD’dir: sağlayıcıya ve kullanım saatine göre sıradan API’ye benzer maliyetten yaklaşık 3,6 katına kadar; en düşük fiyatı Confidential AI beyan eder; bu teklifi de sınamalıyız. Gizlilik korumalı API, kendi makinemizi çalıştırmadan esnek kapasite sağlar; ancak kendi sınırları, kuyrukları ve arızaları vardır. DeepSeek için tepeye göre boyutlandırılan kiralık gizlilik korumalı makine, küresel senaryoda ortalama kapasitesinin yaklaşık üçte ikisinde çalışır; kişi başına yaklaşık 1,32 USD, yani pahalı gizlilik korumalı API’lerle yaklaşık aynı ve en ucuzundan fazla tutar. Saatlik modelimizde, fazlası kişi başına 1,25 USD’lik gizlilik korumalı API’ye yönlendirilen ilk kendi düğümümüz, hesaplanan yaklaşık 20 bin etkin kişi noktasında ortaya çıkar; bu, varsayımlarımızın sonucudur, kesin eşik değildir; daha ucuz gizlilik korumalı API’de bu ölçekte makine kiralamak ekonomik değildir.
- Tam gizlilik korumalı makineyi saatlik kiralamak bugün akşam tepesine esneklik sağlamaz: Phala en az bir gün (8 × H200) veya ay (8 × B300), Confidential AI saatlik 60 USD’ye 8 × B300 için üç ay ister; 8 × H200’ü saatlik 64,62 USD’den saniyelik hesaplayan VoltageGPU’nun yayımlanan kanıtları ise bu yapılandırmanın veya NVSwitch anahtarlama birimlerinin tasdikini kapsamaz.[^cai][^voltage] Buna makinenin tahsisi ve ağırlıkların yüklenme süresi eklenir.
- Kimi için hesap ölçüme bağlıdır: gizlilik korumalı API kişi başına yaklaşık 8–9 USD, kendi 8 × B300 makinemiz tam kullanımda yüksek kapasite tahminiyle yaklaşık 6 USD, düşük tahminle yaklaşık 9,5 USD tutar. Bir makine bu modeli kullanan yaklaşık 5 100–5 600’den fazla etkin kişiye hizmet verirse gizlilik korumalı API’den ucuz olur; düşük kapasite tahmininde (yaklaşık 4 800 kişi) bu gerçekleşmez.

Kendi sunucumuzu satın alma: sekiz B300 kartlı tam Supermicro sunucusu Eylül 2026’da yaklaşık 663 bin USD tutuyordu.[^supermicro] Böyle alımın aylık maliyetini şöyle tahmin ederiz:

| Kalem | Aylık tutar |
| --- | ---: |
| Sunucunun beş yıllık amortismanı | yaklaşık 11 bin USD |
| Sunucunun dört yıllık amortismanı | yaklaşık 13,8 bin USD |
| Veri merkezinde barındırma | yaklaşık 1,9–3 bin USD |
| Ağ, parçalar ve bakım (tahmin) | yaklaşık 1,5 bin USD |
| Toplam | yaklaşık 14–18 bin USD |

Böyle sunucuya, küresel senaryoda yaklaşık 35 bin kişiye (Avrupa senaryosunda yaklaşık 28 bin) kişi başına yaklaşık 0,41–0,52 USD’ye hizmet verecek iki DeepSeek kopyası sığar. Bu varsayımlarda alım, kişi başına 1,11–1,25 USD’lik gizlilik korumalı API’den yaklaşık 12–17 bin etkin kişiden, beyan edilen en ucuzundan (0,70 USD) yaklaşık 21–26 binden başlayarak ucuzdur. Hesap, bu yapılandırmanın bakımının ve ölçümünün tam maliyetini kapsamaz; alım ayrıca önceden nakit, gece gündüz nöbetçi insanlar ve yıllarca sürekli talep gerektirir; donanıma fiziksel erişim de o zaman vakıftadır (2. bölüm). Bunlar tahminlerimizdir, teklifler değildir.

- Çok kartlı gizlilik korumalı makineler bugün ABD’de kamuya açık sunuluyor. Avrupa Birliği’nde tek H100 kartlı gizlilik korumalı makineler bulduk;[^azure-ncc] tam DeepSeek veya Kimi bunlara sığmaz. Avrupa Birliği’nde sunucuları olan gizlilik korumalı API’yi, daha az model seçeneğiyle Privatemode (Edgeless Systems, Almanya) de sunuyor.[^privatemode] Bu da sağlayıcının sınanacak beyanıdır.
- Gizlilik korumalı API’leri sınayan bağımsız katalog, 29 Ekim 2026 saat 14:00 UTC gözleminde sınanan 95 yolun hiçbirinin tam doğrulamasını onaylamadı; en sık çalışan programın kimliğinin, kodun kökeninin ve isteğin makineyle bağının kanıtı eksikti.[^katalog] Bu, erişilebilir kanıtların sonucudur; hizmetlerin içeriği açıkladığının kanıtı değildir. Kendimiz doğrulayana kadar hizmetlerin gizliliğini sağlayıcının beyanı sayarız.
- Hesap, hesaplamayı kapsar. Phala’da dört sanal işlemcili ve 8 GB bellekli bir veya iki gizlilik korumalı makinedeki özel ortam (ağ geçidi, bellek, dosyalar) makine başına ayda yaklaşık 168 USD tutar; disk ayrı, 100 GB için yaklaşık 10 USD hesaplanır.[^phala-cvm] Bu büyüklüğün yeterliliğini pilot uygulamada sınayacağız. Ayda 170–340 USD’de, 30 kişi için kişi başına yaklaşık 6–11 USD, 1000 kişi için onlarca senttir. Hesap, insanların çalışmasını, güvenlik incelemelerini, ödemeleri veya arızalara ayrılan payı içermez.
- Yaygın abonelikler ayda yaklaşık 20 USD tutar; DeepSeek sohbeti ücretsizdir.[^abonamenty] 100–200 USD’lik planlar yoğun ajan çalışmasında API liste fiyatlarıyla binlerce dolara eşdeğer sağlar;[^semianalysis] bu planlarla fiyatta rekabet etmiyoruz. Doğrulanabilir mahremiyetle gerçek kullanımın ücretlendirilmesini öneriyoruz.

29 Ekim 2026 itibarıyla manifestodaki hipotezin durumu: hesap bizi ona yaklaştırır, ancak doğrulamaz. Beyan edilmiş gizlilik ve tasdikle işleme, açık fiyat listelerinde zaten mevcut; varsayılan kullanım profilinde kişi başına ayda yaklaşık 0,70–1,25 USD tutar; dolayısıyla küçük grup onunla maliyetine başlayabilir; varsayımlarımızda kendi altyapımız, on küsur bin ile birkaç on bin arasında etkin kişi olduğunda daha ucuz hâle gelebilir. 9. bölümdeki denemelerde sınayacağımız üç şey belirleyecek: hizmetlerin gizliliğinin bağımsız doğrulamadan geçip geçmediği, mevcut modellerin kalitesinin insanların Suveria’ya geleceği görevler için yeterli olup olmadığı ve gerçek trafik profilinin ne olduğu. Her önemli fiyat değişikliğinde ve her denemeden sonra hesabı günceller, önceki sürümleri koruruz.

### 8.2. Altyapı adımları ve karar kartları

Altyapıyı, her biri sonraki adıma geçme zorunluluğu olmadan katılımcılara başlı başına değer sunan adımlarla geliştiririz: önce gizlilik korumalı API ve gizlilik korumalı makinelerde özel ortam (başlamadan önce yeterli kaynak toplarsak doğrudan sonraki adımla başlayabiliriz); sonra kendi gizlilik korumalı makinelerimizi kiralama, ardından donanım satın alıp dış veri merkezine yerleştirme; uzak vadede, üstünlüğünü gösterirse, kendi binamız. Sonraki adımı ölçülen veriler gerekçelendirir: hizmetin tam maliyeti, gerçek trafik, tepedeki yanıt süresi, korumaları ve arıza müdahalesini sürdürebilme; satın almada ayrıca onarımın, donanım değişiminin ve sorumluluğu üstlenecek insanların finansmanı. Gereken model gizlilik korumalı API’de yoksa veya neyin çalıştığı üzerinde tam kontrol istiyorsak kendi makinemizi kiralamak da anlamlı olabilir.

Her geçişi bir karar kartıyla anlatırız: kazanımlar, tam maliyet, riskler, başlama ve geri çekilme koşulları, veri ve anahtar taşıma yolu ve [rezerv ile sonraki sütunları başlatma ilkelerine](whitepaper-zasady-fundacji.md) uygunluk (vakıf ilkeleri teknik raporunun 8. bölümü). Kendi makinemizi trafik tepeleri için gizlilik korumalı API’yle birleştirmeye yalnızca her yolun kabul edilmiş koruma düzeyi varsa izin veririz; daha zayıf seçeneğe geçiş kullanıcının ayrı, bilinçli kararını gerektirir. İlk ölçümü daha küçük modelle gizlilik korumalı tek kartta, sonrakini tam modelin sığdığı makinede planlıyoruz.

Bütün kapasiteyi en yüksek tepeye göre boyutlandırmadan trafiğe uyarlarız. Bekleme süresi görünen kısa kuyruk tasarlıyoruz; gerçek süresini, sınırını ve dolduğunda davranışını pilot uygulamada ölçeceğiz. Daha uzun tepeler için esnek kapasiteyi öncelikle, kabul edilmiş koruma düzeyini, kullanıcının rızasını ve harcama sınırını koruması koşuluyla gizlilik korumalı API sağlar; böyle yol yoksa beklemeyi veya erişilemezliği dürüstçe bildiririz. Saatlik kiralama, gizlilik korumalı API’de olmayan veya belirgin pahalı modeller için ve yalnızca sağlayıcı gizlilik korumalı makinelerin gerçekten hızla açılıp serbest bırakılmasına izin verdiğinde anlamlıdır. Kendi makinemizin sakin saatlerdeki boş kapasitesini OmniForum için çalışmalar gibi vakıf görevlerinde kullanmak istiyoruz; bu kapasitenin API fiyatlarına göre hesaplanan değeri bütçe geliri sayılmaz; bu görevlerin kendi amacı ve bütçesi vardır. İlk pilot uygulamadan sonra iki modu sınamak istiyoruz: asistanla olağan çalışma için “Konuşma” ve belge çevirisi gibi bekleyebilecek görevler için “Acele etmeden”. “Acele etmeden” modunda yaklaşık başlama aralığını, maliyet tahminini, azami bütçeyi, yapılan işin ücretinin hesaplanmasıyla iptal olanağını ve aynı koruma bilgisini gösteririz. Böyle işin düşük fiyatı ancak sabit maliyeti iki kez saymadan kamuya açık maliyet paylaşım yönteminden doğuyorsa mümkündür.

### 8.3. Konuşma içeriği olmadan kullanım ölçümü

Gerçek kullanımı ücretlendirmek için görevleri yapmaya gereken kaynakları ölçer, sabit maliyetlerdeki payı açıkça anlatırız. Ücretlendirme sayacı maliyeti sınamak için gereken verilerle sınırlıdır; fatura için konuşma içeriği gerekmez. Denemelerde ölçümün doğruluğunu, kullanıcının kontrol yolunu, açığa çıkan üst verilerin kapsamını ve harcama sınırına ulaşıldığında hizmetin davranışını sınayacağız. Fatura, yuvarlama, ön ödemeler ve iadelerin ilkelerini [vakıf ilkeleri teknik raporu](whitepaper-zasady-fundacji.md) anlatır.

Katılımcının belirlediği harcama sınırının sonradan uyarı değil, sınır gibi işlemesi amaçlanıyor. Bazı sağlayıcılar süren istekleri ancak tamamlanınca ücretlendirir; bu nedenle sınırları aşılabilir; örneğin Tinfoil bunu böyle anlatır.[^tinfoil] Bu yüzden önceden bakiye ayırmayı tasarlıyoruz: Suveria ağ geçidi isteği göndermeden önce, diğer süren istekleri de dikkate alarak, izin verilen en yüksek maliyetini bakiyeden ayırır; eşzamanlı istek sayısını ve yanıt uzunluğunu sınırlar. Tamamlandığında gerçek maliyeti hesaplar, ayrılan kullanılmayan tutarı serbest bırakırız. Bu, kurulacak ve sınanacak gerekliliktir; çalışan işlev değildir.

## 9. Kabul denemeleri ve sonuç günlüğü

Herhangi bir sürümü gizlilik korumalı olarak adlandırmadan önce en az şunları belgeleyeceğiz:

- doğru tasdik;
- kod veya anahtar değiştirildikten sonra veri gönderiminin reddi;
- oturum yalıtımı;
- yöneticinin sınırlamaları;
- günlüklerde, dökümlerde ve telemetride içerik bulunmaması;
- önbellek yönetimi;
- silme ve geri kazanma;
- arıza sonrası davranış;
- araç sınırları;
- yük altındaki maliyetler.

Sonuç, yapılandırma sürümünü ve korumayı ihlal etmeyi denediğimiz senaryoyu kapsar.

Her Suveria sürümü için, erişilebilirlik korunarak, gizlilik korumalı hizmetlerin en az bir bağımsız doğrulayıcısının bütün kanıt ölçütlerinin karşılanmasını istiyoruz: donanım ve güvenlik durumu, kanıtın güncelliği, bağlantı anahtarının korunan ortama bağlanması, çalışan programın kimliği, kodun kökeni ve isteğin belirli makineyle bağlanması. Sonucu gözlem tarihi, ölçütlerin sürümü ve belirli sürüm, model ve istek yolu için kanıtlarla yayımlar, doğrulayıcının ilişkilerini de sonuçla anlatırız. Hiçbir sıralamada yer vaat etmiyoruz. Doğrulamayı geçmek, belirli zamanda açıklanan kontrolü açık sınırlamalarla elde etmek demektir; denetimin veya kendi denemelerimizin yerini tutmaz.

Kendi gizlilik korumalı seçeneğimizi çalıştırdığımızda Suveria’yı modellerin gizlilik korumalı çalıştırılmasını sınayan her bağımsız kataloğa sunacak, tasdiki sınaması için bir uç nokta sağlayacağız; ilk örnek confidentialinference.net’tir (31 Ekim 2026 itibarıyla).[^confidentialinference] Kaydı vaat etmiyoruz; buna katalog karar verir; başvuruyu, sorularına yanıtı ve olumsuz olsa da sonucun tarihle yayımlanmasını vaat ediyoruz. Katalog yalnızca dışarıdan gördüklerini, genellikle tasdiki ve bağlantı kanalını sınar; kod veya yapılandırma denetiminin ya da yan kanalların değerlendirilmesinin yerini tutmaz.

Saklama ve taşıma denemeleri şunları kapsar:

- şifreli kopyayı başka yetkili cihazda geri yükleme ve doğru anahtar olmadan okumanın reddi;
- bir cihazın kaybı, seçilen yolla erişimi geri kazanma ve bütün anahtarları yitirmenin sonuçlarını anlaşılır biçimde gösterme;
- sürümlerden birinin üzerine sessizce yazmadan eşzamanlı değişiklikleri eşzamanlama;
- ilk işletmecide hesap olmadan bağımsız araçta dışa aktarılanı okuma; özgün materyalleri, geçmişi, kaynakları ve bağlantıları karşılaştırarak;
- entegrasyon kapsamını sınırlama ve yetki geri alındıktan sonra sonraki erişimini etkin durdurma.

Aşamalar:

1. hassas olmayan materyallerde kullanılabilirlik testi;
2. korumanın teknik denemesi;
3. açık koşullarla sınırlı pilot uygulama;
4. ölçeği adım adım büyütme.

Pilot uygulamadan önce eşikleri belirleyip yayımlayacağız: yanıtın ilk sözcüğüne kadar süre, ölçülen profilde kişi başına hesaplama maliyeti ve [materyaller ve kıyaslama testi teknik raporuna](whitepaper-materialy-i-benchmark.md) göre model kalitesi. Pilot uygulamayı üçünü de sağladığında başarılı sayacağız.

Modelin, donanım yazılımının veya oturum açma yolunun değişmesi yeniden yeterlilik değerlendirmesi gerektirebilir; güncelleme kararlaştırılan korumayı sessizce zayıflatamaz. Her sürümün açık kartı vardır:

- işleyiş kapsamı;
- denemelerin kanıtları;
- bilinen sınırlamalar;
- sorumlu kişiler;
- maliyetler;
- sorun bildirme yolu;
- geri çekme planı.

Bir güvenlik açığının saptanması, maruziyeti sınırlamaya, etkilenen kişileri bilgilendirmeye ve doğrulanabilir düzeltmeye yol açar.

Denemeleri açık yürütmek istiyoruz. Güvenlik, kriptografi, altyapı ve uygulamalarla uğraşan kişileri, teknolojiyi geniş kitlelere gösteren içerik üreticileri dâhil, sınamaları birlikte tasarlamaya ve uydurma verilerle ayrılmış test hesaplarında korumayı kırmayı denemeye çağırıyoruz. Eleştirmenleri de çağırıyoruz. Tanıtım için ödeme yapmıyoruz; her iş birliğini [menfaat siciline](whitepaper-zasady-fundacji.md) göre işaretleriz (vakıf ilkeleri teknik raporunun 7. bölümü). Başarısız olanlar dâhil sonuçlar, sonuç günlüğüne girer. Katılmak istersen [salve@novusignis.org](mailto:salve@novusignis.org?subject=%5BDo%C5%82%C4%85cz%5D%20Pr%C3%B3by%20Suverii) adresine “[Katıl] Suveria denemeleri” konusuyla yaz.

En önemli deneme: gizlilik korumalı ortam dışında işletmeci yetkilerine sahip ekip (ağ geçidi, diskler, ağ, günlükler), gizli karakter dizileri saklanmış test hesaplarının konuşmalarını okumayı dener. Bunları biz de dâhil herhangi biri çıkarırsa deneme başarısız olmuş demektir.

Suveria’nın ilk sürümünü onu yapılandırmaya yardım eden birkaç kişiye açacağız. Gizlilik korumalı API kullanırsa koruma kartı (2.3. madde), modelin dış sağlayıcıda çalıştığını, tasdiki sağlayıcının beyan ettiğini ve henüz sınamadığımızı, üst verilerin ise korunmadığını açıkça söyleyecek. İlk kişiler hizmetin işletilmesine de yardım ettiğinden, yayımlayacağımız ilk sonuç yukarıdaki en önemli deneme olacak; işletmecinin ne yapabildiğinin açıklamasıyla.

**Sonuç günlüğü.** 29 Ekim 2026 itibarıyla durum: açıklanan denemelerin hiçbirini henüz yapmadık, ekran kartı kiralamadık ve Suveria’da model çalıştırmadık. Sonraki her sonucu burada tarihle, yapılandırmayla, senaryoyla ve çıkarımla ekleriz; deneme başarısız olduğunda da.

Karara bağlanacaklar:

- ilk model ve kabul edilebilir kalite düzeyi;
- gizlilik korumalı API’lerin ve gizlilik korumalı makinelerin bağımsız doğrulanması; RODO’nun geçerli olduğu Avrupa Birliği gibi güçlü kişisel veri koruması olan yargı alanlarında erişilebilirlikleri;
- yanıt süresi;
- anahtar ve bellek ilkeleri;
- ücretlendirme verilerinin asgari kapsamı;
- işletmecinin kötüye kullanım bildirimleri karşısındaki hukuki yükümlülükleri;
- sürekliliği finanse etme yolu.

Bütçe, fatura ve sorumluluğu [vakıf ilkeleri teknik raporu](whitepaper-zasady-fundacji.md); modellerin davranışlarının değerlendirilmesini [materyaller ve kıyaslama testi teknik raporu](whitepaper-materialy-i-benchmark.md) anlatır.

Fundacja Novus Ignis, Poznań, KRS 0001269575. Site ve manifesto: novusignis.org. Yorumlar: salve@novusignis.org.

## Dipnotlar

[^teefail]: [TEE.fail: Breaking Trusted Execution Environments via DDR5 Memory Bus Interposition](https://tee.fail/). 28.10.2025’te yayımlanan Georgia Tech, Purdue University ve Synkhronix araştırması: DDR5 bellek veri yoluna fiziksel bağlantıyla Intel TDX ve SGX ile AMD SEV-SNP tasdik anahtarlarının çıkarılması; NVIDIA gizlilik korumalı bilgi işlemi için sonuçları vardır. Sunucuya fiziksel erişim gerektirir; Intel ve AMD bu saldırıları koruma kapsamı dışında sayar. İnceleme: [The Hacker News](https://thehackernews.com/2025/10/new-teefail-side-channel-attack.html). Erişim 28.10.2026.

[^local-first]: [Kleppmann, Wiggins, van Hardenberg ve McGranaghan (2019): Local-first software: You own your data, in spite of the cloud](https://www.inkandswitch.com/essay/local-first/). Çalışma. Asıl kopyanın kullanıcı cihazlarında saklanması ve şifreli kopyalar dâhil sunucuların destekleyici rolünün ilkeleri.

[^apple-pcc]: [Apple: Private Cloud Compute](https://security.apple.com/blog/private-cloud-compute/). Mimari açıklaması. Gizliliği yazılım kontrolüne ve sistem şeffaflığına bağlama örneği.

[^ohttp]: [RFC 9458: Oblivious HTTP](https://www.rfc-editor.org/rfc/rfc9458.html). Belirtim. Belirli bir güven modelinde gönderen hakkındaki bilgiyle istek hakkındaki bilgiyi birbirinden ayırma; tam anonimlik değildir.

[^weiss-keylogging]: [Weiss, Ayzenshteyn, Amit ve Mirsky (2024): What Was Your Prompt? A Remote Keylogging Attack on AI Assistants](https://www.usenix.org/conference/usenixsecurity24/presentation/weiss). Bilimsel yayın (USENIX Security 2024; arXiv çalışma sürümü 2403.09751). Ağ gözlemcisi, yanıt akışındaki şifreli paketlerin uzunluğundan asistan yanıtının konusunu, kısmen de içeriğini yeniden oluşturur. Erişim 30.10.2026.

[^whisper-leak]: [McDonald ve Bar Or (2025): Whisper Leak: a side-channel attack on Large Language Models](https://arxiv.org/abs/2511.03675) ve [Microsoft incelemesi (7.11.2025)](https://www.microsoft.com/en-us/security/blog/2025/11/07/whisper-leak-a-novel-side-channel-cyberattack-on-remote-language-models/). Araştırma yayını ve üretici açıklaması. Şifreli yanıt akışındaki paket boyutu ve ritminden konuşmanın konusu tanınabilir; bazı sağlayıcılar paketlere rastgele dolgu ekledi. Erişim 30.10.2026.

[^nvidia-platformy]: [NVIDIA: gizlilik korumalı kapsayıcılar için desteklenen platformlar](https://docs.nvidia.com/datacenter/cloud-native/confidential-containers/latest/supported-platforms.html). Üretici belgeleri. İşlemci, kartlar ve yazılımdan oluşan bütün yapılandırmanın gereksinimleri.

[^nvidia-ppcie-v2]: [NVIDIA: Protected PCIe v2, Introduction](https://docs.nvidia.com/attestation/attestation-client-tools-ppcie-sdk-cpp/latest/ppcie_introduction.html). Üretici belgeleri. PPCIe v2 modunda NVLink ve NVSwitch ağı sistemin güvenilen kısmına aittir; PCIe koruması kartlar arasındaki bütün trafiğin şifrelenmesi demek değildir.

[^nvidia-blackwell]: [NVIDIA: Trusted Computing Solutions 595](https://docs.nvidia.com/595trd1-trusted-computing-solutions-release-notes.pdf). Üretici belgeleri. Blackwell kartlarında, bağlantı koruması dâhil birden fazla kartta gizlilik korumalı bilgi işlem modu; uyumlu yapılandırma gerektirir.

[^osi]: [OSI: Open Source AI Definition](https://opensource.org/ai/open-source-ai-definition). Tanım. Açık ağırlıklar, açık sistem tanımının tamamının karşılanıp karşılanmadığını belirlemez.

[^deepseek]: [DeepSeek-V4.1-Flash: model kartı](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash). Üretici belgeleri. Mimari, MIT lisansı ve modelin beyan edilen olanakları; Suveria performansının ölçümü değildir.

[^dpga]: [Digital Public Goods Alliance: standart](https://www.digitalpublicgoods.net/standard). Standart. Dijital kamu malını değerlendirme ölçütleri; tasarım yönü, elde edilmiş DPGA tanınması değildir.

[^lambda-cennik]: [Lambda: bulut sunucusu fiyatları](https://lambda.ai/pricing). Sağlayıcı fiyat listesi. NVIDIA B200 SXM6 180 GB: dört kartlı makinede kart başına saatlik 6,79 USD, sekiz kartlı makinede 6,69 USD; H100 SXM 80 GB: 3,99 USD; talep üzerine fiyatlar, vergiler hariç, gizlilik korumalı mod olmadan. Erişim 29.10.2026.

[^lambda-v41]: [Lambda: DeepSeek-V4.1-Flash, performans ölçümü sonuçları](https://lambda.ai/inference-models/deepseek-ai/deepseek-v4.1-flash). Sağlayıcı ölçümü. 4 × B200, vLLM, tensör paralelliği 4, spekülatif kod çözme, istek başına yaklaşık 8 192 giriş ve 1 024 çıkış tokeni; 64 eşzamanlı istekte toplam saniyede 3 713,9 çıkış tokeni ve konuşma başına ortalama saniyede 66,8 token. Ölçüm tarihi yok. Erişim 28.10.2026.

[^azure-ncc]: [Azure: NCC40ads H100 v5 makinesinin fiyatı](https://prices.azure.com/api/retail/prices?$filter=armSkuName%20eq%20%27Standard_NCC40ads_H100_v5%27%20and%20priceType%20eq%20%27Consumption%27) ve [seri açıklaması](https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/gpu-accelerated/nccadsh100v5-series). Sağlayıcı fiyat listesi. Tek H100 NVL 94 GB kartlı gizlilik korumalı makine; saatlik 6,98 USD (East US 2) ile 8,90 USD (West Europe), Linux, kullandıkça ödeme. Erişim 28.10.2026.

[^deepseek-cennik]: [DeepSeek: API fiyatları (Çince sürüm)](https://api-docs.deepseek.com/zh-cn/quick_start/pricing). Sağlayıcı fiyat listesi. deepseek-flash (V4.1-Flash-1017) modeli: önbelleğe isabet etmeyen giriş, yoğun saatler dışında 1 CNY, yoğun saatlerde 2 CNY; çıkış, milyon token başına 4 ve 8 CNY. Yardımcı kaynak olan [eesel dökümüne](https://www.eesel.ai/blog/deepseek-v4-1-flash-pricing) göre USD’ye dönüşüm. Erişim 28.10.2026.

[^abonamenty]: Abonelik fiyatları: [ChatGPT Plus](https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus), [Claude Pro](https://claude.com/pricing), [Google AI Pro](https://gemini.google/subscriptions/), [Kimi Plus (geotoolbox dökümü)](https://geotoolbox.ai/blog/kimi-pricing); DeepSeek sohbeti ücretsizdir ([açıklama](https://en.wikipedia.org/wiki/DeepSeek_(chatbot))). USD cinsinden aylık fiyatlar, vergiler hariç; Kimi Plus 19 USD. Erişim 28–29.10.2026.

[^kimi-k31]: [Moonshot: Kimi K3.1 Pro’nun sunulması](https://forum.moonshot.ai/t/kimi-k3-1-pro-has-launched-start-exploring-now/629) ve [Kimi: K3.1 Pro açıklaması (24.10.2026)](https://www.kimi.com/news/kimi-k3-1-pro). Üretici belgeleri. Kimi K3’ün eğitimi sürdürülmüş sürümü, yaklaşık 3 trilyon parametre, 1 milyon token bağlamı, ağırlıkların 4.11.2026’dan önce sunulacağı duyurulmuş; lisans açıklanmadı. OpenRouter’a göre API fiyatları: milyon token başına 2 / 10 USD.

[^kimi-k3]: [Kimi K3: model kartı](https://huggingface.co/moonshotai/Kimi-K3). Üretici belgeleri. 2,8 trilyon parametre, 104 milyar etkin parametre, yaklaşık 1 milyon bağlam, MXFP4, Kimi K3 License lisansı.

[^spheron-kimi]: [Spheron: Kimi K3’ü çalıştırma (19.10.2026)](https://www.spheron.network/blog/deploy-kimi-k3-gpu-cloud/). Sağlayıcı kılavuzu. Ağırlık dosyaları 1 560,94 GB; modeli sığdıran yapılandırmalar. 29.10.2026 tarihli üçüncü taraf ölçümleri dökümüne göre 8 × B300’de saniyede yaklaşık 1 000–1 600 token kapasite; dağılım geniş.

[^aa]: [Artificial Analysis: Kimi K3.1 Pro ve DeepSeek V4.1 Flash 1017](https://artificialanalysis.ai/models/comparisons/kimi-k3-1-pro-vs-deepseek-v4-1-flash-1017). Bağımsız karşılaştırma. 28.10.2026 tarihli v5 endeksi: 46 ve 32; hız saniyede yaklaşık 36 ve 178 token. Erişim 29.10.2026.

[^kimi-k31-wagi]: [Moonshot AI: Kimi K3.1 Pro, ağırlık deposu ve model kartı](https://huggingface.co/moonshotai/Kimi-K3.1-Pro). Üretici belgeleri. 96 safetensors dosyası, yaklaşık 1,56 TB; 2,8 trilyon parametre, 104 milyar etkin parametre, 896 uzman, 1.048.576 bağlam; uzman ağırlıkları için MXFP4. Erişim 9.11.2026.

[^kimi-k31-licencja]: [Kimi K3.1-Pro License](https://huggingface.co/moonshotai/Kimi-K3.1-Pro/blob/main/LICENSE) ve [Open Source Initiative tarafından onaylanmış lisansların listesi](https://opensource.org/licenses). Lisans metni ve bağımsız bir kuruluşun kaydı. Erişim 9.11.2026.

[^kimi-k31-silniki]: [vLLM: Kimi K3.1 Pro tarifi](https://recipes.vllm.ai/moonshotai/Kimi-K3.1-Pro) ve [SGLang: Kimi K3.1 Pro tarifi](https://docs.sglang.io/cookbook/autoregressive/Moonshotai/Kimi-K3.1-Pro). Motor belgeleri. vLLM henüz yayımlanmamış 0.34.0 sürümünü gerektiriyor; “Throughput was not tuned”. Erişim 9.11.2026.

[^kimi-k31-poufne]: Gizlilik korumalı API sağlayıcılarının herkese açık model listeleri, 9.11.2026’da incelendi; adresleri içeren özet vakfın kayıtlarında. Model gizlilik korumalı biçimde tek bir sağlayıcıda vardı; başka bir sağlayıcıda güvenilir yürütme ortamı olmadan sunuluyordu.

[^aa-2026-11]: [Artificial Analysis: Kimi K3.1 Pro](https://artificialanalysis.ai/models/kimi-k3-1-pro) ve [DeepSeek V4.1 Flash](https://artificialanalysis.ai/models/deepseek-v4-1-flash-1017). Bağımsız karşılaştırma. Endeks v5.0.1. Erişim 9.11.2026.

[^tinfoil]: [Tinfoil: fiyat listesi](https://tinfoil.sh/pricing). Sağlayıcı fiyat listesi. DeepSeek-V4.1-Flash, milyon token başına 0,65 USD giriş ve 1,45 USD çıkış; harcama sınırlarının açıklaması. Erişim 29.10.2026.

[^phala-api]: [Phala: gizlilik korumalı modeller](https://phala.com/confidential-ai-models). Sağlayıcı fiyat listesi. DeepSeek V4.1 Flash 1017: 0,75 / 1,60 USD; Kimi K3: milyon token başına 3 / 15 USD; sağlayıcıya göre ağ geçidi tasdiki ve yanıt doğrulamaları. Erişim 29.10.2026.

[^near]: [NEAR AI: fiyat listesi](https://near.ai/pricing). Sağlayıcı fiyat listesi. Kimi K3: milyon token başına 3,30 / 16,50 USD; ana sayfada başka fiyatlar, fark açıklığa kavuşturulmalı. Erişim 29.10.2026.

[^phala-gpu]: [Phala: gizlilik korumalı ekran kartları](https://phala.com/gpu-tee) ve [fiyat listesi](https://cloud.phala.com/about/pricing). Sağlayıcı fiyat listesi. 8 × H200: talep üzerine saatlik 44,20 USD, 180 gün taahhütle 32,20 USD; 8 × B300: 65,60 USD (30 gün), 62,40 USD (180 gün); NVIDIA gizlilik korumalı bilgi işlemiyle Intel TDX; Avrupa’da makine yok. Erişim 29.10.2026. Taahhüt önceden ödenir; erken bitirmede iade yoktur.

[^privatemode]: [Privatemode (Edgeless Systems)](https://www.privatemode.ai/). Sağlayıcı teklifi. Avrupa Birliği’nde sunucuları ve uzaktan tasdiki olan gizlilik korumalı API; açık model seçeneği ABD’deki sağlayıcılara kıyasla azdır; fiyatları kamuya açık vermez. Gizlilik sağlayıcının beyanıdır, tarafımızdan sınanmadı. Erişim 30.10.2026.

[^katalog]: [Confidential Inference Directory: yöntem ve gözlemler](https://confidentialinference.net/attestation). Gizlilik korumalı çıkarım sunan şirketin sponsor olduğu bağımsız katalog. 29.10.2026 saat 14:00:19 UTC gözleminde, 95 yoldan uçtan uca doğrulananların sayısı 0’dı.

[^supermicro]: [Supermicro: AS-8126GS-NB3RT-01-G2 sunucusu](https://store.supermicro.com/us_en/8u-gpu-gold-series-as-8126gs-nb3rt-01-g2.html) ve [GPU Per Hour: NVIDIA sunucu fiyatları](https://gpuperhour.com/blog/nvidia-gpu-prices). Üretici teklifi ve fiyat dökümü. Sekiz B300 kartlı tam sunucu: 662 845,95 USD (21.09.2026).

[^semianalysis]: [SemiAnalysis analizi hakkında BigGo Finance (7.10.2026)](https://finance.biggo.com/news/173039423dab79be). Sektör analizi. 200 USD’lik plan, yoğun çalışmada API liste fiyatlarıyla yaklaşık 12 bin USD değerinde kullanıma denktir; marj tahminleri, şirket verileri değildir.

[^sglang-k3]: [SGLang: Kimi K3 tarifi](https://github.com/sgl-project/sglang/blob/main/docs/cookbook/autoregressive/Moonshotai/Kimi-K3.mdx). Motor belgeleri. 8 × B300’de sınanmış Kimi K3 yapılandırması; Kimi K3.1’e veya gizlilik korumalı moda ilişkin değildir.

[^phala-cvm]: [Phala: gizlilik korumalı makine fiyatları](https://phala.com/pricing). Sağlayıcı fiyat listesi. tdx.large (4 sanal işlemci, 8 GB bellek): saatlik 0,23 USD; disk, GB başına saatlik 0,000139 USD. Erişim 29.10.2026.

[^itu]: [ITU: Facts and Figures 2025, internet kullanımı](https://www.itu.int/itu-d/reports/statistics/2025/10/15/ff25-internet-use). Uluslararası istatistik. 2025’te dünya bölgelerinde internet kullananların oranı (yaklaşık 6 milyar kişi, nüfusun %74’ü); hesabımızdaki bölge payları yaklaşıktır: oran × bölge nüfusu.

[^cai]: [Confidential AI: fiyat listesi](https://confidential.ai/pricing). Sağlayıcı fiyat listesi, 26.10.2026 fiyatları. DeepSeek V4.1 Flash: milyon token başına 0,30 USD giriş, 0,03 USD önbellekten giriş, 1,20 USD çıkış; 8 × B300 makinesi saatlik 60 USD, en az üç ay, birkaç günde tahsis. Gizlilik sağlayıcının beyanıdır, tarafımızdan sınanmadı.

[^voltage]: [VoltageGPU: fiyat listesi](https://voltagegpu.com/pricing) ve [kanıt kapsamı](https://voltagegpu.com/). Sağlayıcının fiyat listesi ve beyanları. 8 × H200, saniyelik hesaplamayla saatlik 64,62 USD; yayımlanan kanıtlar bu yapılandırmanın veya NVSwitch anahtarlama birimlerinin tasdikini kapsamaz.

[^epoch]: [Epoch AI verileri hakkında The Decoder (8.01.2026)](https://the-decoder.com/global-ai-compute-hits-15-million-h100-equivalents-epoch-ai-finds/) ve [Epoch AI: AI Chip Users](https://epoch.ai/data/ai-chip-users). Bağımsız araştırma merkezinin dökümü. Dijital zekâ için kurulu hesaplama gücü 15 milyon NVIDIA H100 eşdeğerinden fazla, güç ihtiyacı 10 GW’dan fazla. Tahmin, ölçüm değildir.

[^confidentialinference]: [confidentialinference.net](https://confidentialinference.net): modelleri güvenilir yürütme ortamlarında çalıştıran sağlayıcıların karşılaştırması; tarihli tasdik sınamalarıyla; siteye Enclava şirketi sponsor oluyor; erişim anında on bir sağlayıcı. Erişim 31.10.2026.

