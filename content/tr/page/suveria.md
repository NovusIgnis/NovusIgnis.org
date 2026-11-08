---
tytul: Suveria nedir
opis: Vakfın tasarladığı, dijital zekâyla çalışmak için özel alan: nelerin mümkün olması amaçlanıyor, nelere karşı korumalı ve bugün hangi aşamada
grupa: suveria
kolejnosc: 1
menu: Suveria nedir
---
# Suveria nedir

Bu sayfa, Suveria’nın ne olmasının amaçlandığını, kimler için oluşturulduğunu ve hangi aşamada olduğunu kısaca açıklıyor. Daha fazlasını öğrenmek istersen her bölümde Suveria teknik raporuna bir bağlantı bulacaksın.

Suveria, insanın dijital zekâyla konuştuğu, kendi materyalleri üzerinde çalıştığı ve önceki düşüncelerine döndüğü, kapalı kapılar ardındaki kendi evi gibi özel bir internet alanı olmayı amaçlıyor. Novus Ignis Vakfı bunu dünyanın her yerindeki insanları düşünerek tasarlıyor.

Suveria bugün bir tasarımdır. İnsanların, kendilerinin böylesine yakından tanınmasının bir gün paraya dönüştürüleceği veya onları etkilemek için kullanılacağı korkusu olmadan dijital zekâyla sağlık, ilişkiler, iş, para ve yaşam planları hakkında konuşabilmeleri için oluşturuluyor. İlk sürümü, denetlenebilir mahremiyetin tercih nedeni olduğu kişilere yöneltiyoruz.

