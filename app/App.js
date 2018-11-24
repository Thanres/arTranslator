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
  Alert,
} from 'react-native';

import styles from './res/styles'

import LanguagePicker from './components/languagePicker'

import {
    Button,
    Icon,
  }from 'react-native-elements';

import {
  ViroVRSceneNavigator,
  ViroARSceneNavigator,
} from 'react-viro';

import { getLabelPosition } from './functions/sceneHandler'

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
      lang : 'DE',
      labelVisibility : true,
      modalVisibility : false,
      textPosition : [0, 0, -3],
      textRotation : [0, 0, 0]
    };
    this.takephoto = this.takephoto.bind(this),
    this.changelang = this.changelang.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }

  onDeleteBTN = () => {
    this.alert('OnDelete')
  }
  // Replace this function with the contents of _getVRNavigator() or _getARNavigator()
  // if you are building a specific type of experience.
  render() {
    return(
        <View style={{height:'100%', width:'100%', marginTop: 24}}>
            <ViroARSceneNavigator apiKey={viroApiKey}
                viroAppProps = {{...this.props, ...this.state}}
                ref='sceneNavigator'
                style={{position: 'absolute',height:'100%', width:'100%',top:30}}
                initialScene={{scene: InitialARScene}} />
            <TouchableOpacity style={[styles.buttonOnScene, {left:10, top:10}]} onPress={
              () => 
              this.setState({
                modalVisibility : true
              })}>
              <Text>change language</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.buttonOnScene, {right:10, top:10}]} 
            onPress={
              () => this.takephoto()
            }><Text>take photo</Text></TouchableOpacity>
          <LanguagePicker {...this.state} changelang = {this.changelang} hideModal = {this.hideModal}/>
          
        </View>
    )
  }

  //functions

  hideModal(){
    this.setState({
      modalVisibility : false 
    })
  }

  changelang(lang){
    this.setState({
      lang : lang,
      modalVisibility : false
    })
    this.props.changeLanguage(lang)
  }

  takephoto(){
    this.props.references.arScene.getCameraOrientationAsync().then((result)=>{
      objPos = getLabelPosition(result.position,result.forward,3)
      this.setState({
        textPosition : objPos,
        textRotation : result.rotation,
        labelVisibility:false
      })
    })
    //takescreenshot-then(apiaufruf)-then(setstate)  --> 'file://' + temp.url
    this.props.references.arNav.takeScreenshot('name',false).then((temp) =>
      {
        //apiaufruf durch thunk
        this.props.vision('file://' + temp.url).then((result) => {
            console.warn("worked")
            console.warn(result)
            this.setState(
              {
              text : result,
              uri : {uri: 'file://' + temp.url}, //temp.url
              labelVisibility : true
              }
            )
          }
        )
      }

    )
  }
}
