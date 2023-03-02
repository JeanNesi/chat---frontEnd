function sendMessage(e) {
  e.preventDefault();

  console.log(new FormData(e.target));

  var i = 0;
  var element = document.getElementById("messagesContainer");

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

    let div = document.createElement("div");
    div.classList.add(messages[i].className);
    div.append(messages[i].text);
    element.append(div);
    console.log(i);

    element.scrollTo(0, element.scrollHeight);
    i += 1;
  }, 1000);
}
