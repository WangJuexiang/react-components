import { legacy_createStore } from "redux";
import browserlistReducer from "./browserlist_reducer";
export default legacy_createStore(browserlistReducer);
