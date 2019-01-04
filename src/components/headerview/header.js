
import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Platform } from 'react-native';
import { Icon } from 'native-base';

import colours from "../../theme/colors";

const Header = ({ onPress, onCreatePress, onSearchPress, getHeaderText, isbackVisible, isSerIconVisible, isCreateIconVisible, isNotificationIconVisible, onNotificationPress }) => {

    var marginTop = 0
    if (Platform.OS === 'ios') {
        marginTop = 15
    }
    return (
        <View style={[styles.imageContainer, { marginTop: marginTop }]}>
            <View style={{ height: 60, flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', 
                        justifyContent: 'flex-start', alignItems: "center", 
                        flex: 1, marginBottom: 5, padding: 10, paddingLeft: 15 }} >
                    {isbackVisible ? <Icon name='arrow-back' style={{ color: colours.black }} /> : <Icon name='md-menu' style={{ color: colours.lightgray }} />}
                    <Text style={styles.textStyle} > {getHeaderText} </Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "center", flex: 1, marginBottom: 5, padding: 10 }}>
                    <Icon name='logo-github' style={{ color: colours.lightgray, fontSize: 40 }} />
                </View>
                <TouchableOpacity style={{ 
                    alignItems: "flex-end", justifyContent: 'center', 
                    flex: 1, marginBottom: 5, padding: 10, paddingRight: 15}} >
                    {/* {isNotificationIconVisible && 
                    <TouchableOpacity onPress={onNotificationPress} style={{ alignItems: "flex-end", justifyContent: 'center', marginBottom: 5, padding: 10 }} > */}
                        <Icon name='ios-notifications' style={{ color: colours.lightgray }} />
                    {/* </TouchableOpacity>
                    } */}
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = {
    textStyle: {
        color: colours.black,
        fontWeight: 'bold',
        paddingLeft: 15,
        paddingTop: 2,
        fontSize: 18
    },
    imageContainer: {
        width: null,
        height: 60,
        backgroundColor: colours.colorPrimaryDark,
        // elevation: 5,
    }
};

export default Header;