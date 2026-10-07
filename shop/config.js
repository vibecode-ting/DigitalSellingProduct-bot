// ─── Shop Configuration ────────────────────────────────────────────────────
// Fill in these values before deploying. This file is public — never put
// secret keys here, only publishable/public keys.

// 1. Google Sheet "Products" tab published as CSV.
const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQmg1w_v3mBYY9ARwsM0iL2TnOuhCY2DP4BSYymVwxvmbYAGpUz6oJZqRW4Ie9b2uytxqc4Ace1G7qo/pub?gid=1036869298&single=true&output=csv";

// 2. MyanMyanPay PUBLISHABLE key (safe for browser)
const MMPAY_PUBLISHABLE_KEY = "pk_test_e1f8d7439531224613070f483ea6376431d6d73aeff839cd4d9413f9ebe258ef";

// 3. MyanMyanPay merchant display name
const MMPAY_MERCHANT_NAME = "My Digital Shop";

// 4. MyanMyanPay theme: "dark" | "light" | "dark-translucent" | "light-translucent"
const MMPAY_THEME = "light";

// 5. Google Sheets "Inventory" tab published as CSV (optional)
const INVENTORY_CSV_URL = "";

// 6. EmailJS config for browser email delivery (emailjs.com)
const EMAILJS_SERVICE_ID  = "service_rxcwrho";
const EMAILJS_TEMPLATE_ID = "";   // Fill in your template ID (e.g. template_xxxx)
const EMAILJS_PUBLIC_KEY  = "";   // Fill in your public key (e.g. user_xxxx or public key)

// 7. Telegram bot username for fallback
const BOT_USERNAME = "YourBotUsername";

// 8. Shop display name
const SHOP_NAME = "🛍 Digital Shop";
