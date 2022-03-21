import React, {useEffect, useState} from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Clima from "./components/Clima";

function App() {

  // State del formulario
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  });
  // ultilizo este state para controlar la busqueda y no estar llamando a la api cada vez que presiono una tecla
  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardarResultado] = useState({});
  const {ciudad, pais} = busqueda;

  useEffect(()=>{
    const consultarAPI = async () => {
      if(consultar){
        const appId = '75f59b7f3b766efe0b416d8a157cfe4b';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        const respuesta = await fetch(url);
        const res = await respuesta.json();
        guardarResultado(res);
        guardarConsultar(false);
      }
    }
    consultarAPI();
  }, [consultar]);

  return (
    <div>
      <Header 
        titulo='Clima React App'
      />
      <section className="contenedor-form">
        <section className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario 
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={guardarConsultar}
              />
            </div>
            <div className="col m6 s12">
              <Clima 
                resultado={resultado}
              />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
