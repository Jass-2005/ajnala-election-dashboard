# 11-Ajnala Election Intelligence Command Center (2022 vs 2024)

[![Live Dashboard](https://img.shields.io/badge/Live-Dashboard-emerald?style=for-the-badge&logo=github)](https://jass-2005.github.io/ajnala-election-dashboard/)
[![Audited Booths](https://img.shields.io/badge/Audited_Booths-188_Total-blue?style=for-the-badge)](https://jass-2005.github.io/ajnala-election-dashboard/)
[![Renumbering Audit](https://img.shields.io/badge/Numbering_Alignment-100%25_Identical-success?style=for-the-badge)](https://jass-2005.github.io/ajnala-election-dashboard/)

Interactive booth-level election analytics platform comparing **Vidhan Sabha 2022** and **Lok Sabha 2024** for **11-Ajnala Assembly Segment** (Amritsar Parliamentary Constituency, Punjab).

---

## 🌟 Key Features

* **Strict 1-to-1 Renumbering & Village Alignment Audit:**
  * Complete audit verifying all 188 booths in 2022 and 2024.
  * 0 shifted, split, or auxiliary booths (unlike 13-Majitha where auxiliary 27A shifted booths by +1).
  * Strict village-by-village match: Booth #5 is Shahijada in both elections, Booth #1 is Ghonewahla, and Booth #188 is Salempura.
  * Turnout Pearson Correlation: **r = 0.9148**.
* **4-Party Comparative Intelligence:**
  * AAP, INC, SAD, and BJP booth tallies, vote shares, and margin swings.
  * Transition matrix analyzing 92 flipped vs 96 retained booths.
* **Bilingual Localization:**
  * Full English and Gurmukhi Punjabi (ਪੰਜਾਬੀ) toggle with instant terminology switching.
* **Dark / Light Theme Engine:**
  * Modern accessible color palette with persistent theme preference.
* **Instant Exports:**
  * Master Excel Workbook (.xlsx) with 8 dedicated analytical worksheets.
  * Master Comparison CSV.
  * Client-side styled PDF generation with Dsidein watermark.

---

## 🛠️ Tech Stack

* **React 19**
* **Vite 8**
* **Lucide Icons**
* **Vanilla CSS (Design System Tokens & 8px Grid)**
* **GitHub Pages Deployment via `gh-pages`**

---

## 🚀 Development & Build

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build production bundle
npm run build

# Deploy to GitHub Pages
npm run deploy
```

---

## 📊 Data Verification

All EVM figures are 100% mathematically cross-verified against official Election Commission of India (ECI) Form-20 returns and CEO Punjab electoral directories with zero discrepancies.
