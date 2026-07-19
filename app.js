document.getElementById("year").textContent = new Date().getFullYear();

const anchors = document.querySelectorAll('a[href^="#"]');
anchors.forEach((anchor) => {
  anchor.addEventListener("click", () => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) target.setAttribute("tabindex", "-1");
  });
});
