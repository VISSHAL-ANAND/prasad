"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Pause } from "lucide-react";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 90, damping: 20 });
  const sy = useSpring(y, { stiffness: 90, damping: 20 });
  const move = (e: React.MouseEvent<HTMLDivElement>) => {
    x.set((e.clientX - window.innerWidth / 2) * 0.018);
    y.set((e.clientY - window.innerHeight / 2) * 0.012);
  };

  return (
    <section onMouseMove={move} className="hero relative min-h-screen overflow-hidden">
      <motion.div
        style={{ x: sx, y: sy }}
        className="hero-media"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1.045 }}
        transition={{ duration: 1.4, ease: [.16, 1, .3, 1] }}
      >
        <div className="hero-media-image" />
      </motion.div>
      <div className="hero-overlay" />
      <div className="hero-wordmark-wrap"><motion.div whileHover={{ x: "-1.5%" }} className="hero-wordmark">PRASAD</motion.div></div>

      <div className="hero-content container">
        <div className="hero-copy">
          <span className="pill hero-pill">PRASAD TEMPLATE</span>
          <motion.h1 initial={{ y: 35, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .8, delay: .15, ease: [.16, 1, .3, 1] }}>
            Move Freight Smarter,<br />Grow Business Faster
          </motion.h1>
          <div className="hero-actions">
            <a className="btn light" href="#contact">Request a Bid <ArrowRight size={17} /></a>
            <a className="btn glass" href="#services">Explore Services</a>
          </div>
        </div>
      </div>

      <div className="pause"><Pause size={12} fill="currentColor" /> PAUSE</div>
      <div className="scroll-cue">↓ &nbsp; SCROLL TO EXPLORE</div>
    </section>
  );
}