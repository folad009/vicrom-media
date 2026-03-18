import PageTransition from '../components/PageTransition';
import AnimatedText from '../components/AnimatedText';

const posts = [
  { title: 'The Future of Web Design in 2026', date: 'Mar 15, 2026' },
  { title: 'Why GSAP is Still King for Animations', date: 'Feb 28, 2026' },
  { title: 'Building Accessible React Applications', date: 'Jan 12, 2026' },
];

export default function Blog() {
  return (
    <PageTransition>
      <div className="pt-40 px-8 md:px-24 max-w-7xl mx-auto min-h-screen">
        <AnimatedText text="Journal" className="text-7xl md:text-9xl font-display font-bold mb-24" />
        <div className="flex flex-col gap-12">
          {posts.map((post, i) => (
            <article key={i} className="group cursor-pointer">
              <p className="text-zinc-500 mb-2">{post.date}</p>
              <h2 className="text-3xl md:text-5xl font-display font-medium group-hover:text-indigo-400 transition-colors">{post.title}</h2>
            </article>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
