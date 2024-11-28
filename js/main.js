const messages = document.querySelectorAll(".main__message");
const buttons = document.querySelectorAll(".main__buttons");

messages.forEach((message, index) => {
  setTimeout(() => {
    message.classList.add("--show");
  }, index * 1000);
});

buttons.forEach((button) => {
  setTimeout(() => {
    button.classList.add("--show");
  }, 4000);
});
