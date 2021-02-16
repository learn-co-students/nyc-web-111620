import React from "react";
import { getRandomPokemon } from "../api/pokemon";

getRandomPokemon().then(console.log);

function PokemonMap({ position, pokemons }) {
  console.log({ position, pokemons });

  // display all pokemon in the map
  // when the map is clicked, get a new pokemon and add to state

  return (
    <main>
      <h1>Map Goes Here</h1>
    </main>
  );
}

export default PokemonMap;
