# Suveria: làm việc riêng tư với trí tuệ số

Phiên bản ngày 31 tháng 10 năm 2026. Tài liệu phát triển các nguyên tắc của tuyên ngôn về Suveria: cách chúng tôi muốn bảo vệ quyền riêng tư, cách làm việc với trí tuệ số được dự kiến vận hành, chi phí và cách kiểm tra. Kiến trúc được mô tả là bản thiết kế. Việc chỉ ra công nghệ hiện có hoặc tài liệu nhà cung cấp không có nghĩa là chúng tôi đã vận hành chúng trong Suveria. Kết quả thử nghiệm được bổ sung ở chương 9, luôn có ngày, phiên bản cấu hình và phạm vi đo.

*Bản dịch do trí tuệ số thực hiện dựa trên bản gốc tiếng Ba Lan ngày 31 tháng 10 năm 2026. Khi có khác biệt, văn bản tiếng Ba Lan có giá trị quyết định.*

## 1. Suveria là gì và được tạo ra để làm gì

Suveria được dự kiến là không gian riêng tư trên internet, nơi mỗi người trò chuyện với trí tuệ số, làm việc với tài liệu riêng và trở lại suy nghĩ trước đây, như ở nhà sau cánh cửa đóng. Quỹ Novus Ignis ở Poznań thiết kế không gian này cho mọi người ở mọi nơi trên thế giới; các giá trị của quỹ được mô tả trong [tuyên ngôn](manifest.md). Nó dựa trên mô hình trí tuệ số mở; chúng tôi muốn cung cấp phần mềm riêng như hàng hóa công cộng số với mã nguồn mở.

Suveria hình thành vì chúng ta giao ngày càng nhiều cho cuộc trò chuyện với trí tuệ số: câu hỏi về sức khỏe, quan hệ, công việc, tiền bạc và kế hoạch cuộc đời. Trong nhiều dịch vụ phổ biến, nội dung những cuộc trò chuyện ấy được gửi đến máy chủ của nhà cung cấp, nơi nhà cung cấp có thể đọc nội dung; việc bảo vệ nội dung phụ thuộc vào các quy tắc của họ và lòng tin dành cho họ. Chúng tôi muốn có thể nói về việc quan trọng nhất mà không lo sự thấu hiểu gần gũi đến vậy về mình một ngày sẽ bị khai thác để kiếm tiền hoặc gây ảnh hưởng. Chúng tôi cũng muốn mỗi người trả cho sử dụng thực tế, thấy rõ trả cho gì và tự đặt giới hạn chi tiêu.

Trong Suveria, chúng tôi muốn có thể:

- trò chuyện với trí tuệ số về việc cá nhân, nghề nghiệp, thấy nơi xử lý và ai có thể xem;
- làm việc với tài liệu, tệp riêng, lưu kết quả và chuyển nơi khác bằng định dạng mở;
- lưu trò chuyện, tệp và ký ức trợ lý chủ yếu trên thiết bị riêng, mã hóa bằng khóa vẫn do người dùng kiểm soát;
- với sự đồng ý của bản thân, dùng ký ức trò chuyện trước, trở lại lý do cũ của quyết định và xây Bộ Nguyên tắc Cá nhân (*Canon Personalis*), tức tập hợp nguyên tắc và giá trị riêng;
- chọn cách làm việc, từ mô hình trên thiết bị riêng đến môi trường bảo vệ tính bí mật trên máy chủ, có thông tin rõ mỗi cách bảo vệ khỏi gì;
- trả phí sử dụng thực tế, với hạn mức chi tiêu tự đặt;
- hoàn thiện ý riêng tư rồi chủ động đưa vào trò chuyện chung trong Omniforum.

Phiên bản đầu tiên hướng đến những người lựa chọn vì quyền riêng tư kiểm chứng được.

Chúng tôi muốn ngay ngày đầu trong Suveria đem cảm giác bình yên như ở nhà, trong xưởng riêng được sắp theo nhịp bản thân. Người dùng sẽ có thể kể trợ lý về việc và mục tiêu; chúng tôi cũng muốn cho phép chuyển vào Suveria ghi chép, kho lưu cuộc trò chuyện trước với dịch vụ trí tuệ số khác. Kho lưu cần tiếp tục được mã hóa, sắp xếp trên thiết bị người dùng; chỉ phần chọn cho câu hỏi hiện tại đến mô hình từ xa (chương 3).

Giá trị dịch vụ được đo bằng việc giúp đạt mục tiêu, giữ riêng tư và tự quyết định hay không. Điều kiện cần rõ, dễ tìm; người dùng cần kiểm soát chi tiêu, xuất tài liệu và rời đi được.

Quyền riêng tư đầy đủ, kể cả trước chúng tôi với tư cách người vận hành hạ tầng, là mục tiêu chi phối thiết kế. Bảo vệ cần dựa trên biện pháp kiểm tra độc lập được, không phải lòng tin đối với quỹ. Vì thế mỗi phiên bản mô tả cụ thể điều được bảo vệ, khỏi ai, trong điều kiện nào và lỗ hổng còn lại.

Điểm đầu là trò chuyện văn bản với một mô hình, làm việc với tài liệu chọn, có mức bảo vệ, hạn mức chi tiêu và xuất kết quả rõ ràng. Khả năng tiếp như ký ức, tìm kiếm, tích hợp, hành động có phạm vi quyền riêng. Một giao diện thuận tiện có thể nối nhiều chế độ nếu con người thấy dữ liệu đi đâu, nguyên tắc nào áp dụng trước khi gửi.

Phiên bản đầu dùng gì phụ thuộc tiền quỹ thu trước khởi động. Nhiều khả năng nhất là API bảo vệ tính bí mật của nhà cung cấp ngoài; dịch vụ ấy hiện có ở Mỹ, ban đầu tính bí mật là tuyên bố nhà cung cấp mà chúng tôi sẽ kiểm tra. Nếu đủ tiền thuê máy chủ riêng trong môi trường bảo vệ tính bí mật, phiên bản đầu có thể chạy ở đó ngay. Đến khi thử nghiệm chương 9 đạt, mỗi phương án đều được đánh dấu là bảo vệ được tuyên bố, không phải bảo vệ tính bí mật. Chương 2 mô tả bảo vệ đích. Trước thí điểm, chúng tôi sẽ nói rõ hệ quả với bảo vệ dữ liệu cá nhân người châu Âu.

Việc dùng Suveria không có nghĩa là đồng ý cho dùng các cuộc trò chuyện để huấn luyện mô hình. Nội dung của người dùng chỉ được đưa vào tài liệu nghiên cứu sau khi họ đồng ý riêng và hiểu rõ việc đó; những tài liệu còn lại đến từ thành quả công khai của Quỹ và các nguồn khác có căn cứ sử dụng rõ ràng, như [sách trắng về tài liệu và bộ chuẩn đánh giá](whitepaper-materialy-i-benchmark.md) mô tả.

Suveria bổ sung Omniforum, không gian chung trò chuyện, quyết định: một nơi là xưởng riêng, nơi kia diễn đàn công cộng. Tuyên ngôn quỹ mô tả giá trị nền tảng hai bản thiết kế. Tiếp theo lần lượt trình bày:

- bảo vệ gì, khỏi gì, dữ liệu và khóa ở đâu (chương 2);
- thông điệp đi từ thiết bị đến mô hình, cách kiểm tra (3);
- hạn chế lạm dụng không đọc trò chuyện riêng (4);
- tính toán nhiều card đồ họa vận hành thế nào (5);
- mô hình, ký ức, công cụ dự kiến (6);
- cần bao năng lực tính toán, từ 30 người đến toàn nhân loại (7);
- chi phí bao nhiêu trong phép tính có ngày tháng (8);
- cách kiểm tra lời hứa hoạt động: thử nghiệm nghiệm thu, nhật ký kết quả (9).

## 2. Bảo vệ gì và khỏi gì

Chúng tôi bảo vệ nội dung trò chuyện, tệp, lịch sử, ký ức, khóa, dữ liệu thanh toán và siêu dữ liệu, như thời gian kết nối, địa chỉ mạng, kích thước yêu cầu. Mỗi lĩnh vực cần biện pháp khác.

Bảng dưới cho thấy mỗi cách trong năm cách làm việc ở mục 2.3 bảo vệ khỏi ai. Bảo vệ ở các phương án máy chủ dựa vào chứng thực, tức xác nhận do phần cứng ký về phần mềm trên máy từ xa và chế độ bảo vệ. Các ô được điền dựa trên chương sau của tài liệu; “tuyên bố nhà cung cấp” nghĩa chưa xác nhận bảo vệ cho đến khi tự kiểm chứng.

| Khỏi ai | Mô hình cục bộ trên thiết bị không nối mạng | Mô hình cục bộ trên thiết bị nối mạng | Xử lý trong môi trường bảo vệ tính bí mật trên máy chủ | API bảo vệ tính bí mật của nhà cung cấp ngoài | API ngoài của nhà cung cấp mô hình |
| --- | --- | --- | --- | --- | --- |
| Quản trị viên nhà cung cấp | không áp dụng: xử lý trên thiết bị | không áp dụng với riêng mô hình; tích hợp phụ thuộc dịch vụ chọn | bảo vệ: cô lập phần cứng mà quản trị viên máy chủ không xem được | tuyên bố nhà cung cấp, cần kiểm tra | không bảo vệ: nhà cung cấp truy cập nội dung |
| Khách hàng khác cùng máy | không áp dụng | không áp dụng | bảo vệ: cô lập bao gồm khách hàng khác | tuyên bố nhà cung cấp, cần kiểm tra | phụ thuộc nhà cung cấp: phần mềm tách khách hàng, không cô lập phần cứng |
| Người quan sát mạng | không áp dụng: không lưu lượng mạng | bảo vệ một phần: lưu lượng mạng tích hợp cần đánh giá | bảo vệ một phần: nội dung mã hóa khi truyền; siêu dữ liệu (thời gian, địa chỉ, kích thước, nhịp gói) cần biện pháp riêng (chương 3) | bảo vệ một phần: như môi trường bảo vệ tính bí mật nếu khóa kết nối gắn chứng thực | bảo vệ một phần: nội dung mã hóa khi truyền, siêu dữ liệu như bên cạnh |
| Người tiếp cận vật lý máy chủ | không áp dụng với máy chủ; quan trọng là truy cập vật lý thiết bị | không áp dụng với máy chủ; quan trọng là truy cập vật lý thiết bị | không bảo vệ: nhà cung cấp có quyền vào trung tâm dữ liệu của họ; với thiết bị riêng, có giám sát vật lý thấy được | không bảo vệ: nhà cung cấp có quyền tiếp cận | không bảo vệ: nhà cung cấp vốn có truy cập nội dung |
| Quỹ Novus Ignis | không áp dụng: quỹ không tham gia xử lý | không áp dụng: quỹ không tham gia xử lý | bảo vệ: cô lập bao gồm cả chúng tôi với tư cách bên vận hành, người dùng giữ khóa lưu trữ | dự kiến bảo vệ nội dung: cổng tính phí yêu cầu không xem nội dung; sẽ chỉ rõ điểm mã hóa kết thúc trước thí điểm (chương 3) | dự kiến bảo vệ nội dung khỏi chúng tôi: tính phí không xem nội dung; nhà cung cấp thấy |
| Nhà sản xuất bộ xử lý | phụ thuộc lòng tin phần cứng thiết bị | phụ thuộc lòng tin phần cứng thiết bị | không bảo vệ: chứng thực dựa khóa nhà sản xuất, bên phải trung thực | không bảo vệ: như bên cạnh | không có ý nghĩa khi nhà cung cấp truy cập nội dung |

Điện toán bảo vệ tính bí mật đổi chi phí tấn công: thay vì truy cập từ xa của quản trị viên, cần can thiệp vật lý phần cứng.

Dưới đây mô tả cách phương án đích có môi trường bảo vệ tính bí mật riêng được dự kiến vận hành; bảng mục 2.3 cho thấy phương án khác khác nhau thế nào. Trong thực tế, tại từng đoạn đường thông điệp đi qua:

