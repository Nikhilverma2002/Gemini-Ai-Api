require("dotenv").config({ path: "/.env" });
const { GoogleGenerativeAI } = require("@google/generative-ai");
const process = require("process");
console.log("API Key:", process.env.API_KEY);

// Now process.env.API_KEY should have your actual API key
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run() {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });
  const prompt = "What is OOPS in java? Answer this with examples.";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();
