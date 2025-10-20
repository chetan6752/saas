import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Mail, Lock, User, Building2, UserPlus } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

interface SignUpModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSignUp: () => void;
  onSwitchToLogin: () => void;
}

export function SignUpModal({ open, onOpenChange, onSignUp, onSwitchToLogin }: SignUpModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignUp();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-sky-500/5 to-violet-500/5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          style={{ backgroundSize: "200% 200%" }}
        />

        <DialogHeader className="relative z-10">
          <DialogTitle className="flex items-center gap-2">
            <motion.div 
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500 flex items-center justify-center shadow-lg"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(110, 231, 183, 0)",
                  "0 0 0 8px rgba(110, 231, 183, 0.1)",
                  "0 0 0 0 rgba(110, 231, 183, 0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <UserPlus className="w-5 h-5 text-white" />
            </motion.div>
            <span>Create Your Account</span>
          </DialogTitle>
          <DialogDescription>
            Join leading healthcare institutions using Arogya Sentinel
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-4 relative z-10">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                id="name"
                type="text"
                placeholder="Dr. John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="pl-10"
                required
              />
            </div>
          </div>

          {/* Organization Field */}
          <div className="space-y-2">
            <Label htmlFor="organization">Organization</Label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                id="organization"
                type="text"
                placeholder="City Hospital"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                className="pl-10"
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="signup-email">Work Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                id="signup-email"
                type="email"
                placeholder="you@hospital.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="pl-10"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <Label htmlFor="signup-password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                id="signup-password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="pl-10"
                required
              />
            </div>
            <p className="text-xs text-gray-500">Minimum 8 characters</p>
          </div>

          {/* Terms */}
          <label className="flex items-start gap-2 text-sm text-gray-600">
            <input type="checkbox" className="mt-1 rounded border-gray-300" required />
            <span>
              I agree to the{" "}
              <a href="#" className="text-sky-600 hover:text-sky-700">Terms of Service</a>
              {" "}and{" "}
              <a href="#" className="text-sky-600 hover:text-sky-700">Privacy Policy</a>
            </span>
          </label>

          {/* Submit Button */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-600 hover:to-sky-600 text-white shadow-lg shadow-emerald-500/30 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-sky-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
              />
              <span className="relative z-10">Create Account</span>
            </Button>
          </motion.div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-2 text-gray-500">OR</span>
            </div>
          </div>

          {/* Switch to Login */}
          <div className="text-center text-sm">
            <span className="text-gray-600">Already have an account? </span>
            <button
              type="button"
              onClick={onSwitchToLogin}
              className="text-sky-600 hover:text-sky-700"
            >
              Login here
            </button>
          </div>
        </form>

        {/* Security Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 p-3 bg-emerald-50 rounded-lg border border-emerald-200"
        >
          <p className="text-xs text-gray-600 text-center">
            🔒 Enterprise-grade security • HIPAA compliant
          </p>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
