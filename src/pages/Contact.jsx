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

      // WhatsApp-க்கான செய்தி வடிவமைப்பு
      const whatsappNumber = "917639204420"; // உங்கள் வாட்ஸ்அப் எண்
      const text = `*New Engineering Inquiry*%0A%0A` +
                   `Name: ${name}%0A` +
                   `Email: ${email}%0A` +
                   `Phone: ${phone}%0A` +
                   `Message: ${message}`;
      
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

      setTimeout(() => {
        setIsSubmitting(false);
        // வாடிக்கையாளருக்கு ஒரு சிறிய தகவல்
        toast.success("Redirecting to WhatsApp...", {
          description: "Your inquiry is being sent to our engineering team.",
          duration: 3000
        });

        // WhatsApp-க்கு தானாகவே கொண்டு செல்லும்
        window.open(whatsappUrl, '_blank');

        // படிவத்தை காலியாக்குதல்
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
            <path d="M0,80 Q25,60 50,80 T100,80 L100,100 L0,100 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="container mx-auto px-6 relative text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] bg-white/20 text-white/95 px-4 py-1.5 rounded-full inline-block mb-4 backdrop-blur-md">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Contact Our Process Engineers
          </h1>
          <p className="!text-white font-medium text-lg max-w-3xl mx-auto opacity-90 drop-shadow-sm leading-relaxed">
            Ready to optimize your wastewater treatment or upgrade to an advanced Zero Liquid Discharge system? Let's connect.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Info */}
      <section className="py-16 md:py-24 container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-5 gap-12 items-stretch">
          <div className="lg:col-span-2 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Corporate Headquarters
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Innovation Water Treatments & Recovery Services
              </h2>
              <div className="space-y-4 pt-4 border-t border-border/60">
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
          </div>

          <div className="lg:col-span-3">
            <motion.div className="bg-card border border-border shadow-card p-6 md:p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-foreground mb-1">Industrial Inquiry Form</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Full Name</Label>
                  <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" className="rounded-xl h-11" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="rounded-xl h-11" />
                  <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" className="rounded-xl h-11" />
                </div>
                <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message details..." rows={5} className="rounded-xl" />
                <Button type="submit" disabled={isSubmitting} className="w-full rounded-full h-11 bg-primary">
                  {isSubmitting ? "Sending..." : <><Send className="w-4 h-4 mr-2" /> Send Engineering Inquiry</>}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;