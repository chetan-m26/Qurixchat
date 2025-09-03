/* 
This file is created and replaced by gem.js file with adding server for current 
details fetching. below code is related to that only.
*/

/*

import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import cors from "cors";   // ✅ added

dotenv.config({ path: ".env.local" }); 

const app = express();
const PORT = 5000;

// ✅ Allow requests from your Vite frontend
app.use(cors({
  origin: "http://localhost:5173", // only allow your frontend
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));

// Gemini init
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Google Custom Search
async function fetchSearchResults(query) {
  const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(
    query
  )}&key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CX}`;

  const res = await fetch(url);
  const data = await res.json();
  if (!data.items) return "No results found.";
  return data.items.map((item) => item.snippet).join("\n");
}

// API endpoint
app.get("/api/live-answer", async (req, res) => {
  try {
    const q = req.query.q || "latest news";
    console.log("🔎 User asked:", q);

    const searchResults = await fetchSearchResults(q);
    console.log("🔎 Search Results:", searchResults);

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const prompt = `Answer this question using these web results:\n${searchResults}\n\nQuestion: ${q}`;

    const result = await model.generateContent(prompt);
    const answer = result.response.text();

    console.log("✅ Gemini Response:", answer);

    res.json({ answer });
  } catch (err) {
    console.error("❌ Error in /api/live-answer:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () =>
  console.log(`✅ Server running at http://localhost:${PORT}`)
);

*/