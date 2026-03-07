const toggleNavigationButton = document.getElementById("toggleNavigation");
const verticalNavigationArea = document.getElementById("verticalNavigation");
const navigationNames = document.getElementsByClassName("navigationName");
const logo = document.getElementById("logo");

const madeWithLove = document.getElementById("madeWithLove");
const onlyLove = document.getElementById("onlyLove");

toggleNavigationButton.addEventListener("click", () => {
  logo.classList.toggle("hidden");

  toggleNavigationButton.classList.toggle("rotate-0");
  toggleNavigationButton.classList.toggle("rotate-180");

  toggleNavigationButton.parentElement.classList.toggle("justify-between");
  toggleNavigationButton.parentElement.classList.toggle("justify-center");

  verticalNavigationArea.classList.toggle("w-fit");
  verticalNavigationArea.classList.toggle("w-[300px]");

  Array.from(navigationNames).forEach((el) => {
    el.classList.toggle("hidden");
  });

  madeWithLove.classList.toggle("hidden");
  onlyLove.classList.toggle("hidden");
});
