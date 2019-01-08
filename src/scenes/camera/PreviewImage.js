import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    Alert,
    CameraRoll
} from 'react-native';
import { Toast } from 'native-base';
import ImageResizer from 'react-native-image-resizer';
import ImagePicker from 'react-native-image-crop-picker';


var imageUri = '';

class PreviewImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cameraType: 'back',
            mirrorMode: false,
            resizedImageUri: "",
            croppedHeight: 0,
            croppedWidth: 0,
        };
    }

    componentDidMount() {
        const { params } = this.props.navigation.state;
        imageUri = params ? params.uri : null;

        ImagePicker.openCropper({
            path: imageUri,
            width: 300,
            height: 400,

        }).then(image => {
            this.setState({ croppedHeight: image.cropRect.y || image.cropRect.height, croppedWidth: image.cropRect.x || image.cropRect.width })
            this._onPressResizePhoto(image.path)


        })
            .catch(err => {
                this.props.navigation.navigate('CameraScreen')
            })
    }


    _onPressResizePhoto(imageUri) {
        ImageResizer.createResizedImage(imageUri, this.state.croppedWidth, this.state.croppedHeight, 'JPEG', 100)
            .then(res => {
                
                this.setState({
                    resizedImageUri: res.uri,
                });
            })
            .catch(err => {
                
                return Alert.alert('Unable to resize the photo', 'Check the console for full the error message');
            });
    }

    _saveResizedPhoto() {
        CameraRoll.saveToCameraRoll(this.state.resizedImageUri)
            .then(() => {
                console.log('Success', 'Photo added to camera roll!')
                Toast.show({
                    text: "Saved!",
                    buttonText: "Okay",
                    duration: 3000
                })
                this.props.navigation.navigate('CameraScreen')
            }
            )
            .catch(err => console.log('err:', err))
    }


    render() {
        return (
            <View style={styles.container}>
                {this.state.resizedImageUri ? (
                    <Image style={styles.preview} source={{ uri: this.state.resizedImageUri }} />
                ) :
                    null
                }
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>

                    <View style={{ justifyContent: 'center', }}>
                        <TouchableOpacity
                            onPress={this._saveResizedPhoto.bind(this)}
                            style={styles.capture}
                        >
                            <Text style={{ fontSize: 14, color: '#fff' }}> Save Photo </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', }}>
                        <TouchableOpacity style={styles.switchCamera} onPress={() => this.props.navigation.goBack()}>
                            <Text style={{ fontSize: 14, color: '#fff' }}> Cancel </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        );
    }

    changeCameraType() {
        if (this.state.cameraType === 'back') {
            this.setState({
                cameraType: 'front',
                mirrorMode: true
            });
        } else {
            this.setState({
                cameraType: 'back',
                mirrorMode: false
            });
        }
    }

    takePicture = async function () {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options)
        }
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    preview: {
        flex: 0.95,
        bottom: 0,
        top: 30,
        justifyContent: 'flex-end',
        alignItems: 'center',
        resizeMode: 'contain',
        borderColor: '#fff',
        borderWidth: 1,
    },
    capture: {
        padding: 10,
        paddingHorizontal: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        margin: 15
    },
    switchCamera: {
        flex: 0,
        padding: 10,
        margin: 20,
        justifyContent: 'flex-end'
    }
});

export default PreviewImage;