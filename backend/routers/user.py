from fastapi import APIRouter
import google.generativeai as genai
import os

from dotenv import load_dotenv

load_dotenv()

router = APIRouter()

# GEMINI CONFIG

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel("gemini-pro")


# EMAIL CLASSIFICATION

@router.post("/users/classify")

def classify_email(text: str):

    text = text.lower()

    if "urgent" in text:

        category = "Important"

    elif "meeting" in text:

        category = "Work"

    elif "payment" in text:

        category = "Finance"

    else:

        category = "General"

    return {

        "category": category
    }


# EMAIL REWRITING

@router.post("/users/rewrite")

def rewrite_email(text: str):

    professional = f"""

Dear Sir/Madam,

{text}

Regards,
SmartMail AI
"""

    friendly = f"""

Hey!

{text}

Thanks :)
"""

    return {

        "professional": professional,

        "friendly": friendly
    }