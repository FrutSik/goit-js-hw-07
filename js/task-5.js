function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const changeColorBtn = document.querySelector(".change-color");
  const changeColorSpan = document.querySelector(".color");

  changeColorBtn.addEventListener("click", () => {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    changeColorSpan.textContent = randomColor;
  });
});
