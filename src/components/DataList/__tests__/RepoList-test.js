import { SEARCH_GITHUB_REPO, SEARCH_GITHUB_REPO_SUCCESS, searchQueryGitHub, SEARCH_GITHUB_REPO_ERROR } from "../actions";
import mockStore from "../../../../configureMockStore";
import mockData from '../../../../__mockData__/repo';

describe("#getRepoList() using Promises", () => {
  it("should load repo list", () => {
    const searchQuery = "ReactNativeJestDemo";
    const perPage = "&per_page=1";

    const store = mockStore({ repos: [] });
    const expectedResult = [{
      type: SEARCH_GITHUB_REPO_SUCCESS,
      payload: mockData.REACT_NATIVE_JEST_DEMO
    }];
    return store.dispatch(searchQueryGitHub(searchQuery + perPage)).then(() => {
      console.log(store.getActions())
      expect(store.getActions()).toMatchObject([{ type: SEARCH_GITHUB_REPO_SUCCESS }]);
      expect(store.getActions()[0].payload).toBeTruthy();
    });
  });
});
