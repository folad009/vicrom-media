import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '../utils/cn';

gsap.registerPlugin(ScrollTrigger);

export default function ImageReveal({ src, alt, className }: { src: string, alt: string, className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(containerRef.current,
        { clipPath: 'inset(100% 0 0 0)' },
        {
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.5,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
          }
        }
      );
      gsap.fromTo(imageRef.current,
        { scale: 1.4 },
        {
          scale: 1,
          duration: 1.5,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
          }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
      <img ref={imageRef} src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" referrerPolicy="no-referrer" />
    </div>
  );
}
