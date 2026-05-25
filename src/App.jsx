import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./layouts/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Technologies from "./pages/Technologies.jsx";
import ProcessFlow from "./pages/ProcessFlow.jsx";
import CostAnalysis from "./pages/CostAnalysis.jsx";
import Industries from "./pages/Industries.jsx";
import DepartmentSelection from "./pages/DepartmentSelection.jsx";
import InternshipForm from "./pages/InternshipForm.jsx";
// import SmartFeatures from "./pages/SmartFeatures.jsx";
import Contact from "./pages/Contact.jsx";
import Internship from "./pages/Internship.jsx";
import NotFound from "./pages/NotFound.jsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/process" element={<ProcessFlow />} />
            <Route path="/cost" element={<CostAnalysis />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/internship/selection" element={<DepartmentSelection />} />
            <Route path="/internship/application" element={<InternshipForm />} />
            {/* <Route path="/features" element={<SmartFeatures />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/internship" element={<Internship />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

