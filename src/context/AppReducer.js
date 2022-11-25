const listNews = (state, action) => {
    switch (action.type) {
      case "GET_NEWS":
        return {
          ...state,
          listNews: action.payload,
          
        };
      default:
        return state;
    }
  };
  export default listNews;