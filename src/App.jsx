import ConversionSetup from './sections/ConversionSetup'
import EventTypes from './sections/EventTypes'
import GtmSetup from './sections/GtmSetup'
import Hero from './sections/Hero'
import HowItWorks from './sections/HowItWorks'
import Overview from './sections/Overview'
import Packaging from './sections/Packaging'
import SelectorGuide from './sections/SelectorGuide'
import Verify from './sections/Verify'

const navLinks = [
  { href: '#overview', label: 'Tổng quan' },
  { href: '#how', label: 'Cơ chế' },
  { href: '#packaging', label: 'Đóng gói' },
  { href: '#gtm', label: 'Setup GTM' },
  { href: '#conversion', label: 'Tạo Conversion' },
  { href: '#selector', label: 'Cấu hình nút' },
  { href: '#events', label: '17 Loại' },
  { href: '#verify', label: 'Kiểm tra' },
]

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-6 flex items-center gap-6 h-14">
        <a href="#" className="flex items-center gap-2 font-bold text-sm text-slate-900 whitespace-nowrap shrink-0">
          <span className="w-2 h-2 rounded-full bg-zalo" />
          Zalo Pixel GTM
        </a>
        <div className="flex gap-0.5 overflow-x-auto">
          {navLinks.map(l => (
            <a key={l.href} href={l.href}
              className="px-3 py-1.5 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 text-xs font-medium whitespace-nowrap transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <main className="max-w-5xl mx-auto px-6 pb-24">
        <Overview />
        <HowItWorks />
        <Packaging />
        <GtmSetup />
        <ConversionSetup />
        <SelectorGuide />
        <EventTypes />
        <Verify />
        <footer className="mt-16 pt-8 border-t border-slate-200 text-center text-xs text-slate-400 space-y-1">
          <p>Zalo Pixel GTM Template · Internal Documentation</p>
          <p>Template v1 · Container GTM-NZJLBMFK · 6/6 events verified · Click tracking only</p>
        </footer>
      </main>
    </div>
  )
}
