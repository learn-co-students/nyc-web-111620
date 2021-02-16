import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";
import { getRandomPokemon } from "../api/pokemon";

getRandomPokemon().then(console.log);

function ClickerComponent({ onAddPokemon, center }) {
  const map = useMapEvent("click", (mapEvent) => {
    // get random pokemon from API
    getRandomPokemon().then((pokemon) => {
      // get map data and add it to pokemon
      const newPokemon = {
        ...pokemon,
        position: [mapEvent.latlng.lat, mapEvent.latlng.lng],
      };
      // add pokemon to state
      onAddPokemon(newPokemon);
    });
  });

  map.panTo(center);

  return null;
}

function PokemonMap({
  position,
  pokemons,
  onAddPokemon,
  selectedPokemonIndex,
}) {
  console.log({ position, pokemons });

  // display all pokemon in the map
  // when the map is clicked, get a new pokemon and add to state

  const selectedPokemon = pokemons[selectedPokemonIndex];

  return (
    <main>
      <MapContainer
        center={selectedPokemon.position}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%" }}
      >
        <ClickerComponent
          onAddPokemon={onAddPokemon}
          center={selectedPokemon.position}
        />
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
        {pokemons.map((p) => (
          <Marker
            key={p.name}
            position={p.position}
            opacity={p === selectedPokemon ? 0.5 : 1}
          >
            <Popup>{p.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </main>
  );
}

export default PokemonMap;
