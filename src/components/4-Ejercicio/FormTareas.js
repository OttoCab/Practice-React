import React, { Fragment, useState, useEffect } from "react";
import ListaTareas from "./ListaTareas";

const Ejercicio4 = () => {
  //guardo las cosas en el localStorage
  let tareasLS = JSON.parse(localStorage.getItem('ListaTareasLS'));
  console.log(tareasLS); // devuelve null (se toma como false?)
  if (!tareasLS) { // en el caso que no exista un arreglo lo crea
    tareasLS = []; 
  }

  const [tareas, setTareas] = useState(tareasLS);
  const [tareaInd, setTareaInd] = useState("");

  useEffect(() => { //lo uso para que se guarden las cosas en el LS y se activa cada vez que se guarda algo en "tareas"
    console.log('ejecutando el ciclo de vida');
    localStorage.setItem('ListaTareasLS', JSON.stringify(tareas));
  }, [tareas]);
  
  const agregarTarea = (e) => {
    if (e.charCode === 13) {
      e.preventDefault();
      setTareas([...tareas, tareaInd]);
      setTareaInd("");
    }
  };
  const borrarTarea = (codigo) => {//borro la tarea segun ID
    console.log('entro en borrar tarea');
    setTareas(tareas.filter((data, i) => i !== codigo))
  };

  return (
    <Fragment>
      <h1>4 - Ejercicio </h1>
      <div className="container">
        <div className="card text-center">
          <h3>Bienvenidos</h3>
          <h5>Ingresa tus tareas</h5>
          <form className="w-75 mx-auto">
            <div className="mb-3">
              <input
                type="text"
                className="form-control "
                placeholder="Tarea 1"
                onChange={(e) => setTareaInd(e.target.value)}
                onKeyPress={agregarTarea}
                value={tareaInd}
              />
            </div>
          </form>
        </div>
      </div>
      <section className="container">
        <ListaTareas arregloTareas={tareas} borrarTarea={borrarTarea}></ListaTareas>
      </section>
    </Fragment>
  );
};

export default Ejercicio4;
