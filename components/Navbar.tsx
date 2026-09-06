"use client";
import {useState} from "react";
import {Menu,X} from "lucide-react";
import {AnimatePresence,motion} from "framer-motion";
const links=["Home","About","Services","Clients","Blog","Contact"];
const go=(x:string)=>x==="Home"?"#":"#"+x.toLowerCase().replaceAll(" ","-");
export default function Navbar(){
 const [open,setOpen]=useState(false);
 return <header className="absolute left-0 top-0 z-50 w-full px-6 py-6 md:px-8 md:py-7">
  <nav className="mx-auto flex max-w-[1680px] items-center justify-between text-[#f2f2f0]">
   <a href="#" className="flex items-center gap-2 text-[24px] font-bold tracking-[-.065em]"><span className="flex h-6 w-6 items-center justify-center bg-[#f2f2f0] text-[#222]"><span className="text-[15px] font-black leading-none">C</span></span>CONVOY<span className="ml-[-3px] text-[9px] align-top">®</span></a>
   <div className="hidden items-center gap-9 text-[16px] font-semibold md:flex">{links.map(x=><a key={x} href={go(x)} className="relative py-2 transition-opacity hover:opacity-70">{x}<span className="absolute bottom-0 left-0 h-px w-0 bg-current transition-all duration-300 hover:w-full"/></a>)}</div>
   <div className="hidden items-center gap-3 md:flex"><a href="#services" className="rounded-2xl bg-white/10 px-6 py-3.5 text-[16px] font-semibold backdrop-blur-md transition hover:bg-white/20">Templates</a><a href="#contact" className="rounded-2xl bg-[#f2f2f0] px-7 py-3.5 text-[16px] font-semibold text-[#282828] transition hover:scale-[1.02]">Get Template</a></div>
   <button aria-label="Open menu" onClick={()=>setOpen(true)} className="md:hidden"><Menu size={28}/></button>
  </nav>
  <AnimatePresence>{open&&<motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 min-h-screen bg-[#e9e9e7] p-6 text-[#282828]">
   <div className="flex items-center justify-between"><a onClick={()=>setOpen(false)} href="#" className="flex items-center gap-2 text-2xl font-bold tracking-[-.06em]"><span className="flex h-6 w-6 items-center justify-center bg-[#282828] text-[#e9e9e7]">C</span>CONVOY<span className="text-xs">®</span></a><button aria-label="Close menu" onClick={()=>setOpen(false)}><X size={28}/></button></div>
   <p className="mt-16 text-sm text-black/45">Navigation</p>
   <motion.div initial={{y:30}} animate={{y:0}} className="mt-5 flex flex-col">{links.map((x,i)=><a onClick={()=>setOpen(false)} className="border-b border-black/10 py-3 text-4xl font-semibold tracking-[-.05em]" key={x} href={go(x)}><span className="mr-3 text-xs text-black/30">{String(i+1).padStart(2,"0")}</span>{x}</a>)}</motion.div>
   <div className="absolute bottom-7 left-6 right-6 grid gap-2"><a href="#services" onClick={()=>setOpen(false)} className="rounded-xl bg-black/5 px-5 py-4 text-lg">Templates</a><a href="#contact" onClick={()=>setOpen(false)} className="rounded-xl bg-[#282828] px-5 py-4 text-lg text-white">Get Template →</a></div>
  </motion.div>}</AnimatePresence>
 </header>
}