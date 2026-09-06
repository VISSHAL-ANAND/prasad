"use client";
import {motion} from "framer-motion";
import {ArrowDown,ArrowUpRight} from "lucide-react";
export default function Hero(){
 return <section className="relative flex min-h-screen items-end overflow-hidden bg-[#171717] text-[#f4f3ef]">
  <div className="absolute inset-0 opacity-50" style={{backgroundImage:"linear-gradient(120deg,rgba(0,0,0,.8),rgba(0,0,0,.15)),url(https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=2200&q=85)",backgroundSize:"cover",backgroundPosition:"center"}}/>
  <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-[#171717]/30"/>
  <div className="container relative z-10 pb-12 pt-40 md:pb-16">
   <div className="mb-8 flex items-end justify-between"><p className="max-w-xs text-sm leading-relaxed text-white/70">The smarter way to move freight. Technology, people and logistics working as one.</p><span className="hidden items-center gap-2 text-xs uppercase tracking-[.2em] md:flex"><ArrowDown size={14}/> Scroll to explore</span></div>
   <motion.h1 initial={{y:60,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:.9}} className="display text-[21vw] font-medium uppercase md:text-[15vw]">CONVOY</motion.h1>
   <div className="mt-7 flex flex-col gap-3 sm:flex-row"><a href="#contact" className="flex items-center justify-between rounded-full bg-[#f4f3ef] px-6 py-4 text-sm font-semibold text-[#171717] sm:min-w-48">Request a bid <ArrowUpRight size={17}/></a><a href="#services" className="rounded-full border border-white/30 px-6 py-4 text-center text-sm">Explore services</a></div>
  </div>
 </section>
}