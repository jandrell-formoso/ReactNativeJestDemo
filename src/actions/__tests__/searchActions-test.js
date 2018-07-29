import mockStore from '../../../configureMockStore';
import actionTypes from "../actionTypes";
import { searchQueryOnChange, searchQueryOnChangeSuccess, searchQueryOnChangeError } from '../searchActions';

describe('searchActions query', () => {
  it('#onChangeText ', () => {
    const text = 'q';

    expect(searchQueryOnChangeSuccess(text)).toEqual({
      type: actionTypes.SEARCH_ONCHANGE_TEXT_SUCCESS,
      text
    });
    expect(searchQueryOnChangeError(text)).toEqual({
      type: actionTypes.SEARCH_ONCHANGE_TEXT_ERROR,
      text
    });
  });

  it('should dispatch #getRepoList() action', () => {
    const store = mockStore({});
    const query = 'q';
    return store.dispatch(searchQueryOnChange(query)).then(() => {
      console.log(store.getActions());
    });
  });
});
