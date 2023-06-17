import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logosimpson.png";
import { Button, Container } from "react-bootstrap";
import Frase from "./components/Frase";
import { useEffect, useState } from "react";


function App() {
  const [personaje, setPersonaje] = useState({}); //aqui voy a guardar la frase que llega, en un objeto vacio {}

  useEffect(() => {
    consultarAPI(); // funcion que se va a encargar de hacer la peticion a la api
  }, []) // [] el segundo argumento, hace que el useEffect solo ande en montaje 

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch ("https://thesimpsonsquoteapi.glitch.me/quotes")
      const dato = await respuesta.json(); //.json(); metodo que extrae los datos del body y los parsea para leerlos.
      console.log(respuesta);{
      console.log(dato[0]);
      setPersonaje(dato[0]); //cargo el dato en la funcion que renderiza el state
    }
    } catch (error) {
      //aqui puedo mostrar un msj al usuario de que hay un error
      console.log(error);
    };
  }

  return (
    <>
      <Container className="text-center my-5">
        <img src={logo} alt="Logo de los simpson" className="w-50" />
        { <Frase personaje= {personaje} /> /*mando la funcion por props */}
        <Button variant="warning" >
          Obtener frase
        </Button>
      </Container>
    </>
  );
}

export default App;