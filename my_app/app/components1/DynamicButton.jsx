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
            button_color = "rgb(201, 32, 32)";
            text_color = 'white';
            icon = 'refresh-cw';
            text = props.type   
        break;
        case "Ajouter":
            button_color = 'rgb(52, 71, 177)'
            text_color = 'white';
            icon = "plus";
            text = props.type
        break;
        case"Sebmet":
            button_color = 'rgb(77, 104, 255)'
            text_color = 'white';
            text = props.type
            break;

        case "Retour":
            button_color = 'rgb(206, 206, 206)'
            text = '<- '+props.type      
            break;

        case "Next":
            button_color = 'rgb(206, 206, 206)'
            text = props.type+' ->'      
            break;
        case "Enregistrer":
            button_color = 'rgb(0, 72, 255)'
            text_color = 'white';
            icon = "download"
            text = props.type
        break;
        case "Valider":
            button_color = 'rgb(0, 187, 44)'
            text_color = 'white';
            text = props.type
            break;  
        case "Rechercher":
            button_color = 'rgb(74, 165, 255)'
            text_color = 'white';
            text = props.type
            icon = "zoom-in"
            break
        case "login":
            button_color = 'rgb(74, 165, 255)'
            text_color = 'white';
            text = props.type
        case "signup":
            button_color = 'rgb(74, 165, 255)'
            text_color = 'white';
            text = props.type

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