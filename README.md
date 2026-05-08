# FairShare 🤝

> Split bills. Settle debts. No servers, no sign-ups, no strings attached.

FairShare is a privacy-first expense splitting app that lives entirely in your browser. Track shared expenses, split bills any way you like, and see exactly who owes whom — all without creating an account or sending your data anywhere.

[![Netlify Status](https://api.netlify.com/api/v1/badges/49859637-d3ce-4fd4-9496-fa68f58dbea4/deploy-status)](https://app.netlify.com/projects/fairsharexpense/deploys)
<a href="https://github.com/sanketbhuite/FairShare/actions"><img src="https://github.com/sanketbhuite/FairShare/actions/workflows/build.yml/badge.svg" alt="Build Status"></a>
---

## ✨ Features

- **No Account Required** — Open the app and start tracking. That's it.
- **100% Private** — All data is stored locally in your browser via IndexedDB. Nothing leaves your device.
- **Works Offline** — Full functionality without an internet connection after the first load.
- **Easy Sharing** — Export expenses as shareable URLs or files to sync with friends.
- **Multi-Currency** — Track expenses in any currency across trips and groups.
- **Smart Balances** — Automatically simplifies debts (if A owes B ₹100 and B owes A ₹30, it shows A owes B ₹70).
- **Dark Mode** — Easy on the eyes, day or night.
- **Receipt Scanner** — Snap or upload a receipt and let FairShare extract the details automatically.
- **AI Chat Input** — Add expenses conversationally. Just type and it's logged.
- **Activity Log** — Full expense history so nothing gets lost.

---

## 🤖 AI-Powered Expense Entry

No more filling out forms. Just describe your expense in plain language and FairShare will parse it automatically.

**Examples:**
```
Add Dinner at Hotel Star, ₹4420
Paid ₹1200 for Uber, split with Raj and Priya
Coffee for 3 people, ₹450, I paid
```

FairShare extracts the amount, description, currency, and participants — and pre-fills the expense form for you to confirm.

---

## 🧾 Receipt & Bank Statement Scanner

Point your camera at a receipt or upload an image — FairShare reads it and pulls out the key details.

- **Supported formats:** JPEG, PNG, WebP, GIF (max 20MB)
- **Input options:** Upload a file or take a photo directly
- **Scan modes:** Receipt or Bank Statement
- Auto-populates amount, merchant name, and date into a new expense record

---

## 📖 How It Works

### Groups
Organize expenses by context — a road trip, shared apartment, dinner party, or any event. Each group maintains its own independent balance summary.

### Records
Every expense entry captures:
- **Amount** and **currency**
- **Who paid**
- **Who it's for**
- **How to split it**
- **Attached receipt** (optional)

### Splitting Methods

| Method | Description | Example |
|---|---|---|
| **Equal** | Split evenly among all participants | ₹300 ÷ 3 = ₹100 each |
| **Percentage** | Custom percentage per person | 50% / 30% / 20% |
| **Exact** | Specific fixed amount per person | ₹120 / ₹80 / ₹100 |
| **Shares** | Ratio-based splitting | 2:1 → ₹200 / ₹100 |

### Balances
FairShare automatically calculates net balances across all expenses in a group and simplifies them into the minimum number of transactions needed to settle up.

### Activity Log
Every add, edit, and delete is tracked in a full activity history so you always have context on how balances changed over time.

### Sharing
- **Export as URL** — Generate a link that encodes your expense data, shareable via any messaging app.
- **Export as File** — Save a `.fairshare` file and send it directly to collaborators.

---

## 🗺️ Roadmap

- [x] Core expense tracking & splitting
- [x] Group management
- [x] Smart balance simplification
- [x] Dark mode
- [x] Receipt photo attachment & scanning
- [x] Expense history & activity log
- [x] AI chat-based expense entry
- [ ] PWA install support
- [ ] QR code sharing
- [ ] Budget limits per group
- [ ] Export to CSV / PDF

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/sanketbhuite/FairShare.git
cd FairShare

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open `http://localhost:5173` in your browser and you're ready to go.

---

## 🤝 Contributing

Contributions are welcome! Please open an issue to discuss what you'd like to change before submitting a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

MIT © [Sanket Bhuite](https://github.com/sanketbhuite)

---

<div align="center">
  <sub>Built with ❤️ for people who hate awkward money conversations.</sub>
</div>
