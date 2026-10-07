// ─── Shop Configuration ────────────────────────────────────────────────────
// Fill in these two values before deploying.

// 1. Your Google Sheet "Products" tab published as CSV.
//    In Google Sheets → File → Share → Publish to web
//    → Products sheet → CSV → Publish → copy the link here.
const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/1jD0amv28ni9M_YIbOAu-ucAxp_mUVueG7gLTavL93hY/export?format=csv&gid=0";

// 2. Your deployed backend API URL (where your bot server is running publicly).
//    e.g. "https://my-bot.railway.app"  or  "https://my-bot.render.com"
//    Leave as empty string "" to disable checkout (products will still show).
const BACKEND_API = "";

// 3. Your Telegram bot username (without @), for the "Buy on Telegram" fallback.
const BOT_USERNAME = "YourBotUsername";
