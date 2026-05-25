import { technologies } from "../data/technologies";
import { CheckCircle2, ChevronRight, Activity, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const Technologies = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Banner */}
      <section className="relative py-20 bg-gradient-brand text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-white">
            <path d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="container mx-auto px-6 relative text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] bg-white/20 text-white/95 px-4 py-1.5 rounded-full inline-block mb-4 backdrop-blur-md">
            Wastewater Modular Building Blocks
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Our Core Technologies
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Modular unit operations engineered to combine into complete, high-efficiency water recovery and ZLD systems.
          </p>
        </div>
      </section>

      {/* Grid of technologies */}
      <section className="py-16 md:py-24 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group relative bg-card rounded-2xl border border-border shadow-soft hover:shadow-card hover:-translate-y-1.5 transition-smooth flex flex-col overflow-hidden"
                >
                  {/* Glassmorphic card top banner */}
                  <div className="p-6 pb-2 border-b border-border/40 bg-gradient-soft">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center shadow-soft group-hover:scale-105 transition-smooth">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-white border border-border text-primary rounded-full shadow-sm flex items-center gap-1">
                        <Activity className="w-3.5 h-3.5 text-accent animate-pulse" />
                        Active Process
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground leading-snug">{tech.title}</h3>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground leading-relaxed mb-4">
                        {tech.description}
                      </p>
                      
                      {tech.details && (
                        <p className="text-xs text-muted-foreground/80 leading-normal italic mb-4 bg-muted/40 p-3 rounded-lg border border-border/20">
                          "{tech.details}"
                        </p>
                      )}

                      {/* Benefits checklist */}
                      <div className="space-y-2 mb-6">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground block mb-2">
                          Key Benefits
                        </span>
                        {tech.benefits.map((benefit, i) => (
                          <div key={i} className="flex gap-2 items-start text-xs text-foreground/90">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Specs */}
                    <div className="pt-4 border-t border-border/40 space-y-3 bg-muted/20 -mx-6 -mb-6 p-6">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-muted-foreground font-semibold">Recovery Goal</span>
                        <span className="font-bold text-primary bg-primary/10 px-2 py-0.5 rounded text-[11px]">
                          {tech.efficiency}
                        </span>
                      </div>
                      <div className="flex justify-between items-start text-xs">
                        <span className="text-muted-foreground font-semibold shrink-0">Usage</span>
                        <span className="text-right text-foreground/80 font-medium pl-4">
                          {tech.usage}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engineering Note Block */}
      <section className="py-16 md:py-20 bg-gradient-soft border-t border-border/50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="w-12 h-12 rounded-full bg-accent-soft flex items-center justify-center text-accent mx-auto mb-4 border border-accent/20">
            <Cpu className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Custom Process Engineering Configurations
          </h3>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto leading-relaxed mb-6">
            IWTRS does not believe in a one-size-fits-all approach. Every effluent stream possesses a unique chemical fingerprint (COD/TDS/PVA ratios). Our design engineers customize combinations of these 9 building blocks to maximize membrane lifespan and guarantee operations uptime.
          </p>
          <ChevronRight className="w-6 h-6 text-primary mx-auto animate-bounce" />
        </div>
      </section>
    </div>
  );
};

export default Technologies;
