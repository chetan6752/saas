import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { Calendar, Sparkles, Globe, Brain, Zap, CheckCircle2 } from "lucide-react";

const roadmapItems = [
  {
    phase: "Phase I",
    title: "Core Respiratory Monitoring",
    status: "Live",
    date: "Q4 2025",
    description: "Real-time monitoring of respiratory illness patterns across Mumbai using social media, pharmacy sales, and air quality data.",
    icon: Zap,
    color: "emerald",
    gradient: "from-emerald-500 to-green-600",
    achievements: ["24/7 Monitoring Active", "95% Accuracy Rate", "50+ Hospitals Connected"],
  },
  {
    phase: "Phase II",
    title: "Dengue/Malaria Predictive Integration",
    status: "In Development",
    date: "Q3 2026",
    description: "Expanding our AI to predict vector-borne disease outbreaks by analyzing monsoon patterns, standing water reports, and historical data.",
    icon: Brain,
    color: "sky",
    gradient: "from-sky-500 to-blue-600",
    achievements: ["AI Model Training", "Data Pipeline Setup", "Pilot Testing Q2"],
  },
  {
    phase: "Phase III",
    title: "AI-Driven Resource Allocation Module",
    status: "Planned",
    date: "Q1 2027",
    description: "Automated resource distribution recommendations based on predicted surge patterns, optimizing staff, equipment, and medicine allocation.",
    icon: Sparkles,
    color: "violet",
    gradient: "from-violet-500 to-purple-600",
    achievements: ["Research Phase", "Algorithm Design", "Partner Collaboration"],
  },
  {
    phase: "Phase IV",
    title: "Pan-State Data Expansion",
    status: "Planned",
    date: "Q3 2027",
    description: "Scaling the platform across Maharashtra state, enabling inter-city health intelligence sharing and regional outbreak prediction.",
    icon: Globe,
    color: "amber",
    gradient: "from-amber-500 to-orange-600",
    achievements: ["State Partnership Talks", "Infrastructure Planning", "Regional Pilots"],
  },
];

export function RoadmapSection() {
  return (
    <section id="roadmap" className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(56, 189, 248, 0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating gradient orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: `radial-gradient(circle, ${
              i === 0 ? 'rgba(56, 189, 248, 0.3)' : 
              i === 1 ? 'rgba(110, 231, 183, 0.3)' : 
              'rgba(167, 139, 250, 0.3)'
            } 0%, transparent 70%)`,
            left: `${i * 30}%`,
            top: `${20 + i * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full border border-violet-200 mb-4">
            <Calendar className="w-4 h-4 text-violet-600" />
            <span className="text-sm text-violet-600">Product Roadmap</span>
          </div>
          <h2 className="bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            Building the Future of Public Health Intelligence
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our vision extends beyond respiratory monitoring. See what's coming next in our journey 
            to revolutionize public health preparedness.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Vertical Timeline Line - Animated */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-200 via-sky-200 to-violet-200" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-emerald-500 via-sky-500 to-violet-500"
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </div>

            <div className="space-y-16">
              {roadmapItems.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.2, type: "spring" }}
                    className="relative"
                  >
                    <div className={`lg:grid lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:grid-flow-dense"}`}>
                      {/* Content */}
                      <Card className={`p-8 hover:shadow-2xl transition-all duration-500 border-gray-100 relative overflow-hidden group bg-white ${isEven ? "" : "lg:col-start-2"}`}>
                        {/* Animated gradient background */}
                        <motion.div 
                          className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                          animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 5, 0],
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />

                        <div className="flex items-start gap-4 relative">
                          {/* Icon */}
                          <motion.div 
                            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 shadow-lg shadow-${item.color}-500/30 relative`}
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                            
                            {/* Pulsing effect for active/in-development items */}
                            {(item.status === "Live" || item.status === "In Development") && (
                              <motion.div
                                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient}`}
                                animate={{
                                  scale: [1, 1.4, 1],
                                  opacity: [0.5, 0, 0.5],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeOut",
                                }}
                              />
                            )}
                          </motion.div>

                          <div className="flex-1">
                            {/* Header */}
                            <div className="flex flex-wrap items-center gap-2 mb-3">
                              <span className="text-sm text-gray-500">{item.phase}</span>
                              <Badge
                                variant="outline"
                                className={
                                  item.status === "Live"
                                    ? "border-emerald-200 text-emerald-600 bg-emerald-50"
                                    : item.status === "In Development"
                                    ? "border-sky-200 text-sky-600 bg-sky-50"
                                    : "border-gray-200 text-gray-600"
                                }
                              >
                                {item.status}
                              </Badge>
                              <div className="flex items-center gap-1 text-sm text-gray-500 ml-auto">
                                <Calendar className="w-4 h-4" />
                                <span>{item.date}</span>
                              </div>
                            </div>

                            {/* Title and Description */}
                            <h3 className="text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>

                            {/* Achievements/Milestones */}
                            <div className="space-y-2">
                              {item.achievements.map((achievement, i) => (
                                <motion.div 
                                  key={i}
                                  className="flex items-center gap-2"
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: index * 0.2 + i * 0.1 }}
                                >
                                  <CheckCircle2 className={`w-4 h-4 text-${item.color}-500 flex-shrink-0`} />
                                  <span className="text-sm text-gray-600">{achievement}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Card>

                      {/* Timeline Node - Animated */}
                      <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                          className="relative"
                        >
                          {/* Outer pulsing ring */}
                          <motion.div
                            className={`absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-br ${item.gradient} -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2`}
                            animate={{
                              scale: [1, 1.8, 1],
                              opacity: [0.5, 0, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeOut",
                            }}
                          />
                          
                          {/* Inner node */}
                          <motion.div 
                            className={`w-6 h-6 rounded-full bg-gradient-to-br ${item.gradient} ring-4 ring-white shadow-lg`}
                            whileHover={{ scale: 1.3 }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-20 max-w-2xl mx-auto"
        >
          <Card className="p-6 bg-gradient-to-br from-sky-50 to-emerald-50 border-sky-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-700">Overall Progress</span>
              <span className="text-sm bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
                Phase I Complete • Phase II 60% Done
              </span>
            </div>
            <div className="w-full bg-white rounded-full h-3 overflow-hidden shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-500 via-sky-500 to-violet-500 rounded-full relative overflow-hidden"
                initial={{ width: 0 }}
                whileInView={{ width: "40%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 1,
                  }}
                  style={{ opacity: 0.3 }}
                />
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
