import { Card } from "react-bootstrap";

const Frase = ({ personaje }) => {
  return (
    <section className="my-5">
    <h2>Nombre de personaje</h2>
    <hr />
    <img className="mb-3" src='https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185' alt='' />
    <Card>
      <Card.Body>
        <figure>
          <blockquote className="blockquote">
            <p>frase</p>
          </blockquote>
          <figcaption className="blockquote-footer">
          personaje x in <cite title="Source Title">The simpson</cite>
          </figcaption>
        </figure>
      </Card.Body>
    </Card>
  </section>
  );
};

export default Frase;
