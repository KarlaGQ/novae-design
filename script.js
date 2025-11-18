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

document.querySelector(".peek-img").addEventListener("click", () => {
  document.querySelector(".horizontal-scroll").scrollIntoView({
    behavior: "smooth"
  });
});
