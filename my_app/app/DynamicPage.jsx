import React, { useState } from 'react';
import {View,Text,ScrollView,Image} from 'react-native';
import DynamicButton from './components1/DynamicButton';
import { StyleSheet, Dimensions } from 'react-native';
const {width} = Dimensions.get('window');
export const isSmallScreen = width < 500;


import DynamicTable from './components2/DynamicTable';
import DynamicForm from './components2/DynamicForm';

export default function DynamicPage(props) {
 
    const page = props.page;

    const table = () => {
        let t = props.page.table
            return (<>
                {t && (
                    <DynamicTable
                        name={t.name}
                        header={t.header}
                        data={t.data}
                    />
                )}
            </>);

    }
    const form = () => {
        let f = props.page.form
        
        return (<>
            {f && (
                <DynamicForm
                form={f}
                small={props.smallform}
                islogin_orsignup_page={props.islogin_orsignup}
                login={login}
                signup={signup}
                nex_page={props.nex_page}
                retour={props.retour}
                />
            )}
        </>);
    };

    function control_buttons(){
        let b = props.page.control_buttons
        return (<View style={{
            alignItems:'center',
            flex: 1,
            flexDirection: 'row',
            }}>
            {b && 
            b.map((type, i) => (
                  <DynamicButton
                    key={i}
                    type={type}
                    onPress={() => onPress_button(type)}
                  />
                ))
            }
        </View>);
    }


    const onPress_button = (type) => {
        switch (type) {    
          case "Next":
            return () => {
              props.nex_page()
            };
          case "Retour":
            return () => {
              props.retour()
            };
          case "Enregistrer":
            return () => {
              if (validateForm()) {
                console.log(inputs_list);
              }
            };
          default:
            return () => {}
        };
      };







    const login = (inputs_value) =>{
        console.log(inputs_value)
        const post = {
            name : inputs_value[0].val,
            password: inputs_value[1].val,
        };

          
          fetch('http://127.0.0.1:8000/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(post),
          })
            .then((response) => response.json())
            .then((data) => {
                props.setislogin(true)
                alert(JSON.stringify(data))
            })
            .catch((error) => {
                alert('server error');
            });
    
    }
    const signup = (inputs_value)=>{
        props.setislogin(true)
    }





  return (
    <View style={styles.container}> 
        <ScrollView>
            <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('./../assets/images/images3.png')} 
            /> 
                {form()}
                {table()}
                {control_buttons()}
            </View>

        </ScrollView>
    </View>

  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: isSmallScreen ? 10 : 20,
        minHeight: '100vh',
        alignItems:'center',
        justifyContent:'center',

    },
    image:{
        
    }
});