import React, { useState, useEffect } from "react";
import PokemonMap from "./PokemonMap";
import Header from "./Header";
import PokemonList from "./PokemonList";
import pokemonData from "../data/pokemon";

function App() {
  const [pokemons, setPokemons] = useState(pokemonData);
  const [position, setPosition] = useState([40.7008739, -73.9875141]);
  const [selectedPokemonIndex, setSelectedPokemonIndex] = useState(0);

  // get the user's location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        console.log([coords.latitude, coords.longitude]);
      },
      (err) => console.error("geolocation error", err)
    );
  }, []);

  function addPokemon(newPokemon) {
    setPokemons([...pokemons, newPokemon]);
  }

  return (
    <div className="App">
      <Header />
      <PokemonList
        pokemons={pokemons}
        setSelectedPokemonIndex={setSelectedPokemonIndex}
      />
      <PokemonMap
        position={position}
        pokemons={pokemons}
        onAddPokemon={addPokemon}
        selectedPokemonIndex={selectedPokemonIndex}
      />
    </div>
  );
}

export default App;
