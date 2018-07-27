import { repoReducer } from '../repoReducer';
import actionTypes from '../../actions/actionTypes';
import mockData from '../../../__mockData__/repo';

describe('#repoReducer', () => {
  it('should return the initial state', () => {
    expect(repoReducer(undefined, {})).toEqual({
      repoList: []
    });
  });
  it('should handle SEARCH_GITHUB_REPO_SUCCESS', () => {
    expect(repoReducer({}, {
      type: actionTypes.SEARCH_GITHUB_REPO_SUCCESS,
      payload: mockData.REACT_NATIVE_JEST_DEMO,
    })).toEqual({
      repoCount: 1,
      repoList: mockData.REACT_NATIVE_JEST_DEMO.items,
    });
  });
});
