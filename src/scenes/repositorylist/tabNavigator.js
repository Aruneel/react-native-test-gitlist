import React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import ListView from './listView';
import color from "../../theme/colors";
import * as Constants from '../../utils/Constants';

class OverviewScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Overview!</Text>
      </View>
    );
  }
}

class StarsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Stars!</Text>
      </View>
    );
  }
}

class FormScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Forms!</Text>
      </View>
    );
  }
}

const TabNavigator = createMaterialTopTabNavigator({
  Overview: { screen: OverviewScreen },
  Repositories: { screen: ListView },
  Stars: { screen: StarsScreen },
  Forms: { screen: FormScreen },
},
  {
    tabBarOptions: {
      activeTintColor: color.lightgray,
      inactiveTintColor: color.lightgray,
      style: {
        backgroundColor: color.colorPrimaryDark,
      },
      indicatorStyle: {
        backgroundColor: color.colorPrimaryDark,
        // width: 30,
      },
      scrollEnabled: true,
    },
  }
);

export default createAppContainer(TabNavigator);