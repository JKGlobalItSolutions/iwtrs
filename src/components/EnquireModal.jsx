import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { ShieldAlert, Send } from "lucide-react";

const EnquireModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const err = {};
    if (!formData.name.trim()) err.name = "Full Name is required";
    
    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim()) {
      err.phone = "Mobile Number is required";
    } else if (cleanPhone.length < 10) {
      err.phone = "Please enter a valid 10-digit mobile number";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      err.email = "Email Address is required";
    } else if (!emailRegex.test(formData.email)) {
      err.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) err.subject = "Subject is required";
    if (!formData.message.trim()) err.message = "Message is required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Enquiry submitted successfully!", {
        description: "We will get back to you soon.",
        duration: 4000,
      });
      resetForm();
      onClose();
    } else {
      toast.error("Please correct the errors in the form.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setErrors({});
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[480px] overflow-hidden bg-card/95 backdrop-blur-xl border border-border/80 shadow-card rounded-2xl p-0">
        <DialogHeader className="p-6 pb-4 bg-gradient-soft border-b border-border/40">
          <DialogTitle className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center shadow-soft">
              <Send className="w-4 h-4 text-white" />
            </div>
            Send us an Enquiry
          </DialogTitle>
          <DialogDescription className="text-muted-foreground mt-1 text-sm">
            Have a question? Get in touch with our training team.
          </DialogDescription>
        </DialogHeader>

        <motion.form
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="p-6 pt-4 space-y-4"
        >
          <div className="space-y-1.5">
            <Label htmlFor="enquire-name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Full Name
            </Label>
            <Input
              id="enquire-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={`rounded-xl h-11 border bg-background/50 focus:ring-primary ${
                errors.name ? "border-destructive focus:ring-destructive" : "border-border"
              }`}
            />
            {errors.name && (
              <span className="text-xs text-destructive flex items-center gap-1 mt-1">
                <ShieldAlert className="w-3.5 h-3.5" /> {errors.name}
              </span>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="enquire-email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Email Address
            </Label>
            <Input
              id="enquire-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className={`rounded-xl h-11 border bg-background/50 focus:ring-primary ${
                errors.email ? "border-destructive focus:ring-destructive" : "border-border"
              }`}
            />
            {errors.email && (
              <span className="text-xs text-destructive flex items-center gap-1 mt-1">
                <ShieldAlert className="w-3.5 h-3.5" /> {errors.email}
              </span>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="enquire-phone" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Mobile Number
            </Label>
            <Input
              id="enquire-phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your 10-digit mobile number"
              className={`rounded-xl h-11 border bg-background/50 focus:ring-primary ${
                errors.phone ? "border-destructive focus:ring-destructive" : "border-border"
              }`}
            />
            {errors.phone && (
              <span className="text-xs text-destructive flex items-center gap-1 mt-1">
                <ShieldAlert className="w-3.5 h-3.5" /> {errors.phone}
              </span>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="enquire-subject" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Subject
            </Label>
            <Input
              id="enquire-subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter subject of enquiry"
              className={`rounded-xl h-11 border bg-background/50 focus:ring-primary ${
                errors.subject ? "border-destructive focus:ring-destructive" : "border-border"
              }`}
            />
            {errors.subject && (
              <span className="text-xs text-destructive flex items-center gap-1 mt-1">
                <ShieldAlert className="w-3.5 h-3.5" /> {errors.subject}
              </span>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="enquire-message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Message
            </Label>
            <textarea
              id="enquire-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about your enquiry"
              rows="4"
              className={`w-full rounded-xl border bg-background/50 px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none transition ${
                errors.message ? "border-destructive focus:ring-destructive" : "border-border"
              }`}
            />
            {errors.message && (
              <span className="text-xs text-destructive flex items-center gap-1 mt-1">
                <ShieldAlert className="w-3.5 h-3.5" /> {errors.message}
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border/40">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              className="rounded-full h-11 border-border text-foreground bg-transparent hover:bg-muted transition-smooth"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="rounded-full h-11 bg-primary hover:bg-primary/95 text-white shadow-glow transition-smooth font-semibold flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" /> Send Enquiry
            </Button>
          </div>
        </motion.form>
      </DialogContent>
    </Dialog>
  );
};

export default EnquireModal;
