import React from "react";


import { Route, Routes } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails";
import Home from "./pages/Home";
import DesignProjectDetails from "./pages/DesignProjectDetails";


function App() {
  return (
    <div className="relative h-full overflow-y-auto antialiased">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center"></div>
      <div className="relative z-10 flex flex-col items-center  p-4 space-y-8 container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="project-details/:id" element={<ProjectDetails  />} />
          <Route path="design-project-details/:id" element={<DesignProjectDetails  />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
