import PageTransition from '../components/PageTransition';
import AnimatedText from '../components/AnimatedText';

export default function Contact() {
  return (
    <PageTransition>
      <div className="pt-40 px-8 md:px-24 max-w-7xl mx-auto min-h-screen">
        <AnimatedText text="Our Contact" className="text-7xl md:text-9xl font-display font-bold mb-24 text-[#ED3237]" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-2xl text-zinc-400 mb-12">Ready to start your next project? Drop us a line or visit our office.</p>
            <div className="flex flex-col gap-8">
              <div>
                <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-2">Email</h4>
                <a href="mailto:info@vicrom.com" className="text-3xl font-display font-medium hover:text-[#ED3237] transition-colors">info@vicrom.com</a>
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-2">Phone</h4>
                <p className="text-2xl font-display font-medium text-zinc-200">08077807105<br/>09038931160</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-2">Address</h4>
                <p className="text-xl text-zinc-300">31, OLatilewa Street<br/>Lawanson-Ikate, Surulere, Lagos</p>
              </div>
            </div>
          </div>
          <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" className="bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-white transition-colors text-xl" />
            <input type="email" placeholder="Your Email" className="bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-white transition-colors text-xl" />
            <textarea placeholder="Tell us about your project" rows={4} className="bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-white transition-colors text-xl resize-none"></textarea>
            <button className="self-start bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-[#ED3237] hover:text-white transition-colors mt-4">Send Message</button>
          </form>
        </div>
      </div>
    </PageTransition>
  );
}
