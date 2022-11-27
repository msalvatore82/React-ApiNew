import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NewNotice.scss";

const NewNotice = () => {
  let navigate = useNavigate();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [visible, setVisible] = useState(true);
  const [message, setMessage] = useState("");

  const [data, setData] = useState({
    titulo: "",
    epigrafe: "",
    contenido: "",
    fecha: "",
    seccion: "",
    autor: "",
  });

  const initialState = {
    titulo: "",
    epigrafe: "",
    contenido: "",
    fecha: "",
    seccion: "",
    autor: "",
  };

  const clearState = () => {
    setData({ ...initialState });
  };

  useEffect(() => {
    if (data.titulo === "") {
      setMessage("el nombre debe ser con un formato correcto");
      setBtnDisabled(true);
    } else if (data.contenido.length < 50) {
      setMessage("la noticia debe tener al menos 500 caracteres");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    //eslint-disable-next-line
  }, [data]);
  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log("hola");
    e.preventDefault();
    localStorage.setItem("Nueva noticia", JSON.stringify(data));

    clearState();
    setTimeout(() => {
      navigate("/");
    }, 4000);
    setVisible(false);
  };

  return (
    <>
       <div className="form-noticia">
        {visible ? (
        <>
        
          <form onSubmit={handleSubmit}>
            <div className="nombre">
              <span>EXTRA EXTRA</span>
            </div>
            <div className="eslogan" >Noticias que desinforman</div>
            <div className="encabezado" >
            <div className="seccion1">
            <div >
              <span className="titulo"><input
                type="text"
                name="titulo"
                value={data.titulo}
                placeholder="Titulo"
                onChange={handleInputChange}
              /></span>
            </div>
            <div className="epigrafe">
              <input
                type="text"
                name="epigrafe"
                value={data.epigrafe}
                placeholder="Epigrafe"
                onChange={handleInputChange}
              />
            </div>
              <textarea
                name="contenido"
                cols="30"
                rows="10"
                value={data.contenido}
                placeholder="Escriba su noticia aqui"
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="seccion2">
            <div className="foto">
              <img src="https://img1.freepng.es/20180821/svf/kisspng-telegram-sticker-messaging-apps-monopoly-image-telegram-stickers-5b7c806baedc18.1871840515348859957162.jpg" alt="" />
            </div>
            </div>
            </div>
            <div className="seccion3" >
              <input
                type="text"
                name="seccion"
                value={data.seccion}
                placeholder="Seccion"
                onChange={handleInputChange}
              />
            
            <div className="autor">
              <input
                type="texta"
                name="autor"
                value={data.autor}
                placeholder="Autor"
                onChange={handleInputChange}
              />
            </div>
            </div>
            <div className="fecha seccion4">
              <input
                type="date"
                name="fecha"
                value={data.fecha}
                placeholder="fecha"
                onChange={handleInputChange}
              />
            </div>
            <button className="button" type="submit" disabled={btnDisabled}>
              imprimir Noticia
            </button>
          </form>
          <p>
            {message}
          </p>
          </>
        ) : (
          <span className="mensaje-home">"Lo estamos redirigiendo al Home..."</span>
        )}
      </div>
      <p className="noticia-mensaje"></p>
    </>
  );
};

export default NewNotice;
