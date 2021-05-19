import React from "react";

const Noticia = (props) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="card m-4">
        <img src={props.news.urlToImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{props.news.title}</h4>
          <p className="card-text">{props.news.description}</p>
          <a href={props.news.url} className="btn btn-primary">
            Ver la noticia completa
          </a>
        </div>
      </div>
    </div>
  );
};

export default Noticia;
