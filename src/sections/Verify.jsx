import Callout from '../components/Callout'
import SectionHeader from '../components/SectionHeader'
import Step from '../components/Step'
import Table from '../components/Table'

const troubleshoot = [
  ['Không thấy request /ptrck/events', 'Tag Initialize chưa fire hoặc GTM chưa publish', 'Mở GTM Preview Mode, đảm bảo tag Zalo Pixel — Initialize xuất hiện. Kiểm tra trigger là loại Initialization. Publish container nếu chưa.'],
  [<>/ptrck/events trả về <code>[]</code></>, 'Chưa tạo Conversion trong Zalo Ads, hoặc URL không khớp Trang đích', 'Tạo Conversion trong Zalo Ads. Dùng kiểu Có chứa nếu URL có tham số query.'],
  ['Click nút không thấy /ptrck/log', 'Quy tắc Zalo Ads không khớp nút trên trang', 'Inspect nút bằng DevTools, kiểm tra id/class/text — phân biệt chữ hoa/thường.'],
  ['Beacon fire nhưng Zalo Ads không hiện dữ liệu', 'Delay báo cáo thông thường', 'Chờ 24–48 giờ. Beacon 200 OK nghĩa là Zalo đã nhận — báo cáo có độ trễ xử lý.'],
  ['GTM Preview không thấy tag nào', 'Container chưa publish hoặc GTM ID sai', 'Publish container. Kiểm tra GTM ID trong snippet nhúng vào website.'],
  ['Beacon thỉnh thoảng không fire', 'Nút bị unmount khỏi DOM trước khi event bubble lên document', 'Liên hệ developer — cần giữ nút trong DOM đủ lâu để click event bubble lên.'],
]

export default function Verify() {
  return (
    <section id="verify" className="pt-14">
      <SectionHeader
        label="Kiểm tra"
        title="Xác nhận tích hợp thành công"
        desc="Sau khi publish GTM và tạo Conversion trong Zalo Ads, dùng DevTools để xác nhận beacon đã gửi đến Zalo đúng cách."
      />

      <Step num={1} title="Mở DevTools → tab Network">
        <p>Trên trang web đã tích hợp, nhấn <strong>F12</strong> → chọn tab <strong>Network</strong> → gõ <code>ptrck</code> vào ô lọc để chỉ hiển thị request Zalo Pixel.</p>
      </Step>

      <Step num={2} title="Reload trang — kiểm tra 2 request khởi tạo">
        <p>Sau khi reload, phải thấy 2 request này xuất hiện ngay lập tức:</p>
        <div className="space-y-2 mt-2">
          {[
            { url: 'GET /ptrck/events?pixelId=...&url=...', badge: '200 OK', badgeCls: 'bg-green-100 text-green-800', note: 'ztracker tải danh sách quy tắc conversion từ Zalo Ads. Response là mảng JSON chứa các quy tắc id/class/text.' },
            { url: 'GET /tracklp?type=pageview&pId=...', badge: 'Pageview', badgeCls: 'bg-blue-100 text-blue-800', note: 'Beacon pageview tự động — xác nhận ztracker đã khởi tạo thành công.' },
          ].map(r => (
            <div key={r.url} className="flex gap-3 items-start bg-white border border-slate-200 rounded-xl p-3.5">
              <div className="flex-1 min-w-0">
                <code className="text-xs text-slate-700 break-all block">{r.url}</code>
                <p className="text-xs text-slate-500 mt-1">{r.note}</p>
              </div>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-md shrink-0 ${r.badgeCls}`}>{r.badge}</span>
            </div>
          ))}
        </div>
        <Callout type="warn">
          Nếu <strong>không thấy /ptrck/events</strong>: Tag Initialize chưa fire. Kiểm tra GTM Preview — trigger phải là loại <em>Initialization</em>, không phải <em>Page View</em>.
        </Callout>
      </Step>

      <Step num={3} title="Nhấp vào nút đã cấu hình — kiểm tra beacon conversion">
        <p>Click vào đúng nút đã cấu hình trong Zalo Ads. Phải xuất hiện ngay request <code>/ptrck/log</code>:</p>
        <div className="flex gap-3 items-start bg-white border border-slate-200 rounded-xl p-3.5 mt-2">
          <div className="flex-1 min-w-0">
            <code className="text-xs text-slate-700 break-all block">
              GET /ptrck/log?pId=...&amp;eId=839411886326153727&amp;<strong>et=4</strong>&amp;url=...&amp;eclckcb=%7B%22id%22%3A%5B%22btn-purchase%22%5D%7D
            </code>
            <p className="text-xs text-slate-500 mt-1">
              <strong>et=4</strong> — click detection thành công &nbsp;·&nbsp;
              <strong>eId</strong> — ID conversion trong Zalo Ads &nbsp;·&nbsp;
              <strong>eclckcb</strong> — nút đã khớp
            </p>
          </div>
          <span className="text-xs font-bold px-2.5 py-1 rounded-md shrink-0 bg-blue-100 text-blue-800">et=4</span>
        </div>
        <Callout type="ok">Thấy /ptrck/log với Status 200 OK và đúng eId là tích hợp thành công. Zalo đã ghi nhận lượt nhấp.</Callout>
        <Callout type="warn">Nếu click không ra /ptrck/log: Quy tắc trong Zalo Ads không khớp. Inspect nút, kiểm tra lại id/class/text (phân biệt hoa/thường).</Callout>
      </Step>

      <Step num={4} title="Debug trên thiết bị di động" last>
        <p>Thêm <code>?_ztrdebug=eruda</code> vào cuối URL để bật console debug ngay trên điện thoại. Eruda hiện console nổi ở góc màn hình — không cần cắm dây hay cài phần mềm.</p>
      </Step>

      <h3 className="text-base font-bold text-slate-900 mt-8 mb-3">Xử lý sự cố thường gặp</h3>
      <Table
        headers={['Triệu chứng', 'Nguyên nhân', 'Cách xử lý']}
        rows={troubleshoot}
      />
    </section>
  )
}
