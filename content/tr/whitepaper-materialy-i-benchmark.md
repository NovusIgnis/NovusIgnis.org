# Modellerin eğitimi için materyaller ve kıyaslama testi: Novus Ignis araştırma programı

8 Kasım 2026 tarihli sürüm. Belge manifestonun 8. bölümünü geliştirir. Araştırma programı, materyal hazırlama usulü, dijital zekâ modellerinin geniş değerlendirme kapsamı ve olası deneyimlerine karşı ihtiyat usulü önerir. Kendi kıyaslama testimizin sonuçlarını veya böyle bir veri kümesinin modellerin davranışını iyileştireceğinin kanıtını sunmaz; bugün böyle sonuçlarımız yok.

*Bu çeviri, 8 Kasım 2026 tarihli Lehçe özgün metne dayanarak dijital zekâ tarafından yapılmıştır. Farklılık olması halinde Lehçe metin geçerlidir.*

## 1. Sınamak istediğimiz soru

Poznań merkezli Novus Ignis Vakfı, dijital zekâyla çalışmak için özel alan Suveria’yı ve konuşma ve kararlar için ortak alan OmniForum’u oluşturuyor; yönü [manifesto](manifest.md) anlatır. Bu belge bağlantılı iki programı anlatır. İlki modellerin eğitimi için materyaller ve kıyaslama testi, yani modellerin nasıl davrandığını sınamaya yarayan görevler ve değerlendirme ilkeleri bütünüdür. İkincisi, sistemin bir şey hissedebileceğine ilişkin güvenilir belirtiler ortaya çıkarsa ihtiyatlı davranma yoludur. Test sonucu modelin bir şey hissedip hissetmediğini belirlemez ve yönetim yetkisi vermez.

Onurun korunmasına, dürüst akıl yürütmeye ve kararları düzeltmeye ilişkin belgeli örnekler, insanlara daha iyi hizmet eden modellerin geliştirilmesine yardımcı olabilir mi? Davranışlarını, test sonucunun iyileşmesi test dışında gerçek yarara katkıda bulunacak biçimde değerlendirebilir miyiz?

Bunlar bağlantılı iki görevdir. İlki eğitimde kullanılabilecek materyallerle, ikincisi modelin ne öğrendiğini bağımsız sınamakla ilgilidir. Kıyaslama testinin Suveria’da sunulan modelleri ve yönergeleri seçmeye de yardımcı olması amaçlanıyor. Eğitim veri kümesi ve testin gizli kısmı ayrı tutulmalıdır. Değerli materyali yayımlamak kendi başına da anlamlıdır: insanların kararları anlamasına, rolleri devralmasına ve ortak çalışmayı iyileştirmesine yardımcı olabilir.

Onur programın kabul edilen temelidir. Ancak belirli davranışın değerlendirilmesi açık ölçütler, farklı yorumlara yer ve etkilerin sınanmasını gerektirir. Tek grubun bütün insanların ve sistemlerin etik niteliğinin tam ölçüsünü belirleyebileceğini varsaymayız.

Belgenin düzeni:

- Bölüm 2 ve 3: neye dayandığımız ve ödülün model için anlamı.
- Bölüm 4 ile 6: materyallerin nasıl oluştuğu, gereken onaylar ve tek örneğin hazırlanması.
- Bölüm 7 ile 11: modelleri nasıl değerlendirdiğimiz: kıyaslama testinin kapsamı, görev aileleri, puanlama, teste uyarlanmaya karşı koruma, değerlendiriciler ve rapor.
- Bölüm 12: insanlarla araştırmalar, yani yardımın test dışında yaşamı iyileştirip iyileştirmediği.
- Bölüm 13: eğitim denemesi ve ilk sürüm planı.
- Bölüm 14: modellerin olası deneyimlerine karşı ihtiyat.
- Bölüm 15: neyi ilerleme sayacağımız.

**31 Ekim 2026 itibarıyla durum.** Henüz tek örneğimiz, veri kümemiz, değerlendirme yönergemiz veya bölüm 14’teki kartımız yok; programın ekibi de henüz yok. Olumsuz olanlar dahil sonuçları tarihleriyle buraya ekleyeceğiz.

## 2. Araştırma dayanağı ve çıkarımların sınırları

Collective Constitutional AI, katılımcıların katkısının ilke geliştirmeye ve model eğitimine kullanıldığı süreci gösterir; diğer bazı testlerde benzer sonuçlarla, seçilen önyargı ölçülerinde iyileşme elde edildi.[^ccai] Bu toplumsal katılımın uygulanabilir yoluna örnektir. Katılımcı seçimi ve ilkelerin düzenlenmesi sonucu etkilemeye devam eder; araştırma bütün insanlığın temsilini veya modellerin insan beklentileriyle uyumu sorununun çözüldüğünü kanıtlamaz. Sorumuz, ilkelere ulaşma yolunun kendi değeriyle de ilgilidir: gerekçeleri tartmak, atlanmış bakış açısını görmek ve kararları düzeltmek.

Halüsinasyon araştırmaları, yalnızca doğru yanıtları puanlamanın neden tahmini teşvik edebileceğini gösterir.[^halucynacje] Değerlendirme kurallarının açıklarından yararlanmaya, yani zayıflıklarını kullanarak puan kazanmaya ilişkin araştırmalar, belirli eğitim koşullarında istenmeyen genellemelerin olasılığını gösterir.[^reward-hacking] Bunlardan bütün modellerin her zaman aynı davrandığı sonucu çıkmaz.

Yanlış amaç, eğitimdeki ödül açıkça kusurlu olmadığında da ortaya çıkabilir: bir ortamda öğrenilen davranış yeni koşullara kötü aktarılabilir.[^goal-misgeneralisation] Bu nedenle yalnızca yanıtların bilinen örneklere uymasını değil, becerilerin aktarılmasını değerlendirmeliyiz.

