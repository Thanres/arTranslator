import { round } from 'mathjs'

let flagGER = require("../res/ger.png")
let flagEN = require("../res/eng.png")
let flagFR = require("../res/fr.png")
let flagESP = require("../res/esp.png")


import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Modal,
    Image,
    Alert
  } from 'react-native';
  import { Slider } from 'react-native-elements'

  import styles from '../res/styles'

export default class LanguagePicker extends Component {
    // Replace this function with the contents of _getVRNavigator() or _getARNavigator()
    // if you are building a specific type of experience.
    
    render() {
        return(
          <Modal
          animationType="slide"
          transparent={true}
          visible={this.props.modalVisibility}
          onRequestClose={() => {
            this.setState({
              modalVisibility : false
            })
          }}>
                <TouchableWithoutFeedback onPress={() => {this.props.hideModal()}}>
                    <View style={styles.languageContainerBack}>
                    </View>
                </TouchableWithoutFeedback>
                    <View style={[styles.languageContainer,{alignSelf:'center'}]}>
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity
                                style={styles.sizeFlagCont}
                                onPress={() => {
                                this.props.changelang('de')
                                }}>
                                <Image
                                style={styles.sizeFlag}
                                source={flagGER}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.sizeFlagCont}
                                onPress={() => {
                                this.props.changelang('en')
                                }}>
                                <Image
                                style={styles.sizeFlag}
                                source={flagEN}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.sizeFlagCont}
                                onPress={() => {
                                this.props.changelang('es')
                                }}>
                                <Image
                                style={styles.sizeFlag}
                                source={flagESP}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.sizeFlagCont}
                                onPress={() => {
                                this.props.changelang('fr')
                                }}>
                                <Image
                                style={styles.sizeFlag}
                                source={flagFR}
                                />
                            </TouchableOpacity>
                        </View>  
                        <View style={{flex: 1, width:'100%',paddingLeft:3,paddingRight:3, alignItems: 'stretch', justifyContent: 'center'}}>
                            <Slider
                                minimumValue={0.2}
                                maximumValue={1.5}
                                step = {0.1}
                                value={this.props.distance}
                                onValueChange={(value) => 
                                    {
                                        this.props.setTextDistance(value)
                                    }
                                } 
                                />
                            <Text>textdistance: {round(this.props.distance * 100) / 100}</Text>
                        </View>
                    </View>
        </Modal>
        )
    }
}