const btn = document.getElementById("btn");
const text = document.getElementById("text");

btn.addEventListener("click", () => {
  setTimeout(() => {
    const test = "クリックされました！";
    text.textContent = test;
  }, 2000);
});
