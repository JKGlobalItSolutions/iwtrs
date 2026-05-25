import { Leaf, ArrowRight, Zap, Recycle, Gauge, CheckCircle2, FlaskConical, Filter, Droplets, Waves, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-plant.jpg";

const FeatureCard = ({ icon: Icon, title, description, delay = "" }) => (
  <div className={`group relative bg-card rounded-2xl p-7 border border-border shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth ${delay}`}>
    <div className="w-12 h-12 rounded-xl bg-gradient-soft flex items-center justify-center mb-5 group-hover:scale-110 transition-smooth">
      <Icon className="w-6 h-6 text-primary" strokeWidth={2} />
    </div>
    <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

const Home = () => {
  return (
    <div className="relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Industrial wastewater treatment plant with tanks and pipelines"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        {/* Wave Divider */}
        <svg
          className="absolute bottom-0 left-0 w-full text-background"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path fill="currentColor" d="M0,64 C240,120 480,16 720,48 C960,80 1200,16 1440,56 L1440,120 L0,120 Z" />
        </svg>

        <div className="relative container mx-auto px-6 pt-32 pb-32">
          <div className="max-w-3xl animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-semibold tracking-wide mb-6">
              <Leaf className="w-3.5 h-3.5 text-primary-glow" />
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
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-7 h-12 text-base shadow-glow hover:scale-[1.02] transition-smooth font-semibold"
              >
                <Link to="/contact">
                  Request Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-7 h-12 text-base border-2 border-accent text-accent bg-transparent hover:bg-accent hover:text-white transition-smooth font-semibold"
              >
                <Link to="/technologies">View Technologies</Link>
              </Button>
            </div>

            {/* Statistics Strip */}
            <div className="grid grid-cols-3 gap-6 max-w-xl mt-14 pt-8 border-t border-white/15">
              {[
                { v: "96%", l: "Water Recovery" },
                { v: "30%+", l: "Energy Saved" },
                { v: "24/7", l: "Smart Monitoring" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl md:text-3xl font-bold text-white">{s.v}</div>
                  <div className="text-xs uppercase tracking-wider text-white/60 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Overview */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
              About IWTRS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Engineering Cleaner Water, Smarter Plants
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We design and build industrial wastewater treatment and recovery systems that combine deep process expertise
              with energy-efficient engineering — delivering real savings and dependable performance.
            </p>
            <Button asChild variant="link" className="text-primary hover:text-primary/80 font-bold group">
              <Link to="/about">
                Learn more about our expertise <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-smooth" />
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <FeatureCard
              icon={Zap}
              title="Energy Efficient"
              description="Optimized aeration, hydraulics, and pump scheduling cut power consumption across every plant phase."
            />
            <FeatureCard
              icon={Recycle}
              title="High Recovery 94–96%"
              description="Advanced membrane trains and ZLD integration return clean water back into your industrial processes."
            />
            <FeatureCard
              icon={Gauge}
              title="Low Operating Cost"
              description="Right-sized chemistry, advanced automation, and low-maintenance design reduce lifecycle cost dramatically."
            />
          </div>
        </div>
      </section>

      {/* Technologies Preview */}
      <section className="py-20 md:py-28 bg-gradient-soft">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
              Core Technologies
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Proven Treatment Building Blocks
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Modular, field-tested unit operations that combine into complete recovery and Zero Liquid Discharge (ZLD) trains.
            </p>
            <Button asChild variant="link" className="text-primary hover:text-primary/80 font-bold group">
              <Link to="/technologies">
                Explore all 9 treatment building blocks <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-smooth" />
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: FlaskConical, title: "Biological Treatment", desc: "Energy-efficient biological oxidation reduces COD/BOD with minimal sludge output." },
              { icon: Leaf, title: "PVA Treatment System", desc: "Removes industrial sizing agents to protect downstream reverse osmosis membranes." },
              { icon: Filter, title: "MBR System", desc: "Membrane bioreactor combines biology and filtration for very low SDI permeate." },
              { icon: Droplets, title: "Ultrafiltration", desc: "Removes bacteria, viruses, and colloids ahead of high-pressure membrane stages." },
              { icon: Waves, title: "Reverse Osmosis (RO)", desc: "Multi-stage RO trains engineered for maximum recovery and stable TDS rejection." },
              { icon: Activity, title: "Softener & Degaser", desc: "Reduces hardness and dissolved gases to prevent membrane scaling and corrosion." },
            ].map((t) => (
              <FeatureCard key={t.title} icon={t.icon} title={t.title} description={t.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-brand shadow-glow p-10 md:p-16 text-center">
            <div className="absolute inset-0 opacity-20">
              <svg viewBox="0 0 800 200" preserveAspectRatio="none" className="w-full h-full">
                <path d="M0,100 C200,160 400,40 600,100 C700,130 750,80 800,100 L800,200 L0,200 Z" fill="white" />
              </svg>
            </div>
            <div className="relative max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Reduce Cost. Save Water. Improve Efficiency.
              </h2>
              <p className="text-white/85 text-lg mb-8 leading-relaxed">
                Talk to our process engineers about your effluent stream — we'll design the right recovery solution.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 rounded-full px-8 h-12 text-base font-semibold hover:scale-[1.02] transition-smooth shadow-lg"
              >
                <Link to="/contact">
                  Contact Us <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/80 text-sm font-medium">
                {["Free site assessment", "Custom process design", "Lifecycle O&M support"].map((b) => (
                  <span key={b} className="inline-flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-white" /> {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
