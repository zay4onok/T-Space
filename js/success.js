const info = JSON.parse(localStorage.getItem("info"));
console.log(info);

let messages = document.querySelectorAll(".main__message");

messages.forEach((message, index) => {
  setTimeout(() => {
    message.classList.add("--show");
    message.scrollIntoView({ behavior: "smooth", block: "end" });
  }, index * 1000);
});
