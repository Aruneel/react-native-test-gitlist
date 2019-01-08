import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Root } from 'native-base';
import CameraScreen from './cameraScreen';
import Preview from './PreviewImage';
import Header from './../../components/headerview/header';

const AppNavigator = createStackNavigator(
    {
        CameraScreen: { screen: CameraScreen, navigationOptions:({navigate}) =>{
                header: <Header
                isbackVisible={false}
                isNotificationIconVisible={true}
                navigate = {navigate}
              />
            }
        },

        PreviewScreen: { screen: Preview, },
    },
    {
        initialRouteName: "CameraScreen",
        headerMode: "none",
        navigationOptions: {
            gesturesEnabled: false,
        }
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class Camera extends Component {
    render() {
        console.log('main props---->', this.props.navigation)
        return (
            <Root>
                <AppContainer screenProps={this.props.navigation}/>
            </Root>
        )
    }
}