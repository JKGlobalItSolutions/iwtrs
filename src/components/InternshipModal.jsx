import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
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
import { ShieldAlert } from "lucide-react";

const InternshipModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  // Registration Form Fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  
  // Validation Errors
  const [errors, setErrors] = useState({});

  const validate = () => {
    const err = {};
    if (!name.trim()) err.name = "Full Name is required";

    const cleanPhone = phone.replace(/\D/g, "");
    if (!phone.trim()) {
      err.phone = "Mobile Number is required";
    } else if (cleanPhone.length < 10) {
      err.phone = "Please enter a valid 10-digit mobile number";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      err.email = "Email Address is required";
    } else if (!emailRegex.test(email)) {
      err.email = "Please enter a valid email address";
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      toast.success(`Registration complete! Welcome, ${name}!`, {
        description: "Registration received.",
      });
      resetForm();
      onClose();
      navigate("/internship");
    } else {
      toast.error("Please correct the errors in the registration form.");
    }
  };

  const handleCancel = () => {
    // Close registration modal and open department selection (route)
    resetForm();
    onClose();
    navigate("/internship/selection");
  };

  const resetForm = () => {
    setName("");
    setPhone("");
    setEmail("");
    setErrors({});
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => { resetForm(); onClose(); }}>
      <DialogContent className="sm:max-w-[480px] overflow-hidden bg-card/95 backdrop-blur-xl border border-border/80 shadow-card rounded-2xl p-0">
        <DialogHeader className="p-6 pb-4 bg-gradient-soft border-b border-border/40">
          <DialogTitle className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center shadow-soft">
              <span className="text-white text-sm font-semibold">★</span>
            </div>
            Internship Registration
          </DialogTitle>
          <DialogDescription className="text-muted-foreground mt-1 text-sm">
            Register below to unlock our premium industrial training dashboard and water treatment plant tours.
          </DialogDescription>
        </DialogHeader>

        <div className="p-6 pt-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Full Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
              <Label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Mobile Number
              </Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
              <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border/40">
              <Button
                type="button"
                variant="outline"
                onClick={handleCancel}
                className="rounded-full h-11 border-accent text-accent bg-transparent hover:bg-accent-soft transition-smooth"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="rounded-full h-11 bg-primary hover:bg-primary/95 text-white shadow-glow transition-smooth font-semibold"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InternshipModal;
