import { useEffect, useState } from "react";
import PageTransition from "../components/PageTransition";
import AnimatedText from "../components/AnimatedText";
import { portfolioCategories } from "../data/portfolio";

export default function Work() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!lightboxSrc) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxSrc(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxSrc]);

  return (
    <PageTransition>
      <div
        className="h-150 relative flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/work-vicrom-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10">
          <AnimatedText
            text="Our Portfolio"
            className="text-7xl md:text-9xl font-display font-bold mb-12 text-[#ED3237]"
          />
        </div>
      </div>

      <div className="sticky top-24 z-30 border-b border-zinc-200 bg-white/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-8 md:px-24 py-4 overflow-x-auto">
          <nav className="flex flex-wrap gap-2 min-w-min" aria-label="Portfolio categories">
            {portfolioCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="whitespace-nowrap rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-600 transition-colors hover:border-[#ED3237] hover:bg-[#ED3237]/5 hover:text-[#ED3237]"
              >
                {cat.title}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="px-8 md:px-24 max-w-7xl mx-auto min-h-screen pb-32 pt-16">
        {portfolioCategories.map((cat) => (
          <section
            key={cat.id}
            id={cat.id}
            className="scroll-mt-24 mb-24 last:mb-0"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#ED3237] mb-10">
              {cat.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setLightboxSrc(src)}
                  aria-label={`Open ${cat.title} image ${i + 1} in full screen`}
                  className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 text-left shadow-sm transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ED3237] focus-visible:ring-offset-2"
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>

      {lightboxSrc && (
        <button
          type="button"
          className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/90 p-4 md:p-10"
          onClick={() => setLightboxSrc(null)}
          aria-label="Close preview"
        >
          <img
            src={lightboxSrc}
            alt=""
            className="max-h-[90vh] max-w-full object-contain"
          />
        </button>
      )}
    </PageTransition>
  );
}
