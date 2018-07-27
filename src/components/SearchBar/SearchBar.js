/**
 * @format
 * @flow
 */
import React from 'react';
import { connect } from 'react-redux';
import { Searchbar as Search } from 'react-native-paper';

type Props = {
  onChangeText: Function,
  query: string,
}

const SearchBar = ({ query, onChangeText }: Props) => (
  <SearchBar
    placeholder={"Search"}
    onChangeText={onChangeText(query)} />
);

const mapStateToProps = (state) : Props => {
  return {
    query: state.searchReducer.query,
  };
};

const mapDispatchToProps = (dispatch, state) => ({
  onChangeText: value => dispatch(searchQueryOnChange(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
