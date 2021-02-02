import React from "react";

// if (true) {
//   return "nice"
// } else {
//   return "nope"
// }

function ProjectItem({ project }) {
  const { image, name, about, link, phase } = project;

  return (
    <li className="card">
      <div className="image">
        <img src={image} alt={name} />
        <button className="claps">👏{0}</button>
      </div>

      <div className="details">
        <h4>{name}</h4>
        <p>{about}</p>

        {link ? (
          <p>
            <a href={link}>Link</a>
          </p>
        ) : null}
      </div>

      <div className="extra">
        <span className="badge blue">Phase {phase}</span>
      </div>
    </li>
  );
}

export default ProjectItem;