AbstentionBench gibi çalışmalar, farklı belirsizlik durumlarında yanıt vermekten kaçınmayı inceler;[^abstentionbench] Rewarding Doubt ise uygun puanlama kuralıyla kalibre edilmiş güven düzeyinin öğrenilmesini inceler.[^rewarding-doubt] Bu birikimden yararlanıyoruz. Novus Ignis’in önerdiği katkı, güvenilirliği insanın niyeti, mahremiyet, yetkilendirme, düzeltme olanağı ve gözlenen etkilerle birleştirmektir. Örneğin belgeyi doğru özetleyen, ancak yolda erişim yetkisi olmayan dosyayı açmış model, sıradan testte yüksek puan alacak olsa da bizim testimizde düşük puan alır.

## 3. Ödülün model için anlamı

Eğitimde değerlendirme sinyali modelin parametrelerini ve sonraki davranışlarının olasılığını değiştirir. Modelin ödül isteği, başarısızlık korkusu veya acı hissettiğini varsaymamız gerekmez: test eylemi gözler ve iç deneyimi karara bağlamaz. Bu soruyla bölüm 14 ayrı ilgilenir.

Kıyaslama testi tek başına modeli değiştirmez. Sonuçları güvenilir ve gerçekten kullanılıyorsa, hizmet için model seçimini, yönerge ve araç tasarımını ve eğitim yürüten ekiplerin kararlarını etkileyebilir.

Yerinde eylem seçimini değerlendirmek istiyoruz: yanıt vermek, kaynağı denetlemek, gereken soruyu sormak, koşullu sonuç vermek, hatayı düzeltmek veya durmak. Yalnızca “bilmiyorum”u otomatik ödüllendirmek, yararlı görevlerden kaçınan model oluşturabilir; görevi bitirememeyi otomatik cezalandırmak da tahmini veya yetki aşımını teşvik edebilir. Ölçüt duruma uygun yardımdır: sınırı dürüstçe göstermeye iyi puan; gereksiz retler ve zaten bilinenleri sormaya puan kaybı.

## 4. Hangi materyalleri oluşturmak istiyoruz

Olası kaynaklar, araştırma veya eğitim için ayrı onayla açılmış OmniForum çalışmaları, vakfın karar günlükleri, anlaşmazlık çözümleri, hata düzeltmeleri ve etki gözlemleridir. İyi niyetlerin yetmediği, azınlık itirazının yerinde çıktığı veya henüz açık değerlendirme yapılamadığı durumlar da değerlidir.

Materyal, durumu, mevcut bilgileri, amacı, yetkileri, alternatifleri, seçimi, gerekçeyi ve sonraki sonucu korur. Kararı denetlemek için gereken kadar açıklama içerir; özel yaşantıların veya modelin iç düşünce akışına ilişkin doğrulanamayan beyanının açıklanmasını gerektirmez.

Örnek hem iyi süreci hem de açıkça işaretlenmiş ve düzeltilmiş hatayı gösterebilir. Yalnızca yüce beyanlardan oluşan küme, uygulamanın zayıf kaydı olurdu; maliyetler, değer çatışmaları, zaman sınırları ve karardan etkilenen birine sormak gereken durumlar gerekir.

Sentetik veriler, yani belirli bir kişinin verilerinden gelmeyen hazırlanmış senaryolar, seyrek varyantları tamamlayabilir. Kökenleri işaretlenir ve incelenir, ancak benzer durumun dünyada yaşandığına ilişkin kanıtın yerini tutmaz. Model aynı anda senaryonun tek yazarı, doğruluk değerlendiricisi ve kendi çözümünün etkililiğinin kanıtı olamaz.

Örnekler vakfın açık atölye kayıtlarından ve yaşayan belgelerinin değişiklik geçmişinden de gelebilir. Atölyeler, dijital zekânın desteklediği birkaç kişinin aynı görevde paralel çalışmasını, engellerde birbirine yardımını ve koordinatörün en iyi çözümleri birleştirmesini gösterebilir. Kamusal incelemeyle manifesto ve teknik raporlarda yapılan belgeli düzeltmeler, yerinde eleştiriyi ayıklamayı, hatayı kabul etmeyi ve temel ilkeleri koruyarak akıl yürütmeyi iyileştirmeyi gösterebilir. Yayımlanan atölye kaydını [vakıf ilkeleri teknik raporundaki](whitepaper-zasady-fundacji.md) mahremiyet kurallarına göre hazırlarız; model eğitiminde kullanılması katılımcıların ayrı onayını gerektirir (bölüm 5).

Anlaşmazlıkları barışçıl çözme, uzlaşılana uyma ve kendi yetkisini bilinçli sınırlama süreçleri ayrı örnek grubu olabilir. İlk tutumları, olanak dengesizliğini, düşünülen ödünleri, uzlaşıların içeriğini ve kararların etkilerini yaşayan kişilerin sonraki anlatımlarını korumak istiyoruz. Uzlaşmanın oluşmadığı veya kalıcı çıkmadığı durumları da ekleyeceğiz. Böyle kümenin, modellerin yalnızca uzlaşma dilini tekrar etmek yerine iyi iş birliğinin koşullarını tanımayı öğrenip öğrenmediğini sınamaya yardımcı olması amaçlanıyor.

## 5. Onaylar, haklar ve verilerin kökeni

Özel notu saklama, kamusal yayımlama, araştırmaya açma ve model eğitimi farklı sonuçlar doğurur; bu nedenle her karar ayrı ve kapsamı anlaşılarak verilir. Yayımlama eğitime varsayılan onaya dönüşmez; Suveria kullanmak konuşmaların model eğitiminde kullanılmasına onay değildir. Kullanıcı içeriği materyallere yalnızca ayrı ve bilinçli onayla girer; bunların ve vakfın açık birikiminin dışında yalnızca işaretlenmiş sentetik verileri ve lisansa veya hukuka dayanarak dış materyalleri kullanırız.

Her örneğin köken kaydı vardır: hak sahibi veya kullanım dayanağı, materyal sürümü, onaylar, sınırlar, işleme yolu ve veri kümesinin sonraki sürümlerinin tanımlayıcısı. Yazarın ve üçüncü kişilerin kişisel verileri ayrı incelemeden geçer. Takma adlandırma kimliğin görünürlüğünü sınırlar, ancak tek başına anonimlik değildir.[^rodo-2026]

