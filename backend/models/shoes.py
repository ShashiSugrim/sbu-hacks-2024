from pydantic import BaseModel
from enum import Enum

# class Gender(str, Enum):
#     male = 'male'
#     female = 'female'
#     kids = 'kids'
#     unisex = 'unisex'

class Shoes(BaseModel):
    title:str
    brand:str
    size:int
    gender:str
    price:int
    width:str
    color:str
    categories:str