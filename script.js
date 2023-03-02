function sendMessage(e) {
  e.preventDefault();

  let i = 0;
  const element = document.getElementById("messagesContainer");

  const messages = [
    { text: "teste", className: "myMessage" },
    { text: "fdsgdsfg", className: "myMessage" },
    { text: "sdfgsdfg", className: "userMessage" },
    { text: "sdfgfgdshjghjkgfhk", className: "userMessage" },
  ];

  const interval = setInterval(() => {
    if (i == messages.length) {
      clearInterval(interval);
      return;
    }

    const div = document.createElement("div");
    div.classList.add(messages[i].className);
    div.append(messages[i].text);
    element.append(div);

    element.scrollTo(0, element.scrollHeight);
    i += 1;
  }, 1000);
}
