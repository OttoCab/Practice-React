import React, { useState } from 'react';

const Ejercicio3 = (props) => {

    const [msj, setMsj] = useState('');

    
    return (
        <div>
            <h2>3 - Hello {props.text}{msj}!</h2>
            <button className='btn btn-primary' onClick={ () => setMsj(' from changed state') }>Click me</button>
        </div>
    );
};

export default Ejercicio3;