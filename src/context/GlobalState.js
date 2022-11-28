import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const initialState = {
    listNews: [],
  
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getlistNews = async (category) => {
    const res = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=4ZhXAfKuFxtPmgS5z0KXh5nCIL3bZFuY`);
    

    //cambia el estado
    dispatch({
      type: "GET_NEWS",
      payload: res.data.results,
    });
  };
  

  return (
    <GlobalContext.Provider
      value={{
        listNews: state.listNews,
        
        getlistNews,
        
      }}
      
    >
      {children}
    </GlobalContext.Provider>
  );
  
};