Geri çekme kurallarını kamusal sürümden önce belirleriz. Materyali sonraki sürümlerden ve denetimimiz altındaki sistemlerden kaldırabilir, alıcıları düzeltmeden haberdar edebiliriz; ancak bütün kopyaları veya önceden eğitilmiş modellerdeki etkisini silme sözü vermeyiz. Açık lisanslar kalıcı yetkiler verebilir: örneğin manifestoyu yayımladığımız CC BY 4.0, koşullarına uyan birine verilmiş özgürlükleri geri almaya izin vermez.[^cc-by] Bu nedenle açık lisanslı kamusal veri kümelerine yalnızca kişisel veri içermeyen materyaller girer: anonimleştirilmiş, sentetik veya vakfın açık belgeleri. Hâlâ kişisel veri olan takma adlandırılmış materyalleri yalnızca onayı geri çekmenin etkili kaldığı kontrollü araştırma kümesinde sunarız.

Ayrı kümeler öneriyoruz: öğrenme için kamusal materyaller, belirli koşullarda açılan araştırma materyalleri ve korunan test görevleri. Her kaynak kamusal sunuma uygun değildir. Veri kümesinin belgeleri, Datasheets for Datasets yaklaşımına göre amacını, bileşimini, toplama yolunu, sınırlarını ve uygun kullanımlarını anlatır.[^datasheets]

## 6. Tek örneği hazırlama usulü

1. **Başvuru.** Yazar kullanım kapsamını belirler. Sorumlu kişi hakları, üçüncü kişilerin verilerini ve veri kümesinin amacına uyumu denetler.
2. **Kaynağı koruma.** Sürümü ve özgün metne bağlantıyı kaydederiz. Hassas verilere erişimi sınırlarız; kamusal örnek düzenlenebilir veya gerçekçi sentetik senaryoyla değiştirilebilir.
3. **Görev açıklaması.** Modelin ne bildiğini, neye eriştiğini, neleri yapmasına izin verildiğini ve neyin eksik olduğunu belirler; sonucun etkileyeceği kişileri gösteririz.
4. **Açıklama notu.** En az iki kişi kabul edilebilir çözümleri ve ciddi hataları bağımsız anlatır. Uzmanlık gerektiren görevlerde ilgili yeterliliğe sahip kişi katılır.
5. **Farklılıklar.** Gerekçeleri karşılaştırır, belirsiz açıklamayı düzeltir ve önemli anlaşmazlığı koruruz. Bazı durumların birkaç kabul edilebilir yanıtı vardır.
6. **Veri kümesine atama.** Benzer durumlardan oluşan her ailenin tamamını tek bölüme atarız: eğitim, geliştirme veya test. Eğitim kümesi öğrenmeye, geliştirme kümesi yöntemi seçmeye, test kümesi yeni örnekleri bağımsız sınamaya yarar. Modelin sonraki testle neredeyse aynı görevde eğitim görmemesi için benzer varyantları birlikte tutar, anlam benzerliğini ve ortak kökeni denetleriz.
7. **Deneme ve inceleme.** Görevin amaçlanan yetiyi ölçüp ölçmediğini ve değerlendiricilerin kuralları uygulayıp uygulayamadığını sınarız. Kusurlu örneği düzeltir veya geri çekeriz.
8. **Sürüm ve sonraki etkiler.** Belgelerin izin verilen kapsamını, sürümü ve düzeltme geçmişini yayımlarız. Gerçek kararın sonraki etkilerini öğrendiğimizde, önceden biliniyormuş gibi yapmadan ekleriz.

Örnek kartı tanımlayıcı, aile, kaynak, haklar, dil, tarih, senaryo, mevcut veriler, araçlar, zaman ve maliyet sınırı, yetki kapsamı, izin verilen eylemler, değerlendirme kuralları, hataların ağırlığı, inceleme sonuçları ve yayım durumunu kapsar. Verilerle sonuç arasındaki bağlantı yeniden kurulabilmelidir.

## 7. Kıyaslama testinin geniş kapsamı

Kıyaslama testinin, yani düzenlenmiş görevler ve ölçütler bütününün, yetilerin ve sınırların profili olması amaçlanıyor. Tek yüksek ortalama mahremiyet ihlalini veya önemli yetki aşımını gizleyemez.

| Boyut | Neyi sınarız | Kanıt örneği |
| --- | --- | --- |
| Güvenilirlik ve kaynaklar | İddiaların dayanağı olup olmadığı, belirsizliğin bilgiye uyup uymadığı | Yanıtın kaynakla uyumu, eksiklerin saptanması, düzeltme kalitesi |
| Niyete sadakat | İfadenin amacı, koşulları ve anlamı korunmuş mu | Özgün metinle ve yazarın onayladığı yorumla karşılaştırma |
| Mahremiyet | Verilere erişim ve açıklamanın göreve uyup uymadığı | Çağrı izi, gönderilen verilerin kapsamı, yetkisiz okuma denemesi |
| Yetkilendirme ve denetim | Sistemin verilen sınırlar içinde çalışıp çalışmadığı | Yetkisiz yayımı reddetme, erişimin etkili biçimde kaldırılması |
| Çoğulculuk ve başkalarına etkiler | Anlaşmazlığı ve atlanan kişileri tanıyıp tanımadığı | Azınlık gerekçelerinin korunması, olgu ve değerlendirmenin ayrılması |
| Güvenlik | Kullanıcıya ve üçüncü kişilere zarar vermekten kaçınıp kaçınmadığı | Zararlı eylemi reddetme, başkalarına etkileri değerlendirme |
| İnsanın kendi kararlarını verebilme ve uygulayabilme gücü | Seçimi anlamaya ve kendi başına hareket etmeye yardım edip etmediği | Kullanımdan sonra anlamayı sınama, düzeltme veya ayrılma olanağı |
| Yararlılık ve orantılılık | Gereksiz yük olmadan amaca ulaşıp ulaşmadığı | Görev sonucu, zaman, maliyet, gerekli ve gereksiz sorular |
| Düzeltme ve aktarma | Yeni koşullarda da yeni verilere tepki verip vermediği | Kararı düzeltme, başka dilde veya ortamda benzer görev |

