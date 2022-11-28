import React, { useContext, useEffect, useState} from "react";
import { GlobalContext } from "../../context/GlobalState";
import News from "../ListNews/ListNews";
import "./Home.scss"

const Home = () => {
  const { getlistNews, listNews} = useContext(GlobalContext);
  const [category,setCategory]= useState("world")

  useEffect(() => {
    getlistNews(category);
    console.log("category",category)
  }, [category]);

  return (
    <div>
      <h2>EXTRA EXTRA</h2>
      <h3>NOTICIAS QUE DESINFORMAN</h3>
      <select defaultValue={category} className="select-noticias" id="select-noticias" name="category" onChange={(e)=> setCategory(e.target.value)}>
        <option disabled selected>Elige una seccion</option>
          <option value="arts" >Arts</option>
          <option value="automobiles" >Automobiles</option>
          <option value="books" >Books</option>
          <option value="business" >Business</option>
          <option value="fashion" >Fashion</option>
          <option value="food" >Food</option>
          <option value="health" >Health</option>
          <option value="home" >Home</option>
          <option value="insider" >Insider</option>
          <option value="magazine" >Magazine</option>
          <option value="movies" >Movies</option>
          <option value="nyregion" >New York region</option>
          <option value="obituaries" >Obituaries</option>
          <option value="opinion" >Opinion</option>
          <option value="politics" >Politics</option>
          <option value="realestate" >Realestate</option>
          <option value="science" >Science</option>
          <option value="sports" >Sports</option>
          <option value="sundayreview" >Sundayreview</option>
          <option value="technology" >Technology</option>
          <option value="theater" >Theater</option>
          <option value="magazine" >Magazine</option>
          <option value="travel" >Travel</option>
          <option value="upshot" >Upshot</option>
          <option value="us" >Us</option>
          <option value="world" >World</option>
          <option value="t-" >T-</option>
        </select>
      <div >
        {
          listNews.length > 1?  <News className="noticias" />: <p>No hay noticias</p>
        }
    
      </div>
     </div>
  );
};

export default Home;
