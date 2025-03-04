import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detail() {
  const { mascotaId } = useParams();
  const [mascota, setMascota] = useState(null);

  useEffect(() => {
    const URL =
      "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
    
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        const selectedMascota = data.find((m) => m.id === Number(mascotaId)); // Asegurar tipo numérico
        setMascota(selectedMascota || null); // Evita asignar undefined
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [mascotaId]);

  if (!mascota) return <h1>Cargando...</h1>;

  return (
    <div className="container mt-4">
      <h1>{mascota.nombre}</h1>
      <img src={mascota.foto} alt={mascota.descripcion} className="img-fluid" />
      <p>{mascota.descripcion}</p>
      <h3>Especie: {mascota.especie}</h3>
    </div>
  );
}
