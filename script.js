function chatbot(input) {
    let output = "";
    input = input.toLowerCase();
    if (input.includes("hello") || input.includes("hi")) {
        output = "Hello, nice to meet you..!";
    } else if (input.includes("how are you")) {
        output = "I'm doing fine, thanks you for asking.";
    } else if (input.includes("what is your name?")) {
        output = "My name is Jarvis...,I'm a chatbot..! ";
    } else if (input.includes("what can you do")) {
        output = "Why did the Chicken go to the Seance? To get to the other side.";
    } else {
        output = "Sorry, I don't Understand that. Please try something else...!"
    }
    return output;
}

function displayUserMessage(message) {
    let chat = document.getElementById("chat");
    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.classList.add("user");
    let userAvatar = document.createElement("div");
    userAvatar.classList.add("avatar");
    let usertext = document.createElement("div");
    usertext.classList.add("text");
    usertext.innerHTML = message;
    userMessage.appendChild(userAvatar);
    userMessage.appendChild(usertext);
    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight;
}

function displayBotMessage(message) {
    let chat = document.getElementById("chat");
    let botMessage = document.createElement("div");
    botMessage.classList.add("Message");
    botMessage.classList.add("bot");
    let botAvatar = document.createElement("div");
    botAvatar.classList.add("avatar");
    let bottext = document.createElement("div");
    bottext.classList.add("text");
    bottext.innerHTML = message;
    botMessage.appendChild(botAvatar);
    botMessage.appendChild(bottext);
    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;
}

function sendMesssage() {
    let input = document.getElementById("input").value;
    if (input) {
        displayUserMessage(input);
        let output = chatbot(input);
        setTimeout(function () {
            displayBotMessage(output);
        }, 1000);
        document.getElementById("input").value = "";
    }
}

document.getElementById("button").addEventListener("click", sendMesssage);

document.getElementById("input").addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
        sendMesssage();
    }
});