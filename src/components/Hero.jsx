import React from "react";
import { motion } from "framer-motion";
import myImage from "/myImage.jpg";

export default function Hero() {
  return (
    <section id="hero" className="flex min-h-screen flex-wrap  items-center">
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2"
      >
        <h2 className="my-9 p-2 text-4xl font-bold md:text-5xl lg:text-[5rem]">
          BARCHI ABDERRHAMAN
        </h2>
        <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
          Hello There!👋🏻
        </p>
        <p className="mb-8 p-2 text-xl">
          Hi, I am a skilled Flutter and Dart developer specializing in creating
          intuitive, visually appealing, and user-friendly mobile app designs
          with a focus on modern UI/UX principles.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 lg:pl-10 "
      >
        <div className="flex justify-center mx-3 lg:m-0 ">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src={myImage}
            alt=""
            width={400}
            height={400}
            className="rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
