import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import InternshipForm from "./InternshipForm.jsx";
import { X } from "lucide-react";
import operatorImg from "../assets/operator.jpeg";
import electricalImg from "../assets/electrical.jpeg";
import mechanicalImg from "../assets/mechanical.jpeg";
import instrumentationImg from "../assets/instrumentation.jpeg";

const departments = [
  { id: "operator", name: "Operator", image: operatorImg, description: "Hands-on operational tasks and plant assistance." },
  { id: "electrical", name: "Electrical", image: electricalImg, description: "Electrical systems, maintenance and troubleshooting." },
  { id: "mechanical", name: "Mechanical", image: mechanicalImg, description: "Mechanical systems, assembly and maintenance." },
  { id: "eandi", name: "Electronics & Instrumentation", image: instrumentationImg, description: "Instrumentation, controls and electronic systems." },
];

const Internship = () => {
  const navigate = useNavigate();
  const [intro, setIntro] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});
  const [showDepartments, setShowDepartments] = useState(false);
  const [activeDepartment, setActiveDepartment] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleIntroChange = (field, value) => {
    setIntro((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateIntro = () => {
    const nextErrors = {};
    if (!intro.name.trim()) nextErrors.name = "Name is required";
    if (!intro.email.trim()) nextErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(intro.email)) nextErrors.email = "Enter a valid email";
    if (!intro.phone.trim()) nextErrors.phone = "Phone Number is required";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleCardClick = (department) => {
    // navigate to application page and pass department
    navigate("/internship/application", { state: { selectedDepartment: department.name } });
  };

  const openFormModal = (department) => {
    setActiveDepartment(department.name);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setActiveDepartment(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="container mx-auto px-6 py-14">
        <div className="mx-auto max-w-4xl text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-600">Internship</p>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold">Start your internship journey</h1>
          <p className="mt-3 text-sm text-slate-500 max-w-2xl mx-auto">Please provide basic details to continue to department selection.</p>
        </div>

        <div className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {departments.map((item) => {
              return (
                <div key={item.id} className="rounded-2xl border border-border/80 bg-white p-6 shadow-soft transition-transform hover:shadow-card hover:-translate-y-1">
                  <div className="mb-6">
                    <img src={item.image} alt={item.name} className="department-image" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.name}</h3>
                  <p className="text-sm text-slate-500 mb-4">{item.description}</p>
                  <Button
                    type="button"
                    onClick={() => handleCardClick(item)}
                    className="w-full rounded-full bg-sky-600 px-4 py-3 text-sm font-semibold text-white hover:bg-sky-700"
                  >
                    I AM INTERESTED
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Intro modal: shown on first load to capture name/email/phone before departments */}
      <Dialog open={!showDepartments} onOpenChange={(open) => {
        if (!open) setShowDepartments(true);
      }}>
        <DialogContent className="max-w-md overflow-hidden bg-white rounded-2xl border border-border/80 shadow-card p-0">
          <DialogHeader className="p-6 pb-4">
            <DialogTitle className="text-xl font-bold">Welcome — please share basic details</DialogTitle>
            <DialogDescription className="text-sm text-slate-500 mt-1">We need a few details before you can view the departments.</DialogDescription>
          </DialogHeader>
          <div className="p-6">
            <div className="space-y-4">
              <div>
                <Label className="text-xs">Name</Label>
                <Input value={intro.name} onChange={(e) => handleIntroChange("name", e.target.value)} placeholder="Your full name" className="mt-2" />
                {errors.name && <p className="mt-2 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <Label className="text-xs">Email</Label>
                <Input value={intro.email} onChange={(e) => handleIntroChange("email", e.target.value)} placeholder="you@example.com" className="mt-2" />
                {errors.email && <p className="mt-2 text-xs text-destructive">{errors.email}</p>}
              </div>
              <div>
                <Label className="text-xs">Phone Number</Label>
                <Input value={intro.phone} onChange={(e) => handleIntroChange("phone", e.target.value)} placeholder="Enter phone number" className="mt-2" />
                {errors.phone && <p className="mt-2 text-xs text-destructive">{errors.phone}</p>}
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <Button variant="outline" onClick={() => setShowDepartments(true)} className="rounded-full">Cancel</Button>
              <Button onClick={() => { if (validateIntro()) setShowDepartments(true); }} className="rounded-full bg-sky-600">Submit</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isFormOpen} onOpenChange={(open) => {
        if (!open) {
          closeForm();
        } else {
          setIsFormOpen(true);
        }
      }}>
        <DialogContent className="max-w-5xl overflow-hidden bg-white rounded-3xl border border-border/80 shadow-card p-0">
          <DialogHeader className="flex items-start justify-between gap-4 p-6 pb-4 border-b border-border/80">
            <div>
              <DialogTitle className="text-2xl font-bold">Apply for {activeDepartment}</DialogTitle>
              <DialogDescription className="text-sm text-slate-500 mt-2">
                Complete your internship application in the popup and submit it when ready.
              </DialogDescription>
            </div>
            <DialogClose asChild>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-slate-100 text-slate-600 transition hover:bg-slate-200"
              >
                <X className="h-5 w-5" />
              </button>
            </DialogClose>
          </DialogHeader>
          <div className="p-6">
            <InternshipForm selectedDepartment={activeDepartment} onClose={closeForm} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Internship;
