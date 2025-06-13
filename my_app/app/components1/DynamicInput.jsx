
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Feather } from '@expo/vector-icons';


const DynamicInput = (props) => {

  const [isFocused, setIsFocused] = useState(false);
  const keyboar = get_keyboar_inf(props.type);



  const renderPickerItems = () => {
    return props.items ? props.items.map((item, index) => (
      <Picker.Item key={index} label={item} value={item} />
    )) : <></>;
  };

  const handleOnPress = () => {
    
    if (props.onPress) {
      props.onPress();
    }else{
      setIsFocused(true);  
    }
  };


  const handleBlur = () => {
    setIsFocused(false);
    if (props.onBlur) {
      props.onBlur();
    }
  };


  const handleClear = () => {
    if (props.onChangeText) {
      props.onChangeText('');
    }
  };

  const handleChange = (value) =>{
    if (props.onChangeText) {
      props.onChangeText(value);
    }
  }

  
  
  return (
    <View style={styles.inputBlock}>
      {
      props.label && 
        <Text style={styles.label}>
          {props.label}
        </Text>
      }

      <View style={[styles.inputContainer, isFocused && styles.focusedInputContainer]}>
        {
          keyboar.rightIcon ? (
            <View style={styles.rightIconContainer}>
              <Feather name={keyboar.rightIcon} size={16} color="gray" />
            </View>
          ):(
            <View style={styles.rightIconContainer}>
            </View>
          )
        }
        {
          props.type == 'picker' ?(
            <View
              key={props.key}
              style={styles.input}
            >
              <Picker
                selectedValue={props.internalValue}
                onValueChange={handleChange}
              >
                <Picker.Item label={''} value={''} />
                {renderPickerItems()}
              </Picker>
            </View>
        ) :
        ( props.type == 'date' ? (
            <TouchableOpacity onPress={handleOnPress} style={styles.input}>
              <Text style={styles.date}>
                {props.internalValue ? props.internalValue : '' }
              </Text>
            </TouchableOpacity>
          ) : 
          ( <TextInput
              style={styles.input}
              value={props.internalValue}
              keyboardType={keyboar.Type}
              secureTextEntry={keyboar.secureTextEntry}
              onPress={handleOnPress}
              autoCapitalize={keyboar.autoCapitalize}
              onChangeText={handleChange}
              onBlur={handleBlur}
            />
          )
        )}

        {
           props.type != 'picker' &&(
            <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
              <Feather name="x" size={16} color="gray" />
            </TouchableOpacity>
          )
        }



      </View>

      {
        props.error && 
          <Text style={styles.errorText}>
            {props.error}
          </Text>
      }
    </View>
  );
};


export default DynamicInput;


const get_keyboar_inf = (type_input) => {

  let keyboardType = 'default';
  let secureTextEntry = false;
  let autoCapitalize = 'sentences';
  let rightIcon = 'edit-2';

  switch (type_input) {
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
    case 'date':
      rightIcon = "calendar"
      break
    case 'picker':
      rightIcon = false
      break

  }


  return {
            Type : keyboardType,
            secureTextEntry : secureTextEntry,
            autoCapitalize : autoCapitalize,
            rightIcon : rightIcon,   
          }
}


const styles = StyleSheet.create({
  inputBlock: {
    width:  '90%',
    margin: 10,
  },

  label: {
    fontWeight: 'bold',
    fontSize:  14,
    color: 'rgb(1, 121, 168)',
    marginBottom: 5,
  },

  inputContainer: {
    height: 40,
    flexDirection: 'row',
    borderWidth: 1,
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
    justifyContent:'center',
    fontSize: 14,
    backgroundColor: 'transparent',
    height: 35,
    borderRadius: 5,
    borderWidth: 0,
  },

  date:{
    color: "black", 
    width:'100%',
    height:'100%',
    textAlign:'center',
    padding:8,
  },

  inpittext: {
    color: "black", 
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