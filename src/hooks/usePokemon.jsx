import { useState } from "react"
import { reqPoke } from "../service/pokemon"


export const usePokemon = () => {
    const [datPoke, setDatPoke] = useState([])

    const handleGetPokemon = async (pokemon, e) => {
      e.preventDefault();
      const data = await reqPoke(pokemon);
      if (data) {
        setDatPoke(data);
      }
    }
  return {
    handleGetPokemon,
    datPoke
  }
}