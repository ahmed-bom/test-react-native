
import React, { useState, useEffect } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
// TODO date
import DynamicContainer from '../components1/DynamicContainer';
import DynamicInput from '../components1/DynamicInput';
import DynamicButton from '../components1/DynamicButton';
import DynamicLink from '../components1/DynamicLink';

import { StyleSheet, Dimensions, View} from 'react-native';


export default function DynamicForm(props) {

  const [inputs_list, set_inputs] = useState(props.form.inputs);
  const [errors, setErrors] = useState({});
  const buttons_list = props.form.buttons;


  useEffect(() => {
  	set_inputs(props.form.inputs);
    setErrors({})
  }, [props.form.inputs]);

  const handleInputChange = (index, value) => {
    const updatedInputs = inputs_list.map((input, i) =>
      i === index ? { ...input, value: value } : input
    );
    set_inputs(updatedInputs);
    setErrors(prevErrors => ({ ...prevErrors, [inputs_list[index].name]: undefined }));
  };


  const handlReinitialiser = (Value)=>{
    const cop_inputs_list = [...inputs_list]
    for (let i = 0; i < inputs_list.length; i++) {
      cop_inputs_list[i].value = '';
    }
    set_inputs(cop_inputs_list);
    setErrors({});
  };


  const get_inputs_value = () => {
    let inplist = {}
    inputs_list.map(input => ( inplist[input.name.replace(/ /g, "_")] = input.value ));
    return inplist
  };

  const validateInput = (input) => {
    if (!input.value) {
      return '*'
    }
    switch (input.type) {
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value)) {
          return 'email must contain @'
        }
        break;
  
      default:
        return undefined;
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};
    inputs_list.forEach(input => {
      const error = validateInput(input);
      if (error) {
        newErrors[input.name] = error;
        isValid = false; 
      }
    });
    setErrors(newErrors);
    return isValid;
  };


const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
const [selectedDateIndex, setSelectedDateIndex] = useState(null);

// Show the date picker
const showDatePicker = (index) => {
  setSelectedDateIndex(index);
  setDatePickerVisibility(true);
};

// Hide the date picker
const hideDatePicker = () => {
  setDatePickerVisibility(false);
  setSelectedDateIndex(null);
};

// Handle selected date
const handleConfirm = (date) => {
  const formattedDate = date.toISOString().split('T')[0]; // Format YYYY-MM-DD
  handleInputChange(selectedDateIndex, formattedDate);
  hideDatePicker();
};




const handlInputOnPress = (type, index) => {
  if (type === 'date') {
    showDatePicker(index);
  }
};


  const handlButtonOnPress = (type) => {

    let inputs 

    switch (type) {
      case 'se connecter':
      case "s'inscrire":
        if (!validateForm()) return null
        inputs = get_inputs_value()
        props.api_cole(type,type,'POST',inputs);
        break;
      case 'Rechercher':
        inputs = get_inputs_value()
        props.api_cole(type,"declarations/search/",'GET',inputs);
        break
      case 'Ajouter Éspeces':
        if (!validateForm()) return null
        inputs = get_inputs_value();
        props.api_cole("Ajouter Déclaration","declarations/",'POST',inputs);
      case 'Ajouter Déclaration':
      case "Enregistrer":
        props.nex_page()
        break
      case 'Ajouter':
        if (!validateForm()) return null
        inputs = get_inputs_value()
        props.api_cole('Ajouter Éspeces','especes/','POST',inputs);
        break
      case 'Réinitialiser':
        handlReinitialiser()
        break;

    
      default:
        console.log('-_-');
        break;
    }
  }
  const handlLinkOnPress = (type) => {
    switch (type) {
      case 'se connecter':
      case "s'inscrire":
        props.nex_page()
        break;
    
      default:
        console.log('o-o');
        break;
    }
  }

  const inputs = () => {
      return inputs_list.map((input, i) => (
        <DynamicInput
          key={i}
          label={input.name}
          type={input.type}
          items={input.items}
          internalValue={input.value}
          onChangeText={(text) => handleInputChange(i, text)}
          onPress={()=>handlInputOnPress(input.type,i)}
          error={errors[input.name]} 
        />
      ));
    };

  const buttons = () => {
    return buttons_list.map((type, i) => (
      <DynamicButton
        key={i}
        type={type}
        onPress={() => handlButtonOnPress(type)}
      />
    ));
  };

  const links = () => {
    if (props.form.Links !== undefined) {
      return props.form.Links.map((Item, i) => (
        <DynamicLink
          key={i}
          text={Item.text}onPresslink
          link={Item.link}
          onPress={() => handlLinkOnPress(Item.link)}
        />
      ));
    } else {
      return <></>;
    }
  };


  return (
    <DynamicContainer
      label={props.form.name}
      style={props.containerStyle}
    >
      <View style={styles.container}>
        {inputs()}
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
      <View style={styles.container}>
        {buttons()}
      </View>
      <View style={styles.container}>
        {links()}
      </View>
    </DynamicContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});