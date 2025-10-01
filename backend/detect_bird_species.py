import os
from google.cloud import vision

# Set up Google Cloud credentials
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = r"C:\Users\karun\Downloads\birds\backend\credentials.json"

def detect_bird_species(image_path):
    """Detects bird species from an image using Google Cloud Vision API"""
    client = vision.ImageAnnotatorClient()

    # Read the image file
    with open(image_path, "rb") as image_file:
        content = image_file.read()

    image = vision.Image(content=content)
    response = client.object_localization(image=image)

    # Handle potential API errors
    if response.error.message:
        raise Exception(f"Error in Vision API: {response.error.message}")

    objects = response.localized_object_annotations

    # Extract bird species with confidence threshold
    birds = [obj.name for obj in objects if obj.score > 0.5]

    return birds