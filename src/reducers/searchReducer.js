import actionTypes from "../actions/actionTypes";

type State = {
  query: string
};

const initialState: State = {
  query: ''
};

export const searchReducer = (state = initialState, actions) => {
  switch(actions.type) {
    case actionTypes.SEARCH_ONCHANGE_TEXT:
      return {
        ...state,
        query: actions.query
      };
    default:
      return state;
  }
  return state;
};