- **Trên thiết bị người dùng**, văn bản đọc được vì chính họ viết, đọc. Ứng dụng chỉ xin quyền cần, cập nhật và thận trọng với sao lưu bảo vệ nó. Chúng tôi không bảo vệ được nếu điện thoại, máy tính có phần mềm độc hại.
- **Trên đường đến máy chủ**, thông điệp mã hóa để chỉ nơi xử lý đã kiểm tra đọc được. Trước gửi, ứng dụng kiểm tra phía kia có chạy đúng phần mềm chúng tôi công bố không.
- **Trên máy chủ**, mô hình phải đọc nội dung để trả lời, nên làm trong môi trường phần cứng kín mà quản trị viên hay khách hàng khác không xem được. Chúng tôi kiểm tra cô lập có gồm bộ xử lý, card đồ họa, bộ nhớ, kết nối giữa chúng không.
- **Khi lưu**, lịch sử trò chuyện, ký ức trợ lý mã hóa bằng khóa người dùng giữ. Chúng tôi kiểm tra bản sao, khôi phục truy cập, xóa.
- **Khi vận hành dịch vụ**, thanh toán, chẩn đoán, báo lỗi hoạt động không có nội dung trò chuyện; mọi loại dữ liệu thu đều công khai (chương 3).
- **Với công cụ ngoài**, khi trợ lý cần làm ngoài Suveria, như tìm thông tin internet, chỉ gửi điều người dùng đồng ý và cho thấy gửi đâu.

Điện toán bảo vệ tính bí mật không sửa máy tính người dùng nhiễm mã độc. Cũng không bảo vệ khỏi mọi người tiếp cận vật lý máy chủ: năm 2025, nhà nghiên cứu cho thấy thiết bị nối bus bộ nhớ, từ linh kiện dưới một nghìn đô la, cho phép lấy khóa chứng thực trong giải pháp Intel, AMD, qua đó làm giả chứng thực cả điện toán bảo vệ tính bí mật NVIDIA; nhà sản xuất bộ xử lý coi tấn công ấy ngoài phạm vi bảo vệ.[^teefail] Còn phụ thuộc nhà sản xuất phần cứng, tính đúng mật mã, mã ứng dụng và cập nhật. Nhà cung cấp có thể từ chối dịch vụ cả khi không đọc nội dung được. Vì thế mô hình nguy cơ cần phân biệt xem nội dung, suy từ siêu dữ liệu, đổi hoạt động, ngắt dịch vụ; mỗi phương án chỉ ai phải trung thực để bảo vệ hoạt động.

Khi còn dùng trung tâm dữ liệu người khác, nhà cung cấp tiếp cận vật lý phần cứng và chúng tôi không kiểm tra được; mỗi phương án đều nêu. Với thiết bị riêng (bước 3–4 mục 8.2), chúng tôi muốn khiến truy cập này thấy được qua:

- danh mục thiết bị;
- kiểm soát vào;
- niêm phong hoa văn ngẫu nhiên và cảm biến mở vỏ;
- nhật ký công việc;
- camera của người quan sát độc lập, có hình cho thấy giá trị hiện tại từ bộ phát ngẫu nhiên công khai được khóa máy ký;
- tương lai xa hơn, phòng máy chủ ai cũng xem được.

Bảo trì, thay linh kiện là quy trình báo trước, công khai. Giám sát vật lý thấy được giảm rủi ro, phát hiện nhiều sự kiện, nhưng không chứng minh toàn lịch sử máy hay không can thiệp trước giao; tấn công như trên có thể làm giả bằng chứng chứng thực. Vì thế, sau mở vỏ, thay linh kiện, khởi động lại ngoài kế hoạch hay sự kiện đáng ngờ khác, chúng tôi ngừng xử lý nội dung riêng trên máy ấy. Khóa phiên, ứng dụng được thay, nhưng chứng thực mới tự nó không khôi phục lòng tin nếu nghi vấn ở nền chứng thực phần cứng; điều kiện, bằng chứng cho phép lại được mô tả trước. Khóa mã hóa dữ liệu người dùng có bảo vệ, khôi phục riêng, nên quy trình không lấy đi thành quả riêng của họ.

### 2.1. Thiết bị riêng và máy chủ tùy chọn

Nơi lưu chính cuộc trò chuyện, tệp, ký ức riêng cần là thiết bị người dùng, trong vùng chứa mã hóa, tức tập dữ liệu đọc bằng khóa phù hợp. Đây là cách local-first: dữ liệu lưu trước trên thiết bị, máy chủ có thể hỗ trợ sao lưu, đồng bộ.[^local-first] Tài liệu đã lưu cần còn truy cập được sau ngừng dùng dịch vụ quỹ; nhiệm vụ cần mô hình từ xa phụ thuộc dịch vụ tính toán đã chọn có sẵn hay không.

Lưu tùy chọn trên máy chủ chọn phục vụ sao lưu, đồng bộ thay đổi giữa thiết bị. Nội dung mã hóa trên thiết bị trước gửi, để bên vận hành giữ bản sao chỉ nhận bản mã, không khóa đọc. Người dùng chọn nhà cung cấp lưu trữ, thiết bị có quyền đọc. Chúng tôi hạn chế riêng tiết lộ siêu dữ liệu, như thời gian, kích thước bản sao truyền.

### 2.2. Khóa và khôi phục truy cập

Khóa vùng chứa riêng nằm dưới kiểm soát người dùng. Quy trình khôi phục nói rõ thiết bị thứ hai, khóa khôi phục giữ lại hay cơ chế khác chủ động chọn sẽ trả truy cập, cho ai khả năng đọc. Khôi phục tài khoản ở bên vận hành không mở nội dung vùng chứa. Mất mọi bản khóa và cách khôi phục có thể nghĩa mất dữ liệu vĩnh viễn; vì thế lựa chọn cơ chế được kiểm tra qua thử khôi phục, mô tả trong chỉ dẫn dễ hiểu.

Chúng tôi cân nhắc vài cách có thể kết hợp: thiết bị thứ hai đã có truy cập; khóa khôi phục ghi giấy hay trình quản lý mật khẩu; khóa phần cứng; chia khóa giữa vài người tin cậy, như bất kỳ hai trong ba người có thể cùng khôi phục, không ai tự đọc dữ liệu. Quỹ không giữ khóa hay phần khóa, nên không thể thay người dùng khôi phục hay giao dữ liệu của họ.

Ban đầu, chúng tôi khuyến nghị thiết bị thứ hai và khóa ghi giấy; chia khóa giữa người tin cậy là tùy chọn cho ai muốn.

### 2.3. Các phương án bảo vệ

Chúng tôi muốn so sánh năm phương án làm việc, vì mỗi phương án bảo vệ khỏi điều khác:

| Phương án | Xử lý diễn ra ở đâu | Cần đánh giá gì |
| --- | --- | --- |
| Mô hình cục bộ trên thiết bị không nối mạng | Trên thiết bị người dùng | Tình trạng thiết bị, truy cập vật lý, phương tiện lưu trữ và bản sao dữ liệu |
| Mô hình cục bộ trên thiết bị nối mạng | Cục bộ; với tích hợp, còn ở dịch vụ đã chọn | Quyền ứng dụng, cập nhật, lưu lượng mạng và phạm vi dữ liệu chuyển đến tích hợp |
| Xử lý trong môi trường bảo vệ tính bí mật trên máy chủ | Trong môi trường từ xa có cấu hình được xác nhận bằng chứng thực | Kiểm chứng môi trường, truy cập của quản trị viên và truy cập vật lý phần cứng, bảo vệ truyền tải và xử lý, siêu dữ liệu và khóa |
| API bảo vệ tính bí mật của nhà cung cấp ngoài | Trong môi trường bảo vệ tính bí mật của nhà cung cấp, có cấu hình cần được chứng thực xác nhận | Khóa kết nối có gắn chứng thực không, chứng thực có gồm bộ xử lý và card đồ họa không, có gắn yêu cầu cụ thể với máy cụ thể được không, ai tiếp cận vật lý phần cứng, lưu dữ liệu và thẩm quyền tài phán; trước khi tự kiểm chứng, chúng tôi coi tính bí mật là tuyên bố nhà cung cấp |
| API ngoài của nhà cung cấp mô hình | Tại nhà cung cấp ngoài | Điều kiện nhà cung cấp, truy cập nội dung, lưu trữ và thẩm quyền tài phán; chúng tôi không áp lời hứa về vận hành bảo vệ tính bí mật cho phương án này |

Kiểm tra máy chủ độc lập cần ứng dụng được cài. Trên trình duyệt, mỗi lần bên vận hành cung cấp mã kiểm tra máy chủ, vì thế chúng tôi đánh dấu cách này được bảo vệ yếu hơn.

Thiết bị nối mạng có thể có nhiều điểm tấn công hơn môi trường máy chủ tách biệt, nên riêng nơi tính toán không quyết định an toàn. Không phương án nào nhận nhãn “quyền riêng tư đầy đủ” trước kiểm tra cấu hình cụ thể. Trong mỗi trò chuyện, người dùng thấy đang làm ở phương án nào, và đổi phương án cần quyết định có hiểu biết của họ. Khóa API của người dùng phục vụ việc tính phí truy cập API bên ngoài, nhưng không bảo đảm tính bí mật trước nhà cung cấp. Đây không phải phương án mặc định của Suveria riêng tư; trước gửi nội dung, chúng tôi cho thấy nhà cung cấp có thể dùng để huấn luyện mô hình không, lưu bao lâu.

Chúng tôi cũng phân tích hướng chưa có trong bảng: bầy máy tin cậy. Khi đó mô hình sẽ chạy trên thiết bị vài người quen, tin nhau, như gia đình, bạn bè hay cộng đồng nhỏ; mỗi người chia một phần năng lực tính toán máy mình. Quyền riêng tư phương án ấy dựa vào lòng tin những người này, không dựa kỹ thuật, vì máy họ thấy nội dung xử lý; chúng tôi muốn mô tả đúng như vậy. Đây là ý còn đang phân tích, nhưng là một trong các con đường chúng tôi muốn khảo sát.

Máy chủ an toàn không bảo vệ văn bản đọc từ điện thoại bị chiếm, điện thoại an toàn hơn cũng không sửa máy chủ; vì thế chúng tôi thiết kế ứng dụng cùng bảo vệ thiết bị. Chúng tôi muốn ứng dụng Suveria chạy không cần dịch vụ Google, chẳng hạn trên GrapheneOS, có cả ngoài cửa hàng Google Play, với các bản phát hành được dựng có thể tái lập: bất kỳ ai có thể tự dựng ứng dụng từ mã nguồn công bố, kiểm tra nhận tệp giống hệt tệp cài. Chúng tôi cũng dự kiến biện pháp ngay trong ứng dụng: chặn chụp màn hình, chế độ bàn phím không học văn bản nhập, loại dữ liệu riêng khỏi bản sao trên đám mây, ẩn nội dung thông báo và khóa ứng dụng. Trên trang quỹ, chúng tôi sẽ soạn hướng dẫn bảo vệ thiết bị riêng ở ba mức: từ thiết lập cơ bản, cập nhật, qua cô lập công việc và khóa mạnh hơn, đến cấu hình đã kiểm tra cho người đòi hỏi cao nhất, như Qubes OS trên máy tính có phần sụn mở. Dùng Suveria không đòi mua thiết bị chỉ định; tên hệ điều hành không phải chứng nhận toàn thiết bị.

Trong mỗi trò chuyện, chúng tôi sẽ hiển thị phiếu bảo vệ (*Charta Tutelae*): danh sách yếu tố mà quyền riêng tư trò chuyện phụ thuộc, mỗi yếu tố ở một trong ba trạng thái:

- **Đã được chúng tôi kiểm tra:** chúng tôi tự kiểm chứng, có ngày, phiên bản và mô tả cách làm.
- **Do nhà cung cấp tuyên bố:** nhà cung cấp khẳng định vậy, chúng tôi chưa kiểm tra.
- **Không được bảo vệ:** phương án này không bảo vệ điều ấy, như thời gian và độ dài thông điệp nhà cung cấp mạng thấy được, quyền nhà cung cấp tiếp cận vật lý phần cứng hay thẩm quyền tài phán nơi máy chủ đặt.

Trạng thái “đã được chúng tôi kiểm tra” có ngày kiểm tra cuối và hết hạn: sau thời gian định trước không kiểm tra lại, trở về trạng thái “được tuyên bố”. Chúng tôi sẽ hiển thị riêng sự cố đã biết làm đổ vỡ lòng tin, như sự cố ở nhà cung cấp hay thay đổi cấu hình chưa xác nhận. Phiếu giống nhau cho mọi người, không phụ thuộc giá; phương án có dù một yếu tố chỉ được tuyên bố không mang tên “quyền riêng tư đầy đủ”. Bảng đầu chương 2 và bảng phương án ở mục này mô tả phương án nói chung; phiếu sẽ cho thấy trạng thái cuộc trò chuyện cụ thể này.

