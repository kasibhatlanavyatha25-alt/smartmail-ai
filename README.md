# SmartMail AI

SmartMail AI is a modern AI-powered email assistant platform developed using React.js, Tailwind CSS, FastAPI, and Python.  
The application is designed to improve email productivity through intelligent classification, tone rewriting, and voice-enabled interaction.

The platform provides users with a clean responsive interface for processing emails using AI-inspired workflows and speech-based accessibility features.

---

## Features

### AI Email Classification
Automatically categorizes emails into:
- Important
- Work
- Finance
- General

### Tone Rewriting
Rewrites emails into:
- Professional Tone
- Friendly Tone

### Voice-to-Text Input
Supports speech recognition for hands-free email writing.

### Text-to-Speech Output
Reads generated email responses aloud using browser speech synthesis.

### Secure Backend Processing
FastAPI backend securely handles email processing requests.

### Responsive Dark-Themed UI
Modern responsive interface developed using Tailwind CSS.

### API Integration
Integrated frontend and backend communication using Axios and FastAPI APIs.

### Deployment Ready Structure
Project structured for:
- GitHub hosting
- Frontend deployment
- Backend deployment
- Environment variable configuration

---

## Screenshots

### SmartMail AI Interface

![SmartMail AI](./assets/smartmail-preview.png)

---

## Project Structure

```bash
smartmail-ai/
│
├── frontend/
│   └── smartmail-react/
│       ├── src/
│       │   ├── components/
│       │   │   └── EmailBox.jsx
│       │   └── App.jsx
│       │
│       ├── package.json
│       └── vite.config.js
│
├── backend/
│   ├── main.py
│   ├── user.py
│   ├── requirements.txt
│   └── .env
│
└── README.md
Technologies Used
Frontend
React.js
Tailwind CSS
Axios
Vite
Backend
FastAPI
Python
Uvicorn
AI & Browser APIs
Gemini AI API
Browser Speech Recognition API
Speech Synthesis API
Functionalities
Email categorization
AI-based tone rewriting
Voice-enabled interaction
Speech output generation
Full-stack frontend/backend communication
Responsive modern UI
Deployment-ready project structure
Deployment Platforms

Frontend can be deployed using:

Vercel
Netlify

Backend can be deployed using:

Render
Railway
FastAPI servers
Author

Navyatha

License

This project is developed for educational and internship demonstration purposes.
