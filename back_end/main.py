from datetime import date
from typing import Optional, List

from fastapi import FastAPI, HTTPException, Depends, Query
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from db import *
from models import *

app = FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()



def get_hashed_password(pas):
    # TODO
    return pas


@app.post("/signup")
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





@app.post("/declarations/", response_model=DéclarationDeCaptureResponse, summary="إضافة إعلان جديد")
def create_declaration(declaration: DéclarationDeCaptureCreate, db: Session = Depends(get_db)):
    db_declaration = Déclaration_de_capture(**declaration.dict())
    db.add(db_declaration)
    db.commit()
    db.refresh(db_declaration)
    return db_declaration




@app.put("/declarations/{declaration_id}", response_model=DéclarationDeCaptureResponse, summary="تعديل إعلان موجود")
def update_declaration(declaration_id: int, declaration: DéclarationDeCaptureUpdate, db: Session = Depends(get_db)):
    db_declaration = db.query(Déclaration_de_capture).filter(Déclaration_de_capture.ID == declaration_id).first()
    if not db_declaration:
        raise HTTPException(status_code=404, detail="Declaration not found")
    
    for key, value in declaration.dict(exclude_unset=True).items():
        setattr(db_declaration, key, value)
    
    db.commit()
    db.refresh(db_declaration)
    return db_declaration





@app.delete("/declarations/{declaration_id}", summary="حذف إعلان")
def delete_declaration(declaration_id: int, db: Session = Depends(get_db)):
    db_declaration = db.query(Déclaration_de_capture).filter(Déclaration_de_capture.ID == declaration_id).first()
    if not db_declaration:
        raise HTTPException(status_code=404, detail="Declaration not found")
    db.delete(db_declaration)
    db.commit()
    return {"message": "Declaration deleted successfully"}





@app.get("/declarations/search/", response_model=List[DéclarationDeCaptureResponse], summary="البحث عن إعلانات")
def search_declarations(
    Numero_Visa: Optional[int] = Query(None, description="رقم التأشيرة"),
    Numero_Immatriculation: Optional[int] = Query(None, description="رقم التسجيل"),
    Port_Declaration: Optional[str] = Query(None, description="ميناء الإعلان"),
    Periode_DU: Optional[date] = Query(None, description="تاريخ بداية الفترة (للبحث عن تاريخ الإعلان)"),
    Periode_AU: Optional[date] = Query(None, description="تاريخ نهاية الفترة (للبحث عن تاريخ الإعلان)"),
    db: Session = Depends(get_db)
):
   
    query = db.query(Déclaration_de_capture)

    if  Numero_Visa is not None:
        query = query.filter(Déclaration_de_capture.Numero_Visa ==  Numero_Visa)
    if Numero_Immatriculation is not None:
        query = query.filter(Déclaration_de_capture.Numéro_Immatriculation == Numero_Immatriculation)
    if Port_Declaration:
        query = query.filter(Déclaration_de_capture.Port_Decalaration.ilike(f"%{Port_Declaration}%")) # ilike for case-insensitive search

    if Periode_DU and Periode_AU:
        query = query.filter(Déclaration_de_capture.Date_Déclaration >= Periode_DU,
                             Déclaration_de_capture.Date_Déclaration <= Periode_AU)
    elif Periode_DU:
        query = query.filter(Déclaration_de_capture.Date_Déclaration >= Periode_DU)
    elif Periode_AU:
        query = query.filter(Déclaration_de_capture.Date_Déclaration <= Periode_AU)

    declarations = query.all()
    return declarations









@app.post("/especes/", response_model=ÉspecesResponse, summary="إضافة نوع سمك جديد")
def create_espece(espece: ÉspecesCreate, db: Session = Depends(get_db)):
    db_espece = Éspeces(**espece.dict())
    db.add(db_espece)
    db.commit()
    db.refresh(db_espece)
    return db_espece




@app.put("/especes/{espece_id}", response_model=ÉspecesResponse, summary="تعديل نوع سمك موجود")
def update_espece(espece_id: int, espece: ÉspecesUpdate, db: Session = Depends(get_db)):
    db_espece = db.query(Éspeces).filter(Éspeces.ID == espece_id).first()
    if not db_espece:
        raise HTTPException(status_code=404, detail="Espece not found")
    
    for key, value in espece.dict(exclude_unset=True).items():
        setattr(db_espece, key, value)
    
    db.commit()
    db.refresh(db_espece)
    return db_espece




@app.delete("/especes/{espece_id}", summary="حذف نوع سمك")
def delete_espece(espece_id: int, db: Session = Depends(get_db)):
    db_espece = db.query(Éspeces).filter(Éspeces.ID == espece_id).first()
    if not db_espece:
        raise HTTPException(status_code=404, detail="Espece not found")
    db.delete(db_espece)
    db.commit()
    return {"message": "Espece deleted successfully"}



ip_host = "127.0.0.1"
ip_host = "192.168.151.142"

if __name__ == "__main__":
    uvicorn.run("main:app", host= ip_host ,port= 8000,reload= True)