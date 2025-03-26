const header = document.querySelector("header");
const tombolMenu = document.querySelector("#tombol-menu");
const tombolTutupMenu = document.querySelector("#tombol-tutup-menu");

tombolMenu.addEventListener("click", () => header.classList.toggle("show-mobile-menu")) 

tombolTutupMenu.addEventListener("click", () => tombolMenu.click());