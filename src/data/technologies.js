import { FlaskConical, ShieldCheck, Filter, Droplets, Waves, Activity, Cpu, Zap, Recycle } from "lucide-react";

export const technologies = [
  {
    id: "biological-system",
    icon: FlaskConical,
    title: "Biological System",
    description: "Energy-efficient biological oxidation reduces COD/BOD with minimal sludge output.",
    details: "Our specialists are continuously looking for lowest operating cost solutions. The installation of flow makers into oxidation tanks renders it possible to achieve great energy savings, in comparison to the energy consumption of the respective traditional solutions.",
    benefits: [
      "Great energy savings via optimized flow makers",
      "Reduces COD/BOD effectively",
      "Minimal biological sludge production",
      "Stable process and lower mechanical stress"
    ],
    efficiency: "Pre-treatment purification",
    usage: "Knitwear process, textile ETPs, municipal sewage plants"
  },
  {
    id: "pva-treatment",
    icon: ShieldCheck,
    title: "PVA Treatment System",
    description: "Removes polyvinyl alcohol sizing agents to protect downstream RO membranes and extend their life.",
    details: "IWT&RS has set up a system capable to treat the PVA used in the industrial process. This system can be used in the Zero Liquid discharge waste water treatment, and it can also prevent problems to the RO membranes, making them to last up to 4 years.",
    benefits: [
      "Extends RO membrane life up to 4 years",
      "Prevents membrane scaling and bio-fouling",
      "Highly customized treatment for desizing effluents",
      "Critical for textile-integrated ZLD loops"
    ],
    efficiency: "Sizing agent recovery and membrane protection",
    usage: "Woven fabric units, desizing operations, composite mills"
  },
  {
    id: "high-load-biofilter",
    icon: Zap,
    title: "High Load Biofilter",
    description: "Reduces space requirements for biological plants and handles anaerobic pre-treated streams.",
    details: "This technology is able to greatly reduce the occupied spaces for biological plant. It is also used for the treatment of PVA after anaerobic.",
    benefits: [
      "Drastically reduces plant footprint",
      "Excellent treatment of PVA streams after anaerobic process",
      "Robust biological performance under high hydraulic loads",
      "Lower civil construction costs"
    ],
    efficiency: "Footprint reduction and high-load organics removal",
    usage: "Compact industrial ETPs, highly concentrated industrial wastewater"
  },
  {
    id: "mbr",
    icon: Filter,
    title: "MBR - Membrane Bioreactor",
    description: "Combines biological digestion with membrane separation for exceptionally low SDI permeate.",
    details: "The treatment with membranes allows to separate colloids present up to 0.3 microns in diameter and to recover part of the filtered water. At the same time the reduction of the 'bio-fouling' allows to lengthen the useful life of the membranes. The SDI value obtained with MBR is less than 2.5. The system allows you to eliminate the classic decanter, the quartz filter and the UF greatly using the areas occupied, the costs of machinery and energy costs accordingly.",
    benefits: [
      "Eliminates classic clarifiers/decanters, quartz sand filters, and ultrafiltration stages",
      "SDI (Silt Density Index) less than 2.5",
      "Reduces physical space footprint",
      "Extends RO membrane lifespan and lowers overall operational and machinery costs"
    ],
    efficiency: "Direct water recovery and ultra-low turbidity pre-filtration",
    usage: "Textile processing, garment washing, high-COD manufacturing plants"
  },
  {
    id: "ultrafiltration",
    icon: Droplets,
    title: "Ultrafiltration",
    description: "Advanced membrane separation removes bacteria, suspended solids, and viruses.",
    details: "Treatment with ultrafiltration membranes can separate the colloids present to 0.3 microns in diameter, including bacteria and viruses. In some cases, it is possible to recover the ultrafiltrate water for washing, rinsing, cooling, etc. The reduction of 'bio-fouling' allow energy saving and extending the useful life of membranes up to 4 years, reducing significantly the cost of spare modules.",
    benefits: [
      "Separates colloids, viruses, and bacteria down to 0.3 microns",
      "Enables energy savings and extends RO membrane life up to 4 years",
      "Produces clear filtrate suitable for immediate rinse/cooling recycle",
      "Lowers modular replacement costs through optimized anti-fouling"
    ],
    efficiency: "Pathogen and suspended solid removal",
    usage: "Cooling tower make-up, industrial rinse water recovery, pre-RO polishing"
  },
  {
    id: "softener-degaser",
    icon: Activity,
    title: "Softener and Degaser",
    description: "Reduces water hardness and removes dissolved gases to prevent scale and corrosion.",
    details: "The system of automatic Water softening for cooling towers, boiler water, drinking water, well water treatment for industrial use. The inorganic 'scaling' membranes of R.O. in the process of '0' discharge is used to eliminate the hardness and reduce inorganic scaling. Considering the high salinity in this process special resins are used to work properly in these conditions.",
    benefits: [
      "Eliminates hardness ions preventing inorganic scaling",
      "Custom high-salinity resins engineered for high TDS environments",
      "Reduces RO membrane fouling and corrosion",
      "Fully automated softening and degasification cycles"
    ],
    efficiency: "Hardness removal and corrosion prevention",
    usage: "Boiler feed, cooling water make-up, RO pretreatment in ZLD systems"
  },
  {
    id: "reverse-osmosis",
    icon: Waves,
    title: "Reverse Osmosis (RO)",
    description: "Multi-stage RO systems optimized for maximum freshwater recovery and salt rejection.",
    details: "Multi-stage high-pressure membrane systems engineered for maximum recovery (up to 94–96% across trains) and stable salt rejection. Utilizes premium anti-fouling spiral-wound modules and energy-recovery turbines.",
    benefits: [
      "Up to 94–96% clean water recovery across membrane trains",
      "Extremely stable salt (TDS) and organic dye rejection",
      "Optimized operating pressures and pump scheduling",
      "Saves massive raw water expenses"
    ],
    efficiency: "94–96% Water Recovery",
    usage: "Textile dyeing bath recovery, chemical plants, industrial ETPs"
  },
  {
    id: "nanofiltration",
    icon: Cpu,
    title: "Nanofiltration",
    description: "Selective membrane filtration separating color and divalent ions from monovalent brine.",
    details: "Advanced nanofiltration allows selective passage of monovalent salts (like sodium chloride) while retaining divalent ions, color molecules, and complex organic compounds. Perfect for direct recovery of textile dye baths.",
    benefits: [
      "Enables direct reuse of brine/salt solution in dyeing bath",
      "Lower operating pressures compared to standard high-pressure RO",
      "Excellent removal of organic dyes and TOC",
      "Reduces salt disposal costs in ZLD"
    ],
    efficiency: "Selective brine recovery & dye separation",
    usage: "Brine concentration, salt-bath recycling in dyeing units, color removal"
  },
  {
    id: "crystallization-mee",
    icon: Recycle,
    title: "Crystallization & MEE",
    description: "Mechanical crystallization and Multi-Effect Evaporators for final ZLD solid recovery.",
    details: "If it is required to achieve the maximum limit of dewatering of the final concentrated residue, it is possible to install a system of forced mechanical crystallization to reduce the final sludge volume to be disposed in landfill.",
    benefits: [
      "Achieves absolute 100% Zero Liquid Discharge (ZLD)",
      "Reduces final sludge volume to solid salts",
      "Forced circulation design minimizes heat-exchanger scaling",
      "Maximizes clean condensate water recovery"
    ],
    efficiency: "Complete ZLD Compliance & Salt Recovery",
    usage: "Final stage of ETPs, zero-discharge compliance plants, salt drying"
  }
];
