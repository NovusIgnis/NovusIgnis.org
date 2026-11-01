---
tytul: Suveria’da mahremiyet ve güvenlik
opis: Suveria konuşmaları kimden korumayı amaçlıyor, mesaj sistemden nasıl geçiyor, anahtarlar kimde ve korumanın işlediğini nasıl sınayacağız
grupa: suveria
kolejnosc: 2
menu: Mahremiyet ve güvenlik
---
# Suveria’da mahremiyet ve güvenlik

Bu sayfa, konuşmalarını Suveria’ya emanet etmeden önce mahremiyet korumasının neye dayanmasının amaçlandığını öğrenmek isteyenler içindir. [Suveria nedir](suveria.md) sayfasını derinleştirir; her bölümde teknik rapora yönlendirir.

Bütünü tek ilke düzenler: mahremiyet, vakfın veya sunucu yöneticilerinin iyi niyetine güvenmeye değil, işleyişi bağımsız olarak denetlenebilen güvenlik önlemlerine dayanmalıdır. Manifesto bunu şöyle ifade eder: “Her güvenlik vaadinin yalnızca sözlerimizde değil, kodda ve silisyumda da kanıtı olmalıdır”. Konuşmaların saklandığı temel yerin kendi cihazların olması amaçlanıyor; özel içeriklere gizli erişim yolları oluşturmuyoruz.

Suveria bugün bir tasarımdır. Aşağıdaki her şey nasıl işlemesinin amaçlandığını anlatıyor; bunu doğrulaması amaçlanan denemelerin hiçbirini henüz yapmadık.

