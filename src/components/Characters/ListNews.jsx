import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./ListNews.scss";

const News = () => {
  const { listNews } = useContext(GlobalContext);
  const listNew = listNews.map((elementNews) => {
    const imgNull = elementNews.media.length !== 0
    return (
      <div key={elementNews.id}>
        <div className="noticias">
          <p className="titulo">{elementNews.title}</p>
          <p className="contenido">{elementNews.abstract}</p>
          <p>
            {elementNews.source}, {elementNews.published_date}
          </p>
          {imgNull?<img src={elementNews.media[0]["media-metadata"][2].url} alt="" /> : imgNull }
        </div>
      </div>
    );
  });

  return <div>{listNew}</div>;
};

export default News;
