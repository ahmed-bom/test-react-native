from sqlalchemy import create_engine, Column, Integer, String, Date
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session

DATABASE_URL = "sqlite:///./sql_app.db" 
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
Base = declarative_base()
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

class UserModel(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True,unique=True)
    password = Column(String,  index=True)

class Déclaration_de_capture(Base):
    __tablename__ = 'Déclaration de capture'
    ID = Column(Integer, primary_key=True, index=True)
    Numéro_Immatriculation = Column(Integer)
    Date_Début_Marée = Column(Date)
    Date_Fin_Marée = Column(Date)
    Type_Flotte = Column(String(800))
    Date_Déclaration = Column(Date)
    Port_Decalaration = Column(String(800))
    Numero_Visa = Column(Integer, index=True)
    Registre = Column(String(800))
    Port_Déparquement = Column(String(800))
    Date_Visa = Column(Date)
    Type_Déclaration = Column(String(800))
    Date_Déparquement = Column(Date)
    ETAT = Column(Integer)

class Éspeces(Base):
    __tablename__ = 'Éspeces'
    ID = Column(Integer, primary_key=True, index=True)
    espece = Column(String(800))
    zonePeche = Column(String(800))
    Type_Transformation = Column(String(800))
    Poids_Vit_Est = Column(Integer)
    Poids_Deb_Est = Column(Integer)
    Poids_Deb_Var = Column(Integer)
    id_déclaration = Column(Integer)
    ETAT = Column(Integer)

if __name__ == "__main__":
    Base.metadata.create_all(bind=engine)