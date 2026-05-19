from sqlalchemy import Column, Integer, String
from database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    password = Column(String)

class EmailHistory(Base):

    __tablename__ = "email_history"

    id = Column(Integer, primary_key=True, index=True)

    original_text = Column(String)

    category = Column(String)

    professional_version = Column(String)

    friendly_version = Column(String)