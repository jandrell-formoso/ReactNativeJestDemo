export const urlGithubApi = 'https://api.github.com';
export default {
  searchGitHubApi: urlGithubApi + '/search/repositories',
  querySearchGitHub: urlGithubApi + "/search/repositories?q=':query'",
}