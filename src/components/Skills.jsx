import React from "react";
import { motion } from "framer-motion";
import { RiGithubFill } from "react-icons/ri";
import { mySkills } from "../constants";
const iconVarients = (duration) => ({
  initial: { y: -5 },
  animate: {
    y: [5, -5],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export default function Skills() {
  return (
    <section id="skills" className=" py-10">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className=" mb-4 text-center text-3xl lg:text-4xl"
      >
        Skills
      </motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {mySkills.map((item) => (
          <motion.div key={item.id} className="rounded-2xl  p-5">
            <motion.img
              initial="initial"
              animate="animate"
              variants={iconVarients(item.duration)}
              src={item.logo}
              width={72}
              alt=""
            />
          </motion.div>
        ))}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(2.5)}
          className="rounded-2xl  p-4"
        >
          <RiGithubFill className="text-7xl" />
        </motion.div>
      </div>
    </section>
  );
}
