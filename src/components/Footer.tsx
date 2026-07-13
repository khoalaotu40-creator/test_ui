export function Footer() {
  return (
    <footer className="bg-surface border-t border-outline-variant px-6 py-2 flex justify-between items-center shrink-0 text-xs text-on-surface-variant">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#10b981]"></span>
        Hệ thống đang hoạt động ổn định
      </div>
      <div className="flex gap-4">
        <a className="hover:text-primary transition-colors" href="#">
          Chính sách bảo mật
        </a>
        <a className="hover:text-primary transition-colors" href="#">
          Điều khoản sử dụng
        </a>
        <span>Phiên bản 1.0.2</span>
      </div>
    </footer>
  );
}
