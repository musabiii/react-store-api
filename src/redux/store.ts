import { combineReducers, createStore } from "redux";
import { filterReducer } from "./filter-reducer";
import { cartReducer } from "./cart-reducer";

const rootReducer = combineReducers({cartReducer,filterReducer})

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;