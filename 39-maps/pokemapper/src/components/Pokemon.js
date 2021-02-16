import React from "react";

function Pokemon({ pokemon, index, setSelectedPokemonIndex }) {
  console.log(pokemon);

  const { name, sprites, stats } = pokemon;
  return (
    <div className="Pokemon" onClick={() => setSelectedPokemonIndex(index)}>
      <div className="images">
        {sprites.front_default && (
          <img src={sprites.front_default} alt={`${name} front sprite`} />
        )}
        {sprites.back_default && (
          <img src={sprites.back_default} alt={`${name} back sprite`} />
        )}
      </div>
      <div className="info">
        <h2>{name}</h2>
        {stats.map((info) => (
          <div key={info.stat.name}>
            <strong>{info.stat.name}: </strong>
            <span>{info.base_stat}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pokemon;
