import { Droplets, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8 border-t border-border/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-brand flex items-center justify-center">
                <img src={logo} alt="IWTRS" className="h-10 w-auto" />
              </div>
              <span className="font-display font-bold text-lg text-white">IWTRS</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed max-w-md mb-5">
              Innovation Water Treatments & Recovery Services Pvt Ltd — engineering high-efficiency wastewater
              recovery and Zero Liquid Discharge (ZLD) systems for demanding sustainable industries.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social link"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-gradient-brand flex items-center justify-center transition-smooth hover:scale-110"
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wide uppercase">Contact Details</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-glow shrink-0" />
                <span className="leading-snug">
                  D.No. 33, KVB Building, 1st Floor,<br />
                  Avinashi Main Road, Gandhi Nagar (PO),<br />
                  Tiruppur - 641603, Tamil Nadu, India.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-glow shrink-0" />
                <a href="mailto:iwtrsindia@gmail.com" className="hover:text-white transition-smooth">
                  iwtrsindia@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-glow shrink-0" />
                <a href="tel:+0421-3567417" className="hover:text-white transition-smooth">
                  +0421-3567417
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wide uppercase">Explore</h4>
            <ul className="space-y-2 text-sm text-background/70">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Technologies", path: "/technologies" },
                { label: "Process Flow", path: "/process" },
                { label: "Cost Analysis", path: "/cost" },
                { label: "Industries", path: "/industries" },
                { label: "Smart Features", path: "/features" },
                { label: "Contact", path: "/contact" }
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="hover:text-white transition-smooth text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-background/50">
          <p>© {new Date().getFullYear()} Innovation Water Treatments & Recovery Services Pvt Ltd. All rights reserved.</p>
          <p>Crafted for a cleaner industrial future.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
