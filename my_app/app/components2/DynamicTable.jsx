import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { StyleSheet, Dimensions } from 'react-native';
const {width} = Dimensions.get('window');
export const isSmallScreen = width < 500;

import DynamicContainer from "../components1/DynamicContainer"
import DynamicInput from '../components1/DynamicInput';

export default function DynamicTable(props) {

  const bodyColor1 ='white';
  const bodyColor2 ='rgb(249, 249, 255)';

  const renderTableHeader = () => {
    console.log(props.header)
    return (
      <View style={styles.lignesHeader}>
        {
          props.header.map((item, index) => (
            <Text key={index} style={styles.headerText}>{item}</Text>
          ))
        }
      </View>
    );
  };


  const renderTableBody = () => {

    return (
      <View>{
        props.data.map((row, rowIndex) => (
          <View key={rowIndex} style={[styles.ligneItem, { backgroundColor: rowIndex % 2 == 0 ? bodyColor1 : bodyColor2 }]}>
            {renderTableRow(row, rowIndex)}
            {renderControlButton()}
          </View>
          ))}
      </View>
    )
  };

  const renderTableRow = (row, rowIndex) => {

    return (
      <View key={rowIndex} style={styles.bodyRow}>
        {
          row.map((item, cellIndex) => (
            <Text key={cellIndex} style={styles.ligneText}>{item}</Text>
          ))
        }
      </View>
    )
  };

  const renderControlButton = () => {

    return (
          <View style={styles.actionsContainer}>
              <TouchableOpacity onPress={() => handleModifierLigne(rowIndex)} style={styles.actionButton}>
                <Feather name="edit" size={18} color="gray" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleSupprimerLigne(rowIndex)} style={styles.actionButton}>
                <Feather name="trash-2" size={18} color="red" />
              </TouchableOpacity>
          </View>
    );
  };



  return (
    <DynamicContainer
      label={props.name}
    >
      <DynamicInput
          label={"Rechercher"}
          type={"Rechercher"}
      />
      <View>
        <ScrollView 
        horizontal={true}
        >
          <View
          style={{
            marginVertical:20
          }}
          >
          {renderTableHeader()}
          {renderTableBody()}
          </View>
        </ScrollView>
      </View>
    </DynamicContainer>
  );
}





const styles = StyleSheet.create({
  headerText: {
    fontSize: isSmallScreen ? 14 : 18,
    width: 200,
    padding: isSmallScreen ? 10 : 15,
    fontWeight: 'bold',
    color: "blacke",
    textAlign: 'center',
  },

  lignesHeader: {
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    paddingBottom: 6,
  },

  ligneItem: {
      flexDirection: 'row',
      paddingVertical: 8,
      alignItems: 'center',
      borderBottomWidth: 1,
    },

  ligneText: {
    fontSize: isSmallScreen ? 14 : 18,
    width: 200,
    padding: isSmallScreen ? 5 : 10,

    color: "#555",
    textAlign: 'center',
  },

  bodyRow: {
    flexDirection: 'row',
    paddingBottom: 6,
  },

  actionsContainer: {
    flex: 0.5,
    flexDirection: 'row',
  },

  actionButton: {
    padding: 4,
  },
});