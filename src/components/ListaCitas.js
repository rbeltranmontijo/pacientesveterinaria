import React from "react";
import Cita from "./Cita";

import PropTypes from "prop-types";

const ListaCitas = ({ citas, eliminarCita }) => {
  const mensaje =
    Object.keys(citas).length === 0 ? "No hay citas" : "Administra las citas";
  return (
    <div className="card mt-2 py-5">
      <div className="card-body">
        <h2 className="card-title text-center">{mensaje}</h2>
        <div className="lista-citas">
          {citas.map(citas => (
            <Cita key={citas.id} cita={citas} eliminarCita={eliminarCita} />
          ))}
        </div>
      </div>
    </div>
  );
};

ListaCitas.prototype = {
  citas: PropTypes.array.isRequired,
  eliminarCita: PropTypes.func.isRequired
};

export default ListaCitas;
