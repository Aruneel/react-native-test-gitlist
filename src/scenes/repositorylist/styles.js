import React, { StyleSheet } from 'react-native';
import color from "../../theme/colors";
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.white
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height: 120,
        width: 120,
        marginTop: 30
    },
    title: {
        color: color.gray700,
        marginTop: 20,
        marginBottom: 20,
        width: 140,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '100'
    },
    loginFormContainer: {
        padding: 20,
        marginRight: 20,
        marginLeft: 20
    },
     input: {
        height: 40,
         backgroundColor: '#EBEBEB',
         marginBottom: 20,
         color: '#000',
         paddingHorizontal: 10,
         borderRadius: 6
     },
     buttonContainer: {
         backgroundColor: color.colorPrimaryDark,
         paddingVertical: 12,
         borderRadius: 10,
         borderWidth: 1,
         borderColor: '#FFF',
     },
     buttonText: {
         textAlign: 'center',
         color: "#FFF",
         fontWeight: '700',
         fontSize: 16
     },
     forgotPasswordText: {
       color: color.gray600,
       textAlign: 'center',
       padding: 20,
       fontWeight: '200'
     }
});

export default styles;