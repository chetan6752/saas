import { Button } from "./ui/button";
import { Play, Shield, Lock } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { AlertDemoModal } from "./AlertDemoModal";

export function InteractiveDemoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-600 via-emerald-500 to-violet-600" />
        
        {/* Static Gradient Overlay - Optimized */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: "linear-gradient(45deg, rgba(56, 189, 248, 0.3), rgba(110, 231, 183, 0.3), rgba(167, 139, 250, 0.3))",
          }}
        />
        
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6">
                <Play className="w-4 h-4 text-white" />
                <span className="text-sm text-white">Live Demo Available</span>
              </div>

              <h2 className="text-white mb-6">
                Experience Arogya Sentinel in Action
              </h2>

              <p className="text-white/90 mb-10 max-w-2xl mx-auto text-lg">
                See how our system provides clear, actionable alerts that help healthcare 
                professionals prepare for health crises before they happen.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => setIsModalOpen(true)}
                  size="lg"
                  className="bg-white text-sky-600 hover:bg-gray-50 shadow-2xl shadow-black/30 group relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-sky-100 to-emerald-100 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  />
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform relative z-10" />
                  <span className="relative z-10">View a Live Arogya Sentinel Alert Demo</span>
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <div className="grid md:grid-cols-3 gap-6 mt-16 pt-12 border-t border-white/20">
                <div className="text-center">
                  <Shield className="w-8 h-8 text-white mx-auto mb-3 opacity-90" />
                  <div className="text-white mb-1">Enterprise Security</div>
                  <div className="text-sm text-white/70">Bank-level encryption</div>
                </div>
                <div className="text-center">
                  <Lock className="w-8 h-8 text-white mx-auto mb-3 opacity-90" />
                  <div className="text-white mb-1">Data Privacy</div>
                  <div className="text-sm text-white/70">HIPAA compliant</div>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-white/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white">24/7</span>
                  </div>
                  <div className="text-white mb-1">Always Monitoring</div>
                  <div className="text-sm text-white/70">Real-time alerts</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <AlertDemoModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
}
