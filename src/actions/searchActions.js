import actionTypes from "./actionTypes";

const searchQueryOnChange = (text) => {
  return dispatch => dispatch({
    type: actionTypes.SEARCH_ONCHANGE_TEXT,
    text
  });
}

export { searchQueryOnChange };
