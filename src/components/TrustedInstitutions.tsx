import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const institutions = [
  {
    name: "Lilavati Hospital",
    logo: "https://images.unsplash.com/photo-1719934398679-d764c1410770?w=200&h=100&fit=crop",
  },
  {
    name: "Breach Candy Hospital",
    logo: "https://images.unsplash.com/photo-1732376800645-c066f9e283e8?w=200&h=100&fit=crop",
  },
  {
    name: "Hinduja Hospital",
    logo: "https://images.unsplash.com/photo-1759768313058-02218212c9f5?w=200&h=100&fit=crop",
  },
  {
    name: "Kokilaben Hospital",
    logo: "https://images.unsplash.com/photo-1597765221336-1f65bb4c4fee?w=200&h=100&fit=crop",
  },
  {
    name: "Nanavati Hospital",
    logo: "https://images.unsplash.com/photo-1650449430794-d9faa5ddec65?w=200&h=100&fit=crop",
  },
  {
    name: "Jaslok Hospital",
    logo: "https://images.unsplash.com/photo-1593694747763-f4a6b8e42459?w=200&h=100&fit=crop",
  },
];

export function TrustedInstitutions() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-sky-50/30 relative overflow-hidden">
      {/* Background Pattern - Static for performance */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(56, 189, 248, 0.8) 1px, transparent 0)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-4 bg-gradient-to-r from-sky-100 via-emerald-100 to-violet-100 border border-sky-200"
            animate={{
              boxShadow: [
                "0 0 20px rgba(56, 189, 248, 0.2)",
                "0 0 30px rgba(110, 231, 183, 0.3)",
                "0 0 20px rgba(56, 189, 248, 0.2)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="text-sm bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
              🏥 Trusted by 100+ Healthcare Institutions
            </span>
          </motion.div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Leading hospitals and healthcare facilities across Mumbai rely on Arogya Sentinel 
            for early warning intelligence
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {institutions.map((institution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="group"
            >
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-sky-300 relative overflow-hidden">
                {/* Gradient on hover */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                <div className="relative h-16 flex items-center justify-center mb-3">
                  <ImageWithFallback
                    src={institution.logo}
                    alt={institution.name}
                    className="w-full h-full object-cover rounded-lg grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <p className="text-xs text-center text-gray-600 group-hover:text-sky-600 transition-colors">
                  {institution.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto"
        >
          {[
            { value: "100+", label: "Healthcare Partners" },
            { value: "50K+", label: "Alerts Delivered" },
            { value: "99.9%", label: "Uptime Guarantee" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-sky-200 hover:border-sky-300 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-gradient-to-r from-sky-600 via-emerald-500 to-violet-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
