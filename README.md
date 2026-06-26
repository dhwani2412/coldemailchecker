# Cold Email Checker

Free tool to scan cold emails for spam trigger words before you hit send.

Live: https://coldemailchecker.com

---

## What It Does

Paste your subject line and email body. The tool instantly highlights spam 
trigger words, scores your email from 0–100, and suggests safer replacements 
— all in real time, no signup needed.

- Detects 80+ spam trigger words across 5 categories: urgency, financial, 
  manipulative, overpromise, and shady language
- Subject lines scored at 2x severity since spam filters weigh them more heavily
- Deliverability score from 0–100 based on word density, severity, and placement
- Every flagged word comes with a suggested replacement
- Runs entirely in the browser — nothing is sent to a server

## Tech Stack

- Astro 6.4.4
- JavaScript
- Cloudflare Pages

## Run Locally

git clone https://github.com/dhwani2412/coldemailchecker.git
cd coldemailchecker
npm install
npm run dev

Open http://localhost:4321

## Built By

Dhwani Kaushik — Growth & Outbound Marketer
GitHub: https://github.com/dhwani2412
