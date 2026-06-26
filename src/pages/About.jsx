import { ShieldCheck, Award, Users, ChevronRight, Recycle, Check, Building, Wrench, Globe, ShieldAlert, Settings, Shield, BadgePercent, Layers, Clock, HelpCircle, Leaf, ClipboardCheck } from "lucide-react";
import { Link } from "react-router-dom";
import directorTR from "@/assets/director-tr.jpg";
import directorSilvano from "@/assets/director-silvano.jpg";

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

  const professionalServicesList = [
    { text: "Innovative and Ergonomic System design", icon: <Settings className="w-5.5 h-5.5 text-blue-600" /> },
    { text: "All Equipment and Spares Supply with regard to wastewater Treatment", icon: <Layers className="w-5.5 h-5.5 text-blue-600" /> },
    { text: "Budget pricing", icon: <BadgePercent className="w-5.5 h-5.5 text-blue-600" /> },
    { text: "Complete Project Management", icon: <Shield className="w-5.5 h-5.5 text-blue-600" /> },
    { text: "Round the clock Technical backup", icon: <Clock className="w-5.5 h-5.5 text-blue-600" /> },
    { text: "Operation and maintenance of systems", icon: <HelpCircle className="w-5.5 h-5.5 text-blue-600" /> },
    { text: "Environmental and customer friendly Plant Installation", icon: <Leaf className="w-5.5 h-5.5 text-blue-600" /> },
    { text: "Detailed Plant study and analysis", icon: <ClipboardCheck className="w-5.5 h-5.5 text-blue-600" /> },
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
          <p className="!text-white font-medium text-lg max-w-3xl mx-auto opacity-90 drop-shadow-sm leading-relaxed">
            Engineering sustainable, high-recovery wastewater treatment and Zero Liquid Discharge solutions for modern industries.
          </p>
        </div>
      </section>

      {/* Corporate Overview */}
      <section className="py-16 md:py-24 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center md:text-left mb-10 border-b border-border pb-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Corporate Overview</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Innovation Water Treatments & Recovery Services Pvt Ltd
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 bg-white border border-border rounded-3xl p-8 shadow-soft flex flex-col justify-between hover:shadow-md transition-all duration-300">
              <div className="space-y-5 text-muted-foreground text-sm md:text-base leading-relaxed">
                <p className="text-foreground font-semibold text-lg leading-relaxed border-l-4 border-blue-600 pl-4 bg-blue-50/40 py-3 rounded-r-2xl">
                  Headquartered in Tiruppur, Tamil Nadu, IWTRS is a premium process engineering company specializing in industrial wastewater recovery and Zero Liquid Discharge (ZLD) plant designs.
                </p>
                <p>
                  With TNPCB/CPCB now mandating ZLD for process industries, water reuse has become critical. To meet this, IWTRS developed reliable treatment processes focused on high water recovery with low OpEx. After testing multiple treatment combinations, we found that RO membranes are essential for final salinity removal.
                </p>
                <p>
                  The key challenge is membrane fouling from organics and inorganics, which drives up replacement costs. So our focus is strong pre-treatment. Using high-load bio filtration, MBR, and custom desiring PVA removal, we deliver clean RO feed.
                </p>
                <div className="bg-emerald-50 text-emerald-800 p-4 rounded-xl border border-emerald-200/60 font-medium text-sm flex items-start gap-2.5 mt-4">
                  <span className="bg-emerald-600 text-white text-xs px-2 py-0.5 rounded font-bold uppercase mt-0.5 shrink-0">Result</span>
                  <span>96-98% clean water recovery, protected membranes, and full environmental compliance.</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 border-t border-border pt-6 mt-6">
                <div className="flex gap-3 items-center">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground text-xs">Corporate Headquarters</h5>
                    <p className="text-xs text-muted-foreground">Gandhi Nagar, Tiruppur, India</p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground text-xs">Proven Track Record</h5>
                    <p className="text-xs text-muted-foreground">Over 20 premium worldwide plant systems</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-soft border border-border p-8 rounded-3xl shadow-soft bg-card flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" /> Why Partner with IWTRS?
                </h3>
                <ul className="space-y-4">
                  {[
                    { t: "Deep Process Expertise", d: "Tailored engineering for complex effluent streams containing dyes, sizing agents, and heavy salt loads." },
                    { t: "Energy-Efficient Design", desc: "Aeration blowers, hydraulics modeling, and low-energy pump operations cut power by 32%+." },
                    { t: "Extended Membrane Life", desc: "Advanced MBR pre-treatment keeps SDI under 2.5, extending RO membrane life up to 4 years." },
                    { t: "Total Life-Cycle Support", desc: "From lab-scale feasibility assessments to full turnkey supply, automation, and ongoing O&M." }
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mt-1 shrink-0">
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
        </div>
      </section>

      {/* Leadership Profile */}
      <section className="py-16 md:py-24 bg-gradient-soft border-y border-border/60">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Executive Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Engineers & Directors Behind IWTRS
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Our directors combine decades of local process understanding with European technical innovation to deliver state-of-the-art systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Director 1 - T R Thirunavukkarasu */}
            <div className="bg-card border border-border/80 rounded-2xl p-8 shadow-soft flex flex-col md:flex-row gap-6 hover:shadow-card hover:-translate-y-1 transition-smooth">
              <div className="shrink-0">
                <img
                  src={directorTR}
                  alt="T R Thirunavukkarasu"
                  className="w-20 h-20 rounded-full object-cover object-top shadow-soft border-2 border-blue-100"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">T R Thirunavukkarasu</h3>
                <span className="text-xs font-semibold text-accent uppercase tracking-wider block mt-1">Director</span>
                <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                  Leading process engineer overseeing system designs, localized client relations, and plant implementations across the Indian subcontinent. Focused on reducing chemicals, sludge volumes, and optimizing energy consumption.
                </p>
              </div>
            </div>

            {/* Director 2 - Silvano Storti */}
            <div className="bg-card border border-border/80 rounded-2xl p-8 shadow-soft flex flex-col md:flex-row gap-6 hover:shadow-card hover:-translate-y-1 transition-smooth">
              <div className="shrink-0">
                <img
                  src={directorSilvano}
                  alt="Silvano Storti"
                  className="w-20 h-20 rounded-full object-cover object-top shadow-soft border-2 border-blue-100"
                />
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
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Comprehensive Coverage</span>
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
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-4 font-semibold text-sm">
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
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Manufacturing & Procurement</span>
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
                <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white shrink-0 group-hover:bg-gradient-brand transition-smooth">
                  <Check className="w-4.5 h-4.5" />
                </div>
                <span className="font-semibold text-foreground text-sm leading-tight">{supp}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Services Include Section */}
      <section className="py-16 bg-gradient-soft border-t border-b border-border/40">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Strategic End-To-End Deliverables</span>
            <h2 className="text-3xl font-bold text-foreground mt-2">
              Professional Services Include
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {professionalServicesList.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/70 hover:border-blue-500/50 shadow-sm transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 shadow-sm">
                  {item.icon}
                </div>
                <span className="font-medium text-foreground text-sm leading-snug">{item.text}</span>
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