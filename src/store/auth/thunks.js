import { checkingCredentials } from "./authSlice";

export const checkingAuthetication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};
