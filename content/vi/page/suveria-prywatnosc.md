---
tytul: Quyền riêng tư và an toàn Suveria
opis: Suveria dự kiến bảo vệ cuộc trò chuyện khỏi ai, thông điệp đi qua hệ thống thế nào, ai giữ khóa và cách kiểm tra sự bảo vệ
grupa: suveria
kolejnosc: 2
menu: Quyền riêng tư và an toàn
---
# Quyền riêng tư và an toàn Suveria

Trang này dành cho người muốn biết bảo vệ quyền riêng tư trong Suveria được dự kiến như thế nào trước khi giao cuộc trò chuyện cho nó. Trang đi sâu hơn [Suveria là gì](suveria.md), mỗi phần đều dẫn tới sách trắng.

Một nguyên tắc xuyên suốt: quyền riêng tư không thể dựa vào lòng tin đối với thiện chí của quỹ hay quản trị viên máy chủ, mà phải dựa vào biện pháp có thể kiểm tra độc lập về cách hoạt động. Tuyên ngôn diễn đạt: “Mỗi lời hứa về an toàn phải có bằng chứng trong mã và silicon, chứ không chỉ trong lời nói của chúng tôi.” Thiết bị riêng của bạn cần là nơi lưu cuộc trò chuyện chính; chúng tôi không tạo lối truy cập ẩn vào nội dung riêng tư.

Suveria hiện là bản thiết kế. Mọi điều dưới đây mô tả cách dự kiến hoạt động; chúng tôi chưa thực hiện thử nghiệm nào để xác nhận.

