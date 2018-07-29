import actionTypes from "./actionTypes";
import { getRepoList } from "./repoActions";

const searchQueryOnChange = (text: string) => {
  //
  return dispatch => {
    dispatch(searchQueryOnChangeSuccess(text));
    return dispatch(getRepoList(text));
  };
  // return {
  //   type: actionTypes.SEARCH_ONCHANGE_TEXT,
  //   text
  // };
};

const searchQueryOnChangeSuccess = text => {
  return {
    type: actionTypes.SEARCH_ONCHANGE_TEXT_SUCCESS,
    text
  };
};

const searchQueryOnChangeError = text => {
  return {
    type: actionTypes.SEARCH_ONCHANGE_TEXT_ERROR,
    text
  };
};

export {
  searchQueryOnChange,
  searchQueryOnChangeSuccess,
  searchQueryOnChangeError
};
