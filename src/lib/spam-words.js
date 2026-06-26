// Categorized spam trigger words with severity and suggestions
export const spamWords = {
  urgency: {
    label: "Urgency",
    color: "#ee0000",
    words: {
      "act now": { severity: 3, suggestion: "take action" },
      "limited time": { severity: 3, suggestion: "available this week" },
      "hurry": { severity: 3, suggestion: "when you're ready" },
      "hurry up": { severity: 3, suggestion: "at your convenience" },
      "expires": { severity: 2, suggestion: "valid through" },
      "urgent": { severity: 3, suggestion: "important" },
      "immediately": { severity: 2, suggestion: "soon" },
      "instant": { severity: 2, suggestion: "quick" },
      "now": { severity: 1, suggestion: "today" },
      "don't delay": { severity: 3, suggestion: "reach out when ready" },
      "before it's too late": { severity: 3, suggestion: "while it's available" },
      "last chance": { severity: 3, suggestion: "reminder" },
      "deadline": { severity: 1, suggestion: "timeline" },
      "only today": { severity: 3, suggestion: "this week" },
      "running out": { severity: 2, suggestion: "limited availability" },
      "fast": { severity: 1, suggestion: "efficient" },
      "quick": { severity: 1, suggestion: "brief" },
    },
  },
  financial: {
    label: "Financial",
    color: "#f5a623",
    words: {
      "free": { severity: 2, suggestion: "complimentary" },
      "earn": { severity: 2, suggestion: "generate" },
      "income": { severity: 2, suggestion: "revenue" },
      "profit": { severity: 2, suggestion: "results" },
      "cash": { severity: 3, suggestion: "funds" },
      "money": { severity: 2, suggestion: "budget" },
      "dollar": { severity: 2, suggestion: "investment" },
      "$$": { severity: 3, suggestion: "[remove]" },
      "$$$": { severity: 3, suggestion: "[remove]" },
      "cheap": { severity: 2, suggestion: "affordable" },
      "discount": { severity: 2, suggestion: "special pricing" },
      "save big": { severity: 3, suggestion: "optimize costs" },
      "lowest price": { severity: 3, suggestion: "competitive rate" },
      "bonus": { severity: 2, suggestion: "additional value" },
      "cost": { severity: 1, suggestion: "investment" },
      "price": { severity: 1, suggestion: "rate" },
      "credit": { severity: 2, suggestion: "account" },
      "loan": { severity: 3, suggestion: "financing" },
      "mortgage": { severity: 3, suggestion: "[remove if irrelevant]" },
      "debt": { severity: 3, suggestion: "obligations" },
      "investment": { severity: 1, suggestion: "opportunity" },
      "roi": { severity: 1, suggestion: "return" },
      "extra income": { severity: 3, suggestion: "additional revenue" },
      "double your": { severity: 3, suggestion: "grow your" },
      "million": { severity: 2, suggestion: "[be specific instead]" },
    },
  },
  manipulative: {
    label: "Manipulative",
    color: "#7928ca",
    words: {
      "click here": { severity: 2, suggestion: "learn more" },
      "click below": { severity: 2, suggestion: "see details" },
      "buy now": { severity: 3, suggestion: "get started" },
      "order now": { severity: 3, suggestion: "place your order" },
      "sign up free": { severity: 2, suggestion: "create your account" },
      "subscribe": { severity: 1, suggestion: "join" },
      "call now": { severity: 3, suggestion: "schedule a call" },
      "apply now": { severity: 2, suggestion: "submit your application" },
      "don't miss": { severity: 2, suggestion: "you might enjoy" },
      "what are you waiting for": { severity: 3, suggestion: "[remove]" },
      "do it today": { severity: 2, suggestion: "whenever works for you" },
      "take action": { severity: 1, suggestion: "next steps" },
      "don't delete": { severity: 3, suggestion: "[remove]" },
      "open immediately": { severity: 3, suggestion: "[remove]" },
    },
  },
  overpromise: {
    label: "Overpromise",
    color: "#0070f3",
    words: {
      "guarantee": { severity: 2, suggestion: "aim to" },
      "guaranteed": { severity: 2, suggestion: "designed to" },
      "no risk": { severity: 3, suggestion: "low commitment" },
      "risk-free": { severity: 3, suggestion: "trial available" },
      "100%": { severity: 2, suggestion: "[use specific numbers]" },
      "amazing": { severity: 2, suggestion: "effective" },
      "incredible": { severity: 2, suggestion: "notable" },
      "fantastic": { severity: 2, suggestion: "solid" },
      "unbelievable": { severity: 3, suggestion: "impressive" },
      "miracle": { severity: 3, suggestion: "[remove]" },
      "revolutionary": { severity: 2, suggestion: "innovative" },
      "breakthrough": { severity: 2, suggestion: "new approach" },
      "exclusive": { severity: 1, suggestion: "invite-only" },
      "once in a lifetime": { severity: 3, suggestion: "[remove]" },
      "best ever": { severity: 2, suggestion: "top-performing" },
      "number one": { severity: 2, suggestion: "leading" },
      "#1": { severity: 2, suggestion: "leading" },
    },
  },
  shady: {
    label: "Shady",
    color: "#171717",
    words: {
      "no obligation": { severity: 2, suggestion: "no commitment needed" },
      "no catch": { severity: 3, suggestion: "[remove]" },
      "no strings attached": { severity: 3, suggestion: "[remove]" },
      "winner": { severity: 3, suggestion: "[remove]" },
      "congratulations": { severity: 3, suggestion: "[remove]" },
      "you've been selected": { severity: 3, suggestion: "[remove]" },
      "dear friend": { severity: 3, suggestion: "[use their name]" },
      "friend": { severity: 1, suggestion: "[use their name]" },
      "offer": { severity: 1, suggestion: "opportunity" },
      "deal": { severity: 1, suggestion: "arrangement" },
      "promotion": { severity: 1, suggestion: "update" },
      "special": { severity: 1, suggestion: "tailored" },
      "secret": { severity: 2, suggestion: "insider" },
      "confidential": { severity: 2, suggestion: "private" },
      "as seen on": { severity: 3, suggestion: "featured in" },
      "been selected": { severity: 3, suggestion: "[remove]" },
      "no questions asked": { severity: 3, suggestion: "[remove]" },
      "satisfaction guaranteed": { severity: 3, suggestion: "we stand behind our work" },
    },
  },
};

