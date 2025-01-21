"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  // Scroll Progress
  const { scrollYProgress } = useScroll();

  // Text animation (move and fade)
  const textY = useTransform(scrollYProgress, [0, 1], [100, 0]);  // Y-axis movement
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]); // Fade in/out

  // Image animation (parallax effect)
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50]);  // Parallax scrolling effect

  return (
    <section className="flex items-center justify-between h-screen px-8">
      {/* Text Side */}
      <div className="w-full md:w-1/2">
        {/* First Text */}
        <motion.div
          className="mb-6"
          style={{
            y: textY,
            opacity: textOpacity,
          }}
        >
          <h1 className="text-4xl font-bold">
            dwduw dhuwqh duqwh du wqudhwqu dhuqw hd d wu
          </h1>
        </motion.div>

        {/* Second Text */}
        <motion.div
          className="mb-6"
          style={{
            y: textY,
            opacity: textOpacity,
            transitionDelay: '0.1s',
          }}
        >
          <h2 className="text-3xl font-semibold">Heading 2</h2>
        </motion.div>

        {/* Third Text */}
        <motion.div
          className="mb-6"
          style={{
            y: textY,
            opacity: textOpacity,
            transitionDelay: '0.2s',
          }}
        >
          <h3 className="text-2xl font-medium">Heading 3</h3>
        </motion.div>
      </div>

      {/* Image Side */}
      <div className="relative w-full md:w-1/2 h-full overflow-hidden">
        <motion.img
          src="/heroimg.png" // Replace with your image URL
          alt="Hero Image"
          className="object-cover w-full h-full"
          style={{
            y: imageY, // Apply parallax scroll effect to the image
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
