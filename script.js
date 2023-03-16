function sendMessage(e) {
  e.preventDefault();

  const input = document.getElementById("input");
  if (!input.value) return;

  const element = document.getElementById("messagesContainer");

  const messages = [
    "O que é verde e fica sentado na esquina? Um pepino esperto.",
    "Por que os peixes ficam tão quietos quando você os olha? Porque eles estão em água.",
    "O que o ovo disse para o outro ovo? Estou com casca de lado.",
    "Qual é a fruta mais inteligente? O abacaxi, porque ele é demasiado esperto para ser pego.",
    "O que acontece quando você joga uma pedra em um carro? Você terá que comprar um novo carro.",
    "Por que os porcos não usam relógios? Porque eles preferem acordar e grunhir.",
    "O que o elefante disse para o computador? Não entendo bytes.",
  ];

  const div = document.createElement("div");
  const p = document.createElement("p");
  div.classList.add("myMessage");
  div.append(p);
  p.append(input.value);
  element.append(div);
  input.value = "";

  setTimeout(() => {
    const div = document.createElement("div");
    const p = document.createElement("p");
    div.classList.add("userMessage");
    div.append(p);
    p.innerHTML = messages[Math.floor(Math.random() * messages.length)];
    element.append(div);

    element.scrollTo(0, element.scrollHeight);
  }, 1000);
}
