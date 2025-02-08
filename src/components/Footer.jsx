import React from "react";
import { motion } from "framer-motion";
import { Instagram, Mail, Twitter, Youtube, ArrowUpRight, Heart } from "lucide-react";

const SocialLink = ({ icon: Icon, label, href }) => (
  <motion.a
    href={href}
    className="flex items-center gap-3 text-gray-400 hover:text-white group relative"
    whileHover={{ x: 8 }}
  >
    <Icon size={24} className="group-hover:text-purple-400 transition-colors" />
    <span className="text-lg font-medium">{label}</span>
    <ArrowUpRight 
      size={16} 
      className="opacity-0 group-hover:opacity-100 transition-opacity text-purple-400" 
    />
  </motion.a>
);

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 relative">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start px-8 gap-12">
          {/* Left Side: Social Links & Branding */}
          <motion.div 
            className="flex flex-col items-start gap-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Social Links */}
            <div className="flex flex-col gap-4">
              <SocialLink 
                icon={Instagram} 
                label="social.creatives.ig" 
                href="#instagram"
              />
              <SocialLink 
                icon={Mail} 
                label="social.creatives@gmail.com" 
                href="mailto:social.creatives@gmail.com"
              />
              <SocialLink 
                icon={Twitter} 
                label="@socialcreatives" 
                href="#twitter"
              />
              <SocialLink 
                icon={Youtube} 
                label="Social Creatives" 
                href="#youtube"
              />
            </div>

            {/* Branding */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-6xl font-bold leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 animate-gradient">
                  Social
                </span>
                <span className="block text-white mt-2">Creatives</span>
              </h1>
              <motion.div 
                className="absolute -right-4 -top-4 text-purple-400/20"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Heart size={32} />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side: Call to Action */}
          <motion.div 
            className="mt-8 md:mt-0 flex flex-col items-end gap-6 max-w-md"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-purple-400/20 text-gray-300 px-8 py-6 rounded-2xl text-lg leading-relaxed">
              No stress, no overthinking. Just hit the button below and let's create something amazing together!
              <motion.div 
                className="absolute -left-2 -top-2 w-4 h-4 rounded-full bg-purple-400"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            
            <motion.button 
              className="group relative px-8 py-3 rounded-full text-white font-bold overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Book a Call</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_100%)]" />
            </motion.button>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div 
          className="mt-20 border-t border-gray-800 pt-6 px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <span>© 2024 Social Creatives. All rights reserved.</span>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;