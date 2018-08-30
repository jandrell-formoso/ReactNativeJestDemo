import Url from '../utils/url';
import 'cross-fetch/polyfill'; // for jest to read fetch'
import actionTypes from './actionTypes';

const getRepoListSuccess = (payload) => ({
  type: actionTypes.SEARCH_GITHUB_REPO_SUCCESS,
  payload,
  isLoading: false,
});

const getRepoListError = (error) => ({
  type: actionTypes.SEARCH_GITHUB_REPO_ERROR,
  error,
  isLoading: false,
});

const isLoadingRepo = (isLoading) => ({
  type: actionTypes.IS_LOADING_GITHUB_REPO,
  isLoading,
})

const getRepoList = (searchQuery) => {
  const perPage = '&per_page=1';
  return dispatch => fetch(Url.querySearchGitHub.replace(':query', searchQuery))
    .then(res => !res.ok ? dispatch(getRepoListError(res.status)) : res.json())
    .then(payload => dispatch(getRepoListSuccess(payload)))
    .catch(err => dispatch(getRepoListError(err)));
};

export { getRepoList, isLoadingRepo };
