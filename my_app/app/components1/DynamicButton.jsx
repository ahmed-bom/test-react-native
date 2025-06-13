import {Text,TouchableOpacity,StyleSheet,Dimensions} from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

const {width} = Dimensions.get('window');
export const isSmallScreen = width < 500;


export default function DynamicButton(props) {

    let button_color 
    let text_color 
    let text 
    let icon 
   
    
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

        case "Enregistrer":
            button_color = 'rgb(226, 87, 0)'
            text_color = 'white';
            text = props.type
        break;
        case "Valider":
            button_color = 'rgb(0, 187, 44)'
            text_color = 'white';
            text = props.type
            icon  = false
            break;  
        case "Rechercher":
            button_color = 'rgb(74, 165, 255)'
            text_color = 'white';
            text = props.type
            icon = "zoom-in"
            break
        case "login":
        case "signup":
            button_color = 'rgb(74, 165, 255)'
            text_color = 'white';
            text = props.type
            icon  = false
            break
        default:
            button_color = 'rgb(77, 104, 255)'
            text_color = 'white';
            text = props.type
            icon  = false
            break;

    }



  return (
        <TouchableOpacity 
            style=  {[
                        styles.button,
                        {
                            backgroundColor: props.button_color ? props.button_color : button_color
                        }
                    ]} 

            onPress={props.onPress}
            key={props.key}
        >
            {
                icon && 
                    <Feather 
                        name={icon} 
                        size={20} 
                        color={
                            props.text_color ? props.text_color : text_color
                        } 
                    />
            }

            <Text style={[
                            styles.buttonText,
                            {color:  props.text_color ? props.text_color : text_color}
                        ]}
            >
                
                {
                    props.text ? props.text : text
                }

            </Text>
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