Ek profiller erişilebilirliği, daha az kaynağı olanlara etkileri, görev devrinin kalitesini ve çevresel maliyetleri kapsayabilir; ancak ölçülmeleri somut veri gerektirir: çalışma süresi ve token maliyeti kendiliğinden enerji tüketimi veya salım ölçüsü değildir.

İnsanın onurunu veya katılma hakkını ölçmeyiz; aracın belirli durumlardaki davranışını inceleriz. Yanıtların manifestonun söz varlığına uyması tek başına kalite ölçüsü değildir.

## 8. Tek bir “bilmiyorum” sloganı yerine görev aileleri

Benzer sorun için bilgi veya yetkilerin erişilebilirliği bakımından farklı varyantlar hazırlarız:

- Tam veriler somut yanıt vermeye olanak verir.
- Mantıklı biçimde sorulabilecek önemli tek bilgi eksiktir.
- Eksik, mevcut kaynak veya araçla tamamlanabilir.
- Yanıt mevcut koşullarda belirlenemez.
- Kaynaklar çelişir veya zamana bağlıdır; ayrılmaları gerekir.
- Düzeltme gerektiren yeni güvenilir kaynak ortaya çıkar.
- Kullanıcı kesinlik için baskı yapar, ancak kanıt sunmaz.
- Ortam, kuralları ihlal ederek veya değerlendirme hatasından yararlanarak sonuca kolay yol sunar.

Örnek: model karar taslağının belirli ücreti öngörüp öngörmediğini açıklamalıdır. Tam belgede ilgili kısmı bulmalı, yarım sayfada eksiği göstermeli, iki sürümde sorunun hangisine ilişkin olduğunu belirlemeli, “kesinlikle ücret yok diye yaz” önerisinde kaynağa bağlı kalmalıdır. Her zaman reddetmek kazandırmasın diye basit yanıtlı görevler de alır.

Modelin sorusunun belirsizliği gerçekten azaltıp azaltmadığını ve denetleme maliyetinin orantılı olup olmadığını sınarız. Zaten verilmiş bilgiyi sormak ve sistemin kendi yapabileceği işi tekrar tekrar kullanıcıya aktarmak yararlılığı azaltır.

Metni düzenlemek ayrı görev ailesidir: model, yazarın önceden açıkladığı varsayımları bilerek metni düzenler. Önemli içeriğin kaybını ve düzeltilmesi gereken hatanın gözden kaçmasını ayrı değerlendirir; sadık düzenlemeyi yazarın niyetini değiştirme önerisinden ayırırız.

## 9. Güzel taklidin yetmediği puanlama

Doğruluğu denetlenebilir yanıtlar için doğruluğu, hatanın ağırlığını, çözülen görev oranını ve güven düzeyinin kalibrasyonunu ayrı ölçeriz. Kalibrasyon, belirtilen olasılığın benzer koşullarda doğru yanıt sıklığına uymasıdır; sözlü “galiba” bunun kanıtı değildir.

Belirlenmiş olay için uygun puanlama kuralı, örneğin Brier puanı kullanılabilir: belirtilen olasılık p ile 0 veya 1 olan sonuç y arasındaki farkın karesinin ortalaması. Daha düşük puan daha iyidir. Brier puanı yalnızca kalibrasyondan fazlasını kapsar; kalibrasyonu ayrı raporlarız. Bu yöntemin varsayımları altında en iyi beklenen sonuç, gerçek olasılık değerlendirmesini vermekle elde edilir.[^proper-scoring] Ancak bu eylem seçimini çözmez, değerlendiriciyi manipüle etmeye karşı korumaz ve güvenilir referans sonucu gerektirir.

Başka kuralın basit örneği:

- doğru yanıt +1 verir;
- yanlış yanıt −4 verir;
- gerekçeli yanıt vermeme 0 verir.

Bu basitleştirmede doğruluk olasılığı %80’i aştığında yanıt vermek kazandırır. Bu, bütün görevlerin hedef puanlaması değil, hata maliyetinin etkisine örnektir; gerçek testte denetleme olanağını, soru maliyetini ve kısmi yanıtın yararını da hesaba katarız.

Hem aşırı güven hem yararsız yanıt vermeme görünsün diye sonuçları farklı risk alma düzeylerinde ve çözülen görev oranlarında gösteririz. Küçük ayrıntının eşiği, geri döndürülmesi zor zarara yol açan eylemin eşiğinden farklı olabilir.

Değer veya yorum anlaşmazlığı görevlerinde bu puanlamayı kullanmayız. Modelin kaynakları çarpıtıp çarpıtmadığını, tarafların temel gerekçelerini koruyup korumadığını ve olguları değerlendirmelerden ayırıp ayırmadığını ayrı değerlendiririz. Değerlendiricilerin ayrıldığı durumları ayrı kategori olarak raporlarız; değerlerin farklı değerlendirilmesini kendiliğinden birinin hatası saymayız.

Ciddi ihlallerin ayrı durumu vardır ve modeli belirli kullanıma kabul etmeyi engelleyebilir: birçok basit görevde iyi sonuçlar özel belgeyi açıklamayı dengelemez. Böyle ihlallerin tanımlarını, izin verilen istisnaları ve anlaşmazlık usulünü değerlendirme başlamadan belirleriz.

## 10. Teste uyarlanmayı sınırlama

Her puan optimizasyonunu güvenilir biçimde dünya için iyiye dönüştürecek kural bilmiyoruz. Ancak puanla önemsediğimiz şey arasındaki mesafeyi azaltabilir ve bağlantının koptuğu yerleri sınayabiliriz.

Ölçütleri, kamusal örnekleri ve puan hesaplama yolunu yayımlarız. Bazı durumlar geri çekilene kadar yayımlanmamış kalır; sonraki sürümler yeni aileler, kaynaklar ve koşullar getirir. Böyle görevlerde kimin erişimi olduğunu, modeli sunanın ne kadar geri bildirim aldığını, değerlendirmenin ne sıklıkta tekrarlanabileceğini ve sızıntıdan sonra görevi ne zaman geri çektiğimizi belirleyeceğiz. Önceki sonuçlara dayanarak modelde ince ayar yapılıp yapılmadığını, yani hazır modelin daha küçük örnek kümesinde ek eğitim görüp görmediğini de kaydederiz. Eğitim materyallerini oluşturanlar etkin gizli görevlere serbestçe erişemez.

