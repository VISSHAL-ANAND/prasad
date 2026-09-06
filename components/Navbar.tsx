"use client";
import {useState} from "react";
import {Menu,X,ArrowUpRight} from "lucide-react";
import {AnimatePresence,motion} from "framer-motion";
const links=["Home","About","Services","Industries","Case Studies","Contact"];
const go=(x:string)=>x==="Home"?"#":"#"+x.toLowerCase().replaceAll(" ","-");
export default function Navbar(){
 const [open,setOpen]=useState(false);
 return <header className="fixed left-0 top-0 z-50 w-full px-4 py-4 md:px-7 md:py-5">
  <nav className="mx-auto flex max-w-[1280px] items-center justify-between rounded-full border border-white/5 bg-[#171717]/95 px-5 py-3 text-[#f4f3ef] shadow-2xl backdrop-blur-md">
   <a href="#" className="display text-[22px] font-semibold tracking-[-.08em]">CONVOY<span className="text-[9px] align-top">®</span></a>
   <div className="hidden items-center gap-6 text-[13px] md:flex">{links.map(x=><a key={x} href={go(x)} className="text-white/70 transition hover:text-white">{x}</a>)}</div>
   <div className="hidden items-center gap-2 md:flex"><a href="#contact" className="rounded-full bg-[#f4f3ef] px-5 py-2.5 text-xs font-semibold text-[#171717] transition hover:scale-[1.02]">Request a bid</a><a href="#contact" className="flex items-center gap-1 rounded-full border border-white/20 px-4 py-2.5 text-xs transition hover:bg-white hover:text-black">Talk to us <ArrowUpRight size={14}/></a></div>
   <button aria-label="Open menu" onClick={()=>setOpen(true)} className="md:hidden"><Menu size={23}/></button>
  </nav>
  <AnimatePresence>{open&&<motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 overflow-y-auto bg-[#171717] p-6 text-[#f4f3ef]">
   <div className="flex items-center justify-between"><a onClick={()=>setOpen(false)} href="#" className="display text-2xl font-semibold">CONVOY<span className="text-xs align-top">®</span></a><button aria-label="Close menu" onClick={()=>setOpen(false)}><X size={25}/></button></div>
   <motion.div initial={{y:35}} animate={{y:0}} transition={{duration:.45,ease:[.16,1,.3,1]}} className="mt-20 flex flex-col gap-5">{links.map((x,i)=><a onClick={()=>setOpen(false)} className="display text-4xl uppercase leading-none sm:text-5xl" key={x} href={go(x)}><span className="mr-3 text-xs text-white/25">{String(i+1).padStart(2,"0")}</span>{x}</a>)}</motion.div>
   <div className="absolute bottom-8 left-6 text-[10px] uppercase tracking-widest text-white/35">Move freight smarter. Grow business faster.</div>
  </motion.div>}</AnimatePresence>
 </header>
}