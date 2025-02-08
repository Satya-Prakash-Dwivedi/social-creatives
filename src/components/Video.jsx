import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Clock, Eye } from "lucide-react";

const videos = [
  {
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Nature Expedition",
    duration: "2:30",
    views: "1.2K",
  },
  {
    url: "https://www.w3schools.com/html/movie.mp4",
    title: "Urban Adventure",
    duration: "3:15",
    views: "2.4K",
  },
  {
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Mountain Journey",
    duration: "1:45",
    views: "3.8K",
  },
];

const VideoCard = ({ video }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoPlay = (e) => {
    e.target.play();
    setIsPlaying(true);
  };

  const handleVideoPause = (e) => {
    e.target.pause();
    setIsPlaying(false);
  };

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative w-80 h-[450px] rounded-2xl overflow-hidden shadow-2xl">
        <video
          className="w-full h-full object-cover"
          src={video.url}
          loop
          muted
          onMouseEnter={handleVideoPlay}
          onMouseLeave={handleVideoPause}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />

        {/* Play/Pause Button */}
        <AnimatePresence>
          {!isPlaying && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.div
                className="bg-white/10 backdrop-blur-md p-6 rounded-full
                          border border-white/20 cursor-pointer
                          hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Video Info Overlay */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
        >
          <h3 className="text-xl font-bold mb-2">{video.title}</h3>
          <div className="flex items-center gap-4 text-sm text-gray-300">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{video.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{video.views}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const VideoGallery = () => {
  return (
    <div className="bg-black min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Videos
          </h2>
          <div className="h-px w-40 mx-auto bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        </motion.div>

        {/* Videos Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        >
          {videos.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
        </motion.div>

        {/* Bottom Decoration */}
        <div className="h-px w-full mx-auto mt-20 bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
      </div>
    </div>
  );
};

export default VideoGallery;