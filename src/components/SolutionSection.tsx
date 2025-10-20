import { Card } from "./ui/card";
import { Mic, Network, Bell, Twitter, ShoppingBag, Wind, TrendingUp, MapPin, ClipboardList } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    icon: Mic,
    title: "Listen for Clues",
    description: "We monitor real-time data from social media (Tweets), chemist sales patterns, pollution levels, and local health indicators to detect early warning signals.",
    features: [
      { icon: Twitter, text: "Social Media Monitoring" },
      { icon: ShoppingBag, text: "Chemist Sales Data" },
      { icon: Wind, text: "Air Quality Index" },
      { icon: TrendingUp, text: "Public Sentiment Analysis" }
    ],
    color: "sky",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    icon: Network,
    title: "Connect the Dots",
    description: "Our AI correlates diverse data points—from local train lines to festival gatherings and air quality—to identify patterns that predict health crises.",
    features: [
      { icon: Network, text: "Neural Network Analysis" },
      { icon: TrendingUp, text: "Pattern Recognition" },
      { icon: MapPin, text: "Multi-source Correlation" },
      { icon: TrendingUp, text: "Predictive Modeling" }
    ],
    color: "emerald",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: Bell,
    title: "Give a Simple Heads-Up",
    description: "Receive clear, actionable alerts with specific to-do lists, giving hospitals 48 hours to prepare staff, stock, and resources effectively.",
    features: [
      { icon: Bell, text: "48-Hour Advance Alerts" },
      { icon: ClipboardList, text: "Actionable Checklists" },
      { icon: TrendingUp, text: "Resource Planning" },
      { icon: Network, text: "Real-time Updates" }
    ],
    color: "violet",
    gradient: "from-violet-500 to-purple-600",
  },
];

export function SolutionSection() {
  return (
    <section id="solution" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/30 to-white" />
      <div className="absolute inset-0 opacity-30">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full"
            style={{
              background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(56, 189, 248, 0.1)' : 'rgba(110, 231, 183, 0.1)'} 0%, transparent 70%)`,
              left: `${20 + i * 20}%`,
              top: `${10 + i * 15}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-sky-100 to-emerald-100 rounded-full border border-sky-200 mb-4">
            <span className="text-sm bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
              How It Works
            </span>
          </div>
          <h2 className="bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            Three Steps to Prevent Health Crises
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our system transforms fragmented health data into actionable intelligence, 
            giving you the time you need to save lives.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-8 h-full hover:shadow-2xl transition-all duration-500 border-gray-100 relative overflow-hidden group bg-white">
                  {/* Animated background gradient on hover */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  <div className="relative">
                    {/* Floating step number background */}
                    <motion.div 
                      className="absolute -top-8 -left-8 text-8xl opacity-5 select-none"
                      initial={{ rotate: 0 }}
                      whileInView={{ rotate: 360 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    >
                      {index + 1}
                    </motion.div>

                    {/* Icon with animation */}
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 shadow-lg shadow-${step.color}-500/30 relative`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                      
                      {/* Pulsing ring effect */}
                      <motion.div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.gradient} opacity-50`}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                      />
                    </motion.div>

                    {/* Step indicator */}
                    <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${step.gradient} text-white text-xs mb-4`}>
                      Step {index + 1}
                    </div>

                    {/* Content */}
                    <h3 className="text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>

                    {/* Features with icons */}
                    <div className="space-y-3">
                      {step.features.map((feature, i) => {
                        const FeatureIcon = feature.icon;
                        return (
                          <motion.div 
                            key={i} 
                            className="flex items-center gap-3 group/item"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + i * 0.1 }}
                          >
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${step.gradient} bg-opacity-10 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform`}>
                              <FeatureIcon className={`w-4 h-4 text-${step.color}-600`} strokeWidth={2} />
                            </div>
                            <span className="text-sm text-gray-700 group-hover/item:text-gray-900 transition-colors">{feature.text}</span>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Connection line to next card (visible on larger screens) */}
                    {index < steps.length - 1 && (
                      <motion.div 
                        className="hidden md:block absolute top-16 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                      />
                    )}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-50 to-emerald-50 rounded-full border border-sky-200">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className={`w-8 h-8 rounded-full bg-gradient-to-br ${steps[i].gradient} border-2 border-white`} />
              ))}
            </div>
            <span className="text-sm text-gray-700">
              Trusted by <span className="text-sky-600">100+</span> healthcare institutions
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
