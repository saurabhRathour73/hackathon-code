require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
app.use(express.json());
app.use(bodyParser.json());

// ✅ CORS Middleware
app.use(cors({
    origin: 'http://localhost:5173',  // React frontend origin
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

const TRIGGER_WORDS = ["suicide", "death", "fight", "kill", "harm"];
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generateAIResponse = async (prompt) => {
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (err) {
    console.error("Gemini API Error:", err);
    return "Sorry, something went wrong. Please try again later.";
  }
};

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ response: "Message is required" });

  const lowerMsg = message.toLowerCase();
  const hasTrigger = TRIGGER_WORDS.some(word => lowerMsg.includes(word));

  if (hasTrigger) {
    return res.json({
      response: "Your life is extremely valuable. Please consider talking to a counselor. Here's a link to fix an appointment: https://example.com/counselor-appointment"
    });
  }

  const aiResponse = await generateAIResponse(message);
  return res.json({ response: aiResponse });
});

app.post('/api/suggestions', async (req, res) => {
  const systemPrompt = `
    You are Sahaay, a mental health assistant for students in higher education.
    Provide 3-5 concise, practical tips to improve mental well-being.
    Format them as: 
    1. Tip
    2. Tip
    3. Tip
  `;

  const userMessage = req.body.message || "A student needs tips to improve mental health.";

  const combinedPrompt = `${systemPrompt}\nUser message: ${userMessage}`;

  const suggestions = await generateAIResponse(combinedPrompt);
  res.json({ response: suggestions });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
