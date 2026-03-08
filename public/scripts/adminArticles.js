const addBtn = document.getElementById("add_btn");
const addArticleForm = document.getElementById("add_article_form");

addBtn.addEventListener("click", (e) => {
  addArticleForm.classList.toggle("hidden");
});

addArticleForm.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    addArticleForm.classList.toggle("hidden");
  }
});

let currentAuthorCount = 1;

function removeAuthor(e) {
  const parent = e.target.closest(".authors");
  parent.remove();
}

const addAuthorButton = document.getElementById("add_author_btn");
const author = document.getElementsByClassName("authors")[0];

addAuthorButton.addEventListener("click", (e) => {
  const otherAuthor = author.cloneNode(true);
  currentAuthorCount++;

  otherAuthor.id = `author-${currentAuthorCount}`;
  author.parentNode.appendChild(otherAuthor);

  if (otherAuthor.id !== "author-1") {
    const btn = document.getElementById(otherAuthor.id).lastChild;
    if (btn) {
      btn.addEventListener("click", removeAuthor);
    }
  }
});
