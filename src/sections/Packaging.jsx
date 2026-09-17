import Callout from '../components/Callout'
import SectionHeader from '../components/SectionHeader'

const packages = [
  {
    num: 1, hot: true,
    title: 'Gửi file .tpl trực tiếp',
    sub: 'Import vào GTM trong 2 phút, không cần approval',
    badge: { text: '⚡ Dùng ngay', cls: 'bg-yellow-100 text-yellow-800' },
    desc: 'Gửi file template.tpl cho advertiser qua email hoặc Zalo. Họ tự import vào GTM container của mình.',
    steps: [
      'Gửi file template.tpl',
      'GTM → Mẫu → Mẫu thẻ → Mới → ⋮ → Nhập → chọn file → xem lại quyền → Lưu',
      'Khi tạo tag mới sẽ thấy "Zalo Pixel" trong danh sách loại thẻ',
    ],
    pros: ['Deploy ngay, không chờ review', 'Phù hợp internal hoặc beta'],
    cons: ['Phải gửi lại file khi có update', 'Không tự cập nhật phía advertiser'],
  },
  {
    num: 2, hot: false,
    title: 'Export Container JSON',
    sub: 'Kèm tag + trigger + variable — advertiser chỉ cần đổi Pixel ID',
    badge: { text: '📦 All-in-one', cls: 'bg-purple-100 text-purple-800' },
    desc: 'Export toàn bộ GTM Container thành 1 file JSON. Phù hợp advertiser mới hoàn toàn — import xong là có sẵn tag Initialize, trigger, variable Pixel ID.',
    steps: [
      'GTM → Quản trị → Xuất container → chọn phiên bản mới nhất → Export JSON',
      'Gửi file JSON kèm hướng dẫn: đổi giá trị biến Zalo Pixel ID thành Pixel ID của mình',
      'Advertiser: GTM → Quản trị → Nhập container → chọn JSON',
    ],
  },
  {
    num: 3, hot: false,
    title: 'GTM Community Template Gallery',
    sub: 'Public — advertiser tự tìm và install từ thư viện GTM',
    badge: { text: '🌐 Dài hạn', cls: 'bg-blue-100 text-blue-800' },
    desc: 'Submit lên thư viện GTM chính thức. Sau khi Google duyệt, mọi advertiser tìm "Zalo Pixel" và install trực tiếp — không cần nhận file.',
    warn: 'Chưa sẵn sàng — còn thiếu: Icon PNG 128×128 · Terms of Service (Legal) · Privacy Policy (Legal) · Google review mất 2–4 tuần sau khi submit',
  },
]

export default function Packaging() {
  return (
    <section id="packaging" className="pt-14">
      <SectionHeader
        label="Phân phối"
        title="Đóng gói template cho nhiều advertiser"
        desc="Ba cách chia sẻ template — từ nhanh nhất đến hoàn chỉnh nhất về dài hạn."
      />
      <div className="space-y-4">
        {packages.map(p => (
          <div key={p.num} className={`bg-white rounded-2xl border-2 overflow-hidden ${p.hot ? 'border-zalo' : 'border-slate-200'}`}>
            <div className="flex items-start gap-4 px-6 py-5">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 ${p.hot ? 'bg-zalo text-white' : 'bg-slate-200 text-slate-500'}`}>
                {p.num}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-slate-900">{p.title}</p>
                <p className="text-sm text-slate-500">{p.sub}</p>
              </div>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full shrink-0 ${p.badge.cls}`}>{p.badge.text}</span>
            </div>
            <div className="px-6 pb-6 text-sm text-slate-600 space-y-3">
              <p>{p.desc}</p>
              {p.steps && (
                <ol className="space-y-1.5 pl-4 list-decimal">
                  {p.steps.map((s, i) => <li key={i}>{s}</li>)}
                </ol>
              )}
              {p.pros && (
                <div className="grid sm:grid-cols-2 gap-3 mt-3">
                  <div className="bg-slate-50 rounded-lg p-3">
                    <p className="font-semibold text-green-700 mb-1">✅ Ưu điểm</p>
                    <ul className="space-y-0.5 text-xs list-disc pl-4 text-slate-600">{p.pros.map(x => <li key={x}>{x}</li>)}</ul>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3">
                    <p className="font-semibold text-red-600 mb-1">⚠️ Nhược điểm</p>
                    <ul className="space-y-0.5 text-xs list-disc pl-4 text-slate-600">{p.cons.map(x => <li key={x}>{x}</li>)}</ul>
                  </div>
                </div>
              )}
              {p.warn && <Callout type="warn">{p.warn}</Callout>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
