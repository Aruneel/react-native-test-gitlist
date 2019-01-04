import React, { Component } from 'react';
import {
    View,
    TextInput,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    FlatList,
    Keyboard

} from 'react-native';
import { Icon } from 'native-base';
import { connect } from 'react-redux';
import { getGitData, resetGetGitData } from '../../actions/ApiActions';
import colors from '../../theme/colors';

var datas = []

class ListView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyBoardUp: false,
            searchText: "",
            searchedArray: [],
            isSearched: false,
        }

    }

    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));

        this.props.getGitData()
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
        NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);

    }

    _keyboardDidShow() {
        //alert('Keyboard Shown');
        this.setState({ keyBoardUp: true })
    }

    _keyboardDidHide() {
        //alert('Keyboard Hidden');
        this.setState({ keyBoardUp: false })
    }

    onPressSearch() {
        Keyboard.dismiss()
        var arrEle = this.state.searchText
        var newArray = []
        if (this.state.searchText.trim().length !== 0) {
            var newArray = this.props.gitData.filter(function (el) {
                return el.name.trim().toLowerCase().includes(arrEle.trim().toLowerCase())
            });

            this.setState({ isSearched: true, searchedArray: newArray, })
        } else {
            this.setState({ isSearched: true, searchedArray: this.props.gitData, })
        }
    }


    renderRowAtIndex(item, index) {
        var circleColor = "#ffd119"
        if (item.stargazers_count === 0) {
            circleColor = "orange"
        }
        return (
            <TouchableWithoutFeedback>
                <View style={{ flex: 1 }}>
                    <View style={{ height: 120, flexDirection: 'row', marginTop: 15, marginBottom: 15 }}>
                        <View style={{ flex: 0.1, alignItems: 'center', }}>
                            {/* <Text style = {{margin:2,}}>hi</Text> */}
                            <Icon name="md-bookmarks" style={{ color: 'grey', marginTop: 10, marginLeft: 3 }} />
                        </View>
                        <View style={{ flex: 0.9, }}>
                            <View
                                style={{ flex: 1, margin: 2, flexDirection: 'row', alignItems: 'center' }}
                            >
                                <Text numberOfLines={2}
                                    style={{ color: '#1975ff', fontSize: 18, }}
                                >{item.owner.login}/</Text>
                                <Text numberOfLines={2}
                                    style={{ color: '#1975ff', fontSize: 18, fontWeight: '500' }}
                                >{item.name}</Text>
                            </View>
                            <View
                                style={{ flex: 1, margin: 2, justifyContent: 'center' }}
                            >
                                <Text numberOfLines={2}
                                    style={{ color: 'black', fontSize: 18 }}
                                >{item.description}</Text>
                            </View>
                            <View
                                style={{ flex: 1, margin: 2, flexDirection: 'row', alignItems: 'center' }}
                            >
                                <Icon name="ios-star" style={{ color: 'grey', }} />
                                <Text style={{ marginLeft: 5, fontSize: 18 }}>{item.stargazers_count}</Text>

                                <View style={{
                                    marginLeft: 20,
                                    height: 20, width: 20, borderRadius: 20,
                                    backgroundColor: circleColor
                                }}></View>
                                <Text style={{ marginLeft: 5, fontSize: 18 }}>{item.language}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#F7F7F7' }} />
                </View>
            </TouchableWithoutFeedback>
        );
    }

    render() {

        if (this.state.isSearched) {
            datas = this.state.searchedArray
        }
        else {
            datas = this.props.gitData
        }


        return (

            <View style={{ flex: 1, }} >
                <View style={{ flexDirection: 'row', borderRadius: 7, elevation: 2, marginTop: 30, marginLeft: 15, marginRight: 15 }}>
                    <View style={{ flex: 0.87, }}>
                        <TextInput
                            placeholder="Search Names"
                            style={{
                                height: 40, fontSize: 14, color: '#808080',
                                borderTopLeftRadius: 7, borderBottomLeftRadius: 7,
                                backgroundColor: 'white',
                                paddingLeft: 8,

                            }}
                            // editable={false}
                            value={this.state.searchText}
                            onChangeText={(value) => {
                                this.setState({ searchText: value })
                            }}
                            underlineColorAndroid="transparent"
                        />
                    </View>

                    <TouchableOpacity
                        onPress={this.onPressSearch.bind(this)}
                        style={{
                            flex: 0.13, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.colorPrimaryDark,
                            borderTopRightRadius: 7, borderBottomRightRadius: 7,
                        }}>
                        <Icon name="ios-search" style={{ color: 'white', }} />
                    </TouchableOpacity>
                </View>

                {datas.length !== 0 || !this.state.isSearched  ?
                    <FlatList
                        style={{ marginTop: 10, marginBottom: 5, paddingLeft: 15, paddingRight: 15 }}
                        data={datas}
                        keyExtractor={(item, index) => item.id}
                        key={({ item, index }) => item.id}
                        renderItem={({ item, index }) =>
                            this.renderRowAtIndex(item, index)
                        }
                    /> 
                    : 
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>No results Found.</Text>
                    </View>
                }
            </View>
        );
    }
}

const mapStateToProps = ({ githubReducer }) => {
    const { gitData, gitDataLoading, gitDataSuccess, error } = githubReducer;

    return {
        gitData, gitDataLoading, gitDataSuccess, error
    }
}

export default connect(mapStateToProps, { getGitData, resetGetGitData })(ListView);
