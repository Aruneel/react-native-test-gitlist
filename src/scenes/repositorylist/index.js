import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, KeyboardAvoidingView, Image } from 'react-native';
import styles from "./styles";
import Header from '../../components/headerview/header'
import TabNavigator from './tabNavigator';


export default class RepositoryListView extends Component {
  
  render() {
    return (
      <View  style={styles.container}>
        <Header 
        isbackVisible = {false}
        isNotificationIconVisible = {true}
        />
        <TabNavigator/>
      </View>
    );
  }
}
