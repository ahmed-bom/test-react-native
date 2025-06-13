import {View,Text} from 'react-native'
import React from 'react'

import {StyleSheet,Dimensions} from 'react-native';
const { width} = Dimensions.get('window');
export const isSmallScreen = width < 500;

export default function DynamicContainer(props) {

  return (
    <View 
      style={styles.Container}
    >
      <Text style={styles.ContainerTitre}>{props.label}</Text>
      <View style={[styles.Containerbody,props.style]}>
          { props.children }
      </View>
    </View>
  )
}






export const styles = StyleSheet.create({

  Container: {
    width: isSmallScreen ?"100%":"80%",
    paddingHorizontal:isSmallScreen ? 0 : 15,
    marginVertical: 30,
  },
  scontainer:{
    width: isSmallScreen ?"100%":"33%",
    paddingHorizontal:isSmallScreen ? 10 : 15,
    marginVertical:isSmallScreen ? 25 : 30,
  },

  ContainerTitre: {
      paddingVertical: isSmallScreen ? 10 : 12,
      paddingHorizontal: isSmallScreen ? 0:100,
      textAlign: isSmallScreen ?'center':"left",
      paddingLeft: isSmallScreen? 0:20,
      backgroundColor: 'rgb(199, 232, 253)', 
      borderRadius: 8,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      fontSize: isSmallScreen ? 18 : 18,
      fontWeight: 'bold',
      color: "black", 
      borderWidth: isSmallScreen ? 1 : 2,
      borderBottomWidth: 0,
      borderColor:"rgb(164, 164, 164)",
  },
  Containerbody: {
      paddingVertical:isSmallScreen ? 10 : 15,
      backgroundColor: "white", 
      borderRadius: 8,
      borderTopLeftRadius: 0,
      borderTopRightRadius:0,
      flexDirection: 'row',
      flexWrap: 'wrap',
      borderWidth: isSmallScreen ? 1 : 2,
      borderTopWidth: 0,
      borderColor:"rgb(166, 166, 166)",
  },

})
