import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.scss"

const Header = () => {
  return (
    <>
      <nav>
        <span>Extra Extra</span>
        <p>Noticias que desinforman</p>
        <div>
            <Link to="/"><span>Home</span></Link>
            <Link to="/ClimaNews"><span>El Clima</span></Link>
            <Link to="/NewNotice"><span>Cargar Noticias</span></Link>
        </div>
      </nav>
    
    </>
  );
};

export default Header