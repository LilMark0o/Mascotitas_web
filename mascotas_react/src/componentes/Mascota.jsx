import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Mascota({ mascota }) {
  return (
    <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
      <Card.Img
        style={{ height: "14rem" }}
        variant="top"
        src={mascota.foto}
        alt={mascota.descripcion}
      />
      <Card.Body>
        <Card.Title>
          <Link to={`/mascotas/${mascota.id}`}>{mascota.nombre}</Link>
        </Card.Title>
        <Card.Text>{mascota.descripcion}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Mascota;
