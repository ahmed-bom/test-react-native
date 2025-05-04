import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');


import { Feather } from '@expo/vector-icons';


export default function DynamicSadeBar(props) {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const slideAnim = useRef(new Animated.Value(-width)).current; 

  const renderLinks = () => {
    if(props.links != undefined){
    return props.links.map((item, index) => (
      <TouchableOpacity 
        key={index}
        style={styles.drawerItem}
        onPress={()=>{
        props.setpageIndex(index);
        toggleDrawer()
      }}>
        <Text style={
          props.pageIndex == index ? styles.drawerItemTextS : styles.drawerItemTextNS
        }>
          {item}
        </Text>
      </TouchableOpacity>
    ));
    }
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };


  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isDrawerOpen ? 0 : -width,
      duration: 300, 
      useNativeDriver: true, 
    }).start();
  }, [isDrawerOpen, slideAnim]);



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.openbutton} onPress={toggleDrawer}>
          <Feather style={styles.openbuttonText} name="menu" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>{props.links[props.pageIndex]}</Text>
        <Feather style={styles.headerText} name="log-out" size={20} color="white" />
      </View> 

      {props.children}

      <Animated.View
        style={[
          styles.drawer,
          {
            transform: [{ translateX: slideAnim }],
          },
        ]}
      >
        <TouchableOpacity style={styles.closeButton} onPress={toggleDrawer}>
          <Feather style={styles.closeButtonText} name="x" size={20} color="white" />
        </TouchableOpacity>
        {renderLinks()}
      </Animated.View>

    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: "rgb(0, 0, 0)",
    width: "100%"
  },
  headerText: {
    padding: 15,
    alignContent: "center",
    color: "white",
  },
  openbutton: {
    padding: 15,
    backgroundColor: "rgb(115, 115, 255)",
    alignItems: 'center',
    width: 50,
  },
  openbuttonText: {
    color: "white",
    fontSize: 16,
  },

  drawer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width * 0.7, 
    height: '100%',
    backgroundColor: 'rgb(129, 129, 255)',
    zIndex: 1, 
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  drawerItem: {
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    fontSize: 16,
  },
  drawerItemTextS: {
    color: "rgb(0, 31, 132)",
    paddingVertical: 15,
    backgroundColor:'rgba(0, 16, 67, 0.27)'
  },
  drawerItemTextNS: {
    color: 'white',
    paddingVertical: 15,
  }
});

