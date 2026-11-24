require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("MathsHelpSA AI Backend is running!");
});

app.post("/api/chat", async (req, res) => {
    try {
        const { message } = req.body;

        if (!message || typeof message !== "string" || !message.trim()) {
            return res.status(400).json({
                error: "Please enter a Mathematics question."
            });
        }

        if (message.length > 4000) {
            return res.status(400).json({
                error: "Your question is too long."
            });
        }

        const response = await fetch(
            "http://127.0.0.1:11434/api/chat",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model: "qwen2.5:1.5b",
                    stream: false,
                    messages: [
                        {
                            role: "system",
                            content: `
                                You are MathsHelpSA AI Tutor.

                                Help South African Grade 11 and Grade 12
                                learners understand Mathematics.

                                Explain concepts in simple language.
                                Show calculations step by step.
                                Use correct mathematical notation.
                                Explain mistakes kindly.
                                Focus on the CAPS Mathematics curriculum.
                            `
                        },
                        {
                            role: "user",
                            content: message
                        }
                    ]
                })
            }
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Ollama request failed.");
        }

        res.json({
            reply: data.message?.content || "I could not generate an answer."
        });

    } catch (error) {
        console.error("AI error:", error.message);

        res.status(500).json({
            error: "The AI Tutor could not answer. Check that Ollama is running."
        });
    }
});

app.listen(PORT, () => {
    console.log(`MathsHelpSA AI running on port ${PORT}`);
});