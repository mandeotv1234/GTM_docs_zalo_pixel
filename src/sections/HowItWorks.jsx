import Callout from '../components/Callout'
import SectionHeader from '../components/SectionHeader'

const flow = [
  { label: '🌐 Trang web load', sub: null },
  { label: '🏷 GTM: Tag Initialize fire', sub: 'Trigger: Initialization — All Pages', yellow: true },
  { label: '⚙️ ztracker.js tải từ CDN', sub: 's.zzcdn.me' },
  { label: '📋 GET /ptrck/events → nhận danh sách quy tắc conversion', sub: 'id / class / text của từng nút cần track ← từ Zalo Ads Manager' },
  { label: '👂 Gắn click listener toàn trang', sub: "document.addEventListener('click', ...)" },
  { label: '🔍 User click → dò ngược DOM → khớp quy tắc?', sub: null },
  { label: '✅ GET /ptrck/log → Zalo Ads Manager ghi nhận conversion', sub: null, green: true },
]

export default function HowItWorks() {
  return (
    <section id="how" className="pt-14">
      <SectionHeader
        label="Cơ chế hoạt động"
        title="Từ load trang đến beacon conversion"
        desc="Toàn bộ luồng diễn ra tự động sau khi nhúng GTM và cấu hình Conversion trong Zalo Ads — không cần thêm bất kỳ code nào vào website."
      />

      <div className="bg-slate-900 rounded-2xl p-6 mb-5 overflow-x-auto">
        <div className="space-y-2 min-w-[480px]">
          {flow.map((f, i) => (
            <div key={i} className={`flex items-start gap-2`}>
              {i > 0 && i < 2 && (
                <span className="text-slate-600 pl-4 text-xs self-center">→</span>
              )}
              <div className={`rounded-lg px-3.5 py-2 text-xs leading-snug font-mono
                ${f.green ? 'bg-green-900/60 border border-green-700 text-green-300'
                  : f.yellow ? 'bg-amber-900/40 border border-amber-700 text-amber-300'
                  : 'bg-slate-800 border border-slate-700 text-blue-300'}
                ${i >= 3 ? 'ml-6' : ''}
                ${i >= 5 ? 'ml-12' : ''}
              `}>
                {f.label}
                {f.sub && <div className="text-[10px] opacity-70 mt-0.5">{f.sub}</div>}
              </div>
              {i < flow.length - 1 && i < 2 && (
                <span className="text-slate-600 text-xs self-center">→</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <Callout type="info" title="Điều cốt lõi">
        Developer chỉ nhúng GTM snippet <strong>một lần duy nhất</strong>. Mọi thêm/bớt/thay đổi nút cần track đều do marketer tự làm trong Zalo Ads — không cần release code, không cần động tới website.
      </Callout>
      <Callout type="warn" title="Cơ chế này ghi nhận lượt nhấp — không ghi nhận giá trị giao dịch">
        Beacon gửi đến Zalo chứa thông tin: <em>nút nào được nhấp, trên trang nào, lúc nào</em>. Doanh thu, giá trị đơn hàng, số lượng sản phẩm <strong>không được ghi nhận</strong> qua cơ chế này.
      </Callout>
    </section>
  )
}
