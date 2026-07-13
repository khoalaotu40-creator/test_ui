import { Plus, Network, FileText, Gavel, Scale, HelpCircle, User } from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col bg-surface-container shadow-md w-[280px] shrink-0 z-40 border-r border-outline-variant h-full py-6">
      <div className="px-6 mb-6">
        <div className="flex items-center gap-4 mb-1">
          <div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-lg shadow-sm border border-outline-variant">
            JG
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-primary leading-tight">JurisGraph</h2>
            <p className="text-xs text-on-surface-variant">Graph RAG Legal AI</p>
          </div>
        </div>
      </div>
      
      <div className="px-4 mb-4">
        <button className="w-full bg-primary-container text-on-primary-container py-2 px-4 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-primary hover:text-on-primary transition-colors shadow-sm">
          <Plus className="w-4 h-4" />
          New Research
        </button>
      </div>

      <nav className="flex-1 flex flex-col gap-1 px-2 mt-4 overflow-y-auto">
        <a
          className="flex items-center gap-4 bg-secondary-container text-on-secondary-container rounded-lg px-4 py-2 text-sm font-medium shadow-sm transition-transform duration-150"
          href="#"
        >
          <Network className="w-5 h-5" />
          Knowledge Graph
        </a>
        <a
          className="flex items-center gap-4 text-on-surface-variant px-4 py-2 text-sm font-medium hover:bg-surface-container-high transition-colors rounded-lg"
          href="#"
        >
          <FileText className="w-5 h-5" />
          Documents
        </a>
        <a
          className="flex items-center gap-4 text-on-surface-variant px-4 py-2 text-sm font-medium hover:bg-surface-container-high transition-colors rounded-lg"
          href="#"
        >
          <Gavel className="w-5 h-5" />
          Legal Statutes
        </a>
        <a
          className="flex items-center gap-4 text-on-surface-variant px-4 py-2 text-sm font-medium hover:bg-surface-container-high transition-colors rounded-lg"
          href="#"
        >
          <Scale className="w-5 h-5" />
          Case Law
        </a>
      </nav>

      <div className="mt-auto px-2 pt-4 border-t border-outline-variant">
        <a
          className="flex items-center gap-4 text-on-surface-variant px-4 py-2 text-sm font-medium hover:bg-surface-container-high transition-colors rounded-lg"
          href="#"
        >
          <HelpCircle className="w-5 h-5" />
          Help Center
        </a>
        <a
          className="flex items-center gap-4 text-on-surface-variant px-4 py-2 text-sm font-medium hover:bg-surface-container-high transition-colors rounded-lg"
          href="#"
        >
          <User className="w-5 h-5" />
          Account
        </a>
      </div>
    </aside>
  );
}
