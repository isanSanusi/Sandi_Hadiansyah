const menu = document.querySelector(".container .content-header .menu");
// ? menambahkan class baru saat cheked box
document.querySelector(".menu-toggle input").onclick = () => {
  menu.classList.toggle("slide");
};

// ? menghilangkan class yang baru dengan klik sembarang
const menuToggle = document.querySelector(".menu-toggle input");
document.addEventListener("click", function (e) {
  if (!menuToggle.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove("slide");
// ? menghilangkan cheklis di chekbox
    let checkboxes = document.querySelectorAll("input[type=checkbox]");
    checkboxes.forEach((checkbox) => (checkbox.checked = false));
  }
});

const skills = document.querySelector('.skills');
const journey = document.querySelector(".porto");
const home = document.querySelector(".home");
const content = document.querySelector(".container .container-content");




document.getElementById('btnSkills').onclick = () => {
  skills.classList.remove("hide");
  journey.classList.add("hide");
  content.classList.add("hide");
  btnJourney.classList.remove("place")
  btnSkills.classList.add('place')
  btnHome.classList.remove('place')
}

document.getElementById("btnJourney").onclick = () => {
  skills.classList.add("hide")
  journey.classList.remove("hide")
  content.classList.add("hide")
  btnJourney.classList.add("place")
  btnSkills.classList.remove('place')
  btnHome.classList.remove('place')

}
document.getElementById("btnHome").onclick = () => {
  skills.classList.add("hide")
  journey.classList.add("hide")
  content.classList.remove("hide")
  btnJourney.classList.remove("place")
  btnSkills.classList.remove('place')
  btnHome.classList.add('place')
}



