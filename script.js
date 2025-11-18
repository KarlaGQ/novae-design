document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

const elements = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelector(".peek-image").addEventListener("click", () => {
  document.querySelector(".horizontal-scroll").scrollIntoView({
    behavior: "smooth"
  });
});

 // Animate the peek image when scrolling
window.addEventListener("scroll", () => {
  const peek = document.querySelector(".peek-image img");
  const scrollY = window.scrollY;

  // Move image upward slightly
  peek.style.transform = `translateY(${scrollY * -0.15}px)`;
});

// ---- Horizontal scroll logic ----
const horizontal = document.querySelector(".horizontal-section");
const wrapper = document.querySelector(".horizontal-wrapper");

let start = horizontal.offsetTop;
let end = start + horizontal.offsetHeight;

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;

  if (scrolled >= start && scrolled <= end) {
    // Lock the vertical scroll
    document.body.style.overflowY = "hidden";

    // Map vertical movement to horizontal slide
    let progress = scrolled - start;
    wrapper.style.transform = `translateX(-${progress}px)`;
  } else {
    // Restore normal scrolling
    document.body.style.overflowY = "visible";
  }
});
