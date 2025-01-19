const btn  = document.getElementById("btn");
const text = document.getElementById("text");

btn.addEventListener("click", () => {
    // console.log("クリックされました！");;
    const test = 'クリックされました！'
    text.textContent = test;
  });