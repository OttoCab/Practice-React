import React, { Fragment, useEffect, useState } from "react";
import Formulario from "./Formulario";
import ListaNoticias from "./ListaNoticias";
import Titulo from "./Titulo";
import Spinner from './Spinner';

const WebNoticias = () => {
  // STATES
  const [news, setNews] = useState([]);
  const [categoria, setCategoria] = useState('general');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    requestApi();
  },[categoria]);

  const buscaCategoria = (e) => {
    e.preventDefault();
    setCategoria(e.target.value);
  }

  const requestApi = async () => {
    // muestra el spinner
    setLoading(true);
    const request = await fetch(`https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=75d14bb68755424f9142ff96f60409f4`);
    // usar {} especifica que elemento del arreglo quiero tomar
    const {articles} = await request.json();
    console.log(articles);
    setTimeout(() => {
      setNews(articles);
      setLoading(false);
    }, 1500);
    
  };

  const showSpinner = (loading === true)? (<Spinner></Spinner>) : (<ListaNoticias arraynews={news}></ListaNoticias>);

  return (
    <Fragment>
      <Titulo />
      <section className="container shadow border p-3">
        <Formulario buscaCategoria={buscaCategoria}/>
      </section>
      <section className="container">
        {showSpinner}
      </section>
    </Fragment>
  );
};

export default WebNoticias;
