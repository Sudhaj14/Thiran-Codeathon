"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles";
import { TitleText } from "../components";

// Correct Image Paths
const themes = [
  { id: 1, title: "No Poverty", img: "/Goal-1.jpg" },
  { id: 2, title: "Zero Hunger", img: "/images/goal-2.png" },
  { id: 3, title: "Good Health and Well-being", img: "/images/goal-3.png" },
  { id: 4, title: "Quality Education", img: "/goal4.png" },
  { id: 5, title: "Gender Equality", img: "/goal5.png" },
  { id: 6, title: "Clean Water and Sanitation", img: "/images/goal-6.png" },
  { id: 7, title: "Affordable and Clean Energy", img: "/images/goal-7.png" },
  { id: 8, title: "Decent Work and Economic Growth", img: "/images/goal-8.png" },
  { id: 9, title: "Industry, Innovation and Infrastructure", img: "/images/goal-9.png" },
  { id: 10, title: "Reduced Inequality", img: "/images/goal-10.png" },
  { id: 11, title: "Sustainable Cities and Communities", img: "/images/goal-11.png" },
  { id: 12, title: "Responsible Consumption and Production", img: "/images/goal-12.png" },
  { id: 13, title: "Climate Action", img: "/images/goal-13.png" },
  { id: 14, title: "Life Below Water", img: "/images/goal-14.png" },
  { id: 15, title: "Life on Land", img: "/images/goal-15.png" },
  { id: 16, title: "Peace and Justice Strong Institutions", img: "/images/goal-16.png" },
  { id: 17, title: "Partnerships to achieve the Goal", img: "/images/goal-17.png" },
];

function Explore() {
  const sliderRef = useRef(null);

  return (
    <section className={`${styles.paddings} py-8`} id="explore">
      <motion.div
        className="overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <TitleText title={<>🗡 THEMES 🗡</>} textStyles="text-center mb-4" />

        <div className="relative mt-6">
          <motion.div
            ref={sliderRef}
            className="flex space-x-6 cursor-grab overflow-x-auto scrollbar-hide"
            drag="x"
            dragConstraints={{ left: -1500, right: 0 }}
            animate={{ x: [0, -1500, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 25,
              ease: "linear",
            }}
          >
            {themes.map((theme) => (
              <motion.div
                key={theme.id}
                className="min-w-[300px] h-[380px] bg-gray-800 text-white rounded-lg flex flex-col items-center justify-center text-xl font-bold p-6 shadow-lg"
                whileHover={{ scale: 1.1 }}
              >
                {/* Use Next.js Image Component */}
                <Image
                  src={theme.img}
                  alt={theme.title}
                  width={140}
                  height={140}
                  className="object-cover rounded-lg"
                />
                <p className="mt-3 text-center text-white">{theme.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Explore;
