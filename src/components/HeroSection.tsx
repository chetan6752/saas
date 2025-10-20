import { Button } from "./ui/button";
import { ArrowRight, Activity } from "lucide-react";
import { motion } from "motion/react";

interface HeroSectionProps {
  onDemoClick: () => void;
}

export function HeroSection({ onDemoClick }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-emerald-100/50 to-violet-50/30" />
      
      {/* Animated Gradient Orbs - Optimized */}
      <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-sky-400 to-cyan-300 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-emerald-400 to-green-300 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      {/* Animated Background Elements - Minimal for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${3}px`,
              height: `${3}px`,
              background: i % 2 === 0 
                ? 'linear-gradient(135deg, #38bdf8, #0ea5e9)' 
                : 'linear-gradient(135deg, #6ee7b7, #10b981)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              y: [0, -100],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-sky-300 mb-6 shadow-lg shadow-sky-200/50"
              animate={{
                boxShadow: [
                  "0 10px 20px -10px rgba(56, 189, 248, 0.3)",
                  "0 10px 30px -10px rgba(110, 231, 183, 0.5)",
                  "0 10px 20px -10px rgba(56, 189, 248, 0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Activity className="w-4 h-4 text-sky-500" />
              </motion.div>
              <span className="text-sm bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
                Live Health Intelligence
              </span>
            </motion.div>

            <h1 className="bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent mb-6">
              From Reaction to Preparation: Arogya Sentinel—Taking Mumbai's Health Pulse
            </h1>

            <p className="text-gray-600 mb-8 max-w-xl">
              We predict public health crises by leveraging overlooked data (Tweets, Chemist Sales), 
              giving hospitals 48 hours to prepare.
            </p>

            <Button onClick={onDemoClick} className="bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 text-white shadow-xl shadow-sky-500/30 group">
              Request an Enterprise Demo
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-200/50">
              {[
                { value: "48hrs", label: "Early Warning", delay: 0 },
                { value: "95%", label: "Accuracy Rate", delay: 0.1 },
                { value: "24/7", label: "Monitoring", delay: 0.2 },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + stat.delay, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200/50 hover:border-sky-300 transition-all cursor-pointer"
                >
                  <motion.div 
                    className="bg-gradient-to-r from-sky-600 via-emerald-500 to-violet-600 bg-clip-text text-transparent mb-1"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Animated Map Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl shadow-sky-500/10 p-8 border border-gray-100">
              {/* Mumbai Map Representation */}
              <div className="aspect-square relative bg-gradient-to-br from-sky-50 to-emerald-50 rounded-xl overflow-hidden">
                {/* Simulated Map with Data Points */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    {/* Central Alert Icon */}
                    <motion.circle
                      cx="200"
                      cy="200"
                      r="40"
                      fill="url(#gradient)"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    
                    {/* Data Point Signals */}
                    {[...Array(12)].map((_, i) => {
                      const angle = (i * 30 * Math.PI) / 180;
                      const radius = 120;
                      const x = 200 + radius * Math.cos(angle);
                      const y = 200 + radius * Math.sin(angle);
                      
                      return (
                        <g key={i}>
                          <motion.circle
                            cx={x}
                            cy={y}
                            r="4"
                            fill="#38bdf8"
                            animate={{
                              scale: [0.8, 1.3, 0.8],
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.15,
                            }}
                          />
                          <motion.line
                            x1={x}
                            y1={y}
                            x2="200"
                            y2="200"
                            stroke="#6ee7b7"
                            strokeWidth="1"
                            strokeOpacity="0.3"
                            animate={{
                              strokeOpacity: [0.1, 0.4, 0.1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.15,
                            }}
                          />
                        </g>
                      );
                    })}
                    
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#38bdf8" />
                        <stop offset="100%" stopColor="#6ee7b7" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Alert Badge */}
                <motion.div
                  className="absolute top-4 right-4 bg-white rounded-lg shadow-lg px-4 py-2 border border-sky-200"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="text-xs text-gray-500 mb-1">Live Alert</div>
                  <div className="text-sm text-sky-600">Mumbai Central</div>
                </motion.div>
              </div>

              {/* Data Sources */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center p-3 bg-sky-50 rounded-lg">
                  <div className="text-xs text-gray-500">Tweets</div>
                  <div className="text-sky-600">8.2K</div>
                </div>
                <div className="text-center p-3 bg-emerald-50 rounded-lg">
                  <div className="text-xs text-gray-500">Sales</div>
                  <div className="text-emerald-600">2.1K</div>
                </div>
                <div className="text-center p-3 bg-amber-50 rounded-lg">
                  <div className="text-xs text-gray-500">Air Quality</div>
                  <div className="text-amber-600">156 AQI</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
