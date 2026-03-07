// mobileNavBar.js
const btn = document.getElementById("mobileMenuButton");
const sidebar = document.getElementById("sideNavBar");

const closeSidebar = () => {
  sidebar.classList.remove("scale-x-100");
  btn.setAttribute("aria-expanded", "false");
};

btn.addEventListener("click", (e) => {
  e.stopPropagation();
  sidebar.classList.toggle("scale-x-100");
  btn.setAttribute("aria-expanded", sidebar.classList.contains("scale-x-100"));
});

document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !btn.contains(e.target)) closeSidebar();
});

document.addEventListener(
  "keydown",
  (e) => e.key === "Escape" && closeSidebar(),
);
