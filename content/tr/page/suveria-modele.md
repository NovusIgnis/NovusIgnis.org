---
tytul: Suveria’daki dijital zekâ modelleri
opis: Suveria için modelleri nereden alıyoruz, nasıl seçiyoruz, model değişince ne oluyor ve asistanın hangi açık ilkeleri izlemesi amaçlanıyor
grupa: suveria
kolejnosc: 4
menu: Modeller
---
# Suveria’daki dijital zekâ modelleri

Dijital zekâ modeli, sözlerini okuyup yanıt oluşturan programdır; Suveria’daki asistanın bunun üzerinde çalışması amaçlanıyor. Bu sayfa, modelleri nereden aldığımızı, nasıl seçtiğimizi, model değiştiğinde ne olduğunu ve asistanın hangi ilkeleri açıkça izlemesinin amaçlandığını açıklıyor.

Suveria bugün bir tasarımdır. Teknik raporun sonuç günlüğü (29 Ekim 2026 itibarıyla) açıkça söylüyor: Suveria’da henüz hiçbir model çalıştırmadık, anlatılan denemelerin hiçbirini yapmadık. Aşağıdaki her şey çalışan hizmet değil, niyetler ve adaylardır.

Daha fazlası: [Suveria teknik raporu, 9. bölüm](../whitepaper-suveria.md#s9).

## Neden açık modeller

Tasarımın temeli, bağımsız çalıştırılmalarına izin veren koşullarla sunulan açık modellerdir. Böylece vakıf bunları fiilen maliyetine sunabilir; ileride kendi modellerini geliştirme olanağıyla birlikte, mevcut modelleri kullanmak için özel bir ortama odaklanabilir.

Başlangıçta bunları gizlilik korumalı bilgi işlem sağlayıcılarında, maliyet hesabı ve koşullar haklı çıkarırsa da kendi sunucularımızda kullanmak istiyoruz. Manifesto, Suveria için “dijital zekâyla özel olarak çalışmak için elimizdeki en iyi yoldur, kendi başına bir amaç değildir” diyor: modeller kişinin kendi cihazına sığarsa veya daha iyi koruma yolu ortaya çıkarsa bu yolun bir bölümü gereksiz hâle gelecek.

Daha fazlası: [manifesto, 3.1. madde](../manifest.md#s3-1) ve [Suveria teknik raporu, 6. bölüm](../whitepaper-suveria.md#s6).

## Modeli nasıl seçiyoruz

Suveria’nın dünyanın her yerindeki insanlara kendi dillerinde açık olması amaçlanıyor. Bu yüzden model seçerken şunları dikkate alıyoruz:

- birçok dilde nitelik;
- niyetleri anlama;
- güvenilirlik;
- lisans, yani geliştiricinin modeli kullanmaya izin verdiği koşullar;
- maliyet;
- [Mahremiyet ve güvenlik](suveria-prywatnosc.md) sayfasında anlattığımız korunan ortamda çalıştırılıp çalıştırılamayacağı.

Daha büyük modeli yalnızca insanlar için önemli görevleri açıkça daha iyi yapıyorsa seçeriz. Vakfın kıyaslama testinin, yani modellerin nasıl davrandığını sınamaya olanak veren görev ve değerlendirme ilkeleri kümesinin buna yardımcı olması amaçlanıyor; bugün bu, sonuçları olmayan bir araştırma programıdır.

Teknik rapor iki aday belirtiyor. Bunlar sınanacak adaylardır, karar değil: ilk model ve kabul edilebilir nitelik düzeyi karara bağlanmayı bekliyor.

- **DeepSeek-V4.1-Flash.** Hizmetlerde kullanıma da izin veren MIT lisanslı model. Üretici, ana bölümde 552 milyar parametre (parametreler model eğitilirken belirlenen sayılardır) ve Engram adlı 196 milyar parametreli ek bellek bildiriyor. Her sözcükte bunların yalnızca 8–16 milyarı çalıştığından hızlı ve ucuz yanıt verir; ancak çalıştırmak için en az dört modern ekran kartı gerekir. Parametreler kısaltılmış biçimde kaydedilir (kuantizasyon). Bu bellek tasarrufu sağlar, ancak niteliği düşürebilir; dolayısıyla kendi görevlerimizde sınayacağız.
- **Kimi K3.1 Pro.** Moonshot AI şirketinin modeli. 9 Kasım 2026 itibarıyla tam ağırlıkları, yani parametreleri, herkese açık. Lisans modelin hizmetlerde de kullanılmasına izin veriyor; ek koşullar yalnızca çok yüksek gelirli ya da çok fazla kullanıcılı hizmetler için geçerli, bu yüzden vakfın bugünkü ölçeğinde bizi ilgilendirmiyor (bu bizim okuyuşumuz, hukuki görüş değil). Çalıştırmak için en yeni nesilden en az sekiz ekran kartı gerekiyor. Korunan ortamdaki maliyeti ve hızı henüz ölçülmeli; birinci aday DeepSeek-V4.1-Flash olmayı sürdürüyor.

Daha fazlası: [Suveria teknik raporu, 6. bölüm](../whitepaper-suveria.md#s6) ve [materyaller ve kıyaslama testi teknik raporu, 1. bölüm](../whitepaper-materialy-i-benchmark.md#s1).

## Model değiştiğinde ne olur

Modelin değiştirilmesini veya kullanımdan kaldırılmasını önceden duyururuz. Konuşma geçmişi sende kalır: yeni model seçebilir, verilerini dışa aktarabilir veya çalışmayı bitirebilirsin.

Modelin değiştiği anın konuşmada görünmesi amaçlanıyor; özel bağlamın yeni modele taşınması kararını gerektirir. Güncelleme, kabul edilen güvenlik önlemlerini sessizce zayıflatamayacağı için model değişikliği korumanın yeniden sınanmasını da gerektirebilir.

Daha fazlası: [Suveria teknik raporu, 6. bölüm](../whitepaper-suveria.md#s6) ve [9. bölüm](../whitepaper-suveria.md#s9).

## Asistanın ilkelerinin açık olması amaçlanıyor

Asistanın yanıt verirken izlediği ilkeleri her sürümle birlikte bütünüyle yayımlayacağız. Suveria’da asistanının tam talimatını, yani yanıt verirken izlediği yazılı ilkeleri ve çalışma biçiminin açıklamasını her zaman okuyabilmen amaçlanıyor: görevi nasıl adımlara ayırıyor, belleği nasıl kullanıyor ve yanıtları nasıl denetliyor.

Ortak altyapının yalnızca açık kıyaslama testi denemelerinden geçen modelleri ve ayarları sunması amaçlanıyor. Bu asgarinin üstünde, düşünceleri sakince düzenlemekten asistanın akıl yürütmedeki açıkları gösterdiği zorlayıcı konuşmaya kadar çalışma tarzını sen seçersin.

Katılımcıların OmniForum’da (ortak konuşma ve karar alanında) geliştirdiği ve kıyaslama testinde sınadığı açık bir sınanmış talimatlar kütüphanesi tutmak istiyoruz. Bu kütüphane henüz yok.

Daha fazlası: [Suveria teknik raporu, 4. bölüm](../whitepaper-suveria.md#s4) ve [4.1. madde](../whitepaper-suveria.md#s4-1).

## Asistan, Kişisel Kanon ve Düşünce Teleskobu

Önceki konuşmaların belleğinin onayınla çalışması ve açıkça düzenlenebilir olması amaçlanıyor: her kayıt silinebilir veya düzeltilebilir, kökeni görülebilir. Asistan, kendi önerisini insanın bilinçli olarak benimsediği tutumdan açıkça ayırır.

Kişisel Kanon, kendi benimsediğin ilke ve değerlerden yazılı olarak oluşturduğun derlemedir. Düşünce Teleskobu’nun, farklı zamanlardaki kendi düşüncelerinin kaydını ve zamanla nasıl değiştiklerini görmeye, ayrıca belirttiğin durumu Kanon’la karşılaştırmaya olanak vermesi amaçlanıyor. Fikir, belirli zamanda toplumda kabul edilebilir sayılan fikirlerin aralığı olan Overton penceresinden doğdu. Tek kişide bu, belirli zamanda kendisi için kabul edilebilir bulduğu düşüncelerin aralığıdır; Teleskop tek kişi ve yalnızca o kişi için böyle bir pencere olmayı amaçlıyor.

Model, başvurulan ilkenin kaynağıyla birlikte olası bağlantıları gösterir; yorumu düzeltilebilir veya reddedilebilir. Ahlak puanları veya kamusal sıralama oluşturmuyoruz. İlk sürümde Teleskop yalnızca belirttiğin tek durum üzerinde çalışır; yaşamı sürekli izlemez.

Daha fazlası: [Suveria teknik raporu, 6. bölüm](../whitepaper-suveria.md#s6) ve [6.1. madde](../whitepaper-suveria.md#s6-1).

## Sınırlar: model ne yapar, ne yapmaz

- **Kriz.** Konuşma yaşam veya sağlık tehlikesiyle ilgili olduğunda asistanın, özel ortamın dışına hiçbir şey göndermeden, örneğin acil durum numaraları gibi mevcut yardım hakkında bilgi vermesi amaçlanıyor.
- **Başkalarının mesajları.** Örneğin bağlı e-posta kutusundan gelen başkasının mesajı gizli talimatlar içerebilir; bu yüzden dış içeriği senin talimatlarından ayırırız: asistan bunları düzenlerken onayın olmadan kendi başına mesaj gönderemez, ağ adreslerini açamaz veya Kişisel Kanon’u değiştiremez.
- **Geliştiricinin seçimleri.** Modelin kendisi, örneğin kaçındığı konular gibi geliştiricisinin seçimlerini de taşır; bunları kıyaslama testinde sınar ve model seçiminde anlatırız.
- **Gizli erişimler yok.** Kötüye kullanımı özel konuşmaları okumadan önlemek istiyoruz. Özel içeriklere gizli erişim yolları oluşturmuyoruz.

Daha fazlası: [Suveria teknik raporu, 4. bölüm](../whitepaper-suveria.md#s4), [3. bölüm](../whitepaper-suveria.md#s3) ve [6. bölüm](../whitepaper-suveria.md#s6).

## Oku ve düşünceni söyle

Sayıları, dipnotları ve karara bağlanacak meseleler listesini [Suveria teknik raporunda](../whitepaper-suveria.md), modellerin değerlendirilme biçimini ise [materyaller ve kıyaslama testi teknik raporunda](../whitepaper-materialy-i-benchmark.md) bulacaksın. Bir şey aklına takılırsa veya yanlış görünürse o bölümü seçip “Bir yorumum var” düğmesini kullan ya da salve@novusignis.org adresine yaz.