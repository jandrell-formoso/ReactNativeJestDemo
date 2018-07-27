import actionTypes from "../actions/actionTypes";

const initialState = {
  repoList: []
};

export const repoReducer = (state = initialState, actions) => {
  switch(actions.type) {
    case actionTypes.SEARCH_GITHUB_REPO_SUCCESS:
      return {
        repoCount: actions.payload.total_count,
        repoList: actions.payload.items,
      }
    default:
      return state;
  }
}
