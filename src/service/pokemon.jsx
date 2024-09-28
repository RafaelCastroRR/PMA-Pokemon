export const reqPoke = async (pokemon) => {
  try {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
    const data = await resp.json();
    const { sprites, stats } = data;
    const nombre = data.name;
    const imagen = sprites.other['home'].front_default;

    const estadisticas = stats.map((stat) => ({
      nombre: stat.stat.name,
      valor: stat.base_stat,
    }));

    const datPoke = {
      nombre,
      imagen,
      estadisticas
    };

    return datPoke;
  } catch (err) {
    console.log(err);
  }
};
