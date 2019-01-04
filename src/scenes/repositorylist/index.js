import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, KeyboardAvoidingView, Image } from 'react-native';
import styles from "./styles";
import ListView from './listView';
import Header from '../../components/headerview/header'
import TabNavigator from './tabNavigator';
const logo = require("../../assets/logo.png");


export default class RepositoryListView extends Component {
  // static navigationOptions = {
  //   // title: 'Home',
  //   // headerStyle: {
  //   //   backgroundColor: '#f4511e',
  //   // },
  //   // headerTintColor: '#fff',
  //   // headerTitleStyle: {
  //   //   fontWeight: 'bold',
  //   // },
  //   headerTitle: <LogoTitle />,
  // };
  render() {
    return (
      <View  style={styles.container}>
        <Header 
        isbackVisible = {false}
        isNotificationIconVisible = {true}
        />
        <TabNavigator/>
        {/* <View style={styles.logoContainer}>
          <Image source={logo} style={ styles.logo } />
          <Text style={styles.title}>
            Sign In
          </Text>
        </View>
          <ListView navigation={this.props.navigation} /> */}
      </View>
    );
  }
}
