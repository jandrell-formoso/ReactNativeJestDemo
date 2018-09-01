/**
 * @format
 * @flow
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { SafeAreaView } from "react-navigation";
import { ListItem, Text } from "react-native-paper";
import { View, ActivityIndicator } from "react-native";
import SearchBar from "../components/SearchBar";
import RepoList from "../components/RepoList";

type Props = {
  repos?: {},
  error?: any,
  isLoading: any,
};
class SearchScreen extends Component<Props> {
  render() {
    return (
      <SafeAreaView>
        <View>
          <SearchBar />
          <Loading visible={this.props.isLoading} />
          <RepoList />
        </View>
      </SafeAreaView>
    );
  }
}

const Loading = props => (props.visible ? <ActivityIndicator /> : null);

const mapStateToProps = (state): Props => ({
  repos: state.repoReducer.repoList,
  error: state.repoReducer.error,
  isLoading: state.repoReducer.isLoading,
});

const mapDispatchToProps = (dispatch, state): Props => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchScreen);
