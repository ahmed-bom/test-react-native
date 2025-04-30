import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';


import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export const isSmallScreen = width < 500;












export default function DynamicTable({ header, data }) {
  const [headerColor, setHeaderColor] = useState('lightblue');
  const [bodyColor, setBodyColor] = useState('white');

  const renderTableHeader = () => {
    const headerCells = header.map((item, index) => (
      <Text key={index} style={styles.headerText}>{item}</Text>
    ));
    return <View style={[styles.lignesHeader, { backgroundColor: headerColor }]}>{headerCells}</View>;
  };

  const renderTableBody = () => {
    const tableRows = data.map((row, rowIndex) => (
      <View key={rowIndex} style={[styles.ligneItem, { backgroundColor: bodyColor }]}>
        {renderTableRow(row, rowIndex)}
        <View style={styles.actionsContainer}>
          <TouchableOpacity onPress={() => handleModifierLigne(rowIndex)} style={styles.actionButton}>
            <Feather name="edit" size={18} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSupprimerLigne(rowIndex)} style={styles.actionButton}>
            <Feather name="trash-2" size={18} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    ));
    return <View>{tableRows}</View>;
  };

  const renderTableRow = (row, rowIndex) => {
    const rowCells = row.map((item, cellIndex) => (
      <Text key={cellIndex} style={styles.ligneText}>{item}</Text>
    ));
    return <View key={rowIndex} style={styles.bodyRow}>{rowCells}</View>;
  };

  const handleModifierLigne = (index) => {
    console.log(`تعديل الصف رقم: ${index}`);
    // يمكنك إضافة منطق التعديل هنا
  };

  const handleSupprimerLigne = (index) => {
    console.log(`حذف الصف رقم: ${index}`);
    // يمكنك إضافة منطق الحذف هنا
  };

  return (
      <ScrollView horizontal={true}>
        <View>
        {renderTableHeader()}
        {renderTableBody()}
        </View>
      </ScrollView>
  );
}





const styles = StyleSheet.create({
  headerText: {
    fontSize: isSmallScreen ? 14 : 18,
    width: isSmallScreen ? 200 : 300,
    padding: isSmallScreen ? 15 : 20,
    fontWeight: 'bold',
    color: "blacke", // استخدام لون النص الثانوي الجديد
    textAlign: 'center',
  },

  lignesHeader: {
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
    width: isSmallScreen ? 200 : 300,
    padding: isSmallScreen ? 15 : 20,
    fontWeight: 'bold',
    color: "#555", // استخدام لون النص الثانوي الجديد
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