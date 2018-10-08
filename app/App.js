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
let InitialARScene = require('../js/HelloWorldSceneAR');

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text : "click",
    };
    this.takephoto = this.takephoto.bind(this)
  }

  // Replace this function with the contents of _getVRNavigator() or _getARNavigator()
  // if you are building a specific type of experience.
  render() {
    return(
        <View style={{height:'100%', width:'100%'}}>
            <View style={{height:28}}/>
            <Button title={this.state.text} onPress={()=>this.takephoto()}/>
            <ViroARSceneNavigator apiKey={viroApiKey}
                ref='sceneNavigator'
                style={{position: 'absolute', height:'100%', width:'100%'}}
                initialScene={{scene: InitialARScene}} />
        </View>
    )
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
