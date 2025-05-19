from pydantic import BaseModel
from datetime import date
from typing import Optional




class UserCreate(BaseModel):
    name: str
    password: str


#class User():
#    id: int
#    name: str
#    password: str
#    class Config:
#        orm_mode = True



class Declaration_Peche_Create(BaseModel):
    NUMEROVISA: Optional[str] = None
    DATEDECLARATION: Optional[date] = None
    ID_REFNAVIRE: Optional[int] = None
    ID_REFENTITEDEBARQ: Optional[int] = None
    ID_REFENTITEDECLAR: Optional[int] = None
    ID_REFTYPEDECLAR: Optional[int] = None
    DATEDEBUTMAREE: Optional[date] = None
    DATEFINMAREE: Optional[date] = None
    DATEDEBARQ: Optional[date] = None
    DATEVISA: Optional[date] = None
    DECLAREPAR: Optional[str] = None
    ID_REFREGISTRE: Optional[int] = None
    ETAT: Optional[str] = None

class DeclarationPeche(Declaration_Peche_Create):
    ID: int
    class Config:
        orm_mode = True

class PE_PRD_SOURCEESPC_Create(BaseModel):
    ID_REFDECLARATION: Optional[int] = None
    ID_REFESPECE: Optional[int] = None
    QUANTITE: Optional[float] = None
    ID_REFUNITEQTE: Optional[int] = None
    NBCAISSES: Optional[int] = None
    POIDSVIFESTIME: Optional[float] = None
    POIDSADEBARQUEESTIME: Optional[float] = None
    POIDSADEBARQUEVERIFIE: Optional[float] = None
    ID_REFZONEPECHE: Optional[int] = None
    LONGITUDE: Optional[float] = None
    LATITUDE: Optional[float] = None
    ID_NAVIRE: Optional[int] = None
    ID_TYPETRANSFORMATION: Optional[int] = None
    POIDSVENDU: Optional[float] = None

class PE_PRD_SOURCEESPDC_Read(PE_PRD_SOURCEESPC_Create):
    ID: int
    class Config:
        orm_mode = True