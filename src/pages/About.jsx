import { ShieldCheck, Award, Users, ChevronRight, Recycle, Check, Building, Wrench, Globe, ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const supplies = [
    "Effluent Treatment Plants",
    "Sewage Treatment Plants",
    "Water Treatment Plants",
    "Ultra Filtration & MBR Systems",
    "Quartz & Softener Resins Filters",
    "Reverse Osmosis Plants",
    "Decarbonating & Cooling Towers",
    "Rotating Brush Screeners",
    "Belt Press & Filter Press",
    "Sludge Driers",
    "Specialized Water Resins",
    "Laboratory & Testing Equipments",
  ];

  const services = [
    { title: "Process Engineering & Design", desc: "Customized ETP/STP design based on direct laboratory effluent analysis and sizing." },
    { title: "Plant Operation & Maintenance (O&M)", desc: "Full-scale O&M management focused on achieving target recovery and energy consumption benchmarks." },
    { title: "Chemical & Biological Optimization", desc: "Fine-tuning dosage, aeration, and hydraulics to drastically reduce operating cost." },
    { title: "Upgrade & Retrofitting", desc: "Retrofitting old plants with modern automation, MBR systems, and high-recovery RO stages." },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-brand text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-white">
            <circle cx="50" cy="50" r="40" fill="currentColor" />
          </svg>
        </div>
        <div className="container mx-auto px-6 relative text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] bg-white/20 text-white/95 px-4 py-1.5 rounded-full inline-block mb-4 backdrop-blur-md">
            Sustainable Engineering
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            About IWTRS
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Engineering sustainable, high-recovery wastewater treatment and Zero Liquid Discharge solutions for modern industries.
          </p>
        </div>
      </section>

      {/* Corporate Overview - REMADE FOR PREMIUM PROFESSIONAL LOOK */}
      <section className="py-16 md:py-24 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center md:text-left mb-12 border-b border-border pb-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Corporate Overview</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Innovation Water Treatments & Recovery Services Pvt Ltd
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Core Introduction & Styled Paragraph Layout */}
            <div className="lg:col-span-7 space-y-8">
              {/* Main Headline Card */}
              <div className="p-6 bg-gradient-soft border-l-4 border-primary rounded-r-2xl shadow-sm bg-card">
                <p className="text-foreground font-medium text-lg leading-relaxed">
                  Headquartered in Tiruppur, Tamil Nadu, IWTRS is a premium process engineering company specializing in industrial wastewater recovery and Zero Liquid Discharge (ZLD) plant designs.
                </p>
              </div>

              {/* Regulatory Context & Challenge Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-5 border border-border/80 rounded-xl bg-card/50">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1.5 text-sm">Compliance & Mandates</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    With TNPCB/CPCB now mandating ZLD for process industries, water reuse has become critical. To meet this, IWTRS developed reliable treatment processes focused on high water recovery with low OpEx.
                  </p>
                </div>

                <div className="p-5 border border-border/80 rounded-xl bg-card/50">
                  <div className="w-9 h-9 rounded-lg bg-accent-soft flex items-center justify-center text-accent mb-3">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1.5 text-sm">Membrane Protection</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    After testing multiple treatment combinations, we found that RO membranes are essential for final salinity removal. The key challenge is membrane fouling from organics and in organics, which drives up replacement costs.
                  </p>
                </div>
              </div>

              {/* Solution Framework Statement */}
              <div className="p-6 border border-primary/20 bg-primary-soft/10 rounded-2xl">
                <h4 className="font-bold text-primary uppercase tracking-wider text-xs mb-2">Our Engineering Approach</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  So our focus is strong pre-treatment. Using high-load bio filtration, MBR, and custom desiring PVA removal, we deliver clean RO feed. 
                </p>
                <div className="mt-4 pt-4 border-t border-border flex items-center gap-2">
                  <div className="px-3 py-1 bg-accent/10 text-accent font-bold text-xs rounded-full">
                    Result
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    94-96% clean water recovery, protected membranes, and full environmental compliance.
                  </span>
                </div>
              </div>

              {/* Contact/Office Brief Row */}
              <div className="flex flex-col sm:flex-row gap-6 border-t border-border pt-6">
                <div className="flex gap-3 items-center">
                  <Building className="w-5 h-5 text-muted-foreground shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground text-xs">Corporate Headquarters</h5>
                    <p className="text-xs text-muted-foreground">Gandhi Nagar, Tiruppur, India</p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <Wrench className="w-5 h-5 text-muted-foreground shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground text-xs">Proven Track Record</h5>
                    <p className="text-xs text-muted-foreground">Over 20 premium worldwide plant systems</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Why Partner Side Card (Maintained for layout balance) */}
            <div className="lg:col-span-5 bg-gradient-soft border border-border p-8 rounded-3xl shadow-soft">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" /> Why Partner with IWTRS?
              </h3>
              <ul className="space-y-4">
                {[
                  { t: "Deep Process Expertise", d: "Tailored engineering for complex effluent streams containing dyes, sizing agents, and heavy salt loads." },
                  { t: "Energy-Efficient Design", desc: "Aeration flow makers, hydraulics modeling, and low-energy pump operations cut power by 32%+." },
                  { t: "Extended Membrane Life", desc: "Advanced MBR pre-treatment keeps SDI under 2.5, extending RO membrane life up to 4 years." },
                  { t: "Total Life-Cycle Support", desc: "From lab-scale feasibility assessments to full turnkey supply, automation, and ongoing O&M." }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1 shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-foreground text-sm font-semibold block">{item.t}</strong>
                      <span className="text-xs text-muted-foreground leading-normal mt-0.5 block">{item.d || item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Profile */}
      <section className="py-16 md:py-24 bg-gradient-soft border-y border-border/60">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Executive Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Engineers & Directors Behind IWTRS
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Our directors combine decades of local process understanding with European technical innovation to deliver state-of-the-art systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Director 1 */}
            <div className="bg-card border border-border/80 rounded-2xl p-8 shadow-soft flex flex-col md:flex-row gap-6 hover:shadow-card hover:-translate-y-1 transition-smooth">
              <div className="w-16 h-16 rounded-full bg-gradient-brand flex items-center justify-center text-white shrink-0 shadow-soft">
                <Users className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">T R Thirunavukkarasu</h3>
                <span className="text-xs font-semibold text-accent uppercase tracking-wider block mt-1">Director</span>
                <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                  Leading process engineer overseeing system designs, localized client relations, and plant implementations across the Indian subcontinent. Focused on reducing chemicals, sludge volumes, and optimizing energy consumption.
                </p>
              </div>
            </div>

            {/* Director 2 */}
            <div className="bg-card border border-border/80 rounded-2xl p-8 shadow-soft flex flex-col md:flex-row gap-6 hover:shadow-card hover:-translate-y-1 transition-smooth">
              <div className="w-16 h-16 rounded-full bg-gradient-brand flex items-center justify-center text-white shrink-0 shadow-soft">
                <Users className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Silvano Storti</h3>
                <span className="text-xs font-semibold text-accent uppercase tracking-wider block mt-1">CEO | Director</span>
                <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                  Driving international technologies, specialized European engineering partnerships, and automation integrations. Focused on SCADA cloud dashboards, remote parameter monitoring, and long-term O&M system efficiencies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Comprehensive Coverage</span>
            <h2 className="text-3xl font-bold text-foreground mt-2 mb-4 leading-tight">
              Professional Services
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Our engineering services are geared towards complete plant life-cycle support, ensuring we meet water recovery goals and strict regulatory requirements.
            </p>
            <div className="p-5 bg-accent-soft/40 border border-accent/20 rounded-2xl">
              <h4 className="font-semibold text-foreground text-sm flex items-center gap-2">
                <Recycle className="w-4.5 h-4.5 text-accent" /> Operation & Maintenance (O&M)
              </h4>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                We take complete responsibility for ongoing operations. Our specialized on-site engineers ensure the continuous achievement of fixed water recovery ratios, chemical budgets, and power conservation targets.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {services.map((serv, index) => (
              <div key={index} className="p-6 bg-card border border-border rounded-xl shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-smooth">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 font-semibold text-sm">
                  0{index + 1}
                </div>
                <h4 className="font-semibold text-foreground text-base mb-2">{serv.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{serv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Supplies Checklist */}
      <section className="py-16 md:py-24 bg-gradient-soft border-t border-border/50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Manufacturing & Procurement</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Our Industrial Supplies Catalog
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We manufacture and source state-of-the-art machinery, filters, and high-performance resins to supply complete, turn-key ETP/STP and ZLD installations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {supplies.map((supp, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/80 shadow-soft hover:border-accent/40 transition-smooth group"
              >
                <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-white shrink-0 group-hover:bg-gradient-brand transition-smooth">
                  <Check className="w-4.5 h-4.5" />
                </div>
                <span className="font-semibold text-foreground text-sm leading-tight">{supp}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="py-16 bg-foreground text-background text-center border-t border-white/10">
        <div className="container mx-auto px-6 max-w-3xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            <span className="text-white">Interested in doing a water feasibility audit?</span>
          </h3>
          <p className="text-background/70 text-sm mb-6 leading-relaxed">
            Let our process design engineers analyze your wastewater streams and provide an energy-efficient recovery system mockup.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1 text-sm font-bold text-accent hover:text-white transition-smooth uppercase tracking-wider"
          >
            Get In Touch Now <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;