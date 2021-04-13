import React from "react";
import ItemColor from "./ItemColor";

const ListaColor = (props) => {
  return (
    <div className="row">   
        {props.arrayColores.map((valor, indice) => (
          <ItemColor
            key={indice}
            color={valor}
            colorI={indice}
            colorInd={valor}
            borrarColor={props.borrarColor}
          />
        ))}    
    </div>
  );
};

export default ListaColor;



