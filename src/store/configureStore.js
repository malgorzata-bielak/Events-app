import { createStore, combineReducers } from "redux";
import eventsReducer from "../reducers/events";
// import filtersReducer from "../reducers/filters";

export default () => {
  const store = createStore(
    combineReducers({
      events: eventsReducer,
      //   filters: filtersReducer,
    }),
  );

  return store;
};
