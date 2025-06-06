from fastapi import FastAPI, Request
import gspread
from oauth2client.service_account import ServiceAccountCredentials

app = FastAPI()

# Google Sheets Setup
scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]
creds = ServiceAccountCredentials.from_json_keyfile_name("google-creds.json", scope)
client = gspread.authorize(creds)
sheet = client.open("Voice Interview Log").sheet1  # Sheet name

@app.post("/vapi-webhook")
async def receive_webhook(request: Request):
    data = await request.json()
    print("Webhook Received:", data)

    if data.get("event") == "call_ended":
        call_id = data.get("call_id", "")
        transcript = data.get("transcript", "")
        audio_url = data.get("audio_url", "")
        duration = data.get("duration", "")
        timestamp = data.get("timestamp", "")

        # Store in Google Sheets
        sheet.append_row([call_id, timestamp, duration, transcript, audio_url])

    return {"status": "ok"}
