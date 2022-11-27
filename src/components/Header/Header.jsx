import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.scss"

const Header = () => {
  return (
    <>
      <nav>
       <div>
            <Link className='botonHome' to="/"><span>Home</span></Link>
            <Link className='botonClima' to="/ClimaNews"><span>El Clima</span></Link>
            <Link className='botonNoticia'  to="/NewNotice"><span>Cargar Noticias</span></Link>
        </div>
      </nav>
    
    </>
  );
};

export default Header