/**
 * @format
 * @flow
 */
import React, { Component } from "react";
import { View, FlatList, SafeAreaView } from "react-native";
import { connect } from "react-redux";
import { Card, CardContent, Title, Paragraph } from "react-native-paper";

type Props = {};
type State = {};

class DataList extends Component<Props, {}> {
  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.props.repos}
          keyExtractor={(item, i) => i.toString()}
          renderItem={({ item, index }) => (
            <Card>
              <CardContent>
                <Title>{item.full_name}</Title>
                <Paragraph>{item.description}</Paragraph>
              </CardContent>
            </Card>
          )}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state): Props => ({
  repos: state.repoReducer.repoList
});

const mapDispatchToProps = (dispatch, state): Props => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataList);
