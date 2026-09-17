export default function Table({ headers, rows, className = '' }) {
  return (
    <div className={`overflow-x-auto rounded-xl border border-slate-200 my-4 ${className}`}>
      <table className="w-full border-collapse text-sm">
        <thead className="bg-slate-50">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-2.5 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide border-b border-slate-200 whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-slate-700 align-top">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
