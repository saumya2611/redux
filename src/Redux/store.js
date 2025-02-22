import { createStore } from "redux";
import { rootReducers } from "./Reducers";

export const store = createStore(rootReducers);
