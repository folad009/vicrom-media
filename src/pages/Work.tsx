import PageTransition from '../components/PageTransition';
import AnimatedText from '../components/AnimatedText';

export default function Work() {
  return (
    <PageTransition>
      <div className="pt-40 px-8 md:px-24 max-w-7xl mx-auto min-h-screen">
        <AnimatedText text="Our Portfolio" className="text-7xl md:text-9xl font-display font-bold mb-12 text-[#ED3237]" />
        <AnimatedText text="To be provided." className="text-2xl md:text-4xl text-zinc-400 mb-24" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 opacity-50 grayscale">
          <div className="flex flex-col gap-4">
            <div className="w-full aspect-4/5 bg-zinc-900 flex items-center justify-center border border-zinc-800">
              <span className="text-zinc-600 font-display text-xl uppercase tracking-widest">Coming Soon</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:mt-32">
            <div className="w-full aspect-4/5 bg-zinc-900 flex items-center justify-center border border-zinc-800">
              <span className="text-zinc-600 font-display text-xl uppercase tracking-widest">Coming Soon</span>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
