import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Sun, Moon, Star, Circle, Triangle } from "lucide-react";

// Particle System Component
const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 0, x: Math.random() * 100 - 50 }}
          animate={{
            opacity: [0, 0.5, 0],
            y: [0, Math.random() * 200 - 100],
            x: [0, Math.random() * 200 - 100],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 2,
          }}
          className="absolute w-2 h-2 bg-white rounded-full opacity-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

// Floating Element Component
const FloatingElement = ({ children, duration, delay, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{
      opacity: [0.2, 0.5, 0.2],
      y: [0, -20, 0],
      rotate: [0, 360],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className={className}
  >
    {children}
  </motion.div>
);

const SocialCreatives = () => {
  const containerRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.5 },
    });
  }, [controls]);

  return (
    <div
      ref={containerRef}
      className="bg-black text-white min-h-screen flex flex-col items-center justify-center text-center p-8 relative overflow-hidden"
    >
      {/* Particle Background */}
      <ParticleBackground />

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-600 rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl" />

        {/* Floating Icons */}
        <FloatingElement duration={8} delay={0} className="absolute top-1/4 left-1/4">
          <Circle className="w-8 h-8 text-purple-400 opacity-30" />
        </FloatingElement>

        <FloatingElement duration={10} delay={1} className="absolute top-1/3 right-1/4">
          <Sun className="w-12 h-12 text-amber-400 opacity-20" />
        </FloatingElement>

        <FloatingElement duration={7} delay={2} className="absolute bottom-1/4 left-1/3">
          <Star className="w-6 h-6 text-white opacity-20" />
        </FloatingElement>

        <FloatingElement duration={9} delay={3} className="absolute top-1/2 right-1/3">
          <Triangle className="w-8 h-8 text-emerald-400 opacity-20" />
        </FloatingElement>

        <FloatingElement duration={11} delay={4} className="absolute bottom-1/3 right-1/2">
          <Moon className="w-10 h-10 text-cyan-400 opacity-20" />
        </FloatingElement>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Header */}
      <header className="absolute top-4 left-4 z-10">
        <motion.button
          className="bg-transparent border border-white/20 px-6 py-2 rounded-full text-white hover:border-white/40 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Social Creatives
        </motion.button>
      </header>

      <header className="absolute top-4 right-4 flex items-center gap-4 px-5 z-10">
        <motion.span
          className="text-white/80 hover:text-white transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          Contact Us
        </motion.span>
        <motion.button
          className="bg-purple-500 p-2 rounded-xl hover:bg-purple-400 transition-colors"
          whileHover={{ scale: 1.1, rotate: 45 }}
          whileTap={{ scale: 0.95 }}
        >
          ↗
        </motion.button>
      </header>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        className="relative z-10 max-w-4xl"
      >
        <motion.h1
          className="text-6xl font-bold leading-tight mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="relative inline-block">
            <span className="bg-purple-900/50 absolute left-0 top-0 w-full h-full rounded-md blur-sm" />
            <span className="relative z-10 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-white ml-3">
              Bringing
            </span>
          </span>
          {" "}
          <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
            rhythm to your visuals making every second count
          </span>
        </motion.h1>

        <motion.p
          className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Every frame holds a story, and we bring it to life with precision, creativity, and emotion.
          Whether it's a brand film, social media content, or a cinematic masterpiece,
          we ensure your visuals leave a lasting impact.
        </motion.p>

        <motion.button
          className="mt-8 px-8 py-4 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full text-white text-lg font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-shadow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book a Call
        </motion.button>
      </motion.div>
    </div>
  );
};

export default SocialCreatives;