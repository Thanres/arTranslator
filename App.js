//!!SPÄTER LÖSCHEN!!

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
  ViroVRSceneNavigator,
  ViroARSceneNavigator
} from 'react-viro';

/*
 TODO: Insert your API key below
 */
var viroApiKey="BDCA63E3-55C3-4EA6-8D4E-E38C0466D952";

// Sets the default scene you want for AR and VR
var InitialARScene = require('./js/HelloWorldSceneAR');
var InitialVRScene = require('./js/HelloWorldScene');

//default Navigatortype
var UNSET = "UNSET";
var defaultNavigatorType = UNSET;

export default class ViroSample extends Component {
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
      <ViroARSceneNavigator viroApiKey
      initialScene={{scene: InitialARScene}} />
    )
  }
}

module.exports = ViroSample
