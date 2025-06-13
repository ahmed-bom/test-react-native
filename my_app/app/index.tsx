import { Text, View,ScrollView, } from "react-native";
import React, { useState } from 'react';

import { Feather } from '@expo/vector-icons';
import {pages,login_signup} from './pages'

import DynamicSadeBar from './DynamicSadeBar';
import DynamicPage from './DynamicPage'


export default function Index() {

  const[page_index,setpage_index] = useState(0);
  const [login_or_signup,set_login_or_signup] = useState(0);
  const [islogin,setislogin] =useState(false);
  
  const pages_names = pages.map(obj => obj.name);

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
        links={pages_names}
        pageIndex={page_index}
        setpageIndex={setpage_index}
        logout={()=>setislogin(false)}
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
          page={login_signup[login_or_signup]}
          nex_page = {()=>set_login_or_signup((login_or_signup+1)%2)}
          login={()=>setislogin(true)}
      />
    )
  }
  </>
  )
}
