import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
// import LoginScreen from "./scenes/loginscreen";
// import SplashScreen from "./scenes/splashscreen";
// import RegisterScreen from './scenes/registrationscreen';
import RepositoryListView from './scenes/repositorylist';
// import TabScreen from './scenes/tabnavigator/index';
import Header from './components/headerview/header';

const AppNavigator = createStackNavigator(
  {
    // Splash: { screen: SplashScreen },
    // Login: { screen: LoginScreen },
    // Register: { screen: RegisterScreen }
    Repositories: {screen: RepositoryListView},
    // Header: {screen: Header},
    // Tabs: {screen: TabNavigator},

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