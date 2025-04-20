
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import Circulation from "./pages/Circulation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/circulation" element={<Circulation />} />
            <Route path="/muslim-coins" element={<NotFound />} />
            <Route path="/christian-coins" element={<NotFound />} />
            <Route path="/imitations" element={<NotFound />} />
            <Route path="/other-coins" element={<NotFound />} />
            <Route path="/propaganda" element={<NotFound />} />
            <Route path="/interesting-facts" element={<NotFound />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
