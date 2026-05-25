import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Droplets, Menu, X, ChevronDown, Award } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

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
    // { label: "Smart Features", path: "/features" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50 transition-smooth">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logo} alt="IWTRS" className="h-10 w-auto" />
            {/* <div className="w-9 h-9 rounded-lg bg-gradient-brand flex items-center justify-center shadow-soft group-hover:scale-105 transition-smooth">
              <Droplets className="w-5 h-5 text-white" />
            </div> */}
            <span className="font-display font-bold text-lg tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              IWTRS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    "hover:text-primary transition-smooth py-1.5 relative px-1",
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

          {/* Right Action */}
          <div className="hidden xl:flex items-center gap-4">
            <Button
              asChild
              size="sm"
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-5 h-9 text-sm font-semibold shadow-soft"
            >
              <Link to="/contact">Get in touch</Link>
            </Button>
          </div>

          {/* Hamburger Menu Icon */}
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
            "fixed inset-x-0 top-16 bottom-0 z-40 bg-background/95 backdrop-blur-xl border-t border-border xl:hidden transition-all duration-300 ease-in-out overflow-y-auto px-6 py-8",
            isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
          )}
        >
          <div className="flex flex-col gap-6 text-base font-semibold">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "hover:text-primary transition-smooth py-1 border-b border-border/50",
                  location.pathname === link.path ? "text-primary font-bold" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Career Section */}
            <div className="space-y-3">
              <span className="text-muted-foreground text-sm font-bold uppercase tracking-wider">Career</span>
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
              className="bg-primary hover:bg-primary/90 text-white rounded-full py-6 mt-4 shadow-soft text-base font-semibold"
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
