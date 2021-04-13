import React from 'react';

const ItemTarea = (props) => {
    return (
        <li className='list-group-item d-flex justify-content-between my-1'>
            {props.dato}
            <button className='btn btn-danger' onClick={() => props.borrarTarea(props.id)}>X</button>
        </li>
    );
};

export default ItemTarea;