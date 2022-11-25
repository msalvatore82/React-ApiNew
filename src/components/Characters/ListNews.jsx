import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState';
import './ListNews.scss'

const News = () => {
    const { characters } = useContext(GlobalContext);

    const character = characters.map((character) => {
        return (
          <div key={character.id}>
            <div className='noticias' >

            <p className='titulo' >{character.title}</p>
            <p className='contenido'>{character.abstract}</p>
            <p>{character.source}, {character.published_date}</p>
            {/* <a href={character.url} /> */}
            </div> 
            
          </div>
        );
      });
  return (
    <div>{character}</div>
  )
}

export default News