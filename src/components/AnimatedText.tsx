import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedText({
  text,
  className = '',
  tag: Tag = 'div',
}: {
  text: string;
  className?: string;
  tag?: any;
}) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Split text into words and characters
    const split = new SplitType(containerRef.current, { types: 'words,chars' });

    const ctx = gsap.context(() => {
      gsap.from(split.chars, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
        y: 100,
        opacity: 0,
        stagger: 0.02,
        duration: 0.8,
        ease: 'power4.out',
      });
    }, containerRef);

    return () => {
      ctx.revert();
      split.revert();
    };
  }, [text]);

  return (
    <Tag ref={containerRef} className={className}>
      {text}
    </Tag>
  );
}
