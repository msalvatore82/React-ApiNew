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
    if (data.titulo === " ") {
      setMessage("el nombre debe ser con un formato correcto");
      setBtnDisabled(true);
    } else if (data.contenido.length < 100) {
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
    e.preventDefault();
    console.log(
      "enviando datos..." +
        data.titulo +
        " " +
        data.epigrafe +
        " " +
        data.contenido +
        " " +
        data.fecha +
        " " +
        data.seccion +
        " " +
        data.autor
    );

    localStorage.setItem("Nueva noticia", JSON.stringify(data));

    clearState();
    setTimeout(() => {
      navigate("/");
    }, 2000);
    setVisible(false);
  };

  return (
    <>
      <div className="titulo">Por favor cargar su notica</div>
      <div className="form-noticia">
      {visible ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="titulo"
            value={data.titulo}
            placeholder="Titulo"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="epigrafe"
            value={data.epigrafe}
            placeholder="Epigrafe"
            onChange={handleInputChange}
          />
          <input
            type="tex"
            name="contenido"
            value={data.contenido}
            placeholder="Escriba su noticia aqui"
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="fecha"
            value={data.fecha}
            placeholder="fecha"
            onChange={handleInputChange}
          />
          {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
          <input
            type="text"
            name="seccion"
            value={data.seccion}
            placeholder="Seccion"
            onChange={handleInputChange}
          />
          <input
            type="texta"
            name="autor"
            value={data.autor}
            placeholder="Autor"
            onChange={handleInputChange}
          />
          <button className="button" type="submit" disabled={btnDisabled}>
            imprimir Noticia
          </button>
        </form>
        ):(<span>"Lo estamos redirigiendo al Home..."</span>)}
      
    </div>
      <p className="noticia-mensaje">
        
      </p>
    </>
  );
};

export default NewNotice;


