import { UPDATE_ROLE, LOAD_ROLE_FROM_STORAGE, UPDATE_USER, LOAD_USER_FROM_STORAGE } from "./actions";

const initialState = {
role: "guest",
username: "",
};

const reducer = (state = initialState, action) => {
switch (action.type) {
case LOAD_ROLE_FROM_STORAGE:
return {
...state,
role: localStorage.getItem("role") || state.role,
};
case LOAD_USER_FROM_STORAGE:
return {
...state,
username: localStorage.getItem("username") || state.username,
};
case UPDATE_ROLE:
localStorage.setItem("role", action.payload);
return {
...state,
role: action.payload,
};
case UPDATE_USER:
localStorage.setItem("username", action.payload);
return {
...state,
username: action.payload,
};
default:
return state;
}
};

export default reducer;