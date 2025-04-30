import { View, Text, TouchableOpacity,StyleSheet, Dimensions} from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('window');
export const isSmallScreen = width < 500;


export default function DynamicButton(props) {

    let style_button = {}
    let style_text = {}
    let text = "no type"
   
    
    switch (props.type) {
        case "Réinitialiser":
            style_button = styles.renitialiserButton;
            style_text = styles.renitialiserButtonText 
            text = "Réinitialiser";
        break;
        case "Ajouter":
            style_button = styles.ajouterButton
            style_text = styles.ajouterButtonText
            text = "Ajouter"
        break;
        case "Retour":
            style_button = styles.retourButton
            style_text = styles.retourButtonText
            text = "Retour"        
            break;
        case "Enregistrer":
            style_button = styles.enregistrerButton
            style_text = styles.enregistrerButtonText
            text = "Enregistrer"
        break;
        case "Valider":
            style_button = styles.validerButton
            style_text = styles.validerButtonText
            text = "Valider"
            break;             
    }



  return (
        <TouchableOpacity style={style_button} onPress={props.onPress}>
            { props.children }
            <Text style={style_text}>{text}</Text>
        </TouchableOpacity>
    )
}








































const styles = StyleSheet.create({
        renitialiserButton: {
        backgroundColor: '#f9e79f', // لون مشابه لزر "Réinitialiser" في الصورة
        paddingHorizontal: isSmallScreen ? 10 : 15,
        paddingVertical: isSmallScreen ? 8 : 10,
        borderRadius: 4,
        marginRight: 8,
        },
        renitialiserButtonText: {
            marginHorizontal: isSmallScreen ? 5 : 7,
            fontSize: isSmallScreen ? 14 : 16,
            color: 'black',
        },

        ajouterButton: {
            backgroundColor: "#60B5FF", // استخدام اللون الأزرق الفاتح الجديد
            paddingHorizontal: isSmallScreen ? 10 : 15,
            paddingVertical: isSmallScreen ? 8 : 10,
            borderRadius: 4,
        },
        ajouterButtonText: {
            marginHorizontal: isSmallScreen ? 5 : 7,
            fontSize: isSmallScreen ? 14 : 16,
            color: 'white',
        },

        retourButton: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#f0f0f0', // لون رمادي فاتح لزر "Retour"
            paddingHorizontal: isSmallScreen ? 10 : 15,
            paddingVertical: isSmallScreen ? 8 : 10,
            borderRadius: 4,
        },
        retourButtonText: {
            marginHorizontal: isSmallScreen ? 5 : 7,
            fontSize: isSmallScreen ? 14 : 16,
            color: 'black',
        },

        validerButton: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#2ecc71', // استخدام اللون الأخضر الفاتح الجديد
            paddingHorizontal: isSmallScreen ? 10 : 15,
            paddingVertical: isSmallScreen ? 8 : 10,
            borderRadius: 4,
        },
        validerButtonText: {
            marginHorizontal: isSmallScreen ? 5 : 7,
            fontSize: isSmallScreen ? 14 : 16,
            color: 'white',
        },

        deleteButton: {
            // ===========================
            backgroundColor: '#FF0000', // استخدام اللون الأحمر الفاتح لزر الحذف
            borderRadius: 4,
            padding: 6,
        },
        deleteButtonText: {
            marginHorizontal: isSmallScreen ? 5 : 7,
            fontSize: isSmallScreen ? 14 : 16,
            color: 'white',
        },

        editButton: {
            // =======================
            backgroundColor: '#f1c40f', // لون أصفر فاتح لزر التعديل (تقديري)
            borderRadius: 4,
            padding: 6,
            marginRight: 5,
        },
        editButtonText: {
            marginHorizontal: isSmallScreen ? 5 : 7,
            fontSize: isSmallScreen ? 14 : 16,
            color: 'black',
        },

        enregistrerButton: {
            backgroundColor: '#f39c12', // استخدام اللون البرتقالي الفاتح الجديد
            paddingHorizontal: isSmallScreen ? 10 : 15,
            paddingVertical: isSmallScreen ? 8 : 10,
            borderRadius: 4,
        },
        enregistrerButtonText:{
            marginHorizontal: isSmallScreen ? 5 : 7,
            fontSize: isSmallScreen ? 14 : 16,
            color: 'white',
        }

})