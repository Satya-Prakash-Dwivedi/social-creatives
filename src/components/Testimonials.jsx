import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Amit Sharma",
    feedback:
      "Top-notch editing! They transformed my raw footage into something truly amazing. The attention to detail and creative touches really made my content stand out.",
  },
  {
    name: "Sophia Martinez",
    feedback:
      "Great attention to detail! My video looks stunning now. The color grading and transitions are exactly what I was looking for. Highly recommended!",
  },
  {
    name: "Emily Roberts",
    feedback:
      "Super smooth process, and the final result was perfect! The team understood my vision immediately and delivered beyond my expectations.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Testimonials = () => {
  return (
    <section className="bg-gray-950 py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Here's what our clients say about their experience working with us
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative group bg-gray-900/50 backdrop-blur-md border border-gray-800/50 rounded-2xl p-6 transition-all duration-300 hover:border-emerald-400/30"
            >
              <div className="absolute -left-8 top-0 h-full w-1 bg-gradient-to-b from-emerald-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="pl-8">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  {testimonial.name}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {testimonial.feedback}
                </p>
              </div>

              <motion.div
                className="absolute -left-4 top-0 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ rotate: 180 }}
              >
                <Quote size={24} className="rotate-180" aria-hidden="true" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;