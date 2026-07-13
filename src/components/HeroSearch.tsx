import { Sparkles, Search } from 'lucide-react';

export function HeroSearch() {
  return (
    <section className="w-full max-w-4xl mx-auto pt-10 pb-6 px-6 shrink-0 flex flex-col items-center">
      <h2 className="text-5xl font-bold text-primary text-center mb-6 tracking-tight">
        Tra cứu pháp luật thông minh với Graph RAG
      </h2>
      
      <div className="w-full max-w-2xl relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-primary-container">
          <Sparkles className="w-6 h-6 animate-pulse" />
        </div>
        <input
          className="w-full pl-12 pr-4 py-4 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm text-lg text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
          placeholder="Nhập câu hỏi hoặc ID tài liệu..."
          type="text"
          defaultValue="Luật đất đai mới nhất"
        />
        
        {/* Autocomplete Suggestion Dropdown (Simulated) */}
        <div className="absolute w-full bg-surface-container-lowest border border-outline-variant rounded-lg mt-2 shadow-lg z-50 hidden group-hover:block">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-surface-container-low cursor-pointer flex items-center gap-2 text-base">
              <Search className="w-4 h-4 text-outline" />
              Luật Đất đai 2024
            </li>
            <li className="px-4 py-2 hover:bg-surface-container-low cursor-pointer flex items-center gap-2 text-base">
              <Search className="w-4 h-4 text-outline" />
              Nghị định 100/2019/NĐ-CP
            </li>
          </ul>
        </div>
      </div>

      {/* Status indicator */}
      <div className="mt-2 flex items-center gap-2 text-sm font-medium text-on-surface-variant opacity-80">
        <svg
          className="animate-spin h-4 w-4 text-primary-container"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path
            className="opacity-75"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            fill="currentColor"
          ></path>
        </svg>
        Đang phân tích cấu trúc pháp lý...
      </div>

      <div className="flex gap-4 mt-6 border-b border-outline-variant w-full justify-center">
        <button className="pb-2 border-b-2 border-primary text-primary font-semibold text-xl">
          Tìm kiếm tự nhiên
        </button>
        <button className="pb-2 border-b-2 border-transparent text-on-surface-variant hover:text-primary font-semibold text-xl transition-colors">
          Tìm kiếm chính xác
        </button>
      </div>
    </section>
  );
}
