import myLogo from "/myLogoWithText.png";
import { motion } from "framer-motion";
import { RiGithubFill } from "react-icons/ri";
import { RiLinkedinBoxFill } from "react-icons/ri";
export default function Footer() {
  const footerLogos = [
    <motion.a
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.3 }}
      key="1"
      href="https://github.com/abdDev-lab"
    >
      <RiGithubFill className="text-3xl" />
    </motion.a>,
    <motion.a
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.6 }}
      key="2"
      href="https://www.linkedin.com/in/barchi-abderrahman-58a70331b"
    >
      <RiLinkedinBoxFill className="text-3xl" />
    </motion.a>,
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center justify-center">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={myLogo}
          width={200}
          className="mb-10 mt-11"
        />
      </div>
      <div className="flex items-center justify-center gap-8">
        {footerLogos}
      </div>
      <p className="my-8 text-center text-sm tracking-wide text-gray-400">
        &copy; Barchi Abderrhaman. all rights reserved.
      </p>
    </div>
  );
}