## 3. Đường từ thiết bị đến mô hình

Suveria được dự kiến gồm vài phần:

- ứng dụng trên thiết bị người dùng;
- cổng tính phí yêu cầu và giữ giới hạn chi tiêu;
- môi trường bảo vệ tính bí mật có mô hình, của riêng hoặc tại nhà cung cấp;
- lưu các bản sao mã hóa;
- trung gian tùy chọn che địa chỉ người dùng.

Cổng được dự kiến chạy trong máy bảo vệ tính bí mật. Trước thí điểm, chúng tôi sẽ hiển thị trong ứng dụng điểm mã hóa do thiết bị người dùng kiểm soát kết thúc và cổng có thấy nội dung không; nếu có thì chỉ bên trong môi trường bảo vệ tính bí mật.

Lưu trữ mã hóa và xử lý bảo vệ tính bí mật cần biện pháp riêng. Mô hình trên máy chủ cần nội dung đọc được trong môi trường tính toán được bảo vệ để làm nhiệm vụ; riêng mã hóa bản sao tệp không bảo vệ giai đoạn này.[^apple-pcc] Ứng dụng chỉ cung cấp phạm vi chọn cho công việc ấy, không trao khóa của toàn vùng chứa riêng. Mô tả phiên chỉ ra nơi nội dung có thể dùng cho tính toán, điều hạn chế bên vận hành xem và điều xảy ra với dữ liệu sau trả kết quả.

Diễn tiến phiên được đề xuất:

1. Ứng dụng lấy mô tả bản phát hành đã phê duyệt, kiểm tra chứng thực, tức xác nhận bằng mật mã về thuộc tính nhất định của môi trường đang chạy.
2. Kiểm tra phần cứng, trạng thái bảo vệ và số đo phần mềm có phù hợp chính sách công khai không. Khóa bên nhận dữ liệu phải gắn xác nhận này.
3. Sau kiểm tra thành công, thiết lập kết nối mã hóa với môi trường được phê duyệt. Khác biệt khiến ngừng gửi dữ liệu; chuyển phương án khác cần lựa chọn có hiểu biết.
4. Môi trường xử lý yêu cầu với truy cập mạng, công cụ bị giới hạn, trả kết quả và xóa dữ liệu làm việc theo chính sách công bố.
5. Lưu trò chuyện hay ký ức chỉ diễn ra trong phạm vi người dùng chọn.

Chứng thực giúp xác định đã chạy gì, tự nó không chứng minh mã an toàn. Cần rà soát mã, quá trình dựng có thể tái lập từ mã nguồn (mô tả ở mục 2.3), sổ các phiên bản phê duyệt và khả năng kiểm tra độc lập. Kiến trúc Apple Private Cloud Compute là tham chiếu cho chúng tôi về cách gắn bảo vệ với minh bạch phát hành phần mềm; không phải chứng nhận bản thiết kế của chúng tôi.[^apple-pcc]

Chúng tôi muốn bảo vệ các bản phát hành để lòng tin không phụ thuộc một người hay riêng quỹ:

- mỗi bản phát hành cần dựng lại có thể tái lập từ mã nguồn; ít nhất hai bên độc lập ngoài quỹ tái tạo và công khai xác nhận dấu vân tay số trùng nhau; đến khi tìm được họ, bản phát hành được đánh dấu chưa được bên thứ ba xác nhận;
- dấu vân tay số các bản phê duyệt vào sổ công khai chỉ được ghi thêm, những trạng thái kế tiếp được nhân chứng độc lập xác nhận;
- phiên bản mới lên máy chủ sau phê duyệt của vài người, có ít nhất một người ngoài ban điều hành;
- chỉ môi trường vượt qua chứng thực nhận khóa cần xử lý dữ liệu.

Chúng tôi thiết kế phương án bảo vệ đầy đủ cho ứng dụng được cài, có bản phát hành đã ký, kiểm tra được, bảo vệ khỏi quay lại phiên bản lỗi và lưu khóa an toàn, vì trên trình duyệt, mã kiểm tra máy chủ mỗi lần đều do bên vận hành cung cấp. Phiên bản trình duyệt mô tả rõ mức bảo vệ thấp hơn. Quá trình dựng có thể tái lập cho so bản phát hành với mã; đánh giá mã và cấu hình vẫn do rà soát, kiểm toán, tiền thưởng báo lỗi đảm nhiệm, mỗi sự cố vào sổ công khai.

Để giảm lộ địa chỉ người dùng, có thể nghiên cứu trung gian dựa Oblivious HTTP, tách thông tin về người gửi khỏi nội dung yêu cầu theo mô hình tin cậy nhất định.[^ohttp] Sự thông đồng trung gian, tương quan lưu lượng và chi tiết triển khai vẫn cần đánh giá; vì thế chúng tôi không mô tả riêng việc dùng giao thức này là ẩn danh đầy đủ.

Mã hóa và điện toán bảo vệ tính bí mật không che độ dài, nhịp gói mang câu trả lời. Nghiên cứu năm 2024–2025 cho thấy người quan sát mạng có thể từ đó tái dựng chủ đề, đôi khi nội dung trò chuyện.[^weiss-keylogging][^whisper-leak] Vì thế ở chế độ bảo vệ tính bí mật, chúng tôi muốn gửi trả lời trong khung kích thước cố định, nhịp cố định, không dùng chung bộ nhớ đệm yêu cầu giữa người dùng và tắt giải mã suy đoán. Những biện pháp này tốn một phần độ trễ, thông lượng; chúng tôi sẽ tính vào chi phí.

Chúng tôi còn bảo vệ hạ tầng bằng hạn chế khả năng hành động từng phần hệ thống: giới hạn tài nguyên, cô lập nhiệm vụ và chặn mặc định kết nối đi ra từ nút xử lý trò chuyện. Chặn này cần là phần phần mềm có dấu vân tay số trong chứng thực: đổi nó thì dấu đổi, ứng dụng sẽ từ chối kết nối. Chúng tôi coi quy tắc mạng nhà cung cấp là lớp thứ hai, không phải bảo đảm. Hành động ngoài được phép đi qua lớp công cụ riêng có quyền do người dùng định. Trước triển khai, chúng tôi sẽ kiểm tra hiệu quả ranh giới này, cách phát hiện sự cố và phạm vi siêu dữ liệu tối thiểu cần. Mục tiêu là an toàn tài nguyên chung, giữ bí mật nội dung trò chuyện.

Chúng tôi đặc biệt thận trọng khi người dùng kết nối nguồn có thông điệp người khác, như hộp thư. Thông điệp ấy có thể có lệnh ẩn, cố khiến mô hình tiết lộ ký ức riêng. Vì thế nội dung bên ngoài được tách khỏi lệnh người dùng: khi sắp xếp chúng, trợ lý không được tự gửi thông điệp, mở địa chỉ mạng hay đổi Bộ Nguyên tắc Cá nhân khi chưa có xác nhận của con người.

Mọi điều chúng tôi biết về hoạt động Suveria, bất kỳ ai cũng có thể biết. Khi khởi động dịch vụ, chúng tôi sẽ công bố danh mục tất cả loại dữ liệu thu về hoạt động dịch vụ, có mục đích, thời gian lưu; dữ liệu được cung cấp dạng tổng hợp: token sử dụng, mô hình dùng, tải máy, thời gian chờ hàng đợi, sự cố và chi phí. Mỗi người thấy chúng ở cùng nơi chúng tôi thấy. Trước công bố thống kê, chúng tôi kiểm tra có thể nhận ra hành vi người cụ thể từ đó không: đặt kích thước nhóm tối thiểu, độ trễ công bố, dữ liệu bỏ qua. Chúng tôi không thu dữ liệu ngoài danh mục; nếu phát hiện ngược lại, chúng tôi coi là sự cố nghiêm trọng, mô tả công khai.

## 4. Hạn chế lạm dụng không xem nội dung riêng

Chúng tôi áp dụng bảo vệ phẩm giá cả với người có thể chịu ảnh hưởng từ việc dùng công cụ của chúng tôi. Chúng tôi muốn ngăn lạm dụng không đọc trò chuyện riêng: qua nguyên tắc trợ lý tuân theo, giới hạn quyền công cụ, kết nối mạng, giới hạn tài nguyên và bảo vệ khỏi tạo hàng loạt tài khoản. Chúng tôi không tạo lối truy cập ẩn vào nội dung riêng, vì chúng sẽ làm yếu bảo vệ của tất cả.

Sẽ có thể tạo tài khoản theo vài cách, từ hoàn toàn riêng tư (khóa trên thiết bị riêng, không địa chỉ e-mail) đến thuận tiện (đăng nhập qua nhà cung cấp ngoài). Trước khi chọn, ở mỗi cách chúng tôi sẽ cho thấy ai ngoài quỹ biết tài khoản được tạo, thấy dữ liệu gì và điều xảy ra nếu nhà cung cấp ấy biến mất. Cách tạo tài khoản không ảnh hưởng quyền người tham gia; quyền biểu quyết trong Omniforum là xác nhận riêng được thêm vào tài khoản.

Chúng tôi đánh giá riêng quyền riêng tư và hạn chế lạm dụng. Suveria được thiết kế để quỹ không có dữ liệu có thể giao về người cụ thể: nội dung mã hóa bằng khóa người dùng, dữ liệu hoạt động chỉ thu trong phạm vi công khai ở chương 3, dữ liệu cá nhân hạn chế đến mức tối thiểu pháp luật đòi hỏi khi thanh toán, kế toán; phạm vi ấy cũng công bố. Nếu ai đòi dữ liệu người cụ thể, chúng tôi muốn có thể trả lời trung thực rằng ngoài mức tối thiểu mô tả công khai ấy, chúng tôi không có. Với mỗi biện pháp chống lạm dụng, chúng tôi sẽ mô tả dữ liệu cần, thời gian lưu, ảnh hưởng đến người tham gia ngay thẳng và cách phản đối chặn nhầm.

Chúng tôi cũng sẽ mô tả cách tiếp nhận báo cáo từ người cho rằng mình bị hại, điều có thể làm khi không truy cập nội dung trò chuyện: như hạn chế quyền công cụ hay tài nguyên tài khoản, kiểm tra dữ liệu tính phí, siêu dữ liệu trong phạm vi lưu, hay báo người gửi nơi tìm giúp đỡ. Nghĩa vụ pháp lý của bên vận hành dịch vụ ấy cần phân tích riêng trước khởi động.

Các biện pháp này là mục tiêu, phương án thử nghiệm; không biện pháp nào phát hiện mọi lạm dụng. Với mỗi biện pháp, chúng tôi sẽ chỉ ra nguy cơ nó đáp ứng, điều không phát hiện và điều có thể kiểm tra khi bên vận hành không xem trò chuyện riêng. Kết quả đánh giá này quyết định điều kiện cung cấp chức năng ấy.

Khi cuộc trò chuyện liên quan đe dọa tính mạng, sức khỏe, trợ lý được dự kiến cung cấp thông tin giúp đỡ sẵn có, như số khẩn cấp, không gửi gì ra ngoài môi trường riêng.

### 4.1. Chỉ dẫn trợ lý công khai và thư viện chung

Chỉ dẫn chính, cách làm việc cũng quyết định hành vi trợ lý: cách chia nhiệm vụ thành bước, dùng ký ức, kiểm tra trả lời. Trong Suveria, mỗi người cần luôn đọc được toàn bộ chỉ dẫn trợ lý mình. Hạ tầng chung được dự kiến chỉ cung cấp mô hình, thiết lập vượt qua thử nghiệm công khai của bộ chuẩn đánh giá; trên mức tối thiểu ấy, người dùng chọn cách làm, từ bình thản sắp xếp suy nghĩ đến trò chuyện đòi hỏi, trong đó trợ lý chỉ lỗ hổng lập luận. Chúng tôi muốn duy trì thư viện mở các chỉ dẫn đã kiểm tra, được người tham gia cải thiện trong Omniforum và thử trong bộ chuẩn đánh giá.

## 5. Tính toán trên nhiều card đồ họa

