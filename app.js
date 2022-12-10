const btn = document.querySelector(".header-burger");
console.log(btn);

const nav = document.querySelector(".header-list");
console.log(nav);

btn.onclick = function () {
    nav.classList.toggle("is-show");
    btn.classList.toggle("is-clicked");
}