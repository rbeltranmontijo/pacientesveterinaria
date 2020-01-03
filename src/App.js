import React, { Component } from "react";
import "./bootstrap.min.css";
import Header from "./components/Header";
import NuevaCita from "./components/NuevaCita";
import ListaCitas from "./components/ListaCitas";

class App extends Component {
  state = {
    citas: []
  };

  // cuando la aplicacion carga
  componentDidMount() {
    const citasLocalStorege = localStorage.getItem("citas");

    if (citasLocalStorege) {
      this.setState({
        citas: JSON.parse(citasLocalStorege)
      });
    }
  }

  // cuando eliminamos o agregamos nueva cita
  componentDidUpdate() {
    localStorage.setItem("citas", JSON.stringify(this.state.citas));
  }

  crearNuevaCita = datos => {
    //copiar el state actual
    const citas = [...this.state.citas, datos];

    //agregar el nuevo state
    this.setState({
      citas: citas
    });
  };

  // Eliminar las citas del state
  eliminarCita = id => {
    // tomar unacopia del state
    const citasActuales = [...this.state.citas];

    //utilizar filter para sacar el elemento del arreglo
    const citas = citasActuales.filter(cita => cita.id !== id);

    //actualizar el satate
    this.setState({ citas: citas });
  };

  render() {
    return (
      <div className="container">
        <Header titulo="Administrador pacientes veterinaria" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita crearNuevaCita={this.crearNuevaCita} />
          </div>
          <div className="mt-5 col-md-10 mx-auto">
            <ListaCitas
              citas={this.state.citas}
              eliminarCita={this.eliminarCita}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
