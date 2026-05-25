import { Droplets, Leaf, Gauge, Zap, Recycle, ShieldCheck, Filter, FlaskConical, Waves, Cpu, Activity, Radio, Factory, Shirt, Flame, ArrowRight, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, CheckCircle2, } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-plant.jpg";
/* ---------- Reusable primitives ---------- */
const Section = ({ id, eyebrow, title, subtitle, children, className = "", }) => (<section id={id} className={`py-20 md:py-28 ${className}`}>
    <div className="container mx-auto px-6">
      {(eyebrow || title || subtitle) && (<div className="max-w-2xl mx-auto text-center mb-14 animate-fade-in">
          {eyebrow && (<span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
              {eyebrow}
            </span>)}
          {title && (<h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              {title}
            </h2>)}
          {subtitle && (<p className="text-muted-foreground text-lg leading-relaxed">{subtitle}</p>)}
        </div>)}
      {children}
    </div>
  </section>);
const FeatureCard = ({ icon: Icon, title, description, }) => (<div className="group relative bg-card rounded-2xl p-7 border border-border shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth animate-scale-in">
    <div className="w-12 h-12 rounded-xl bg-gradient-soft flex items-center justify-center mb-5 group-hover:scale-110 transition-smooth">
      <Icon className="w-6 h-6 text-primary" strokeWidth={2}/>
    </div>
    <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
  </div>);
/* ---------- Navbar ---------- */
const Navbar = () => (<header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
    <div className="container mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#home" className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-lg bg-gradient-brand flex items-center justify-center shadow-soft">
          <Droplets className="w-5 h-5 text-white"/>
        </div>
        <span className="font-display font-bold text-lg tracking-tight">IWTRS</span>
      </a>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
        <a href="#about" className="hover:text-foreground transition-smooth">About</a>
        <a href="#technology" className="hover:text-foreground transition-smooth">Technology</a>
        <a href="#process" className="hover:text-foreground transition-smooth">Process</a>
        <a href="#applications" className="hover:text-foreground transition-smooth">Applications</a>
        <a href="#contact" className="hover:text-foreground transition-smooth">Contact</a>
      </nav>
      <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5">
        <a href="#contact">Get in touch</a>
      </Button>
    </div>
  </header>);
/* ---------- Hero ---------- */
const Hero = () => (<section id="home" className="relative min-h-screen flex items-center overflow-hidden">
    <img src={heroImg} alt="Industrial wastewater treatment plant with tanks and pipelines" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover"/>
    <div className="absolute inset-0 bg-gradient-hero"/>
    {/* subtle wave overlay */}
    <svg className="absolute bottom-0 left-0 w-full text-background" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden>
      <path fill="currentColor" d="M0,64 C240,120 480,16 720,48 C960,80 1200,16 1440,56 L1440,120 L0,120 Z"/>
    </svg>

    <div className="relative container mx-auto px-6 pt-32 pb-32">
      <div className="max-w-3xl animate-fade-in">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-semibold tracking-wide mb-6">
          <Leaf className="w-3.5 h-3.5 text-primary-glow"/>
          ECO-ENGINEERED · ZERO LIQUID DISCHARGE
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
          Advanced Wastewater Treatment &{" "}
          <span className="bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
            Zero Liquid Discharge
          </span>{" "}
          Solutions
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed">
          Achieve up to <span className="text-primary-glow font-semibold">94–96% water recovery</span>{" "}
          with optimized operating cost — engineered for the world's most demanding industries.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-7 h-12 text-base shadow-glow hover:scale-[1.02] transition-smooth">
            <a href="#contact">
              Request Consultation <ArrowRight className="ml-2 w-4 h-4"/>
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-7 h-12 text-base border-2 border-accent text-accent bg-transparent hover:bg-accent hover:text-accent-foreground transition-smooth">
            <a href="#technology">View Technologies</a>
          </Button>
        </div>

        {/* Trust strip */}
        <div className="grid grid-cols-3 gap-6 max-w-xl mt-14 pt-8 border-t border-white/15">
          {[
        { v: "96%", l: "Water Recovery" },
        { v: "30%+", l: "Energy Saved" },
        { v: "24/7", l: "Smart Monitoring" },
    ].map((s) => (<div key={s.l}>
              <div className="text-2xl md:text-3xl font-bold text-white">{s.v}</div>
              <div className="text-xs uppercase tracking-wider text-white/60 mt-1">{s.l}</div>
            </div>))}
        </div>
      </div>
    </div>
  </section>);
