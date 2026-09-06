"use client";
import {motion} from "framer-motion";
import {ArrowDown,ArrowUpRight} from "lucide-react";

export default function Hero(){
 return <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-[#171717] text-[#f4f3ef]">
  <div className="absolute inset-0 scale-[1.03] bg-cover bg-center" style={{backgroundImage:"linear-gradient(110deg,rgba(0,0,0,.82),rgba(0,0,0,.22)),url(https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=2400&q=90)"}}/>
  <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-[#171717]/25"/>
  <div className="container relative z-10 pb-8 pt-36 md:pb-14">
   <div className="mb-8 flex items-end justify-between md:mb-10"><p className="max-w-[290px] text-[13px] leading-5 text-white/65 md:text-sm md:leading-6">The smarter way to move freight. Technology, people and logistics working as one.</p><span className="hidden items-center gap-2 text-[10px] uppercase tracking-[.22em] text-white/60 md:flex"><ArrowDown size={13}/> Scroll to explore</span></div>
   <motion.h1 initial={{y:80,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1,ease:[.16,1,.3,1]}} className="display -ml-1 text-[20.5vw] font-medium uppercase leading-[.78] md:text-[15.4vw]">CONVOY</motion.h1>
   <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#contact" className="flex items-center justify-between rounded-full bg-[#f4f3ef] px-6 py-4 text-sm font-semibold text-[#171717] transition hover:scale-[1.02] sm:min-w-48">Request a bid <ArrowUpRight size={17}/></a><a href="#services" className="rounded-full border border-white/30 px-6 py-4 text-center text-sm transition hover:bg-white hover:text-black">Explore services</a></div>
  </div>
 </section>
}