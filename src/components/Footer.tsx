import { Shield, Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Lock } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer id="contact" className="relative bg-gradient-to-br from-gray-900 via-sky-950 to-gray-900 text-white pt-20 pb-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.3) 0%, transparent 50%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <Shield className="w-8 h-8 text-sky-400" strokeWidth={1.5} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full animate-pulse" />
                </div>
              </div>
              <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
                Arogya Sentinel
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Predicting public health crises with AI-powered early warning intelligence. 
              Protecting Mumbai's health, one alert at a time.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Facebook, href: "#" },
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-gradient-to-br hover:from-sky-500 hover:to-emerald-500 flex items-center justify-center transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-sky-400 transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#solution" className="text-gray-400 hover:text-sky-400 transition-colors text-sm">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#impact" className="text-gray-400 hover:text-sky-400 transition-colors text-sm">
                  Client Impact
                </a>
              </li>
              <li>
                <a href="#roadmap" className="text-gray-400 hover:text-sky-400 transition-colors text-sm">
                  Product Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Security */}
          <div>
            <h3 className="text-white mb-4">Legal & Security</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors text-sm flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors text-sm">
                  Data Protection
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors text-sm">
                  HIPAA Compliance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-400">
                  <div>Arogya Sentinel Headquarters</div>
                  <div>Bandra Kurla Complex</div>
                  <div>Mumbai, Maharashtra 400051</div>
                  <div>India</div>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <a href="tel:+912266778899" className="text-gray-400 hover:text-sky-400 transition-colors">
                  +91 22 6677 8899
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <a href="mailto:info@arogyasentinel.in" className="text-gray-400 hover:text-sky-400 transition-colors">
                  info@arogyasentinel.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Arogya Sentinel. All rights reserved. Protecting public health with AI intelligence.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Lock className="w-4 h-4 text-emerald-400" />
              <span className="text-gray-400">
                Enterprise-grade security • Bank-level encryption
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
