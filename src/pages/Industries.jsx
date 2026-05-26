import { useState, useMemo } from "react";
import { projects } from "../data/projects";
import { Building, MapPin, Activity, ShieldCheck, Search, SlidersHorizontal, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "../components/ui/input";

const Industries = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLoc, setSelectedLoc] = useState("All");

  // Get unique locations
  const locations = useMemo(() => {
    const locSet = new Set();
    projects.forEach((p) => {
      // Extract main region (e.g. Tamil Nadu, Kerala, Gujarat, Punjab)
      const locLower = p.location.toLowerCase();
      if (locLower.includes("tamilnadu") || locLower.includes("tamil nadu") || locLower.includes("tiruppur") || locLower.includes("erode")) {
        locSet.add("Tamil Nadu");
      } else if (locLower.includes("kerala") || locLower.includes("ernakulam")) {
        locSet.add("Kerala");
      } else if (locLower.includes("gujarat")) {
        locSet.add("Gujarat");
      } else if (locLower.includes("punjab") || locLower.includes("ludhiana")) {
        locSet.add("Punjab");
      } else if (locLower.includes("haryana") || locLower.includes("hisar")) {
        locSet.add("Haryana");
      } else if (locLower.includes("sri lanka") || locLower.includes("lanka")) {
        locSet.add("Sri Lanka");
      } else if (locLower.includes("china")) {
        locSet.add("China");
      } else if (locLower.includes("telangana")) {
        locSet.add("Telangana");
      } else if (locLower.includes("karnataka")) {
        locSet.add("Karnataka");
      } else if (locLower.includes("andhra") || locLower.includes("vijaywada")) {
        locSet.add("Andhra Pradesh");
      }
    });
    return ["All", ...Array.from(locSet)];
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.location.toLowerCase().includes(searchQuery.toLowerCase());

      if (selectedLoc === "All") return matchesSearch;

      const locLower = p.location.toLowerCase();
      let matchesLoc = false;
      if (selectedLoc === "Tamil Nadu") {
        matchesLoc = locLower.includes("tamilnadu") || locLower.includes("tamil nadu") || locLower.includes("tiruppur") || locLower.includes("erode");
      } else if (selectedLoc === "Kerala") {
        matchesLoc = locLower.includes("kerala") || locLower.includes("ernakulam");
      } else if (selectedLoc === "Gujarat") {
        matchesLoc = locLower.includes("gujarat");
      } else if (selectedLoc === "Punjab") {
        matchesLoc = locLower.includes("punjab") || locLower.includes("ludhiana");
      } else if (selectedLoc === "Haryana") {
        matchesLoc = locLower.includes("haryana") || locLower.includes("hisar");
      } else if (selectedLoc === "Sri Lanka") {
        matchesLoc = locLower.includes("sri lanka") || locLower.includes("lanka");
      } else if (selectedLoc === "China") {
        matchesLoc = locLower.includes("china");
      } else if (selectedLoc === "Telangana") {
        matchesLoc = locLower.includes("telangana");
      } else if (selectedLoc === "Karnataka") {
        matchesLoc = locLower.includes("karnataka");
      } else if (selectedLoc === "Andhra Pradesh") {
        matchesLoc = locLower.includes("andhra") || locLower.includes("vijaywada");
      }

      return matchesSearch && matchesLoc;
    });
  }, [searchQuery, selectedLoc]);

  // Math metrics
  const totalCapacity = projects.reduce((sum, p) => sum + p.capacity, 0);
  const largestPlant = Math.max(...projects.map((p) => p.capacity));
  const avgPlant = Math.round(totalCapacity / projects.length);

  return (
    <div className="bg-background min-h-screen">
      {/* Banner */}
      <section className="relative py-20 bg-gradient-brand text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-white">
            <rect x="0" y="0" width="100" height="100" fill="none" />
            <line x1="0" y1="30" x2="100" y2="70" stroke="currentColor" strokeWidth="2" />
            <line x1="0" y1="70" x2="100" y2="30" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <div className="container mx-auto px-6 relative text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] bg-white/20 text-white/95 px-4 py-1.5 rounded-full inline-block mb-4 backdrop-blur-md">
            Reference Projects & Clients
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Industrial Supplies & Plant Sites
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Over 20 premium plant projects successfully installed across textile processing, dyeing, woven, and chemical industries globally.
          </p>
        </div>
      </section>

      {/* Real-time stats strip */}
      <section className="py-8 bg-gradient-soft border-b border-border/60">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "20+", label: "Active Project Sites" },
              { val: `${totalCapacity.toLocaleString()} m³`, label: "Total Capacity" },
              { val: `${largestPlant.toLocaleString()} m³`, label: "Largest Installation" },
              { val: `${avgPlant.toLocaleString()} m³`, label: "Average Plant Output" },
            ].map((stat, idx) => (
              <div key={idx} className="border-r border-border/80 last:border-r-0">
                <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.val}</div>
                <div className="text-[10px] uppercase font-semibold text-muted-foreground tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Controls & Search */}
      <section className="py-12 container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-10 bg-card border border-border p-4 rounded-2xl shadow-soft">
          {/* Search bar */}
          <div className="relative flex-grow max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by company name, loc or industry..."
              className="pl-10 rounded-xl bg-background/50 h-11 border-border focus:ring-primary"
            />
          </div>

          {/* Location Filters */}
          <div className="flex items-center gap-2 overflow-x-auto py-1 shrink-0">
            <SlidersHorizontal className="w-4 h-4 text-muted-foreground shrink-0 hidden sm:block" />
            {locations.map((loc) => (
              <button
                key={loc}
                onClick={() => setSelectedLoc(loc)}
                className={`text-xs font-semibold py-2 px-3 rounded-full border transition-smooth whitespace-nowrap ${selectedLoc === loc
                    ? "bg-primary text-white border-primary shadow-soft"
                    : "bg-background text-muted-foreground border-border hover:bg-muted"
                  }`}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard Grid */}
        <AnimatePresence mode="popLayout">
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 bg-muted/20 border border-dashed border-border rounded-2xl"
            >
              <h3 className="text-lg font-bold text-foreground mb-1">No reference plants found</h3>
              <p className="text-xs text-muted-foreground">Try clearing your filters or refining your query.</p>
            </motion.div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((p, index) => (
                <motion.div
                  key={p.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-card border border-border/80 rounded-2xl p-6 shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-brand flex items-center justify-center shrink-0 shadow-soft group-hover:scale-105 transition-smooth">
                        <Building className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] uppercase font-bold text-accent tracking-wider">
                          ETP Plant Capacity
                        </span>
                        <div className="text-lg font-bold text-primary leading-tight mt-0.5">
                          {p.capacity.toLocaleString()} m³
                        </div>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-smooth line-clamp-1">
                      {p.name}
                    </h3>
                    <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide mt-1.5">
                      {p.industry}
                    </p>

                    {/* Highlights tags */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {p.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="text-[9px] font-semibold px-2 py-0.5 bg-gradient-soft text-foreground border border-border/50 rounded-full flex items-center gap-1 shrink-0"
                        >
                          <Check className="w-2.5 h-2.5 text-primary" /> {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 border-t border-border/40 pt-4 mt-5 text-xs text-muted-foreground bg-muted/10 -mx-6 -mb-6 p-6">
                    <MapPin className="w-4 h-4 text-accent shrink-0" />
                    <span className="line-clamp-1">{p.location}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Engineering Design Note */}
      <section className="py-16 bg-gradient-soft border-t border-border/50 text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Absolute Wastewater Discharge Compliance
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            All plant sites represented are engineered with 100% compliance relative to local State Pollution Control Boards (PCB), delivering sustainable, worry-free manufacturing capabilities for clients.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Industries;
