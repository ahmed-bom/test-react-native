

const test_page = {

    name : "test",
    forms : [
        {
            name : "form 1",
            inputs: [   
                {
                    name : "input 1",
                    type : "default",
                    value : "",
                    items : [],
                },   
                {
                    name : "input 2",
                    type : "picker",
                    value : "",
                    items : [
                                "v1",
                                "v2",
                                "v3",
                            ],

                },   
                {
                    name : "input 1",
                    type : "default",
                    value : "",
                    items : [],
                },   
                {
                    name : "input 2",
                    type : "picker",
                    value : "",
                    items : [
                                "v1",
                                "v2",
                                "v3",
                            ],

                },     
                {
                    name : "input 2",
                    type : "picker",
                    value : "",
                    items : [
                                "v1",
                                "v2",
                                "v3",
                            ],

                },                 
            ],
            buttons:[
                "Enregistrer",
            ]
        },
        {
            name : "form 2",
            inputs: [   
                {
                    name : "imput 1",
                    type : "default",
                    value : "",
                    items : [],
                },   
                {
                    name : "imput 2",
                    type : "numeric",
                    value : "",
                    items : [],
                },
                    
            ],
            buttons:[
                "Ajouter",
                "Réinitialiser",
            ]
        }
    ],
    tables : []
};

const Déclaration_de_capture = {

    name : "Déclaration de capture",
    forms : [
        {
            name : "recherche",
            inputs: [   
                {
                    name : "Numero Visa",
                    type : "numeric",
                    value : "",
                    items : [],
                    
                },   
                {
                    name : "Numéro Immatriculation",
                    type : "numeric",
                    value : "",
                    items : [],

                },   
                {
                    name : "Port Decalaration",
                    type : "picker",
                    value : "",
                    items : [
                                "Agadir",
                            ],

                },   
                {
                    name : "Periode DU",
                    type : "default",
                    value : "",
                    items : [],

                },                     {
                    name : "Periode AU",
                    type : "default",
                    value : "",
                    items : [],

                },                    

            ],
            buttons:[
                "Ajouter",
                "Réinitialiser",
                "Rechercher",
            ]
        },
    ],
    tables : [
        {
            name : "Résulta",
            header : [
                "espece",
                "typeTransformation",
                "zonePeche",
                "poidsVifEst",
                "poidsDebEst",
                "poidsDebVer",
            ],
            data : [
                [
                "espece test",
                "typeTransformation test",
                "zonePeche test",
                "poidsVifEst test",
                "poidsDebEst test",
                "poidsDebVer test",
                ],
                [
                "espece test",
                "typeTransformation test",
                "zonePeche test",
                "poidsVifEst test",
                "poidsDebEst test",
                "poidsDebVer test",
                ],
                [
                "espece test",
                "typeTransformation test",
                "zonePeche test",
                "poidsVifEst test",
                "poidsDebEst test",
                "poidsDebVer test",
                ],
            ]
        },
    ]
};


const Detai_Déclaration_de_capture ={

    name : "Detai Déclaration de capture",
    forms : [
        {
            name : "Detai Déclaration de capture",
            inputs: [   
                {
                    name : "espece",
                    type : "default",
                    value : "",
                    items : [],
                },   
                {
                    name : "Poids",
                    type : "numeric",
                    value : "",
                    items : [],
                },
                {
                    name : "zonePeche",
                    type : "picker",
                    value : "",
                    items : [
                                "zonePeche 5",
                                "zonePeche 6",
                                "zonePeche 7",
                            ],

                },                      
            ],
            buttons:[
                "Enregistrer",
            ]
        },
        {
            name : "page 1/form 2",
            inputs: [   
                {
                    name : "espece",
                    type : "default",
                    items : [],
                },   
                {
                    name : "Poids",
                    type : "numeric",
                    items : [],
                },
                 
            ],
            buttons:[
                "Ajouter",
                "Réinitialiser",
            ]
        }
    ],
    tables : []
};




export const pages = [test_page,Déclaration_de_capture,Detai_Déclaration_de_capture];