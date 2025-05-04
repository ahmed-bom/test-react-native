import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
export const isSmallScreen = width < 500;

const DynamicInput = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState(props.value || '');

  useEffect(() => {
    if (props.value !== internalValue) {
      setInternalValue(props.value || '');
    }
  }, [props.value]);

  const handleInputChange = (text) => {
    setInternalValue(text);
    if (props.onChangeText) {
      props.onChangeText(text);
    }
  };

  const handlePickerChange = (itemValue) => {
    setInternalValue(itemValue);
    if (props.onValueChange) {
      props.onValueChange(itemValue);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    if (props.onFocus) {
      props.onFocus();
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

  const isPicker = props.type === 'picker';

  if (!isPicker) {
    switch (props.type) {
      case 'email':
        keyboardType = 'email-address';
        autoCapitalize = 'none';
        break;
      case 'password':
        secureTextEntry = true;
        autoCapitalize = 'none';
        break;
      case 'numeric':
        keyboardType = 'number-pad';
        break;
      case 'phone':
        keyboardType = 'phone-pad';
        break;
      // يمكنك إضافة منطق خاص لأنواع الحقول الأخرى إذا لزم الأمر (date, heure, recherche)
    }
  }

  const renderPickerItems = () => {
    return props.items ? props.items.map((item, index) => (
      <Picker.Item key={index} label={item} value={item} />
    )) : null;
  };

  return (
    <View style={styles.inputBlock}>
      {props.label && <Text style={styles.label}>{props.label}</Text>}
      <View style={[styles.inputContainer, isFocused && isSmallScreen && styles.focusedInputContainer]}>
        {isPicker ? (
          <Picker
            key={props.key}
            selectedValue={internalValue}
            style={styles.input}
            onValueChange={handlePickerChange}
            enabled={!props.disabled}
          >
            <Picker.Item label={''} value={''} />
            {renderPickerItems()}
          </Picker>
        ) : (
          <TextInput
            key={props.key}
            style={styles.input}
            placeholder={props.placeholder}
            value={internalValue}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            autoCapitalize={autoCapitalize}
            onChangeText={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            editable={!props.disabled}
          />
        )}
        {props.showClearButton && internalValue.length > 0 && !isPicker && (
          <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
            <Feather name="x" size={16} color="gray" />
          </TouchableOpacity>
        )}
        {props.rightIcon && (
          <View style={styles.rightIconContainer}>
            {props.rightIcon}
          </View>
        )}
      </View>
      {props.error && <Text style={styles.errorText}>{props.error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputBlock: {
    width: isSmallScreen ? '90%' : '45%',
    margin: isSmallScreen ? 5 : 13,
  },
  label: {
    fontSize: isSmallScreen ? 14 : 16,
    color: 'black',
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: 'rgb(228, 228, 255)',
    borderColor: 'rgb(179, 179, 203)',
    borderRadius: 5,
    alignItems: 'center',
    padding:isSmallScreen ? 0:5,
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
    borderWidth:0,
    backgroundColor:'rgba(250, 250, 255, 0)'
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