import React, { useState } from 'react';
import {View,Text,ScrollView,Image} from 'react-native';
import DynamicButton from './components1/DynamicButton';
import { StyleSheet, Dimensions } from 'react-native';
const {width} = Dimensions.get('window');
export const isSmallScreen = width < 500;


import DynamicTable from './components2/DynamicTable';
import DynamicForm from './components2/DynamicForm';


function send_to_api(target, content, method) {
  let M = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (method === 'POST') {
    M["body"] = JSON.stringify(content);
  }

  
  return fetch('http://127.0.0.1:8000/' + target, M)
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






export default function DynamicPage(props) {
  
  const t = props.page.table

    const [tableData, setTableData] = useState(t ? t.data : [[]]);
    const [tableHeader, setTableHeader] = useState(t ? t.header : []);

    const page = props.page;

    const table = () => {
            return (<>
                {t && (
                    <DynamicTable
                        name={t.name}
                        header={tableHeader}
                        data={tableData}
                    />
                )}
            </>);

    }

    const form = () => {
        let f = props.page.form
        
        return (<>
            {f && (
                <DynamicForm
                form={f}
                small={props.smallform}
                islogin_orsignup_page={props.islogin_orsignup}
                login_signup ={login_signup}
                serch_table_data ={serch_table_data}
                add_table_data = {add_table_data}
                nex_page={props.nex_page}
                retour={props.retour}
                />
            )}
        </>);
    };

    function control_buttons(){
        let b = props.page.control_buttons
        return (<View style={{
            alignItems:'center',
            flex: 1,
            flexDirection: 'row',
            }}>
            {b && 
            b.map((type, i) => (
                  <DynamicButton
                    key={i}
                    type={type}
                    onPress={() => onPress_button(type)}
                  />
                ))
            }
        </View>);
    }


    const login_signup = (log_sin,values)=>{
      const post = {
        name : values['name'],
        password: values['password'],
      };
     send_to_api(log_sin,post,'POST')
     .then((data) => {
        if (data == 'server error')alert(data);
        if(data.detail)alert(data.detail);
        else props.setislogin(true);
      })
    }


    const serch_table_data = (serch_obj) =>{
      send_to_api(t.type + "/search/",serch_obj,'POST')
      .then((data) => {
        if(data == 'server error') alert(data);
        setTableData(data.map(d => Object.values(d)));
        setTableHeader( Object.keys(data[0]));
      })
    }

    const add_table_data = (serch_obj) =>{
      let data = send_to_api(t.type,serch_obj,'POST')
      .then((data) => {
        if(data == 'server error') alert(data);
        setTableData([...tableData,Object.values(data)]);
      })
    } 

    const onPress_button = (type) => {
        switch (type) {    
          case "Next":
            return () => {
              props.nex_page()
            };
          case "Retour":
            return () => {
              props.retour()
            };
          case "Enregistrer":
            return () => {
              if (validateForm()) {
                console.log(inputs_list);
              }
            };
          default:
            return () => {}
        };
      };
      



      const creat_declaration = ()=>{
        const post = {
          NUMEROVISA: "string",
          DATEDECLARATION: "2025-05-18",
          ID_REFNAVIRE: 0,
          ID_REFENTITEDEBARQ: 0,
          ID_REFENTITEDECLAR: 0,
          ID_REFTYPEDECLAR: 0,
          DATEDEBUTMAREE: "2025-05-18",
          DATEFINMAREE: "2025-05-18",
          DATEDEBARQ: "2025-05-18",
          DATEVISA: "2025-05-18",
          DECLAREPAR: "string",
          ID_REFREGISTRE: 0,
          ETAT: "string"
        }

        
        fetch('http://127.0.0.1:8000/declarations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(post),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data)  
          })
          .catch((error) => {
              alert('server error');
          });
      }




  return (
    <View style={styles.container}> 
        <ScrollView>
            <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('./../assets/images/images3.png')} 
            /> 
                {form()}
                {table()}
                {control_buttons()}
            </View>

        </ScrollView>
    </View>

  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: isSmallScreen ? 10 : 20,
        minHeight: '100vh',
        alignItems:'center',
        justifyContent:'center',

    },
    image:{
        
    }
});
