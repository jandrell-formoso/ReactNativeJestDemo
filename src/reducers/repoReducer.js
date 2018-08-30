import actionTypes from "../actions/actionTypes";

const initialState = {
  repoList: []
};

export const repoReducer = (state = initialState, actions) => {
  switch(actions.type) {
    case actionTypes.IS_LOADING_GITHUB_REPO:
      return {
        ...state,
        isLoading: actions.isLoading,
      };
    case actionTypes.SEARCH_GITHUB_REPO_SUCCESS:
      return {
        ...state,
        repoCount: actions.payload.total_count,
        repoList: actions.payload.items,
        isLoading: actions.isLoading,
      }
    case actionTypes.SEARCH_GITHUB_REPO_ERROR:
      return {
        ...state,
        error: actions.error,
        isLoading: actions.isLoading,
      };
    default:
      return state;
  }
}