Mô hình chương 6 không vừa một card đồ họa, nên phải kiểm tra bảo vệ cả kết nối giữa card: bus PCIe nối bộ xử lý với card; NVLink, NVSwitch nối card với nhau.

Khi mô hình dùng vài card đồ họa, dữ liệu cũng đi giữa chúng; bảo vệ cần kiểm tra cho cả card và kết nối. Tên card không đủ đặt dịch vụ bảo vệ tính bí mật: cần xác nhận đúng máy, bộ xử lý, cấu trúc kết nối, phần sụn, trình điều khiển, phần mềm chạy, rồi kiểm tra hoạt động cùng nhau.[^nvidia-platformy]

Trong chế độ Hopper Protected PCIe mô tả ở tài liệu PPCIe v2, mạng NVLink, NVSwitch thuộc phần tin cậy hệ thống, nên mã hóa PCIe không có nghĩa là mã hóa mọi kết nối giữa card.[^nvidia-ppcie-v2] Tài liệu NVIDIA R595 mô tả cho card Blackwell chế độ điện toán bảo vệ tính bí mật trên nhiều card, có mã hóa kết nối NVLink, hỗ trợ đến tám card trong một máy ảo bảo vệ tính bí mật.[^nvidia-blackwell] Đó là cơ sở kiểm tra cấu hình, không phải bằng chứng mọi dịch vụ thuê B200 có chức năng này. Các bản phát hành có bảng tương thích khác nhau, nên chúng tôi không ghép cấu hình từ phiên bản chọn tùy ý.

Câu hỏi gửi nhà cung cấp gồm:

- chế độ bảo vệ cụ thể và khả năng tự chứng thực;
- quyền dùng riêng tài nguyên cần và khu vực;
- truy cập quản trị viên, tiếp cận vật lý phần cứng;
- thời gian lưu dữ liệu;
- thời gian cung cấp và toàn chi phí.

Chúng tôi chỉ so sánh lời chào hàng sau khi thử nghiệm với ứng dụng của chính mình. Nhãn thương mại “secure” không thay thế những thông tin này.

## 6. Mô hình, ký ức và công cụ

Nền tảng bản thiết kế là các mô hình mở mà người ta có thể tự vận hành. Suveria được dự kiến sẵn cho người khắp thế giới bằng ngôn ngữ riêng, nên khi chọn mô hình, chúng tôi tính chất lượng nhiều ngôn ngữ, hiểu ý định, độ tin cậy, giấy phép, chi phí, khả năng vận hành trong kiến trúc bảo vệ cần. Khi có nhu cầu, cạnh mô hình chung, chúng tôi có thể chạy mô hình xử lý ngôn ngữ cụ thể tốt hơn. Trọng số mở cho phép một số ứng dụng, không quyết định tính mở dữ liệu và toàn quá trình tạo mô hình.[^osi]

Ứng viên đầu là DeepSeek-V4.1-Flash, mô hình giấy phép MIT, cho phép dùng cả cung cấp dịch vụ.[^deepseek] Nó lớn nhưng tiết kiệm: nhà sản xuất nêu 552 tỷ tham số phần chính, tức các số được điều chỉnh khi huấn luyện, và bộ nhớ Engram bổ sung 196 tỷ tham số; với mỗi từ tiếp theo chỉ 8–16 tỷ tham số hoạt động, nên trả lời nhanh, rẻ (phép tính chương 8). Nhưng tất cả tham số phải vừa bộ nhớ card đồ họa, nên cần ít nhất bốn card hiện đại. Tham số mô hình này đã lưu dạng tiết kiệm, dùng ít chữ số hơn cho mỗi số; cách lưu gọi là lượng tử hóa, giảm bộ nhớ cần nhưng có thể giảm chất lượng, nên với mỗi phiên bản chúng tôi kiểm tra trên nhiệm vụ riêng. Chúng tôi cũng so với mô hình nhỏ hơn: chỉ chọn lớn hơn khi nó làm rõ ràng tốt hơn những nhiệm vụ quan trọng với con người.

Ứng viên thứ hai là Kimi K3.1 Pro của Moonshot AI, cung cấp ngày 23 tháng 10 năm 2026. Nhà sản xuất mô tả là phiên bản Kimi K3 được huấn luyện thêm, khoảng 3 nghìn tỷ tham số, ngữ cảnh đến một triệu token; công bố sẽ đưa toàn bộ trọng số ra trước ngày 4 tháng 11 năm 2026, giấy phép chưa được công bố.[^kimi-k31] Dữ liệu chi tiết dùng so sánh đến từ phiếu mô hình tiền nhiệm: Kimi K3 có 2,8 nghìn tỷ tham số, trong đó 104 tỷ hoạt động với mỗi token, giấy phép riêng chưa được Open Source Initiative phê duyệt.[^kimi-k3] Trong chỉ số Artificial Analysis phiên bản ngày 28 tháng 10 năm 2026, Kimi K3.1 Pro đạt 46 điểm so 32 của DeepSeek-V4.1-Flash, nhưng đắt, chậm hơn vài lần.[^aa] Tệp trọng số Kimi K3 chiếm khoảng 1,56 TB; chạy còn cần bộ nhớ ngữ cảnh và tính toán, nên riêng tổng bộ nhớ card không quyết định mô hình có chạy không. Công thức của bộ máy SGLang mô tả cấu hình Kimi K3 đã kiểm tra trên tám card B300; chưa phải thử Kimi K3.1 hay cấu hình bảo vệ tính bí mật.[^spheron-kimi][^sglang-k3] Sau công bố trọng số, chúng tôi sẽ kiểm tra kích thước, định dạng, giấy phép, công thức bộ máy, sức chứa trên cấu hình cụ thể, có sẵn trong API bảo vệ tính bí mật không. Kết quả sẽ thêm có ngày, làm cập nhật đầu tài liệu này, kể cả khi trọng số chưa công bố hay điều kiện giấy phép hóa ra không dùng được.

Chúng tôi báo trước đổi hay ngừng mô hình. Lịch sử trò chuyện ở lại với người dùng: họ có thể chọn mô hình kế nhiệm, xuất dữ liệu hay dừng làm việc. Trong trò chuyện cần thấy thời điểm đổi mô hình; chuyển ngữ cảnh riêng sang mô hình mới cần quyết định người dùng.

Chúng tôi sẽ công bố đầy đủ nguyên tắc trợ lý trả lời cùng mỗi bản phát hành. Bản thân mô hình cũng mang lựa chọn người tạo, như chủ đề nó tránh; chúng tôi kiểm tra trong bộ chuẩn đánh giá, mô tả khi chọn mô hình.

Ký ức cuộc trò chuyện trước được dự kiến hoạt động với sự đồng ý người dùng và chỉnh sửa được minh bạch. Chúng tôi phân biệt phát biểu gốc, tóm tắt mô hình và thông tin người dùng xác nhận. Mỗi mục có thể xóa, sửa, xem nguồn gốc và định nhiệm vụ được dùng. Trợ lý phân biệt rõ gợi ý riêng với lập trường con người đã chủ động nhận làm của mình.

Thực hiện hành động cần quyền trao cho mục đích, thời gian xác định. Nội dung trang hay tài liệu là chất liệu phân tích, không phải lệnh đổi quyền này. Hành động ngoài, chi tiêu, công bố và xóa cần xác nhận tương xứng, nhật ký hành động người dùng truy cập được.

### 6.1. Kính viễn vọng Tư duy và Bộ Nguyên tắc Cá nhân

Ý tưởng Kính viễn vọng Tư duy (*Telescopium Mentis*) hình thành từ cửa sổ Overton, khái niệm mô tả phạm vi ý tưởng được xã hội coi chấp nhận được ở thời điểm nhất định. Với một người, đó là phạm vi suy nghĩ họ coi được phép cho mình ở thời điểm ấy. Kính viễn vọng được dự kiến là cửa sổ như vậy cho một người, chỉ riêng họ: cho thấy bản ghi suy nghĩ, giá trị riêng từ thời điểm khác nhau và cách chúng đổi theo thời gian.

Kính viễn vọng Tư duy được dự kiến giúp trở lại lập luận riêng: khi ấy tôi biết gì, muốn gì, vì sao đổi ý. Nó cũng có thể giúp đối chiếu sự kiện người dùng chọn, thông tin thế giới và hành động riêng với Bộ Nguyên tắc Cá nhân, tức tập hợp nguyên tắc, giá trị họ tự viết, nhận là của mình. Đối chiếu liên quan tình huống người dùng tự mô tả hay chỉ định; chính họ định chất liệu, phạm vi. Mô hình chỉ mối liên hệ có thể có cùng nguồn nguyên tắc được viện, mô tả sự kiện, phân biệt thông tin xác nhận với diễn giải, điều chưa chắc. Diễn giải đề xuất có thể sửa hay bác bỏ; lập trường trước được đánh giá có tính thời gian, bối cảnh của nó.

Sự căng thẳng nhận ra có thể liên quan chính nguyên tắc, xung đột giá trị, điều kiện xung quanh, giới hạn con người hay diễn giải mô hình chưa đúng. Con người có thể giữ lý tưởng, chấp nhận sự thiếu nhất quán hiện tại, làm rõ niềm tin, cân nhắc đổi hành động hay môi trường hoặc để câu hỏi mở. Bộ Nguyên tắc được dự kiến giúp hiểu lựa chọn riêng: chúng tôi không tạo điểm số đạo đức hay bảng xếp hạng công khai tính nhất quán. Suy ngẫm riêng còn riêng; ghi lại không có nghĩa là công bố hay bỏ phiếu.

Chúng tôi sẽ bắt đầu thận trọng. Trong phiên bản đầu, Kính viễn vọng Tư duy chỉ làm với một tình huống người dùng tự chỉ, như quyết định họ muốn trở lại; không theo dõi cuộc sống họ liên tục. Người dùng quyết định tần suất dùng, ghi chép, ký ức nào cung cấp, lúc nào xóa. Trong thử nghiệm này, chúng tôi kiểm tra mối liên hệ được hiển thị có dễ hiểu không, có cho cảm giác làm chủ lựa chọn riêng không, công cụ có gây áp lực liên tục tự giải trình không. Chúng tôi cũng coi là kết quả tốt khi ai đó suy ngẫm rồi chấp nhận mình không luôn làm đúng nguyên tắc, hay để vấn đề mở: công cụ được dự kiến giúp hiểu mình, không ép kết luận.

### 6.2. Định dạng mở, di chuyển và phối hợp công cụ

Chúng tôi muốn phát triển Suveria thành hàng hóa công cộng số, có mã nguồn và tài liệu mở; tham chiếu là tiêu chuẩn Digital Public Goods Alliance.[^dpga] Định dạng chuyển dữ liệu có mô tả công khai, phiên bản, quy tắc giữ thông tin khi đổi phiên bản. Trước hết chúng tôi dùng tiêu chuẩn mở hiện có, ghi tài liệu phần mở rộng cần.

Xuất dữ liệu gồm bản gốc chọn, lịch sử, nguồn, liên hệ và phân biệt lời người dùng, phần mô hình xử lý, ý nghĩa tác giả xác nhận, cũng như cấu trúc Bộ Nguyên tắc Cá nhân. Gói tải về đọc được không cần tài khoản Suveria còn hoạt động, sau người có quyền giải mã.

API, tức cách giao tiếp giữa chương trình được ghi tài liệu, được dự kiến cho làm với tài liệu trong công cụ khác, kể cả tự xây. Người dùng chọn phạm vi dữ liệu, hành động được phép, có thể thu hồi quyền tích hợp. Thu hồi chặn truy cập tiếp; số phận bản sao đã giao còn phụ thuộc bên nhận.

Không gian riêng cũng có thể phục vụ làm việc cho dự án chung. Người dùng chọn tài liệu muốn giao nghiệm thu hay công bố; công cụ giúp loại trên thiết bị khóa truy cập, mật khẩu, dữ liệu cá nhân, thông tin lỗ hổng chưa vá. Dùng tài nguyên tự trả phí không đòi tiết lộ trò chuyện làm việc. Với nhiệm vụ từ tài nguyên chung của quỹ, phạm vi bản ghi công khai, chọn bút danh, chuẩn bị tài liệu được [quy tắc các xưởng làm việc của quỹ](whitepaper-zasady-fundacji.md) định trước (chương 11.1). Từ suy nghĩ trong Suveria, cũng có thể chủ động chọn một câu hỏi hay luận điểm rồi công bố trong Omniforum; bước này được tuyên ngôn mô tả là Nghi lễ Ignis (*Caerimonia Ignis*), luôn cần quyết định riêng.

