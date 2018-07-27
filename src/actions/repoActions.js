import Url from '../utils/url';
import 'cross-fetch/polyfill'; // for jest to read fetch'
import actionTypes from './actionTypes';

const searchQueryGitHubSuccess = (payload) => ({
  type: actionTypes.SEARCH_GITHUB_REPO_SUCCESS,
  payload
});

const searchQueryGitHubError = (error) => ({
  type: actionTypes.SEARCH_GITHUB_REPO_ERROR,
  error
});

const searchQueryGitHub = (searchQuery) => {
  const perPage = '&per_page=1';
  return dispatch => fetch(Url.querySearchGitHub.replace(':query', searchQuery))
    .then(res => !res.ok ? dispatch(searchQueryGitHubError(res.json())) : res.json())
    .then(payload => dispatch(searchQueryGitHubSuccess(payload)))
    .catch(err => dispatch(searchQueryGitHubError(err)));
};

export { searchQueryGitHub };
