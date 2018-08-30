import actionTypes from "../actions/actionTypes";

type State = {
  query: string
};

const initialState: State = {
  query: ''
};

export const searchReducer = (state = initialState, actions) => {
  switch(actions.type) {
    case actionTypes.SEARCH_ONCHANGE_TEXT_SUCCESS:
      return {
        ...state,
        query: actions.query
      };
    case actionTypes.SEARCH_ONCHANGE_TEXT_ERROR:
      return {
        ...state,
        error: actions.error,
      };
    default:
      return state;
  }
  return state;
};