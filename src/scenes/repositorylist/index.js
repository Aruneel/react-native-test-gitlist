import React, { Component } from 'react';
import {  View,  Animated } from 'react-native';
import Header from '../../components/headerview/header'
import TabNavigator from './tabNavigator';


export default class RepositoryListView extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
          <Header
            isbackVisible={false}
            isNotificationIconVisible={true}
            navigate = {this.props.navigation}
          />
          
          <TabNavigator />
        </View>
    );
  }
}