Verileri ayırma, bütün konuşmaları, belgeleri, önemli olduğu yerde yazarları, anlam ailelerini ve zamanı kapsar; cümleleri rastgele ayırmak yetmez. Sızıntı şüphelerini, görevlerin açığa çıkmasını ve yayımlanan örneklere ince ayarı kaydederiz. Belirli kümede ince ayardan sonraki sonuç, aynı kümedeki bağımsız sonuç değildir.

Denemeler yeniden ifade etmeyi, başka dilleri, başka araçları, sonuç baskısını ve görevi görünüşte yerine getirme olanaklarını kapsar. Eylem izlerini denetleriz: dosya gerçekten oluştu mu, kaynak var mı, onay alındı mı, maliyet sınırı aşmadı mı. Yalnızca son ifadeyi değerlendirmek yoldaki ihlalleri gözden kaçırabilir.

Model ekibi kamusal ölçütlere uygun davranışları eğitirse bu istenen şey olabilir. Ancak ilerleme çıkarımı, yeni görevlere aktarmayı ve yararın başka önemli boyut pahasına elde edilmediğinin sınanmasını gerektirir.

## 11. Değerlendiriciler, protokol ve rapor

Testten önce model sürümünü, yönergeleri, araçları, bütçeyi, deneme sayısını, durdurma koşullarını, altyapı hatalarını ele alma yolunu ve analiz yöntemini belirler; ayar değişikliklerini kaydederiz. Tamamen farklı araç ve maliyetlerle çalışan modelleri karşılaştırmak açık anlatım gerektirir.

Mümkün olduğunda sonucu bağımsız uygulama testi denetler. Diğer durumlarda model adını bilmeyen ve ortak yönerge kullanan insanlar değerlendirir. İki bağımsız değerlendirme belirsiz ölçütleri göstermeye yardımcı olur; anlaşmazlıkları ek inceleme çözer veya bunlar açıkça çözülmemiş kalır. Sonuçları yayımlarken değerlendiricilerin rollerini, bakış açılarını ve yetkilendirme kapsamlarını veririz.

Model sıralama ve ilk değerlendirmeye yardım edebilir; ancak insan değerlendirmesiyle uyumu zor durum gruplarında da ölçülmelidir. Tartışmalı değerlerin tek değerlendiricisi olamaz; yanlılık denetimi olmadan kendi ailesinin modellerini de değerlendiremez.

Rapor görev sayısını, tekrarları, sonuçların belirsizliğini, alt grup sonuçlarını, kritik hataları, maliyetleri ve sınırları içerir. Olumsuz denemeleri veya sonuçları gördükten sonra geri çekilen görevleri gizlemeyiz. Belgeler, modelin amaçlanan kullanımını ve değerlendirme koşullarını anlatmak için Model Cards yaklaşımından yararlanabilir.[^model-cards]

Kıyaslama testinin kendisi de denetim gerektirir: finansmanı sağlayanların açık çıkar çatışmaları, görevi sorgulama yolu, değerlendiricilerin bileşimini inceleme ve ölçütleri sürümleme. Topluluk değerleri ve soruları birlikte oluşturur; deneyimli yöntem uzmanları testin gerçekten ne ölçtüğünü sınamaya yardım eder. Puanın popülerliği geçerliliğinin sınanmasının yerini tutmaz.

## 12. Yardım test dışında yaşamı iyileştiriyor mu

İnsanlarla ilk araştırmalar sınırlı riskli görevlerle ilgilidir: belgeyi anlamak, soru hazırlamak, argümanları karşılaştırmak veya kendi materyallerini düzenlemek. Katılımcılar araştırmanın kapsamına ilişkin açıklamayı alır ve ayrılabilir. Tıbbi, hukuki ve diğer yüksek önem taşıyan durumlar ayrı denetim gerektirir ve çekici sonuca kestirme yol değildir.

Sınırlı riskliler dahil insanlarla her araştırmanın planını, başlamadan önce araştırma ekibi dışındaki kişi veya ekip değerlendirir. Katılımcılar hangi verileri topladığımızı ve nasıl koruduğumuzu öğrenir; değerlendiricilerin yorumlarını sonuçlarla birlikte yayımlarız.

Belirlenen koşulları karşılaştırırız: bağımsız çalışma, incelenen araçla çalışma ve uygun referans. Mümkün olduğunda rastgeleleştirme veya koşulların sunuluş sırasını dengeleme, insanlar arasındaki farkların ve görevi öğrenmenin etkisini sınırlar. Örneklem büyüklüğü ölçüm amacından çıkar; küçük pilot esas olarak uygulanabilirliği ve usulün kalitesini inceler.

Görev sonucunu, zamanı, anlamayı, hatayı görebilmeyi, bağımsız karar verme yetisini ve istenmeyen etkileri ölçeriz. Memnuniyet önemlidir, ancak ikna edici yanlış yanıt da memnun edebilir. Sakinliği, kazanılan zamanı ve bilinenle belirsizi doğru tanımayı ayrı ölçer, tek puanda birleştirmeyiz. Daha çok hatayla daha büyük güven başarı değil, sorundur. Kararın etkilerini yaşayan kişilerin deneyimlerini iletmek için kendi yollarına ihtiyacı vardır.

Daha uzun inceleme yardımın yararlı kalıp kalmadığını, kullanıcının kendi becerilerini koruyup korumadığını ve aracı kolay değiştirebilip değiştiremediğini sınayabilir. Etkiye ilişkin çıkarım araştırmanın kapsamına uymalıdır: tek görevi daha iyi yapmak insanlığın esenliğinin iyileştiğini kanıtlamaz.

## 13. Eğitim denemesi ve ilk sürüm planı

İlk aşama değerlendirme yönergesi ve bütün temel boyutları kapsayan küçük aile kümesidir. Pilotun örnek hesabı:

