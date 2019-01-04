import React,{ StyleSheet } from 'react-native';
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;
import colours from "./colors"

const baseStyles = StyleSheet.create({
  horizontalCenter: {
    flex: 1,
    alignItems: "center"
  },
  horizontalRight: {
    flex: 1,
    alignItems: "flex-end"
  },
  centerParent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },
  horizontalLeftCenter :{
    flex: 1,
    justifyContent: 'center',
    alignItems: "flex-start"
  },
  horizontalRightCenter : {
    flex: 1,
    justifyContent: 'center',
    alignItems: "flex-end"
  },
  centerbottommuti : {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: "center",
    flexDirection: 'column'
  },
  deviderLine : {
    borderBottomColor: colours.verylightgray, 
    borderBottomWidth: 1,
    marginTop:5,
    marginBottom:5 
  },
  avoidingKeyboard: {
    flex: 1
  }
});

export default baseStyles;