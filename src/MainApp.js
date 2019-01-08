import React, { Component } from "react";
import { PermissionsAndroid, Platform, Animated, View, SafeAreaView, ScrollView, Image } from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator, DrawerItems } from "react-navigation";
import RepositoryListView from './scenes/repositorylist';
import Camera from './scenes/camera';
import colors from './theme/colors';
import {Icon} from 'native-base';
import Header from './components/headerview/header';

const uri = "https://norwestcoop.ca/wp-content/uploads/2017/06/person.png";
const CustomDrawerComponent = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: 150, alignItems: 'center', justifyContent:'center', backgroundColor: colors.colorPrimaryDark }}>
        {/* <Image source={{ uri }} styles={{
          width: 120,
          height: 120,
          borderRadius: 60,
        }} /> */}
        <Icon name="md-contact" style={{ color: 'white', fontSize: 80}} />
      </View>
      <ScrollView >
        <DrawerItems {...props} />
      </ScrollView>
    </SafeAreaView>

  );
}

const DrawerNavigator = createDrawerNavigator({
  Home: { screen: RepositoryListView },
  Camera: { screen: Camera, }
}, {
    contentComponent: CustomDrawerComponent
  })

const DrawerContainer = createAppContainer(DrawerNavigator);



export default class MainApp extends Component {

  componentDidMount() {
    this.requestStoragePermission()
  }

  async requestStoragePermission() {
   
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          'title': 'Phone Storage Permission',
          'message': 'i2 needs access to your storage ' +
            'so you can download files.'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED || Platform.Version <= 22) {
        

      } else {
        
        Alert.alert(
          'Please allow storage access',
          'Go to app setting and enable storage permission',
          
        );
      }
    } catch (err) {
      console.warn(err)
    }
  }
  render() {
    return (
      <DrawerContainer />
    );
  }
}