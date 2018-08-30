/**
 * @format
 * @flow
 */
import React from 'react';
import { connect } from 'react-redux';
import { Searchbar as Search } from 'react-native-paper';
import { searchQueryOnChange } from '../../actions';

type Props = {
  onChangeText?: (query: string) => void,
  query: string,
}

const SearchBar = ({ query, onChangeText }) => (
  <Search
    placeholder={"Search"}
    onChangeText={val => onChangeText(val)} />
);

const mapStateToProps = (state) : Props => {
  return {
    query: state.searchReducer.query,
  };
};

const mapDispatchToProps = (dispatch, state) => ({
  onChangeText: value => {
    dispatch(searchQueryOnChange(value))
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
