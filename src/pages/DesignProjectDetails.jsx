import React from "react";

import { designProjectsDetails } from "../constants";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
export default function DesignProjectDetails() {
  const cld = new Cloudinary({ cloud: { cloudName: "dzd1xv40b" } });
  const { id } = useParams();
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const [isOpen, setIsOpen] = React.useState(false);
  const [image, setImage] = React.useState("");

  const togglePopup = (image) => {
    setIsOpen(!isOpen);
    const img = cld
      .image(image)
      .format("auto") // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality("auto");
    setImage(img);
    console.log(image);
  };
  const projectDetails = designProjectsDetails.filter(
    (project) => project.projectid === id
  );

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0  h-screen w-full bg-black bg-opacity-50">
          <AdvancedImage
            cldImg={image}
            alt=""
            className="relative h-screen w-full object-contain"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 absolute text-white top-5 right-5 cursor-pointer max-lg:text-black max-md:text-white"
            onClick={() => setIsOpen(false)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      )}
      <div className=" flex flex-col justify-start items-center p-4 space-y-2  mx-auto antialiased overflow-y-auto  ">
        <div
          className="rounded-xl flex-grow border border-stone-50/30 bg-white/10 p-7 lg:10
        flex flex-col justify-start items-start gap-2 "
        >
          <img
            className="w-full h-fit mb-2 rounded-md"
            src={projectDetails[0].projectImage}
            draggable="false"
            alt=""
          />

          {projectDetails[0].isForCustmer && (
            <div className=" mt-3 flex flex-row items-center justify-center gap-2 px-3 py-2 bg-yellow-400 bg-opacity-25 border-2 border-yellow-400  rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-white font-semibold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
              <h3 className=" ">For Customer</h3>
            </div>
          )}
          <h3 className="text-xl font-semibold mt-2 mb-2 ">Technologies</h3>
          <div className="flex flex-wrap  gap-2">
            {projectDetails[0].projectTechnologie.map((tech) => (
              <div
                key={projectDetails[0].projectTechnologie.indexOf(tech)}
                className="rounded-full px-4 py-1 bg-stone-200 text-stone-900"
              >
                {tech}
              </div>
            ))}
          </div>
          <h3 className="text-xl font-semibold my-3 ">About Project </h3>
          <ul className="list-inside list-disc">
            <li className="marker:text-lg pb-1">
              {projectDetails[0].projectdesc}
            </li>
          </ul>
          <h3 className="text-xl font-semibold mt-5 mb-3 ">Project Screen</h3>
          <div className="grid overflow-hidden grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {projectDetails[0].projectScreens.map((project) => {
              const img = cld
                .image(project)
                .format("auto") // Optimize delivery by resizing and applying auto-format and auto-quality
                .quality("auto");
              return (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="group  overflow-hidden rounded-xl"
                >
                  <AdvancedImage
                    onClick={() => togglePopup(project)}
                    key={img}
                    cldImg={img}
                    className="h-full w-full object-cover transition-transform duration-500
                            group-hover:scale-110"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
