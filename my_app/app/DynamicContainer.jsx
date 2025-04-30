import { View, Text } from 'react-native'
import React from 'react'

import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export const isSmallScreen = width < 500;

export default function DynamicContainer(props) {

  return (
    <View style={styles.Container}>
            <Text style={styles.ContainerTitre}>{props.label}</Text>
            <View style={styles.Containerbody}>
                { props.children }
            </View>
    </View>
  )
}






































export const styles = StyleSheet.create({

  Container: {
    width: "100%",
    paddingHorizontal:isSmallScreen ? 10 : 15,
    marginVertical:isSmallScreen ? 25 : 30,
  },

  ContainerTitre: {
      paddingVertical: isSmallScreen ? 10 : 12,
      textAlign: 'center',
      backgroundColor: 'rgb(240, 238, 255)', 
      borderRadius: 8,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      fontSize: isSmallScreen ? 16 : 18,
      fontWeight: 'bold',
      color: "black", 
      borderWidth: 1,
      borderBottomWidth: 0,
  },
  Containerbody: {
      backgroundColor: "white", 
      borderRadius: 8,
      borderTopLeftRadius: 0,
      borderTopRightRadius:0,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: isSmallScreen ? 'center' : 'space-between',
      paddingVertical: isSmallScreen ? 20 : 25,
      borderWidth: 1,
      borderTopWidth: 0,
  },

})
