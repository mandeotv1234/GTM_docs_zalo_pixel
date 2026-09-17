import Callout from '../components/Callout'
import SectionHeader from '../components/SectionHeader'
import Step from '../components/Step'
import Table from '../components/Table'

const exampleRows = [
  ['Mua hàng', 'Purchase', <><code>btn-purchase</code> hoặc Text: <em>Xác nhận đặt hàng</em></>],
  ['Thêm vào giỏ hàng', 'AddToCart', <><code>btn-add-to-cart</code> hoặc Text: <em>Thêm vào giỏ</em></>],
  ['Bắt đầu thanh toán', 'InitiateCheckout', <><code>btn-checkout</code> hoặc Text: <em>Tiến hành thanh toán</em></>],
  ['Gửi form tư vấn', 'Lead', <><code>btn-lead</code> hoặc Text: <em>Gửi yêu cầu tư vấn</em></>],
  ['Đăng ký tài khoản', 'CompleteRegistration', <>Text: <em>Đăng ký</em> hoặc <code>btn-register</code></>],
  ['Đặt lịch hẹn', 'Schedule', <>Text: <em>Đặt lịch</em> hoặc <code>btn-schedule</code></>],
  ['Liên hệ / Chat', 'Contact', <>Text: <em>Chat ngay</em> · Text: <em>Gọi điện tư vấn</em></>],
  ['Trang xác nhận đơn hàng', 'Purchase', <>URL Có chứa: <code>/order-success</code></>],
]

export default function ConversionSetup() {
  return (
    <section id="conversion" className="pt-14">
      <SectionHeader
        label="Zalo Ads Manager"
        title="Tạo Conversion trong ZAM"
        desc="Conversion khai báo cho Zalo biết nút nào trên trang cần ghi nhận. ztracker tải danh sách này mỗi khi trang load — không cần deploy lại GTM."
      />

      <Callout type="warn" title="GTM và ZAM phải được cấu hình cùng nhau">
        Tag Initialize trong GTM hoạt động với mọi Pixel ID, nhưng nếu chưa tạo Conversion trong ZAM thì ztracker không biết nút nào cần track và sẽ <strong>không gửi beacon nào</strong>. Hai bước này bắt buộc phải có nhau.
      </Callout>

      <p className="text-sm font-semibold text-slate-700 mt-5 mb-4">
        Đường dẫn: Zalo Ads Manager → <strong>Công cụ → Chuyển đổi → Tạo chuyển đổi</strong>
      </p>

      <Step num={1} title="Tên của conversion">
        <p>Đặt tên rõ ràng để phân biệt trong báo cáo. Tối đa 180 ký tự, không được trùng tên đã dùng.</p>
        <p><strong>Gợi ý:</strong> <em>Website - Mua hàng</em> · <em>Landing page - Gửi form tư vấn</em> · <em>Homepage - Đặt lịch hẹn</em></p>
      </Step>

      <Step num={2} title="Loại conversion">
        <p>Chọn loại sự kiện phù hợp từ dropdown — nhãn phân loại để báo cáo hiển thị đúng cột số liệu.</p>
        <p><strong>Ví dụ:</strong> Nút "Đặt hàng" → <em>Purchase</em> · Nút "Gửi form tư vấn" → <em>Lead</em> · Nút "Đặt lịch" → <em>Schedule</em></p>
      </Step>

      <Step num={3} title="Trang đích liên kết">
        <p>Nhập URL trang web chứa nút cần track. Chọn kiểu khớp URL:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Bằng</strong> — chỉ theo dõi đúng trang này (URL phải khớp chính xác)</li>
          <li><strong>Có chứa</strong> — theo dõi tất cả URL chứa chuỗi này, dùng khi URL có tham số động</li>
        </ul>
        <Callout type="info">
          Sau khi nhập URL và rời ô nhập liệu, hệ thống <strong>tự động tải danh sách phần tử</strong> trên trang đó để hỗ trợ bước cấu hình nút bấm tiếp theo.
        </Callout>
      </Step>

      <Step num={4} title="Thêm sự kiện nút bấm">
        <p>Click <strong>"Thêm sự kiện nút bấm"</strong>. Xác định nút bấm bằng một trong ba thuộc tính:</p>
        <Table
          headers={['Cách xác định', 'Ví dụ điền vào ZAM', 'Khi nào dùng']}
          rows={[
            ['ID của nút bấm', <><code>btn-purchase</code></>, 'Developer đặt thuộc tính id — chính xác nhất, khuyến nghị dùng đầu tiên'],
            ['Class của nút bấm', <><code>btn-add-to-cart</code></>, 'Nút không có ID cố định hoặc muốn track nhiều nút cùng kiểu'],
            ['Nội dung của nút bấm', <em>Tiến hành thanh toán</em>, 'Không có ID/class cố định, hoặc không thể sửa code website'],
          ]}
        />
        <ul className="list-disc pl-5 space-y-1">
          <li>Có thể thêm tối đa <strong>10 nút bấm</strong> cho một conversion</li>
          <li>Nếu có nhiều điều kiện, ztracker phải khớp <strong>tất cả</strong> mới tính là nhấp đúng nút</li>
        </ul>
      </Step>

      <Step num={5} title="Thêm sự kiện đường dẫn URL (tùy chọn)">
        <p>Ghi nhận conversion khi người dùng truy cập vào URL cụ thể — ví dụ trang xác nhận đơn hàng <code>/order-success</code> hoặc trang cảm ơn <code>/thank-you</code>.</p>
        <p>Click <strong>"Thêm sự kiện đường dẫn URL"</strong> và nhập từ khóa URL. ztracker tự kiểm tra URL ngay khi trang load.</p>
      </Step>

      <Step num={6} title="Lưu Conversion" last>
        <p>Click <strong>"Lưu conversion"</strong>. Nút Lưu chỉ active khi đã điền đủ: Tên, Loại conversion, Trang đích, và ít nhất 1 sự kiện.</p>
        <Callout type="ok">
          Ngay sau khi lưu, lần tải trang tiếp theo ztracker tự nhận quy tắc mới và bắt đầu giám sát nút vừa cấu hình — không cần publish lại GTM.
        </Callout>
      </Step>

      <h3 className="text-base font-bold text-slate-900 mt-8 mb-3">Ví dụ conversion thường gặp</h3>
      <Table
        headers={['Tên Conversion', 'Loại (chọn trong ZAM)', 'Cấu hình nút bấm']}
        rows={exampleRows}
      />
    </section>
  )
}
