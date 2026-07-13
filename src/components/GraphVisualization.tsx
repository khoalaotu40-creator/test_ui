import { ZoomIn, ZoomOut, Maximize } from 'lucide-react';

export function GraphVisualization() {
  return (
    <div className="flex-1 hidden md:flex flex-col bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden h-full relative">
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        <button className="bg-surface-container-lowest border border-outline-variant p-2 rounded-md shadow-sm text-on-surface-variant hover:text-primary transition-colors">
          <ZoomIn className="w-4 h-4" />
        </button>
        <button className="bg-surface-container-lowest border border-outline-variant p-2 rounded-md shadow-sm text-on-surface-variant hover:text-primary transition-colors">
          <ZoomOut className="w-4 h-4" />
        </button>
        <button className="bg-surface-container-lowest border border-outline-variant p-2 rounded-md shadow-sm text-on-surface-variant hover:text-primary transition-colors">
          <Maximize className="w-4 h-4" />
        </button>
      </div>

      {/* SVG Graph Canvas */}
      <div 
        className="w-full h-full bg-[#f8fafc] relative overflow-hidden" 
        style={{
          backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      >
        <svg height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 800 600" width="100%">
          {/* Edges */}
          <path className="stroke-outline-variant stroke-[2px] fill-none transition-colors duration-300 hover:stroke-primary-container hover:stroke-[3px]" d="M 400 300 L 250 150"></path>
          <path className="stroke-outline-variant stroke-[2px] fill-none transition-colors duration-300 hover:stroke-primary-container hover:stroke-[3px]" d="M 400 300 L 600 200"></path>
          <path className="stroke-outline-variant stroke-[2px] fill-none transition-colors duration-300 hover:stroke-primary-container hover:stroke-[3px]" d="M 400 300 L 500 450"></path>
          <path className="stroke-outline-variant stroke-[2px] fill-none transition-colors duration-300 hover:stroke-primary-container hover:stroke-[3px]" d="M 400 300 L 200 400"></path>

          {/* Edge Labels */}
          <rect fill="#ffffff" height="20" opacity="0.9" rx="4" ry="4" width="80" x="300" y="205"></rect>
          <text fill="#586377" fontFamily="Inter" fontSize="10" textAnchor="middle" x="340" y="220">Hướng dẫn</text>
          
          <rect fill="#ffffff" height="20" opacity="0.9" rx="4" ry="4" width="80" x="470" y="235"></rect>
          <text fill="#586377" fontFamily="Inter" fontSize="10" textAnchor="middle" x="510" y="250">Quy định chi tiết</text>
          
          <rect fill="#ffffff" height="20" opacity="0.9" rx="4" ry="4" width="70" x="420" y="365"></rect>
          <text fill="#586377" fontFamily="Inter" fontSize="10" textAnchor="middle" x="455" y="380">Căn cứ vào</text>

          {/* Nodes */}
          
          {/* Node 1 (Top Left) */}
          <g transform="translate(250, 150)" className="cursor-pointer group">
            <circle className="fill-white stroke-outline-variant stroke-[2px] transition-all duration-300 group-hover:stroke-primary-container group-hover:stroke-[3px] group-hover:fill-[#f7f9fb]" r="40"></circle>
            <text fill="#002045" fontFamily="Inter" fontSize="12" fontWeight="600" textAnchor="middle" y="-5">NĐ 71/2024</text>
            <text fill="#586377" fontFamily="Inter" fontSize="9" textAnchor="middle" y="10">Giá đất</text>
            {/* Fact Chip Status */}
            <rect fill="#d1fae5" height="14" rx="7" width="60" x="-30" y="25"></rect>
            <text fill="#065f46" fontFamily="Inter" fontSize="8" fontWeight="600" textAnchor="middle" x="0" y="34">Còn hiệu lực</text>
          </g>

          {/* Node 2 (Top Right) */}
          <g transform="translate(600, 200)" className="cursor-pointer group">
            <circle className="fill-white stroke-outline-variant stroke-[2px] transition-all duration-300 group-hover:stroke-primary-container group-hover:stroke-[3px] group-hover:fill-[#f7f9fb]" r="45"></circle>
            <text fill="#002045" fontFamily="Inter" fontSize="12" fontWeight="600" textAnchor="middle" y="-5">NĐ 102/2024</text>
            <text fill="#586377" fontFamily="Inter" fontSize="9" textAnchor="middle" y="10">Quy định chung</text>
            <rect fill="#fef3c7" height="14" rx="7" width="60" x="-30" y="28"></rect>
            <text fill="#92400e" fontFamily="Inter" fontSize="8" fontWeight="600" textAnchor="middle" x="0" y="37">Đang cập nhật</text>
          </g>

          {/* Node 3 (Bottom Right) */}
          <g transform="translate(500, 450)" className="cursor-pointer group">
            <circle className="fill-white stroke-outline-variant stroke-[2px] transition-all duration-300 group-hover:stroke-primary-container group-hover:stroke-[3px] group-hover:fill-[#f7f9fb]" r="35"></circle>
            <text fill="#002045" fontFamily="Inter" fontSize="11" fontWeight="600" textAnchor="middle" y="-2">Hiến pháp</text>
            <text fill="#586377" fontFamily="Inter" fontSize="9" textAnchor="middle" y="10">2013</text>
          </g>

          {/* Node 4 (Bottom Left) */}
          <g transform="translate(200, 400)" className="cursor-pointer group">
            <circle className="fill-white stroke-outline-variant stroke-[2px] transition-all duration-300 group-hover:stroke-primary-container group-hover:stroke-[3px] group-hover:fill-[#f7f9fb]" r="38"></circle>
            <text fill="#002045" fontFamily="Inter" fontSize="11" fontWeight="600" textAnchor="middle" y="-2">NĐ 88/2024</text>
            <text fill="#586377" fontFamily="Inter" fontSize="9" textAnchor="middle" y="10">Bồi thường</text>
            <rect fill="#d1fae5" height="14" rx="7" width="60" x="-30" y="25"></rect>
            <text fill="#065f46" fontFamily="Inter" fontSize="8" fontWeight="600" textAnchor="middle" x="0" y="34">Còn hiệu lực</text>
          </g>

          {/* Central Node */}
          <g className="pulse-node cursor-pointer group" transform="translate(400, 300)">
            <circle className="fill-white stroke-primary-container stroke-[3px] transition-all duration-300 drop-shadow-xl group-hover:fill-[#f7f9fb]" r="55"></circle>
            <text fill="#1a365d" fontFamily="Inter" fontSize="14" fontWeight="700" textAnchor="middle" y="-10">Luật Đất đai</text>
            <text fill="#1a365d" fontFamily="Inter" fontSize="11" textAnchor="middle" y="5">31/2024/QH15</text>
            <rect fill="#d1fae5" height="16" rx="8" width="70" x="-35" y="20"></rect>
            <text fill="#065f46" fontFamily="Inter" fontSize="9" fontWeight="600" textAnchor="middle" x="0" y="31">Sắp có hiệu lực</text>
          </g>
        </svg>
      </div>

      <div className="absolute bottom-4 left-4 bg-surface-container-lowest border border-outline-variant p-2 rounded-lg shadow-sm text-xs text-on-surface-variant flex gap-4">
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full border-2 border-outline-variant inline-block"></span> Đạo luật
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full border-2 border-outline-variant inline-block border-dashed"></span> Nghị định
        </div>
      </div>
    </div>
  );
}
