import { useState } from "react";
import augustus_gloop from "../assets/augustus_gloop.jpg";
import babe from "../assets/babe.jpg";
import bailey from "../assets/bailey.jpg";
import cherub from "../assets/cherub.jpg";
import galaxy_note from "../assets/galaxy_note.jpg";
import leggo_my_eggo from "../assets/leggo_my_eggo.jpg";
import peppa from "../assets/peppa.jpg";
import piggy_smalls from "../assets/piggy_smalls.jpg";
import piglet from "../assets/piglet.jpg";
import porkchop from "../assets/porkchop.jpg";
import trouble from "../assets/trouble.jpg";
import truffle_shuffle from "../assets/truffle_shuffle.jpg";

const images = {
  Babe: babe,
  Porkchop: porkchop,
  Cherub: cherub,
  "Piggy smalls": piggy_smalls,
};

function HogTile({ hog }) {
  const [showDetails, setShowDetails] = useState(false);
  // let imageLink;
  // if (hog.name === "Babe") {
  //   imageLink = babe
  // }

  const imageLink = images[hog.name];

  const details = (
    <ul>
      <li>{hog.specialty}</li>
      <li>{hog.greased ? "greazy" : "non greazy"}</li>
      <li>{hog.weight}</li>
      <li>{hog["highest medal achieved"]}</li>
    </ul>
  );

  return (
    <div onClick={() => setShowDetails(!showDetails)}>
      <h1>{hog.name}</h1>
      <img src={imageLink} alt={hog.name} />
      {showDetails ? details : null}
    </div>
  );
}

export default HogTile;
