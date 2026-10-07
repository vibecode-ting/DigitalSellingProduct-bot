// ─── Shop Configuration ────────────────────────────────────────────────────
// Fill in these values before deploying. This file is public — never put
// secret keys here, only publishable/public keys.

// 1. Google Sheet "Products" tab published as CSV.
//    Sheets → File → Share → Publish to web → Products sheet → CSV → copy link.
const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/1jD0amv28ni9M_YIbOAu-ucAxp_mUVueG7gLTavL93hY/export?format=csv&gid=0";

// 2. MyanMyanPay PUBLISHABLE key (starts with pk_live_ or pk_test_).
//    Safe to put here — it is designed to be public.
const MMPAY_PUBLISHABLE_KEY = "pk_test_YOUR_PUBLISHABLE_KEY";

// 3. MyanMyanPay merchant display name shown on the payment modal.
const MMPAY_MERCHANT_NAME = "My Digital Shop";

// 4. MyanMyanPay theme: "dark" | "light" | "dark-translucent" | "light-translucent"
const MMPAY_THEME = "light";

// 5. Google Sheets "Inventory" tab — used to fetch & mark accounts as sold
//    after payment. Publish the Inventory tab as CSV too, same way as Products.
//    Leave empty "" to disable auto-delivery via sheet (delivery via Telegram bot instead).
const INVENTORY_CSV_URL = "";

// 6. EmailJS config for email delivery (free at emailjs.com, no backend needed).
//    Leave all empty "" to disable email delivery.
const EMAILJS_SERVICE_ID  = "";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "";   // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY  = "";   // e.g. "user_XXXXXXXXX"

// 7. Telegram bot username for "Buy via Telegram" fallback.
const BOT_USERNAME = "YourBotUsername";

// 8. Your deployed shop name (shown in header).
const SHOP_NAME = "🛍 Digital Shop";
