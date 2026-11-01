---
tytul: Site istatistikleri
opis: Sitemiz ve belgelerimiz kaç kez okunuyor; analiz betikleri ve çerezler olmadan sunucu günlüklerinden topluca hesaplanan sayılar
grupa: skroty
kolejnosc: 11
menu: Site istatistikleri
---
# Site istatistikleri

Vakfa ilginin nasıl değiştiğini ve hangi metinlerin en çok okunduğunu bilmek ve açıkça göstermek istiyoruz. En basit yolla hesaplıyoruz: zaten her sayfa indirmesini kaydeden sunucunun günlüklerinden. Sitede analiz betiği, çerez veya sonraki ziyaretinde seni tanıyacak herhangi bir şey yoktur.

**31 Ekim 2026 itibarıyla.** Site, sunucu günlüklerini sunan barındırma paketine geçiyor. İstatistikleri Kasım 2026’dan itibaren hesaplamaya başlıyoruz; aşağıdaki ilkeler ilk hesaplanan aydan itibaren geçerlidir.

## Neleri sayarız

- **Sayfa görüntülemeleri:** her sayfa ve belgenin kaç kez indirildiği; Lehçe ve İngilizce ayrı.
- **Dosya indirmeleri:** örneğin manifesto ve teknik raporların tek dosyada olduğu `llms-full.txt`.
- Dört grupta **bot ziyaretleri**: arama motorları; dijital zekâ modelleri kuran şirketlerin botları; örneğin biri sohbetinden manifestoyu okumasını istediğinde, insanın isteğiyle siteyi okuyan modeller; diğer botlar.
- **Modeller için dosyalar:** model botlarının `llms.txt` ve `llms-full.txt` dosyalarını kaç kez indirdiği.

## Neleri kaydetmeyiz

- IP adreslerini, tam tarayıcı açıklamalarını veya tek kişiyi tanımaya olanak veren başka bir şeyi.
- Tek kişinin ziyaret geçmişini: görüntülemeleri ziyaret veya profillerde birleştirmeyiz.
- Diğer site ve hizmetlerden verileri.

Bu yüzden kaç kişinin ziyaret ettiğini değil, sayfaların kaç kez indirildiğini biliriz. Tek kişi sayfayı birkaç kez açabilir; bazı botlar sıradan tarayıcı gibi göründüğünden sayılar yaklaşık değerlerdir.

## Nasıl hesaplarız

Sitenin barındırıldığı Infomaniak şirketinin panelinden her hafta sunucu günlüğünü indiririz; çünkü orada günlükler yalnızca birkaç gün saklanır. Ay sonunda `tools/statystyki.mjs` betiği bunlardan yalnızca yukarıdaki toplamları hesaplar; IP adresi ve tarayıcı açıklaması olmadan kaydeder. İndirilen günlük kopyalarını en fazla ay sonuna kadar tutar, hesaplamadan hemen sonra sileriz. Veri işleme ilkelerini [Verilerin](twoje-dane.md) sayfası anlatır.

## Sonuçlar

{{statystyki}}