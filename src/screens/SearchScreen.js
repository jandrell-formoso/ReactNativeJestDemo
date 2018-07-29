/**
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import { ListItem, Text } from 'react-native-paper';
import { View } from 'react-native';

type Props = {

};
class SearchScreen extends Component<Props> {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>Search Screen</Text>
          <ListItem title="Hello" />
        </View>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = (state): Props => ({

});

const mapDispatchToProps = (dispatch, state): Props => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchScreen);
