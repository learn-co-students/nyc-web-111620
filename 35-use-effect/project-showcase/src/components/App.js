import React, { useEffect, useState } from "react";
import Header from "./Header";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";
// TODO: replace this with a fetch request (eventually)
// import projectData from "../data/projects";

// App() -> fetch() -> setProjects() -> App() -> fetch() -> setProjects()

// main effect: return JSX (render something to the DOM)
// side effects: fetch some projects (set a timer; update something outside of the DOM)
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState([]);

  // 1st arg: callback function that will run AFTER the component renders
  // 2nd arg: [] dependencies array: tell React WHEN to run this effect
  useEffect(() => {
    console.log("use effect");
    fetch("http://localhost:4000/projects")
      .then((r) => r.json())
      .then((projectArray) => {
        console.log(projectArray);
        setProjects(projectArray);
      });
  }, []);

  // useEffect(() => {}, [])

  console.log("render");

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
