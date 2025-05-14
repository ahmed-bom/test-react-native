import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Feather } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const { width } = Dimensions.get('window');
export const isSmallScreen = width < 500;

const DynamicInput = (props) => {

  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState(props.value || '');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const isPicker = props.type === 'picker';
  const isDate = props.type === 'date';


  
  useEffect(() => {
    if (props.value !== internalValue) {
      setInternalValue(props.value || '');
    }
  }, [props.value]);


  const handleInputChange = (value) => {

    switch (props.type) {
      case 'picker':
        if (props.onValueChange) {props.onValueChange(value)}
        else{setInternalValue(value);}
        break;
      case 'date':
        if (props.onChangeText) {props.onChangeText(""+value.nativeEvent.timestamp)}
        else{setInternalValue(""+value.nativeEvent.timestamp);}
        setShowDatePicker(false);
        break;
      default:
        if (props.onChangeText) {props.onChangeText(value)}
        else{setInternalValue(value);}
        break;
    }
  };


  const renderPickerItems = () => {
    return props.items ? props.items.map((item, index) => (
      <Picker.Item key={index} label={item} value={item} />
    )) : null;
  };

  const handleFocus = () => {
    setIsFocused(true);  
    if (props.onFocus) {
      props.onFocus();
    }
    if (props.type == 'date') {
      setShowDatePicker(true);
    }
  };


  const handleBlur = () => {
    setIsFocused(false);
    if (props.onBlur) {
      props.onBlur();
    }
  };


  const handleClear = () => {
    setInternalValue('');
    if (props.onClear) {
      props.onClear();
    } else if (props.onChangeText) {
      props.onChangeText('');
    }
  };



  let keyboardType = 'default';
  let secureTextEntry = false;
  let autoCapitalize = 'sentences';
  let rightIcon = null;

  switch (props.type) {
    case 'email':
      keyboardType = 'email-address';
      autoCapitalize = 'none';
      rightIcon = 'mail';
      break;
    case 'password':
      secureTextEntry = true;
      autoCapitalize = 'none';
      rightIcon = 'key';
      break;
    case 'numeric':
      keyboardType = 'number-pad';
      break;
    case 'phone':
      keyboardType = 'phone-pad';
      rightIcon = 'smartphone';
      break;
    case "Rechercher":
      rightIcon = "zoom-in";
      break;
    case "date":
      rightIcon = "calendar";
      keyboardType = "" // romov keyboard
      break;
  }



  return (
    <View style={styles.inputBlock}>
      {props.label && <Text style={styles.label}>{props.label}</Text>}
      <View style={[styles.inputContainer, isFocused && isSmallScreen && styles.focusedInputContainer]}>
        {isPicker ? (
          <Picker
            key={props.key}
            selectedValue={internalValue}
            style={styles.input}
            onValueChange={handleInputChange}
            enabled={!props.disabled}
          >
            <Picker.Item label={''} value={''} />
            {renderPickerItems()}
          </Picker>
        ) : (
          <TextInput
            //key={props.key}
            style={styles.input}
            placeholder={props.placeholder}
            value={internalValue}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            onPress={handleFocus}
            autoCapitalize={autoCapitalize}
            onChangeText={handleInputChange}
            onBlur={handleBlur}
            editable={!props.disabled}
          />
        )}
        {internalValue.length > 0 && !isPicker && !isDate && (
          <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
            <Feather name="x" size={16} color="gray" />
          </TouchableOpacity>
        )}
        {rightIcon != null && (
          <View style={styles.rightIconContainer}>
            <Feather name={rightIcon} size={16} color="gray" />
          </View>
        )}
      </View>
      {props.error && <Text style={styles.errorText}>{props.error}</Text>}
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={ new Date()}
          mode="date"
          display="default"
          onChange={handleInputChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputBlock: {
    width: isSmallScreen ? '90%' : width * 0.27,
    margin: isSmallScreen ? 10 : 13,
  },
  label: {
    fontWeight: 'bold',
    fontSize: isSmallScreen ? 14 : 16,
    color: 'rgb(1, 168, 134)',
    marginBottom: 5,
  },
  inputContainer: {
    height: isSmallScreen ? 40 : 35,
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: 'rgb(240, 250, 250)',
    borderColor: 'rgb(143, 143, 143)',
    borderRadius: 5,
    alignItems: 'center',
  },
  focusedInputContainer: {
    borderColor: 'blue',
    borderWidth: 2,
  },
  input: {
    flex: 1,
    fontSize: isSmallScreen ? 14 : 16,
    color: 'black',
    paddingHorizontal: 10,
    borderWidth: 0,
    zIndex:10,
  },
  clearButton: {
    padding: 8,
    marginRight: 5,
  },
  rightIconContainer: {
    padding: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 3,
  },
});

export default DynamicInput;