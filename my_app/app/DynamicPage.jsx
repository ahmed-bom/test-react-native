import React, { useState,useEffect, use } from 'react';
import {View,Text,ScrollView,Image} from 'react-native';
import { StyleSheet } from 'react-native';

import DynamicTable from './components2/DynamicTable';
import DynamicForm from './components2/DynamicForm';
import { Route } from 'expo-router/build/Route';



export default function DynamicPage(props) {
  
    const f = props.page.form
    const t = props.page.table
    const  [id_déclaration,setid_déclaration] = useState(0);
    const [formVal, settformVal] = useState({});
    const [tableData, settableData] = useState([]);
    const [form_action,set_form_action] = useState("POST")//PUT
    // esppese gegt alle eseprse lier a id déclaration
    
    if(t != undefined){
      t['data']=tableData;
    }

    if(f != undefined){
      f.inputs.map((input,i)=>{
        const fin = formVal[input.name.replace(/ /g, "_")] 
        input.value = fin == undefined ? input.value:fin;
      });
      
    }

    const nex_page = () =>{
      settableData([]);
      props.nex_page()
    }


    const form = () => {
  
      return (
      <>
        {f && (
          <DynamicForm
            form={f}
            api_cole={api_cole}
            nex_page={nex_page}
          />
        )}
      </>
    )};


  const table = () => {
    return (
    <>
      {t && (
        <DynamicTable
            table={t}
            action ={tableaction}
            
        />
      )}
    </>
    )}
   
  const tableaction = (act, arg) => {
      if (act === 'modifier') {
        //send_to_api("declarations/"+arg.ID,{},"DELETE");
        settformVal(arg);
        nex_page();
      } else if (act === 'supprimer') {
        send_to_api("declarations/"+arg.ID,{},"DELETE")
        settableData( tableData.filter(row => row.ID !== arg.ID));
      }
    };

  const api_cole = (act,pth, method, data) => {
    switch (act) {

      case "s'inscrire":
        send_to_api("signup",data,method)
        .then ( (data) => 
              {
                if (data == 'server error')alert(data);
                else if(data.detail)alert(data.detail);
                else props.login()
              }
              )
        break
      case 'se connecter':
        send_to_api("login",data,method)
        .then ( (data) => 
              {
                if (data == 'server error')alert(data);
                else if(data.detail)alert(data.detail);
                else props.login()
              }
              )
        break
      case 'Rechercher':
        send_to_api(pth,data,method)
        .then ( (data) => 
              {
                if (data == 'server error')alert(data);
                else if(data.detail)alert(data.detail);
                else settableData(data)
              }
              )
        break
      case 'Ajouter Éspeces':
          data['id_déclaration'] = id_déclaration
          data['ETAT'] = 0
          send_to_api(pth,data,'POST')
          .then ( (data) => 
                {
                  if (data == 'server error')alert(data);
                  else if(data.detail)alert(data.detail);
                  else {settableData([...tableData,data])}
                }
                )
          break
      case 'Ajouter Déclaration':
        data['ETAT'] = 0
        if(form_action == "POST"){
        send_to_api(pth,data,"POST")
        .then ( (data) => 
              {
                if (data == 'server error')alert(data);
                else if(data.detail)alert(data.detail);
                else {
                  setid_déclaration(data.ID);
                  settableData([])}
              }
              )
        }
        else if(form_action == "PUT"){
          send_to_api("declarations/"+id_déclaration,data,"PUT")
          .then ( (data) => 
            {
              if (data == 'server error')alert(data);
              else if(data.detail)alert(data.detail);
            }
          )
        }
        break

    
      default:
        console.log("'o'");
        break;

    }
  }



    const login_signup = (log_sin,data)=>{

     send_to_api(log_sin,data,'POST')
     .then( (data) => 
        {
          if (data == 'server error')alert(data);
          else if(data.detail)alert(data.detail);
          else props.login();
        }
      )

    }





  return (
    <View style={styles.container}> 
        <ScrollView style={styles.ScrollView}>
            <View style={styles.container}>

              <Image
                  style={styles.image}
                  source={require('./../assets/images/images3.png')} 
              /> 

              {form()}
              {table()}

            </View>

        </ScrollView>
    </View>

  )
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal:10,
        paddingBottom:100,
        minHeight: '100vh',
        display:'flex',
        alignItems:'center',
    },
    ScrollView: {        
      paddingTop:30,
    }
});


const send_to_api = (target, content, method)=> {

  const API_URL = 'http://192.168.151.142:8000';
  let url = API_URL + '/' + target;



  let M = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
  };


  if(method === 'GET'|| method === "DELETE"){
    const cleanContent = {};
    if (content && typeof content === 'object') {
      Object.keys(content).forEach(key => {
        const value = content[key];
        if (value !== '' && value !== null && value !== undefined) {
          cleanContent[key] = value;
        }
      });
    }

    const queryParams = new URLSearchParams(cleanContent).toString();
    url += '?' + queryParams;
    
  }else{
    M["body"] = JSON.stringify(content);
  }
  
  return fetch(url, M)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return 'server error';
    });
}
