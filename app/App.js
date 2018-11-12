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
      textPosition : [0, 0, -3],
      textRotation : [0, 0, 0]
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
                viroAppProps = {{...this.props, ...this.state}}
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
            )}><Text>{this.state.text}</Text><Text>{this.state.text}</Text></TouchableOpacity>
            <TouchableOpacity style={{position:'absolute',height:100, width:100, right:0, backgroundColor:'white'}} 
            onPress={
              () => this.takephoto()
            }
            >
              </TouchableOpacity>
        </View>
    )
  }

  //functions

  changelang(lang){
    this.props.references.arScene.getCameraOrientationAsync().then((result)=>{
      console.warn(result.rotation)
      objPos = getLabelPosition(result.position,result.rotation,1)
      this.setState({
        textPosition : objPos,
        textRotation : result.rotation
      })
    })
    this.setState({
      lang : lang
    })
    this.state.lang = lang;
    this.props.changeLanguage(lang)
  }

  takephoto(){
    this.setState({labelVisibility:false})
    //takescreenshot-then(apiaufruf)-then(setstate)  --> 'file://' + temp.url
    this.props.references.arNav.takeScreenshot('name',false).then((temp) =>
      {
        //apiaufruf durch thunk
        this.props.vision('file://' + temp.url).then(
          (result) => {
            console.warn("worked")
            console.warn(JSON.stringify(result))
            this.setState(
              {
              text : JSON.stringify(result),
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
