import { Link } from "expo-router";

const login = {
    name : "login",
    forms : [
        {
            name : "login",
            inputs: [   
                {
                    name : "email",
                    type : "email",
                    value : "",
                },   
                {
                    name : "password",
                    type : "password",
                    value : "",
                },                  
            ],
            buttons:[
                "login",
            ],
            Links:[
                {
                    text:"tu na pas un cont",
                    link:"signup",
                }
            ]
        },
    ],
}

 const signup = {

    name: "signup",
    forms: [
        {
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
            buttons:[
                "signup",
            ],
            Links:[
                {
                    text:"tu a dega un cont",
                    link:"login"
                }
            ]
        }
    ],
 }

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
                },   
                {
                    name : "imput 2",
                    type : "numeric",
                    value : "",
                },
                    
            ],
            buttons:[
                "Ajouter",
                "Réinitialiser",
            ]
        }
    ],
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
                "Ajouter",
                "Rénitiliser",
            ]
        },
        {
            name : "Déclaration de capture",
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
    ],
    tables : [
        {
            name : "Lignes",
            header : [],
            data : []
        }
    ],
};




export const pages = [test_page,Déclaration_de_capture,Detai_Déclaration_de_capture];
export const login_signup = [login,signup];