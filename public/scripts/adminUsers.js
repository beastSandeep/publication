const addBtn = document.getElementById("add_btn");
const addUsersForm = document.getElementById("add_users_form");

addBtn.addEventListener("click", (e) => {
  addUsersForm.classList.toggle("hidden");
});

addUsersForm.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    addUsersForm.classList.toggle("hidden");
  }
});
