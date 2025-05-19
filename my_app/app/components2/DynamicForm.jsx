import React, { useState, useEffect } from 'react';
import DynamicContainer from '../components1/DynamicContainer';
import DynamicInput from '../components1/DynamicInput';
import DynamicButton from '../components1/DynamicButton';
import DynamicLink from '../components1/DynamicLink';
import { StyleSheet, Dimensions, View} from 'react-native';

const { width } = Dimensions.get('window');
export const isSmallScreen = width < 500;




export default function DynamicForm(props) {

  const [inputs_list, setInternal_inputs] = useState(props.form.inputs || []);
  const [errors, setErrors] = useState({});
  const buttons_list = props.form.buttons;


  useEffect(() => {
    if (props.form.inputs !== inputs_list) {
      setInternal_inputs(props.form.inputs || []);
      setErrors({});
    }
  }, [props.form.inputs]);


  const handleInputChange = (index, value) => {
    const updatedInputs = inputs_list.map((input, i) =>
      i === index ? { ...input, value: value } : input
    );
    setInternal_inputs(updatedInputs);
    // Clear any previous error for this input
    setErrors(prevErrors => ({ ...prevErrors, [inputs_list[index].name]: undefined }));
  };


  // validate data
  const get_inputs_value = () => {
    let inplist = {}
    inputs_list.map(input => ( inplist[input.name] = input.value ));
    return inplist
  };

  const validateInput = (input) => {
    if (!input.value) {
      return 'this field is required'
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
        //alert('All required fields must be filled :"'+error+'"');
      }
    });
    setErrors(newErrors);
    return isValid;
  };

  // giv efect 
  const onPress_button = (type) => {
    switch (type) {
      case "Réinitialiser":
        return () => {
          const resetInputs = inputs_list.map(input => ({ ...input, value: "" }));
          setInternal_inputs(resetInputs);
          setErrors({}); 
        };

      case "Ajouter":
        return () => {
          //if (validateForm())
            if(true) {
            const inp = get_inputs_value()
            const post = {
              NUMEROVISA: inp["Numero Visa"],
              DATEDECLARATION: "2025-05-19",
              ID_REFNAVIRE: 1,
              ID_REFENTITEDEBARQ: 1,
              ID_REFENTITEDECLAR: 1,
              ID_REFTYPEDECLAR: 1,
              DATEDEBUTMAREE: "2025-05-19",
              DATEFINMAREE: "2025-05-19",
              DATEDEBARQ: "2025-05-19",
              DATEVISA: "2025-05-19",
              DECLAREPAR:"!",
              ID_REFREGISTRE: 1,
              ETAT: "no valider"
            }

            props.add_table_data(post);
          }
        };
      case "Rechercher":
        return ()=>
        {

        const inp = get_inputs_value()
          const post = {
              NUMEROVISA: inp["Numero Visa"],
              DATEDECLARATION: "2025-05-19",
              ID_REFNAVIRE: 1,
              ID_REFENTITEDEBARQ: 1,
              ID_REFENTITEDECLAR: 1,
              ID_REFTYPEDECLAR: 1,
              DATEDEBUTMAREE: "2025-05-19",
              DATEFINMAREE: "2025-05-19",
              DATEDEBARQ: "2025-05-19",
              DATEVISA: "2025-05-19",
              DECLAREPAR:"!",
              ID_REFREGISTRE: 1,
              ETAT: "no valider"
          }
        props.serch_table_data(post)
        }
        break
      case "Enregistrer":
        return () => {
          if (validateForm()) {
            console.log(inputs_list);
          }
        };
      case "Valider":
        return () => {
          if (validateForm()) {
            console.log(inputs_list);
          }
        };
      case "login":
        return () => {
          if (validateForm()) {
            props.login_signup("login",get_inputs_value());
          } 
        };
      case "signup":
        return () => {
          if (validateForm()) {
            props.login_signup("register",get_inputs_value());
          }
        };

      default:
        return () => {
          console.log(`no typ: ${type}`);
        };
    }
  };

  const onPress_link = (type) => {
    switch (type) {
      case "login":
        return () => {
          props.islogin_orsignup_page(0);
        };
      case "signup":
        return () => {
          props.islogin_orsignup_page(1);
        };
      default:
        return () => {
          console.log(`no typ: ${type}`);
        };
    }
  };









  const inputs = () => {
    return inputs_list.map((input, i) => (
      <DynamicInput
        key={i}
        label={input.name}
        type={input.type}
        items={input.items}
        value={input.value}
        onChangeText={(text) => handleInputChange(i, text)} // TODO
        error={errors[input.name]} 
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

  const links = () => {
    if (props.form.Links !== undefined) {
      return props.form.Links.map((link, i) => (
        <DynamicLink
          key={i}
          text={link.text}
          link={link.link}
          onPress={() => onPress_link(link.link)}
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
      small={props.small}
    >
      <View style={styles.container}>
        {inputs()}
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