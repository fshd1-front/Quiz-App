const score = JSON.parse(localStorage.getItem("score"));
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const scoreEle = document.querySelector("p");
const button = document.querySelector("button");
const input = document.querySelector("input");
const Hoshdar = document.querySelector("span");

scoreEle.innerText = score;

const saveHandler = () => {
  if (!input.value || !score) {
    alertHandler("error");
  } else {
    alertHandler("success");
    const finalScore = { name: input.value, score };
    highScores.push(finalScore);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(10);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    localStorage.removeItem("scores");
    window.location.assign("/");
  }
};

const alertHandler = (type) => {
  if (type === "success") {
    Hoshdar.classList.add("success");
    Hoshdar.innerText = "User saved Successfully!";
  } else if (type === "error") {
    Hoshdar.classList.add("error");
    Hoshdar.innerText = "Enter a valid username!";
  }
  setTimeout(() => {
    Hoshdar.style.visibility = "hidden";
  }, 2000);
};

button.addEventListener("click", saveHandler);
