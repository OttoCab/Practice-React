import React, { Fragment, useEffect, useState } from "react";
import ListaColor from "./ListaColor";

const FormColores = () => {
  //====LOGICA====
  //====LS====
  let coloresLS = JSON.parse(localStorage.getItem('ColoresLS'));
  if (!coloresLS) {
    coloresLS=[];
  }

  //====Declaro los State====
  const [colores, setColores] = useState(coloresLS);
  const [colorInd, setColorInd] = useState("");

  //====CICLO DE VIDA/ HOOK useEffect====
  useEffect(()=>{
    // Se realiza el montaje y actualizacon por cada vez que cargo un color
    localStorage.setItem('ColoresLS', JSON.stringify(colores))
  },[colores]);

  //====FUNCIONES A USAR====
  // CARGAR EN EL ARREGLO DE COLORES
  const handleSubmit = (e) => {
    e.preventDefault();
    setColores([...colores,colorInd]);
    //limpiar input
    setColorInd('');
  }

  // BORRAR ITEMCOLOR
  const borrarColor = (colorI) => {
    console.log('funcion borrar');
    setColores(colores.filter((dato, i) => i !== colorI));
  }


  //====CSS====
  // const squareeg = {
  //   marginLeft: '5%',
  //   width: "70px",
  //   height: "70px",
  //   border: "3px solid black",
  //   background:
  //     "linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)",
  // };

  return (
    <Fragment>
      <section className="container">
      <h1>5 - Paleta de Colores</h1>
      <p className='text-center'>
        Crear un proyecto de react que muestre un formulario con un input y un
        button que permitan guardar un color en el localstorage
      </p>
      </section>
      <section className="container shadow rounded p-3 mb-3 w-75">
        <div className="card">
          <h5 className="bg-secondary text-light text-center py-3">
            Administrador colores
          </h5>
          <div className="d-flex justify-content-around">
            {/* cuadrado de colores */}
            <div
              style={{
                width: "70px",
                height: "70px",
                border: "3px solid black",
                background:
                  "linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)",
              }}
            ></div>
            <form className="w-75" onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese un color ej: Blue"
                  onChange={(e) => setColorInd(e.target.value)}
                  value={colorInd}
                />
              </div>
              <div className="text-end pb-3">
                <button className="btn btn-primary" type="submit">
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="container rounded w-75">
        {/* armo grilla de cards */}
        <ListaColor arrayColores={colores} borrarColor={borrarColor} />
      </section>
    </Fragment>
  );
};

export default FormColores;
