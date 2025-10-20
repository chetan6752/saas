import { Card } from "./ui/card";
import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const clients = [
  "BMC Health Dept.",
  "Lilavati Hospital",
  "KEM Hospital",
  "Hinduja Hospital",
  "Maharashtra Health",
  "Nanavati Hospital",
  "Breach Candy",
  "Apollo Mumbai",
];

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    role: "Chief Medical Officer, Lilavati Hospital",
    image: "https://images.unsplash.com/photo-1621282807498-aac696326c91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFsdGhjYXJlJTIwZXhlY3V0aXZlfGVufDF8fHx8MTc2MDYzMjIxOHww&ixlib=rb-4.1.0&q=80&w=1080",
    quote: "Arogya Sentinel has transformed how we prepare for health surges. The 48-hour advance warning gave us time to save lives during the last respiratory outbreak.",
    rating: 5,
  },
  {
    name: "Rajesh Patel",
    role: "Director, BMC Health Department",
    image: "https://images.unsplash.com/photo-1645066928295-2506defde470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtZWRpY2FsJTIwZGlyZWN0b3J8ZW58MXx8fHwxNzYwNjMyMjE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    quote: "The actionable insights and clear to-do lists make this system invaluable. We've reduced emergency response times by 40% since implementation.",
    rating: 5,
  },
  {
    name: "Dr. Kavita Desai",
    role: "Head of Emergency Services, KEM Hospital",
    image: "https://images.unsplash.com/photo-1585554414787-09b821c321c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFufGVufDF8fHx8MTc2MDU5NDY5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    quote: "Finally, a system that predicts instead of reacts. The data-driven approach has changed how we allocate resources and plan our emergency response.",
    rating: 5,
  },
  {
    name: "Dr. Amit Kulkarni",
    role: "Medical Superintendent, Hinduja Hospital",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop",
    quote: "The AI-powered predictions are remarkably accurate. We've been able to optimize our staff scheduling and resource allocation, saving both time and costs.",
    rating: 5,
  },
  {
    name: "Sneha Iyer",
    role: "Chief Operations Officer, Breach Candy Hospital",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
    quote: "Arogya Sentinel gives us the competitive edge in patient care. The early warnings help us prepare beds, stock medicines, and brief our team in advance.",
    rating: 5,
  },
  {
    name: "Dr. Vikram Singh",
    role: "Head of Infectious Diseases, Nanavati Hospital",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop",
    quote: "The integration with multiple data sources makes this incredibly powerful. We can now see patterns we never noticed before and act proactively.",
    rating: 5,
  },
];

export function TrustSection() {
  return (
    <section id="impact" className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-white via-sky-50/20 to-emerald-50/20">
      {/* Static Background Pattern - Optimized */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(56, 189, 248, 0.4) 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Trust Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block px-5 py-2 rounded-full mb-6 bg-gradient-to-r from-sky-100 via-emerald-100 to-violet-100 border border-sky-200"
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
              ✨ Trusted by Healthcare Leaders
            </span>
          </motion.div>
          <h2 className="bg-gradient-to-r from-sky-600 via-emerald-500 to-violet-600 bg-clip-text text-transparent mb-4">
            Trusted by Mumbai's Leading Health Institutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Protecting public health with cutting-edge AI intelligence and unwavering commitment to data security.
          </p>
        </motion.div>

        {/* Client Logos Carousel */}
        <div className="mb-20 overflow-hidden">
          <div className="relative">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -1200],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...clients, ...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-24 bg-white rounded-xl border border-gray-200 flex items-center justify-center px-6 shadow-sm"
                >
                  <span className="text-gray-600 text-center">{client}</span>
                </div>
              ))}
            </motion.div>
            
            {/* Gradient Overlays */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-sky-50/90 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-sky-50/90 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 border-gray-100 relative overflow-hidden group bg-white">
                {/* Static Background */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-emerald-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                {/* Quote Icon */}
                <div 
                  className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity"
                >
                  <Quote className="w-12 h-12 text-sky-500" />
                </div>

                <div className="relative">
                  {/* Profile */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-sky-300 shadow-lg">
                        <ImageWithFallback
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-900 mb-1">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-600 leading-relaxed">{testimonial.quote}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