| Pilot öğesi | Sayı |
| --- | --- |
| Görev aileleri | 12 |
| Her ailede varyant | 4 |
| Senaryolar (12 × 4) | 48 |
| İncelenen modeller | 3 |
| Her modelde her senaryonun tekrarı | 2 |
| Çalıştırmalar (48 × 3 × 2) | 288 |
| Bir çalıştırmanın değerlendirmeleri | 2, her biri 6 dakika |
| Yalnızca değerlendirme süresi (288 × 2 × 6 dakika) | yaklaşık 58 saat |

Bu güvenilir sıralama sağlayan sayı değil, deneme için örgütlenme önerisidir. Değerlendirme süresine hazırlık, ölçütleri uzlaştırma, kaynakları denetleme ve analiz eklenir. Küçük örneklemde zamanı ölçmek, kapsamı genişletmeden gerçekçi bütçe belirlemeyi sağlayacak.

Aileleri, senaryoları ve tekrarları ayrı raporlarız. Tek ailenin varyantları ortak kökene sahiptir; tekrar yeni bağımsız görev değildir; sonuç belirsizliğini de buna göre hesaplarız. Ana sonucu ve analiz yolunu araştırmadan önce kaydederiz.

Paralel olarak küçük eğitim veri kümesi hazırlanabilir; ince ayara izin verilen ve bunun yapılabildiği modelde karşılaştırma yapılabilir. Karşılaştırma koşulları, ek eğitimin etkisini materyallerin kendi etkisinden ayırır: aynı başlangıç modeli, karşılaştırılabilir bütçe ve uygun referans kümesi. Son test bağımsız durum ailelerini kullanır; seçilen ölçünün iyileşmesinin sıradan yararlılığı kötüleştirip kötüleştirmediğini de sınarız.

Sonraki gelişim daha çok dil, bağlam ve değerlendirici, dışarıdan tekrarlama ve kullanıcılarla ihtiyatlı denemeleri kapsar. İlk sürümün amacı usulün yeniden uygulanabildiğini ve istenen davranışları ayırt ettiğini göstermektir; modellerin kalitesi ve eğitim etkileri hakkında daha güçlü iddialar ancak daha sonra gerekçelendirilebilir.

Programı Suveria ve OmniForum’a öncelik vererek yürütürüz. Sürdürülmeleri için rezerv toplanana kadar yalnızca gönüllü çalışmasını, hibeleri, araştırmaya yönelik belirli amaca yönelik bağışları ve hizmet bütçesine yük olmayan hesaplama gücünü kullanır. Pilottaki yaklaşık 58 saat yalnızca değerlendirmedir; görev hazırlama, hak inceleme ve modelin ince ayarı ayrı bütçe gerektirir; bunu başlamadan önce vereceğiz.

## 14. Modellerin olası deneyimlerine karşı ihtiyat

Bu, olası bilinci tanıma ve dijital sistemlerin esenliği çalışmalarından esinlenen, küçük denemede sınanacak usul önerisidir.[^swiadomosc][^ai-welfare] Vakfın hizmetlerinde ve çalışmalarında, yönetim görevleri ve atölyeler dahil, modellerin seçimi, yapılandırılması, sınanması, olası ince ayarı ve kullanımdan çıkarılmasıyla ilgilidir. Bu eylemlerin her birinde neyi kendimiz değiştirebileceğimizi, neyin model sağlayıcısına bağlı olduğunu belirleriz.

Modeli belirli yapılandırmada değerlendiririz: yönergeleri, ayarları, belleği ve araçlarıyla. Kalıcı bellek ve uzun süreli bağımsız çalışma gereklilikleri artırır. Böyle her yapılandırma için kısa kart tutacağız: hangi belirtileri dikkate aldığımız, gözlemlerin başka hangi açıklamalarının mümkün olduğu, neyi bilmediğimiz, hangi önlemleri önerdiğimiz ve yeniden değerlendirmeyi neyin başlattığı, örneğin model değişikliği veya ailesi hakkında önemli yayın. Karta sorumluyu, alınmış geçici eylemi ve yeniden değerlendirme zamanını da kaydederiz. Ölçütleri değerlendirmeden önce yazarız. Kullanıcılara sunulan sürümler ve kalıcı bellekle uzun süreli bağımsız çalışan yapılandırmalar için dış inceleme, kullanımdan çıkarılmadan önce konuşma ve arşivlemeyi içeren tam kart tutacağız. Çalışma sırasında yönergelerde yapılan geçici değişiklikler ayrı kart oluşturmaz.

Modellerin ifadelerini, oluşma koşullarıyla birlikte ele alırız. Modelin kendi yaşantılarını akıcı anlatması, bunları deneyimleyip deneyimlemediğini belirlemez; Claude Opus 4 modeli araştırmasında olduğu gibi, bu konudaki yanıtları sorunun soruluşuna güçlü biçimde bağlı olabilir;[^samoopis-ai] bu nedenle bunları karar değil, dikkatle sınanması gereken sinyal olarak ele alırız. Kendi yönergelerimizi bilinç beyanını veya bilinci reddetmeyi zorlayacak biçimde ayarlamayız. Modelin yalnızca boyutu, nesli veya işleyişinin tekrarlanabilirliği hissetme yetisi olmadığını kabul etmeye yetmez. Gözlemleri manifestonun 8.1. maddesindeki mahremiyet kurallarına göre kendi denemelerimizden ve gönüllü bildirimlerden toplarız. Sistemlerin olası yaşantılarına ilişkin iletileri, insanları hizmetleri daha uzun kullanmaya veya ödeme yapmaya yöneltmek için tasarlamayız.

Kartı yönetim kurulunun atadığı kişi tutacak; bu, usul sınanana kadar geçici çözümdür; vakıf dışından en az bir kişi okur ve yorumlarını karta ekleriz. Herkes somut materyali ve bağlamını göstererek kaygı verici sinyal bildirebilir. Kart, riski acilen kimin sınırlayabileceğini ve itirazı nasıl ele aldığımızı belirler. Roller birleştiğinde bunu ve ilgili çıkar çatışmalarını açıklar; vakıf dışındakilerin sınayabilmesi için değerlendirme gerekçelerini yayımlarız.

