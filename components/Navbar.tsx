"use client";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  ["Home", "#"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Industries", "#industries"],
  ["Case Studies", "#case-studies"],
  ["Contact", "#contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-nav ${scrolled ? "scrolled" : ""}`}>
      <nav>
        <a href="#" className="nav-logo"><span className="logo-box">P</span><span>PRASAD</span><span className="reg">™</span></a>
        <div className="nav-links">{links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</div>
        <div className="nav-actions"><a className="nav-pill" href="#contact">Request a bid</a><a className="nav-cta" href="#contact">Talk to us <ArrowUpRight size={16} /></a></div>
        <button className="mobile-menu" onClick={() => setOpen(true)} aria-label="Open menu"><Menu size={29} /></button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div className="mobile-panel" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: .45, ease: [.16, 1, .3, 1] }}>
            <div className="mobile-top"><a href="#" onClick={() => setOpen(false)} className="nav-logo"><span className="logo-box">P</span>PRASAD<span className="reg">™</span></a><button onClick={() => setOpen(false)} aria-label="Close menu"><X size={29} /></button></div>
            <span className="mobile-label">Navigation</span>
            <div className="mobile-links">{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}</div>
            <div className="mobile-actions"><a href="#contact" onClick={() => setOpen(false)}>Request a bid</a><a href="#contact" onClick={() => setOpen(false)}>Talk to us <ArrowUpRight size={17} /></a></div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}