import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import eventsReducer from "../reducers/events";
import filtersReducer from "../reducers/filters";
import authReducer from "../reducers/auth";

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      events: eventsReducer,
      filters: filtersReducer,
      auth: authReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  );

  return store;
};
