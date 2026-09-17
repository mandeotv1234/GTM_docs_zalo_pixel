export default function SectionHeader({ label, title, desc }) {
  return (
    <div className="mb-8">
      <p className="text-xs font-bold uppercase tracking-widest text-zalo mb-1">{label}</p>
      <h2 className="text-2xl font-extrabold text-slate-900 mb-2 leading-tight">{title}</h2>
      {desc && <p className="text-sm text-slate-500 max-w-xl">{desc}</p>}
    </div>
  )
}
