import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';

import { StyleSheet, Dimensions } from 'react-native';
const {width} = Dimensions.get('window');
export const isSmallScreen = width < 500;


import DynamicTable from './components2/DynamicTable';
import DynamicForm from './components2/DynamicForm';

export default function DynamicPage({page}) {

    const tables = () => {
        return page.tables.map((table,i)=> (
            <DynamicTable
                key={i}
                header={table.header}
                data={table.data}
            />
        ))
    }


    const forms = () => {
        return page.forms.map((form,i)=> (
            <DynamicForm
                key={i}
                form={form}
            />
        ));
    };


  return (
    <ScrollView>
        <View style={styles.container}>
            {forms()}
            {tables()}
        </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: isSmallScreen ? 15 : 20,
        backgroundColor: 'rgb(221, 221, 221)',
    },
});