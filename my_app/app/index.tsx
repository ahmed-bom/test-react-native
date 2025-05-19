import { Text, View,ScrollView, } from "react-native";
import React, { useState } from 'react';

import { Feather } from '@expo/vector-icons';
import {pages,login_signup} from './pages'

import DynamicSadeBar from './components2/DynamicSadeBar';
import DynamicPage from './DynamicPage'


export default function Index() {

  const[page_index,setpage_index] = useState(2);
  const [islogin_orsignup,set_login_signup] = useState(0);
  const [islogin,setislogin] =useState(true);
  
  const page_links = pages.map(obj => obj.name);

  function nex_page(){
    setpage_index((page_index + 1)% pages.length)
  }
  function retour(){
    if(page_index - 1 >= 0){
      setpage_index(page_index - 1)
    }
  }


  return (
    <>
    {islogin ? (
      <DynamicSadeBar
        links={page_links}
        pageIndex={page_index}
        setpageIndex={setpage_index}
        setislogin={setislogin}
      >
        <DynamicPage
          page={pages[page_index]}
          nex_page={nex_page}
          retour={retour}
        />
      </DynamicSadeBar>
    ):
    (
      <DynamicPage
          page={login_signup[islogin_orsignup]}
          islogin_orsignup = {set_login_signup}
          setislogin={setislogin}
          smallform={true}
        />
    )
  }
  </>
  )
}
