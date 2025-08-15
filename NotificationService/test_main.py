from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_notifications():
    response = client.get("/notifications")
    assert response.status_code == 200
    assert response.json()["message"] == "Notification service works!"
