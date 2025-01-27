import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../constants";
import { UIUxProject } from "../constants";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

export default function Projects() {
  const cld = new Cloudinary({ cloud: { cloudName: "dzd1xv40b" } });
  function isScreenLarge() {
    const width = window.innerWidth;

    if (width >= 1200) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <section id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-3xl lg:text-4xl"
      >
        Projects
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-row items-center justify-center"
      >
        <div className="h-px bg-white opacity-50 w-full"></div>
        <h2 className="block m-8 text-center w-1/3 text-xl font-light opacity-70  lg:text-2xl">
          Dev Project
        </h2>
        <div className="h-px bg-white w-full opacity-50 "></div>
      </motion.div>

      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const img = cld
            .image(project.projectimage)
            .format("auto") // Optimize delivery by resizing and applying auto-format and auto-quality
            .quality("auto");

          return isScreenLarge() ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              key={project.projectid}
              className="group relative overflow-hidden rounded-3xl"
            >
              {project.isCloudinary ? (
                <AdvancedImage
                  key={img}
                  cldImg={img}
                  className="h-full w-full object-cover transition-transform duration-500
            group-hover:scale-110"
                />
              ) : (
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  className="h-full w-full object-cover transition-transform duration-500
            group-hover:scale-110"
                  src={project.projectimage}
                  alt=""
                />
              )}

              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col 
          items-center justify-center text-white opacity-0 backdrop-blur-lg backdrop-brightness-50
          transition-opacity duration-150 group-hover:opacity-100 "
              >
                <h3 className="mb-2 text-xl text-white">
                  {project.projecttitle}
                </h3>
                <p className="mb-12 p-4 text-center sm:">
                  {project.projectdesc}
                </p>
                <Link
                  to={`project-details/${project.projectid}`}
                  className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300"
                >
                  <div className="flex items-center">
                    <span>See Details</span>
                    <MdArrowOutward />
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          ) : (
            <Link
              key={project.projectid}
              to={`project-details/${project.projectid}`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-3xl"
              >
                {project.isCloudinary ? (
                  <AdvancedImage
                    key={img}
                    cldImg={img}
                    className="h-full w-full object-cover transition-transform duration-500
            group-hover:scale-110"
                  />
                ) : (
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    className="h-full w-full object-cover transition-transform duration-500
            group-hover:scale-110"
                    src={project.projectimage}
                    alt=""
                  />
                )}
              </motion.div>
            </Link>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-row items-center justify-center"
      >
        <div className="h-px bg-white opacity-50 w-full"></div>
        <h2 className="block m-8 text-center w-1/3 text-xl font-light opacity-70  lg:text-2xl">
          UI/UX Project
        </h2>
        <div className="h-px bg-white w-full opacity-50 "></div>
      </motion.div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {UIUxProject.map((project) =>
          isScreenLarge() ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              key={project.projectid}
              className="group relative overflow-hidden rounded-3xl"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                className="h-full w-full object-cover transition-transform duration-500
            group-hover:scale-110"
                src={project.projectimage}
                alt=""
              />

              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col 
          items-center justify-center text-white opacity-0 backdrop-blur-lg backdrop-brightness-50
          transition-opacity duration-150 group-hover:opacity-100 "
              >
                <h3 className="mb-2 text-xl text-white">
                  {project.projecttitle}
                </h3>
                <p className="mb-12 p-4 text-center sm:">
                  {project.projectdesc}
                </p>
                <Link
                  to={`design-project-details/${project.projectid}`}
                  className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300"
                >
                  <div className="flex items-center">
                    <span>See Details</span>
                    <MdArrowOutward />
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          ) : (
            <Link
              key={project.projectid}
              to={`design-project-details/${project.projectid}`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-3xl"
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  className="h-full w-full object-cover transition-transform duration-500
            group-hover:scale-110"
                  src={project.projectimage}
                  alt=""
                />
              </motion.div>
            </Link>
          )
        )}
      </div>
    </section>
  );
}
