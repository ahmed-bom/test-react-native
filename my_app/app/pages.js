import { Link } from "expo-router";

const login = {
    name : "se connecter",
    form : {
        name : "se connecter",
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
        buttons:["se connecter"],
        Links:[
            {
                text:"vous n'avez pas de compte",
                link:"s'inscrire",
            }
        ]
    },
    
}

 const signup = {

    name: "s'inscrire",
    form: {
        name : "s'inscrire",
        inputs: [  
            {
                name : "name",
                type : "default",
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
        buttons:["s'inscrire"],
        Links:[
            {
                text:"vous avez déjà un compte",
                link:"se connecter"
            }
        ]
    }
    
 }

const Déclaration_capture_recherche = {

    name : "Recherche Déclaration",
    form : {
        name : "recherche",
        inputs: [   
            {
                name : "Numero Visa",
                type : "numeric",
                value : "",
                
            },   
            {
                name : "Numero Immatriculation",
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
            "Ajouter Déclaration",
        ]
    },
    
    table : {
            name : "Résulta",
            type: "declarations",
    },
};


const add_éspeces ={

    name : "Éspeces",
    form : {
            name : "Formulaire d'ajout",
            inputs: [   
                {
                    name : "espece",
                    type : "picker",
                    value : "",
                    items : [
                        "espece 1",
                        "espece 2",
                        "espece 3",
                    ],
                },  
                {
                    name : "zonePeche",
                    type : "picker",
                    value : "",
                    items : [
                                "zone 5",
                                "zone 6",
                                "zone 7",
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
                "Réinitialiser",
                "Enregistrer"
            ]
        },
    table :{
            name : "Lignes",
            type: "declarations",
    },   
};

const new_Déclaration_capture = {
    name :"Déclaration de capture",
    form:{
        name :"formulair d'ajout",
        inputs: [
            {
                name : "Numéro Immatriculation",
                type : "numeric",
                value : "",
    
            },  
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
            "Ajouter Éspeces",
            "Réinitialiser",
        ]
    },
}





export const pages = [Déclaration_capture_recherche,new_Déclaration_capture,add_éspeces];
export const login_signup = [login,signup];