'use strict';

import React, { Component } from 'react';

import {StyleSheet, Alert} from 'react-native';
import styles from '../res/styles'

import {
  ViroImage,
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroButton,
  ViroFlexView
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
          <ViroFlexView
          position={this.data.textPosition}
          rotation={this.data.textRotation}
          backgroundColor='rgba(255, 255, 255, 1.0)'
          visible={this.data.labelVisibility}
          height={-1.1}
          >
            <ViroText 
                //position={this.data.textPosition}
                //rotation={this.data.textRotation}
                text={this.data.text}
                width={3}
                visible={this.data.labelVisibility}
                style={styles.viroText}
            />
          </ViroFlexView>
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


var styleText = StyleSheet.create({
  viroText: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

module.exports = Scene;
