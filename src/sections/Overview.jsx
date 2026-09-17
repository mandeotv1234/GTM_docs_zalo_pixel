import SectionHeader from '../components/SectionHeader'

const cards = [
  { icon: '📄', bg: 'bg-blue-50',   title: 'GTM Tag Template (template.tpl)',     body: 'Custom Tag Template cho Google Tag Manager. Advertiser import một lần, cấu hình và deploy — không cần developer sau bước nhúng GTM ban đầu.' },
  { icon: '🏷',  bg: 'bg-green-50',  title: 'GTM Container mẫu — GTM-NZJLBMFK',   body: 'Container đã publish, kèm tag Initialize và trigger sẵn sàng. Advertiser export JSON về dùng ngay, chỉ cần đổi Pixel ID.' },
  { icon: '🎯', bg: 'bg-purple-50', title: 'Landing page demo',                   body: 'Website demo tích hợp 6 conversion: Purchase, AddToCart, InitiateCheckout, Lead, CompleteRegistration, Contact.' },
  { icon: '🧪', bg: 'bg-orange-50', title: 'Kiểm thử tự động',                   body: 'Script Playwright tự click 6 nút, xác nhận 6/6 beacon gửi thành công đến Zalo. Kết quả: 6/6 PASS.' },
]

export default function Overview() {
  return (
    <section id="overview" className="pt-14">
      <SectionHeader
        label="Tổng quan"
        title="Những gì đã xây dựng"
        desc="Trọn bộ để ghi nhận conversion Zalo Pixel qua GTM — từ template đến container mẫu và landing page demo đã xác minh."
      />
      <div className="grid sm:grid-cols-2 gap-4">
        {cards.map(c => (
          <div key={c.title} className="bg-white border border-slate-200 rounded-2xl p-6">
            <div className={`w-11 h-11 ${c.bg} rounded-xl flex items-center justify-center text-xl mb-3`}>{c.icon}</div>
            <h3 className="font-bold text-slate-900 text-sm mb-1.5">{c.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
