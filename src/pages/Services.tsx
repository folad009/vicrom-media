import PageTransition from '../components/PageTransition';
import AnimatedText from '../components/AnimatedText';

const services = [
  { title: 'Designs & Concept Development', desc: 'With our zany and well equipped graphic designers, we produce functional designs and concepts that brings to life well thought through ideas.' },
  { title: 'Digital Marketing', desc: 'Using all the digital tools available, your brands can conveniently compete in the global market with the creative edge of our digital marketing solutions.' },
  { title: 'Strategic Planning', desc: 'Because we crave to deliver execution that will resonate with times and trend, our strategic planning is well supported by thorough analysis and well-orchestrated research work.' },
  { title: 'Branding', desc: 'We believe in creating impressions that are memorable. Our ideas of branding transcends conventional ideas, but novel and eye-catching to attract audience any time, any day.' },
  { title: 'Publishing / Book Illustration', desc: 'Book publishing and illustration come so easy with our experienced editors and illustrators fully prepared for spot-on delivery.' },
  { title: 'Print Production', desc: 'With our state of the earth technology in printing, we provide quality offset and large format printing solutions with very attractive budget and timely.' },
  { title: 'Radio and TV Commercials', desc: 'Whether you already have your story or we are creating for you, we are well equipped to produce exceptional jingles and television commercials that will express the essence of your brand.' },
  { title: 'Corporate Gifts & Event Support', desc: 'We go extra mile to source for gifts for your brand image, anytime you have events where these are needed.' },
];

export default function Services() {
  return (
    <PageTransition>
      <div className="pt-40 px-8 md:px-24 max-w-7xl mx-auto min-h-screen">
        <AnimatedText text="Our Services" className="text-7xl md:text-9xl font-display font-bold mb-24 text-[#ED3237]" />
        <div className="flex flex-col">
          {services.map((service, i) => (
            <div key={i} className="group border-t border-zinc-800 py-12 flex flex-col md:flex-row md:items-center justify-between hover:bg-zinc-900/50 transition-colors px-4 -mx-4 cursor-pointer">
              <h3 className="text-3xl md:text-5xl font-display font-medium group-hover:translate-x-4 group-hover:scale-105 group-hover:text-[#ED3237] origin-left transition-transform duration-500 max-w-2xl">{service.title}</h3>
              <p className="text-zinc-400 max-w-sm mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{service.desc}</p>
            </div>
          ))}
          <div className="border-t border-zinc-800" />
        </div>
      </div>
    </PageTransition>
  );
}
