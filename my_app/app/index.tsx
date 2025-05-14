import { Text, View,ScrollView, } from "react-native";
import React, { useState } from 'react';

import { Feather } from '@expo/vector-icons';
import {pages,login_signup} from './pages'

import DynamicSadeBar from './components2/DynamicSadeBar';
import DynamicPage from './DynamicPage'

export default function Index() {

  const[page_index,setpage_index] = useState(1);
  const [islogin_orsignup,set_login_signup] = useState(0);
  const [islogin,setislogin] =useState(true);
  
  const page_links = pages.map(obj => obj.name);


  const login = ()=>{
      setislogin(true)
  }

  const signup = ()=>{
    setislogin(true)
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
        />
      </DynamicSadeBar>
    ):
    (
      <DynamicPage
          page={login_signup[islogin_orsignup]}
          islogin_orsignup = {set_login_signup}
          login={()=>{login()}}
          signup={()=>{signup()}}
          smallform={true}
        />
    )
  }
  </>
  )
}
