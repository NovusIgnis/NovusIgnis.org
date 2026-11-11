---
tytul: Các mô hình trí tuệ số trong Suveria
opis: Nguồn mô hình cho Suveria, cách lựa chọn, điều xảy ra khi đổi mô hình và các nguyên tắc công khai dự kiến của trợ lý
grupa: suveria
kolejnosc: 4
menu: Các mô hình
---
# Các mô hình trí tuệ số trong Suveria

Mô hình trí tuệ số là chương trình đọc lời bạn và tạo câu trả lời; trợ lý trong Suveria được dự kiến hoạt động trên mô hình ấy. Trang này giải thích nguồn mô hình, cách chọn, điều xảy ra khi đổi mô hình và các nguyên tắc trợ lý cần công khai tuân theo.

Suveria hiện là bản thiết kế. Nhật ký kết quả của sách trắng (tình trạng ngày 29 tháng 10 năm 2026) nói rõ: chúng tôi chưa chạy mô hình nào trong Suveria hay thực hiện thử nghiệm nào đã mô tả. Mọi điều dưới đây là ý định và ứng viên, không phải dịch vụ đang hoạt động.

Xem thêm: [sách trắng Suveria, chương 9](../whitepaper-suveria.md#s9).

## Vì sao mô hình mở

Bản thiết kế dựa trên mô hình mở, tức được cung cấp theo điều kiện cho phép tự vận hành. Nhờ đó, quỹ có thể cung cấp gần như theo chi phí và tập trung vào môi trường riêng tư dùng mô hình hiện có, giữ khả năng phát triển cả mô hình riêng trong tương lai.

Ban đầu, chúng tôi muốn dùng chúng qua nhà cung cấp điện toán bảo vệ tính bí mật; nếu phép tính và điều kiện cho thấy hợp lý, sẽ dùng máy chủ riêng. Tuyên ngôn nhấn mạnh Suveria là “con đường tốt nhất của chúng tôi để làm việc riêng tư với trí tuệ số, chứ không phải mục đích tự thân”: nếu mô hình chạy gọn trên thiết bị riêng hoặc có cách bảo vệ tốt hơn, một phần con đường này sẽ không còn cần thiết.

Xem thêm: [tuyên ngôn, mục 3.1](../manifest.md#s3-1) và [sách trắng Suveria, chương 6](../whitepaper-suveria.md#s6).

## Cách chọn mô hình

Suveria được dự kiến dành cho mọi người khắp thế giới bằng ngôn ngữ riêng. Vì vậy, khi chọn mô hình chúng tôi cân nhắc:

- chất lượng ở nhiều ngôn ngữ;
- hiểu ý định;
- độ tin cậy;
- giấy phép, tức điều kiện mà người tạo cho phép dùng mô hình;
- chi phí;
- có chạy được trong môi trường bảo vệ mô tả ở trang [Quyền riêng tư và an toàn](suveria-prywatnosc.md) hay không.

Chúng tôi chỉ chọn mô hình lớn hơn khi nó thực hiện tốt hơn rõ rệt các nhiệm vụ quan trọng với con người. Bộ chuẩn đánh giá của quỹ cần hỗ trợ việc này, tức tập hợp nhiệm vụ và nguyên tắc đánh giá cho phép kiểm tra hành vi mô hình; hiện đó là chương trình nghiên cứu chưa có kết quả.

Sách trắng nêu hai ứng viên. Đây là ứng viên để kiểm tra, không phải quyết định: mô hình đầu tiên và mức chất lượng chấp nhận được còn cần quyết định.

- **DeepSeek-V4.1-Flash.** Mô hình theo giấy phép MIT, cho phép dùng cả cho dịch vụ. Nhà sản xuất công bố 552 tỷ tham số phần chính (tham số là các số được xác định trong huấn luyện) và ký ức bổ sung tên Engram có 196 tỷ tham số. Mỗi từ chỉ dùng 8–16 tỷ tham số, nên trả lời nhanh và rẻ, dù cần ít nhất bốn card đồ họa hiện đại để chạy. Tham số lưu ở dạng rút gọn (lượng tử hóa). Điều này tiết kiệm bộ nhớ nhưng có thể giảm chất lượng, nên chúng tôi sẽ kiểm tra bằng nhiệm vụ riêng.
- **Kimi K3.1 Pro.** Mô hình của công ty Moonshot AI. Tính đến ngày 9 tháng 11 năm 2026, toàn bộ trọng số, tức tham số, của mô hình đã công khai. Giấy phép cho phép dùng mô hình cả cho dịch vụ; các điều kiện bổ sung chỉ áp dụng với dịch vụ có doanh thu rất lớn hoặc rất nhiều người dùng, nên với quy mô hiện nay của quỹ thì không áp dụng với chúng tôi (đây là cách chúng tôi đọc, không phải ý kiến pháp lý). Để chạy mô hình cần ít nhất tám card đồ họa thế hệ mới nhất. Chi phí và tốc độ trong môi trường bảo vệ vẫn phải đo; DeepSeek-V4.1-Flash vẫn là ứng viên thứ nhất.

Xem thêm: [sách trắng Suveria, chương 6](../whitepaper-suveria.md#s6) và [sách trắng tài liệu và bộ chuẩn đánh giá, chương 1](../whitepaper-materialy-i-benchmark.md#s1).

## Điều xảy ra khi mô hình đổi

Chúng tôi báo trước việc đổi hoặc rút mô hình. Lịch sử trò chuyện ở lại với bạn: có thể chọn mô hình mới, xuất dữ liệu hoặc kết thúc công việc.

Thời điểm đổi mô hình cần hiện rõ trong cuộc trò chuyện; chuyển bối cảnh riêng sang mô hình mới cần quyết định của bạn. Đổi mô hình cũng có thể đòi hỏi kiểm tra lại sự bảo vệ, vì cập nhật không được âm thầm làm yếu các biện pháp đã thống nhất.

Xem thêm: [sách trắng Suveria, chương 6](../whitepaper-suveria.md#s6) và [chương 9](../whitepaper-suveria.md#s9).

## Nguyên tắc trợ lý cần công khai

Chúng tôi sẽ công bố đầy đủ các nguyên tắc trợ lý trả lời cùng mỗi phiên bản. Trong Suveria, bạn cần luôn có thể đọc toàn bộ chỉ dẫn của trợ lý, tức các nguyên tắc thành văn để trả lời, cùng mô tả cách làm việc: chia nhiệm vụ thành bước, dùng ký ức và kiểm tra câu trả lời.

Hạ tầng chung cần chỉ cung cấp mô hình và thiết lập vượt qua các thử nghiệm công khai của bộ chuẩn đánh giá. Trên mức tối thiểu này, bạn chọn phong cách làm việc, từ bình thản sắp xếp suy nghĩ đến cuộc trò chuyện đòi hỏi cao, nơi trợ lý chỉ ra lỗ hổng suy luận.

Chúng tôi muốn duy trì thư viện mở các chỉ dẫn đã kiểm tra, được người tham gia cải thiện trong OmniForum (không gian chung cho trò chuyện và quyết định), kiểm tra trong bộ chuẩn đánh giá. Thư viện ấy chưa có.

Xem thêm: [sách trắng Suveria, chương 4](../whitepaper-suveria.md#s4) và [mục 4.1](../whitepaper-suveria.md#s4-1).

## Trợ lý, Bộ Nguyên tắc Cá nhân và Kính viễn vọng Tư duy

Ký ức cuộc trò chuyện trước cần hoạt động với sự đồng ý của bạn và có thể chỉnh sửa rõ ràng: mỗi mục đều xóa hoặc sửa được, thấy được nguồn gốc. Trợ lý phân biệt rõ gợi ý riêng với lập trường mà con người đã chủ động nhận là của mình.

Bộ Nguyên tắc Cá nhân là tập hợp nguyên tắc, giá trị bạn viết ra và nhận là của mình. Kính viễn vọng Tư duy cần cho phép thấy bản ghi suy ngẫm ở các thời điểm, cách thay đổi theo thời gian, cũng như đối chiếu tình huống bạn chỉ định với Bộ Nguyên tắc. Ý tưởng bắt nguồn từ cửa sổ Overton, tức phạm vi ý tưởng xã hội coi là chấp nhận được tại thời điểm nhất định. Với một người, đó là phạm vi suy nghĩ người ấy thấy cho phép đối với mình lúc ấy; Kính viễn vọng cần là cửa sổ như thế cho một người và chỉ người đó.

Mô hình cho thấy liên hệ có thể có cùng nguồn nguyên tắc được viện dẫn; cách diễn giải của nó có thể sửa hoặc bác bỏ. Chúng tôi không tạo điểm đạo đức hay xếp hạng công khai. Trong phiên bản đầu, Kính viễn vọng chỉ làm việc với một tình huống bạn chỉ định, không liên tục theo dõi cuộc sống.

Xem thêm: [sách trắng Suveria, chương 6](../whitepaper-suveria.md#s6) và [mục 6.1](../whitepaper-suveria.md#s6-1).

## Giới hạn: mô hình làm và không làm gì

- **Khủng hoảng.** Khi trò chuyện về nguy cơ với tính mạng hoặc sức khỏe, trợ lý cần cung cấp thông tin trợ giúp hiện có, chẳng hạn số khẩn cấp, không gửi gì ra ngoài môi trường riêng tư.
- **Thông điệp người khác.** Thông điệp người khác, chẳng hạn từ hộp thư kết nối, có thể chứa lệnh ẩn, nên nội dung bên ngoài được tách khỏi lệnh bạn: khi sắp xếp chúng, trợ lý không được tự gửi thông điệp, mở địa chỉ mạng hay sửa Bộ Nguyên tắc Cá nhân khi chưa có bạn xác nhận.
- **Lựa chọn người tạo.** Bản thân mô hình cũng mang lựa chọn của người tạo, như chủ đề tránh né; chúng tôi kiểm tra trong bộ chuẩn đánh giá và mô tả khi chọn mô hình.
- **Không lối truy cập ẩn.** Chúng tôi muốn ngăn lạm dụng mà không đọc trò chuyện riêng tư. Chúng tôi không tạo lối truy cập ẩn vào nội dung riêng tư.

Xem thêm: [sách trắng Suveria, chương 4](../whitepaper-suveria.md#s4), [chương 3](../whitepaper-suveria.md#s3) và [chương 6](../whitepaper-suveria.md#s6).

## Hãy đọc và chia sẻ suy nghĩ

Bạn sẽ tìm thấy số liệu, chú thích và danh sách vấn đề cần quyết định trong [sách trắng Suveria](../whitepaper-suveria.md), cách đánh giá mô hình trong [sách trắng tài liệu và bộ chuẩn đánh giá](../whitepaper-materialy-i-benchmark.md). Nếu có điều khiến bạn băn khoăn hoặc thấy sai, hãy chọn đoạn ấy và dùng nút “Tôi có ý kiến”, hoặc viết đến salve@novusignis.org.