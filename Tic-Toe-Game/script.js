let flag = true;
var win=true;
const div1 = document.querySelector(".box1");
div1.addEventListener("click", function () {
  turn(div1);
  checkWinner();
});
const div2 = document.querySelector(".box2");
div2.addEventListener("click", function () {
  turn(div2);
  checkWinner();
});
const div3 = document.querySelector(".box3");
div3.addEventListener("click", function () {
  turn(div3);
  checkWinner();
});
const div4 = document.querySelector(".box4");
div4.addEventListener("click", function () {
  turn(div4);
  checkWinner();
});
const div5 = document.querySelector(".box5");
div5.addEventListener("click", function () {
  turn(div5);
  checkWinner();
});
const div6 = document.querySelector(".box6");
div6.addEventListener("click", function () {
  turn(div6);
  checkWinner();
});
const div7 = document.querySelector(".box7");
div7.addEventListener("click", function () {
  turn(div7);
  checkWinner();
});
const div8 = document.querySelector(".box8");
div8.addEventListener("click", function () {
  turn(div8);
  checkWinner();
});
const div9 = document.querySelector(".box9");
div9.addEventListener("click", function () {
  turn(div9);
  checkWinner();
});
function turn(div) {
  if (flag == true) {
    div.innerText = "x";
    flag = false;
  } else {
    div.innerText = "0";
    flag = true;
  }
}
function checkWinner() {
  var label = document.createElement("span");

  if (
    ((div1.innerText == "x" && div5.innerText == "x" && div9.innerText == "x") ||
    (div1.innerText == "x" && div2.innerText == "x" && div3.innerText == "x") ||
    (div1.innerText == "x" && div4.innerText == "x" && div7.innerText == "x") ||
    (div2.innerText == "x" && div5.innerText == "x" && div8.innerText == "x") ||
    (div3.innerText == "x" && div6.innerText == "x" && div9.innerText == "x") ||
    (div4.innerText == "x" && div5.innerText == "x" && div6.innerText == "x") ||
    (div7.innerText == "x" && div8.innerText == "x" && div9.innerText == "x") ||
    (div3.innerText == "x" && div5.innerText == "x" && div7.innerText == "x"))&(win==true)
  ) {
    label.innerText = "Player 1 won";
    document.body.append(label);
    win=false;
  } else if (
    ((div1.innerText == "0" && div5.innerText == "0" && div9.innerText == "0") ||
    (div1.innerText == "0" && div2.innerText == "0" && div3.innerText == "0") ||
    (div1.innerText == "0" && div4.innerText == "0" && div7.innerText == "0") ||
    (div2.innerText == "0" && div5.innerText == "0" && div8.innerText == "0") ||
    (div3.innerText == "0" && div6.innerText == "0" && div9.innerText == "0") ||
    (div4.innerText == "0" && div5.innerText == "0" && div6.innerText == "0") ||
    (div7.innerText == "0" && div8.innerText == "0" && div9.innerText == "0") ||
    (div3.innerText == "0" && div5.innerText == "0" && div7.innerText == "0")) &(win==true)
  ) {
    label.innerText = "Player 2 won";
    document.body.append(label);
    win=false;
  }
  label.style.background = "green";
  label.style.margin = "20% 42%";
  label.style["font-size"] = "1.5rem";
}
