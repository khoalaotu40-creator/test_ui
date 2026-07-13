import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { HeroSearch } from './components/HeroSearch';
import { AnalysisResult } from './components/AnalysisResult';
import { GraphVisualization } from './components/GraphVisualization';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-background text-on-background h-screen flex flex-col overflow-hidden font-sans">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        
        <main className="flex-1 flex flex-col h-full bg-surface-bright relative">
          <HeroSearch />
          
          {/* Split View Layout */}
          <section className="flex-1 flex overflow-hidden w-full px-6 pb-6 gap-4 relative">
            <AnalysisResult />
            
            {/* Resizer Divider */}
            <div className="hidden md:flex flex-col h-full justify-center items-center cursor-col-resize group px-1 -mx-3 z-10 relative">
              <div className="w-[2px] h-8 bg-outline-variant rounded-full transition-colors group-hover:bg-primary-container group-active:bg-primary-container"></div>
            </div>

            <GraphVisualization />
          </section>
          
          <Footer />
        </main>
      </div>
    </div>
  );
}
