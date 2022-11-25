import React, { useContext, useEffect} from "react";
import { GlobalContext } from "../../context/GlobalState";
import News from "../Characters/ListNews";
import "./Home.scss"

const Home = () => {
  //me traigo la función de mi context
  const { getlistNews } = useContext(GlobalContext);
  

  useEffect(() => {
    getlistNews();
    
  }, [getlistNews]);

  return (
    <div>
      <h2>EXTRA EXTRA</h2>
      <h3>NOTICIAS QUE DESINFORMAN</h3>
      <div >
      <News className="noticias" />
      </div>
    </div>
  );
};

export default Home;
