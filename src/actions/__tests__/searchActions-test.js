import mockStore from '../../../configureMockStore';
import actionTypes from "../actionTypes";
import { searchQueryOnChange } from '../searchActions';

describe('searchActions query', () => {
  it('#onChangeText ', () => {
    const text = 'q';

    const store = mockStore({ search: {} });
    return store.dispatch(searchQueryOnChange(text))
      .then(() => {
        console.log(store.getActions());
      });
  });
});
