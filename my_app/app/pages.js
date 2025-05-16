import { Link } from "expo-router";

const login = {
    name : "login",
    form : {
        name : "login",
        inputs: [   
            {
                name : "name",
                type : "default",
            },   
            {
                name : "password",
                type : "password",
            },                  
        ],
        buttons:["login"],
        Links:[
            {
                text:"tu na pas un cont",
                link:"signup",
            }
        ]
    },
    
}

 const signup = {

    name: "signup",
    form: {
        name : "signup",
        inputs: [  
            {
                name : "name",
                type : "default",
            },  
            {
                name : "email",
                type : "email",
            },   
            {
                name : "password",
                type : "password",

            },  
            {
                name : "confirm password",
                type : "password",

            },  
                
        ],
        buttons:["signup"],
        Links:[
            {
                text:"tu a dega un cont",
                link:"login"
            }
        ]
    }
    
 }

const test_page = {

    name : "test",
    form : {
        name : "form 1",
        inputs: [   
            {
                name : "input 1",
                type : "default",
                value : "",
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
        buttons:["Enregistrer"]
    },
};

const Déclaration_capture_recherche = {

    name : "Recherche Déclaration de capture",
    form : {
        name : "recherche",
        inputs: [   
            {
                name : "Numero Visa",
                type : "numeric",
                value : "",
                
            },   
            {
                name : "Numéro Immatriculation",
                type : "numeric",
                value : "",

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
                type : "date",
                value : "",

            },                     {
                name : "Periode AU",
                type : "date",
                value : "",

            },                    

        ],
        buttons:[
            "Réinitialiser",
            "Rechercher",
        ]
    },
    
    table : {
            name : "Résulta",
            header : [],
            data : []
    },
    control_buttons:[
        "Next",
    ] 
};


const add_éspeces ={

    name : "Éspeces",
    form : {
            name : "Formulaire d'ajout",
            inputs: [   
                {
                    name : "espece",
                    type : "default",
                    value : "",
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
                {
                    name : "Type Transformation",
                    type : "picker",
                    value : "",
                    items : [
                                "FRAIS",
                            ],

                },    
                {
                    name : "Poids Vit Est",
                    type : "numeric",
                    value : "",
                },
                {
                    name : "Poids Deb Est",
                    type : "numeric",
                    value : "",
                },
                {
                    name : "Poids Deb Var",
                    type : "numeric",
                    value : "",
                },
                                   
            ],
            buttons:[
                "Sebmet",
                "Réinitialiser",
            ]
        },
    table :{
            name : "Lignes",
            header : [],
            data : []
    },
    control_buttons:[
        "Retour",
        "Next",
    ]
    
};

const new_Déclaration_capture = {
    name :"Déclaration de capture",
    form:{
        name :"formulair d'ajout",
        inputs: [
            {
                name : "Date Début Marée",
                type : "date",
                value : "",
    
            },    
            {
                name : "Date Fin Marée",
                type : "date",
                value : "",
    
            },  
            {
                name : "Type Flotte",
                type : "picker",
                value : "",
                items : [
                            "Flotte",
                        ],
    
            },   
            {
                name : "Date Déclaration",
                type : "date",
                value : "",
    
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
                name : "Numero Visa",
                type : "numeric",
                value : "",
                
            },   
            {
                name : "Registre",
                type : "picker",
                value : "",
                items : [
                            "Registre",
                        ],
    
            },  
            {
                name : "Port Déparquement",
                type : "picker",
                value : "",
                items : [
                            "Agadir",
                        ],
    
            }, 
            {
                name : "Date Visa",
                type : "date",
                value : "",
            },  
            {
                name : "Type Déclaration",
                type : "picker",
                value : "",
                items : [
                            "Déclaration",
                        ],
    
            }, 
            {
                name : "Date Déparquement",
                type : "date",
                value : "",
    
            },      
        ],
        buttons:[
            "Ajouter",
            "Réinitialiser",
        ]
    },
    table :
    {
        name : "Recherche navire",
        header : [],
        data : []
    },
    control_buttons:[
        "Retour",
        "Next",
    ]
}





export const pages = [test_page,Déclaration_capture_recherche,new_Déclaration_capture,add_éspeces];
export const login_signup = [login,signup];