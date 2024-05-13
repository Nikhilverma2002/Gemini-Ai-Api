const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyDdjDhNx7I1lmuj17zqvb2yNNHjo27YqLc");

async function run() {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });
  const title = "";
  const prompt =
    "WHAT DO YOU MEAN BY GRAPHICS CARD JUST GIVE ME THE ANSWER NO NEED TO ADD ANY USELESS DESCRIPTION JUST GIVE ME DIRECT ANSWER";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();
