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
} from 'react-native';

import {
    Button,
    Icon,
  }from 'react-native-elements';

import {
  ViroVRSceneNavigator,
  ViroARSceneNavigator
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
      navigatorType : defaultNavigatorType,
      viroApiKey : viroApiKey
    }
    //this._exitViro = this._exitViro.bind(this);
  }

  // Replace this function with the contents of _getVRNavigator() or _getARNavigator()
  // if you are building a specific type of experience.
  render() {
    return(
        <View style={{height:'100%', width:'100%'}}>
            <View style={{position:'absolute', bottom:10, right:10}}>
                <Icon
                    raised
                    name='camera'
                    type='font-awesome'
                    color='#f50'
                    onPress={null} />
            </View>
            <View
                style={{position:'absolute', bottom:10, right:10, width:20,height:20, backgroundColor:'#fff'}}
                onPress={null} >

            </View>
          <ViroARSceneNavigator apiKey={viroApiKey}
          style={{position: 'absolute', height:'100%', width:'100%'}}
          initialScene={{scene: InitialARScene}} />
        </View>
    )
  }
}
