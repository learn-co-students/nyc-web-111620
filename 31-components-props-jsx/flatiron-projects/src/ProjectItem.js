import React from "react";

function ProjectItem(props) {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
}

export default ProjectItem;

// if (props.isGreatProject) {"nice"} else {"nah"}
//  statement - cannot use statements in JSX
//  expression - ternary - condition ? true : false

// function ProjectItem(props) {
//   console.log(props);

//   function getText() {
//     if (props.isGreatProject) {
//       return "nice";
//     } else if (false) {
//       return "a different thing";
//     } else {
//       return "name";
//     }
//   }
//   // logical operators: && and || or

//   return (
//     <div>
//       <h1>{props.title}</h1>
//       <h2>{props.isGreatProject ? "nice" : "nah"}</h2>
//       <h3>{getText()}</h3>
//       <h4>{props.isGreatProject && "nice"}</h4>
//       {props.isGreatProject ? <h5>sweet</h5> : null}
//     </div>
//   );
// }

// export default ProjectItem;
