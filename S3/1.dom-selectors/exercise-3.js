document.addEventListener("DOMContentLoaded", () => {
    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach((p) => console.log(p.textContent));
});