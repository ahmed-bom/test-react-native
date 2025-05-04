import { Text, View,ScrollView, } from "react-native";
import React, { useState } from 'react';

import { Feather } from '@expo/vector-icons';
import {pages} from './pages'

import DynamicSadeBar from './components2/DynamicSadeBar';
import DynamicPage from './DynamicPage'

export default function Index() {
  const[page_index,setpage_index] = useState(0);
  const page_links = pages.map(obj => obj.name);
  return (
    <DynamicSadeBar
      links={page_links}
      pageIndex={page_index}
      setpageIndex={setpage_index}
    >
      <DynamicPage
        page={pages[page_index]}
      />
    </DynamicSadeBar>
  )
}
