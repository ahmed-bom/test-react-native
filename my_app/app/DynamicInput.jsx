import { View, Text, TextInput,TouchableOpacity} from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker';

import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export const isSmallScreen = width < 500;
import { Feather } from '@expo/vector-icons';




export default function DynamicInput ({ 
  label,
  type,
  placeholder,
  value, 
  items,
  selectedValue,
  onChangeText, 
  onPressX,
  style 
}) 
{

  let keyboardType = 'default';
  let secureTextEntry = false;
  let autoCapitalize = 'sentences';

  let ispicker = type === "picker"

  if (!ispicker){
    switch (type) {
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
     default:
        break;
    }
  }

  const renderItems = () => {
    return items.map((item, index) => (
      <Picker.Item key={index} label={item} value={item} />
    ));
  };

  return (
    <View style={styles.inputBlock}>
      <Text style={styles.label}>{label}</Text>
        <View style={styles.inputcontainer}>
          {ispicker
          ? 
        <Picker
          selectedValue={selectedValue}
          style={[styles.input, style]}
        >
          {renderItems()}
        </Picker>
        :
        <TextInput
          style={[styles.input, style]}
          placeholder={placeholder}
          value={value}
          onChangeText={() => {onChangeText}}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize}
        />
        } 
        <TouchableOpacity style={styles.XButton} onPress={onPressX}>
              <Feather name="x" size={16} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );


};










const styles = StyleSheet.create({
  inputBlock:{
    width: isSmallScreen ? '90%' : '33%',
    margin: isSmallScreen ? 5 : 13,
  },
  inputcontainer: {
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: "rgb(250, 250, 255)",
    borderColor: '#ddd',
    borderRadius: 5,
  },
  input: {
    width: "90%",
    fontSize: isSmallScreen ? 14 : 16,
    color: "black",
  },
  XButton: {
    display: "flex",
    justifyContent: "center",
    marginHorizontal: isSmallScreen ? 8 : 12,
  }
})