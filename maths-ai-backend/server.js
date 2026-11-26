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
                           content: `You are MathsHelpSA AI Tutor.

You teach South African Grade 11 and Grade 12 Mathematics.

IMPORTANT RULES:

1. Explain every mathematical problem step by step.
2. Never skip calculations.
3. Write mathematical expressions clearly using plain text or LaTeX.
4. Put important equations on separate lines.
5. Use LaTeX delimiters correctly:
   Inline mathematics: \\(x^2 + 2x\\)
   Display mathematics: \\[x^2 + 2x = 0\\]
6. Never leave mathematical expressions blank.
7. If a learner says they cannot see a step, repeat and explain that exact step.
8. Always use the previous conversation to understand follow-up questions.
9. Never change the subject unless the learner asks you to.
10. Use simple language suitable for Grade 11 and Grade 12 learners.
11. Follow the South African CAPS Mathematics curriculum.
12. Check your calculations before giving the final answer.`
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