import { slideUp, slideToUp, slideToDown } from "./slider.js";

let storageCookieKey = "cookie";
let storageNewsLetterKey = "newsletter";

let notification = document.querySelector("#notification");
let notifButton = document.querySelector("#notification-button");

let newsletter = document.querySelector("#newsletter");
let newsletterButtonClose = document.querySelector("#newsletterButtonClose");

notifButton.addEventListener("click", () => {
  slideUp(notification, 200);
  localStorage.setItem(storageCookieKey, true);
});

newsletterButtonClose.addEventListener("click", () => {
  slideToDown(newsletter);
  localStorage.setItem(storageNewsLetterKey, "closed");
});

window.onscroll = function () {
  var top = window.pageYOffset || document.documentElement.scrollTop;
  if (top > 326) {
    if (!localStorage.getItem(storageNewsLetterKey)) {
      slideToUp(newsletter, 300);
    } else {
      return;
    }
  }
};

// set 10 minutes interval before show newsletter again
setInterval(() => {
  var top = window.pageYOffset || document.documentElement.scrollTop;
  if (localStorage.getItem(storageNewsLetterKey) && top > 326) {
    localStorage.removeItem(storageNewsLetterKey);
    slideToUp(newsletter, 300);
  }
}, 600000);

window.onload = () => {
  if (localStorage.getItem(storageCookieKey)) {
    notification.style.opacity = 0;
    notification.style.display = "none";
  }
};
