def shoeEntity (item) -> dict:
    return {
        "id":str(item["_id"]),
        "title":item["title"],
        "brand":item["brand"],
        "size":item["size"],
        "gender":item["gender"], 
        "price":item["price"], 
        "width":item["width"], 
        "color":item["color"], 
        "img_url":item["img_url"], 
        "categories":item["categories"], 
    }

def shoesEntity(entity) -> list:
    return [shoeEntity(item) for item in entity]

def serializeDict(a) -> dict: # can use this in routes interchangable with userEntity
    return {**{i:str(a[i]) for i in a if i=='_id'}, **{i:a[i] for i in a if i!='_id'}}

def serializeList(entity) -> list: # can use this in routes interchangable with usersEntity 
    return [serializeDict(a) for a in entity ]