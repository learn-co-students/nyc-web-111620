import React, { useState } from "react";

// find the form elemet
// addEventListener("submit", callback)
// callback - preventDefault,
// look through the form, get each input field, and read its value
//send data with fetch + update the DOM

// 1. for each input, create a state variable
// 2. assign the VALUE of the input to the state variable
// 3. add an onChange handler to the input that will UPDATE state
// 4. add onSubmit to the <form> element and write an event handler

function ProjectForm({ onAddProject }) {
  const [name, setName] = useState("my gr8 project");
  const [about, setAbout] = useState("");
  const [phase, setPhase] = useState("5");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const newProject = { name, about, phase, link, image };
    onAddProject(newProject);
  }

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {name.length === 0 ? (
          <p style={{ color: "red" }}>You must enter a project name</p>
        ) : null}

        <label htmlFor="about">About</label>
        <textarea
          id="about"
          name="about"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />

        <label htmlFor="phase">Phase</label>
        <select
          name="phase"
          id="phase"
          value={phase}
          onChange={(e) => setPhase(e.target.value)}
        >
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input
          type="text"
          id="link"
          name="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        <label htmlFor="image">Screenshot</label>
        <input
          type="text"
          id="image"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
}

export default ProjectForm;
