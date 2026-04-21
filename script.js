// Smooth Scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// Typing Effect (Improved)
const texts = [
  ".NET Full Stack Developer",
  "3+ Years Experience",
  "React Learner",
  "Problem Solver"
];

let index = 0;
let char = 0;
let isDeleting = false;
const typing = document.querySelector(".typing");

function type() {
  let current = texts[index];

  if (isDeleting) {
    typing.textContent = current.substring(0, char--);
  } else {
    typing.textContent = current.substring(0, char++);
  }

  if (!isDeleting && char === current.length) {
    isDeleting = true;
    setTimeout(type, 1500);
    return;
  }

  if (isDeleting && char === 0) {
    isDeleting = false;
    index = (index + 1) % texts.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", type);

// Scroll Animation
window.addEventListener("scroll", () => {
  document.querySelectorAll(".fade-in").forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 50) {
      el.classList.add("visible");
    }
  });
});
