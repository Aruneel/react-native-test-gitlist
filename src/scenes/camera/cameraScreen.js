import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    ActivityIndicator

} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Icon } from 'native-base';
import Header from '../../components/headerview/header'
import colors from '../../theme/colors';

export default class CameraScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cameraType: 'back',
            showLoader: false,
        }

    }

    showLoader() {
        if (this.state.showLoader) {
            return (
                <View style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    opacity: 0.75,
                    backgroundColor: colours.lightgray,
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 4
                }}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
    }


    takePicture = async function () {
        if (this.camera) {
            this.setState({ showLoader: true })
            const options = { quality: 0.5, base64: true, fixOrientation: true };
            const data = await this.camera.takePictureAsync(options)
                .then(
                    data => {
                        this.setState({ showLoader: false })
                        this.props.navigation.navigate('PreviewScreen', { uri: data.uri,});
                    }
                )
            console.log(data.uri);
        }
    };

    render() {

        return (

            <View style={{ flex: 1, }} >
                <Header
                    isbackVisible={false}
                    isNotificationIconVisible={true}
                />

                <ScrollView style={{ flex: 1, margin: 5, }}>
                    <View style={styles.container}>
                        <RNCamera
                            ref={ref => {
                                this.camera = ref;
                            }}
                            style={styles.preview}
                            type={this.state.cameraType}//{RNCamera.Constants.Type.back}
                            flashMode={RNCamera.Constants.FlashMode.off}
                            orientation={'portrait'}
                            captureQuality="medium"
                            aspect='fill'
                            fixOrientation={true}
                            playSoundOnCapture={true}
                            permissionDialogTitle={'Permission to use camera'}
                            permissionDialogMessage={'We need your permission to use your camera phone'}
                            onGoogleVisionBarcodesDetected={({ barcodes }) => {
                                console.log(barcodes)
                            }}
                        />
                       
                    </View>
                    <View style={{ flex: 0, marginTop: 100, justifyContent: 'center', 
                    alignItems: 'center', }}>
                        <TouchableOpacity
                            onPress={this.takePicture.bind(this)}
                            style={{
                                height: 40, width: 160, justifyContent: 'center', alignItems: 'center',
                                backgroundColor: colors.colorPrimaryDark,
                                borderTopRightRadius: 7, borderBottomRightRadius: 7,
                                borderTopLeftRadius: 7, borderBottomLeftRadius: 7,
                            }}>
                            <Icon name="ios-camera" style={{ color: 'white', }} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    preview: {
        
        height: 300,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
    }
});