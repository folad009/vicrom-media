import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import PageTransition from "../components/PageTransition";
import AnimatedText from "../components/AnimatedText";
import ImageReveal from "../components/ImageReveal";

export default function Home() {
  const coreAreas = [
    "DESIGNS & CONCEPT DEVELOPMENT",
    "PRINT & ELECTRONIC PRODUCTIONS",
    "BRANDING & SIGNAGE",
    "MARKETING COMMUNICATION STRATEGY",
    "MEDIA RELATIONS",
  ];

  const experienceRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: experienceRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="h-150 w-full relative">
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          className="h-full w-full"
        >
          {[
            "/images/homepage-banner.jpg",
          ].map((src, i) => (
            <SwiperSlide key={i}>
              <div className="absolute inset-0 bg-black/60 z-10" />
              <img
                src={src}
                alt="Hero"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 z-20 flex flex-col justify-center pt-32 items-center pointer-events-none">
          <AnimatedText
            text="DARE TO SERVE"
            className="text-5xl md:text-7xl leading-none font-display font-bold tracking-tighter text-white"
          />
          <div className="mt-5 md:mt-6 pointer-events-auto ml-2 md:ml-4">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold text-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] active:scale-95"
            >
              <span className="absolute inset-0 w-full h-full bg-[#ED3237] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                Start a Project
              </span>
              <ArrowRight
                size={24}
                className="relative z-10 group-hover:text-white group-hover:translate-x-2 transition-all duration-500"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-8 bg-[#ED3237] text-white overflow-hidden border-y border-[#BDBFC1]">
        <div className="animate-marquee flex gap-12 items-center text-xl md:text-3xl font-display font-medium uppercase tracking-wider">
          {/* Double the items to create a seamless loop */}
          {[...coreAreas, ...coreAreas].map((area, i) => (
            <div key={i} className="flex items-center gap-12">
              <span>{area}</span>
              <span className="text-[#BDBFC1]">•</span>
            </div>
          ))}
        </div>
      </section>

      {/* Experience & About Section */}
      <section
        ref={experienceRef}
        className="py-32 px-8 md:px-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center"
      >
        <motion.div style={{ y: y1 }} className="md:col-span-5 flex flex-col">
          <h2 className="text-6xl md:text-[8rem] font-display font-bold text-[#ED3237] leading-none tracking-tighter">
            25
            <span className="text-3xl md:text-5xl text-[#BDBFC1] align-top">
              +
            </span>
          </h2>
          <p className="text-xl md:text-2xl font-display font-medium text-[#BDBFC1] mt-4 uppercase tracking-widest">
            Years of Experience
          </p>
        </motion.div>
        <motion.div style={{ y: y2 }} className="md:col-span-7">
          <AnimatedText
            tag="h3"
            text="VICROM MEDIA SERVICES consists of seasoned professionals in marketing communications and branding activities."
            className="text-2xl md:text-4xl leading-tight font-medium text-zinc-200"
          />
          <Link
            to="/about"
            className="inline-flex items-center gap-2 mt-12 text-[#ED3237] hover:text-[#ff878b] transition-colors font-medium text-lg group"
          >
            Discover our story{" "}
            <ArrowRight
              size={20}
              className="group-hover:translate-x-2 transition-transform"
            />
          </Link>
        </motion.div>
      </section>

      {/* Core Areas Interactive List */}
      <section className="py-32 px-8 md:px-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <AnimatedText
              text="Our Core Areas"
              className="text-4xl md:text-6xl font-display font-bold"
            />
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-lg font-medium hover:text-[#ED3237] transition-colors group"
            >
              View all services{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform"
              />
            </Link>
          </div>

          <div className="flex flex-col">
            {coreAreas.map((area, i) => (
              <Link
                to="/services"
                key={i}
                className="group border-t border-zinc-800 py-10 flex items-center justify-between hover:bg-zinc-800/50 transition-colors px-4 -mx-4"
              >
                <h4 className="text-xl md:text-3xl font-display font-medium text-zinc-400 group-hover:text-white group-hover:translate-x-4 transition-all duration-500">
                  {area}
                </h4>
                <div className="w-12 h-12 rounded-full bg-[#ED3237]/10 flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-8 group-hover:translate-x-0 transition-all duration-500">
                  <ArrowRight className="text-[#ED3237]" size={24} />
                </div>
              </Link>
            ))}
            <div className="border-t border-zinc-800" />
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-32 px-8 md:px-24 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <AnimatedText
            text="Featured Work"
            className="text-4xl md:text-6xl font-display font-bold"
          />
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-lg font-medium hover:text-[#ED3237] transition-colors group"
          >
            Explore portfolio{" "}
            <ArrowRight
              size={20}
              className="group-hover:translate-x-2 transition-transform"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <Link to="/work" className="mt-0 md:mt-24 group block">
            <div className="overflow-hidden">
              <ImageReveal
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
                alt="Branding"
                className="w-full aspect-4/5 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="text-2xl font-display font-medium mt-8 group-hover:text-[#ED3237] transition-colors">
              Brand Identity
            </h3>
            <p className="text-zinc-400 mt-2">Branding & Signage</p>
          </Link>
          <Link to="/work" className="group block">
            <div className="overflow-hidden">
              <ImageReveal
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
                alt="Strategy"
                className="w-full aspect-4/5 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="text-2xl font-display font-medium mt-8 group-hover:text-[#ED3237] transition-colors">
              Marketing Strategy
            </h3>
            <p className="text-zinc-400 mt-2">Communication Strategy</p>
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
