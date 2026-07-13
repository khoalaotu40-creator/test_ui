import { Copy, ThumbsUp, Bot } from 'lucide-react';

export function AnalysisResult() {
  return (
    <div className="flex-1 flex flex-col bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden h-full">
      <div className="bg-surface-container-low px-4 py-2 border-b border-outline-variant flex justify-between items-center shrink-0">
        <h3 className="text-xl font-semibold text-primary">Kết quả phân tích</h3>
        <div className="flex gap-2">
          <button className="text-outline hover:text-primary transition-colors">
            <Copy className="w-4 h-4" />
          </button>
          <button className="text-outline hover:text-primary transition-colors">
            <ThumbsUp className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="p-6 overflow-y-auto flex-1">
        <div className="flex gap-4 mb-6">
          <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0 mt-1">
            <Bot className="w-5 h-5 fill-current" />
          </div>
          
          <div className="text-base text-on-surface space-y-4">
            <p>
              Dựa trên dữ liệu pháp lý mới nhất, <strong>Luật Đất đai số 31/2024/QH15</strong> (Luật Đất đai
              2024) đã được Quốc hội thông qua và chính thức có hiệu lực từ ngày 01/01/2025.
            </p>
            <p className="font-medium mt-4">Những thay đổi cấu trúc chính yếu bao gồm:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Bỏ khung giá đất, xác định giá đất theo nguyên tắc thị trường.{' '}
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-secondary-container text-on-secondary-container ml-1 border border-outline-variant cursor-pointer hover:bg-secondary-fixed transition-colors">
                  [1] Điều 158
                </span>
              </li>
              <li>
                Cấp Giấy chứng nhận cho đất không có giấy tờ đang sử dụng ổn định trước
                01/7/2014.{' '}
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-secondary-container text-on-secondary-container ml-1 border border-outline-variant cursor-pointer hover:bg-secondary-fixed transition-colors">
                  [1] Điều 138
                </span>
              </li>
              <li>
                Quy định chặt chẽ hơn về điều kiện thu hồi đất vì mục đích quốc phòng, an
                ninh, phát triển kinh tế - xã hội.{' '}
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-secondary-container text-on-secondary-container ml-1 border border-outline-variant cursor-pointer hover:bg-secondary-fixed transition-colors">
                  [2] Nghị định 102/2024/NĐ-CP
                </span>
              </li>
            </ul>
            
            <div className="mt-6 pt-4 border-t border-outline-variant">
              <p className="text-sm font-medium text-on-surface-variant mb-2">Nguồn trích dẫn (Citations):</p>
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center px-2 py-1 rounded bg-surface-container-high border border-outline-variant text-xs text-on-surface hover:border-primary cursor-pointer transition-colors shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] mr-2"></span>
                  [1] Luật Đất đai 31/2024/QH15
                </div>
                <div className="inline-flex items-center px-2 py-1 rounded bg-surface-container-high border border-outline-variant text-xs text-on-surface hover:border-primary cursor-pointer transition-colors shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] mr-2"></span>
                  [2] Nghị định 102/2024/NĐ-CP
                </div>
                <div className="inline-flex items-center px-2 py-1 rounded bg-surface-container-high border border-outline-variant text-xs text-on-surface hover:border-primary cursor-pointer transition-colors shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#f59e0b] mr-2"></span>
                  [3] Dự thảo Nghị định hướng dẫn Luật Đất đai
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
