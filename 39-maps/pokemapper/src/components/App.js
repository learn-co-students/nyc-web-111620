import React, { useState, useEffect } from "react";
import PokemonMap from "./PokemonMap";
import Header from "./Header";
import PokemonList from "./PokemonList";
import pokemons from "../data/pokemon";

function App() {
  const [position, setPosition] = useState([40.7008739, -73.9875141]);

  // get the user's location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        console.log([coords.latitude, coords.longitude]);
      },
      (err) => console.error("geolocation error", err)
    );
  }, []);

  return (
    <div className="App">
      <Header />
      <PokemonList pokemons={pokemons} />
      <PokemonMap position={position} pokemons={pokemons} />
    </div>
  );
}

export default App;
