import React from 'react';
import Noticia from './Noticia';

const ListaNoticias = (props) => {
    return (
            <div className='row'>
                {
                    props.arraynews.map((news, indice) => <Noticia key={indice}  news={news}/>)
                }
            </div>              
    );
};

export default ListaNoticias;