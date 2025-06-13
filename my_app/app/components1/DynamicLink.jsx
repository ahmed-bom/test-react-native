import {Text,View,TouchableOpacity,StyleSheet,Dimensions} from 'react-native'
import React from 'react'

const {width} = Dimensions.get('window');
export const isSmallScreen = width < 500;

export default function DynamicLink(props) {

  return (
    <View style={styles.container}>
        <Text>
            {props.text}
        </Text>
        <TouchableOpacity 
            onPress={props.onPress}
            key={props.key}
        >
            <Text style={styles.link}>{props.link}</Text>
        </TouchableOpacity>
    </View>
  )
}















const styles = StyleSheet.create({
    link:{
        marginHorizontal: 3,
        color: 'rgb(74, 158, 255)',
        fontWeight: 'bold',
    },
    container: {
        marginVertical:10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
})