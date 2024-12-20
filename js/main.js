let messages = document.querySelectorAll(".main__message");
let buttons = document.querySelectorAll(".main__buttons");

messages.forEach((message, index) => {
  setTimeout(() => {
    message.classList.add("--show");
    message.scrollIntoView({ behavior: "smooth", block: "end" });
  }, index * 1000);
});

buttons.forEach((button) => {
  setTimeout(() => {
    button.classList.add("--show");
    button.scrollIntoView({ behavior: "smooth", block: "end" });
  }, 4000);
});

const textArea = document.querySelector(".footer__form-input");
const messegeForm = document.querySelector(".footer__form");
const messageWrapper = document.querySelector(".main__inner");

textArea.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && textArea.value != 0) {
    e.preventDefault();
    let message = `
    <div class="main__message --sent">
            <p class="main__message-text">
            ${textArea.value.trim().replace(/\n/g, "<br>\n")}
            </p>
            <svg
              class="tail"
              width="17"
              height="21"
              viewBox="0 0 17 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.11315 20.1846C5.31315 20.9846 10.4465 18.1212 12.1132 16.2879C10.3953 12.1914 21.0011 2.24186 14.0011 2.24148C12.3825 2.24148 11 -1.9986 5.11315 1.1846C5.09194 2.47144 5.11315 6.92582 5.11315 7.6842C5.11315 18.1842 -0.88685 19.5813 0.11315 20.1846Z"
                fill="#D9E4FF"
              />
            </svg>
          </div>`;
    messageWrapper.insertAdjacentHTML("beforeend", message);

    let lastMessage = messageWrapper.lastElementChild;
    setTimeout(() => {
      lastMessage.classList.add("--show");
    }, 0);
    textArea.value = "";

    lastMessage.scrollIntoView({ behavior: "smooth", block: "end" });
  }
});

const messageInner = document.querySelector(".main__inner");

function scrollBottom() {
  messageInner.scrollTo(0, messageInner.scrollHeight);
}

const yesButton = document.querySelector(".yes-button");
const noButton = document.querySelector(".no-button");

noButton.addEventListener("click", function () {
  let message = `
    <div class="main__message --received long-margin">
            <p class="main__message-text">Дякую за вашу відповідь, чекаємо на ваше повернення</p>
            <p class="main__message-time">11:45</p>
            <svg
              class="tail"
              width="17"
              height="21"
              viewBox="0 0 17 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.11315 20.1846C5.31315 20.9846 10.4465 18.1212 12.1132 16.2879C10.3953 12.1914 21.0011 2.24186 14.0011 2.24148C12.3825 2.24148 11 -1.9986 5.11315 1.1846C5.09194 2.47144 5.11315 6.92582 5.11315 7.6842C5.11315 18.1842 -0.88685 19.5813 0.11315 20.1846Z"
                fill="#D9E4FF"
              />
            </svg>
          </div>`;

  messageWrapper.insertAdjacentHTML("beforeend", message);
  let lastMessage = messageWrapper.lastElementChild;
  setTimeout(() => {
    lastMessage.classList.add("--show");
  }, 0);

  lastMessage.scrollIntoView({ behavior: "smooth", block: "end" });

  // Тут типо дальше надо выводить форму и так далее
});

