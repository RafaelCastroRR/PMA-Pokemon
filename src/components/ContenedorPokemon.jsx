export const ContenedorPokemon = ({ datPoke }) => {
  const { nombre, imagen, estadisticas } = datPoke;

  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-3">
      <div className="card text-center mb-3" style={{ width: "18rem" }}>
        {imagen && <img src={imagen} className="card-img-top" alt={`${nombre} sprite`} />}
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Estadísticas</h5>
          <ul className="list-group list-group-flush">
            {estadisticas && estadisticas.map((stat, index) => (
              <li key={index} className="list-group-item">
                {stat.nombre}: {stat.valor}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
