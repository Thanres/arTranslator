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

export default class Scene extends Component {

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
    this.data = this.props.sceneNavigator.viroAppProps
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} ref={(component)=>{this.arSceneRef = component}}>
          <ViroImage
              position={this.data.textPosition}
              rotation={this.data.textRotation}
              source={this.state.uri}
              visible={this.data.labelVisibility}
          />
          <ViroText 
              position={this.data.textPosition}
              rotation={this.data.textRotation}
              text={this.data.lang}
              visible={this.data.labelVisibility}
          />
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    this.props.sceneNavigator.viroAppProps.setARSceneRef(this.arSceneRef)
    this.props.sceneNavigator.viroAppProps.setARNavRef(this.props.sceneNavigator)
    if (state == ViroConstants.TRACKING_NORMAL) {
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

module.exports = Scene;
