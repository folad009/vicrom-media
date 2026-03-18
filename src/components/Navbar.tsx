import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6  bg-white text-[#ED3237]"
    >
      <Link to="/" className="text-2xl font-display font-bold tracking-tighter">
        <img src="/images/vicrom-logo.png" alt="Vicrom Media Services" className="w-52" />
      </Link>
      <div className="hidden md:flex items-center gap-8 font-medium text-sm">
        <Link to="/about" className="hover:opacity-70 transition-opacity">About</Link>
        <Link to="/services" className="hover:opacity-70 transition-opacity">Services</Link>
        <Link to="/work" className="hover:opacity-70 transition-opacity">Portfolio</Link>
        {/*<Link to="/blog" className="hover:opacity-70 transition-opacity">Blog</Link>*/}
        <Link to="/contact" className="hover:opacity-70 transition-opacity">Contact</Link>
      </div>
    </motion.nav>
  );
}
