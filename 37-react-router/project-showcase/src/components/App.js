import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";
import ProjectPage from "./ProjectPage";

function App() {
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((r) => r.json())
      .then(setProjects);
  }, []);

  function handleDarkModeClick() {
    setIsDarkMode(!isDarkMode);
  }

  function handleAddProject(newProject) {
    const newProjectArray = [newProject, ...projects];
    setProjects(newProjectArray);
  }

  // function getPage() {
  //   const pathname = window.location.pathname;

  //   switch (pathname) {
  //     case "/":
  //       return <Home />;
  //     case "/projects":
  //       return <ProjectList projects={projects} />;
  //     case "/projects/new":
  //       return <ProjectForm onAddProject={handleAddProject} />;
  //     case "/projects/1":
  //       return <ProjectDetail />;
  //   }
  // }

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header
        title="Science Fair"
        isDarkMode={isDarkMode}
        onDarkModeClick={handleDarkModeClick}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects/new">
          <ProjectForm onAddProject={handleAddProject} />
        </Route>
        <Route path="/projects/:id">
          <ProjectPage />
        </Route>
        <Route path="/projects">
          <ProjectList projects={projects} />
        </Route>
      </Switch>
      {/* {getPage()} */}
      {/* wouldn't it be nice if these were separate pages? */}
      {/* <Home />
      <ProjectForm onAddProject={handleAddProject} />
      <ProjectList projects={projects} />
      <ProjectDetail /> */}
    </div>
  );
}

export default App;
