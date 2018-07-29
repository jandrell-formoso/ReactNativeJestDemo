import mockStore from '../../../configureMockStore';
import { searchReducer } from "../searchReducer";

describe('Search reducer', () => {
  it('should return to the initial state', () => {
    const reducer = searchReducer;
    expect(reducer(undefined, {})).toEqual({
      query: ''
    });
  });
  it('should handle SEARCH_ONCHANGE_TEXT', () => {
    const reducer = searchReducer;
    expect(reducer(undefined, {
      type: "SEARCH_ONCHANGE_TEXT",
      query: 'q'
    })).toEqual({ query: 'q' });
  });
});
