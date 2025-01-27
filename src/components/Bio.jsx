import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
export default function Bio() {
  return (
    <section id="bio" className="flex max-w-4xl flex-col gap-12 pt-10">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-3xl lg:text-4xl"
      >
        Bio
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-10"
      >
        <div
          className="rounded-xl border border-stone-50/30 bg-white/10 p-8
        flex flex-col items-center gap-2 w-60"
        >
          <h3 className="text-3xl font-semibold">Experience</h3>
          <p className="text-xl">+1 YEARS </p>
          <p className="text-sm text-stone-300">Mobile Develepment</p>
        </div>
        <div
          className="rounded-xl border border-stone-50/30 bg-white/10 py-8
        flex flex-col items-center gap-2 w-60"
        >
          <h3 className="text-3xl font-semibold">Education</h3>
          <div className="text-xl flex items-center gap-2">
            <span>
              <FaGraduationCap />
            </span>
            Bachlor Degree
          </div>
          <p className="text-sm text-stone-300">Computer Science</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-4 text-lg lg:text-xl"
        >
          I am a mobile developer with a strong focus on Flutter, currently
          completing my Bachelor's degree in Computer Science. My expertise
          extends to backend development with PHP and MySQL, and strong
          foundation in creating intuitive and visually appealing UI/UX designs,
          allowing me to build full-stack mobile applications.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-4 text-lg lg:text-xl"
        >
          I am passionate about coding and enjoy the challenge of creating
          seamless, user-friendly experiences. My approach to development is
          grounded in a strong understanding of both frontend and backend
          technologies.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mb-4 text-lg lg:text-xl"
        >
          Driven by a love for learning, I constantly seek out new opportunities
          to grow and refine my skills. I believe in the power of continuous
          improvement and stay committed to staying ahead in the rapidly
          evolving tech landscape.
        </motion.p>
      </motion.div>
    </section>
  );
}
