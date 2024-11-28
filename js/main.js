let messages = document.querySelectorAll(".main__message");
let buttons = document.querySelectorAll(".main__buttons");

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
    scrollBottom();
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
  scrollBottom();

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
        });
      });
    });
  });
});
