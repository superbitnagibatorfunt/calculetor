let a = ""; // first number
let b = ""; // secont number
let sign = ""; //знак операции
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "x", "/"];

//экран
const out = document.querySelector(".calc_screen p");

function clearAll() {
  let a = ""; // first number
  let b = ""; // secont number
  let sign = ""; // знак операции
  let finish = false;
  out.textContent = 0;
}

document.querySelector(".ac").onclick = clearAll;
document.querySelector(".buttons").onclick = (event) => {
  // Нажата не кнопка
  if (!event.target.classlist.contais("btn")) return;
  // Нажата кнопка clearAll
  if (event.target.classlist.contais("ac")) return;

  out.textContent = "";
  // Получаю нажатую кнопку
  const key = event.target.textContent;

  //Если нажата клавиша 0-9 или .
  if (digit.includes(key)) {
    a += key;
    console.log(a, b, sign);
  }
};
