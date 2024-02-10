from fastapi import FastAPI
from backend.routes.user import user
app = FastAPI()
app.include_router(user)