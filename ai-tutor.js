
const chatForm = document.getElementById("chatForm");
const userMessage = document.getElementById("userMessage");
const chatMessages = document.getElementById("chatMessages");
const sendButton = document.getElementById("sendButton");
const clearChat = document.getElementById("clearChat");

const API_URL = "https://junction-north-diagnosis-counting.trycloudflare.com/api/chat";
// Display a message in the chat
function addMessage(message, sender) {

    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");

    if (sender === "ai") {
        messageDiv.classList.add("ai-message");
    } else {
        messageDiv.classList.add("user-message");
    }

    const avatar = document.createElement("div");
    avatar.classList.add("message-avatar");
    avatar.textContent = sender === "ai" ? "AI" : "You";

    const content = document.createElement("div");
    content.classList.add("message-content");

    // Use textContent to safely display user messages.
    // AI Markdown formatting can be added separately later.
    const paragraph = document.createElement("p");
    paragraph.textContent = message;

    content.appendChild(paragraph);

    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);

    chatMessages.appendChild(messageDiv);

    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Render mathematical notation
    if (window.MathJax) {
        MathJax.typesetPromise([content]).catch(error => {
            console.error("MathJax error:", error);
        });
    }
}


// Send a question to the AI backend
async function sendQuestion(question) {

    addMessage(question, "user");

    sendButton.disabled = true;
    sendButton.textContent = "Thinking...";

    try {

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                message: question
            })

        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Something went wrong.");
        }

        addMessage(data.reply, "ai");

    } catch (error) {

        console.error("AI Tutor error:", error);

        addMessage(
            "Sorry, I could not connect to the AI Tutor. Please check that the backend and Ollama are running.",
            "ai"
        );

    } finally {

        sendButton.disabled = false;
        sendButton.textContent = "Send";

    }

}


// Handle form submission
chatForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const question = userMessage.value.trim();

    if (!question) {
        return;
    }

    userMessage.value = "";

    sendQuestion(question);

});


// Suggested questions
document.querySelectorAll(".suggestion").forEach(button => {

    button.addEventListener("click", function() {

        const question = this.dataset.question;

        sendQuestion(question);

    });

});


// Clear chat
clearChat.addEventListener("click", function() {

    chatMessages.innerHTML = "";

    const welcomeMessage = document.createElement("div");

    welcomeMessage.className = "message ai-message";

    welcomeMessage.innerHTML = `
        <div class="message-avatar">AI</div>

        <div class="message-content">
            <p>Hello! Welcome back to MathsHelpSA AI Tutor.</p>
            <p>What Mathematics topic would you like help with?</p>
        </div>
    `;

    chatMessages.appendChild(welcomeMessage);

});
