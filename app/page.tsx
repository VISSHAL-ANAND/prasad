"use client";

import { FormEvent, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Quote, Truck, Anchor, ShoppingBag, Plane, Factory, Check } from "lucide-react";

const imgs = {
  hero: "https://cdn.prod.website-files.com/69830fbb86d197088c4b8cfc/69aeb2e79d0e158391417e3b_Convoy-Home_poster.0000000.jpg",
  airplane: "https://cdn.prod.website-files.com/69830fbb86d197088c4b8cfc/69ad68b6f993ccefefa7417d_Blog-4.avif",
  train: "https://cdn.prod.website-files.com/69830fbb86d197088c4b8cfc/69ad68b6675fc6f54607de28_Blog-6.avif",
  truck: "https://cdn.prod.website-files.com/69830fbb86d197088c4b8cfc/69ad68b678d176563a6a9329_Blog-2.avif",
  industry: "https://cdn.prod.website-files.com/69830fbb86d197088c4b8cfc/69af20d7ea4b9315662b4f5b_Industries-1.avif"
};

const services = [
  ["Freight & Transportation Management", imgs.truck],
  ["Route Planning & Scheduling", imgs.train],
  ["Logistics Technology Integration", imgs.airplane],
  ["Warehouse & Distribution Strategy", imgs.hero],
  ["Transportation Cost Reduction", imgs.industry]
];

const industries = [
  ["Automotive & Transportation", Truck, "LAST-MILE DELIVERY", "52%", "Faster Fulfillment", "3.2x", "Order Volume Growth"],
  ["Maritime Distribution", Anchor, "PORT OPERATIONS", "43%", "Port Efficiency Gains", "2.7x", "Container Throughput"],
  ["E-commerce & Retail", ShoppingBag, "FLEET MANAGEMENT", "38%", "Cost Reduction", "2.9x", "Fleet Utilization"],
  ["Air Cargo & Aviation", Plane, "AIR CARGO", "41%", "Faster Turnaround", "2.5x", "Cargo Throughput"],
  ["Industrial Supply", Factory, "SUPPLY CHAIN", "36%", "Lower Lead Time", "3.1x", "Order Accuracy"]
];

const testimonials = [
  ["Prasad transformed our logistics operation in six months. Their hands-on approach delivered huge improvements in delivery speed and cost savings that exceeded our expectations.", "Jennifer Martinez, VP of Operations", "47%", "Cost Savings", "2.8x", "Delivery Speed"],
  ["We were skeptical about consultants, but Prasad proved us wrong. They identified inefficiencies we didn't know existed and helped us implement solutions that actually work in real operations.", "Marcus Chen, Director of Supply Chain", "35%", "Route Optimization", "3.1x", "Fleet Efficiency"],
  ["The ROI was immediate. Prasad improved our warehouse operations and reduced our freight costs. Their expertise in logistics technology integration was exactly what we needed to scale.", "Sarah Johnson, Chief Operations", "42%", "Warehouse Efficiency", "2.6x", "Order Processing Speed"],
  ["Prasad doesn't just give tips — they stay until you see results. Their team worked alongside ours for months, and the operational improvements have been transformative for our business.", "David Thompson, Logistics Manager", "51%", "Cost Reduction", "3.4x", "Inventory Turnover"],
  ["From research to full implementation, Prasad exceeded expectations. Their data-driven approach helped us cut expenses and improve service levels that our customers immediately noticed.", "Lisa Rodriguez, VP of Logistics", "39%", "Transportation Savings", "2.9x", "On-Time Delivery"]
];

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="pill">{children}</span>;
}

function ImgCard({ src, title, className = "" }: { src: string; title: string; className?: string }) {
  return (
    <div className={`gallery-card group ${className}`}>
      <img src={src} alt="" />
      <div className="image-shade" />
      {title && <div className="image-title">{title}</div>}
    </div>
  );
}

