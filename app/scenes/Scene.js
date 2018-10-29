'use strict';

import React, { Component } from 'react';

import {StyleSheet, Alert} from 'react-native';

import {
  ViroImage,
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroButton,
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "leer",
      uri : require("./res/button_base.png")
    };
    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
          <ViroImage
              position={[0, 0, -3]}
              source={this.state.uri}
          />
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      /*this.props.sceneNavigator.takeScreenshot('name',false).then((temp) =>
        {this.setState({
          text : temp.url,
          uri : {uri: 'file://' + temp.url}//temp.url
        })
        console.warn(this.state.text);},
      );*/
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

module.exports = HelloWorldSceneAR;