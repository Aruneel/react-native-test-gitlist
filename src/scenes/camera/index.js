import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Root } from 'native-base';
import CameraScreen from './cameraScreen';
import Preview from './PreviewImage';

const AppNavigator = createStackNavigator(
    {
        CameraScreen: { screen: CameraScreen },

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
        return (
            <Root>
                <AppContainer />
            </Root>
        )
    }
}