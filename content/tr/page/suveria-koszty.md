---
tytul: Suveria’nın maliyeti ne kadar
opis: Suveria’da ne için ödeme yapılması amaçlanıyor, tarihli hesap ne gösteriyor ve neden fiyat listesi değil tahmin
grupa: suveria
kolejnosc: 3
menu: Maliyeti ne kadar
---
# Suveria’nın maliyeti ne kadar

Bu sayfa senin paranla ilgili: Suveria’da ne için ödeme yapılması amaçlanıyor, fatura nasıl oluşuyor ve hesaplarımız ne gösteriyor. Suveria bugün bir tasarımdır. Hizmet henüz yok; dolayısıyla herhangi bir fiyat da yok. Aşağıdaki sayılar 29 Ekim 2026 tarihli hesaptan geliyor (kendimiz topladığımız “Toplam” satırı dışında). Bu, fiyat listesi değil, kâğıt üzerindeki hesaptır.

Daha fazlası: [Suveria teknik raporu, 8. bölüm](../whitepaper-suveria.md#s8).

## Ne için ödeme yaparsın

İlke basittir: ortak maliyetlerin (güvenlik veya muhasebe gibi tek kişiye atfedilemeyenlerin) adil hesaplanan payıyla birlikte gerçekten kullandığın kadar ödersin, ne için ödeme yaptığını görürsün ve kendi harcama sınırını kendin belirlersin. Ücret yalnızca maliyetleri karşılar. Bunun üstündeki her şey ayrı gösterilen gönüllü bağıştır.

Faturanın iki bölümü vardır:

- ilgili dönemde **gerçek kullanım**: hesaplama, bellek, veri aktarımı;
- altyapıyı hazır tutan **sabit maliyetlerin açıkça tahsis edilmiş payı**: güvenlik, ödemeler, muhasebe, işletim, donanımın yıpranması ve değiştirilmesi.

Ortak maliyetleri, pilot uygulamada seçilen açık kurala göre bölmek istiyoruz: kullanıma orantılı veya etkin hesaplar arasında eşit. Görevin tahmini maliyeti her zaman denetlenebilir olmalı; ortak maliyetlerdeki payını faturalandırma döneminden önce duyuracağız ve bu her zaman sınırın içinde kalır. Her fiyat değişikliğini nedeni ve kullanıcılara etkisiyle duyuracağız.

Daha fazlası: [vakıf ilkeleri teknik raporu, 3. bölüm](../whitepaper-zasady-fundacji.md#s3) ve [3.1. madde](../whitepaper-zasady-fundacji.md#s3-1); [manifesto, 6.1. madde](../manifest.md#s6-1).

## Hesap ne gösteriyor

Hesaplarda örnek kullanıcı varsaydık: 30 gün boyunca her gün 20 soru, her yanıt yaklaşık 600 token uzunluğunda (token, yaklaşık kısa bir sözcük kadar metin parçasıdır). Bu bir öngörü değil, deneme için yük modelidir. Fiyatlar, vergiler hariç kamuya açık fiyat listelerinden geliyor.

İlk sürüm büyük olasılıkla gizlilik korumalı API kullanacak (yeterli kaynak toplarsak doğrudan kiraladığımız kendi sunucularımızda çalışabilir): dijital zekâ modeli, konuşma içeriklerini okumadığını beyan eden dış sağlayıcıda çalışır; bu beyanı kontrol edeceğiz. Buna özel ortam eklenir: ağ geçidi, bellek ve kullanıcı dosyalarıyla bir veya iki gizlilik korumalı makine. Bu maliyet sabittir; dolayısıyla küçük grupta en büyük ağırlığı taşır.

| Suveria’yı şu sayıda kişi kullansaydı kişi başına aylık (29.10.2026 hesabı) | 30 kişi | 100 kişi | 1000 kişi |
| --- | --- | --- | --- |
| Gizlilik korumalı API’de yalnızca hesaplama | 0,70–1,25 USD | 0,70–1,25 USD | 0,70–1,25 USD |
| Özel ortamın sabit maliyeti (aylık 170–340 USD) | yaklaşık 6–11 USD | yaklaşık 1,70–3,40 USD | birkaç on sent |

Bu kâğıt üzerinde tahmindir: insan emeğini, güvenlik incelemelerini, ödemeleri veya arızalar için payı içermez; bu büyüklükte makinelerin yeterli olup olmadığını pilot uygulamada sınayacağız. Sabit maliyeti ayrı göstermek ve örneğin Suveria’ya ayrılmış bağışlarla pilot destek bütçesinden karşılamak istiyoruz. Bu kaynakların zaten elimizde olduğunu varsaymıyoruz.

Daha fazlası: [Suveria teknik raporu, 7. bölüm](../whitepaper-suveria.md#s7) ve [8.1. madde](../whitepaper-suveria.md#s8-1); [vakıf ilkeleri teknik raporu, 3.1. madde](../whitepaper-zasady-fundacji.md#s3-1).

## 30 kişiden tüm insanlığa

Aynı örnek kullanıcı, farklı kişi sayılarında modelin ne kadar işi olacağını hesaplamaya olanak verir. Tabloda “zirve”, farklı zaman dilimlerindeki insanlar Suveria’yı kullanırken günün en yoğun saatidir (ortalamanın yaklaşık 1,51 × katı).

| Etkin kişiler | Aylık sorular | Zirvede yanıt metni |
| --- | ---: | ---: |
| 30 | 18.000 | saniyede 6,3 token |
| 100 | 60.000 | saniyede 20,9 token |
| 1000 | 600.000 | saniyede 209 token |
| 100 bin | 60 milyon | saniyede 20.921 token |
| 1 milyon | 600 milyon | saniyede 209.208 token |
| 1 milyar | 600 milyar | saniyede 209,2 milyon token |
| 10 milyar | 6 trilyon | saniyede 2,09 milyar token |

Bu ne kadar donanım demek? Teknik rapor bir düşünce deneyi yapıyor. 10 milyar kişinin her biri Suveria’yı böyle kullansaydı, DeepSeek-V4.1-Flash modeli için ölçülen verimlilikle yaklaşık 2,25 milyon B200 kartı ve yaklaşık 4 GW güç gerekirdi. Bir milyar kişi için bu yaklaşık 225 bin kart ve 0,4 GW, bir milyon için yaklaşık 225 karttır. Karşılaştırmak için Epoch AI, 2026 başında dünyada dijital zekâ için 10 GW’tan fazla güç gerektiren 15 milyondan fazla H100 eşdeğeri kartın çalıştığını tahmin ediyordu. Bu basitleştirmedir: örnek kullanıcı tutumludur; yoğun çalışma, daha büyük modeller ve görseller kat kat fazlasını gerektirir.

Milyonlarca insan için kişi başı maliyet vermiyoruz: bu ölçekte donanım, fiyatlar ve hizmeti sürdürme biçimi değişirdi; dolayısıyla böyle bir sayı tahmin yürütmek olurdu. 29.10.2026 hesabı yalnızca varsayımlarımız altında kendi altyapımızın, on küsur bin ile birkaç on bin etkin kişi arasında gizlilik korumalı API’den daha ucuz hâle gelebileceğini söylüyor.

Daha fazlası: [Suveria teknik raporu, 7. bölüm](../whitepaper-suveria.md#s7).

## Neden dolarla hesaplıyoruz

Hizmet fiyatlarını dolarla vereceğiz; çünkü hesaplama gücü bu para birimiyle alınır. Ödemeleri faturada gösterilen kurla başka para birimlerinde de kabul etmek istiyoruz. Vakfın muhasebesini zloti cinsinden tutuyoruz.

Daha fazlası: [vakıf ilkeleri teknik raporu, 3.1. madde](../whitepaper-zasady-fundacji.md#s3-1).

## Ön ödeme, iade, yuvarlama

- **Ön ödeme.** Tek bir tutar girersin; ödeme yönteminden bağımsız olarak tam o tutar bakiyene geçer. Ön ödemelerin ayrı banka hesabında tutulması amaçlanıyor; hizmet verilmeden önce vakfın maliyetlerini bunlardan karşılamayız.
- **Sınır.** Ödeme sırasında en fazla ne kadar harcamak istediğini belirlersin. Sınırın, olup bittikten sonraki uyarı değil gerçek sınır olarak işlemesi amaçlanıyor. Bu çalışan işlev değil, oluşturulup sınanacak gerekliliktir.
- **İade.** Kullanılmayan bakiyenin her an, hedeflenen düzende tek düğmeyle geri alınabilmesi amaçlanıyor; iade süresini, olası maliyetlerini, asgari ödemeyi ve diğer ayrıntıları düzenleme belirleyecek. Hesaptan vazgeçildiğinde veya hizmet kapatıldığında bakiye aynı yoldan otomatik döner. Alınmayan bakiye vakfın bütçesine gitmez.
- **Yuvarlama.** Hesap açarken her faturayı bir üst tam dolara veya yerel para birimindeki yakın karşılığına yuvarlamak isteyip istemediğini sorarız; fark ortak bütçeye bağış olarak gider. Birinin yerine işaretlemek yerine sorarız; karar her an tek ayarla değiştirilebilir.

Fatura, hizmet ücretini ve bağış tutarını ayrı gösterir. İade süresini, asgari ödemeyi ve diğer ayrıntıları ilk ön ödeme kabul edilmeden önce hazırlanacak düzenleme belirleyecek.

Daha fazlası: [vakıf ilkeleri teknik raporu, 3.2. madde](../whitepaper-zasady-fundacji.md#s3-2) ve [3.3. madde](../whitepaper-zasady-fundacji.md#s3-3); [Suveria teknik raporu, 8.3. madde](../whitepaper-suveria.md#s8-3).

## Aboneliklerle karşılaştırma

Ticari platformlarda abonelik bedeli genellikle kullanım maliyetini, ücretsiz hesapların sürdürülmesini, pazarlamayı, yönetimi ve yatırımcı kârını tek tutarda birleştirir; kullanıcı ise bileşenlerin payını görmez. Manifesto, bu gizli ek yük olmadan, düzenli katılımcı sayısı görece az olduğunda bile ortak altyapının, denetlenebilir güvenlik önlemlerine dayanan mahremiyetle, harcanan her dolar için kapalı hizmetlerden daha fazla hesaplama gücü ve dijital zekâ sunabileceği hipotezini ortaya koyuyor.

29 Ekim 2026 itibarıyla hipotezin durumu: hesap bizi ona yaklaştırıyor, ancak doğrulamıyor. Gizliliği beyan edilen işleme kamuya açık fiyat listelerinde zaten mevcut; dolayısıyla küçük grup bununla maliyetine başlayabilir. Varsayımlarımız altında kendi altyapımız on küsur bin ile birkaç on bin etkin kişide daha ucuz hâle gelebilir. Yoğun ajan çalışmasında API liste fiyatlarıyla binlerce dolara eşdeğer kullanım sunan 100–200 USD’lik planlarla fiyat üzerinden rekabet etmiyoruz. Denetlenebilir mahremiyetle gerçek kullanımın ücretlendirilmesini öneriyoruz.

Daha fazlası: [manifesto, 2.4. madde](../manifest.md#s2-4); [Suveria teknik raporu, 8.1. madde](../whitepaper-suveria.md#s8-1).

## Hesabı ne değiştirecek

Her önemli fiyat değişikliğinde ve her denemeden sonra hesabı güncelliyor, önceki sürümleri koruyoruz. Denemelerde sınayacağımız üç şey belirleyici olacak:

- bu hizmetlerin gizliliğinin bağımsız doğrulamayı geçip geçmediği;
- mevcut modellerin niteliğinin insanların Suveria’ya geleceği görevler için yeterli olup olmadığı;
- gerçek trafik profilinin ne olduğu.

Altyapıyı adımlarla geliştirmek istiyoruz: önce gizlilik korumalı API ve gizlilik korumalı makinelerde özel ortam, sonra kendi gizlilik korumalı makinelerimizi kiralamak, ardından dış veri merkezi için donanım almak ve uzak gelecekte, üstünlük gösterirse, kendi binamız. Her adımı ölçülen veriler ve tam maliyet, riskler ve geri çekilme koşullarını içeren karar kartı gerekçelendirir. Sunucu alımını bugün teklif değil, yalnızca tahmin olarak hesaplıyoruz.

Daha fazlası: [Suveria teknik raporu, 8.1. madde](../whitepaper-suveria.md#s8-1) ve [8.2. madde](../whitepaper-suveria.md#s8-2).

## Oku ve düşünceni söyle

Seçenekler tablosu ve fiyat kaynaklarıyla tam hesabı [Suveria teknik raporunda](../whitepaper-suveria.md#s8), fatura, ön ödeme ve iade kurallarını ise [vakıf ilkeleri teknik raporunda](../whitepaper-zasady-fundacji.md#s3) bulacaksın. Sayılarda veya varsayımlarda bir şey tutarsız görünürse belgedeki o bölümü seçip “Bir yorumum var” düğmesini kullan ya da salve@novusignis.org adresine yaz.