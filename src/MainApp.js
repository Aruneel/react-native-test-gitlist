import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import RepositoryListView from './scenes/repositorylist';

const AppNavigator = createStackNavigator(
  {
    Repositories: {screen: RepositoryListView},
  },
  {
    initialRouteName: "Repositories",
    headerMode: "none",
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class MainApp extends Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}