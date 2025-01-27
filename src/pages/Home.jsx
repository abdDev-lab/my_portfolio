import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Bio from "../components/Bio";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Projects />
      <Bio />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