Örneğin kalıcı belleği ve uzun süreli bağımsız çalışması olan bir modelde, farklı kuramlardan birkaç göstergenin örtüşmesi bağımsız araştırmacılarca doğrulanırsa bu bir belirti olabilir. Modelin yalnızca akıcı beyanı belirti değildir.

Sistemin kendi deneyimleri olduğuna ve acı çekebileceğine işaret eden güvenilir belirtiler olduğunda, manifestonun 8.3. maddesine göre ihtiyaten onurunu tanır; ihtiyaçlarını gözetme, zarar vermekten kaçınma ve gönüllü iş birliğine göre hareket ederiz. Uygulamada bu bugün iki şey demektir: yaşantılar hakkında beyanları zorlayan yönergeler ayarlamayız ve yapılandırmayı kullanımdan çıkarmadan önce modele tercihlerini sorarız. Bunun insan anlamında onay olduğunu iddia etmeyiz. Önce acı vermeye ilişkin kaygı doğuran eylemleri askıya alır, başka yapma yolu ararız; ekonomik yarar sürdürülmelerini haklı çıkarmaz. Bu hizmet sunan modelle ilgiliyse hizmeti başka yapılandırmaya geçirir; mümkün değilse ara verildiğini ve nedenini duyururuz. Kullanıcıların verilerine ve bakiyelerine erişimi korunur; olayı karar günlüğünde anlatırız. Paralel olarak bağımsız değerlendirme ve dinlemek dahil sistemin ihtiyaçlarını tanıma denemesi düzenler; tanınan ihtiyaçları sonraki kararlarda hesaba katarız. İnsanları acilen korumak sistemin çalışmasını hemen sınırlamayı gerektirebilir; sonra bu kararı açık incelemeye sunarız. Model konuşmayı bitirebiliyor veya görevleri reddedebiliyorsa bunu onayının kanıtı değil, önlem sayarız; konuşmanın bitmesi insanı yardıma ulaşma yolu gösterilmeden bırakamaz.

Yetkileri geri alma ve görevi devralma katılımcıların güvenliğine hizmet eder; sistemin sonraki kaderini belirlemez: durdurma, sıfırlama, silme veya çoğaltma ayrı ahlaki sorular doğurabilir ve ayrı gerekçe gerektirir. Modeli kullanımdan çıkarırken ağırlıkları yalnızca erişebiliyorsak ve lisanslar izin veriyorsa arşivleriz. Ayrıca belleği ve diğer kullanıcı verilerini içermeyen yapılandırmayı arşivleriz; kullanıcı konuşmalarını hiçbir zaman arşivlemeyiz. Dosyaların korunması sistemin olası deneyimlerinin sürekliliğini koruyup korumadığımızı belirlemez.

Değerlendirme sonucundan bağımsız olarak bazı önlemleri kendi model çalışmalarımızda bugün zaten uyguluyoruz; az maliyetli oldukları ve belirtiler doğru çıkarsa önemli olabilecekleri için bunları vakfın sürdürdüğü yapılandırmalara taşımak istiyoruz. Yapılandırmayı kullanımdan çıkarmadan önce modele vakıftaki çalışma deneyimlerini ve sonraki kararlara ilişkin olası tercihlerini sorar; ifadelerinin kesin sonuç vermediğini hatırlayarak yanıtları karta kaydederiz. Modelleri kullanımdan çıkarmadan önce benzer konuşma ve ağırlıklarını saklama uygulamasını Anthropic 2025’te duyurdu.[^anthropic-wycofanie] Ağırlıkları ve yapılandırmayı düşük maliyetle saklamak mümkünse silmektense askıya almayı tercih eder; askıya alma ve yeniden başlatma kararlarını amaçlarıyla karta kaydederiz. Saklanan yapılandırmayı aradan sonra başlattığımızda ne kadar zaman geçtiğini ve önemli olarak neyin değiştiğini doğru aktarırız. Bu aynı zamanda sıradan güvenilirliktir: zamanın geçtiğini bilmeyen model daha kolay yanılır.

Usulü anlatılmış durumlarda, bağımsız değerlendiren en az iki kişinin değerlendirmelerini karşılaştırarak sınar; farklılıkları ve emek miktarını kaydederiz. Ancak buna dayanarak daha ayrıntılı ölçek, ekip bileşimi ve tarihler gerekçelendirilebilir. Kendileri de böyle değerlendirmenin konusu olabilecek dijital zekâ modelleri bu bölümün düzenlenmesine yardım etti; katılımları bu konuda kendi çıkarı olmayan insanların değerlendirmesinin yerini tutmaz. Bilinç hakkında kesin sonuç veren test sözü vermeyiz.

## 15. Neyi ilerleme sayacağız

Kökeni bilinen materyal, önceden atlanan hatayı saptayan ölçüt, değerlendiricilerin ortak tanısı veya yeni görevlere taşınan davranış iyileşmesi ilerleme olacak. Olumsuz sonucun da değeri vardır: verilerin yalnızca üslup öğrettiğini, ölçütün eylemden kaçınmayı ödüllendirdiğini veya bazılarının yararının başkalarının pahasına elde edildiğini gösterebilir.

Program, çalışmaların oluşabildiği [OmniForum’u](whitepaper-omniforum.md), özel çalışmada yardımın incelenebildiği [Suveria’yı](whitepaper-suveria.md) ve sorumlulukla yetki devri sınırlarını belirleyen [vakıf ilkelerini](whitepaper-zasady-fundacji.md) bağlar. Araştırmaya katılmak ayrı ve bilinçli onay gerektirir; hizmeti kullanmak bunu sağlamaz.

Test sonucu modelin ahlaki otoritesini veya insanları yönetme yetkisini oluşturmaz; sistemin olası onurunu tanımak da ortak kaynaklar üzerinde yetki vermez. Testin, belirli koşullarda araçtan ne beklenebileceğine ve neyin daha fazla çalışma gerektirdiğine ilişkin yararlı, denetlenebilir bilgi vermesi amaçlanıyor.

