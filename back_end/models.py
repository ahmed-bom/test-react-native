from pydantic import BaseModel
from datetime import date
from typing import Optional

class UserCreate(BaseModel):
    name: str
    password: str

class DéclarationDeCaptureCreate(BaseModel):
    Numéro_Immatriculation: int
    Date_Début_Marée: date
    Date_Fin_Marée: date
    Type_Flotte: str
    Date_Déclaration: date
    Port_Decalaration: str
    Numero_Visa: int
    Registre: str
    Port_Déparquement: str
    Date_Visa: date
    Type_Déclaration: str
    Date_Déparquement: date
    ETAT: int




class DéclarationDeCaptureUpdate(BaseModel):
    Numéro_Immatriculation: Optional[int] = None
    Date_Début_Marée: Optional[date] = None
    Date_Fin_Marée: Optional[date] = None
    Type_Flotte: Optional[str] = None
    Date_Déclaration: Optional[date] = None
    Port_Decalaration: Optional[str] = None
    Numero_Visa: Optional[int] = None
    Registre: Optional[str] = None
    Port_Déparquement: Optional[str] = None
    Date_Visa: Optional[date] = None
    Type_Déclaration: Optional[str] = None
    Date_Déparquement: Optional[date] = None
    ETAT: Optional[int] = None

class DéclarationDeCaptureResponse(DéclarationDeCaptureCreate):
    ID: int

    class Config:
        orm_mode = True

class ÉspecesCreate(BaseModel):
    espece: str
    zonePeche: str
    Type_Transformation: str
    Poids_Vit_Est: int
    Poids_Deb_Est: int
    Poids_Deb_Var: int
    id_déclaration: int
    ETAT : int

class ÉspecesUpdate(BaseModel):
    espece: Optional[str] = None
    zonePeche: Optional[str] = None
    Type_Transformation: Optional[str] = None
    Poids_Vit_Est: Optional[int] = None
    Poids_Deb_Est: Optional[int] = None
    Poids_Deb_Var: Optional[int] = None
    id_déclaration: Optional[int] = None
    ETAT : Optional[int] = None

class ÉspecesResponse(ÉspecesCreate):
    ID: int

    class Config:
        orm_mode = True
