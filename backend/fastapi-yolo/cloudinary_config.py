# from dotenv import load_dotenv
# import os
# import cloudinary

# def connectCloudinary():
#     load_dotenv()  # loads .env variables
    
#     # Print to check if variables are loaded
#     print("Cloudinary Name:", os.getenv("CLOUDINARY_NAME"))
#     print("API Key:", os.getenv("CLOUDINARY_API_KEY"))
#     print("API Secret:", os.getenv("CLOUDINARY_SECRET_KEY"))

#     cloudinary.config(
#         cloud_name=os.getenv("CLOUDINARY_NAME"),
#         api_key=os.getenv("CLOUDINARY_API_KEY"),
#         api_secret=os.getenv("CLOUDINARY_SECRET_KEY"),
#         secure=True
#     )
from dotenv import load_dotenv
import os
import cloudinary

def connectCloudinary():
    load_dotenv()
    print("Connecting to Cloudinary...")
    cloudinary.config(
        cloud_name=os.getenv("CLOUDINARY_NAME"),
        api_key=os.getenv("CLOUDINARY_API_KEY"),
        api_secret=os.getenv("CLOUDINARY_SECRET_KEY"),
        secure=True
    )
    print("Connected to Cloudinary:", cloudinary.config().cloud_name)

