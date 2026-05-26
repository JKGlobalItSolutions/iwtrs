import { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin, CheckCircle, ShieldAlert, Send, Clock } from "lucide-react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const err = {};
    if (!name.trim()) err.name = "Full Name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      err.email = "Email Address is required";
    } else if (!emailRegex.test(email)) {
      err.email = "Please enter a valid email address";
    }

    const phoneClean = phone.replace(/\D/g, "");
    if (!phone.trim()) {
      err.phone = "Phone Number is required";
    } else if (phoneClean.length < 10) {
      err.phone = "Please enter a valid 10-digit phone number";
    }

    if (!message.trim()) err.message = "Message content is required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);

      // Simulate API submission
      setTimeout(() => {
        setIsSubmitting(false);
        toast.success("Inquiry Sent Successfully!", {
          description: "Thank you for contacting IWTRS. Our process design engineers will reach out to you within 24 hours.",
          duration: 5000
        });

        // Reset fields
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setErrors({});
      }, 1500);
    } else {
      toast.error("Please correct the form errors before submitting.");
    }
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Banner */}
      <section className="relative py-20 bg-gradient-brand text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-white">
            <line x1="10" y1="10" x2="90" y2="90" stroke="currentColor" strokeWidth="1" />
            <line x1="90" y1="10" x2="10" y2="90" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
        <div className="container mx-auto px-6 relative text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] bg-white/20 text-white/95 px-4 py-1.5 rounded-full inline-block mb-4 backdrop-blur-md">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Contact Our Process Engineers
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Ready to optimize your wastewater treatment or upgrade to an advanced Zero Liquid Discharge system? Let's connect.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Info */}
      <section className="py-16 md:py-24 container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-5 gap-12 items-stretch">

          {/* Contact details - Left (2 columns) */}
          <div className="lg:col-span-2 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Corporate Headquarters
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Innovation Water Treatments & Recovery Services
              </h2>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Connect with our Tiruppur-based engineering core. Whether you need a free process water audit, chemical sizing calculations, or ongoing O&M contract rates, our specialists are available.
              </p>

              <div className="space-y-4 pt-4 border-t border-border/60">
                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-gradient-soft border border-border/80 flex items-center justify-center shrink-0 shadow-soft">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Physical Headquarters</h4>
                    <p className="text-xs text-muted-foreground leading-normal mt-1">
                      DNo. 33, KVB Building, 1st First Floor,<br />
                      Avinashi Main Road, Gandhi Nagar (PO),<br />
                      Tiruppur - 641603, Tamil Nadu, India.
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-gradient-soft border border-border/80 flex items-center justify-center shrink-0 shadow-soft">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Direct Process Email</h4>
                    <a href="mailto:iwtrsindia@gmail.com" className="text-xs text-primary font-semibold hover:underline block mt-1">
                      iwtrsindia@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-gradient-soft border border-border/80 flex items-center justify-center shrink-0 shadow-soft">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Industrial Telephony</h4>
                    <a href="tel:+0421-3567417" className="text-xs text-primary font-semibold hover:underline block mt-1">
                      +0421-3567417
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick response stats */}
            <div className="p-5 bg-gradient-soft border border-border/60 rounded-2xl">
              <div className="flex gap-3 items-center">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground text-xs uppercase tracking-wide">
                    Rapid Response Commitment
                  </h4>
                  <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                    All business hour inquiries are assigned directly to our process engineering desks for response within 18–24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry form - Right (3 columns) */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card border border-border shadow-card p-6 md:p-8 rounded-3xl"
            >
              <h3 className="text-xl font-bold text-foreground mb-1">
                Industrial Inquiry Form
              </h3>
              <p className="text-xs text-muted-foreground mb-6">
                Tell us about your factory's current wastewater parameters or plant load goals.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className={`rounded-xl h-11 border bg-background/50 focus:ring-primary ${errors.name ? "border-destructive focus:ring-destructive" : "border-border"
                      }`}
                  />
                  {errors.name && (
                    <span className="text-xs text-destructive flex items-center gap-1 mt-1">
                      <ShieldAlert className="w-3.5 h-3.5 shrink-0" /> {errors.name}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className={`rounded-xl h-11 border bg-background/50 focus:ring-primary ${errors.email ? "border-destructive focus:ring-destructive" : "border-border"
                        }`}
                    />
                    {errors.email && (
                      <span className="text-xs text-destructive flex items-center gap-1 mt-1">
                        <ShieldAlert className="w-3.5 h-3.5 shrink-0" /> {errors.email}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter mobile number"
                      className={`rounded-xl h-11 border bg-background/50 focus:ring-primary ${errors.phone ? "border-destructive focus:ring-destructive" : "border-border"
                        }`}
                    />
                    {errors.phone && (
                      <span className="text-xs text-destructive flex items-center gap-1 mt-1">
                        <ShieldAlert className="w-3.5 h-3.5 shrink-0" /> {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Message / Process Details
                  </Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your ETP capacity, COD/TDS levels, or special resin scaling issues..."
                    rows={5}
                    className={`rounded-xl border bg-background/50 focus:ring-primary ${errors.message ? "border-destructive focus:ring-destructive" : "border-border"
                      }`}
                  />
                  {errors.message && (
                    <span className="text-xs text-destructive flex items-center gap-1 mt-1">
                      <ShieldAlert className="w-3.5 h-3.5 shrink-0" /> {errors.message}
                    </span>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full h-11 bg-primary hover:bg-primary/95 text-white shadow-glow transition-smooth font-semibold flex items-center justify-center gap-2 mt-4"
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Send Engineering Inquiry
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gradient-soft border-t border-border/50 text-center text-xs text-muted-foreground font-semibold uppercase tracking-widest flex flex-wrap justify-center gap-6">
        <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-primary" /> ISO Certified Standards</span>
        <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-primary" /> Indian PCB Compliant</span>
        <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-primary" /> Global ZLD Expertise</span>
      </section>
    </div>
  );
};

export default Contact;
