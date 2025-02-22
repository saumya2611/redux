// import { combineReducers } from "redux";
// import { TodoReducer } from "./todoReducers";

// export const rootReducers = combineReducers({
//   TodoReducer,
// });

import { combineReducers } from "redux";
import TodoReducers from "./todoReducers";

export const rootReducer = combineReducers({
  TodoReducers,
});