/* ---------- About ---------- */
const About = () => (<Section id="about" eyebrow="About IWTRS" title="Engineering Cleaner Water, Smarter Plants" subtitle="We design and build industrial wastewater treatment and recovery systems that combine deep process expertise with energy-efficient engineering — delivering real savings and dependable performance.">
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      <FeatureCard icon={Zap} title="Energy Efficient" description="Optimized aeration, hydraulics and pump scheduling cut power consumption across every plant phase."/>
      <FeatureCard icon={Recycle} title="High Recovery 94–96%" description="Advanced membrane trains and ZLD integration return clean water back into your process."/>
      <FeatureCard icon={Gauge} title="Low Operating Cost" description="Right-sized chemistry, automation and maintenance design lower lifecycle cost dramatically."/>
    </div>
  </Section>);
/* ---------- Technology ---------- */
const techs = [
    { icon: FlaskConical, title: "Biological Treatment", desc: "Energy-efficient biological oxidation reduces COD/BOD with minimal sludge output." },
    { icon: ShieldCheck, title: "PVA Treatment", desc: "Removes sizing agents to protect downstream RO membranes and extend their life." },
    { icon: Filter, title: "MBR System", desc: "Membrane bioreactor combines biology and filtration for very low SDI permeate." },
    { icon: Droplets, title: "Ultrafiltration", desc: "Removes bacteria, suspended solids and colloids ahead of high-pressure membranes." },
    { icon: Waves, title: "Reverse Osmosis", desc: "Multi-stage RO trains engineered for maximum recovery and stable rejection." },
    { icon: Activity, title: "Softener & Degaser", desc: "Reduces hardness and dissolved gases to prevent scaling and corrosion." },
];
const Technology = () => (<Section id="technology" eyebrow="Our Technology" title="Proven Treatment Building Blocks" subtitle="Modular, field-tested unit operations that combine into complete recovery and ZLD trains." className="bg-gradient-soft">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {techs.map((t) => (<FeatureCard key={t.title} icon={t.icon} title={t.title} description={t.desc}/>))}
    </div>
  </Section>);
