
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import Circulation from "./pages/Circulation";
import MuslimCoins from "./pages/MuslimCoins";
import ChristianCoins from "./pages/ChristianCoins";
import Imitations from "./pages/Imitations";
import OtherCoins from "./pages/OtherCoins";
import Propaganda from "./pages/Propaganda";
import InterestingFacts from "./pages/InterestingFacts";
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
            <Route path="/muslim-coins" element={<MuslimCoins />} />
            <Route path="/christian-coins" element={<ChristianCoins />} />
            <Route path="/imitations" element={<Imitations />} />
            <Route path="/other-coins" element={<OtherCoins />} />
            <Route path="/propaganda" element={<Propaganda />} />
            <Route path="/interesting-facts" element={<InterestingFacts />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