Xem thêm: [tuyên ngôn, mục 2.2](../manifest.md#s2-2) và [mục 3.1](../manifest.md#s3-1).

## Dự kiến bảo vệ khỏi ai và không khỏi ai

Chúng tôi bảo vệ nội dung cuộc trò chuyện, tệp, lịch sử và ký ức trợ lý, khóa (tức chuỗi ký tự bí mật mở dữ liệu mã hóa), dữ liệu thanh toán và siêu dữ liệu, tức thông tin về chính kết nối: thời gian, địa chỉ mạng và kích thước yêu cầu.

Môi trường bảo vệ tính bí mật là phần máy chủ cô lập bằng phần cứng mà ngay quản trị viên cũng không thể xem. Chứng thực cần xác nhận thực sự có như vậy: xác nhận được phần cứng ký về phần mềm đang chạy trên máy chủ và chế độ bảo vệ. API bảo vệ tính bí mật là môi trường như vậy ở nhà cung cấp bên ngoài mà ứng dụng kết nối (API là kết nối giữa các chương trình). Bảng mô tả cách hoạt động dự kiến, chưa kiểm tra bằng thử nghiệm:

| Dự kiến bảo vệ khỏi ai | Mô hình trên thiết bị của bạn | Môi trường bảo vệ tính bí mật trên máy chủ | API bảo vệ tính bí mật của nhà cung cấp bên ngoài |
| --- | --- | --- | --- |
| Quản trị viên nhà cung cấp | không áp dụng: xử lý trên thiết bị | dự kiến bảo vệ: cô lập phần cứng | tuyên bố nhà cung cấp, cần kiểm tra |
| Người quan sát mạng | không áp dụng khi không nối mạng; lưu lượng tích hợp cần đánh giá | bảo vệ một phần: nội dung mã hóa, siêu dữ liệu cần biện pháp riêng | bảo vệ một phần nếu khóa kết nối gắn với chứng thực |
| Người tiếp cận vật lý máy chủ | không áp dụng; quan trọng là truy cập thiết bị | không bảo vệ: nhà cung cấp có quyền vào trung tâm dữ liệu của họ; trên phần cứng riêng, có giám sát vật lý thấy được | không bảo vệ: nhà cung cấp có quyền tiếp cận |
| Quỹ Novus Ignis | không áp dụng: quỹ không tham gia xử lý | dự kiến bảo vệ: sự cô lập bao gồm cả chúng tôi, bạn giữ khóa lưu trữ | dự kiến bảo vệ nội dung: cổng, tức phần của chúng tôi tính phí yêu cầu, không xem nội dung; chúng tôi sẽ chỉ rõ điểm mã hóa kết thúc trước thí điểm |

Chú giải: “dự kiến bảo vệ” là sự bảo vệ có chủ đích; “bảo vệ một phần” bảo vệ nội dung nhưng không phải mọi thứ xung quanh; “không bảo vệ” nói rõ giới hạn; “tuyên bố nhà cung cấp, cần kiểm tra” nghĩa là chưa xác nhận bảo vệ cho đến khi tự kiểm chứng. Quản trị viên nhà cung cấp quản lý máy chủ chạy mô hình; người quan sát mạng thấy lưu lượng giữa thiết bị bạn và máy chủ nhưng nội dung được mã hóa khi truyền; người tiếp cận vật lý có thể mở vỏ máy chủ; quỹ là chúng tôi với tư cách bên vận hành dịch vụ.

Nên biết ngay ba giới hạn. Điện toán bảo vệ tính bí mật không sửa điện thoại hay máy tính nhiễm mã độc. Nó không bảo vệ khỏi mọi người có thể tiếp cận vật lý máy chủ: năm 2025, nhà nghiên cứu tạo thiết bị dưới một nghìn đô la cho phép làm giả chứng thực phần cứng khi tiếp cận vật lý máy chủ. Bảo vệ trên máy chủ cũng dựa vào khóa nhà sản xuất bộ xử lý, bên phải trung thực.

Xem thêm: [sách trắng Suveria, chương 2](../whitepaper-suveria.md#s2) và [mục 2.3](../whitepaper-suveria.md#s2-3).

## Thông điệp đi qua hệ thống thế nào

Suveria được dự kiến gồm ứng dụng trên thiết bị bạn, cổng (phần hệ thống của chúng tôi tính phí yêu cầu và giữ hạn mức chi tiêu), môi trường bảo vệ tính bí mật chứa mô hình, nơi lưu bản sao mã hóa và bên chuyển tiếp tùy chọn ẩn địa chỉ bạn.

Trong phương án đích, một thông điệp được dự kiến đi theo đường:

1. Ứng dụng lấy mô tả phiên bản được phê duyệt và kiểm tra chứng thực máy chủ.
2. So sánh chứng thực với chính sách công khai. Khóa mã hóa thông điệp phải gắn với chứng thực ấy.
3. Chỉ sau khi kiểm tra đạt mới tạo kết nối mã hóa. Sai khác chặn gửi dữ liệu; chuyển phương án cần lựa chọn có ý thức của bạn.
4. Môi trường xử lý yêu cầu với quyền mạng và công cụ có giới hạn, trả kết quả, xóa dữ liệu làm việc theo chính sách đã công bố.
5. Cuộc trò chuyện hoặc ký ức chỉ lưu trong phạm vi bạn chọn.

Chứng thực giúp xác định điều đã khởi chạy, nhưng tự nó không chứng minh mã an toàn; cần rà soát mã và khả năng kiểm tra độc lập. Trước thí điểm, chúng tôi sẽ cho thấy trong ứng dụng điểm kết thúc mã hóa do thiết bị bạn kiểm soát và cổng có thấy nội dung hay không.

Chúng tôi đặc biệt thận trọng khi bạn kết nối nguồn có thông điệp của người khác, như hộp thư. Thông điệp người khác có thể chứa lệnh ẩn cố khiến mô hình tiết lộ ký ức riêng. Vì thế, trợ lý không được tự gửi thông điệp, mở địa chỉ mạng hay sửa Bộ Nguyên tắc Cá nhân (tập hợp nguyên tắc và giá trị của bạn) khi chưa có xác nhận con người.

Khi khởi động dịch vụ, chúng tôi sẽ công bố danh mục mọi loại dữ liệu hoạt động dịch vụ được thu, cùng mục đích và thời gian lưu. Chúng tôi không thu dữ liệu ngoài danh mục.

Xem thêm: [sách trắng Suveria, chương 3](../whitepaper-suveria.md#s3).

## Khóa của bạn

Khóa vùng chứa riêng tư, tức tập dữ liệu mã hóa, nằm dưới quyền kiểm soát của bạn. Quỹ không lưu khóa hay phần khóa, nên không thể thay bạn khôi phục truy cập hoặc giao dữ liệu của bạn. Khôi phục tài khoản ở bên vận hành không mở khóa nội dung.

Mất mọi bản sao khóa có thể nghĩa là mất dữ liệu vĩnh viễn. Vì thế, chúng tôi cân nhắc các cách khôi phục có thể kết hợp: thiết bị thứ hai có truy cập, khóa ghi trên giấy hay trình quản lý mật khẩu, khóa phần cứng hoặc chia khóa cho vài người tin cậy mà không ai tự đọc được dữ liệu. Ban đầu chúng tôi khuyến nghị thiết bị thứ hai và khóa ghi giấy. Mỗi cơ chế được kiểm tra bằng thử khôi phục dữ liệu.

Xem thêm: [sách trắng Suveria, mục 2.2](../whitepaper-suveria.md#s2-2).

## Điều không thấy nhưng tiết lộ thông tin: nhịp truyền

Câu trả lời đến bạn bằng gói, tức từng phần dữ liệu. Mã hóa giấu nội dung nhưng không giấu độ dài hay nhịp. Đây là kênh kề: thông tin rò không từ nội dung mà từ cách truyền. Nghiên cứu năm 2024–2025 cho thấy người quan sát mạng có thể tái dựng chủ đề, đôi khi cả nội dung trò chuyện. Vì thế, trong chế độ bảo vệ tính bí mật, chúng tôi muốn gửi câu trả lời thành phần kích thước cố định, nhịp cố định; điều này tốn thêm chút độ trễ và năng lực truyền tải.

Xem thêm: [sách trắng Suveria, chương 3](../whitepaper-suveria.md#s3).

## Phiên bản có thể kiểm chứng

Lòng tin vào phần mềm không nên phụ thuộc một người hay riêng quỹ. Mỗi người có thể tự dựng ứng dụng từ mã công bố, kiểm tra kết quả giống hệt bản cài. Ít nhất hai bên độc lập ngoài quỹ cần dựng lại phiên bản và công khai xác nhận trùng khớp; đến khi tìm được, chúng tôi đánh dấu phiên bản chưa được bên thứ ba xác nhận.

Chúng tôi thiết kế bảo vệ đầy đủ cho ứng dụng cài đặt. Trên trình duyệt, mã kiểm tra máy chủ mỗi lần do bên vận hành cung cấp, nên bản trình duyệt sẽ nói rõ mức bảo vệ thấp hơn.

Xem thêm: [sách trắng Suveria, chương 3](../whitepaper-suveria.md#s3).

## Nhiều card đồ họa

Mô hình muốn chạy không vừa một card đồ họa, nên dữ liệu cũng đi giữa các card. Cần kiểm tra bảo vệ cả card lẫn kết nối giữa chúng; nhãn thương mại “secure” không thay thế được. Chúng tôi chỉ so sánh chào hàng nhà cung cấp sau thử nghiệm với ứng dụng riêng.

Xem thêm: [sách trắng Suveria, chương 5](../whitepaper-suveria.md#s5).

## Cách chúng tôi sẽ kiểm tra hoạt động

Thử nghiệm quan trọng nhất: nhóm có quyền bên vận hành ngoài môi trường bảo vệ tính bí mật (cổng, đĩa, mạng, nhật ký) cố đọc cuộc trò chuyện tài khoản thử nghiệm có giấu chuỗi ký tự bí mật. Nếu bất kỳ ai lấy được, kể cả chúng tôi, thử nghiệm không đạt.

Trước khi gọi phiên bản nào là bảo vệ tính bí mật, chúng tôi sẽ ghi bằng chứng, trong số các nội dung khác, về chứng thực đúng, từ chối gửi sau khi mã hoặc khóa bị đổi, không có nội dung trong nhật ký, cùng xóa và khôi phục. Kết quả, cả không đạt, vào nhật ký kết quả. Tình trạng ngày 29 tháng 10 năm 2026: chưa thực hiện thử nghiệm nào được mô tả.

Chúng tôi muốn thử nghiệm công khai. Nếu làm an toàn, mật mã học, hạ tầng hay ứng dụng, hoặc muốn xem xét bản thiết kế một cách phê bình, hãy viết đến salve@novusignis.org với tiêu đề “[Tham gia] Thử nghiệm Suveria”.

Xem thêm: [sách trắng Suveria, chương 9](../whitepaper-suveria.md#s9).

## Hãy đọc và chia sẻ suy nghĩ

Bạn sẽ tìm thấy đầy đủ các phương án, nguy cơ, biện pháp bảo vệ ứng dụng và danh sách vấn đề cần quyết định trong [sách trắng Suveria](../whitepaper-suveria.md). Nếu có điều khiến bạn băn khoăn hoặc thấy sai, hãy chọn đoạn trong tài liệu và dùng nút “Tôi có ý kiến”, hoặc viết đến salve@novusignis.org.