import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
} from 'react-native';

import { StyleSheet, Dimensions } from 'react-native';
const {width} = Dimensions.get('window');
export const isSmallScreen = width < 500;


import DynamicTable from './components2/DynamicTable';
import DynamicForm from './components2/DynamicForm';

export default function DynamicPage(props) {

    
    const page = props.page;
    const tables = () => {
        if(page.tables != undefined){
            return page.tables.map((table,i)=> (
                <DynamicTable
                    key={i}
                    name={table.name}
                    header={table.header}
                    data={table.data}
                />
            ))
        }else{
            return (
                <>
                <Text>
                </Text>
                </>
            )
        }
    }


    const login = () =>{
        props.login()
    }
    const signup = ()=>{
        props.signup()
    }


    const forms = () => {
        if(page.forms != undefined){
            return page.forms.map((form,i)=> (
                <DynamicForm
                    key={i}
                    form={form}
                    small={props.smallform}
                    islogin_orsignup_page={props.islogin_orsignup}
                    login={()=>{login()}}
                    signup={()=>{signup()}}
                    
                />
            ))
        }else{
            return (
                <>
                </>
            )
        }
    };


  return (
    <View style={styles.container}> 

            <ScrollView>
                <View style={styles.container}>
                <Image
                style={styles.image}
                source={require('./../assets/images/images3.png')} 
                /> 
                    {forms()}
                    {tables()}
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