// Get all words as a flat list for quick scanning
export function getAllSpamWords() {
  const all = [];
  for (const [category, data] of Object.entries(spamWords)) {
    for (const [word, meta] of Object.entries(data.words)) {
      all.push({ word, category, ...meta, color: data.color, label: data.label });
    }
  }
  // Sort by length descending so longer phrases match first
  return all.sort((a, b) => b.word.length - a.word.length);
}

// Scan text and return found spam words with positions
export function scanText(text) {
  const lower = text.toLowerCase();
  const allWords = getAllSpamWords();
  const found = [];
  const covered = new Set();

  for (const entry of allWords) {
    let idx = 0;
    while ((idx = lower.indexOf(entry.word, idx)) !== -1) {
      // Check word boundaries
      const before = idx === 0 || /[\s,.:;!?'"()\-/]/.test(lower[idx - 1]);
      const after = idx + entry.word.length >= lower.length || /[\s,.:;!?'"()\-/]/.test(lower[idx + entry.word.length]);

      if (before && after) {
        // Check no overlap with already found longer phrase
        let overlaps = false;
        for (let i = idx; i < idx + entry.word.length; i++) {
          if (covered.has(i)) { overlaps = true; break; }
        }
        if (!overlaps) {
          found.push({ ...entry, start: idx, end: idx + entry.word.length });
          for (let i = idx; i < idx + entry.word.length; i++) covered.add(i);
        }
      }
      idx += entry.word.length;
    }
  }

  return found.sort((a, b) => a.start - b.start);
}

// Calculate deliverability score (0-100)
export function calculateScore(text, foundWords) {
  if (!text.trim()) return 100;
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  if (wordCount === 0) return 100;

  let penalty = 0;
  for (const w of foundWords) {
    penalty += w.severity * 4;
  }

  // Density factor: more spam words relative to total = worse
  const density = foundWords.length / wordCount;
  penalty += density * 50;

  return Math.max(0, Math.min(100, Math.round(100 - penalty)));
}
