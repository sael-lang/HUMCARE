// actions.js
export const UPDATE_ROLE = "UPDATE_ROLE";
export const LOAD_ROLE_FROM_STORAGE = "LOAD_ROLE_FROM_STORAGE";

export const updateRole = (newRole) => ({
  type: UPDATE_ROLE,
  payload: newRole,
});

export const loadRoleFromStorage = () => ({
  type: LOAD_ROLE_FROM_STORAGE,
});

export const UPDATE_USER = "UPDATE_USER";
export const LOAD_USER_FROM_STORAGE = "LOAD_USER_FROM_STORAGE";

export const updateUser = (newUser) => ({
type: UPDATE_USER,
payload: newUser,
});

export const loadUserFromStorage = () => ({
type: LOAD_USER_FROM_STORAGE,
});