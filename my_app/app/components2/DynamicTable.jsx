import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { StyleSheet, Dimensions } from 'react-native';

import React, { useState } from 'react';

import DynamicContainer from "../components1/DynamicContainer"
import DynamicInput from '../components1/DynamicInput';

export default function DynamicTable(props) {
  const [starte_visible_rows,setstarte_visible_rows] = useState(0);
  const visibleRows = 5;
  const bodyColor1 ='white';
  const bodyColor2 ='rgb(249, 249, 255)';


//  const scip = (item,i) => {
//    if(item[0] ==  "I" item[0]="i"){
//    scip_list.push(i);
//    return true
//    }else return false 
//  }


const handleModifierLigne = (row) => {
  props.action('modifier', row);
};

const handleSupprimerLigne = (row) => {
  props.action('supprimer', row);
};

const handleEye = (row) =>{
  alert(row);
}


const renderTableHeader = () => { 
  if(props.table.data[0] == undefined) {
    return <></>
  }
  return (
    <View style={styles.lignesHeader}>
      {
        Object.keys(props.table.data[0]).map((item, index) => (
          <Text key={index} style={styles.headerText}>{item}</Text>
        ))
      }
    </View>
  );
};


const renderTableBody = () => {
  if (!props.table.data || props.table.data.length === 0) {
    return <></>;
  }

  return (
    <View>
      {props.table.data.slice(starte_visible_rows, starte_visible_rows + visibleRows).map((row, rowIndex) => (
        <View key={rowIndex} style={[styles.ligneItem, { backgroundColor: rowIndex % 2 === 0 ? bodyColor1 : bodyColor2 }]}>
          {renderTableRow(row, rowIndex)}
        </View>
      ))}
    </View>
  );
};



const renderTableRow = (row, rowIndex) => {
  return (
    <View key={rowIndex} style={styles.bodyRow}>
      {
        Object.keys(row).map((item, cellIndex) => (
          item === 'ETAT' ? renderControlButton(row[item], row) :
          <Text key={cellIndex} style={styles.ligneText}>{row[item]}</Text>
        ))
      }
    </View>
  );
};




const renderControlButton = (ETAT, row) => {
  if (ETAT === undefined) return <></>;

  return (
    ETAT === 0 ? (
      <View style={styles.actionsContainer}>
        <TouchableOpacity onPress={() => handleModifierLigne(row)} style={styles.actionButton}>
          <Feather name="edit" size={18} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSupprimerLigne(row)} style={styles.actionButton}>
          <Feather name="trash-2" size={18} color="red" />
        </TouchableOpacity>
      </View>
    ) : (
      <View style={styles.actionsContainer}>
        <TouchableOpacity onPress={() => handleEye(row)} style={styles.actionButton}>
          <Feather name="eye" size={18} color="gray" />
        </TouchableOpacity>
      </View>
    )
  );
};

// add rocherche
// pagination 


  return (
    <DynamicContainer
      label={props.table.name}
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
        {
          (starte_visible_rows+visibleRows) < props.table.data.length && (
            <TouchableOpacity 
              onPress={() => setstarte_visible_rows(starte_visible_rows + visibleRows )} 
              style={{ alignSelf: 'center', padding: 10, backgroundColor: '#ddd', borderRadius: 5 }}
            >
              <Text style={{ fontWeight: 'bold' }}>{'->'}</Text>
            </TouchableOpacity>
          )
        }
                {
          (starte_visible_rows-visibleRows) > 0 && (
            <TouchableOpacity 
              onPress={() => setstarte_visible_rows(starte_visible_rows - visibleRows )} 
              style={{ alignSelf: 'center', padding: 10, backgroundColor: '#ddd', borderRadius: 5 }}
            >
              <Text style={{ fontWeight: 'bold' }}>{'<-'}</Text>
            </TouchableOpacity>
          )
        }
      </View>
    </DynamicContainer>
  );
}





const styles = StyleSheet.create({
  headerText: {
    fontSize:14,
    width: 200,
    padding: 10,
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
    fontSize: 14,
    width: 200,
    padding: 5,

    color: "#555",
    textAlign: 'center',
  },

  bodyRow: {
    flexDirection: 'row',
    paddingBottom: 6,
  },

  actionsContainer: {
    width: 200,
    padding: 5,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center'
  },

  actionButton: {
    padding: 4,
  },

});