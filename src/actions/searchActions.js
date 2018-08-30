import actionTypes from "./actionTypes";
import { getRepoList, isLoadingRepo } from "./repoActions";

const searchQueryOnChange = (text: string) => {
  //
  return dispatch => {
    dispatch(isLoadingRepo(true));
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

const searchQueryOnChangeError = error => {
  return {
    type: actionTypes.SEARCH_ONCHANGE_TEXT_ERROR,
    error
  };
};

export {
  searchQueryOnChange,
  searchQueryOnChangeSuccess,
  searchQueryOnChangeError
};
