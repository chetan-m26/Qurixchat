/* below commented code is for updated web result here's content is shifted server.js file
can runed by node server,js first */

/*async function run(prompt) {
  try {
    const res = await fetch(`http://localhost:5000/api/live-answer?q=${encodeURIComponent(prompt)}`);
    const data = await res.json();

    if (!data.answer) {
      console.error("❌ No answer from backend:", data.error);
      return "Sorry, I couldn’t get an answer.";
    }

    return data.answer;
  } catch (err) {
    console.error("❌ Error fetching from backend:", err);
    return "Error connecting to the server.";
  }
}

export default run;
*/

// below code is old one
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai"
  
  const apiKey = "AIzaSyACFOn7avmxTve093ihhWlscyrJVunaFqw";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    const response = result.response;
    console.log(result.response.text());
    return response.text();
  }
  
 export default run;