export default function Home() {
  const [industry, setIndustry] = useState(0);
  const [testimonial, setTestimonial] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  const currentIndustry = industries[industry];
  const t = testimonials[testimonial];
  const IndustryIcon = currentIndustry[1] as typeof Truck;

  function submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="site-shell">
      <Navbar />
      <Hero />

      <section className="logo-strip" aria-label="Clients">
        <div className="logo-track">
          {[...Array(2)].flatMap(() => ["Loom & Ledger™", "Orbitale Net™", "Crimson Bay™", "Northline™", "Apex Freight™", "Loom & Ledger™"]).map((x, i) => (
            <div className="client-logo" key={i}>{x}</div>
          ))}
        </div>
      </section>

      <section id="about" className="about-section container">
        <div className="about-inner">
          <Pill>A BIT ABOUT US</Pill>
          <h2>Prasad was built to bridge the gap between operational execution and business strategy. We provide dependable transportation solutions while helping organizations optimize performance, reduce operational inefficiencies, and scale with confidence.</h2>
          <div className="about-stats">
            <div><strong>47%</strong><span>Cost Savings</span></div>
            <i />
            <div><strong>2.8x</strong><span>Delivery Speed</span></div>
          </div>
        </div>
        <div className="gallery-row">
          <ImgCard src={imgs.airplane} title="" />
          <ImgCard src={imgs.train} title="" />
          <ImgCard src={imgs.truck} title="" />
          <ImgCard src={imgs.airplane} title="" />
          <ImgCard src={imgs.industry} title="" />
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="container">
          <div className="section-head">
            <div>
              <Pill>OUR SERVICES</Pill>
              <h2>Logistics & Consulting<br />Solutions by Prasad</h2>
            </div>
            <div className="section-side">
              <p>Prasad combines reliable transportation with expert consulting to streamline operations, reduce costs, and drive growth.</p>
              <div>
                <a className="small-btn dark" href="#contact">Explore Services <ArrowRight size={15} /></a>
                <a className="small-btn pale" href="#contact">Request a Bid</a>
              </div>
            </div>
          </div>
          <div className="service-grid">
            {services.map(([title, src]) => <ImgCard key={title} src={src} title={title} />)}
          </div>
        </div>
      </section>

      <section id="industries" className="industries-section container">
        <div className="industry-copy">
          <Pill>INDUSTRIES WE SERVE</Pill>
          <h2>At Prasad We Proudly<br />Serve 20+ Industries</h2>
          <div className="industry-buttons">
            <button className="small-btn dark" onClick={() => setIndustry(0)}>All Industries <ArrowRight size={15} /></button>
            <a className="small-btn pale" href="#contact">Request a Bid</a>
          </div>
          <div className="industry-list">
            {industries.map(([name, Icon], i) => {
              const I = Icon as typeof Truck;
              return <button key={name as string} onClick={() => setIndustry(i)} className={industry === i ? "active" : ""}><I size={15} />{name as string}</button>;
            })}
          </div>
        </div>
        <div className="industry-feature">
          <img src={imgs.industry} alt="" />
          <div className="feature-label">
            <Pill>{currentIndustry[2] as string}</Pill>
            <div className="feature-industry-name"><IndustryIcon size={16} /> {currentIndustry[0] as string}</div>
            <div className="feature-stats">
              <div><strong>{currentIndustry[3] as string}</strong><span>{currentIndustry[4] as string}</span></div>
              <div><strong>{currentIndustry[5] as string}</strong><span>{currentIndustry[6] as string}</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="container">
          <div className="testimonial-top">
            <div><Pill>TESTIMONIALS</Pill><h2>They Tried, Listen<br />What They Say</h2></div>
            <div className="slider-arrows">
              <button aria-label="Previous testimonial" onClick={() => setTestimonial((testimonial + testimonials.length - 1) % testimonials.length)}><ChevronLeft /></button>
              <button aria-label="Next testimonial" onClick={() => setTestimonial((testimonial + 1) % testimonials.length)}><ChevronRight /></button>
            </div>
          </div>
          <div className="testimonial-card" key={testimonial}>
            <div className="quote-copy">
              <Quote size={34} fill="currentColor" />
              <p>{t[0]}</p>
              <small>{t[1]}</small>
              <div className="brand">▰ PRASAD™</div>
            </div>
            <div className="results">
              <Pill>RESULTS ACHIEVED</Pill>
              <div><strong>{t[2]}</strong><span>{t[3]}</span></div>
              <div><strong>{t[4]}</strong><span>{t[5]}</span></div>
            </div>
          </div>
          <div className="slider-dots">{testimonials.map((_, i) => <button key={i} aria-label={`Go to testimonial ${i + 1}`} className={i === testimonial ? "active" : ""} onClick={() => setTestimonial(i)} />)}</div>
        </div>
      </section>

      <section id="case-studies" className="case-section container">
        <div className="case-head">
          <div><Pill>CASE STUDIES</Pill><h2>Results That Speak<br />for Themselves</h2></div>
          <p>Data-led logistics strategy, practical implementation, and measurable outcomes across transportation, fulfillment, and supply-chain operations.</p>
        </div>
        <div className="case-grid">
          <div className="case-card"><img src={imgs.truck} alt="" /><span>40% Cost Reduction · Poland</span><h3>Reducing Fleet Costs 40% for a National Distributor Through Route Optimization</h3><a href="#contact">Read Case Study <ArrowRight size={15} /></a></div>
          <div className="case-card"><img src={imgs.train} alt="" /><span>52% Faster Fulfillment · United States</span><h3>Cutting Delivery Times in Half for an E-commerce Brand Across the United States</h3><a href="#contact">Read Case Study <ArrowRight size={15} /></a></div>
        </div>
      </section>

      <section id="contact" className="contact-section container">
        <div className="contact-copy">
          <Pill>REQUEST A BID</Pill>
          <h2>Are You Interested in Optimizing Your Logistic Operations?</h2>
          <p>Get in touch, and we will book a meeting with our consultant.</p>
          <div className="consultant"><div className="avatar">AM</div><div><strong>Alex Morgan</strong><span>Senior Consultant</span><span>+48 456 789 006</span><span>alex@prasad.com</span></div></div>
        </div>
        <form className="contact-form" onSubmit={submitForm}>
          <label>Name<input required placeholder="John Doe" /></label>
          <label>Email<input required type="email" placeholder="john@doe.com" /></label>
          <label>Subject<select defaultValue=""><option value="" disabled>Type of project</option><option>Freight</option><option>Consulting</option><option>Technology Integration</option></select></label>
          <label>Your Message<textarea required placeholder="Tell us about your project" /></label>
          <label className="check"><input required type="checkbox" /> I agree to Privacy Policy.</label>
          <button className="submit" type="submit">{submitted ? <>Sent <Check size={17} /></> : <>Submit <ArrowRight size={17} /></>}</button>
          {submitted && <p className="form-success">Thank you! Your submission has been received.</p>}
        </form>
      </section>

      <section className="cta-section">
        <img src={imgs.hero} alt="" />
        <div className="cta-overlay" />
        <div className="cta-content"><Pill>PRASAD</Pill><h2>Ready to build<br />remarkable website?</h2><div><a className="btn light" href="#contact">Request a Bid <ArrowRight size={18} /></a><a className="btn glass" href="#services">Explore Services</a></div></div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div><div className="footer-logo">▣ PRASAD™</div><p>Prasad<br />ul. Ładunku 56,<br />30-003 Kraków</p><p>+48 456 789 006<br />hello@prasad.com</p></div>
          <div><h4>COMPANY</h4><a href="#">Home</a><a href="#about">About</a><a href="#contact">Contact</a><a href="#contact">Legal</a></div>
          <div><h4>PAGES</h4><a href="#services">Services</a><a href="#industries">Industries</a><a href="#case-studies">Case Studies</a><a href="#contact">Request a Bid</a></div>
          <div><h4>SOCIAL MEDIA</h4><a href="#contact">LinkedIn</a><a href="#contact">Instagram</a><a href="#contact">Facebook</a><a href="#contact">X.com</a></div>
          <div><h4>JOIN NEWSLETTER</h4><form className="newsletter" onSubmit={(e) => { e.preventDefault(); setNewsletter(true); }}><input required type="email" placeholder="hi@prasad.com" /><button type="submit">Subscribe</button></form>{newsletter ? <small>Thanks for subscribing.</small> : <small>Your information is never disclosed to third parties.</small>}</div>
        </div>
        <div className="footer-bottom container"><span>© 2026 PRASAD. ALL RIGHTS RESERVED.</span><span>DESIGN SYSTEM · PRIVACY · TERMS</span></div>
      </footer>
    </main>
  );
}