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
  ActivityIndicator
} from 'react-native';

import styles from './res/styles'

import LanguagePicker from './components/languagePicker'


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
      text : "",
      lang : 'de',
      labelVisibility : true,
      modalVisibility : false,
      textPosition : [0, 0, -3],
      textRotation : [0, 0, 0],
      distance : 1
    };
    this.takephoto = this.takephoto.bind(this),
    this.changelang = this.changelang.bind(this)
    this.hideModal = this.hideModal.bind(this)
    this.translate = this.translate.bind(this)
    this.setTextDistance = this.setTextDistance.bind(this)
    this.translate = this.translate.bind(this)
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
            <TouchableOpacity style={[styles.buttonOnScene, {left:10, top:10}]} onPress={
              () => 
              this.setState({
                modalVisibility : true
              })}>
              <Text>settings</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.buttonOnScene, {right:10, top:10}]} 
            onPress={
              () => this.takephoto()
            }><Text>take photo</Text></TouchableOpacity>
          <LanguagePicker {...this.state} changelang = {this.changelang} setTextDistance = {this.setTextDistance} hideModal = {this.hideModal}/>
          { this.props.labels.isLoading ?  <View style={{height:'100%', width:'100%',position:'absolute',justifyContent:'center', alignItems:'center'}}><ActivityIndicator size="large" color="#0000ff" /></View> : null}                    
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
    if (this.state.text != "")
      this.translate()
  }

  setTextDistance(value){
    this.setState({
      distance : value,
    })
  }

  takephoto(){
    this.props.references.arScene.getCameraOrientationAsync().then((result)=>{
      objPos = getLabelPosition(result.position,result.forward,1)
      this.setState({
        textPosition : objPos,
        textRotation : result.rotation,
        labelVisibility: false
      })
    })
    //takescreenshot-then(apiaufruf)-then(setstate)  --> 'file://' + temp.url
    this.props.references.arNav.takeScreenshot('name',false).then((temp) =>
      {
        //apiaufruf durch thunk
        this.props.vision('file://' + temp.url).then( () =>
        {
          if(this.state.lang != "en") // checks if translation is needed
          this.translate()
          else{
            this.setState(
              {
                text : this.props.labels.enLabel,
                labelVisibility : true    
              })
          }
        })
      }
    )
  }

  translate(){
    this.props.translation(this.props.labels.enLabel,this.state.lang).then( () =>
      {
        this.setState(
          {
            text : this.state.lang != 'en' ? this.props.translations.translated.transLabel.translatedLabel : this.props.labels.enLabel,
            labelVisibility : true    
          })
      }
    )
  }
}
