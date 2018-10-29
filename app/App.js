/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
  TouchableOpacity,
  Alert
} from 'react-native';

import {
    Button,
    Icon,
  }from 'react-native-elements';

import {
  ViroVRSceneNavigator,
  ViroARSceneNavigator,
} from 'react-viro';

import {viroApiKey} from "./api/apiKeys"

//default Navigatortype
let UNSET = "UNSET";
let defaultNavigatorType = UNSET;
let InitialARScene = require('./scenes/Scene');

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text : "click",
      lang : 'DE'
    };
    this.takephoto = this.takephoto.bind(this),
    this.changelang = this.changelang.bind(this)
  }

  onDeleteBTN = () => {
    this.alert('OnDelete')
  }
  // Replace this function with the contents of _getVRNavigator() or _getARNavigator()
  // if you are building a specific type of experience.
  render() {
    return(
        <View style={{height:'100%', width:'100%'}}>
            <ViroARSceneNavigator apiKey={viroApiKey}
                ref='sceneNavigator'
                style={{position: 'absolute',height:'100%', width:'100%',top:30}}
                initialScene={{scene: InitialARScene}} />
            <TouchableOpacity style={{position:'absolute',height:100, width:100, backgroundColor:'white'}} onPress={
              () => Alert.alert(
                'select language',
                '',
                [
                  {text: 'DE', onPress: () => this.changelang('DE')},
                  {text: 'EN', onPress: () => this.changelang('EN')},
                  {text: 'ESP', onPress: () => this.changelang('ESP')},
                ],
                { cancelable: false }
            )}><Text>{this.state.lang}</Text><Text>{this.state.lang}</Text><Text>{this.state.lang}</Text><Text>{this.state.lang}</Text></TouchableOpacity>
        </View>
    )
  }

  changelang(lang){
    this.setState({
      ...this.state,
      lang : lang
    })
    this.state.lang = lang;
    console.warn(this.state.lang)
  }
  takephoto() {
    console.log(this.refs.sceneNavigator)
    /*
      this.refs.sceneNavigator.current.takeScreenshot('name',false).then((temp) =>
        {this.setState({
          navigator : this.state.navigator,
          text : temp.url,
          uri : {uri: 'file://' + temp.url}//temp.url
        })
        console.warn(this.state.text);}
      );*/
  }

}
