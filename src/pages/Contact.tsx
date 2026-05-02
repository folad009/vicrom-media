import PageTransition from '../components/PageTransition';
import AnimatedText from '../components/AnimatedText';
import { FormEvent, useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(`New contact form message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nProject Details:\n${message}`
    );

    window.location.href = `mailto:info@vicromng.com?subject=${subject}&body=${body}`;
  };

  return (
    <PageTransition>
      <div className="pt-40 px-8 md:px-24 max-w-7xl mx-auto min-h-screen">
        <AnimatedText text="Our Contact" className="text-7xl md:text-9xl font-display font-bold mb-24 text-[#ED3237]" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-2xl text-zinc-500 mb-12">Do you have a brief for us? Drop us a line or visit our office.</p>
            <div className="flex flex-col gap-8">
              <div>
                <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-2">Email</h4>
                <a href="mailto:info@vicromng.com" className="text-3xl font-display font-medium text-zinc-500 hover:text-[#ED3237] transition-colors">info@vicromng.com</a>
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-2">Phone</h4>
                <p className="text-2xl font-display font-medium text-zinc-500">
                  08077807105<br/>
                  09038931160</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-2">Address</h4>
                <p className="text-xl text-zinc-500">31, Olatilewa Street<br/>Lawanson-Ikate, Surulere, Lagos</p>
              </div>
            </div>
          </div>
          <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-transparent border border-zinc-800 py-4 focus:outline-none focus:border-black transition-colors text-lg text-black p-4"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-transparent border border-zinc-800 py-4 focus:outline-none focus:border-black transition-colors text-lg text-black p-4"
            />
            <textarea
              placeholder="Tell us about your project"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="bg-transparent border border-zinc-800 py-4 focus:outline-none focus:border-black transition-colors text-lg text-black p-4 resize-none"
            ></textarea>
            <button className="self-start bg-zinc-800 text-white px-8 py-4 rounded-full font-medium hover:bg-[#ED3237] hover:text-white transition-colors mt-4">Send Message</button>
          </form>
        </div>
      </div>
    </PageTransition>
  );
}
