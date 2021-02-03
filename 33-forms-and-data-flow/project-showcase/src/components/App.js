import React from "react";
import Header from "./Header";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

function App() {
  return (
    <div className={true ? "App" : "App light"}>
      <Header name="Project Showcase" />
      <ProjectForm />
      <ProjectList />
    </div>
  );
}

export default App;
