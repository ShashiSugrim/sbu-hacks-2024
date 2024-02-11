from fastapi import APIRouter , HTTPException, Body
from pydantic import BaseModel
from typing import List

from backend.models.shoes import Shoes
from backend.config.db import conn 
from backend.schemas.user import shoeEntity, shoesEntity
from bson import ObjectId

user = APIRouter()

@user.get('/')
async def find_all_shoes():
    print(conn.local.user.find()) # <pymongo.cursor.Cursor object at 0x102d72d20>  
    print(shoesEntity(conn.local.user.find())) # converts top into good format with ID ... 
    return shoesEntity(conn.local.user.find())

@user.get('/{id}')
async def find_one_shoe(id):
    return shoeEntity(conn.local.user.find_one({"_id":ObjectId(id)}))

@user.post('/')
async def create_new_shoe(user: Shoes):
    conn.local.user.insert_one(dict(user))
    return shoesEntity(conn.local.user.find())

@user.put('/{id}')
async def update_shoe(id,user: Shoes):
    (conn.local.user.find_one_and_update({"_id":ObjectId(id)},{
        "$set":dict(user)
    }))
    return shoeEntity(conn.local.user.find_one({"_id":ObjectId(id)}))

@user.delete('/{id}')
async def delete_shoe(id,user: Shoes):
    return shoeEntity(conn.local.user.find_one_and_delete({"_id":ObjectId(id)}))

class FilterCriteria(BaseModel):
    gender: str
    priceLow: int
    priceHigh: int
    size: int

@user.post('/filter')
async def filter_shoes(criteria: FilterCriteria):
    query = {
        "gender": criteria.gender,
        "price": {"$gte": criteria.priceLow, "$lte": criteria.priceHigh},
        "size": criteria.size
    }
    shoes = shoesEntity(conn.local.user.find(query))
    if not shoes:
        raise HTTPException(status_code=404, detail="No shoes found matching the criteria")
    return shoes