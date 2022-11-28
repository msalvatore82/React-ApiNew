import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./ListNews.scss";



const News = () => {
  const { listNews } = useContext(GlobalContext);
  const listNew = listNews?.map((elementNews) => {
    return (
      <div key={elementNews.id} className="news-container">
        <div className="noticias">
          <p className="titulo">{elementNews.title}</p>
          <p className="contenido">{elementNews.abstract}</p>
          {elementNews?.multimedia?<img className="foto" src={elementNews?.multimedia[2]?.url} alt="" /> : null }
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

  return <div>{listNew}</div>;
};

export default News;


