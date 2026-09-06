"use client";
import {motion,useMotionValue,useSpring} from "framer-motion";
import {ArrowRight,Pause} from "lucide-react";
export default function Hero(){
 const x=useMotionValue(0), y=useMotionValue(0);
 const sx=useSpring(x,{stiffness:90,damping:20}), sy=useSpring(y,{stiffness:90,damping:20});
 const move=(e:React.MouseEvent<HTMLDivElement>)=>{x.set((e.clientX-window.innerWidth/2)*.018);y.set((e.clientY-window.innerHeight/2)*.012)};
 return <section onMouseMove={move} className="relative min-h-screen overflow-hidden bg-[#171717] text-[#f2f2f0]">
  <motion.div style={{x:sx,y:sy,scale:1.045,backgroundImage:"url(https://cdn.prod.website-files.com/69830fbb86d197088c4b8cfc/69aeb2e79d0e158391417e3b_Convoy-Home_poster.0000000.jpg)"}} className="absolute inset-[-2%] bg-cover bg-center" initial={{scale:1.08}} animate={{scale:1.045}} transition={{duration:1.4,ease:[.16,1,.3,1]}} />
  <div className="absolute inset-0 bg-black/50"/><div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-[#171717]"/>
  <div className="absolute left-0 right-0 top-[125px] overflow-hidden md:top-[116px]"><motion.div whileHover={{x:"-2%"}} transition={{duration:.8,ease:[.16,1,.3,1]}} className="display select-none whitespace-nowrap text-center text-[28vw] font-black uppercase leading-[.68] tracking-[-.12em] text-[#f0f0ee] md:text-[20.5vw]">CONVOY</motion.div></div>
  <div className="container relative z-10 flex min-h-screen flex-col justify-end pb-10 pt-32 md:pb-12">
   <div className="mb-7 flex justify-center"><span className="rounded-full border border-white/20 bg-white/[.04] px-4 py-2 text-xs font-medium text-white/70 backdrop-blur-sm">WEBFLOW TEMPLATE</span></div>
   <div className="mx-auto max-w-[850px] text-center"><motion.h1 initial={{y:35,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:.8,delay:.15,ease:[.16,1,.3,1]}} className="display text-[11vw] font-semibold leading-[.92] md:text-[5.8rem]">Move Freight Smarter,<br/>Grow Business Faster</motion.h1>
    <div className="mt-8 flex justify-center gap-2"><a href="#contact" className="group flex items-center gap-3 rounded-xl bg-[#f2f2f0] px-6 py-4 text-sm font-semibold text-[#242424] transition-transform hover:scale-[1.025]">Request a Bid <ArrowRight size={17} className="transition-transform group-hover:translate-x-1"/></a><a href="#services" className="rounded-xl bg-white/10 px-6 py-4 text-sm font-semibold backdrop-blur-md transition hover:bg-white/20">Buy Template</a></div>
   </div>
  </div>
  <div className="absolute bottom-6 right-6 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white/70 backdrop-blur-md"><Pause size={12} fill="currentColor"/> PAUSE</div>
 </section>
}