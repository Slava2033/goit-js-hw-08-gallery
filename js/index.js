import gallery from "./gallery-items.js";
const list = document.querySelector(".js-gallery");
const lightBox = document.querySelector(".lightbox");
const btn = document.querySelector(".lightbox__button");
const img = document.querySelector(".lightbox__image");
const overlay = document.querySelector(".lightbox__overlay");

gallery.map((element) => {
  const { preview, original, description } = element;
  list.insertAdjacentHTML(
    "beforeend",
    `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></li>`
  );
});

const toggleAtr = function (attr = "") {
  lightBox.classList.toggle("is-open");
  attr ? img.setAttribute("src", `${attr}`) : img.removeAttribute("src");
};

const getPicture = function (e) {
  if (e.target.nodeName !== "IMG") return;
  e.preventDefault();
  const link = e.target.dataset.source;
  toggleAtr(link);
  lightBox.addEventListener("click", closeModal);
};

const closeModal = function () {
  toggleAtr();
  lightBox.removeEventListener("click", closeModal);
};

list.addEventListener("click", getPicture);
