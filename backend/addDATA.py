import requests
import json

# Define the API endpoint
api_endpoint = "http://localhost:8000/"

def post_shoe_data(shoe_json):
    """Send a POST request with the shoe data."""
    response = requests.post(api_endpoint, json=shoe_json)
    return response

def main(file_path):
    # Load the JSON data from the file
    with open(file_path, 'r') as file:
        shoes = json.load(file)
    
    # Iterate over each shoe item and send it as a POST request
    for shoe in shoes:
        response = post_shoe_data(shoe)
        print(f"Response for {shoe['title']}: {response.status_code}")

if __name__ == "__main__":
    file_path = "data3.json"  # Update with the correct path to your data file
    main(file_path)
