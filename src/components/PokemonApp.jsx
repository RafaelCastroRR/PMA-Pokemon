import { usePokemon } from "../hooks/usePokemon"
import { BuscarPokemon } from "./BuscarPokemon"
import { ContenedorPokemon } from "./ContenedorPokemon"


export const PokemonApp = () => {
    const {handleGetPokemon, datPoke} = usePokemon()
  
    return (
    <>
      <BuscarPokemon handleGetPokemon={handleGetPokemon}/>
      <ContenedorPokemon datPoke={datPoke}/>
    </>
  )
}

