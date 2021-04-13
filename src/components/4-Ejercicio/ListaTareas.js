import React from 'react';
import ItemTarea from './ItemTarea';

const ListaTareas = (props) => {
    return (
        <ul className='list-group'>
            {
                props.arregloTareas.map((valor,indice) => 
                <ItemTarea key={indice} dato={valor} id={indice} borrarTarea={props.borrarTarea}></ItemTarea>)
            }
        </ul>
    );
};

export default ListaTareas;