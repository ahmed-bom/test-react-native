import {Text,TouchableOpacity,StyleSheet,Dimensions} from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

const {width} = Dimensions.get('window');
export const isSmallScreen = width < 500;


export default function DynamicButton(props) {

    let button_color = "rgb(255, 255, 255)"
    let text_color = 'black'
    let text = "no type"
    let icon = ''
   
    
    switch (props.type) {
        case "Réinitialiser":
            button_color = "rgb(255, 0, 0)";
            text_color = 'white';
            icon = 'refresh-cw';
            text = "Réinitialiser";    
        break;
        case "Ajouter":
            button_color = 'rgb(0, 0, 255)'
            text_color = 'white';
            icon = "plus";
            text = "Ajouter";
        break;
        case "Retour":
            button_color = 'rgb(206, 206, 206)'
            icon = "arrow-left";
            text = "Retour"        
            break;
        case "Enregistrer":
            button_color = 'rgb(0, 72, 255)'
            text_color = 'white';
            icon = "download"
            text = "Enregistrer"
        break;
        case "Valider":
            button_color = 'rgb(0, 187, 44)'
            text_color = 'white';
            icon = "check"
            text = "Valider"
            break;             
    }



  return (
        <TouchableOpacity 
            style={[styles.button,{backgroundColor: button_color}]} 
            onPress={props.onPress()}
            key={props.key}
        >
            {icon !== '' && 
                <Feather name={icon} size={20} color={text_color} />
            }
            <Text style={[styles.buttonText,{color: text_color}]}>{text}</Text>
        </TouchableOpacity>
    )
}









const styles = StyleSheet.create({
        button:{
            flexDirection: 'row',
            paddingHorizontal: isSmallScreen ? 10 : 15,
            paddingVertical: isSmallScreen ? 8 : 10,
            borderRadius: 4,
            margin: 8,
        },
        buttonText:{
            marginHorizontal: isSmallScreen ? 5 : 7,
            fontSize: isSmallScreen ? 14 : 16,
            padding:4,
        },
})