import { getRepoList } from "../repoActions";
import actionTypes from '../actionTypes';
import mockStore from "../../../configureMockStore";
import mockData from '../../../__mockData__/repo';

describe("#getRepoList() using Promises", () => {
  it("should load repo list", () => {
    const searchQuery = "ReactNativeJestDemo";
    const perPage = "&per_page=1";

    const store = mockStore({});
    const expectedResult = [{
      type: actionTypes.SEARCH_GITHUB_REPO_SUCCESS,
      payload: mockData.REACT_NATIVE_JEST_DEMO
    }];
    return store.dispatch(getRepoList(searchQuery + perPage)).then(() => {
      console.log(store.getActions())
      expect(store.getActions()).toMatchObject([{ type: actionTypes.SEARCH_GITHUB_REPO_SUCCESS }]);
      expect(store.getActions()[0].payload).toBeTruthy();
    });
  });
});
