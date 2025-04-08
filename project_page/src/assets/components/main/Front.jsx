import "./front.css";
import { Link } from "react-router-dom";

function Card({ name = "asd", image = "/public/github.png" }) {
  const projects = [
    {id: 1, name: Asd}
  ]

  return (
    <Link to="/asd" className="card">
      <img
        src={image}
        alt={`Picture of ${name}`}
      />
      <h1>{name}</h1>
    </Link>
  );
}

function Front() {
  return (
    <div className="card-holder">
      <Card
        name="asdwa"
        image="/public/github.png"
      />
      <Card />
      <Card />
      <Card />      <Card />
      <Card />
      <Card />      <Card />
      <Card />
      <Card />      <Card />
      <Card />
      <Card />      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Front;