Daha fazlası: [manifesto, 2.2. madde](../manifest.md#s2-2) ve [3.1. madde](../manifest.md#s3-1).

## Kime karşı koruması amaçlanıyor, kime karşı değil

Konuşmaların ve dosyaların içeriğini, asistanın geçmişini ve belleğini, anahtarları (şifrelenmiş verileri açan gizli karakter dizilerini), faturalandırma verilerini ve bağlantının kendisi hakkında bilgi olan meta verileri koruruz: bağlantının zamanı, ağ adresi ve istek büyüklüğü.

Gizlilik korumalı ortam, sunucunun yöneticisinin bile içine bakamadığı, donanımla yalıtılmış bölümüdür. Bunun gerçekten böyle olduğunu tasdikin, yani sunucuda hangi yazılımın hangi koruma kipinde çalıştığına ilişkin donanımın imzaladığı belgenin doğrulaması amaçlanıyor. Gizlilik korumalı API, uygulamamızın bağlandığı dış sağlayıcıdaki böyle bir ortamdır (API, programlar arasındaki bağlantıdır). Tablo, henüz denemede sınanmamış amaçlanan işleyişi anlatıyor:

| Kime karşı koruması amaçlanıyor | Cihazındaki model | Sunuculardaki gizlilik korumalı ortam | Dış sağlayıcının gizlilik korumalı API’si |
| --- | --- | --- | --- |
| Sağlayıcının yöneticisi | uygulanmaz: cihazda işleme | koruması amaçlanıyor: donanım yalıtımı | sağlayıcı beyanı, sınanacak |
| Ağ gözlemcisi | ağ yoksa uygulanmaz; entegrasyon trafiği değerlendirme gerektirir | kısmi koruma: içerik şifreli, meta veriler ayrı önlemler gerektirir | bağlantı anahtarı tasdike bağlıysa kısmi koruma |
| Sunucuya fiziksel erişimi olan kişi | uygulanmaz; cihaza erişim önemlidir | korumaz: başkasının veri merkezinde sağlayıcının erişimi vardır; kendi donanımında görünür fiziksel kontrol | korumaz: sağlayıcının erişimi vardır |
| Vakıf | uygulanmaz: vakıf işlemeye katılmaz | koruması amaçlanıyor: yalıtım bizi de kapsar, kayıt anahtarları sendedir | içeriği koruması amaçlanıyor: isteklerin hesabını yapan bölümümüz olan ağ geçidi içeriğe erişmez; şifrelemenin nerede bittiğini pilot uygulamadan önce göstereceğiz |

Açıklama: “koruması amaçlanıyor” hedeflenen korumadır; “kısmi koruma” içeriği korur, çevresindeki her şeyi değil; “korumaz” doğrudan sınırı belirtir; “sağlayıcı beyanı, sınanacak” ise kendi doğrulamamıza kadar korumayı onaylamadığımızı gösterir. Sağlayıcının yöneticisi, modelin çalıştığı sunucuları yönetendir; ağ gözlemcisi cihazınla sunucu arasındaki trafiği görür, ancak içerik aktarım sırasında şifrelidir; fiziksel erişimi olan kişi sunucunun kasasını açabilir; vakıf ise hizmet işletmecisi olarak biziz.

Üç sınırı baştan bilmek yararlıdır. Gizlilik korumalı bilgi işlem, virüs bulaşmış telefonu veya bilgisayarı düzeltmez. Sunucuya fiziksel erişimi olan herkese karşı korumaz: araştırmacılar 2025’te bin dolardan daha aza, sunucuya fiziksel erişimle donanım belgesinin sahtesini yapmaya olanak veren bir cihaz kurdu. Sunuculardaki koruma, dürüst olması gereken işlemci üreticisinin anahtarlarına da dayanır.

Daha fazlası: [Suveria teknik raporu, 2. bölüm](../whitepaper-suveria.md#s2) ve [2.3. madde](../whitepaper-suveria.md#s2-3).

## Mesaj sistemden nasıl geçer

Suveria’nın cihazındaki uygulamadan, ağ geçidinden (isteklerin hesabını yapan ve harcama sınırını gözeten sistem bölümümüz), modelin bulunduğu gizlilik korumalı ortamdan, şifreli kopyaların saklanmasından ve adresini gizleyen isteğe bağlı aracıdan oluşması amaçlanıyor.

Hedeflenen seçenekte tek mesajın şu yolu izlemesi amaçlanıyor:

1. Uygulama, onaylanan sürümün açıklamasını alır ve sunucunun tasdikini denetler.
2. Bu tasdiki açık politikayla karşılaştırır. Mesajı şifrelediği anahtarın bu tasdike bağlı olması gerekir.
3. Ancak başarılı denetlemeden sonra şifreli bağlantı kurar. Uyuşmazlık veri gönderimini durdurur; başka seçeneğe geçiş bilinçli seçimini gerektirir.
4. Ortam, ağa ve araçlara sınırlı erişimle isteği işler, sonucu döndürür ve yayımlanmış politikaya göre çalışma verilerini siler.
5. Konuşma veya bellek yalnızca seçtiğin kapsamda kaydedilir.

Tasdik neyin çalıştırıldığını saptamaya yardımcı olur; ancak tek başına bu kodun güvenli olduğunu kanıtlamaz. Kod incelemeleri ve bağımsız denetleme olanağı gerekir. Pilot uygulamadan önce uygulamada, cihazının kontrol ettiği şifrelemenin nerede bittiğini ve ağ geçidinin içeriği görüp görmediğini göstereceğiz.

E-posta kutusu gibi başka insanların mesajlarını içeren kaynakları bağladığında özellikle ihtiyatlıyız. Başkasının mesajı, modeli özel belleği açıklamaya yönelten gizli talimatlar içerebilir. Bu yüzden asistan, insanın onayı olmadan kendi başına mesaj gönderemez, ağ adreslerini açamaz veya Kişisel Kanon’u (ilke ve değerler derlemeni) değiştiremez.

Hizmetin başlatılmasıyla birlikte, işleyişi hakkında topladığımız tüm veri türlerinin listesini, amaçları ve saklama süreleriyle yayımlayacağız. Listenin dışındaki verileri toplamayız.

Daha fazlası: [Suveria teknik raporu, 3. bölüm](../whitepaper-suveria.md#s3).

## Anahtarların

Özel kapsayıcıların, yani şifrelenmiş veri kümelerinin anahtarları senin kontrolünde kalır. Vakıf anahtarları veya parçalarını saklamaz; bu yüzden senin yerine erişimi geri getiremez veya verilerini teslim edemez. İşletmecide hesabı geri almak içeriğin kilidini açmaz.

Anahtarın tüm kopyalarının kaybı, verilerin kalıcı kaybı anlamına gelebilir. Bu yüzden birleştirilebilecek geri kazanma yollarını değerlendiriyoruz: erişimi olan ikinci cihaz, kâğıda veya parola yöneticisine kaydedilmiş anahtar, donanım anahtarı veya anahtarın, hiçbiri verileri tek başına okuyamayan birkaç güvenilir kişi arasında bölünmesi. Başlangıçta ikinci cihazı ve kâğıda kaydedilmiş anahtarı öneriyoruz. Her mekanizmayı verileri geri yükleme denemesiyle sınarız.

Daha fazlası: [Suveria teknik raporu, 2.2. madde](../whitepaper-suveria.md#s2-2).

## Görünmeyip ele veren şey: aktarım ritmi

Yanıt sana paketler, yani veri parçaları hâlinde gelir. Şifreleme içeriği gizler; uzunluğu veya ritmi değil. Bu bir yan kanaldır: bilgi içerikten değil, aktarım biçiminden sızar. 2024–2025 araştırmaları, ağ gözlemcisinin buradan konuşmanın konusunu, bazen içeriğini yeniden oluşturabildiğini gösterdi. Bu yüzden gizlilik korumalı kipte yanıtı sabit boyutlu parçalarda ve sabit ritimde göndermek istiyoruz; bu, biraz gecikmeye ve bant genişliği tüketimine mal olur.

Daha fazlası: [Suveria teknik raporu, 3. bölüm](../whitepaper-suveria.md#s3).

## Denetlenebilen sürümler

Yazılıma güvenin tek kişiye veya yalnızca vakfa bağlı olmaması amaçlanıyor. Herkes uygulamayı yayımlanmış koddan kendisi derleyebilir ve sonucun kurduğu sürümle aynı olduğunu denetleyebilir. Vakıf dışından en az iki bağımsız tarafın sürümü yeniden oluşturması ve eşleşmeyi kamuya açık doğrulaması amaçlanıyor; bunları bulana kadar sürümü üçüncü kişilerce doğrulanmamış olarak işaretleriz.

Tam korumayı kurulan uygulama için tasarlıyoruz. Tarayıcıda sunucuyu denetleyen kodu her defasında işletmeci sağladığından, tarayıcı sürümü daha düşük koruma düzeyini açıkça anlatacak.

Daha fazlası: [Suveria teknik raporu, 3. bölüm](../whitepaper-suveria.md#s3).

## Birden fazla ekran kartı

Çalıştırmak istediğimiz model tek ekran kartına sığmadığından veriler kartlar arasında da akar. Koruma, kartların kendisi ve aralarındaki bağlantılar için sınanmalıdır; “secure” ticari etiketi bunun yerini almaz. Sağlayıcının teklifini ancak kendi uygulamamızla denemeden sonra karşılaştırırız.

Daha fazlası: [Suveria teknik raporu, 5. bölüm](../whitepaper-suveria.md#s5).

## İşlediğini nasıl sınayacağız

En önemli deneme: gizlilik korumalı ortamın dışında işletmeci yetkilerine sahip ekip (ağ geçidi, diskler, ağ, günlükler), gizli karakter dizileri yerleştirilmiş test hesaplarının konuşmalarını okumaya çalışır. Biz de dâhil herhangi biri bunları çıkarırsa deneme başarısızdır.

Herhangi bir sürümü gizlilik korumalı olarak adlandırmadan önce, diğerlerinin yanı sıra doğru tasdiki, kod veya anahtar değiştirildiğinde veri göndermenin reddedilmesini, günlüklerde içerik bulunmamasını, silmeyi ve geri kazanmayı belgeleyeceğiz. Başarısız olanlar dâhil sonuçlar sonuç günlüğüne girer. 29 Ekim 2026 itibarıyla: anlatılan denemelerin hiçbirini henüz yapmadık.

Denemeleri açık yürütmek istiyoruz. Güvenlik, kriptografi, altyapı veya uygulamalarla ilgileniyorsan ya da tasarıma eleştirel bakmak istiyorsan “[Katıl] Suveria denemeleri” konusuyla salve@novusignis.org adresine yaz.

Daha fazlası: [Suveria teknik raporu, 9. bölüm](../whitepaper-suveria.md#s9).

## Oku ve düşünceni söyle

Seçenek ve tehditlerin tam dökümünü, uygulamanın güvenlik önlemlerini ve karara bağlanacak meseleler listesini [Suveria teknik raporunda](../whitepaper-suveria.md) bulacaksın. Bir şey aklına takılırsa veya yanlış görünürse belgedeki bölümü seçip “Bir yorumum var” düğmesini kullan ya da salve@novusignis.org adresine yaz.