import React from "react";
import ProjectItem from "./ProjectItem";

const projects = [
  "nice",
  "YouTravel",
  "MIX",
  "Groove Player",
  "iSherpa",
  "Layovr",
];

// [{ id: 1, name: "testing"}]

// [string, string, string] -> [component, component, component]

function ProjectList() {
  const projectComponents = projects.map((project) => {
    return <ProjectItem key={project} title={project} isGreatProject={true} />;
  });

  return (
    <div>
      <h1>ProjectList</h1>
      {projectComponents}
      {/* <ProjectItem
        title={projects[0]}
        isGreatProject={true}
      />
      <ProjectItem title={projects[1]} isGreatProject={false} /> */}
      {/* ProjectItem({ title: projects[0], isGreatProject: true }) */}
    </div>
  );
}

export default ProjectList;
