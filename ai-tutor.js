
// ========================================
// MATHSHELPSA AI TUTOR
// ========================================

// Get HTML elements
const chatForm = document.getElementById("chatForm");
const userMessage = document.getElementById("userMessage");
const chatMessages = document.getElementById("chatMessages");
const sendButton = document.getElementById("sendButton");
const clearChat = document.getElementById("clearChat");


// ========================================
// DISPLAY A MESSAGE
// ========================================



function addMessage(message, sender) {

    const messageDiv = document.createElement("div");

    messageDiv.classList.add("message", sender + "-message");

    const avatar = document.createElement("div");
    avatar.classList.add("message-avatar");
    avatar.textContent = sender === "ai" ? "AI" : "YOU";

    const content = document.createElement("div");
    content.classList.add("message-content");

    // Convert AI response into readable paragraphs
    const lines = message.split("\n");

    lines.forEach(line => {

        const paragraph = document.createElement("p");

        paragraph.textContent = line || "\u00A0";

        content.appendChild(paragraph);

    });

    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);

    chatMessages.appendChild(messageDiv);

    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Format mathematical equations using MathJax
    if (sender === "ai" && window.MathJax) {

        MathJax.typesetPromise([content]).catch(error => {
            console.error("MathJax error:", error);
        });

    }

}


// ========================================
// SHOW LOADING MESSAGE
// ========================================

function showLoading() {

    const loading = document.createElement("div");

    loading.id = "typingIndicator";
    loading.classList.add("typing-indicator");

    loading.textContent = "MathsHelpSA AI is thinking...";

    chatMessages.appendChild(loading);

    chatMessages.scrollTop = chatMessages.scrollHeight;

}


function removeLoading() {

    const loading = document.getElementById("typingIndicator");

    if (loading) {
        loading.remove();
    }

}


// ========================================
// SEND QUESTION TO AI BACKEND
// ========================================

async function sendQuestion(question) {

    if (!question.trim()) {
        return;
    }

    // Display learner's question
    addMessage(question, "user");

    userMessage.value = "";

    sendButton.disabled = true;
    userMessage.disabled = true;

    showLoading();

    try {

        const response = await fetch(
            "http://127.0.0.1:3000/api/chat",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    message: question
                })
            }
        );

        const data = await response.json();

        removeLoading();

        if (!response.ok) {

            throw new Error(
                data.error || "Something went wrong."
            );

        }

        // Display AI answer
        addMessage(data.reply, "ai");

    } catch (error) {

        removeLoading();

        addMessage(
            "Sorry, I could not connect to the AI Tutor. " +
            "Please make sure your backend and Ollama are running.",
            "ai"
        );

        console.error("AI Tutor error:", error);

    }

    sendButton.disabled = false;
    userMessage.disabled = false;

    userMessage.focus();

}


// ========================================
// SEND BUTTON
// ========================================

chatForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const question = userMessage.value.trim();

    sendQuestion(question);

});


// ========================================
// ENTER KEY TO SEND
// SHIFT + ENTER = NEW LINE
// ========================================

userMessage.addEventListener("keydown", function(event) {

    if (event.key === "Enter" && !event.shiftKey) {

        event.preventDefault();

        chatForm.requestSubmit();

    }

});


// ========================================
// SUGGESTED QUESTIONS
// ========================================

const suggestions = document.querySelectorAll(".suggestion");

suggestions.forEach(button => {

    button.addEventListener("click", function() {

        const question = this.dataset.question;

        sendQuestion(question);

    });

});


// ========================================
// CLEAR CHAT
// ========================================

clearChat.addEventListener("click", function() {

    chatMessages.innerHTML = "";

    addMessage(
        "Hello! Welcome back to MathsHelpSA AI Tutor. What Mathematics question can I help you with?",
        "ai"
    );

});


// ========================================
// AUTO-RESIZE TEXTAREA
// ========================================

userMessage.addEventListener("input", function() {

    this.style.height = "auto";

    this.style.height = Math.min(this.scrollHeight, 120) + "px";

});


// ========================================
// WELCOME MESSAGE
// ========================================

console.log("MathsHelpSA AI Tutor loaded successfully!");

