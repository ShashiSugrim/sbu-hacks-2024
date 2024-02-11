from fastapi import APIRouter, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from bson import ObjectId

from backend.models.shoes import Shoes
from backend.config.db import conn
from backend.schemas.user import shoeEntity, shoesEntity

# Create a router instance instead of FastAPI app
user_router = APIRouter()

# Define your routes using the router instance


@user_router.get('/')
async def find_all_shoes():
    return shoesEntity(conn.local.user.find())


@user_router.get('/{id}')
async def find_one_shoe(id: str):
    return shoeEntity(conn.local.user.find_one({"_id": ObjectId(id)}))


@user_router.post('/')
async def create_new_shoe(shoe: Shoes):
    conn.local.user.insert_one(dict(shoe))
    return shoesEntity(conn.local.user.find())


@user_router.put('/{id}')
async def update_shoe(id: str, shoe: Shoes):
    conn.local.user.find_one_and_update(
        {"_id": ObjectId(id)}, {"$set": dict(shoe)})
    return shoeEntity(conn.local.user.find_one({"_id": ObjectId(id)}))


@user_router.delete('/{id}')
async def delete_shoe(id: str):
    return shoeEntity(conn.local.user.find_one_and_delete({"_id": ObjectId(id)}))


class FilterCriteria(BaseModel):
    gender: str
    priceLow: int
    priceHigh: int
    size: int


@user_router.post('/filter')
async def filter_shoes(criteria: FilterCriteria):
    query = {
        "gender": criteria.gender,
        "price": {"$gte": criteria.priceLow, "$lte": criteria.priceHigh},
        "size": criteria.size
    }
    shoes = shoesEntity(conn.local.user.find(query))
    if not shoes:
        raise HTTPException(
            status_code=404, detail="No shoes found matching the criteria")
    return shoes
