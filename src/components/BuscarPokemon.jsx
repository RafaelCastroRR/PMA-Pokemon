import { useState } from "react";

export const BuscarPokemon = ({ handleGetPokemon }) => {
  const [pokemon, setPokemon] = useState('');

  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center mt-4 w-50">
        <h2 className="mb-3">Buscador de  Pokemon</h2>
        <form className="w-100" onSubmit={(e) => { handleGetPokemon(pokemon, e); }}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Ingresa el nombre del Pokémon"
              onChange={(e) => { setPokemon(e.target.value); }}
            />
            <button type="submit" className="btn btn-success">Buscar</button>
          </div>
        </form>
      </div>
    </>
  );
};
