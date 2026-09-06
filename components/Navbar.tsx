"use client";
import {useState} from "react";
import {Menu,X,ArrowUpRight} from "lucide-react";
import {AnimatePresence,motion} from "framer-motion";
const links=["Home","About","Services","Industries","Case Studies","Contact"];
export default function Navbar(){
 const [open,setOpen]=useState(false);
 return <header className="fixed left-0 top-0 z-50 w-full px-5 py-5 md:px-8">
  <nav className="mx-auto flex max-w-[1280px] items-center justify-between rounded-full bg-[#171717] px-5 py-3 text-[#f4f3ef] shadow-2xl">
   <a href="#" className="display text-2xl font-semibold">CONVOY<span className="text-xs align-top">®</span></a>
   <div className="hidden items-center gap-7 text-sm md:flex">{links.map(x=><a key={x} href={"#"+x.toLowerCase().replaceAll(" ","-")} className="opacity-80 hover:opacity-100">{x}</a>)}</div>
   <div className="hidden items-center gap-2 md:flex"><a href="#contact" className="rounded-full bg-[#f4f3ef] px-5 py-2.5 text-sm font-semibold text-[#171717]">Request a bid</a><a href="#contact" className="flex items-center gap-1 rounded-full border border-white/20 px-4 py-2.5 text-sm">Talk to us <ArrowUpRight size={15}/></a></div>
   <button aria-label="Open menu" onClick={()=>setOpen(true)} className="md:hidden"><Menu/></button>
  </nav>
  <AnimatePresence>{open&&<motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 bg-[#171717] p-6 text-[#f4f3ef]">
   <div className="flex items-center justify-between"><div className="display text-2xl font-semibold">CONVOY<span className="text-xs align-top">®</span></div><button onClick={()=>setOpen(false)}><X/></button></div>
   <motion.div initial={{y:30}} animate={{y:0}} className="mt-20 flex flex-col gap-5">{links.map((x,i)=><a onClick={()=>setOpen(false)} className="display text-5xl uppercase" key={x} href={"#"+x.toLowerCase().replaceAll(" ","-")}>{String(i+1).padStart(2,"0")} <span className="text-white/30">{x}</span></a>)}</motion.div>
   <div className="absolute bottom-8 left-6 text-sm text-white/50">Move freight smarter. Grow business faster.</div>
  </motion.div>}</AnimatePresence>
 </header>
}