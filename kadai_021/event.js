const btn = document.getElementById("btn");
const text = document.getElementById("text");

btn.addEventListener("click", () => {
  setTimeout(() => {
    const test = "ボタンをクリックしました！";
    text.textContent = test;
  }, 2000);
});
