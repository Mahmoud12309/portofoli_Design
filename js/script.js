let darkmode = "light";
const body = document.querySelector("body");
const darkmodei = document.querySelector(".darkm");
const darkmoi = document.querySelector(".darkm i");
const heart = document.querySelectorAll(".fa-heart");
let heartm = "light";
darkmodei.addEventListener("click", () => {
    if (darkmode === "light") {
        darkmode = "dark";
        darkmoi.className = "fa-solid fa-sun";
        body.classList.add("dark");
    } else {
        darkmode = "light";
        darkmoi.className = "fa-solid fa-moon";
        body.classList.remove("dark");
    }
    console.log(darkmode);
});
heart.forEach((heart) => {
    heart.addEventListener("click", () => {
        if (heartm === "light") {
            heartm = "red";
            heart.className = "fa-solid fa-heart red";
        } else {
            heartm = "light";
            heart.className = "fa-regular fa-heart";
        }
        console.log(darkmode);
    });

});