Daha fazlası: [Suveria teknik raporu, 1. bölüm](../whitepaper-suveria.md#s1).

## Nelerin mümkün olmasını istiyoruz

Suveria’da şunların mümkün olmasını istiyoruz:

- konuşmanın nerede işlendiğini ve kimlerin görebileceğini görerek kişisel ve mesleki meseleleri konuşmak;
- kendi belge ve dosyaların üzerinde çalışmak, sonuçları açık biçimlerde kaydedip başka yere taşımak;
- konuşmaları, dosyaları ve asistanın belleğini öncelikle kendi cihazlarında, senin kontrolündeki bir anahtarla şifrelenmiş olarak saklamak;
- kendi onayınla önceki konuşmaların belleğinden yararlanmak ve kendi ilke ve değerlerinin derlemesi olan Kişisel Kanon’u oluşturmak;
- her birinin neye karşı koruduğunu bilerek, kendi cihazındaki modelden sunucudaki gizlilik korumalı ortama kadar çalışma biçimini seçmek;
- kendi belirlediğin harcama sınırıyla gerçek kullanım için ödeme yapmak;
- düşünceyi özel olarak olgunlaştırıp sonra konuşma ve kararlar için kamusal alan olan OmniForum’daki ortak konuşmaya bilinçli olarak katmak.

Daha ilk günden, insanın kendini evinde hissetmesinin sakinliğini sağlaması amaçlanıyor. Kendi notlarını ve konuşma arşivlerini başka dijital zekâ hizmetlerinden taşımayı da mümkün kılmak istiyoruz. Suveria’yı kullanmak, konuşmaların modelleri eğitmek için kullanılmasına onay değildir.

Daha fazlası: [Suveria teknik raporu, 1. bölüm](../whitepaper-suveria.md#s1).

## Nelere karşı koruyor ve henüz neler yok

Korumanın, vakfa ve altyapıyı işleten kişiler olarak bize güvenmeye değil, bağımsız olarak denetlenebilen güvenlik önlemlerine dayanması amaçlanıyor. Bugüne kadar böyle bir denetleme henüz yapılmadı.

Her biri farklı bir şeye karşı koruduğu için birkaç çalışma biçimini karşılaştırıyoruz:

- **Cihazındaki model.** Asistan çevrimiçi hizmetlerle entegrasyon kullanmadıkça konuşma telefondan veya bilgisayardan çıkmaz; cihazın durumu, uygulamanın yetkileri ve cihaza kimin fiziksel erişimi olduğu önemlidir.
- **Sunuculardaki gizlilik korumalı ortam.** Sunucunun, yöneticisinin bile içine bakamayacağı, donanımla yalıtılmış bir bölgesi vardır; model içeriği orada okur. Donanımın bunu dijital imzayla doğrulaması amaçlanıyor (bu tasdiktir: uzak makinede hangi yazılımın, hangi koruma kipinde çalıştığının belgelenmesi). Burada işlemci üreticisine de güvenmek gerekir. Bu, hedeflenen seçenektir.
- **Dış sağlayıcının gizlilik korumalı API’si.** API, uygulamamızın konuşmayı başka bir sağlayıcıdaki modele gönderdiği bağlantıdır. İlk sürüm büyük olasılıkla gizlilik korumalı API kullanacak; başlatılmadan önce gizlilik korumalı ortamda kendi sunucularımızı kiralamak için yeterli kaynak toplarsak doğrudan bunlarda çalışabilir. Burada gizlilik başlangıçta sağlayıcının kontrol edeceğimiz beyanıdır; denemeler olumlu sonuçlanana kadar bu seçeneği gizlilik koruması olarak değil, beyan edilen koruma olarak işaretliyoruz.
- **Model sağlayıcısının sıradan API’si.** Sağlayıcı içeriğe erişebilir; bu, özel Suveria’nın varsayılan seçeneği değildir.

Gizlilik korumalı bilgi işlem, virüs bulaşmış bilgisayarı düzeltmez ve sunucuya fiziksel erişimi olan herkese karşı korumaz. Belirli yapılandırma denetlenmeden hiçbir seçenek “tam mahremiyet” etiketi almaz. Her konuşmada hangi seçenekte çalıştığının görünmesi amaçlanıyor; seçenek değişikliği bilinçli kararını gerektirir.

Daha fazlası: [Suveria teknik raporu, 2. bölüm](../whitepaper-suveria.md#s2) ve [2.3. madde](../whitepaper-suveria.md#s2-3). Ayrıca bak: [Mahremiyet ve güvenlik](suveria-prywatnosc.md).

## Modeller

Tasarımın temelini bağımsız çalıştırılabilen açık modeller oluşturuyor. Model seçerken diğerlerinin yanı sıra birçok dildeki niteliği, güvenilirliği, lisansı, maliyeti ve gerekli koruma mimarisinde çalıştırılabilmesini dikkate alıyoruz.

Modelin değiştirilmesini veya kullanımdan kaldırılmasını önceden duyururuz; konuşma geçmişi sende kalır: sonraki modeli seçebilir, verilerini dışa aktarabilir veya çalışmayı bitirebilirsin. Konuşmada modelin değiştiği anın görünmesi amaçlanıyor.

Daha fazlası: [Suveria teknik raporu, 6. bölüm](../whitepaper-suveria.md#s6).

## Maliyeti ne kadar

Manifesto, ortak altyapının her dolar için kapalı hizmetlerden daha fazla hesaplama gücü ve dijital zekâ sunabileceği hipotezini ortaya koyuyor. Teknik rapor bunu 29 Ekim 2026 tarihli hesapta ele alıyor: varsayılan kullanım profilinde, gizliliği beyan edilen gizlilik korumalı API’nin yalnızca hesaplama maliyeti kişi başına ayda yaklaşık 0,70–1,25 USD. Buna özel ortamın sabit maliyeti eklenir; kişi sayısı az olduğunda en büyük ağırlık bu maliyettedir: 30 katılımcıyla kişi başına ayda yaklaşık 6–11 USD.

Bu, Suveria’nın fiyat listesi değil, kâğıt üzerinde bir tahmindir: hesap; insan emeğini, güvenlik incelemelerini, ödemeleri veya arızalar için payı içermez. O tarih itibarıyla hipotezin durumu: hesap bizi ona yaklaştırıyor, ancak onu doğrulamıyor.

Daha fazlası: [Suveria teknik raporu, 8. bölüm](../whitepaper-suveria.md#s8). Ayrıca bak: [Maliyeti ne kadar](suveria-koszty.md).

## Çalışmaların durumu

Teknik rapor bir sonuç günlüğü tutuyor. 29 Ekim 2026 itibarıyla durumu: anlatılan denemelerin hiçbirini henüz yapmadık, ekran kartı kiralamadık ve Suveria’da bir model çalıştırmadık. İlk ölçümü, daha küçük bir modelle gizlilik korumalı tek bir ekran kartı üzerinde planlıyoruz.

En önemli deneme: işletmeci yetkilerine sahip ekip, gizli karakter dizileri yerleştirilmiş test hesaplarının konuşmalarını okumaya çalışır. Biz de dâhil herhangi biri bunları çıkarırsa deneme başarısızdır.

Denemeleri açık yürütmek istiyoruz. Güvenlik, kriptografi, altyapı veya uygulamalarla ilgileniyorsan ya da tasarıma eleştirel bakmak istiyorsan “[Katıl] Suveria denemeleri” konusuyla salve@novusignis.org adresine yaz.

Daha fazlası: [Suveria teknik raporu, 9. bölüm](../whitepaper-suveria.md#s9) ve [8.2. madde](../whitepaper-suveria.md#s8-2).

## Suveria neden bir amaç değil, bir yol

Manifesto bunu açıkça söylüyor:

> Suveria bugün dijital zekâyla özel olarak çalışmak için elimizdeki en iyi yoldur, kendi başına bir amaç değildir. Modeller kişinin kendi cihazına sığarsa veya daha iyi bir koruma yolu ortaya çıkarsa bu yolun bir bölümü gereksiz hâle gelecek; bunu iyi haber sayacağız.

Daha fazlası: [manifesto, 3.1. madde](../manifest.md#s3-1).

## Oku ve düşünceni söyle

Koruma seçenekleri tablosu, maliyet hesabı ve karara bağlanacak meseleler listesiyle tam açıklamayı [Suveria teknik raporunda](../whitepaper-suveria.md) bulacaksın. Bir şey aklına takılırsa veya yanlış görünürse belgedeki o bölümü seçip “Bir yorumum var” düğmesini kullan ya da salve@novusignis.org adresine yaz.