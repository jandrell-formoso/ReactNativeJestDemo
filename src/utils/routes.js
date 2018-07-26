import React from 'react';
import { createStackNavigator } from 'react-navigation';

//screens
import SearchScreen from '../screens/SearchScreen';
import SearchDetailScreen from '../screens/SearchDetailScreen';

const Navigation = createStackNavigator(
    {
        Search: {
            screen: SearchScreen
        },
        SearchDetail: {
            screen: SearchDetailScreen
        }
    },
    {
        initialRouteName: 'Search',
        headerMode: 'none',
    }
);

export default () => <Navigation/>;