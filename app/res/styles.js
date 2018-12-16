import {StyleSheet} from 'react-native'

export default styles = StyleSheet.create({
    buttonOnScene: {
      borderRadius: 10,
      padding:3,
      position:'absolute',
      padding: 10,
      backgroundColor:'white'
    },
    viroText: {
        fontFamily: 'Arial',
        fontSize: 10,
        color: '#ffffff',
        textAlignVertical: 'center',
        textAlign: 'center'  
      },
    languageContainer: {
        alignItems:'center', 
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        backgroundColor:'white',
        position:'absolute',
        padding:5,
        bottom:0

    },
    sizeFlag: {
        width: 40, 
        height: 30,
    },
    sizeFlagCont :{
        width: 40, 
        height: 30,
        margin:5,
    },
    languageContainerBack:{
        width:'100%', 
        height:'100%', 
        alignItems:'center'
    }
  });