import "../sass/styles.scss";
import './emailJs'
import './chartJs'
import './anime'
import './fadeOut'

const toggleBtn = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav-top");
const navLinks = document.querySelectorAll(".nav-top a");
const content = document.querySelector(".aside-content");
const transText = document.querySelector(".translated-text");
const transTextHeight = transText.scrollHeight;
const link = document.querySelector(".showMore-link");


link.addEventListener("click", () => {
  content.classList.toggle("is-shown");
  transText.style.height = `${transTextHeight}px`;

  if (!content.classList.contains("is-shown")) {
    transText.setAttribute("style", "height:0px");
  }
});

toggleBtn.addEventListener("click", (e) => {
  nav.classList.toggle("is-open");
});

navLinks.forEach(link => link.addEventListener('click',()=>{
  nav.classList.remove('is-open')
}))