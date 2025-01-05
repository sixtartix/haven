import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { BoostCalculator } from "@/features/calculator";
import { ReviewsSection } from "@/components/reviews/ReviewsSection";
import { FAQ } from "@/pages/FAQ";
import { About } from "@/pages/About";
import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";
import { LoadingScreen } from "@/components/loading/LoadingScreen";
import { useInitialLoading } from "@/hooks/useInitialLoading";
import { AuthCallback } from './pages/AuthCallback';

function ScrollToCalculator() {
  const location = useLocation();

  useEffect(() => {
    if (location.search === '?scrollTo=calculator') {
      document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return null;
}

function Home() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <div id="calculator" className="py-16">
        <BoostCalculator />
      </div>
      <ReviewsSection />
    </>
  );
}

export default function App() {
  const isLoading = useInitialLoading();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-[#0A0B14]">
        <ScrollToCalculator />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
        </Routes>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}