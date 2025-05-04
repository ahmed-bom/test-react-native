import React, { useState } from 'react';
import DynamicContainer from '../components1/DynamicContainer';
import DynamicInput from '../components1/DynamicInput';
import DynamicButton from '../components1/DynamicButton';


import { StyleSheet, Dimensions, View } from 'react-native';
const {width} = Dimensions.get('window');
export const isSmallScreen = width < 500;


export default function DynamicForm(props) {
    const [inputs_list, setInternal_inputs] = useState(props.form.inputs || []);
    const [buttons_list, setInternal_buttons] = useState(props.form.buttons || []);

    const handleInputChange = (index, text) => {
        const updatedInputs = inputs_list.map((input, i) =>
            i === index ? { ...input, value: text } : input
        );
        setInternal_inputs(updatedInputs);
    };

    const handlePickerChange = (index, itemValue) => {
        const updatedInputs = inputs_list.map((input, i) =>
            i === index ? { ...input, value: itemValue } : input
        );
        setInternal_inputs(updatedInputs);
    };

    const inputs = () => {
        return inputs_list.map((input, i) => (
            <DynamicInput
                key={i}
                label={input.name}
                type={input.type}
                items={input.items}
                value={input.value}
                onChangeText={(text) => handleInputChange(i, text)}
                onValueChange={(itemValue) => handlePickerChange(i, itemValue)}
            />
        ));
    };

    const buttons = () => {
        return buttons_list.map((type, i) => (
            <DynamicButton
                key={i}
                type={type}
                onPress={() => onPress_button(type)}
            />
        ));
    };

    const onPress_button = (type) => {
        switch (type) {
            case "Réinitialiser":
                return () => {
                    const resetInputs = inputs_list.map(input => ({ ...input, value: "" }));
                    setInternal_inputs(resetInputs);
                };

            case "Ajouter":
                return () => {
                    console.log(inputs_list);
                };
            case "Retour":
                return () => {};
            case "Enregistrer":
                return () => {
                    console.log(inputs_list);
                };
            case "Valider":
                return () => {
                    console.log(inputs_list);
                };
            default:
                return () => {
                    console.log(`no typ: ${type}`);
                };
        }
    };

    return (
        <DynamicContainer label={props.form.name}>
            <View style={[styles.container,{justifyContent: isSmallScreen ? 'center' : 'center'}]}>
                {inputs()}
            </View>
            <View style={[styles.container,{justifyContent: isSmallScreen ? 'center' : 'end'}]}>
                {buttons()}
            </View>
        </DynamicContainer>
    );
}





const styles = StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingVertical: isSmallScreen ? 20 : 25,
    },
});