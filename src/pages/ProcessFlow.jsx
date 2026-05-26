import { ArrowRight, FlaskConical, Filter, Droplets, Waves, Recycle, CheckCircle, HelpCircle, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const ProcessFlow = () => {
  const steps = [
    {
      stage: 1,
      title: "Raw Effluent",
      icon: HelpCircle,
      description: "Highly contaminated industrial wastewater (high COD, BOD, sizing agents, and salts).",
      details: "Raw ETP inlet collects the raw wash and chemical baths. The first challenge is coarse and fine screening to remove raw solids.",
      color: "border-destructive/35 bg-destructive/5 text-destructive",
      badgeColor: "bg-destructive text-white"
    },
    {
      stage: 2,
      title: "Biological System",
      icon: FlaskConical,
      description: "Organic breakdown and aeration tank oxidation using specialized energy-saving flow makers.",
      details: "Optimized aeration flow makers are introduced to tanks, reducing power costs. COD/BOD is reduced by up to 90%.",
      color: "border-primary/35 bg-primary/5 text-primary",
      badgeColor: "bg-primary text-white"
    },
    {
      stage: 3,
      title: "MBR Bioreactor",
      icon: Filter,
      description: "Separates biological sludge and fine colloids down to 0.3 microns using membranes.",
      details: "SDI (Silt Density Index) is lowered to < 2.5. Eliminates classic clarifiers/decanters, reducing the plant footprint.",
      color: "border-accent/35 bg-accent/5 text-accent",
      badgeColor: "bg-accent text-white"
    },
    {
      stage: 4,
      title: "Ultrafiltration",
      icon: Droplets,
      description: "Colloidal suspended solids and pathogen polish to protect downstream RO trains.",
      details: "Separates bacteria and virus modules. Water from this stage can be directly reused for initial coarse wash cycles.",
      color: "border-primary/35 bg-primary/5 text-primary",
      badgeColor: "bg-primary text-white"
    },
    {
      stage: 5,
      title: "Reverse Osmosis",
      icon: Waves,
      description: "Multi-stage membrane filtration to remove dissolved salts (TDS) and recover clean water.",
      details: "Achieves up to 94-96% clean permeate recovery. Engineered pump scheduling cuts electrical cost by 30%.",
      color: "border-accent/35 bg-accent/5 text-accent",
      badgeColor: "bg-accent text-white"
    },
    {
      stage: 6,
      title: "ZLD Concentration",
      icon: Recycle,
      description: "MEE crystallizer reduces final high-salinity brine to solid disposable salts.",
      details: "Achieves complete regulatory zero-liquid compliance. Clean evaporated condensate is recovered for process heating.",
      color: "border-primary/35 bg-primary/5 text-primary",
      badgeColor: "bg-primary text-white"
    },
    {
      stage: 7,
      title: "Reusable Water",
      icon: CheckCircle,
      description: "Pure, low-conductivity permeate returned directly to boilers and dyeing bath processes.",
      details: "Reduces raw water purchase expenses. Closes the green manufacturing cycle with a zero footprint.",
      color: "border-accent/35 bg-accent/5 text-accent",
      badgeColor: "bg-accent text-white"
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Banner */}
      <section className="relative py-20 bg-gradient-brand text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-white">
            <path d="M0,50 Q25,70 50,50 T100,50 L100,100 L0,100 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="container mx-auto px-6 relative text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] bg-white/20 text-white/95 px-4 py-1.5 rounded-full inline-block mb-4 backdrop-blur-md">
            Interactive Pipelines
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Our Wastewater Process Flow
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            From raw industrial effluent to crystal-clear reusable process water: a fully optimized, closed-loop recovery system.
          </p>
        </div>
      </section>

      {/* Main Flow Diagram */}
      <section className="py-16 md:py-24 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Horizontal Interactive Chain - Desktop */}
          <div className="hidden lg:flex items-center justify-between gap-1 mb-20 bg-gradient-soft border border-border p-6 rounded-2xl shadow-soft">
            {steps.map((s, i) => {
              const StepIcon = s.icon;
              return (
                <div key={s.stage} className="flex items-center flex-grow last:flex-grow-0">
                  <div className="text-center flex-1">
                    <div className="relative group w-14 h-14 mx-auto rounded-xl bg-gradient-brand flex items-center justify-center shadow-soft hover:scale-110 hover:-translate-y-1 transition-smooth cursor-pointer">
                      <StepIcon className="w-6 h-6 text-white" />
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none bg-foreground text-background text-[10px] px-2 py-0.5 rounded uppercase font-bold tracking-wider whitespace-nowrap z-10 shadow">
                        Stage 0{s.stage}
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-foreground block mt-3 whitespace-nowrap">
                      {s.title}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="flex items-center justify-center text-primary animate-pulse w-full">
                      <ArrowRight className="w-5 h-5 mx-2" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Vertical Detailed Layout - All Screens */}
          <div className="space-y-10 relative">
            {/* Background Line Connector */}
            <div className="absolute left-6 sm:left-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-destructive via-primary to-accent -translate-x-1/2 hidden sm:block" />

            {steps.map((s, index) => {
              const StepIcon = s.icon;
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={s.stage}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4 }}
                  className={`flex flex-col sm:flex-row items-start sm:items-center gap-8 ${isEven ? "sm:flex-row-reverse" : ""
                    }`}
                >
                  {/* Visual Node */}
                  <div className="w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center text-white shrink-0 shadow-soft sm:absolute sm:left-1/2 sm:-translate-x-1/2 z-10 font-bold text-sm">
                    {s.stage}
                  </div>

                  {/* Spacer or empty block for desktop grid alignment */}
                  <div className="hidden sm:block w-1/2" />

                  {/* Step Description Card */}
                  <div
                    className={`w-full sm:w-1/2 group relative border rounded-2xl p-6 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-smooth ${s.color}`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-card border flex items-center justify-center shadow-sm shrink-0">
                        <StepIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className={`text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full ${s.badgeColor}`}>
                          Stage 0{s.stage}
                        </span>
                        <h3 className="font-bold text-foreground text-lg leading-tight mt-1">
                          {s.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                      {s.description}
                    </p>
                    <p className="text-xs text-muted-foreground/80 leading-normal bg-card border border-border/20 p-3 rounded-lg">
                      {s.details}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Pipeline Status note */}
      <section className="py-16 bg-gradient-soft border-t border-border/50 text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Fully Automated Pipeline Architecture
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Every pipeline stage is connected via automatic controls, monitored with online flowmeters, pH sensors, and SCADA switchboards, guaranteeing complete recovery reliability 24/7.
          </p>
          <div className="flex justify-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
            <span>Continuous Automation</span>
            <span>•</span>
            <span>Real-time Safety Rejection</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessFlow;
