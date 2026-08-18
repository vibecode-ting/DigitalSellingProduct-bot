import "dotenv/config";
import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });
const spreadsheetId = process.env.GOOGLE_SHEET_ID;

async function seed() {
  console.log("📊 Getting spreadsheet info...");
  const { data: spreadsheet } = await sheets.spreadsheets.get({ spreadsheetId });
  const existingSheets = spreadsheet.sheets.map((s) => s.properties.title);
  console.log("Existing tabs:", existingSheets);

  const tabs = [
    {
      name: "Products",
      headers: ["Product ID", "Product Name", "Variant", "Type", "Price (MMK)", "Description", "Active", "Promo", "Promo Price", "Duration", "Icon", "Category"],
      rows: [
        ["NET-001", "Netflix", "Share Acc", "auto", "5000", "Netflix Premium - Share account (4K, 4 screens)", "Yes", "No", "", "1 Month", "🎬", "Entertainment"],
        ["NET-002", "Netflix", "Private", "auto", "12000", "Netflix Premium - Private account (4K, 4 screens)", "Yes", "Yes", "10000", "1 Month", "🎬", "Entertainment"],
        ["NET-003", "Netflix", "Share Acc", "auto", "12000", "Netflix Premium - Share account (4K, 4 screens)", "Yes", "No", "", "3 Months", "🎬", "Entertainment"],
        ["CAP-001", "CapCut", "Share Acc", "auto", "3000", "CapCut Pro - Share account with AI features", "Yes", "Yes", "2500", "1 Month", "✂️", "Tools"],
        ["CAP-002", "CapCut", "Private", "auto", "8000", "CapCut Pro - Private account", "Yes", "No", "", "1 Month", "✂️", "Tools"],
        ["CHAT-001", "ChatGPT", "Share Acc", "auto", "4000", "ChatGPT Plus - Share account (GPT-4, DALL-E)", "Yes", "No", "", "1 Month", "🤖", "AI Tools"],
        ["CHAT-002", "ChatGPT", "Private", "auto", "10000", "ChatGPT Plus - Private account", "Yes", "No", "", "1 Month", "🤖", "AI Tools"],
        ["VPN-001", "Outline VPN", "1 Month", "manual", "3000", "Outline VPN - Fast & secure connection", "Yes", "No", "", "1 Month", "🔒", "VPN"],
        ["VPN-002", "Outline VPN", "3 Months", "manual", "7000", "Outline VPN - Fast & secure connection", "Yes", "No", "", "3 Months", "🔒", "VPN"],
        ["CANVA-001", "Canva", "Pro", "manual", "5000", "Canva Pro - Premium design tools", "Yes", "No", "", "1 Year", "🎨", "Design"],
      ],
    },
    {
      name: "Inventory",
      headers: ["Inventory ID", "Product ID", "Credentials", "Status", "Sold To", "Order ID", "Used Date Time"],
      rows: [
        ["INV-001", "NET-001", "netflix_user1@email.com / Pass@123", "Available", "", "", ""],
        ["INV-002", "NET-001", "netflix_user2@email.com / Pass@456", "Available", "", "", ""],
        ["INV-003", "NET-001", "netflix_user3@email.com / Pass@789", "Available", "", "", ""],
        ["INV-004", "NET-002", "netflix_private1@email.com / Priv@123", "Available", "", "", ""],
        ["INV-005", "NET-002", "netflix_private2@email.com / Priv@456", "Available", "", "", ""],
        ["INV-006", "NET-003", "netflix_3mo_1@email.com / 3mo@123", "Available", "", "", ""],
        ["INV-007", "NET-003", "netflix_3mo_2@email.com / 3mo@456", "Available", "", "", ""],
        ["INV-008", "CAP-001", "capcut_share1@email.com / Cap@123", "Available", "", "", ""],
        ["INV-009", "CAP-001", "capcut_share2@email.com / Cap@456", "Available", "", "", ""],
        ["INV-010", "CAP-002", "capcut_priv1@email.com / Priv@123", "Available", "", "", ""],
        ["INV-011", "CHAT-001", "chatgpt_share1@email.com / Chat@123", "Available", "", "", ""],
        ["INV-012", "CHAT-001", "chatgpt_share2@email.com / Chat@456", "Available", "", "", ""],
        ["INV-013", "CHAT-002", "chatgpt_priv1@email.com / Priv@123", "Available", "", "", ""],
      ],
    },
    {
      name: "Orders",
      headers: ["Order ID", "Date Created", "Customer Username", "Customer Chat ID", "Product ID", "Product Name", "Variant", "Price", "Payment Status", "Payslip Sent", "Admin Decision", "Decision Time", "Delivery Status", "Inventory ID Used", "Credentials Sent", "Used DateTime", "Expiry Date"],
      rows: [],
    },
    {
      name: "Tips",
      headers: ["Key", "Tips"],
      rows: [
        ["Netflix", "Login ပြီးရင် Profile ကို ရွေးပြီးသုံးပါ။ တခြားသူတွေရဲ့ Profile ကို မထိပါနဲ့။ Sign out လုပ်ပြီး ပြန်ဝင်တာ မလုပ်ပါနဲ့။"],
        ["Netflix | Share Acc", "Share account ဖြစ်တဲ့အတွက် တခြားသူတွေနဲ့ အတူသုံးပါမယ်။ Profile ကို ရွေးပြီးသုံးပါ။"],
        ["Netflix | Private", "Private account ဖြစ်တဲ့အတွက် သင်တစ်ယောက်တည်းသုံးပါ။ Password ပြောင်းတာ မလုပ်ပါနဲ့။"],
        ["CapCut", "CapCut Pro features ကို အပြည့်အဝသုံးနိုင်ပါတယ်။ AI features တွေပါဝင်ပါတယ်။"],
        ["ChatGPT", "ChatGPT Plus account ဖြစ်တဲ့အတွက် GPT-4, DALL-E အပါအဝင် features အားလုံးသုံးနိုင်ပါတယ်။"],
        ["auto", "Account details ကို ဂရုတစိုက်သိမ်းပါ။ Password ပြောင်းတာ မလုပ်ပါနဲ့။"],
        ["manual", "Admin ကို ဆက်သွယ်ပြီး activation ဆက်လုပ်ပါ။"],
      ],
    },
    {
      name: "FAQ",
      headers: ["Key", "Question", "Answer", "Image"],
      rows: [
        ["Netflix", "Netflix account ကို ဘယ်လို login ဝင်ရမလဲ?", "Email နဲ့ Password ကို ပေးပါမယ်။ Netflix website မှာ login ဝင်ပါ။", ""],
        ["Netflix", "Netflix account သက်တမ်း ဘယ်လောက်ကြာလဲ?", "ဝယ်ယူတဲ့အချိန်ကနေ 1 Month / 3 Months ရှိပါတယ်။", ""],
        ["Netflix", "Netflix share account ဆိုတာ ဘာလဲ?", "တခြားသူတွေနဲ့ အတူသုံးတာပါ။ Profile ကို ရွေးပြီးသုံးပါ။", ""],
        ["CapCut", "CapCut Pro features ဘာတွေပါလဲ?", "AI features, templates, effects, transitions အားလုံးပါဝင်ပါတယ်။", ""],
        ["ChatGPT", "ChatGPT Plus က GPT-4 သုံးလို့ရလား?", "ဟုတ်ပါတယ်။ GPT-4, DALL-E, plugins အားလုံးသုံးနိုင်ပါတယ်။", ""],
      ],
    },
    {
      name: "Settings",
      headers: ["Key", "Value"],
      rows: [
        ["Shop Name", "My Digital Shop"],
        ["Bank Account Number", "1234567890"],
        ["Bank Account Name", "My Shop Name"],
        ["Accepted Payment Methods", "KBZ Pay / Wave Money / Bank Transfer"],
        ["Admin Telegram Username", ""],
        ["Admin Contact Phone", ""],
        ["Urgent Contact Phone", ""],
        ["Payment Note Instruction", "ငွေလွှဲပြီးရင် screenshot ကို ဒီမှာ ပို့ပေးပါ။"],
      ],
    },
  ];

  for (const tab of tabs) {
    if (existingSheets.includes(tab.name)) {
      console.log(`✅ Tab "${tab.name}" already exists, skipping creation`);
    } else {
      console.log(`➕ Creating tab "${tab.name}"...`);
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        requestBody: {
          requests: [{ addSheet: { properties: { title: tab.name } } }],
        },
      });
    }

    if (tab.rows.length > 0) {
      console.log(`📝 Writing ${tab.rows.length} rows to "${tab.name}"...`);
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `${tab.name}!A1`,
        valueInputOption: "USER_ENTERED",
        requestBody: { values: [tab.headers, ...tab.rows] },
      });
    } else {
      console.log(`📝 Writing headers only to "${tab.name}"...`);
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `${tab.name}!A1`,
        valueInputOption: "USER_ENTERED",
        requestBody: { values: [tab.headers] },
      });
    }
  }

  console.log("\n🎉 Seeding complete! Your sheet is ready.");
  console.log("Open it: https://docs.google.com/spreadsheets/d/" + spreadsheetId + "/edit");
}

seed().catch((err) => {
  console.error("❌ Error:", err.message);
  if (err.message.includes("Unable to parse range")) {
    console.log("💡 Make sure you shared the sheet with:", process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
  }
});
