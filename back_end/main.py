from typing import List, Optional
from datetime import date
from fastapi import FastAPI, HTTPException, Query,Depends
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from db import (
                    get_db,
                    Session,
                    UserModel,
                    Declaration_peche_model,
                    PE_PRD_SOURCEESPDC_model
                )

from pydantic_my_models import (
                                    UserCreate,
                                    Declaration_Peche_Create,
                                    DeclarationPeche,
                                    PE_PRD_SOURCEESPC_Create,
                                    PE_PRD_SOURCEESPDC_Read
                                )



app = FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_hashed_password(pas):
    # TODO
    return pas


@app.post("/register")
def register_user(user: UserCreate, db: Session = Depends(get_db)):
    existing_user = db.query(UserModel).filter_by(name=user.name).first()
    
    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="user nam already registered")

    encrypted_password =get_hashed_password(user.password)
    new_user = UserModel(name=user.name, password=user.password)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {"message": 200}



@app.post('/login')
def login(user: UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(UserModel).filter_by(name=user.name).first()

    if db_user is None:
        raise HTTPException(
            status_code=404,
            detail="Incorrect user name")
    
    is_corect_password = get_hashed_password(user.password) == db_user.password
 
    if is_corect_password == False:
        raise HTTPException(
            status_code=400,
            detail="Incorrect password"
        )
    
    return {"login" : 200}


@app.post("/declarations/", response_model=DeclarationPeche)
def create_declaration(declaration: Declaration_Peche_Create, db: Session = Depends(get_db)):
    db_declaration = Declaration_peche_model(**declaration.dict(exclude_unset=True))
    db.add(db_declaration)
    db.commit()
    db.refresh(db_declaration)
    return db_declaration


@app.get("/declarations/{declaration_id}", response_model=DeclarationPeche)
def read_declaration(declaration_id: int, db: Session = Depends(get_db)):
    db_declaration = db.query(Declaration_peche_model).filter(Declaration_peche_model.ID == declaration_id).first()
    if db_declaration is None:
        raise HTTPException(status_code=404, detail="Declaration not found")
    return db_declaration

@app.get("/declarations/", response_model=List[DeclarationPeche])
def read_declarations(db: Session = Depends(get_db)):
    declarations = db.query(Declaration_peche_model).all()
    return declarations

@app.post("/declarations/search/", response_model=List[DeclarationPeche])
def search_declarations(declaration:Declaration_Peche_Create,db: Session = Depends(get_db)):
    
    
    query = db.query(Declaration_peche_model)
    if declaration.NUMEROVISA is not "":
        query = query.filter(Declaration_peche_model.NUMEROVISA.like(f"%{declaration.NUMEROVISA}%"))
    
    if declaration.DATEDECLARATION is not "":
        query = query.filter(Declaration_peche_model.DATEDECLARATION == declaration.DATEDECLARATION)
    
    if declaration.ID_REFNAVIRE is not "":
        query = query.filter(Declaration_peche_model.ID_REFNAVIRE == declaration.ID_REFNAVIRE)
    
    if declaration.ID_REFENTITEDEBARQ is not "":
        query = query.filter(Declaration_peche_model.ID_REFENTITEDEBARQ == declaration.ID_REFENTITEDEBARQ)
    
    if declaration.ID_REFENTITEDECLAR is not "":
        query = query.filter(Declaration_peche_model.ID_REFENTITEDECLAR == declaration.ID_REFENTITEDECLAR)
    
    if declaration.ID_REFTYPEDECLAR is not "":
        query = query.filter(Declaration_peche_model.ID_REFTYPEDECLAR == declaration.ID_REFTYPEDECLAR)
    
    if declaration.DATEDEBUTMAREE is not "":
        query = query.filter(Declaration_peche_model.DATEDEBUTMAREE == declaration.DATEDEBUTMAREE)
    
    if declaration.DATEFINMAREE is not "":
        query = query.filter(Declaration_peche_model.DATEFINMAREE == declaration.DATEFINMAREE)
    
    if declaration.DATEDEBARQ is not "":
        query = query.filter(Declaration_peche_model.DATEDEBARQ == declaration.DATEDEBARQ)
    
    if declaration.DATEVISA is not "":
        query = query.filter(Declaration_peche_model.DATEVISA == declaration.DATEVISA)
    
    if declaration.DECLAREPAR is not "":
        query = query.filter(Declaration_peche_model.DECLAREPAR.like(f"%{declaration.DECLAREPAR}%"))
    
    if declaration.ID_REFREGISTRE is not "":
        query = query.filter(Declaration_peche_model.ID_REFREGISTRE == declaration.ID_REFREGISTRE)
    
    if declaration.ETAT is not "":
        query = query.filter(Declaration_peche_model.ETAT == declaration.ETAT)
    
    return query.all()



# ===========================================================



@app.post("/produits/", response_model=PE_PRD_SOURCEESPDC_Read)
def create_produit(produit: PE_PRD_SOURCEESPC_Create, db: Session = Depends(get_db)):
    db_produit = PE_PRD_SOURCEESPDC_model(**produit.dict(exclude_unset=True))
    db.add(db_produit)
    db.commit()
    db.refresh(db_produit)
    return db_produit

@app.get("/produits/{produit_id}", response_model=PE_PRD_SOURCEESPDC_Read)
def read_produit(produit_id: int, db: Session = Depends(get_db)):
    db_produit = db.query(PE_PRD_SOURCEESPDC_model).filter(PE_PRD_SOURCEESPDC_model.ID == produit_id).first()
    if db_produit is None:
        raise HTTPException(status_code=404, detail="Produit not found")
    return db_produit

@app.get("/produits/", response_model=List[PE_PRD_SOURCEESPDC_Read])
def read_produits( db: Session = Depends(get_db)):
    produits = db.query(PE_PRD_SOURCEESPDC_model).all()
    return produits

@app.get("/produits/search/", response_model=List[PE_PRD_SOURCEESPDC_Read])
def search_produits(
    id_refdeclaration: Optional[int] = Query(None),
    id_refespece: Optional[int] = Query(None),
    quantite: Optional[float] = Query(None),
    id_refuniteqte: Optional[int] = Query(None),
    nbcaisses: Optional[int] = Query(None),
    poidsvifestime: Optional[float] = Query(None),
    poidsadebarqueestime: Optional[float] = Query(None),
    poidsadebarqueverifie: Optional[float] = Query(None),
    id_refzonepeche: Optional[int] = Query(None),
    longitude: Optional[float] = Query(None),
    latitude: Optional[float] = Query(None),
    id_navire: Optional[int] = Query(None),
    id_typetransformation: Optional[int] = Query(None),
    poidsvendu: Optional[float] = Query(None),
    db: Session = Depends(get_db)
):
    query = db.query(PE_PRD_SOURCEESPDC_model)
    if id_refdeclaration is not None:
        query = query.filter(PE_PRD_SOURCEESPDC_model.ID_REFDECLARATION == id_refdeclaration)
    if id_refespece is not None:
        query = query.filter(PE_PRD_SOURCEESPDC_model.ID_REFESPECE == id_refespece)
    if quantite is not None:
        query = query.filter(PE_PRD_SOURCEESPDC_model.QUANTITE == quantite)
    if id_refuniteqte is not None:
        query = query.filter(PE_PRD_SOURCEESPDC_model.ID_REFUNITEQTE == id_refuniteqte)
    if nbcaisses is not None:
        query = query.filter(PE_PRD_SOURCEESPDC_model.NBCAISSES == nbcaisses)
    if poidsvifestime is not None:
        query = query.filter(PE_PRD_SOURCEESPDC_model.POIDSVIFESTIME == poidsvifestime)
    if poidsadebarqueestime is not None:
        query = query.filter(PE_PRD_SOURCEESPDC_model.POIDSADEBARQUEESTIME == poidsadebarqueestime)
    if poidsadebarqueverifie is not None:
        query = query.filter(PE_PRD_SOURCEESPDC_model.POIDSADEBARQUEVERIFIE == poidsadebarqueverifie)
    if id_refzonepeche is not None:
        query = query.filter(PE_PRD_SOURCEESPDC_model.ID_REFZONEPECHE == id_refzonepeche)
    if longitude is not None:
        query = query.filter(PE_PRD_SOURCEESPDC_model.LONGITUDE == longitude)
    if latitude is not None:
        query = query.filter(PE_PRD_SOURCEESPDC_model.LATITUDE == latitude)
    if id_navire is not None:
        query = query.filter(PE_PRD_SOURCEESPDC_model.ID_NAVIRE == id_navire)
    if id_typetransformation is not None:
        query = query.filter(PE_PRD_SOURCEESPDC_model.ID_TYPETRANSFORMATION == id_typetransformation)
    if poidsvendu is not None:
        query = query.filter(PE_PRD_SOURCEESPDC_model.POIDSVENDU == poidsvendu)
    return query.all()




@app.get('/test/{text}')
async def test(text:str):
    return {"test" : text}



if __name__ == "__main__":
    uvicorn.run("main:app", host= "127.0.0.1",port= 8000,reload= True)
