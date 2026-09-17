import Callout from '../components/Callout'
import SectionHeader from '../components/SectionHeader'
import Step from '../components/Step'
import Table from '../components/Table'

const kindRows = [
  [<><code>kind=4</code></>, 'WEB_ELEMENT', <span className="font-bold text-green-700">✅ Có</span>, 'Click vào nút xác định qua ID / class / text. Loại phổ biến nhất.'],
  [<><code>kind=2</code></>, 'KEYWORD / URL', <span className="font-bold text-green-700">✅ Có</span>, 'Người dùng truy cập trang có URL khớp từ khóa (trang cảm ơn, xác nhận đơn hàng,…).'],
  [<><code>kind=3</code></>, 'STANDARD', <span className="font-bold text-red-600">❌ Chưa có</span>, <>Gọi lập trình với tham số: <code>ztrq('track', 'Purchase', {'{'} value, currency {'}'})</code>. Chưa tạo được trong ZAM — backend chỉ dùng nội bộ cho LadiPage/MiniApp.</>],
  [<><code>kind=1</code></>, 'BUTTON', <span className="text-slate-400">— Ẩn</span>, 'Phiên bản cũ, thay bằng kind=4 linh hoạt hơn.'],
]

export default function GtmSetup() {
  return (
    <section id="gtm" className="pt-14">
      <SectionHeader
        label="Setup GTM"
        title="Cài đặt Zalo Pixel trong Google Tag Manager"
        desc="Thực hiện một lần duy nhất cho mỗi website. Chỉ cần 1 tag Initialize — toàn bộ click tracking hoạt động từ tag này."
      />

      <Callout type="tip" title="Cần chuẩn bị trước">
        Tài khoản Google Tag Manager · Pixel ID — lấy tại Zalo Ads Manager → <strong>Công cụ → Thư viện chuyển đổi → Pixel của tôi → Lấy mã Pixel</strong>
      </Callout>

      <div className="mt-4">
        <Step num={1} title="Nhúng GTM snippet vào website">
          <p>Developer thực hiện một lần duy nhất — lấy đoạn code từ GTM → <strong>Quản trị → Cài đặt Google Tag Manager</strong>. Có 2 đoạn cần nhúng:</p>
          <Table
            headers={['Vị trí', 'Đoạn code cần nhúng']}
            rows={[
              [<>Ngay sau thẻ mở <code>&lt;head&gt;</code></>, <><code>&lt;!-- Google Tag Manager --&gt;</code><br /><code>&lt;script&gt;(function(w,d,s,l,i){`{...}`})(&#39;GTM-XXXXXXX&#39;);&lt;/script&gt;</code></>],
              [<>Ngay sau thẻ mở <code>&lt;body&gt;</code></>, <><code>&lt;noscript&gt;&lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"...&gt;&lt;/iframe&gt;&lt;/noscript&gt;</code></>],
            ]}
          />
          <Callout type="info">
            Thay <code>GTM-XXXXXXX</code> bằng GTM ID thực của container (ví dụ <code>GTM-NZJLBMFK</code>). Sau khi nhúng xong, mọi tag trong GTM sẽ hoạt động — developer không cần động vào code website nữa.
          </Callout>
        </Step>

        <Step num={2} title='Import Zalo Pixel Template vào GTM'>
          <p>GTM → <strong>Mẫu → Mẫu thẻ → Mới</strong> → nhấn dấu <strong>⋮</strong> góc trên phải → <strong>Nhập</strong> → chọn file <code>template.tpl</code> → xem lại các quyền → <strong>Lưu</strong>.</p>
          <p>Sau khi import xong, khi tạo tag mới sẽ thấy <strong>"Zalo Pixel"</strong> xuất hiện trong danh sách loại thẻ tùy chỉnh.</p>
        </Step>

        <Step num={3} title="Tạo biến chứa Pixel ID">
          <p>GTM → <strong>Biến → Mới</strong> → loại <strong>Không đổi (Constant)</strong> → dán Pixel ID → đặt tên biến là <code>Zalo Pixel ID</code> → <strong>Lưu</strong>.</p>
          <Callout type="info">
            Lưu Pixel ID vào biến giúp khi cần đổi (staging → production) chỉ sửa một chỗ duy nhất.
          </Callout>
        </Step>

        <Step num={4} title="Tạo Trigger — Initialization">
          <p>Tag Initialize phải chạy <em>trước</em> mọi tag khác. Dùng trigger loại <strong>Lượt xem trang — Khởi tạo</strong>:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>GTM → <strong>Trình kích hoạt → Mới</strong></li>
            <li>Loại trigger: <strong>Lượt xem trang — Khởi tạo</strong></li>
            <li>Kích hoạt trên: <em>Tất cả sự kiện khởi tạo</em></li>
            <li>Đặt tên: <code>Trigger - Initialization - All Pages</code> → <strong>Lưu</strong></li>
          </ul>
        </Step>

        <Step num={5} title="Tạo Tag Initialize — tag duy nhất cần tạo">
          <Table
            headers={['Trường trong GTM', 'Giá trị cần điền']}
            rows={[
              ['Loại thẻ', <><strong>Zalo Pixel</strong> (trong danh sách Thẻ tùy chỉnh)</>],
              ['Action', <><strong>Initialize</strong></>],
              ['Pixel ID', <><code>{'{{Zalo Pixel ID}}'}</code> (biến vừa tạo)</>],
              ['Trình kích hoạt', <><code>Trigger - Initialization - All Pages</code></>],
              ['Tên thẻ', <><code>Zalo Pixel — Initialize</code></>],
            ]}
          />
          <Callout type="ok">
            Chỉ cần tag này. Sau khi GTM publish, ztracker.js tự load → tự lấy quy tắc từ ZAM → tự gắn click listener.
          </Callout>
        </Step>

        <Step num={6} title="Publish Container" last>
          <p>GTM → nút <strong>Gửi (Submit)</strong> góc trên phải → đặt tên phiên bản → <strong>Xuất bản</strong>.</p>
          <Callout type="ok">GTM setup hoàn tất. Bước tiếp theo: tạo Conversion trong Zalo Ads Manager.</Callout>
        </Step>
      </div>

      <div className="mt-8">
        <h3 className="text-base font-bold text-slate-900 mb-2">Giới hạn hiện tại — Loại conversion Zalo Ads hỗ trợ</h3>
        <p className="text-sm text-slate-500 mb-3">
          Khi tạo conversion trong ZAM, hệ thống chỉ cho phép 2 loại: <strong>click nút bấm</strong> và <strong>truy cập URL</strong>. Backend Zalo chỉ sinh ra 2 kind khi trả về quy tắc cho ztracker:
        </p>
        <Table headers={['Kind', 'Tên', 'Tạo được trong ZAM?', 'Tracking được gì']} rows={kindRows} />
        <Callout type="warn" title="Vì chỉ có kind=2 và kind=4 — tracking tham số chưa khả dụng">
          Các event kèm dữ liệu như giá trị đơn hàng (<code>value</code>), tiền tệ (<code>currency</code>), số lượng (<code>quantity</code>) yêu cầu kind=3 (Standard).
          Do ZAM chưa cho tạo loại conversion này, Tag <strong>Track Event</strong> trong template — dù đã có sẵn — sẽ <strong>không gửi được beacon</strong>. Chỉ cần dùng Tag Initialize là đủ cho mọi conversion hiện tại.
        </Callout>
      </div>
    </section>
  )
}
