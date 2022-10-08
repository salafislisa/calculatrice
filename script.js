//document.querySelector('h4').style.background = "yellow";
//click event

const questionContaine = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn1 = document.getElementById("#btn-2");
const response = document.querySelector("p");

questionContaine.addEventListener("click", () => {
    questionContaine.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
    response.classList.add("show-response");
    response.style.background = "green";

});

