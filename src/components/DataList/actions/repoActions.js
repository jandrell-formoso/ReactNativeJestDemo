import Url from '../../../utils/url';
import 'cross-fetch/polyfill'; // for jest to read fetch'

// put all action constants here
const SEARCH_GITHUB_REPO = 'SEARCH_GITHUB_REPO';
const SEARCH_GITHUB_REPO_SUCCESS = 'SEARCH_GITHUB_REPO_SUCCESS';
const SEARCH_GITHUB_REPO_ERROR = 'SEARCH_GITHUB_REPO_ERROR';

const searchQueryGitHubSuccess = (payload) => ({
  type: SEARCH_GITHUB_REPO_SUCCESS,
  payload
});

const searchQueryGitHubError = (error) => ({
  type: SEARCH_GITHUB_REPO_ERROR,
  error
});

const searchQueryGitHub = (searchQuery) => {
  const perPage = '&per_page=1';
  return dispatch => fetch(Url.querySearchGitHub.replace(':query', searchQuery))
    .then(res => !res.ok ? dispatch(searchQueryGitHubError(res.json())) : res.json())
    .then(payload => dispatch(searchQueryGitHubSuccess(payload)))
    .catch(err => dispatch(searchQueryGitHubError(err)));
};

export { SEARCH_GITHUB_REPO, SEARCH_GITHUB_REPO_ERROR, SEARCH_GITHUB_REPO_SUCCESS, searchQueryGitHub };
