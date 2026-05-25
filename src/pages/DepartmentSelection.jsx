import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { Activity, Cpu, Zap, Wrench } from "lucide-react";

const departments = [
  { id: "operator", name: "Operator", icon: Activity },
  { id: "electrical", name: "Electrical", icon: Zap },
  { id: "mechanical", name: "Mechanical", icon: Wrench },
  { id: "electronics", name: "Electronics & Instrumentation", icon: Cpu }
];

const DepartmentSelection = () => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState("");

  const handleContinue = () => {
    if (!selectedId) {
      setError("Please select a department.");
      return;
    }
    const dept = departments.find((d) => d.id === selectedId);
    navigate("/internship", { state: { selectedDepartment: dept.name } });
  };

  return (
    <Dialog open={true} onOpenChange={() => navigate("/internship")}>
      <DialogContent className="sm:max-w-[720px] overflow-hidden bg-card/95 backdrop-blur-xl border border-border/80 shadow-card rounded-2xl p-0">
        <DialogHeader className="p-6 pb-4 bg-gradient-soft border-b border-border/40">
          <DialogTitle className="text-2xl font-bold tracking-tight text-foreground">
            Internship — Department Selection
          </DialogTitle>
          <DialogDescription className="text-muted-foreground mt-1 text-sm">
            Choose one department to continue your application.
          </DialogDescription>
        </DialogHeader>

        <div className="p-6 pt-4">
          <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
            {departments.map((department) => {
              const Icon = department.icon;
              const isSelected = department.id === selectedId;
              return (
                <button
                  type="button"
                  key={department.id}
                  onClick={() => { setSelectedId(department.id); setError(""); }}
                  className={`w-full text-left rounded-3xl border p-5 shadow-soft transition-all duration-300 mb-2 flex items-center justify-between ${
                    isSelected ? "border-primary bg-primary/10 ring-1 ring-primary/20" : "border-border bg-card"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isSelected ? "bg-primary text-white" : "bg-primary/10 text-primary"}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-foreground">{department.name}</h2>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">SELECT</p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">{isSelected ? "Selected" : ""}</div>
                </button>
              );
            })}
          </div>

          {error && <div className="text-sm text-destructive mt-3">{error}</div>}

          <div className="pt-4 border-t border-border/40">
            <Button
              onClick={handleContinue}
              className="w-full rounded-full h-11 bg-primary hover:bg-primary/95 text-white shadow-glow transition-smooth font-semibold"
            >
              Continue
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DepartmentSelection;
