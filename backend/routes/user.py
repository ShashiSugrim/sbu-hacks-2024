from fastapi import APIRouter

from backend.models.shoes import Shoes
from backend.config.db import conn 
from backend.schemas.user import shoeEntity, shoesEntity
from bson import ObjectId

user = APIRouter()

@user.get('/')
async def find_all_users():
    print(conn.local.user.find()) # <pymongo.cursor.Cursor object at 0x102d72d20>  
    print(shoesEntity(conn.local.user.find())) # converts top into good format with ID ... 
    return shoesEntity(conn.local.user.find())

@user.get('/{id}')
async def find_one_user(id):
    return shoeEntity(conn.local.user.find_one({"_id":ObjectId(id)}))

@user.post('/')
async def create_users(user: Shoes):
    conn.local.user.insert_one(dict(user))
    return shoesEntity(conn.local.user.find())

@user.put('/{id}')
async def update_user(id,user: Shoes):
    (conn.local.user.find_one_and_update({"_id":ObjectId(id)},{
        "$set":dict(user)
    }))
    return shoeEntity(conn.local.user.find_one({"_id":ObjectId(id)}))

@user.delete('/{id}')
async def delete_user(id,user: Shoes):
    return shoeEntity(conn.local.user.find_one_and_delete({"_id":ObjectId(id)}))