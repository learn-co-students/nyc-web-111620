import React, { useState } from "react";
import Header from "./Header";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";
// TODO: replace this with a fetch request (eventually)
import projectData from "../data/projects";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState(projectData);

  function handleToggleDarkMode() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleAddProject(newProject) {
    const updatedProjectsArray = [...projects, newProject];
    setProjects(updatedProjectsArray);
  }

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header
        onToggleDarkMode={handleToggleDarkMode}
        isDarkMode={isDarkMode}
        name="Project Showcase"
      />
      <ProjectForm onAddProject={handleAddProject} />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
