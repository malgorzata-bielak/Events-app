import { createStore, combineReducers } from "redux";
import eventsReducer from "../reducers/events";
import filtersReducer from "../reducers/filters";

export default () => {
  const store = createStore(
    combineReducers({
      events: eventsReducer,
      filters: filtersReducer,
    }),
    // eslint-disable-next-line
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
};