/* ---------- Process Flow ---------- */
const ProcessFlow = () => {
    const steps = [
        { icon: FlaskConical, label: "Biological" },
        { icon: Filter, label: "MBR" },
        { icon: Droplets, label: "UF" },
        { icon: Waves, label: "RO" },
        { icon: Recycle, label: "ZLD" },
    ];
    return (<Section id="process" eyebrow="Process Flow" title="From Effluent to Reusable Water" subtitle="A continuous, automated pipeline — every stage optimized for recovery and uptime.">
      <div className="relative">
        <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-2">
          {steps.map((s, i) => (<div key={s.label} className="flex flex-col lg:flex-row items-center gap-4 lg:gap-2 flex-1">
              <div className="group flex-1 w-full bg-card border border-border rounded-2xl p-6 text-center shadow-soft hover:shadow-card transition-smooth hover:-translate-y-1">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-brand flex items-center justify-center shadow-soft mb-3 group-hover:scale-110 transition-smooth">
                  <s.icon className="w-7 h-7 text-white"/>
                </div>
                <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-1">
                  Stage {i + 1}
                </div>
                <div className="font-display font-bold text-lg text-foreground">{s.label}</div>
              </div>
              {i < steps.length - 1 && (<div className="lg:flex items-center justify-center text-primary">
                  <ArrowRight className="w-6 h-6 rotate-90 lg:rotate-0 animate-wave"/>
                </div>)}
            </div>))}
        </div>
      </div>
    </Section>);
};
/* ---------- Cost Analysis ---------- */
const CostAnalysis = () => {
    const rows = [
        { phase: "Phase 1 — Pre-treatment", energy: "Low", chem: "Low", oc: "₹ 8/m³" },
        { phase: "Phase 2 — Biological + MBR", energy: "Medium", chem: "Low", oc: "₹ 18/m³" },
        { phase: "Phase 3 — UF + RO Recovery", energy: "Medium", chem: "Medium", oc: "₹ 22/m³" },
        { phase: "Phase 4 — ZLD Concentration", energy: "High", chem: "Medium", oc: "₹ 35/m³" },
    ];
    return (<Section id="cost" eyebrow="Cost Analysis" title="Optimized Operating Cost Across Plant Phases" subtitle="Engineered phase-by-phase to minimize energy and chemical consumption while maximizing recovery." className="bg-secondary/40">
      <div className="max-w-5xl mx-auto bg-card rounded-3xl border border-border shadow-card overflow-hidden animate-fade-in">
        <div className="grid md:grid-cols-3 gap-0 border-b border-border">
          {[
            { v: "−32%", l: "Energy Cost", icon: Zap },
            { v: "−28%", l: "Chemical Cost", icon: FlaskConical },
            { v: "−40%", l: "Maintenance Cost", icon: Gauge },
        ].map((s) => (<div key={s.l} className="p-6 text-center border-b md:border-b-0 md:border-r border-border last:border-r-0">
              <s.icon className="w-6 h-6 text-primary mx-auto mb-2"/>
              <div className="text-3xl font-bold text-gradient-brand">{s.v}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
            </div>))}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr className="text-left">
                <th className="px-6 py-4 font-semibold text-foreground">Plant Phase</th>
                <th className="px-6 py-4 font-semibold text-foreground">Energy Load</th>
                <th className="px-6 py-4 font-semibold text-foreground">Chemical Use</th>
                <th className="px-6 py-4 font-semibold text-foreground text-right">Op. Cost</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (<tr key={r.phase} className="border-t border-border hover:bg-muted/30 transition-smooth">
                  <td className="px-6 py-4 font-medium text-foreground">{r.phase}</td>
                  <td className="px-6 py-4 text-muted-foreground">{r.energy}</td>
                  <td className="px-6 py-4 text-muted-foreground">{r.chem}</td>
                  <td className="px-6 py-4 text-right font-semibold text-primary">{r.oc}</td>
                </tr>))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>);
};
/* ---------- Applications ---------- */
const Applications = () => {
    const apps = [
        { icon: Shirt, title: "Textile Industry" },
        { icon: Droplets, title: "Dyeing Units" },
        { icon: Factory, title: "Industrial Reuse" },
        { icon: Flame, title: "Boiler & Cooling" },
    ];
    return (<Section id="applications" eyebrow="Applications" title="Built for Demanding Industries" subtitle="Trusted across sectors where water reuse and discharge compliance are critical.">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {apps.map((a) => (<div key={a.title} className="group relative bg-card rounded-2xl p-7 border border-border shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth text-center">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-accent-soft flex items-center justify-center mb-4 group-hover:bg-gradient-brand transition-smooth">
              <a.icon className="w-7 h-7 text-accent group-hover:text-white transition-smooth"/>
            </div>
            <div className="font-semibold text-foreground">{a.title}</div>
          </div>))}
      </div>
    </Section>);
};
/* ---------- Smart Features ---------- */
const SmartFeatures = () => {
    const items = [
        { icon: Cpu, title: "PLC & SCADA Automation", desc: "Fully automated plant control with safe, repeatable operations." },
        { icon: Radio, title: "Remote Monitoring", desc: "Cloud dashboards and alerts accessible from anywhere, anytime." },
        { icon: Activity, title: "Real-time Data Tracking", desc: "Live KPIs on flow, recovery, energy and effluent quality." },
    ];
    return (<Section id="features" eyebrow="Smart Plant" title="Automation & Intelligence Built In" className="bg-gradient-soft">
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {items.map((it) => (<div key={it.title} className="bg-card rounded-2xl p-7 border border-border shadow-soft hover:shadow-card transition-smooth">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0 shadow-soft">
                <it.icon className="w-6 h-6 text-white"/>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1.5">{it.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            </div>
          </div>))}
      </div>
    </Section>);
};
/* ---------- CTA ---------- */
const CTA = () => (<section className="py-20 md:py-24">
    <div className="container mx-auto px-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-brand shadow-glow p-10 md:p-16 text-center">
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 800 200" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,100 C200,160 400,40 600,100 C700,130 750,80 800,100 L800,200 L0,200 Z" fill="white"/>
          </svg>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Reduce Cost. Save Water. Improve Efficiency.
          </h2>
          <p className="text-white/85 text-lg mb-8">
            Talk to our process engineers about your effluent stream — we'll design the right recovery solution.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-8 h-12 text-base font-semibold hover:scale-[1.02] transition-smooth">
            <a href="#contact">
              Contact Us <ArrowRight className="ml-2 w-4 h-4"/>
            </a>
          </Button>
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/80 text-sm">
            {["Free site assessment", "Custom design", "Lifecycle support"].map((b) => (<span key={b} className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4"/> {b}
              </span>))}
          </div>
        </div>
      </div>
    </div>
  </section>);
