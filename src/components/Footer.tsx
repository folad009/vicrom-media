import AnimatedText from './AnimatedText';

export default function Footer() {
  return (
    <footer className="bg-white py-24 px-8 md:px-24 mt-32">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <AnimatedText text="Let's build something great together." className="text-5xl md:text-8xl font-display font-bold max-w-4xl text-[#ED3237]" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-zinc-800">
          <div>
            <h4 className="font-display text-[#ED3237] font-bold mb-4">Socials</h4>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#" className="hover:text-[#ED3237] transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-[#ED3237] transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-[#ED3237] transition-colors">LinkedIn</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-[#ED3237] mb-4">Office</h4>
            <p className="text-gray-700">31, Olatilewa Street<br/>Lawanson-Ikate, Surulere, Lagos</p>
          </div>
          <div>
            <h4 className="font-display text-[#ED3237] font-bold mb-4">Contact</h4>
            <p className="text-gray-700">info@vicrom.com<br/>08077807105<br/>09038931160</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
