import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./ListNews.scss";



const News = () => {
  const { listNews } = useContext(GlobalContext);
  const listNew = listNews.map((elementNews) => {
    const imgNull = elementNews.media.length !== 0
    return (
      <div key={elementNews.id} >
        <div className="noticias">
          <p className="titulo">{elementNews.title}</p>
          <p className="contenido">{elementNews.abstract}</p>
          
          {imgNull?<img className="foto" src={elementNews.media[0]["media-metadata"][2].url} alt="" /> : imgNull }
          <p className="date">
            {elementNews.source}, {elementNews.published_date}
          </p>
          <a href={elementNews.url} target="_blank" rel="noopener noreferrer"> <button className="button" >
              Abrir noticia
            </button></a>
        </div>
        </div>
    );
  });

  return <div className="news-container">{listNew}</div>;
};

export default News;