## 7. Quy mô: từ 30 người đến toàn nhân loại

Riêng số tài khoản không định hạ tầng cần. Điều quan trọng là hoạt động, độ dài câu hỏi, trả lời, số phiên đồng thời, thời gian chờ chấp nhận được và chi phí công cụ. Ví dụ dưới là mô hình tải cho thử nghiệm, không phải dự báo nhu cầu hay chào hàng.

Giả định: mỗi người trong N người đều hoạt động hằng ngày, gửi 20 yêu cầu mỗi ngày; yêu cầu trung bình có 1.500 token đầu vào, 600 token đầu ra, tháng có 30 ngày. Token là đơn vị văn bản mô hình xử lý, độ dài phụ thuộc ngôn ngữ. Tải thực cần tính thêm ngữ cảnh dài hơn, xử lý tài liệu, token suy luận, lượt gọi phụ.

| Người hoạt động | Yêu cầu mỗi tháng | Đầu vào mỗi tháng | Đầu ra mỗi tháng | Sinh trung bình cả ngày | Đỉnh theo giờ trong kịch bản toàn cầu, khoảng 1,51 × trung bình |
| --- | ---: | ---: | ---: | ---: | ---: |
| 30 | 18.000 | 27 triệu token | 10,8 triệu token | 4,2 token/s | 6,3 token/s |
| 100 | 60.000 | 90 triệu | 36 triệu | 13,9 token/s | 20,9 token/s |
| 1.000 | 600.000 | 900 triệu | 360 triệu | 138,9 token/s | 209 token/s |
| 100 nghìn | 60 triệu | 90 tỷ | 36 tỷ | 13.889 token/s | 20.921 token/s |
| 1 triệu | 600 triệu | 900 tỷ | 360 tỷ | 138.889 token/s | 209.208 token/s |
| 1 tỷ | 600 tỷ | 900 nghìn tỷ | 360 nghìn tỷ | 138,9 triệu token/s | 209,2 triệu token/s |
| 10 tỷ | 6 nghìn tỷ | 9 triệu tỷ | 3,6 triệu tỷ | 1,39 tỷ token/s | 2,09 tỷ token/s |

Chúng tôi dự kiến Suveria là dịch vụ toàn cầu có nhiều ngôn ngữ. Chưa biết người tham gia phân bố múi giờ thế nào, nên so hai kịch bản sẽ được phép đo kiểm chứng. Ở kịch bản toàn cầu, giả định tỷ trọng khu vực tỷ lệ số người dùng internet theo ITU năm 2025, với cùng hình dạng ngày giả định mỗi múi giờ: đỉnh tối, đêm yên.[^itu] Các múi giờ bù một phần đáy lưu lượng cho nhau, nên đỉnh giờ khoảng 1,51 × trung bình, lưu lượng thấp nhất khoảng 0,49 ×. Ở kịch bản tập trung một khu vực, như châu Âu, đỉnh khoảng 1,87 × trung bình, đêm gần không. Phân bố ấy có thể xảy ra cả quy mô lớn, nghĩa dùng máy riêng kém hiệu quả hơn, cần API bảo vệ tính bí mật thường hơn hoặc chờ lâu hơn ở đỉnh. Cả hai giá trị từ giả định, không phải quan sát người tham gia tương lai. Hàng đợi ngắn hiển thị thời gian chờ được dự kiến san bằng đợt tăng ngắn trong giờ; lưu lượng vượt sức máy riêng có thể do API bảo vệ tính bí mật tiếp nhận. Trong thí điểm, chúng tôi sẽ đo thời gian chờ, cả phân vị thứ 95, 99, cùng giới hạn hàng đợi và hành vi khi đầy. Thử tải còn gồm người mới đột ngột đổ vào, như gấp năm lưu lượng trung bình. Đây là tổng thông lượng đầu ra, không thay đo độ trễ trò chuyện đơn lẻ hay chi phí xử lý đầu vào. Thử nghiệm cần tái hiện phân bố phiên, ngữ cảnh dài, sự cố, hàng đợi, không chỉ một câu hỏi thuận tiện.

Hệ số đỉnh so giờ tải cao nhất với trung bình. Nó từ mô hình ngày chia 24 giờ: dịch cùng hình dạng ngày qua tám khu vực, cộng theo tỷ trọng giả định. Đây là kịch bản tính toán, không tính thời gian chờ câu hỏi đơn lẻ.

Để thấy phép tính ở quy mô thế giới, hãy làm thí nghiệm tư duy. Nếu mỗi người trong 10 tỷ người dùng Suveria như hồ sơ giả định, ở đỉnh cần khoảng 2,1 tỷ token đầu ra mỗi giây. Với hiệu năng đã đo cho DeepSeek-V4.1-Flash, khoảng 930 token mỗi giây mỗi card B200, tức khoảng 2,25 triệu card; ở khoảng 1,75 kW mỗi card kể cả máy chủ (giả định của chúng tôi, chưa đo), khoảng 4 GW công suất. Với một tỷ người, khoảng 225 nghìn card, 0,4 GW; với một triệu, khoảng 225 card. Để so sánh, đầu năm 2026, Epoch AI ước tính năng lực tính toán trí tuệ số lắp đặt toàn cầu vượt 15 triệu card H100 tương đương, cần hơn 10 GW công suất.[^epoch] Đây là giản lược: hồ sơ giả định nhẹ, làm việc cường độ cao, mô hình lớn, hình ảnh cần nhiều lần hơn; phần cứng, mô hình đổi nhanh. Nhưng nó cho thấy bậc quy mô: trợ giúp hằng ngày từ trí tuệ số ở mức này cho mỗi người sẽ cần công suất thấp hơn công suất đã vận hành trên thế giới hôm nay. Đây là phép tính giản lược, không phải bằng chứng hạ tầng ấy sẽ sẵn cho mục đích này.

## 8. Chi phí và phép tính có ngày tháng

Chi phí tháng cho đặt trước cố định có thể viết ở xấp xỉ đầu: số card × giá mỗi giờ-card × số giờ trả, thêm bộ nhớ, đĩa, truyền dữ liệu, bảo vệ, giám sát, vận hành, thanh toán, thuế. Cần kiểm tra chào hàng đã gồm khoản nào. Chạy cả ngày đêm, tháng có 672 đến 744 giờ; 730 giờ là xấp xỉ trung bình.

Trong phép tính, chúng tôi so năm phương án chi phí: mô hình cục bộ, bản chạy riêng trên thiết bị thuê, bản chạy riêng trong môi trường điện toán bảo vệ tính bí mật có bảo vệ nhà cung cấp tuyên bố cần kiểm tra, API bảo vệ tính bí mật bên ngoài và API ngoài thông thường. Chúng tương ứng phương án bảo vệ mục 2.3; thuê máy không bảo vệ tính bí mật chỉ là tham chiếu giá, không phải phương án Suveria. Chúng tôi chưa định giá mô hình cục bộ vì phụ thuộc thiết bị người dùng. So cùng phạm vi chất lượng, khả dụng, bảo vệ. Ngưỡng hiệu quả chi phí là toàn chi phí dịch vụ chia mức sử dụng thực tế, không phải chi phí card chia số tài khoản đăng ký. API ngoài giúp thử nhu cầu người dùng, nhưng nhà cung cấp có nguyên tắc truy cập dữ liệu riêng, nên chúng tôi không áp lời hứa vận hành bảo vệ tính bí mật cho nó.

### 8.1. Phép tính có ngày tháng: tình trạng ngày 29 tháng 10 năm 2026

Tuyên ngôn đặt giả thuyết rằng ngay với số người tham gia thường xuyên tương đối nhỏ, hạ tầng chung có thể cho nhiều năng lực tính toán, trí tuệ số hơn trên mỗi đô la so dịch vụ đóng, với bảo vệ quyền riêng tư dựa biện pháp kiểm tra được. Dưới là phép tính theo giá ngày 29 tháng 10 năm 2026. Giả định: hồ sơ sử dụng chương 7 (20 yêu cầu/ngày, mỗi yêu cầu 600 token đầu ra), kịch bản toàn cầu (đỉnh giờ khoảng 1,51 × trung bình), giá chưa thuế, 730 giờ/tháng đổi giá thuê. Số người trên máy là số người tham gia máy phục vụ được ở đỉnh giờ: thông lượng đầu ra mỗi giây × 86.400 / (20 × 600 × hệ số đỉnh). Thời gian chờ trả lời đo được cũng sẽ định số người cho phép. Trong ngoặc là kịch bản tập trung châu Âu (hệ số khoảng 1,87). Với DeepSeek-V4.1-Flash, chúng tôi dùng phép đo của nhà cung cấp Lambda trên bốn card B200: khoảng 3.714 token đầu ra mỗi giây ở 64 yêu cầu đồng thời.[^lambda-v41] Phép đo dùng giải mã suy đoán mà chúng tôi không muốn dùng ở chế độ bảo vệ tính bí mật (chương 3). Theo ước tính tháng 9 của chúng tôi, thông lượng khi ấy có thể thấp hơn đến khoảng 30%, tăng chi phí mỗi người với tỷ lệ tương tự. Không có phép đo mô hình này trên H200, B300; giả định mỗi bộ card chứa một bản mô hình (8 × H200 hoặc nửa máy 8 × B300) đạt hiệu năng bốn B200. Đây là giả định lạc quan: H200 thế hệ cũ hơn, chế độ bảo vệ tính bí mật có thể làm chậm, phép đo Lambda có yêu cầu dài hơn hồ sơ chúng tôi. Vì thế còn có phương án thận trọng ở nửa thông lượng ấy.

Trọng số mô hình chiếm khoảng 511 GB, bộ máy vLLM khuyến nghị khoảng 614 GB bộ nhớ card. Bốn H200 (564 GB) không đủ, nên một bản trên H200 cần tám card. Công thức nhà sản xuất bộ máy cho cấu hình này đang được kiểm chứng ngày 29.10; ở H200, kết nối giữa card (NVLink) không mã hóa phần cứng như B200, B300.

| Phương án | Tính bí mật | Chi phí tháng | Người trên máy | Chi phí chỉ tính toán mỗi người |
| --- | --- | ---: | ---: | ---: |
| API DeepSeek | không có, nhà cung cấp thấy nội dung | theo sử dụng | không áp dụng cho một máy; giới hạn, khả dụng của nhà cung cấp | 0,35–0,70 USD |
| API bảo vệ tính bí mật với DeepSeek-V4.1-Flash (Confidential AI, Tinfoil, Phala) | nhà cung cấp tuyên bố, cần kiểm tra | theo sử dụng | không áp dụng cho một máy; giới hạn, khả dụng của nhà cung cấp | 0,70–1,25 USD |
| API Kimi K3.1 Pro (Moonshot) | không có | theo sử dụng | không áp dụng cho một máy; giới hạn, khả dụng của nhà cung cấp | 5,40 USD |
| API bảo vệ tính bí mật với Kimi K3 (Phala, NEAR AI) | nhà cung cấp tuyên bố, cần kiểm tra | theo sử dụng | không áp dụng cho một máy; giới hạn, khả dụng của nhà cung cấp | 8,10–8,91 USD |
| Máy bảo vệ tính bí mật thuê 8 × H200 (Phala), DeepSeek, một bản mô hình | chứng thực bộ xử lý, card, cần kiểm tra | 23.506 USD với cam kết 180 ngày, 32.266 USD theo yêu cầu | khoảng 17.750 (14.300), giả định sức chứa | 1,32–1,82 USD (1,64–2,25) |
| Như trên, phương án thận trọng: nửa thông lượng | chứng thực bộ xử lý, card, cần kiểm tra | như trên | khoảng 8.900 (7.150), giả định sức chứa | 2,65–3,64 USD (3,29–4,51) |
| Máy bảo vệ tính bí mật thuê 8 × B300 (Phala), Kimi K3 | chứng thực bộ xử lý, card, cần kiểm tra | 45.552–47.888 USD | khoảng 4.800–7.600 (3.900–6.200), giả định sức chứa | khoảng 6–10 USD (7,4–12,4) |
| 4 × B200 không có tính bí mật được xác nhận (Lambda), DeepSeek | chưa được xác nhận | 19.827 USD | khoảng 17.750 (14.300) | 1,12 USD (1,38) |
| 8 × B200 không có tính bí mật được xác nhận (Lambda), DeepSeek, hai bản mỗi bản bốn card | chưa được xác nhận | 39.070 USD | khoảng 35.500 (28.700), giả định hiệu năng hai bản | 1,10 USD (1,36) |

