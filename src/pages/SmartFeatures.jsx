import { Cpu, Radio, Activity, Terminal, Shield, RefreshCw, BarChart2, Server, Power } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SmartFeatures = () => {
  // Live mock statistics state for the dashboard
  const [telemetry, setTelemetry] = useState({
    flowInlet: 156.4,
    tdsPermeate: 42,
    powerLoad: 22.8,
    recoveryRatio: 95.2,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTelemetry((prev) => ({
        flowInlet: +(prev.flowInlet + (Math.random() - 0.5) * 1.5).toFixed(1),
        tdsPermeate: +(prev.tdsPermeate + (Math.random() - 0.5) * 1.2).toFixed(0),
        powerLoad: +(prev.powerLoad + (Math.random() - 0.5) * 0.4).toFixed(1),
        recoveryRatio: +(prev.recoveryRatio + (Math.random() - 0.5) * 0.05).toFixed(2),
      }));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const alerts = [
    { source: "MBR BIOFEED", type: "INFO", desc: "SDI calibration reading: 2.1 - Optimal", time: "10 mins ago" },
    { source: "PVA TREATMENT", type: "OK", desc: "Desizing stream organic recovery active", time: "25 mins ago" },
    { source: "RO TRAIN 2", type: "OK", desc: "High recovery pump pressure: 38 bar", time: "1 hr ago" }
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Banner */}
      <section className="relative py-20 bg-gradient-brand text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-white">
            <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="30" cy="30" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="70" cy="70" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
            <line x1="30" y1="40" x2="70" y2="60" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
        <div className="container mx-auto px-6 relative text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] bg-white/20 text-white/95 px-4 py-1.5 rounded-full inline-block mb-4 backdrop-blur-md">
            SCADA Cloud Automation
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Smart Plant Automation
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Real-time management dashboards, remote control parameter sets, and complete PLC/SCADA cloud logging.
          </p>
        </div>
      </section>

      {/* Industrial Dashboard Mockup */}
      <section className="py-16 md:py-24 container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Dashboard Left - Live Telemetry KPIs */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card border border-border/80 shadow-soft p-6 rounded-2xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-border/40 pb-4 mb-6 bg-gradient-soft -m-6 p-6 rounded-t-2xl">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-accent animate-pulse" />
                  <h3 className="font-bold text-foreground text-sm uppercase tracking-wider">
                    Live Telemetry Broadcast
                  </h3>
                </div>
                <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full">
                  <RefreshCw className="w-3 h-3 animate-spin" /> Connected
                </span>
              </div>

              {/* Grid of live stats */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Permeate TDS", val: `${telemetry.tdsPermeate} ppm`, desc: "Limit: < 100 ppm", icon: Activity, color: "text-primary" },
                  { label: "Flow Inlet", val: `${telemetry.flowInlet} m³/h`, desc: "Design: 160 m³/h", icon: Server, color: "text-accent" },
                  { label: "High recovery energy", val: `${telemetry.powerLoad} kWh`, desc: "Saved: 32% OpEx", icon: Cpu, color: "text-primary" },
                  { label: "Water recovery ratio", val: `${telemetry.recoveryRatio}%`, desc: "Target: 95% recovery", icon: Shield, color: "text-accent" },
                ].map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx} className="p-4 bg-muted/30 border border-border/50 rounded-xl relative">
                      <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider block">
                        {stat.label}
                      </span>
                      <div className={`text-2xl font-bold mt-1 mb-0.5 ${stat.color}`}>
                        {stat.val}
                      </div>
                      <span className="text-[10px] text-muted-foreground/80 leading-none">
                        {stat.desc}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Custom Telemetry Chart Graphic (Aesthetic Div Mockup) */}
            <div className="bg-card border border-border/80 shadow-soft p-6 rounded-2xl">
              <h4 className="font-bold text-foreground text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <BarChart2 className="w-5 h-5 text-primary" /> Permeate Recovery (24 Hours Graph)
              </h4>
              <div className="h-48 border-l border-b border-border/80 relative flex items-end justify-between px-4 pb-2">
                {/* Visual Chart Bars representing recovery flows */}
                {[65, 78, 85, 92, 94, 95, 95.2, 95.8, 96, 95.4, 95.1, 95.2].map((height, i) => (
                  <div key={i} className="flex flex-col items-center gap-1.5 flex-1 mx-1 group cursor-pointer">
                    <span className="opacity-0 group-hover:opacity-100 transition-smooth absolute bottom-full mb-10 text-[9px] font-bold bg-foreground text-background py-0.5 px-1.5 rounded shadow">
                      {height}%
                    </span>
                    <div
                      style={{ height: `${height}%` }}
                      className="w-full bg-gradient-brand rounded-t opacity-80 group-hover:opacity-100 transition-smooth"
                    />
                    <span className="text-[9px] text-muted-foreground font-semibold">
                      {(i + 1) * 2}h
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dashboard Right - Controls & Warnings */}
          <div className="space-y-6">
            {/* Live Controller switchboards */}
            <div className="bg-card border border-border/80 shadow-soft p-6 rounded-2xl">
              <h3 className="font-bold text-foreground text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-accent" /> Cloud Remote command values
              </h3>
              
              <div className="space-y-4">
                {[
                  { name: "PVA Anaerobic Dosing", val: "ACTIVE - AUTO", active: true },
                  { name: "Aeration Flow Maker Blower", val: "ACTIVE - SCHEDULER", active: true },
                  { name: "Multi-stage RO Reject Recycle", val: "ACTIVE - AUTO", active: true },
                  { name: "MEE Forced Circulation Crystallizer", val: "MONITORING - STANDBY", active: false }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 bg-muted/40 border border-border/40 rounded-xl">
                    <div>
                      <h4 className="font-semibold text-foreground text-xs">{item.name}</h4>
                      <span className="text-[9px] text-muted-foreground tracking-wide mt-0.5 block">{item.val}</span>
                    </div>
                    <button className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-smooth ${
                      item.active ? "bg-primary/10 border-primary/20 text-primary" : "bg-muted border-border text-muted-foreground"
                    }`}>
                      <Power className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Alarm logs */}
            <div className="bg-card border border-border/80 shadow-soft p-6 rounded-2xl">
              <h3 className="font-bold text-foreground text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <Radio className="w-5 h-5 text-primary" /> SCADA Switchboard Events
              </h3>
              
              <div className="space-y-3">
                {alerts.map((al, idx) => (
                  <div key={idx} className="p-3 border-l-2 border-primary bg-muted/30 rounded-r-lg text-xs">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-foreground text-[10px] uppercase tracking-wide">
                        {al.source}
                      </span>
                      <span className="text-[9px] text-muted-foreground/80 font-medium">
                        {al.time}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-normal text-[11px]">{al.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Automation Benefits list */}
      <section className="py-16 bg-gradient-soft border-t border-border/50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            PLC, SCADA & Remote Cloud Monitoring
          </h3>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto leading-relaxed mb-6">
            The switchboard is equipped with PLC and SCADA for the management and recording of all operational parameters. It is possible to install the remote control for commanding and setting values of the process from the remote computer. Realtime monitoring and history of control parameters and management costs (Slide 9).
          </p>
        </div>
      </section>
    </div>
  );
};

export default SmartFeatures;
