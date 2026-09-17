import SectionHeader from '../components/SectionHeader'

const events = [
  { name: 'Purchase', desc: 'Giao dịch hoàn tất' },
  { name: 'AddToCart', desc: 'Thêm vào giỏ hàng' },
  { name: 'InitiateCheckout', desc: 'Bắt đầu thanh toán' },
  { name: 'AddPaymentInfo', desc: 'Nhập thông tin thanh toán' },
  { name: 'AddToWishlist', desc: 'Thêm vào quan tâm' },
  { name: 'ViewContent', desc: 'Xem trang / nội dung' },
  { name: 'Lead', desc: 'Gửi form liên hệ / tư vấn' },
  { name: 'CompleteRegistration', desc: 'Hoàn tất đăng ký' },
  { name: 'Contact', desc: 'Gọi điện, chat, nhắn tin' },
  { name: 'Schedule', desc: 'Đặt lịch hẹn' },
  { name: 'SubmitApplication', desc: 'Gửi hồ sơ / đơn đăng ký' },
  { name: 'FindLocation', desc: 'Tìm địa điểm / cửa hàng' },
  { name: 'Search', desc: 'Tìm kiếm' },
  { name: 'StartTrial', desc: 'Bắt đầu dùng thử' },
  { name: 'Subscribe', desc: 'Đăng ký gói trả phí' },
  { name: 'CustomizeProduct', desc: 'Tùy chỉnh sản phẩm' },
  { name: 'Donate', desc: 'Quyên góp' },
]

export default function EventTypes() {
  return (
    <section id="events" className="pt-14">
      <SectionHeader
        label="Loại Conversion"
        title="17 loại sự kiện chuẩn"
        desc="Chọn đúng loại khi tạo conversion trong Zalo Ads để báo cáo hiển thị đúng cột số liệu. Đây là nhãn phân loại — không phải code cần viết vào website."
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
        {events.map(e => (
          <div key={e.name} className="bg-white border border-slate-200 rounded-xl px-4 py-3 hover:border-zalo/40 hover:shadow-sm transition-all">
            <p className="font-bold text-slate-900 text-sm font-mono">{e.name}</p>
            <p className="text-xs text-slate-500 mt-0.5">{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
