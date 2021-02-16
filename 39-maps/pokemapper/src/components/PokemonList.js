import React from "react";
import Pokemon from "./Pokemon";

function PokemonList({ pokemons }) {
  return (
    <aside className="PokemonList">
      {pokemons.map((pokemon, index) => (
        <Pokemon key={index} pokemon={pokemon} />
      ))}
    </aside>
  );
}

export default PokemonList;
