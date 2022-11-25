import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./ListNews.scss";

const News = () => {
  const { characters } = useContext(GlobalContext);
  const character = characters.map((element) => {
    const imgNull = element.media.length !== 0
    return (
      <div key={element.id}>
        <div className="noticias">
          <p className="titulo">{element.title}</p>
          <p className="contenido">{element.abstract}</p>
          <p>
            {element.source}, {element.published_date}
          </p>
          {imgNull?<img src={element.media[0]["media-metadata"][2].url} alt="" /> : imgNull }
        </div>
      </div>
    );
  });

  return <div>{character}</div>;
};

export default News;
