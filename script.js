// mobile menu open and close

const mobileBtn = document.getElementById("mobile-cta");
const nav = document.getElementById("mobile-nav");
const mobileBtnExit = document.getElementById("mobile-exit");

mobileBtn.addEventListener("click", () => {
  nav.classList.add("menu-btn");
});
mobileBtnExit.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});