yesButton.addEventListener("click", function () {
  let message = `
<div class="main__message --received">
        <p class="main__message-text">Чи був у вас досвід пов'язаний із Арбітражем трафіку?</p>
        <p class="main__message-time">11:45</p>
        <svg
          class="tail"
          width="17"
          height="21"
          viewBox="0 0 17 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.11315 20.1846C5.31315 20.9846 10.4465 18.1212 12.1132 16.2879C10.3953 12.1914 21.0011 2.24186 14.0011 2.24148C12.3825 2.24148 11 -1.9986 5.11315 1.1846C5.09194 2.47144 5.11315 6.92582 5.11315 7.6842C5.11315 18.1842 -0.88685 19.5813 0.11315 20.1846Z"
            fill="#D9E4FF"
          />
        </svg>
      </div>
      <div class="main__buttons triple">
            <button class="button second">Так</button>
            <button class="button second">Ні</button>
            <button class="button second">Чув про це</button>
          </div>`;
  messageWrapper.insertAdjacentHTML("beforeend", message);
  setTimeout(() => {
    let messages = document.querySelectorAll(".main__message");
    let buttons = document.querySelectorAll(".main__buttons");
    messages.forEach((message, index) => {
      message.classList.add("--show");
    });
    buttons.forEach((button, index) => {
      button.classList.add("--show");
    });
    scrollBottom();
  }, 0);

  const secondQuestionButtons = document.querySelectorAll(".second");

  secondQuestionButtons.forEach((secondQuestionButton) => {
    secondQuestionButton.addEventListener("click", function () {
      let message = `
  <div class="main__message --received">
          <p class="main__message-text">Скільки часу ви могли б приділяти на день?</p>
          <p class="main__message-time">11:45</p>
          <svg
            class="tail"
            width="17"
            height="21"
            viewBox="0 0 17 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.11315 20.1846C5.31315 20.9846 10.4465 18.1212 12.1132 16.2879C10.3953 12.1914 21.0011 2.24186 14.0011 2.24148C12.3825 2.24148 11 -1.9986 5.11315 1.1846C5.09194 2.47144 5.11315 6.92582 5.11315 7.6842C5.11315 18.1842 -0.88685 19.5813 0.11315 20.1846Z"
              fill="#D9E4FF"
            />
          </svg>
        </div>
        <div class="main__buttons triple">
              <button class="button third">Одна година</button>
              <button class="button third">2-3 години</button>
              <button class="button third">5 і більше</button>
            </div>`;
      messageWrapper.insertAdjacentHTML("beforeend", message);
      setTimeout(() => {
        let messages = document.querySelectorAll(".main__message");
        let buttons = document.querySelectorAll(".main__buttons");
        messages.forEach((message, index) => {
          message.classList.add("--show");
        });
        buttons.forEach((button, index) => {
          button.classList.add("--show");
        });
        scrollBottom();
      }, 0);

      const thirdQuestionButtons = document.querySelectorAll(".third");
      thirdQuestionButtons.forEach((thirdQuestionButton) => {
        thirdQuestionButton.addEventListener("click", function () {
          let message = `
      <div class="main__message --received">
              <p class="main__message-text">Дякую! Наша компанія дуже зацікавлена ​​вами, для подальшої підтримки зв'язку, будь ласка, заповніть форму.</p>
              <p class="main__message-time">11:45</p>
              <svg
                class="tail"
                width="17"
                height="21"
                viewBox="0 0 17 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.11315 20.1846C5.31315 20.9846 10.4465 18.1212 12.1132 16.2879C10.3953 12.1914 21.0011 2.24186 14.0011 2.24148C12.3825 2.24148 11 -1.9986 5.11315 1.1846C5.09194 2.47144 5.11315 6.92582 5.11315 7.6842C5.11315 18.1842 -0.88685 19.5813 0.11315 20.1846Z"
                  fill="#D9E4FF"
                />
              </svg>
            </div>`;
          messageWrapper.insertAdjacentHTML("beforeend", message);
          setTimeout(() => {
            let messages = document.querySelectorAll(".main__message");
            messages.forEach((message, index) => {
              message.classList.add("--show");
            });
            scrollBottom();
          }, 0);
          setTimeout(() => {
            const popup = document.querySelector(".registration-popup");
            popup.classList.add("--show");
          }, 4000);
        });
      });
    });
  });
});

const name = document.querySelector(".name");
const lastName = document.querySelector(".lastname");
const email = document.querySelector(".email");
const phone = document.querySelector(".phone");
const submit = document.querySelector(".submit");

function checkNameLastName() {
  if (
    name.value.trim() !== "" &&
    lastName.value.trim() !== "" &&
    name.value.length > 3 &&
    lastName.value.length > 3
  ) {
    return true;
  }
}

function checkEmail(email) {
  const atSymbolCount = email.split("@").length - 1;
  if (atSymbolCount !== 1) {
    return false;
  }
  const atSymbolIndex = email.indexOf("@");
  const localPart = email.slice(0, atSymbolIndex);
  const domainPart = email.slice(atSymbolIndex + 1);

  if (!localPart || !domainPart) {
    return false;
  }

  const dotIndex = domainPart.indexOf(".");
  if (dotIndex === -1 || dotIndex === 0 || dotIndex === domainPart.length - 1) {
    return false;
  }

  const invalidChars = [
    " ",
    ",",
    "!",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "=",
    "+",
    "{",
    "}",
    "[",
    "]",
    ";",
    ":",
    "'",
    '"',
    "<",
    ">",
    "/",
    "\\",
    "|",
    "`",
    "~",
  ];
  for (let char of email) {
    if (invalidChars.includes(char)) {
      return false;
    }
  }
  return true;
}

function checkPhone(phone) {
  phone = phone.trim();
  if (phone.length === 0) {
    return false;
  }
  let startIndex = 0;
  if (phone[0] === "+") {
    startIndex = 1;
  } else {
    return false;
  }
  for (let i = startIndex; i < phone.length; i++) {
    if (isNaN(phone[i])) {
      return false;
    }
  }
  if (phone.replace(/\s+/g, "").length < 12) {
    return false;
  }
  return true;
}

function validateForm() {
  const isNameValid = checkNameLastName(name.value);
  const isLastNameValid = checkNameLastName(lastName.value);
  const isEmailValid = checkEmail(email.value);
  const isPhoneValid = checkPhone(phone.value);
  console.log(isNameValid, isLastNameValid, isEmailValid, isPhoneValid);
  submit.disabled = true;
  if (isNameValid && isLastNameValid && isEmailValid && isPhoneValid) {
    submit.disabled = false;
  }
}

name.addEventListener("input", validateForm);
lastName.addEventListener("input", validateForm);
email.addEventListener("input", validateForm);
phone.addEventListener("input", validateForm);

function clickButton(event) {
  event.preventDefault();

  const info = {
    name: name.value,
    lastName: lastName.value,
    email: email.value,
    phone: phone.value,
  };

  localStorage.setItem("info", JSON.stringify(info));

  window.location.href = "success.html";

  console.log(info);
}

submit.addEventListener("click", clickButton);
