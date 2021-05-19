import React from "react";

const Formulario = (props) => {
  return (
    <form className="row justify-content-around">
      <div className="col-sm-12 col-md-6 col-lg-8">
        <h5>Buscar por categoria:</h5>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4">
        <select
          defaultValue={"DEFAULT"}
          className="form-select"
          onChange={props.buscaCategoria}          
        >
          <option value="DEFAULT" disabled>
            Seleccion de Noticias
          </option>
          <option value="Business">Negocios</option>
          <option value="Entertainment">Entretenimiento</option>
          <option value="General">General</option>
          <option value="Health">Salud</option>
          <option value="Science5">Ciencia</option>
          <option value="Sports">Deportes</option>
          <option value="Technology">Tecnologia</option>
        </select>
      </div>
    </form>
  );
};

export default Formulario;
