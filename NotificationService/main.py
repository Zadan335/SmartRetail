from fastapi import FastAPI

app = FastAPI()

@app.get("/notifications")
def read_notifications():
    return {"message": "Notification service works!"}
