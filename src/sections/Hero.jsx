export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-[#0050cc] via-[#0068ff] to-[#00a8ff] px-6 py-16 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/90 mb-5">
          📦 Internal — Tài liệu kỹ thuật
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-3">
          Zalo Pixel GTM Template
        </h1>
        <p className="text-base text-white/80 mb-7 leading-relaxed">
          Tích hợp Zalo Pixel qua Google Tag Manager — tự động ghi nhận lượt nhấp vào nút bấm mà không cần thêm code vào website.
        </p>
        <div className="flex flex-wrap gap-2.5 justify-center">
          {['✅ 6/6 Events Verified', '🏷 GTM-NZJLBMFK', '⚡ Click auto-detection', '🌐 Demo live trên Vercel'].map(b => (
            <span key={b} className="bg-white/15 border border-white/30 rounded-lg px-3.5 py-1.5 text-sm text-white">
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
