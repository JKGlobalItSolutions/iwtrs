import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Award } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import expBadge from "@/assets/experience-badge.png"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCareerOpen, setIsCareerOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Technologies", path: "/technologies" },
    { label: "Process Flow", path: "/process" },
    { label: "Cost Analysis", path: "/cost" },
    { label: "Industries", path: "/industries" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50 transition-smooth">
        <div className="container mx-auto px-4 xl:px-6 h-20 flex items-center justify-between">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <img src={logo} alt="IWTRS" className="h-16 w-auto object-contain" />
            <span className="font-display font-bold text-2xl tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent hidden sm:block">
              IWTRS
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5 text-sm font-medium text-muted-foreground">
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    "hover:text-primary transition-smooth py-1.5 relative px-1 white-space-nowrap",
                    isActive
                      ? "text-primary font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full"
                      : "text-muted-foreground"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* Career Dropdown */}
            <div
              className="relative py-4 group cursor-pointer"
              onMouseEnter={() => setIsCareerOpen(true)}
              onMouseLeave={() => setIsCareerOpen(false)}
            >
              <span
                className={cn(
                  "flex items-center gap-1 hover:text-primary transition-smooth",
                  location.pathname === "/internship" ? "text-primary font-bold" : "text-muted-foreground"
                )}
              >
                Career <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-smooth" />
              </span>

              {/* Dropdown Menu */}
              <div
                className={cn(
                  "absolute top-full right-0 w-48 mt-1 p-2 bg-card/95 backdrop-blur-xl border border-border/80 shadow-card rounded-xl transition-all duration-200 origin-top-right",
                  isCareerOpen
                    ? "opacity-100 scale-100 translate-y-0 visible"
                    : "opacity-0 scale-95 -translate-y-2 invisible"
                )}
              >
                <Link
                  to="/internship"
                  className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:text-primary hover:bg-gradient-soft transition-smooth"
                >
                  <Award className="w-4 h-4 text-accent" />
                  <span>Internship</span>
                </Link>
              </div>
            </div>
          </nav>

          {/* Right Actions: Experience Badge & Button */}
          <div className="hidden xl:flex items-center gap-6 shrink-0">
            {/* Experience Badge - லோகோ லைட்டாக பெரிதாக்கப்பட்டுள்ளது (h-14 இலிருந்து h-16 ஆக மாற்றப்பட்டுள்ளது) */}
            <div className="flex items-center justify-center min-w-[120px] transition-smooth hover:scale-105">
              <img 
                src={expBadge} 
                alt="40 Years of Experience" 
                className="h-16 w-auto object-contain mix-blend-multiply" 
              />
            </div>

            <Button
              asChild
              size="md"
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 h-10 text-sm font-semibold shadow-soft navbar-cta"
            >
              <Link to="/contact">Get in touch</Link>
            </Button>
          </div>

          {/* Hamburger Menu Icon for Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 text-muted-foreground hover:text-foreground focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={cn(
            "fixed inset-x-0 top-20 bottom-0 z-40 bg-background/95 backdrop-blur-xl border-t border-border xl:hidden transition-all duration-300 ease-in-out overflow-y-auto px-6 py-6",
            isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
          )}
        >
          <div className="flex flex-col gap-5 text-base font-semibold">
            
            {/* Mobile View Badge - இங்கும் லோகோ லைட்டாக பெரிதாக்கப்பட்டுள்ளது (h-16 இலிருந்து h-20 ஆக மாற்றப்பட்டுள்ளது) */}
            <div className="w-full flex justify-center py-2">
              <img 
                src={expBadge} 
                alt="40 Years of Experience" 
                className="h-20 w-auto object-contain mix-blend-multiply" 
              />
            </div>

            {links.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "hover:text-primary transition-smooth py-1.5 border-b border-border/50",
                  location.pathname === link.path ? "text-primary font-bold" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Career Section */}
            <div className="space-y-2">
              <span className="text-muted-foreground text-xs font-bold uppercase tracking-wider">Career</span>
              <div className="pl-4">
                <Link
                  to="/internship"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 w-full text-left py-2 text-foreground hover:text-primary transition-smooth font-semibold border-b border-border/30"
                >
                  <Award className="w-4 h-4 text-accent" />
                  <span>Internship Program</span>
                </Link>
              </div>
            </div>

            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white rounded-full py-6 mt-2 shadow-soft text-base font-semibold"
            >
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Get in touch
              </Link>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;