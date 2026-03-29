import PageTransition from "../components/PageTransition";
import AnimatedText from "../components/AnimatedText";
import ImageReveal from "../components/ImageReveal";
import { clientLogos } from "../data/clients";

export default function About() {
  return (
    <PageTransition>
      <div
          className="h-150 relative flex items-center justify-center"
          style={{
            backgroundImage: "url('/images/about-vicrom-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>

          {/* Content */}
          <div className="relative z-10">
            <AnimatedText
              text="About Us"
              className="text-7xl md:text-9xl font-display font-bold mb-12 text-[#ED3237]"
            />
          </div>
        </div>
      <div className=" px-8 md:px-24 max-w-7xl mx-auto bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-24">
          <AnimatedText
            tag="p"
            text="VICROM MEDIA SERVICES consist of seasoned professionals with cumulative experience of 25 years in marketing communications and branding activities."
            className="text-2xl md:text-4xl leading-tight text-[#ED3237]"
          />
          <div className="space-y-8 text-gray-700 text-lg">
            <p>
              Our on-field and off-field staffs are well skilled in their
              various endeavours and ready to deliver as project demands - and
              this is our strength.
            </p>
            <p>
              We see every challenge as opportunity to get better especially
              with projects that require swift response as our work force is
              technically and strategically positioned to meet your needs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-32 border-t border-zinc-800 pt-16">
          <div>
            <h3 className="text-2xl font-display font-bold mb-4 text-[#ED3237]">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To be a service provider of reckoning by building an enduring
              corporate partnership with businesses and brands to achieve their
              desired goal.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-display font-bold mb-4 text-[#ED3237]">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To constantly use modern technology and professional expertise to
              meet every day corporate needs of businesses and brands for
              favourable competition in the market place.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-display font-bold mb-4 text-[#ED3237]">
              Our Approach
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To leverage on vast experience, strategic thinking, best practices
              and collaborative approach to deliver quality services of
              international standard.
            </p>
          </div>
        </div>

        <div className="mt-32 border-t border-zinc-800 pt-16">
          <AnimatedText
            text="Selected Clients"
            className="text-4xl md:text-6xl font-display font-bold mb-16 text-[#ED3237]"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {clientLogos.map((src, i) => (
              <div
                key={src}
                className="py-8 px-4 md:py-10 md:px-6 border border-zinc-800/50 flex items-center justify-center grayscale opacity-70 hover:opacity-100 hover:grayscale-0 hover:border-[#ED3237]/40 hover:bg-[#ED3237]/5 transition-all duration-500 rounded-lg"
              >
                <img
                  src={src}
                  alt={`Client partner ${i + 1}`}
                  className="max-h-28 md:max-h-32 w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32">
          <ImageReveal
            src="/images/vicrom-workforce.jpg"
            alt="Team"
            className="w-full h-[60vh]"
          />
        </div>
      </div>
    </PageTransition>
  );
}