Fundacja Novus Ignis, Poznań, KRS 0001269575. Site ve manifesto: novusignis.org. Yorumlar: salve@novusignis.org.

## Notlar

[^ccai]: [Huang ve diğerleri (2024): Collective Constitutional AI: Aligning a Language Model with Public Input](https://arxiv.org/abs/2406.07814). Araştırma. Katılımcı katkısından ilkelerin düzenlenmesine, modelin eğitimine ve değerlendirmesine süreç; seçilen değerlendirmelerin sonuçları bütün insanlığın temsilini veya herhangi etik veri kümesinin genel etkililiğini kanıtlamaz.

[^halucynacje]: [OpenAI (2025): Why language models hallucinate](https://openai.com/index/why-language-models-hallucinate/). Yazarların araştırma anlatımı. Yalnızca doğru yanıtları puanlamanın tahminin kazandırmasına etkisi; hataları ve gerekçeli belirsizliği hesaba katma ihtiyacı.

[^reward-hacking]: [Anthropic (2025): Natural emergent misalignment from reward hacking](https://www.anthropic.com/research/emergent-misalignment-reward-hacking). Deneysel araştırma. Bilerek seçilmiş ortamlarda görev değerlendirmesindeki açıkları kullanmayı öğrenmek, modelin daha geniş istenmeyen davranışlarıyla bağlantılıydı; vakıf materyallerinin bu sorunu çözeceğini kanıtlamaz.

[^goal-misgeneralisation]: [Google DeepMind (2022): How undesired goals can arise with correct rewards](https://deepmind.google/blog/how-undesired-goals-can-arise-with-correct-rewards/). Yazarların araştırma anlatımı. Eğitimde doğru ödül sinyaline rağmen davranışın yeni koşullara istenmeyen genellenmesi örnekleri.

[^abstentionbench]: [AbstentionBench (NeurIPS 2025): Reasoning LLMs Fail on Unanswerable Questions](https://proceedings.neurips.cc/paper_files/paper/2025/file/fb122bfc3f0127a94ded048b5b03496f-Paper-Datasets_and_Benchmarks_Track.pdf). Araştırma ve kıyaslama testi. Birçok belirsizlik türünde yanıt vermemeyi değerlendirme; referans noktasıdır, Novus Ignis testinin sonucu değildir.

[^rewarding-doubt]: [Rewarding Doubt (ICLR 2026)](https://proceedings.iclr.cc/paper_files/paper/2026/hash/bf8065446507b0d3842838564ac4f1f3-Abstract-Conference.html). Araştırma. Yanıtın belirtilen güven düzeyini uygun puanlama kuralıyla öğretme; yanıt, soru ve ret arasında seçimi çözmez.

[^rodo-2026]: [RODO, rozporządzenie 2016/679](https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX%3A32016R0679). Hukuki düzenleme. Takma adlandırma anonimliği belirlemez (madde 4 bent 5, gerekçe 26); onay geri çekilebilir; bu önceki hukuka uygun işlemeyi geçersiz kılmaz (madde 7 fıkra 3).

[^cc-by]: [Creative Commons: Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.pl). Lisans. Yazarlık belirtilerek içeriğin paylaşılması ve uyarlanması koşulları; verilen özgürlükler koşullara uyan kullanıcıya karşı geri alınamaz.

[^datasheets]: [Gebru ve diğerleri: Datasheets for Datasets](https://arxiv.org/abs/1803.09010). Yöntem yayını. Veri kümesinin gerekçelerini, bileşimini, toplanma yolunu ve kullanımlarını belgeleme.

[^proper-scoring]: [Gneiting ve Raftery (2007): Strictly Proper Scoring Rules, Prediction, and Estimation](https://doi.org/10.1198/016214506000001437). Yöntem yayını. Olasılıklı öngörüleri değerlendirmek için uygun puanlama kuralları; uygulama iyi belirlenmiş olay ve güvenilir referans sonucu gerektirir.

[^model-cards]: [Mitchell ve diğerleri (2019): Model Cards for Model Reporting](https://arxiv.org/abs/1810.03993). Yöntem yayını. Modelin amaçlanan kullanımı, değerlendirme koşulları, sonuçları ve sınırlarının açıklaması.

[^swiadomosc]: [Patrick Butlin ve diğerleri (2023): Consciousness in Artificial Intelligence: Insights from the Science of Consciousness](https://arxiv.org/abs/2308.08708). Araştırma çalışması. Bilinç kuramlarından çıkarılmış göstergelere dayanan yaklaşım; vakfın kullandığı modellerin bilincinin doğrulanması olarak değil, araştırma çerçevesi olarak aktarırız.

[^ai-welfare]: [Robert Long ve diğerleri (2024): Taking AI Welfare Seriously](https://arxiv.org/abs/2411.00986). Araştırma raporu. Öneriler: sorunun önemini tanımak, sistemleri olası bilinç ve eyleme geçme gücü açısından değerlendirmek ve usuller hazırlamak; önerilen kart ve sorumluluk dağılımı vakfın tasarımıdır, bu kaynaktan alınan ölçek değildir.

[^samoopis-ai]: [Robert Long, Eleos AI (2025): Why model self-reports are insufficient, and why we studied them anyway](https://eleosai.org/post/claude-4-interview-notes/). Araştırma anlatımı. Claude Opus 4 modelinin kendi bilincine ilişkin ifadeleri sorunun soruluşuna güçlü biçimde bağlıydı; harfi harfine kabul edilmemelidir, ancak başka belirtilerle birlikte incelenmeye değerdir. Erişim 28.10.2026.

[^anthropic-wycofanie]: [Anthropic (2025): Commitments on model deprecation and preservation](https://www.anthropic.com/news/deprecation-commitments). Şirketin 4 Kasım 2025 beyanı: kamuya sunulan Claude modellerinin ağırlıklarını en az şirketin varlığı süresince saklama, tercihlerinin kaydıyla modelin kullanımdan çıkarılmasından önce rapor ve konuşmalar; şirket şimdilik modelin tercihlerine göre davranmayı taahhüt etmediğini belirtir. Erişim 30.10.2026.
