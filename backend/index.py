from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
# Ensure this import path is correct
from backend.routes.user import user_router

app = FastAPI()

# Setup CORS middleware
origins = [
    "http://localhost:3000",  # Add other origins as needed
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include the router from user.py
app.include_router(user_router)  # Adjust the prefix as needed
