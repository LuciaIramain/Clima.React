import React from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";

function App() {
  return (
    <div>
      <Header 
        titulo='Clima React App'
      />
      <section className="contenedor-form">
        <section className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario />
            </div>
            <div className="col m6 s12">
              2
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
