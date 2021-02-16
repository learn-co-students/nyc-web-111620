import React from "react";
import Pokemon from "./Pokemon";

function PokemonList({ pokemons, setSelectedPokemonIndex }) {
  return (
    <aside className="PokemonList">
      {pokemons.map((pokemon, index) => (
        <Pokemon
          key={index}
          pokemon={pokemon}
          setSelectedPokemonIndex={setSelectedPokemonIndex}
          index={index}
        />
      ))}
    </aside>
  );
}

export default PokemonList;
