import React, { useState, useRef, useEffect } from 'react';
import { View,Image, Text, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';

const {width} = Dimensions.get('window');
export const isSmallScreen = width < 500;


import { Feather } from '@expo/vector-icons';


export default function DynamicSadeBar(props) {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const slideAnim = useRef(new Animated.Value(-width)).current; 
 
 
 
  const renderLinks = () => {

    if(props.links == undefined) return <></>
    
    return props.links.map((item, index) => (
      <TouchableOpacity 
        key={index}
        style={[styles.drawerItem,props.pageIndex == index && {backgroundColor:'rgba(3, 0, 45, 0.55)'}]}
        onPress={()=>{
                      props.setpageIndex(index);
                      toggleDrawer()
                      }
      }>
        <Text style={styles.drawerItemTextNS}>
          {item}
        </Text>
      </TouchableOpacity>
    ));
    
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
          <Feather style={styles.buttonText} name="menu" size={20} color="white" />
        </TouchableOpacity>
        
        <Text style={styles.headerText}>{props.links[props.pageIndex]}</Text>

        <TouchableOpacity style={styles.openbutton} onPress={props.logout}>
          <Feather style={styles.buttonText} name="log-out" size={isSmallScreen ?20:30} color="white" />
        </TouchableOpacity>

      </View> 

      {
        props.children
      }

      <Animated.View
        style={[styles.drawer,{transform: [{ translateX: slideAnim }]}]}
      >

        <TouchableOpacity style={styles.closeButton} onPress={toggleDrawer}>
          <Feather style={styles.closeButtonText} name="x" size={20} color="white" />
        </TouchableOpacity>
        
        <Image
          style={styles.image}
          source={require('./../assets/images/images.png')} 
        />

        <View
          style={styles.links}
        >
            {renderLinks()}
        </View>

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
    paddingTop:30,
    backgroundColor: "rgb(0, 5, 60)",
    width: "100%",
    height:100,
  },
  headerText: {
    color: "white",
    fontWeight: 'bold',
    fontSize: 14,
    paddingVertical:20,
    width:"50%",
  },
  openbutton: {
    padding: 15,
    backgroundColor: "rgba(115, 115, 255, 0)",
    alignItems: 'center',
    width: 50,
  },

  buttonText: {
    color: "white",
  },

  drawer: {
    position: 'absolute',
    top: 30,
    left: 0,
    width:isSmallScreen ? width * 0.7:width * 0.3, 
    height: '100%',
    backgroundColor: 'rgba(0, 5, 60, 0.88)',
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
    paddingLeft:10,
    borderWidth: 1,
    borderLeftWidth:0,
    borderRightWidth:0,
    borderColor: 'white',
    fontSize: 16,
  },
  drawerItemTextS: {
    color:'white',
    paddingVertical: 15,
    
  },
  drawerItemTextNS: {
    color: 'white',
    paddingVertical: 15,
  },
  links:{
    marginTop: 0,
  },
  image:{
    height:150,
    width:150,
  },
});

