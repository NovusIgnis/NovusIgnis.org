---
tytul: Thống kê trang
opis: Số lần đọc trang và tài liệu, tính tổng từ nhật ký máy chủ, không mã phân tích hay cookie
grupa: skroty
kolejnosc: 11
menu: Thống kê trang
---
# Thống kê trang

Chúng tôi muốn biết sự quan tâm đến quỹ thay đổi ra sao, văn bản nào được đọc nhiều nhất và công khai điều ấy. Tính bằng cách đơn giản nhất: nhật ký máy chủ vốn ghi mỗi lần tải trang. Trang không có mã phân tích, cookie hay thứ nhận ra bạn lần sau.

**Tình trạng ngày 31 tháng 10 năm 2026.** Trang đang chuyển sang gói lưu trữ cung cấp nhật ký máy chủ. Bắt đầu tính thống kê từ tháng 11 năm 2026; quy tắc dưới áp dụng từ tháng được tính đầu tiên.

## Điều được tính

- **Lượt xem trang:** số lần tải mỗi trang, tài liệu, riêng tiếng Ba Lan và tiếng Anh.
- **Tải tệp:** như `llms-full.txt`, tức tuyên ngôn và sách trắng trong một tệp.
- **Lượt bot truy cập** thuộc bốn nhóm: công cụ tìm kiếm; bot công ty xây mô hình trí tuệ số; mô hình đọc trang theo yêu cầu con người, chẳng hạn khi ai đó yêu cầu trợ lý trò chuyện của mình đọc tuyên ngôn; bot khác.
- **Tệp cho mô hình:** số lần bot mô hình lấy `llms.txt` và `llms-full.txt`.

## Điều không ghi

- Địa chỉ IP, mô tả trình duyệt đầy đủ hay thứ khác nhận diện một người.
- Lịch sử truy cập của một người: không gộp lượt xem thành lần ghé hoặc hồ sơ.
- Dữ liệu trang và dịch vụ khác.

Vì thế, chúng tôi không biết bao người ghé, chỉ số lần tải trang. Một người có thể mở nhiều lần, vài bot giả trình duyệt thường, nên số chỉ gần đúng.

## Cách tính

Mỗi tuần, chúng tôi lấy nhật ký máy chủ từ bảng điều khiển Infomaniak, công ty duy trì trang, vì nhật ký chỉ giữ vài ngày. Cuối tháng, mã `tools/statystyki.mjs` chỉ tính tổng đã nêu, lưu không địa chỉ IP hay mô tả trình duyệt. Bản nhật ký tải về giữ tối đa đến cuối tháng, xóa ngay sau tính. Trang [Dữ liệu của bạn](twoje-dane.md) mô tả xử lý dữ liệu.

## Kết quả

{{statystyki}}