/* ---------- Footer ---------- */
const Footer = () => (<footer id="contact" className="bg-foreground text-background pt-16 pb-8">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-10 pb-10 border-b border-white/10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-gradient-brand flex items-center justify-center">
              <Droplets className="w-5 h-5 text-white"/>
            </div>
            <span className="font-display font-bold text-lg">IWTRS</span>
          </div>
          <p className="text-background/70 text-sm leading-relaxed max-w-md mb-5">
            Innovation Water Treatments & Recovery Services Pvt Ltd — engineering wastewater
            recovery and ZLD systems for sustainable industries.
          </p>
          <div className="flex gap-3">
            {[Linkedin, Twitter, Facebook].map((Icon, i) => (<a key={i} href="#" aria-label="social link" className="w-9 h-9 rounded-full bg-white/10 hover:bg-gradient-brand flex items-center justify-center transition-smooth hover:scale-110">
                <Icon className="w-4 h-4 text-white"/>
              </a>))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4 text-sm tracking-wide uppercase">Contact</h4>
          <ul className="space-y-3 text-sm text-background/70">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-primary-glow shrink-0"/>
              <span>Tiruppur, Tamil Nadu, India</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 mt-0.5 text-primary-glow shrink-0"/>
              <a href="mailto:trthiru@iwtrs.in" className="hover:text-white transition-smooth">
                trthiru@iwtrs.in
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 mt-0.5 text-primary-glow shrink-0"/>
              <a href="tel:+917639204482" className="hover:text-white transition-smooth">
                +91 76392 04482
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4 text-sm tracking-wide uppercase">Explore</h4>
          <ul className="space-y-2 text-sm text-background/70">
            {[
        ["About", "#about"],
        ["Technology", "#technology"],
        ["Process", "#process"],
        ["Applications", "#applications"],
    ].map(([l, h]) => (<li key={l}>
                <a href={h} className="hover:text-white transition-smooth">
                  {l}
                </a>
              </li>))}
          </ul>
        </div>
      </div>

      <div className="pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-background/50">
        <p>© {new Date().getFullYear()} Innovation Water Treatments & Recovery Services Pvt Ltd. All rights reserved.</p>
        <p>Crafted for a cleaner industrial future.</p>
      </div>
    </div>
  </footer>);
/* ---------- Page ---------- */
const Index = () => {
    return (<main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Technology />
      <ProcessFlow />
      <CostAnalysis />
      <Applications />
      <SmartFeatures />
      <CTA />
      <Footer />
    </main>);
};
export default Index;
