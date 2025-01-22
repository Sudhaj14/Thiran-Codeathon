'use client';

import { motion } from 'framer-motion';
import { TitleText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

function About() {
  return (
    <section className="py-24 relative z-10 px-6 sm:px-12" id="about">
      <div className="gradient-02 absolute inset-0 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="max-w-5xl w-full mx-auto flex flex-col items-center text-center relative z-10"
      >
        <TitleText title="About Codeathon" textStyles="text-center" className="mb-6" />

        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-4 font-normal sm:text-[28px] text-[18px] text-secondary-white"
        >
          <span className="font-extrabold text-white">Codeathon – Building Sustainable Solutions For A Better Planet!</span> is a 24-hour hackathon, taking place on{' '}
          <span className="font-extrabold text-white">3rd and 4th of February 2025.</span> We invite{' '}
          <span className="font-extrabold text-white">hackers, designers, tech enthusiasts, and developers</span> from all disciplines to join and{' '}
          <span className="font-extrabold text-white">win exciting prizes</span>, collaborate with other participants, and gain immersive experiences. During the hackathon, attendees will have{' '}
          <span className="font-extrabold text-white">unique opportunities to learn from each other.</span> We are committed to bringing together an inclusive and diverse group of participants to work on solutions that make a difference.
        </motion.p>

        <motion.p
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="mt-10 font-normal sm:text-[24px] text-[16px] text-secondary-white"
        >
          <span className="font-extrabold text-white">Schedule:</span><br/>
          <span className="font-extrabold text-white">20th February 2025</span><br/>
          <span className="font-extrabold text-white">9:30 AM - 4:30 PM</span>
        </motion.p>

        <motion.img
          variants={fadeIn('up', 'tween', 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[20px] h-[32px] object-contain mt-8"
        />
      </motion.div>
    </section>
  );
}

export default About;
