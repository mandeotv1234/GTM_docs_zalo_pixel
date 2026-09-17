export default function Step({ num, title, last = false, children }) {
  return (
    <div className="flex gap-5 py-6 border-b border-slate-100 last:border-0">
      <div className="flex flex-col items-center shrink-0">
        <div className="w-9 h-9 rounded-full bg-zalo text-white font-bold text-sm flex items-center justify-center shrink-0">
          {num}
        </div>
        {!last && <div className="w-0.5 bg-slate-200 flex-1 mt-2 min-h-4" />}
      </div>
      <div className="flex-1 pt-1 pb-2">
        <h3 className="text-base font-bold text-slate-900 mb-2">{title}</h3>
        <div className="text-sm text-slate-600 leading-relaxed space-y-2">{children}</div>
      </div>
    </div>
  )
}
