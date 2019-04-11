const filtersDefaultState = {
  title: "",
  city: "",
  category: "",
  sortBy: "",
};

const filtersReducer = (state = filtersDefaultState, action) => {
  switch (action.type) {
    case "SEARCH_BY_TITLE":
      return {
        ...state,
        title: action.title,
      };
    case "SEARCH_BY_CITY":
      return {
        ...state,
        city: action.city,
      };
    case "SEARCH_BY_CATEGORY":
      return {
        ...state,
        category: action.category,
      };
    case "SORT_BY_NEWEST":
      return {
        ...state,
        sortBy: action.newest,
      };
    case "SORT_BY_CLOSEST":
      return {
        ...state,
        sortBy: action.closest,
      };
    default:
      return state;
  }
};

export default filtersReducer;
