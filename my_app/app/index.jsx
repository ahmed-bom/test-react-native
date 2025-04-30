import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';



import { Feather } from '@expo/vector-icons';



import { styles } from "./styles/index_styles";
import DynamicSadeBar from './DynamicSadeBar';
import DynamicContainer from './DynamicContainer';
import DynamicInput from './DynamicInput';
import DynamicButton from './DynamicButton';
import DynamicTable from './DynamicTable';





export default function Index() {



  const [espece, setEspece] = useState('test');
  const [zonePeche, setZonePeche] = useState('ZONE FAO 37');
  const [typeTransformation, setTypeTransformation] = useState('FRAIS');
  const [poidsVifEst, setPoidsVifEst] = useState(7);
  const [poidsDebEst, setPoidsDebEst] = useState('gggg');
  const [poidsDebVer, setPoidsDebVer] = useState(366);
  const [lignes, setLignes] = useState([
    {
      espece: 'GERMON',
      typeTransformation: 'FRAIS',
      zonePeche: 'ZONE FAO 37',
      poidsVifEst: '60',
      poidsDebEst: '60',
      poidsDebVer: '35',
    },
  ]);


  let hed = [      
    "espece",
    "typeTransformation",
    "zonePeche",
    "poidsVifEst",
    "poidsDebEst",
    "poidsDebVer",
  ]
  let boy = [
    [      
    espece,
    typeTransformation,
    zonePeche,
    poidsVifEst,
    poidsDebEst,
    poidsDebVer,
  ],
  [      
    espece,
    typeTransformation,
    zonePeche,
    poidsVifEst,
    poidsDebEst,
    poidsDebVer,
  ],
  [      
    espece,
    typeTransformation,
    zonePeche,
    poidsVifEst,
    poidsDebEst,
    poidsDebVer,
  ],
  [      
    espece,
    typeTransformation,
    zonePeche,
    poidsVifEst,
    poidsDebEst,
    poidsDebVer,
  ],
  [
  espece,
  typeTransformation,
  zonePeche,
  poidsVifEst,
  poidsDebEst,
  poidsDebVer,
]
]





  const handleAjouterLigne = () => {
    // إضافة منطق لإضافة سطر جديد إلى المصفوفة 'lignes'
    const nouvelleLigne = {
      espece,
      typeTransformation,
      zonePeche,
      poidsVifEst,
      poidsDebEst,
      poidsDebVer,
    };
    setLignes([...lignes, nouvelleLigne]);
    // إعادة تعيين قيم الحقول بعد الإضافة (اختياري)
    setEspece('');
    setPoidsVifEst('');
    setPoidsDebEst('');
    setPoidsDebVer('');
  };

  const handleSupprimerLigne = (index) => {
    const nouvellesLignes = lignes.filter((_, i) => i !== index);
    setLignes(nouvellesLignes);
  };

  const handleModifierLigne = (index) => {
    // إضافة منطق للانتقال إلى شاشة التعديل أو عرض نموذج التعديل
    console.log('تعديل السطر:', index);
  };







  

  return (
<DynamicSadeBar
links = {["test",'hello','word','!']}
>
    <ScrollView>
    <View style={styles.container}>
    <DynamicContainer
        label={"test form"}>

      <DynamicInput
        label={"Espèce*"}
        value={espece}
        onChangeText={setEspece}
      />

      <DynamicInput
        type={"picker"}
        label={"Zone Pêche*"}
        items={["ZONE FAO 37","ZONE FAO 38"]}
        selectedValue={"ZONE FAO 37"}
      />

      <DynamicInput
        type={"picker"}
        label={"ype Transformation*"}
        items={["FRAIS","not FRAIS"]}
        selectedValue={"FRAIS"}
      />

      <DynamicInput
        label={"Poids Vif. Est.*"}
        type={'numeric'}
        value={poidsDebEst}
        onChangeText={setPoidsVifEst}
      />

      <DynamicInput
        label={"Poids à Deb. Est.*"}
        type={'numeric'}
        value={poidsDebEst}
        onChangeText={setPoidsDebEst}
      />


      <DynamicInput
        label={"Poids Deb. Ver."}
        type={'numeric'}
        value={poidsDebVer}
        onChangeText={setPoidsDebVer}
      />

      <View style={styles.buttonsContainer}>

        <DynamicButton
          type={"Réinitialiser"}
        />

        <DynamicButton
          type={"Ajouter"}
          onPress={handleAjouterLigne}
        ></DynamicButton>
      </View>

      </DynamicContainer>

      <DynamicContainer
        label={"test Table"}>

        <DynamicTable
          header={hed}
          data={boy}
        />

      </DynamicContainer>

      <View style={styles.bottomButtonsContainer}>

        <DynamicButton
          type={"Retour"}
        >
          <Feather name="arrow-left" size={20} color="black" />
        </DynamicButton>

        <DynamicButton
          type={"Enregistrer"}
        />

        <DynamicButton
          type={"Valider"}
        >
          <Feather name="check" size={20} color="white" />
        </DynamicButton>

      </View>

    </View>
    </ScrollView>
</DynamicSadeBar>
  );
}
