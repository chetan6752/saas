import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { SolutionSection } from "./components/SolutionSection";
import { TrustedInstitutions } from "./components/TrustedInstitutions";
import { TrustSection } from "./components/TrustSection";
import { InteractiveDemoSection } from "./components/InteractiveDemoSection";
import { RoadmapSection } from "./components/RoadmapSection";
import { Footer } from "./components/Footer";
import { LoginModal } from "./components/LoginModal";
import { SignUpModal } from "./components/SignUpModal";
import { Dashboard } from "./components/Dashboard";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleLogin = () => {
    setShowLoginModal(false);
    setIsLoggedIn(true);
    toast.success("Welcome back! Redirecting to dashboard...", {
      description: "You've successfully logged in to Arogya Sentinel",
    });
  };

  const handleSignUp = () => {
    setShowSignUpModal(false);
    setIsLoggedIn(true);
    toast.success("Account created successfully!", {
      description: "Welcome to Arogya Sentinel. Redirecting to your dashboard...",
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast.info("Logged out successfully", {
      description: "See you soon!",
    });
  };

  const handleDemoRequest = () => {
    toast.success("Demo request received!", {
      description: "Our team will contact you within 24 hours.",
    });
  };

  return (
    <AnimatePresence mode="wait">
      {isLoggedIn ? (
        <motion.div
          key="dashboard"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <Dashboard onLogout={handleLogout} />
          <Toaster position="top-right" />
        </motion.div>
      ) : (
        <motion.div
          key="landing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen bg-white"
        >
      <Header 
        onLoginClick={() => setShowLoginModal(true)}
        onSignUpClick={() => setShowSignUpModal(true)}
      />
      <HeroSection onDemoClick={handleDemoRequest} />
      <TrustedInstitutions />
      <SolutionSection />
      <TrustSection />
      <InteractiveDemoSection />
      <RoadmapSection />
      <Footer />
      
      <LoginModal
        open={showLoginModal}
        onOpenChange={setShowLoginModal}
        onLogin={handleLogin}
        onSwitchToSignUp={() => {
          setShowLoginModal(false);
          setShowSignUpModal(true);
        }}
      />
      
      <SignUpModal
        open={showSignUpModal}
        onOpenChange={setShowSignUpModal}
        onSignUp={handleSignUp}
        onSwitchToLogin={() => {
          setShowSignUpModal(false);
          setShowLoginModal(true);
        }}
      />
      
      <Toaster position="top-right" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
