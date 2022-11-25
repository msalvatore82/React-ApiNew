import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";
import characters from "./AppReducer";

const initialState = {
  characters: [],
  
};


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getCharacters = async () => {
    const res = await axios.get("https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=4ZhXAfKuFxtPmgS5z0KXh5nCIL3bZFuY");
    

    //cambia el estado
    dispatch({
      type: "GET_CHARACTERS",
      payload: res.data.results,
    });
  };
  

  return (
    <GlobalContext.Provider
      value={{
        characters: state.characters,
        
        getCharacters,
        
      }}
      
    >
      {children}
    </GlobalContext.Provider>
  );
  
};

// import React, { createContext, useReducer } from 'react';
// import AppReducer from "./AppReducer"
// import axios from "axios"

// const initialState = {
//   characters: [],
// }

// export const GlobalContext = createContext(initialState);

// export const GlobalProvider = ({children}) => {
//     const [state, dispatch] = useReducer(AppReducer, initialState);

//     const getCharacters = async () => {
//         const res = await axios.get("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=4ZhXAfKuFxtPmgS5z0KXh5nCIL3bZFuY");

//         //cambia el estado
//         dispatch({
//           type: "GET_CHARACTERS",
//           payload: res.data.results,
//         });
//       };

//       return (
//         <GlobalContext.Provider
//           value={{
//             characters: state.characters,
//             getCharacters,
//           }}
//         >
//           {children}
//         </GlobalContext.Provider>
//       );

// }
