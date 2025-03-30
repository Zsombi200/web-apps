import "./front.css";

function Card({ name = "asd", image = "/public/github.png" }) {
  return (
    <div className="card">
      <img
        src={image}
        alt={`Picture of ${name}`}
      />
      <h1>{name}</h1>
    </div>
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
