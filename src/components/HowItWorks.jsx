import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Camera, Edit, Upload } from "lucide-react";

const steps = [
  {
    title: "Share Your Vision",
    description:
      "Upload your raw footage and let us know your goals, preferred style, and specific edits. We align with your vision from the start.",
    icon: Upload,
    gradient: "from-purple-600 to-indigo-500",
  },
  {
    title: "We Edit with Precision",
    description:
      "Our expert editors enhance your video with seamless transitions, color correction, audio improvements, and impactful effects.",
    icon: Edit,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "Review & Final Delivery",
    description:
      "Receive a preview, provide feedback, and get a high-quality, ready-to-publish video that captivates your audience.",
    icon: Camera,
    gradient: "from-emerald-400 to-teal-500",
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  return (
    <section className="bg-gray-950 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          How It Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg max-w-3xl mx-auto"
        >
          Transform your raw footage into stunning videos in three simple steps.
        </motion.p>
      </div>

      {/* Parallax Card Layout */}
      <div ref={ref} className="relative mt-16 max-w-6xl mx-auto h-[850px]">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 via-blue-500/10 to-emerald-400/20 opacity-50 rounded-2xl" />

        {/* Cards */}
        <motion.div
          style={{ y: y1 }}
          className="absolute left-0 top-0 w-full md:w-1/2 p-6 bg-purple-700 rounded-3xl"
        >
          <Card step={steps[0]} />
        </motion.div>
        <motion.div
          style={{ y: y2 }}
          className="absolute right-0 top-48 w-full md:w-1/2 p-6 bg-yellow-600 rounded-3xl"
        >
          <Card step={steps[1]} />
        </motion.div>
        <motion.div
          style={{ y: y3 }}
          className="absolute left-0 top-96 w-full md:w-1/2 p-6 bg-orange-700 rounded-3xl"
        >
          <Card step={steps[2]} />
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ step }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 2 }}
      className="relative p-8 rounded-3xl bg-gradient-to-br shadow-2xl border border-gray-800 transition-all duration-300 backdrop-blur-lg "
      style={{ background: `linear-gradient(to bottom right, ${step.gradient})` }}
    >
      {/* Floating Icon */}
      <div className="absolute -top-6 left-8 bg-gray-900 p-3 rounded-xl shadow-md border border-gray-700">
        <step.icon size={28} className="text-white" />
      </div>

      {/* Card Content */}
      <div className="mt-10 text-black">
        <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
        <p className="text-white text-lg leading-relaxed">{step.description}</p>
      </div>

      {/* Large Faded Icon */}
      <div className="absolute bottom-4 right-4 opacity-10">
        <step.icon size={56} />
      </div>
    </motion.div>
  );
};

export default HowItWorks;