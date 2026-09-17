import Callout from '../components/Callout'
import SectionHeader from '../components/SectionHeader'
import Step from '../components/Step'
import Table from '../components/Table'

const selectors = [
  { type: 'ID — Khuyến nghị', ex: 'id="btn-purchase"', note: 'Chính xác nhất. Một ID chỉ xuất hiện một lần trên trang. Nhờ developer thêm thuộc tính id vào nút nếu chưa có.' },
  { type: 'Class CSS', ex: 'class="btn-add-to-cart"', note: 'Track tất cả nút có class này. Dùng khi nhiều nút cùng kiểu hoặc nút không có ID.' },
  { type: 'Nội dung text', ex: 'Tiến hành thanh toán', note: 'Khớp nội dung chữ hiển thị. Không cần sửa code. Lưu ý: đổi text là mất tracking ngay.' },
]

export default function SelectorGuide() {
  return (
    <section id="selector" className="pt-14">
      <SectionHeader
        label="Cấu hình nút bấm"
        title="Cách xác định đúng nút cần track"
        desc="ztracker dò ngược từ phần tử được click lên tới <body> để tìm phần tử khớp quy tắc — nhấp vào phần tử con vẫn được tính nếu cha khớp quy tắc."
      />

      <div className="grid sm:grid-cols-3 gap-3 mb-6">
        {selectors.map(s => (
          <div key={s.type} className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-zalo mb-2">{s.type}</p>
            <code className="block bg-red-50 text-red-600 rounded-lg px-3 py-2 text-xs break-all mb-3">{s.ex}</code>
            <p className="text-xs text-slate-500 leading-relaxed">{s.note}</p>
          </div>
        ))}
      </div>

      <h3 className="text-base font-bold text-slate-900 mb-3">Cách lấy ID / Class từ trình duyệt</h3>

      <Step num={1} title="Mở DevTools và chọn phần tử">
        <p>Nhấp chuột phải vào nút trên trang → <strong>Kiểm tra (Inspect)</strong>. Hoặc nhấn <strong>F12</strong> → dùng biểu tượng chọn phần tử (Ctrl+Shift+C) → click vào nút.</p>
      </Step>

      <Step num={2} title="Đọc thuộc tính HTML của nút">
        <p>Tìm thẻ <code>&lt;button&gt;</code>, <code>&lt;a&gt;</code> hoặc <code>&lt;div&gt;</code> tương ứng. Đọc giá trị của <code>id</code> và <code>class</code>:</p>
        <Table
          headers={['HTML của nút', 'ID điền vào ZAM', 'Class điền vào ZAM']}
          rows={[
            [<code className="text-xs">{`<button id="btn-purchase" class="btn-primary">Đặt hàng</button>`}</code>, <code>btn-purchase</code>, <code>btn-primary</code>],
            [<code className="text-xs">{`<button class="btn-add-to-cart rounded-lg">Thêm vào giỏ</button>`}</code>, '(không có ID)', <code>btn-add-to-cart</code>],
            [<code className="text-xs">{`<a href="/checkout">Tiến hành thanh toán</a>`}</code>, '(không có ID)', <>Dùng Text: <em>Tiến hành thanh toán</em></>],
          ]}
        />
      </Step>

      <Step num={3} title="Điền vào form ZAM và lưu" last>
        <p>Nhập đúng giá trị đọc được. <strong>Phân biệt chữ hoa/thường:</strong> <code>btn-purchase</code> ≠ <code>Btn-Purchase</code>. Chỉ nhập phần giá trị, không nhập cả thuộc tính HTML.</p>
      </Step>

      <Callout type="warn" title="Những thay đổi trên website có thể làm mất tracking">
        Developer đổi tên <code>id</code> hoặc <code>class</code> của nút, hoặc đổi nội dung text → quy tắc trong ZAM không còn khớp → beacon không fire. Khi website có thay đổi giao diện, luôn kiểm tra lại các conversion trong ZAM và cập nhật nếu cần.
      </Callout>
    </section>
  )
}
