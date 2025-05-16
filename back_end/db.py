from sqlalchemy import create_engine, Column, Integer, String,Date,Float
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base


db_name = "maydb.db"
DATABASE_URL = "sqlite:///./"+db_name
engine = create_engine(DATABASE_URL)
Session = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def get_db():
    db = Session()
    try:
        yield db
        print("["+db_name+" connected successfully]")
    finally:
        db.close()


class UserModel(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True,unique=True)
    password = Column(String,  index=True)


class Declaration_peche_model(Base):
    __tablename__ = 'Declaration_peche'  # يرجى استبدال هذا باسم الجدول الفعلي

    ID = Column(Integer, primary_key=True)
    NUMEROVISA = Column(String(800))
    #
    DATEDECLARATION = Column(Date)
    ID_REFNAVIRE = Column(Integer)
    #
    ID_REFENTITEDEBARQ = Column(Integer)
    ID_REFENTITEDECLAR = Column(Integer)
    ID_REFTYPEDECLAR = Column(Integer)
    DATEDEBUTMAREE = Column(Date)
    DATEFINMAREE = Column(Date)
    DATEDEBARQ = Column(Date)
    DATEVISA = Column(Date)
    #
    DECLAREPAR = Column(String(10))
    #
    ID_REFREGISTRE = Column(Integer)
    ETAT = Column(String(2))



class PE_PRD_SOURCEESPDC_model (Base):
    __tablename__ = 'PE_PRD_SOURCEESPDC' 

    ID = Column(Integer, primary_key=True)
    ID_REFDECLARATION = Column(Integer)
    ID_REFESPECE = Column(Integer)
    QUANTITE = Column(Float)
    ID_REFUNITEQTE = Column(Integer)
    NBCAISSES = Column(Integer)
    POIDSVIFESTIME = Column(Float)
    POIDSADEBARQUEESTIME = Column(Float)
    POIDSADEBARQUEVERIFIE = Column(Float)
    ID_REFZONEPECHE = Column(Integer)
    LONGITUDE = Column(Float)
    LATITUDE = Column(Float)
    ID_NAVIRE = Column(Integer)
    ID_TYPETRANSFORMATION = Column(Integer)
    POIDSVENDU = Column(Float)


if __name__ == "__main__":
    Base.metadata.create_all(bind=engine)
    print("[Tables created successfully]")
