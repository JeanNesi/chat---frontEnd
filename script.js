window.onload = () => {
  const messages = JSON.parse(localStorage.getItem("messages"));
  messages.forEach((element) => {
    createMessage({
      origin: element.origin,
      message: element.message,
      time: element.dateTime,
      status: element.status,
    });
  });
  getAdvice();
};

async function createMessage({ origin, message, time, status }) {
  const messagesContainer = document.getElementById("messagesContainer");

  const div = document.createElement("div");
  const pMessage = document.createElement("p");
  const pHour = document.createElement("p");

  div.classList.add(origin);
  pHour.classList.add("hour");

  div.append(pMessage);
  div.append(pHour);

  pMessage.innerHTML =
    status === "oldMessage" || origin === "myMessage"
      ? message
      : await getAdvice();

  pHour.innerHTML =
    time ??
    new Date().toLocaleTimeString("pt-br", {
      timeStyle: "short",
    });

  messagesContainer.append(div);
  messagesContainer.scrollTo(0, messagesContainer.scrollHeight);
  saveMessages();
}

function sendMessage(event) {
  event.preventDefault();

  const input = document.getElementById("input");
  if (!input.value) return;

  createMessage({ message: input.value, origin: "myMessage" });

  input.value = "";

  setTimeout(() => {
    createMessage({ message: "teste", origin: "userMessage" });
  }, 1000);
}

function saveMessages() {
  const messagesContainer = Array.from(
    document.getElementById("messagesContainer").children
  );

  let array = [];

  messagesContainer.forEach((element) => {
    const div = element.children;
    array.push({
      origin: element.className,
      dateTime: div[1].innerText,
      message: div[0].innerText,
      status: "oldMessage",
    });
    localStorage.setItem("messages", JSON.stringify(array));
  });
}

async function getAdvice() {
  let adviceDate;
  await fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      adviceDate = data;
    });
  return adviceDate.slip.advice;
}