Nguồn số liệu: giá API từ bảng giá DeepSeek, Moonshot, Confidential AI, Tinfoil, Phala, NEAR AI;[^deepseek-cennik][^cai][^tinfoil][^phala-api][^near] giá máy bảo vệ tính bí mật từ bảng giá Phala;[^phala-gpu] thuê B200 ở Lambda 6,79 USD mỗi giờ-card khi bốn card, 6,69 USD khi tám card.[^lambda-cennik] Sức chứa Kimi lấy từ phép đo bên thứ ba cho Kimi K3 trên tám B300, cho khoảng 1.000–1.600 token đầu ra mỗi giây.[^spheron-kimi] Khoản theo tháng với cam kết không có nghĩa là trả hằng tháng: Phala đòi trả trước toàn thời kỳ, không hoàn khi dừng sớm; 180 ngày máy 8 × H200 nghĩa 139.104 USD tiền mặt khi đặt, 180 ngày máy 8 × B300 là 269.568 USD.[^phala-gpu]

Điều rút ra:

- Với hồ sơ giả định, giá API có tính bí mật được tuyên bố khoảng 0,70–1,25 USD mỗi người mỗi tháng, từ tương đương API thường đến khoảng 3,6 lần, tùy nhà cung cấp, thời điểm dùng; Confidential AI tuyên bố giá thấp nhất, chúng tôi cũng phải kiểm tra chào hàng ấy. API bảo vệ tính bí mật cho năng lực linh hoạt không vận hành máy riêng, dù có giới hạn, hàng đợi, sự cố riêng. Máy bảo vệ tính bí mật thuê cho DeepSeek có quy mô đáp ứng đỉnh hoạt động trong kịch bản toàn cầu ở trung bình khoảng hai phần ba sức chứa, tốn khoảng 1,32 USD mỗi người, tức gần API bảo vệ tính bí mật đắt hơn, cao hơn loại rẻ nhất. Trong mô hình theo giờ của chúng tôi, nút riêng đầu với tải dư chuyển API bảo vệ tính bí mật ở 1,25 USD mỗi người xuất hiện tại điểm đã kiểm tra khoảng 20 nghìn người hoạt động; đây là kết quả giả định, không phải ngưỡng chính xác; với API bảo vệ tính bí mật rẻ hơn, thuê máy không hiệu quả chi phí ở quy mô này.
- Thuê theo giờ cả máy bảo vệ tính bí mật hiện không cho linh hoạt đỉnh tối: Phala đòi ít nhất một ngày (8 × H200) hoặc một tháng (8 × B300), Confidential AI ba tháng cho 8 × B300 ở 60 USD/giờ; VoltageGPU tính 8 × H200 từng giây ở 64,62 USD/giờ không có bằng chứng chứng thực công bố bao gồm cấu hình này hay bộ chuyển mạch NVSwitch.[^cai][^voltage] Còn thêm thời gian cấp máy, tải trọng số.
- Với Kimi, phép tính phụ thuộc đo: API bảo vệ tính bí mật khoảng 8–9 USD mỗi người, máy riêng 8 × B300 dùng hết sức chứa khoảng 6 USD ở ước tính sức chứa cao hơn, khoảng 9,5 USD ở thấp hơn. Nó rẻ hơn API bảo vệ tính bí mật nếu một máy phục vụ hơn khoảng 5.100–5.600 người hoạt động dùng mô hình này; ở ước tính sức chứa thấp (khoảng 4.800 người) không đạt.

Mua máy chủ riêng: máy chủ Supermicro hoàn chỉnh có tám B300 giá khoảng 663 nghìn USD tháng 9 năm 2026.[^supermicro] Chi phí tháng của mua ấy được chúng tôi ước tính:

| Khoản | Số tiền tháng |
| --- | ---: |
| Khấu hao máy chủ trong năm năm | khoảng 11 nghìn USD |
| Khấu hao máy chủ trong bốn năm | khoảng 13,8 nghìn USD |
| Thuê chỗ đặt máy chủ | khoảng 1,9–3 nghìn USD |
| Mạng, linh kiện, dịch vụ (ước tính) | khoảng 1,5 nghìn USD |
| Tổng | khoảng 14–18 nghìn USD |

Máy chủ ấy chứa hai bản DeepSeek, phục vụ khoảng 35 nghìn người trong kịch bản toàn cầu (châu Âu khoảng 28 nghìn), ở khoảng 0,41–0,52 USD mỗi người. Theo giả định này, mua rẻ hơn API bảo vệ tính bí mật giá 1,11–1,25 USD từ khoảng 12–17 nghìn người hoạt động; rẻ hơn mức thấp nhất được tuyên bố (0,70 USD) từ khoảng 21–26 nghìn. Phép tính chưa gồm toàn chi phí duy trì, đo cấu hình; mua còn cần tiền trước, người trực cả ngày đêm, nhu cầu ổn định nhiều năm; khi ấy quỹ tiếp cận vật lý thiết bị (chương 2). Đây là ước tính của chúng tôi, không phải chào hàng.

- Máy bảo vệ tính bí mật nhiều card hiện được cung cấp công khai tại Mỹ. Trong Liên minh châu Âu, chúng tôi tìm thấy máy bảo vệ tính bí mật một H100,[^azure-ncc] không chứa được đầy đủ DeepSeek hay Kimi. Privatemode (Edgeless Systems, Đức) cũng cung cấp API bảo vệ tính bí mật có máy chủ tại Liên minh châu Âu, ít lựa chọn mô hình hơn.[^privatemode] Đây cũng là tuyên bố nhà cung cấp, cần kiểm tra.
- Danh mục độc lập kiểm tra API bảo vệ tính bí mật, trong quan sát ngày 29 tháng 10 năm 2026, lúc 14:00 UTC, không xác nhận kiểm chứng đầy đủ bất kỳ tuyến nào trong 95 tuyến kiểm tra; thường thiếu bằng chứng định danh chương trình đang chạy, nguồn gốc mã, gắn yêu cầu với máy.[^katalog] Đây là kết quả bằng chứng sẵn có, không phải bằng chứng dịch vụ tiết lộ nội dung. Đến khi tự kiểm chứng, chúng tôi coi tính bí mật dịch vụ này là tuyên bố nhà cung cấp.
- Phép tính bao gồm tính toán. Môi trường riêng (cổng, ký ức, tệp) trong một hoặc hai máy bảo vệ tính bí mật có bốn bộ xử lý ảo, 8 GB bộ nhớ giá Phala khoảng 168 USD/tháng mỗi máy; đĩa tính riêng, khoảng 10 USD mỗi 100 GB.[^phala-cvm] Kích thước ấy đủ không, chúng tôi sẽ kiểm tra trong thí điểm. Ở 170–340 USD/tháng, với 30 người khoảng 6–11 USD mỗi người; với 1.000 người vài chục xu. Chưa gồm công người, rà soát an toàn, thanh toán hay khoản dự phòng sự cố.
- Thuê bao phổ biến khoảng 20 USD/tháng; trò chuyện DeepSeek miễn phí.[^abonamenty] Gói 100–200 USD cho giá trị tương đương hàng nghìn đô la theo giá API niêm yết khi làm việc cường độ cao với tác tử;[^semianalysis] chúng tôi không cạnh tranh giá với các gói ấy. Đề xuất của chúng tôi là tính sử dụng thực tế với quyền riêng tư kiểm tra được.

Tình trạng giả thuyết tuyên ngôn ngày 29 tháng 10 năm 2026: phép tính đưa chúng tôi đến gần, chưa xác nhận nó. Xử lý có tính bí mật được tuyên bố, chứng thực đã có trong bảng giá công khai; với hồ sơ giả định khoảng 0,70–1,25 USD mỗi người mỗi tháng, nên nhóm nhỏ có thể bắt đầu theo chi phí, còn trong giả định của chúng tôi hạ tầng riêng có thể rẻ hơn ở khoảng hơn mười nghìn đến vài chục nghìn người hoạt động. Ba điều sẽ quyết định, được chúng tôi kiểm tra qua thử nghiệm chương 9: tính bí mật dịch vụ có vượt kiểm chứng độc lập không, chất lượng mô hình sẵn có đủ nhiệm vụ người tìm đến Suveria không, hồ sơ lưu lượng thực là gì. Phép tính được cập nhật khi giá đổi đáng kể, sau mỗi thử nghiệm; phiên bản trước được giữ lại.

### 8.2. Các bước hạ tầng và phiếu quyết định

Chúng tôi phát triển hạ tầng từng bước, mỗi bước tự đem giá trị người tham gia, không bắt buộc qua bước tiếp: đầu tiên API bảo vệ tính bí mật và môi trường riêng trong máy bảo vệ tính bí mật (nếu thu đủ tiền trước khởi động, có thể bắt đầu ngay bước tiếp), rồi thuê máy bảo vệ tính bí mật riêng, sau mua thiết bị đặt phòng máy chủ bên ngoài, tương lai xa nếu chứng tỏ ưu thế mới có tòa nhà riêng. Căn cứ cho bước tiếp là dữ liệu đã đo: toàn chi phí dịch vụ, lưu lượng thực, thời gian trả lời ở đỉnh, khả năng duy trì bảo vệ, xử lý sự cố; khi mua còn có tài trợ sửa chữa, thay thiết bị, người nhận trách nhiệm. Thuê máy riêng còn có thể hợp lý khi mô hình cần không có trong API bảo vệ tính bí mật hoặc muốn kiểm soát đầy đủ thứ đang chạy.

Mỗi chuyển bước được mô tả bằng phiếu quyết định: được gì, toàn chi phí, rủi ro, điều kiện bắt đầu, rút lui, cách chuyển dữ liệu, khóa, phù hợp [quy tắc dự phòng và khởi động trụ cột tiếp](whitepaper-zasady-fundacji.md) (chương 8 sách trắng nguyên tắc quỹ). Chỉ cho phép ghép máy riêng với API bảo vệ tính bí mật đáp ứng đỉnh lưu lượng khi mỗi đường có mức bảo vệ được chấp nhận; chuyển phương án yếu hơn cần quyết định riêng, có hiểu biết của người dùng. Phép đo đầu dự kiến trên một card bảo vệ tính bí mật với mô hình nhỏ hơn, tiếp theo trên máy chứa đầy đủ mô hình.

Năng lực được điều chỉnh theo lưu lượng, không định toàn bộ quy mô theo đỉnh cao nhất. Chúng tôi thiết kế hàng đợi ngắn hiển thị thời gian chờ; trong thí điểm sẽ đo thời gian thực, giới hạn, hành vi khi đầy. Trước hết, năng lực linh hoạt cho đỉnh kéo dài do API bảo vệ tính bí mật cung cấp nếu giữ mức bảo vệ được chấp nhận, sự đồng ý, giới hạn chi tiêu người dùng; khi không có đường như vậy, chúng tôi nói trung thực về chờ hay không khả dụng. Thuê theo giờ hợp lý cho mô hình không có trong API bảo vệ tính bí mật hoặc đắt hơn rõ ràng ở đó, chỉ ở nơi nhà cung cấp thực sự cho khởi động, giải phóng nhanh máy bảo vệ tính bí mật. Chúng tôi muốn dùng năng lực rảnh máy riêng giờ yên cho nhiệm vụ quỹ, như phân tích cho Omniforum; giá trị theo giá API không phải thu vào ngân sách, nên nhiệm vụ ấy có mục tiêu, ngân sách riêng. Sau thí điểm đầu, chúng tôi muốn thử hai chế độ: “Trò chuyện” cho làm việc thường với trợ lý, “Không vội” cho nhiệm vụ chờ được như dịch tài liệu. Ở “Không vội”, chúng tôi hiển thị khoảng bắt đầu dự kiến, ước tính chi phí, ngân sách tối đa, khả năng hủy tính phí phần đã làm, cùng thông tin bảo vệ. Giá thấp hơn cho việc ấy chỉ có thể khi từ cách chia chi phí công khai, không tính hai lần chi phí cố định.

### 8.3. Đo sử dụng không có nội dung trò chuyện

