export default function StepImage({ src, alt, caption }) {
  return (
    <div className="my-3 rounded-xl overflow-hidden border border-slate-200 bg-white">
      <img src={src} alt={alt} className="w-full object-cover" loading="lazy" />
      {caption && (
        <p className="text-xs text-slate-400 text-center px-4 py-2 border-t border-slate-100 bg-slate-50">
          {caption}
        </p>
      )}
    </div>
  )
}
