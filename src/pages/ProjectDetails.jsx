import React from "react";
import { FaGithub } from "react-icons/fa";
import { projectsDetails } from "../constants";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo } from "@cloudinary/react";
export default function ProjectDetails() {
  const cld = new Cloudinary({ cloud: { cloudName: "dzd1xv40b" }, });
  const { id } = useParams();
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const projectDetails = projectsDetails.filter(
    (project) => project.projectid === id
  );
  const vidCld = cld.video(projectDetails[0].projectVideo).quality("auto");
  console.log(vidCld);
  

  return (
    <div className=" flex flex-col justify-start items-center p-4 space-y-2  mx-auto antialiased overflow-y-auto  ">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl my-5 lg:text-5xl"
      >
        {projectDetails[0].projectTitle}
      </motion.h1>
      <div className="flex flex-wrap lg:flex-nowrap items-start justify-center gap-4">
        <div className=" items-center flex-grow rounded-xl border border-stone-50/30 bg-white/10 p-3 ">
          <video
            className={`mx-auto ${
              projectDetails[0].projectid == 1 ? "lg:w-[300px]" : "lg:w-[230px]"
            }`}
            controls
            src={vidCld.toURL()}
          ></video>
          <a
            href={projectDetails[0].projectLink}
            className=" flex justify-center items-center gap-2 mt-3 rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300"
          >
            <span>GitHub</span>
            <FaGithub />
          </a>
        </div>
        <div
          className="rounded-xl flex-grow border border-stone-50/30 bg-white/10 p-7 lg:10
        flex flex-col justify-start items-start gap-2 "
        >
          <h3 className="text-xl font-semibold mb-2 ">Technologies</h3>
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
          <h3 className="text-xl font-semibold my-3 ">Project Details : </h3>
          <ul className="list-inside list-disc">
            {projectDetails[0].details.map((detail) => (
              <li key={detail.id} className="marker:text-lg pb-1">
                {detail.description}
              </li>
            ))}
          </ul>
          {projectDetails[0].projectNofication && (
            <div>
              <h3 className="text-xl font-semibold my-3 ">Notfications</h3>
              <video
                className="mx-auto items-center"
                width={600}
                controls
                src={projectDetails[0].projectNoficationVideo}
              ></video>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
