---
tytul: Chi phí Suveria
opis: Những khoản dự kiến trả trong Suveria, kết quả phép tính có ngày tháng và vì sao là ước tính thay vì bảng giá
grupa: suveria
kolejnosc: 3
menu: Chi phí bao nhiêu
---
# Chi phí Suveria

Trang này nói về tiền của bạn: dự kiến trả cho gì trong Suveria, cách tính hóa đơn và kết quả tính toán. Suveria hiện là bản thiết kế. Dịch vụ chưa có nên cũng chưa có giá. Số dưới đây từ phép tính ngày 29 tháng 10 năm 2026 (trừ hàng “Tổng” do chúng tôi tự cộng). Đây là phép tính trên giấy, không phải bảng giá.

Xem thêm: [sách trắng Suveria, chương 8](../whitepaper-suveria.md#s8).

## Bạn trả cho gì

Nguyên tắc đơn giản: trả cho những gì thực sự dùng, cùng phần chi phí chung tính công bằng (không quy được cho riêng một người, như an toàn hay kế toán), thấy rõ trả cho gì và tự đặt giới hạn chi tiêu. Phí chỉ trang trải chi phí. Mọi khoản hơn là hiến tặng tự nguyện, hiển thị riêng.

Hóa đơn có hai phần:

- **sử dụng thực tế** trong chu kỳ: tính toán, bộ nhớ, truyền dữ liệu;
- **phần chi phí cố định được phân bổ công khai**, giữ hạ tầng sẵn sàng: an toàn, thanh toán, kế toán, vận hành, hao mòn và thay thiết bị.

Chúng tôi muốn chia chi phí chung theo quy tắc công khai được chọn trong thí điểm: tỷ lệ sử dụng hoặc đều giữa tài khoản hoạt động. Chi phí nhiệm vụ ước tính cần luôn kiểm tra được; phần chi phí chung của bạn sẽ được thông báo trước chu kỳ thanh toán và luôn nằm trong hạn mức. Chúng tôi sẽ thông báo mỗi thay đổi giá cùng lý do và ảnh hưởng đến người dùng.

Xem thêm: [sách trắng về nguyên tắc của quỹ, chương 3](../whitepaper-zasady-fundacji.md#s3) và [mục 3.1](../whitepaper-zasady-fundacji.md#s3-1); [tuyên ngôn, mục 6.1](../manifest.md#s6-1).

## Kết quả phép tính

Chúng tôi giả định người dùng mẫu: 20 câu hỏi mỗi ngày, mỗi câu trả lời khoảng 600 token (token là mẩu văn bản, gần bằng từ ngắn), hằng ngày trong 30 ngày. Đây là mô hình tải để thử nghiệm, không phải dự báo. Giá từ bảng giá công khai, chưa thuế.

Phiên bản đầu nhiều khả năng dùng API bảo vệ tính bí mật (nếu thu đủ tiền, có thể chạy ngay trên máy chủ riêng thuê): mô hình trí tuệ số chạy ở nhà cung cấp bên ngoài, tuyên bố không đọc nội dung trò chuyện; chúng tôi sẽ kiểm tra tuyên bố ấy. Thêm vào là môi trường riêng tư: một hoặc hai máy bảo vệ tính bí mật với cổng, ký ức và tệp người dùng. Chi phí này cố định nên tỷ trọng lớn nhất khi nhóm nhỏ.

| Mỗi người mỗi tháng, nếu Suveria được dùng bởi (phép tính ngày 29.10.2026) | 30 người | 100 người | 1000 người |
| --- | --- | --- | --- |
| Chỉ tính toán qua API bảo vệ tính bí mật | 0,70–1,25 USD | 0,70–1,25 USD | 0,70–1,25 USD |
| Chi phí cố định môi trường riêng tư (170–340 USD mỗi tháng) | khoảng 6–11 USD | khoảng 1,70–3,40 USD | vài chục cent |

Đây là ước tính trên giấy: không gồm công sức con người, rà soát an toàn, thanh toán hay dự phòng sự cố; máy cỡ ấy có đủ hay không sẽ kiểm tra trong thí điểm. Chúng tôi muốn hiển thị riêng chi phí cố định và trả từ ngân sách hỗ trợ thí điểm, như khoản hiến tặng dành cho Suveria. Chúng tôi không giả định đã có tiền đó.

Xem thêm: [sách trắng Suveria, chương 7](../whitepaper-suveria.md#s7) và [mục 8.1](../whitepaper-suveria.md#s8-1); [sách trắng về nguyên tắc của quỹ, mục 3.1](../whitepaper-zasady-fundacji.md#s3-1).

## Từ 30 người đến toàn nhân loại

Cùng người dùng mẫu cho phép tính lượng việc mô hình sẽ làm với số người khác nhau. Trong bảng, “cao điểm” là giờ tải cao nhất trong ngày khi mọi người ở các múi giờ dùng Suveria (khoảng 1,51 × trung bình).

| Người hoạt động | Câu hỏi mỗi tháng | Văn bản trả lời lúc cao điểm |
| --- | ---: | ---: |
| 30 | 18.000 | 6,3 token mỗi giây |
| 100 | 60.000 | 20,9 token mỗi giây |
| 1000 | 600.000 | 209 token mỗi giây |
| 100 nghìn | 60 triệu | 20.921 token mỗi giây |
| 1 triệu | 600 triệu | 209.208 token mỗi giây |
| 1 tỷ | 600 tỷ | 209,2 triệu token mỗi giây |
| 10 tỷ | 6 nghìn tỷ | 2,09 tỷ token mỗi giây |

Bao nhiêu phần cứng? Sách trắng thực hiện thí nghiệm tư duy. Nếu mỗi người trong 10 tỷ người dùng Suveria như vậy, với hiệu suất đã đo của mô hình DeepSeek-V4.1-Flash, cần khoảng 2,25 triệu card B200 và khoảng 4 GW điện. Với một tỷ người, khoảng 225 nghìn card và 0,4 GW; với một triệu, khoảng 225 card. Để so sánh, đầu năm 2026, Epoch AI ước tính trên thế giới có hơn 15 triệu card tương đương H100 hoạt động cho trí tuệ số, cần hơn 10 GW điện. Đây là giản lược: người dùng mẫu tiết kiệm, còn công việc cường độ cao, mô hình lớn và hình ảnh cần nhiều lần hơn.

Chúng tôi không đưa chi phí mỗi người cho hàng triệu người: quy mô ấy sẽ làm đổi thiết bị, giá và cách duy trì dịch vụ, nên số như vậy chỉ là đoán. Phép tính ngày 29.10.2026 chỉ nói rằng theo giả định của chúng tôi, hạ tầng riêng có thể rẻ hơn API bảo vệ tính bí mật ở mức hơn mười nghìn đến vài chục nghìn người hoạt động.

Xem thêm: [sách trắng Suveria, chương 7](../whitepaper-suveria.md#s7).

## Vì sao tính bằng đô la

Chúng tôi sẽ đưa giá dịch vụ bằng đô la vì năng lực tính toán được mua bằng tiền ấy. Chúng tôi muốn nhận tiền cả bằng tiền tệ khác, theo tỷ giá trên hóa đơn. Sổ sách của quỹ được ghi bằng złoty.

Xem thêm: [sách trắng về nguyên tắc của quỹ, mục 3.1](../whitepaper-zasady-fundacji.md#s3-1).

## Trả trước, hoàn tiền, làm tròn

- **Trả trước.** Bạn nhập một khoản và đúng khoản đó vào số dư, bất kể cách thanh toán. Tiền trả trước cần ở tài khoản ngân hàng riêng; chúng tôi không dùng trang trải chi phí quỹ trước khi thực hiện dịch vụ.
- **Hạn mức.** Khi nộp tiền, bạn đặt mức chi tối đa. Hạn mức cần là ranh giới, không phải cảnh báo sau sự việc. Đây là yêu cầu phải xây dựng và kiểm tra, không phải chức năng đang hoạt động.
- **Hoàn tiền.** Số dư chưa dùng cần có thể lấy lại bất cứ lúc nào, theo định hướng bằng một nút; thời hạn hoàn, chi phí có thể có, khoản nộp tối thiểu và chi tiết khác sẽ do quy chế xác định. Sau khi bỏ tài khoản hoặc đóng dịch vụ, số dư tự động về cùng đường. Số dư không được nhận lại không vào ngân sách quỹ.
- **Làm tròn.** Khi tạo tài khoản, chúng tôi hỏi có muốn làm tròn từng hóa đơn lên đô la nguyên hoặc mức tương đương gần đó bằng tiền địa phương; chênh lệch vào ngân sách chung như hiến tặng. Chúng tôi hỏi thay vì chọn hộ; có thể đổi quyết định bất cứ lúc nào bằng một thiết lập.

Hóa đơn hiển thị riêng phí dịch vụ và khoản hiến tặng. Thời hạn hoàn, khoản nộp tối thiểu và chi tiết khác sẽ do quy chế xác định, được chuẩn bị trước khi nhận khoản trả trước đầu tiên.

Xem thêm: [sách trắng về nguyên tắc của quỹ, mục 3.2](../whitepaper-zasady-fundacji.md#s3-2) và [mục 3.3](../whitepaper-zasady-fundacji.md#s3-3); [sách trắng Suveria, mục 8.3](../whitepaper-suveria.md#s8-3).

## So với thuê bao thế nào

Giá thuê bao nền tảng thương mại thường gộp chi phí dùng với duy trì tài khoản miễn phí, tiếp thị, quản lý và lợi nhuận nhà đầu tư thành một khoản; người dùng không thấy tỷ trọng thành phần. Tuyên ngôn đặt giả thuyết rằng không có phụ phí ẩn ấy, ngay số người thường xuyên tương đối nhỏ, hạ tầng chung có thể đem nhiều năng lực tính toán và trí tuệ số hơn trên mỗi đô la so với dịch vụ khép kín, với quyền riêng tư dựa trên biện pháp kiểm chứng được.

Tình trạng giả thuyết ngày 29 tháng 10 năm 2026: phép tính đưa chúng tôi gần hơn nhưng chưa xác nhận. Xử lý với tính bí mật được tuyên bố đã có trong bảng giá công khai, nên nhóm nhỏ có thể bắt đầu theo chi phí; theo giả định của chúng tôi, hạ tầng riêng có thể rẻ hơn khi có hơn mười nghìn đến vài chục nghìn người hoạt động. Chúng tôi không cạnh tranh giá với gói 100–200 USD mà khi làm việc cường độ cao bằng tác nhân, cho giá trị tương đương hàng nghìn đô la theo giá niêm yết API. Chúng tôi đề xuất tính phí sử dụng thực tế với quyền riêng tư kiểm chứng được.

Xem thêm: [tuyên ngôn, mục 2.4](../manifest.md#s2-4); [sách trắng Suveria, mục 8.1](../whitepaper-suveria.md#s8-1).

## Điều sẽ thay đổi phép tính

Chúng tôi cập nhật phép tính mỗi khi giá thay đổi quan trọng và sau mỗi thử nghiệm, giữ phiên bản trước. Ba điều sẽ quyết định và được kiểm tra trong thử nghiệm:

- tính bí mật các dịch vụ có vượt kiểm chứng độc lập hay không;
- chất lượng mô hình sẵn có có đủ cho nhiệm vụ khiến mọi người đến Suveria hay không;
- hồ sơ lưu lượng thực tế là gì.

Chúng tôi muốn phát triển hạ tầng từng bước: trước hết API bảo vệ tính bí mật và môi trường riêng tư trong máy bảo vệ tính bí mật, sau đó thuê máy riêng bảo vệ tính bí mật, tiếp đến mua thiết bị đặt ở trung tâm dữ liệu bên ngoài; tương lai xa, nếu chứng tỏ ưu thế, là tòa nhà riêng. Mỗi bước có cơ sở từ dữ liệu đo và phiếu quyết định nêu đủ chi phí, rủi ro, điều kiện rút lui. Hiện mua máy chủ chỉ được tính như ước tính, không phải chào giá.

Xem thêm: [sách trắng Suveria, mục 8.1](../whitepaper-suveria.md#s8-1) và [mục 8.2](../whitepaper-suveria.md#s8-2).

## Hãy đọc và chia sẻ suy nghĩ

Phép tính đầy đủ với bảng phương án và nguồn giá ở [sách trắng Suveria](../whitepaper-suveria.md#s8), còn nguyên tắc hóa đơn, trả trước và hoàn tiền ở [sách trắng về nguyên tắc của quỹ](../whitepaper-zasady-fundacji.md#s3). Nếu thấy số liệu hay giả định không ổn, hãy chọn đoạn ấy trong tài liệu và dùng nút “Tôi có ý kiến”, hoặc viết đến salve@novusignis.org.