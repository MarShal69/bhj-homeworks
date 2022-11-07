const chatWidget = document.querySelector(".chat-widget");
const chatWidgetSide = document.querySelector(".chat-widget__side");
const input = document.querySelector(".chat-widget__input");
const chatWidgetMessages = document.querySelector(".chat-widget__messages");
const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

messagesRobot();

chatWidgetSide.addEventListener("click", () => {
  chatWidget.classList.add("chat-widget_active");
});

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && input.value.trim() !== "") {
    messageClient();
  };
});

function messageClient() {
  chatWidgetMessages.innerHTML += `
  <div class="message message_client">
    <div class="message__time">${time}</div>
    <div class="message__text">${input.value}</div>
</div>
    `
  input.value = "";
  messagesRobot();
};

function messagesRobot() {
  const messagesRobotArray = [
    "Привет",
    "Нет настроения разговаривать",
    "До свидания",
    "Эх, тяжело мне",
    "Сам в шоке",
    "Да вы что??????",
  ];

  Math.floor(Math.random() * messagesRobotArray.length);

  chatWidgetMessages.innerHTML += `
  <div class="message">
    <div class="message__time">${time}</div>
    <div class="message__text">${messagesRobotArray[Math.floor(Math.random() * messagesRobotArray.length)]}</div>
</div>
    `
}