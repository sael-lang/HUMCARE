// store.js
import { createStore } from "redux";
import reducer from "./reducer";
import { loadRoleFromStorage, loadUserFromStorage } from "./actions";

const store = createStore(reducer);

store.dispatch(loadRoleFromStorage());
store.dispatch(loadUserFromStorage());
export default store;