Để tính sử dụng thực tế, chúng tôi đo tài nguyên cần làm nhiệm vụ, mô tả rõ phần chi phí cố định. Bộ đếm tính phí giới hạn ở dữ liệu cần kiểm tra chi phí; nội dung trò chuyện không cần để lập hóa đơn. Trong thử nghiệm, chúng tôi sẽ kiểm tra độ chính xác phép đo, cách người dùng kiểm soát, phạm vi siêu dữ liệu lộ và hành vi dịch vụ khi đạt giới hạn chi tiêu. Nguyên tắc hóa đơn, làm tròn, trả trước, hoàn tiền được [sách trắng nguyên tắc quỹ](whitepaper-zasady-fundacji.md) mô tả.

Giới hạn chi tiêu người tham gia đặt được dự kiến là ranh giới, không phải cảnh báo sau sự việc. Một số nhà cung cấp chỉ tính yêu cầu đang chạy sau hoàn thành, nên hạn mức có thể vượt; Tinfoil chẳng hạn mô tả như vậy.[^tinfoil] Vì thế chúng tôi thiết kế giữ trước: trước gửi yêu cầu, cổng Suveria tách từ số dư chi phí tối đa được phép, tính cả yêu cầu khác đang chạy, hạn chế số yêu cầu đồng thời và độ dài trả lời. Sau xong, tính chi phí thực, giải phóng phần giữ không dùng. Đây là yêu cầu cần xây, kiểm tra, không phải chức năng đang hoạt động.

## 9. Thử nghiệm nghiệm thu và nhật ký kết quả

Trước gọi bất kỳ bản phát hành nào là bảo vệ tính bí mật, chúng tôi sẽ ghi tài liệu ít nhất:

- chứng thực đúng;
- từ chối gửi dữ liệu sau mã hay khóa bị tráo;
- cô lập phiên;
- hạn chế của quản trị viên;
- không nội dung trong nhật ký, bản kết xuất, dữ liệu đo từ xa;
- xử lý bộ nhớ đệm;
- xóa, khôi phục;
- hành vi sau sự cố;
- ranh giới công cụ;
- chi phí dưới tải.

Kết quả gồm phiên bản cấu hình, kịch bản chúng tôi đã cố phá bảo vệ.

Chúng tôi muốn mỗi bản phát hành Suveria vượt tất cả cửa kiểm tra bằng chứng của ít nhất một bên độc lập kiểm chứng dịch vụ bảo vệ tính bí mật: phần cứng, trạng thái bảo vệ, độ mới bằng chứng, gắn khóa kết nối với môi trường bảo vệ, định danh chương trình chạy, nguồn gốc mã, gắn yêu cầu với máy cụ thể, giữ khả dụng. Kết quả được công bố có ngày quan sát, phiên bản tiêu chí, bằng chứng cho đúng bản phát hành, mô hình, tuyến yêu cầu; liên hệ của bên kiểm chứng được mô tả cùng kết quả. Chúng tôi không hứa vị trí trong bảng xếp hạng nào. Vượt kiểm chứng nghĩa đạt kiểm soát mô tả tại thời điểm ấy, có giới hạn công khai, không thay kiểm toán hay thử nghiệm riêng của chúng tôi.

Khi vận hành phương án bảo vệ tính bí mật riêng, chúng tôi sẽ đăng ký Suveria với mọi danh mục độc lập kiểm tra tính bí mật khi vận hành mô hình, cung cấp điểm kiểm tra chứng thực; ví dụ đầu là confidentialinference.net (tình trạng ngày 31 tháng 10 năm 2026).[^confidentialinference] Chúng tôi không hứa được ghi vào, vì danh mục quyết định; chúng tôi hứa đăng ký, trả lời câu hỏi, công bố kết quả có ngày, kể cả xấu. Danh mục chỉ kiểm tra điều thấy từ ngoài, thường chứng thực, kênh kết nối; không thay kiểm toán mã, cấu hình hay đánh giá kênh bên.

Thử lưu trữ, di chuyển gồm:

- khôi phục bản sao mã hóa trên thiết bị có quyền khác và từ chối đọc không đúng khóa;
- mất một thiết bị, khôi phục truy cập bằng cách chọn, trình bày rõ hệ quả mất mọi khóa;
- đồng bộ thay đổi đồng thời không âm thầm ghi đè một phiên bản;
- đọc bản xuất trong công cụ độc lập không tài khoản ở bên vận hành ban đầu, so bản gốc, lịch sử, nguồn, liên hệ;
- hạn chế phạm vi tích hợp, ngừng hiệu quả truy cập tiếp sau thu hồi quyền.

Các giai đoạn:

1. thử tính dễ dùng trên tài liệu không nhạy cảm;
2. thử kỹ thuật bảo vệ;
3. thí điểm giới hạn với điều kiện rõ;
4. tăng dần quy mô.

Trước đợt thí điểm, chúng tôi sẽ xác định và công bố các ngưỡng: thời gian đến khi xuất hiện từ đầu tiên của câu trả lời, chi phí tính toán trên mỗi người theo hồ sơ sử dụng đã đo và chất lượng mô hình theo [sách trắng về tài liệu và bộ chuẩn đánh giá](whitepaper-materialy-i-benchmark.md). Chúng tôi sẽ coi đợt thí điểm là thành công khi đạt cả ba.

Đổi mô hình, phần sụn hay cách đăng nhập vào tài khoản có thể cần xét lại việc đáp ứng tiêu chuẩn; cập nhật không được âm thầm làm yếu bảo vệ đã thống nhất. Mỗi bản phát hành có phiếu công khai:

- phạm vi hoạt động;
- bằng chứng thử nghiệm;
- giới hạn đã biết;
- người chịu trách nhiệm;
- chi phí;
- cách báo vấn đề;
- kế hoạch rút lui.

Phát hiện lỗ hổng dẫn đến hạn chế phơi nhiễm, thông tin người bị ảnh hưởng, sửa chữa kiểm tra được.

Chúng tôi muốn thử công khai. Mời người làm an toàn, mật mã, hạ tầng, ứng dụng, cả người sáng tạo giới thiệu công nghệ cho đông công chúng cùng thiết kế phép thử, thử phá bảo vệ trên tài khoản thử tách riêng với dữ liệu bịa. Chúng tôi cũng mời người phê bình. Không trả cho quảng bá; mỗi hợp tác được đánh dấu theo [sổ ghi nhận lợi ích](whitepaper-zasady-fundacji.md) (chương 7 sách trắng nguyên tắc quỹ). Kết quả, kể cả thất bại, vào nhật ký kết quả. Muốn tham gia, hãy viết [salve@novusignis.org](mailto:salve@novusignis.org?subject=%5BDo%C5%82%C4%85cz%5D%20Pr%C3%B3by%20Suverii) với chủ đề “[Dołącz] Próby Suverii”.

Thử quan trọng nhất: nhóm có quyền bên vận hành ngoài môi trường bảo vệ tính bí mật (cổng, đĩa, mạng, nhật ký) cố đọc trò chuyện tài khoản thử có giấu chuỗi ký tự bí mật. Nếu bất kỳ ai lấy được, kể cả chúng tôi, thử nghiệm thất bại.

Chúng tôi sẽ cung cấp bản Suveria đầu cho vài người giúp cấu hình. Nếu dùng API bảo vệ tính bí mật, phiếu bảo vệ (mục 2.3) sẽ nói thẳng mô hình chạy tại nhà cung cấp ngoài, chứng thực do nhà cung cấp tuyên bố, chúng tôi chưa kiểm tra, siêu dữ liệu không được bảo vệ. Vì những người đầu cũng giúp vận hành dịch vụ, kết quả đầu công bố sẽ là thử quan trọng nhất ở trên, mô tả bên vận hành làm được gì.

**Nhật ký kết quả.** Tình trạng ngày 29 tháng 10 năm 2026: chúng tôi chưa tiến hành bất kỳ thử nghiệm nào mô tả ở đây, chưa thuê card đồ họa, chưa chạy mô hình trong Suveria. Mỗi kết quả tiếp được thêm ở đây có ngày, cấu hình, kịch bản, kết luận, kể cả khi thử không thành.

Còn cần giải quyết:

- mô hình đầu, mức chất lượng chấp nhận được;
- kiểm chứng độc lập API bảo vệ tính bí mật, máy bảo vệ tính bí mật, khả dụng ở thẩm quyền tài phán bảo vệ mạnh dữ liệu cá nhân, như Liên minh châu Âu với RODO;
- thời gian trả lời;
- quy tắc khóa, ký ức;
- phạm vi tối thiểu dữ liệu tính phí;
- nghĩa vụ pháp lý bên vận hành với báo lạm dụng;
- cách tài trợ tính liên tục.

[Sách trắng nguyên tắc quỹ](whitepaper-zasady-fundacji.md) mô tả ngân sách, hóa đơn, trách nhiệm; [sách trắng tài liệu và bộ chuẩn đánh giá](whitepaper-materialy-i-benchmark.md) mô tả đánh giá hành vi mô hình.

Quỹ Novus Ignis, Poznań, KRS 0001269575. Trang và tuyên ngôn: novusignis.org. Ý kiến: salve@novusignis.org.

## Chú thích

