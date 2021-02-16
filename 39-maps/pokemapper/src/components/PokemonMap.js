import React from "react";
import GoogleMapReact from "google-map-react";
import { getRandomPokemon } from "../api/pokemon";

getRandomPokemon().then(console.log);

function PokemonMap({ position, pokemons }) {
  console.log({ position, pokemons });

  // display all pokemon in the map
  // when the map is clicked, get a new pokemon and add to state

  // Important! Always set the container height explicitly
  return (
    <main>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          defaultCenter={{
            lat: 59.95,
            lng: 30.33,
          }}
          defaultZoom={11}
        >
          {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */}
        </GoogleMapReact>
      </div>
    </main>
  );
}

export default PokemonMap;
