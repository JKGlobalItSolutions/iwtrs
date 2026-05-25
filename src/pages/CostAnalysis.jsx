import { Zap, FlaskConical, Gauge, CheckCircle2, ChevronRight, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";

const CostAnalysis = () => {
  const savings = [
    { v: "−32%", l: "Energy Cost Savings", desc: "Optimized aeration blower scheduling and high-efficiency submersible pump operations.", icon: Zap },
    { v: "−28%", l: "Chemical Cost Savings", desc: "Right-sized acid/alkali dosing, precise pH neutralization controls, and resin lifespan optimizations.", icon: FlaskConical },
    { v: "−40%", l: "Maintenance Cost Savings", desc: "Reduced bio-fouling and scaling translates to fewer membrane cleanings and extended spare modules lifespan.", icon: Gauge },
  ];

  const rows = [
    {
      phase: "Phase 1 — Pre-treatment",
      energy: "Low Load",
      chem: "Low Consumption",
      oc: "₹ 8/m³",
      processes: "Screening, Oil Separation, Equilisation",
      barWidth: "w-1/4"
    },
    {
      phase: "Phase 2 — Biological + MBR",
      energy: "Medium Load",
      chem: "Low Consumption",
      oc: "₹ 18/m³",
      processes: "Aeration Oxidation, Sludge Separation",
      barWidth: "w-2/4"
    },
    {
      phase: "Phase 3 — UF + RO Recovery",
      energy: "Medium Load",
      chem: "Medium Consumption",
      oc: "₹ 22/m³",
      processes: "Colloid Filtration, Salt Rejection Trains",
      barWidth: "w-3/5"
    },
    {
      phase: "Phase 4 — ZLD Concentration",
      energy: "High Load",
      chem: "Medium Consumption",
      oc: "₹ 35/m³",
      processes: "Condensate MEE Evaporation, Crystallization",
      barWidth: "w-full"
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Banner */}
      <section className="relative py-20 bg-gradient-brand text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-white">
            <path d="M0,80 Q25,60 50,80 T100,80 L100,100 L0,100 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="container mx-auto px-6 relative text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] bg-white/20 text-white/95 px-4 py-1.5 rounded-full inline-block mb-4 backdrop-blur-md">
            Operational Excellence & ROI
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            OpEx Cost Analysis
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Phase-by-phase operating cost optimization. Engineered to minimize chemical and electrical load while maximizing water recovery.
          </p>
        </div>
      </section>

      {/* Savings Highlights */}
      <section className="py-16 md:py-24 container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Savings Strips */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {savings.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-card border border-border/80 rounded-2xl p-7 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-smooth relative overflow-hidden group"
                >
                  <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-smooth">
                    <Icon className="w-24 h-24 text-primary" />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-brand flex items-center justify-center shadow-soft">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Target Saved
                    </span>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-gradient-brand mb-2">
                    {s.v}
                  </div>
                  <h4 className="font-bold text-foreground text-base mb-1.5">{s.l}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Detailed Costs Dashboard */}
          <div className="bg-card border border-border shadow-card rounded-3xl overflow-hidden">
            <div className="p-6 md:p-8 border-b border-border/60 bg-gradient-soft flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <TrendingDown className="w-5.5 h-5.5 text-primary" />
                  Plant Operational Phases Pricing Matrix
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Average cost calculated per cubic meter (m³) of treated wastewater input.
                </p>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 bg-white border border-border/60 text-accent rounded-full flex items-center gap-1">
                Real-time values
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted/40 border-b border-border/60 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="px-6 py-5">Treatment Phase</th>
                    <th className="px-6 py-5 hidden md:table-cell">Key Unit Operations</th>
                    <th className="px-6 py-5">Energy Load</th>
                    <th className="px-6 py-5">Chemical Use</th>
                    <th className="px-6 py-5 text-right">Operating Cost (OpEx)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {rows.map((r, idx) => (
                    <tr key={idx} className="hover:bg-muted/30 transition-smooth group">
                      <td className="px-6 py-5">
                        <span className="font-bold text-foreground block">{r.phase}</span>
                        <span className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1 block">
                          Stage {idx + 1}
                        </span>
                      </td>
                      <td className="px-6 py-5 hidden md:table-cell">
                        <span className="text-xs text-muted-foreground font-medium">{r.processes}</span>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${
                            r.energy.includes("Low") ? "bg-primary" : r.energy.includes("Medium") ? "bg-accent" : "bg-destructive"
                          }`} />
                          <span className="text-xs text-foreground font-semibold">{r.energy}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <span className="text-xs text-muted-foreground font-medium">{r.chem}</span>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <span className="font-bold text-primary text-base block group-hover:scale-105 transition-smooth">
                          {r.oc}
                        </span>
                        <div className="w-24 h-1.5 bg-muted rounded-full overflow-hidden mt-1.5 ml-auto">
                          <div className={`h-full bg-gradient-brand rounded-full ${r.barWidth}`} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Checklist Note */}
      <section className="py-16 bg-gradient-soft border-t border-border/50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Factors Influencing Your Operating Cost
          </h3>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto leading-relaxed mb-8">
            The specific price is primarily determined by feed TDS loads, chemical sludge requirements, power tariff slabs in your region, and recovery condensate targets.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
            {[
              "Region Power Slabs / Energy Turbines Integration",
              "Sludge Press Moisture Retention & Cake Ratios",
              "Acid Neutralization and Special Resin Regenerants"
            ].map((f, i) => (
              <div key={i} className="flex gap-2.5 items-start p-4 bg-card border border-border rounded-xl shadow-soft">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-foreground/80 leading-normal">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CostAnalysis;