[^teefail]: [TEE.fail: Breaking Trusted Execution Environments via DDR5 Memory Bus Interposition](https://tee.fail/). Nghiên cứu của Georgia Tech, Purdue University và Synkhronix, công bố 28.10.2025: lấy khóa chứng nhận Intel TDX, SGX, AMD SEV-SNP bằng nối vật lý bus bộ nhớ DDR5, ảnh hưởng điện toán bảo vệ tính bí mật NVIDIA. Cần tiếp cận vật lý máy chủ; Intel, AMD coi tấn công ấy ngoài phạm vi bảo vệ. Giới thiệu: [The Hacker News](https://thehackernews.com/2025/10/new-teefail-side-channel-attack.html). Truy cập 28.10.2026.

[^local-first]: [Kleppmann, Wiggins, van Hardenberg và McGranaghan (2019): Local-first software: You own your data, in spite of the cloud](https://www.inkandswitch.com/essay/local-first/). Bài viết chuyên đề. Nguyên tắc lưu bản chính trên thiết bị người dùng và vai trò hỗ trợ máy chủ, kể cả bản sao mã hóa.

[^apple-pcc]: [Apple: Private Cloud Compute](https://security.apple.com/blog/private-cloud-compute/). Mô tả kiến trúc. Ví dụ gắn tính bí mật với kiểm soát phần mềm, minh bạch hệ thống.

[^ohttp]: [RFC 9458: Oblivious HTTP](https://www.rfc-editor.org/rfc/rfc9458.html). Đặc tả. Tách thông tin về người gửi, yêu cầu theo mô hình tin cậy nhất định, không ẩn danh đầy đủ.

[^weiss-keylogging]: [Weiss, Ayzenshteyn, Amit và Mirsky (2024): What Was Your Prompt? A Remote Keylogging Attack on AI Assistants](https://www.usenix.org/conference/usenixsecurity24/presentation/weiss). Công trình khoa học (USENIX Security 2024; bản thảo arXiv 2403.09751). Từ độ dài gói mã hóa trong luồng trả lời, người quan sát mạng tái dựng chủ đề, một phần nội dung trả lời trợ lý. Truy cập 30.10.2026.

[^whisper-leak]: [McDonald và Bar Or (2025): Whisper Leak: a side-channel attack on Large Language Models](https://arxiv.org/abs/2511.03675) và [giới thiệu của Microsoft (7.11.2025)](https://www.microsoft.com/en-us/security/blog/2025/11/07/whisper-leak-a-novel-side-channel-cyberattack-on-remote-language-models/). Công trình nghiên cứu, mô tả nhà sản xuất. Có thể nhận chủ đề trò chuyện từ kích thước, nhịp gói trong luồng trả lời mã hóa; một số nhà cung cấp thêm phần đệm ngẫu nhiên vào gói. Truy cập 30.10.2026.

[^nvidia-platformy]: [NVIDIA: nền tảng hỗ trợ vùng chứa bảo vệ tính bí mật](https://docs.nvidia.com/datacenter/cloud-native/confidential-containers/latest/supported-platforms.html). Tài liệu nhà sản xuất. Yêu cầu toàn cấu hình bộ xử lý, card, phần mềm.

[^nvidia-ppcie-v2]: [NVIDIA: Protected PCIe v2, Introduction](https://docs.nvidia.com/attestation/attestation-client-tools-ppcie-sdk-cpp/latest/ppcie_introduction.html). Tài liệu nhà sản xuất. Trong chế độ PPCIe v2, mạng NVLink, NVSwitch thuộc phần tin cậy hệ thống; bảo vệ PCIe không có nghĩa là mã hóa toàn lưu lượng giữa card.

[^nvidia-blackwell]: [NVIDIA: Trusted Computing Solutions 595](https://docs.nvidia.com/595trd1-trusted-computing-solutions-release-notes.pdf). Tài liệu nhà sản xuất. Chế độ điện toán bảo vệ tính bí mật trên nhiều card Blackwell, kể cả bảo vệ kết nối; cần cấu hình tương thích.

[^osi]: [OSI: Open Source AI Definition](https://opensource.org/ai/open-source-ai-definition). Định nghĩa. Trọng số mở không quyết định đã đáp ứng toàn định nghĩa hệ thống mở.

[^deepseek]: [DeepSeek-V4.1-Flash: phiếu mô hình](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash). Tài liệu nhà sản xuất. Kiến trúc, giấy phép MIT, khả năng mô hình được tuyên bố; không phải phép đo hiệu năng Suveria.

[^dpga]: [Digital Public Goods Alliance: tiêu chuẩn](https://www.digitalpublicgoods.net/standard). Tiêu chuẩn. Tiêu chí đánh giá hàng hóa công cộng số; hướng thiết kế không phải sự công nhận đã nhận từ DPGA.

[^lambda-cennik]: [Lambda: bảng giá bản chạy](https://lambda.ai/pricing). Bảng giá nhà cung cấp. NVIDIA B200 SXM6 180 GB: 6,79 USD mỗi giờ-card với bản chạy bốn card, 6,69 USD với tám; H100 SXM 80 GB: 3,99 USD; giá theo yêu cầu, chưa thuế, không chế độ bảo vệ tính bí mật. Truy cập 29.10.2026.

[^lambda-v41]: [Lambda: DeepSeek-V4.1-Flash, kết quả đo hiệu năng](https://lambda.ai/inference-models/deepseek-ai/deepseek-v4.1-flash). Phép đo nhà cung cấp. 4 × B200, vLLM, song song tensor 4, giải mã suy đoán, khoảng 8.192 token đầu vào, 1.024 đầu ra mỗi yêu cầu; với 64 yêu cầu đồng thời, tổng 3.713,9 token đầu ra mỗi giây, trung bình 66,8 token mỗi giây mỗi trò chuyện. Không có ngày đo. Truy cập 28.10.2026.

[^azure-ncc]: [Azure: bảng giá máy NCC40ads H100 v5](https://prices.azure.com/api/retail/prices?$filter=armSkuName%20eq%20%27Standard_NCC40ads_H100_v5%27%20and%20priceType%20eq%20%27Consumption%27) và [mô tả dòng máy](https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/gpu-accelerated/nccadsh100v5-series). Bảng giá nhà cung cấp. Máy bảo vệ tính bí mật một card H100 NVL 94 GB; 6,98 USD/giờ (East US 2) đến 8,90 USD (West Europe), Linux, trả theo sử dụng. Truy cập 28.10.2026.

[^deepseek-cennik]: [DeepSeek: bảng giá API (bản tiếng Trung)](https://api-docs.deepseek.com/zh-cn/quick_start/pricing). Bảng giá nhà cung cấp. Mô hình deepseek-flash (V4.1-Flash-1017): đầu vào không trúng bộ nhớ đệm 1 CNY ngoài giờ đỉnh, 2 CNY giờ đỉnh, đầu ra 4, 8 CNY mỗi triệu token. Đổi sang USD theo [bảng eesel](https://www.eesel.ai/blog/deepseek-v4-1-flash-pricing), nguồn hỗ trợ. Truy cập 28.10.2026.

[^abonamenty]: Giá thuê bao: [ChatGPT Plus](https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus), [Claude Pro](https://claude.com/pricing), [Google AI Pro](https://gemini.google/subscriptions/), [Kimi Plus (bảng geotoolbox)](https://geotoolbox.ai/blog/kimi-pricing); trò chuyện DeepSeek miễn phí ([mô tả](https://en.wikipedia.org/wiki/DeepSeek_(chatbot))). Giá tháng USD, chưa thuế; Kimi Plus 19 USD. Truy cập 28–29.10.2026.

[^kimi-k31]: [Moonshot: ra mắt Kimi K3.1 Pro](https://forum.moonshot.ai/t/kimi-k3-1-pro-has-launched-start-exploring-now/629) và [Kimi: mô tả K3.1 Pro (24.10.2026)](https://www.kimi.com/news/kimi-k3-1-pro). Tài liệu nhà sản xuất. Phiên bản Kimi K3 được huấn luyện thêm, khoảng 3 nghìn tỷ tham số, ngữ cảnh 1 triệu token, trọng số được hẹn trước 4.11.2026; giấy phép chưa công bố. Giá API theo OpenRouter: 2 / 10 USD mỗi triệu token.

[^kimi-k3]: [Kimi K3: phiếu mô hình](https://huggingface.co/moonshotai/Kimi-K3). Tài liệu nhà sản xuất. 2,8 nghìn tỷ tham số, 104 tỷ hoạt động, ngữ cảnh khoảng 1 triệu, MXFP4, giấy phép Kimi K3 License.

[^spheron-kimi]: [Spheron: triển khai Kimi K3 (19.10.2026)](https://www.spheron.network/blog/deploy-kimi-k3-gpu-cloud/). Hướng dẫn nhà cung cấp. Tệp trọng số 1.560,94 GB, cấu hình chứa được mô hình. Sức chứa khoảng 1.000–1.600 token mỗi giây trên 8 × B300 theo bảng đo bên thứ ba ngày 29.10.2026; độ phân tán lớn.

[^aa]: [Artificial Analysis: Kimi K3.1 Pro và DeepSeek V4.1 Flash 1017](https://artificialanalysis.ai/models/comparisons/kimi-k3-1-pro-vs-deepseek-v4-1-flash-1017). So sánh độc lập. Chỉ số v5 ngày 28.10.2026: 46, 32; tốc độ khoảng 36, 178 token mỗi giây. Truy cập 29.10.2026.

[^tinfoil]: [Tinfoil: bảng giá](https://tinfoil.sh/pricing). Bảng giá nhà cung cấp. DeepSeek-V4.1-Flash 0,65 USD đầu vào, 1,45 USD đầu ra mỗi triệu token; mô tả giới hạn chi tiêu. Truy cập 29.10.2026.

[^phala-api]: [Phala: mô hình bảo vệ tính bí mật](https://phala.com/confidential-ai-models). Bảng giá nhà cung cấp. DeepSeek V4.1 Flash 1017: 0,75 / 1,60 USD; Kimi K3: 3 / 15 USD mỗi triệu token; chứng thực cổng, xác nhận trả lời theo nhà cung cấp. Truy cập 29.10.2026.

[^near]: [NEAR AI: bảng giá](https://near.ai/pricing). Bảng giá nhà cung cấp. Kimi K3: 3,30 / 16,50 USD mỗi triệu token; trang chính giá khác, khác biệt cần làm rõ. Truy cập 29.10.2026.

[^phala-gpu]: [Phala: card đồ họa bảo vệ tính bí mật](https://phala.com/gpu-tee) và [bảng giá](https://cloud.phala.com/about/pricing). Bảng giá nhà cung cấp. 8 × H200: 44,20 USD/giờ theo yêu cầu, 32,20 USD với cam kết 180 ngày; 8 × B300: 65,60 USD (30 ngày), 62,40 USD (180 ngày); Intel TDX với điện toán bảo vệ tính bí mật NVIDIA; không máy ở châu Âu. Truy cập 29.10.2026. Cam kết trả trước, không hoàn khi dừng sớm.

[^privatemode]: [Privatemode (Edgeless Systems)](https://www.privatemode.ai/). Chào hàng nhà cung cấp. API bảo vệ tính bí mật có máy chủ Liên minh châu Âu, chứng thực từ xa; lựa chọn mô hình mở ít hơn nhà cung cấp Mỹ, không công bố giá. Tính bí mật do nhà cung cấp tuyên bố, chúng tôi chưa kiểm tra. Truy cập 30.10.2026.

[^katalog]: [Confidential Inference Directory: phương pháp và quan sát](https://confidentialinference.net/attestation). Danh mục độc lập, được doanh nghiệp cung cấp suy luận bảo vệ tính bí mật tài trợ. 0 trong 95 tuyến được kiểm chứng đầu cuối trong quan sát 29.10.2026, 14:00:19 UTC.

[^supermicro]: [Supermicro: máy chủ AS-8126GS-NB3RT-01-G2](https://store.supermicro.com/us_en/8u-gpu-gold-series-as-8126gs-nb3rt-01-g2.html) và [GPU Per Hour: giá máy chủ NVIDIA](https://gpuperhour.com/blog/nvidia-gpu-prices). Chào hàng nhà sản xuất, bảng giá. Máy chủ hoàn chỉnh tám B300: 662.845,95 USD (21.09.2026).

[^semianalysis]: [BigGo Finance về phân tích SemiAnalysis (7.10.2026)](https://finance.biggo.com/news/173039423dab79be). Phân tích ngành. Gói 200 USD cho khoảng 12 nghìn USD theo giá API niêm yết khi làm việc cường độ cao; ước tính biên lợi nhuận, không phải dữ liệu công ty.

[^sglang-k3]: [SGLang: công thức cho Kimi K3](https://github.com/sgl-project/sglang/blob/main/docs/cookbook/autoregressive/Moonshotai/Kimi-K3.mdx). Tài liệu bộ máy. Cấu hình Kimi K3 đã kiểm tra trên 8 × B300, không áp dụng Kimi K3.1 hay chế độ bảo vệ tính bí mật.

[^phala-cvm]: [Phala: bảng giá máy bảo vệ tính bí mật](https://phala.com/pricing). Bảng giá nhà cung cấp. tdx.large (4 bộ xử lý ảo, 8 GB bộ nhớ): 0,23 USD/giờ; đĩa 0,000139 USD mỗi GB mỗi giờ. Truy cập 29.10.2026.

[^itu]: [ITU: Facts and Figures 2025, sử dụng internet](https://www.itu.int/itu-d/reports/statistics/2025/10/15/ff25-internet-use). Thống kê quốc tế. Tỷ lệ người dùng internet trong các khu vực thế giới năm 2025 (khoảng 6 tỷ người, 74% dân số); tỷ trọng khu vực trong phép tính của chúng tôi là xấp xỉ: tỷ lệ × dân số khu vực.

[^cai]: [Confidential AI: bảng giá](https://confidential.ai/pricing). Bảng giá nhà cung cấp, giá ngày 26.10.2026. DeepSeek V4.1 Flash: 0,30 USD đầu vào, 0,03 USD đầu vào từ bộ nhớ đệm, 1,20 USD đầu ra mỗi triệu token; máy 8 × B300 60 USD/giờ, tối thiểu ba tháng, cấp trong vài ngày. Tính bí mật do nhà cung cấp tuyên bố, chúng tôi chưa kiểm tra.

[^voltage]: [VoltageGPU: bảng giá](https://voltagegpu.com/pricing) và [phạm vi bằng chứng](https://voltagegpu.com/). Bảng giá, tuyên bố nhà cung cấp. 8 × H200 64,62 USD/giờ, tính từng giây; bằng chứng công bố không gồm chứng thực cấu hình này hay bộ chuyển mạch NVSwitch.

[^epoch]: [The Decoder về dữ liệu Epoch AI (8.01.2026)](https://the-decoder.com/global-ai-compute-hits-15-million-h100-equivalents-epoch-ai-finds/) và [Epoch AI: AI Chip Users](https://epoch.ai/data/ai-chip-users). Bảng tổng hợp của viện nghiên cứu độc lập. Năng lực tính toán trí tuệ số đã lắp đặt hơn 15 triệu NVIDIA H100 tương đương, nhu cầu hơn 10 GW. Ước tính, không phải phép đo.

[^confidentialinference]: [confidentialinference.net](https://confidentialinference.net): so nhà cung cấp vận hành mô hình trong môi trường thực thi tin cậy, có kiểm tra chứng thực có ngày; trang được Enclava tài trợ, lúc truy cập có mười một nhà cung cấp. Truy cập 31.10.2026.
