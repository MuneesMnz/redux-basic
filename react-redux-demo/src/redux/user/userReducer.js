import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./userTypes";

const initialState = {
  loader: false,
  data: [],
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loader: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        loader: false,
        data: action.payload,
        error: "",
      };
    case FETCH_USER_FAILURE:
      return {
        loader: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
