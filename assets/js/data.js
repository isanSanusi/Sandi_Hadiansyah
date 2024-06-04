let swiperCards = new Swiper(".card-content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const menuToggle = document.querySelector(".menu-toggle input");
const menu = document.querySelector(".container .content-header .menu");
const bubbleOn = document.querySelector(".bubble._btn");
const bubbles = document.querySelectorAll(".bubble");
const elements = document.querySelectorAll(".part");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("slide");
});

document.addEventListener("click", function (e) {
  if (!menuToggle.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove("slide");
    let checkboxes = document.querySelectorAll("input[type=checkbox]");
    checkboxes.forEach((checkbox) => (checkbox.checked = false));
  }
});

//bubble active
bubbles.forEach((bubble) => {
  bubble.addEventListener("click", () => {
    const targetLabel = bubble.getAttribute("aria-label");
    if (!bubble.classList.contains("_btn")) {
      elements.forEach((element) => {
        if (element.classList.contains(targetLabel)) {
          element.classList.add("slideOn");
        } else {
          element.classList.remove("slideOn");
        }
      });
    }
  });
});

// Bubble Move
bubbleOn.addEventListener("click", () => {
  setTimeout(() => {
    bubbleOn.style.transform = "scale(0.5)";
  }, 300);

  moveBubble("._1", -270, 20, 200);
  moveBubble("._2", -400, 80, 400);
  moveBubble("._3", -490, 180, 100);
  moveBubble("._4", -510, 320, 0);
  moveBubble("._5", -440, 420, 300);
});

function moveBubble(selector, top, left, timeout) {
  setTimeout(() => {
    const bubble = document.querySelector(selector);
    bubble.style.top = `${top}px`;
    bubble.style.left = `${left}px`;
    bubble.style.visibility = "visible";
  }, timeout);
}
