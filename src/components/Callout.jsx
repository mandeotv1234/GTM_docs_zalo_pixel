const variants = {
  info:  { wrap: 'bg-blue-50 border-l-4 border-blue-400 text-blue-900',  icon: '💡' },
  warn:  { wrap: 'bg-amber-50 border-l-4 border-amber-400 text-amber-900', icon: '⚠️' },
  ok:    { wrap: 'bg-green-50 border-l-4 border-green-400 text-green-900', icon: '✅' },
  tip:   { wrap: 'bg-purple-50 border-l-4 border-purple-400 text-purple-900', icon: '📋' },
}

export default function Callout({ type = 'info', title, children, className = '' }) {
  const v = variants[type]
  return (
    <div className={`flex gap-3 rounded-r-xl p-4 my-4 text-sm leading-relaxed ${v.wrap} ${className}`}>
      <span className="text-base shrink-0 mt-0.5">{v.icon}</span>
      <div>
        {title && <strong className="block font-semibold mb-1">{title}</strong>}
        {children}
      </div>
    </div>
  )
}
