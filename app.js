const count1 = document.getElementById("counter");
const dice = document.getElementsByClassName("dice");
const diceImg = document.getElementById("diceImg");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
let count = 0;

button2.style.display = "none";
diceImg.setAttribute("src", "./images/placeholderDice.png");

button1.addEventListener("click", () => {
  let num = Math.ceil(Math.random() * 6);
  if (num === 1) {
    diceImg.setAttribute("src", "./images/diceFace1.png");
    count = 0;
    count1.textContent = "Oh no! You got a 1 - Game Over";
    button1.style.display = "none";
    button2.style.display = "block";
  } else if (num === 2) {
    diceImg.setAttribute("src", "./images/diceFace2.png");
    count += 2;
    count1.textContent = `Your Score: ${count}`;
  } else if (num === 3) {
    diceImg.setAttribute("src", "./images/diceFace3.png");
    count += 3;
    count1.textContent = `Your Score: ${count}`;
  } else if (num === 4) {
    diceImg.setAttribute("src", "./images/diceFace4.png");
    count += 4;
    count1.textContent = `Your Score: ${count}`;
  } else if (num === 5) {
    diceImg.setAttribute("src", "./images/diceFace5.png");
    count += 5;
    count1.textContent = `Your Score: ${count}`;
  } else if (num === 6) {
    diceImg.setAttribute("src", "./images/diceFace6.png");
    count += 6;
    count1.textContent = `Your Score: ${count}`;
  }

  if (count >= 21) {
    count1.textContent = ` ${count} - You Won!`;
    button1.style.display = "none";
    button2.style.display = "block";
  }
});

button2.addEventListener("click", () => {
  button1.style.display = "block";
  button2.style.display = "none";
  count1.textContent = "Roll the dice to start the game!";
  diceImg.setAttribute("src", "./images/placeholderDice.png");
  count = 0;
});

// let counter = 0;
// let rolledNo = Math.ceil(Math.random()*6);
// while (counter < 20) {
//     diceImg.setAttribute("src", "./images/diceFace" + rolledNo + ".png");
//     counter = rolledNo;
// }
// console.log(counter)

// if (counter <= 20) {
//     diceImg.setAttribute("src", "./images/diceFace" + rolledNo + ".png");
//     counter = counter + rolledNo;
// } else {
//     alert("You've won!")
// }
// console.log(rolledNo)
// console.log(counter)

//     if (counter < 20) {
//         diceImg.setAttribute("src", "./images/diceFace" + rolledNo + ".png");
//         counter = i + rolledNo;
//     } else {
//         alert("You've won!")
//     }
// }
// diceImg.removeAttribute("src")
// diceImg.setAttribute("src", "./images/diceFace" + rolledNo + ".png");
// console.log(rolledNo);

// diceImg.setAttribute("src", "");
// diceImg.setAttribute("src", "./images/diceFace" + rolledNo + ".png");

// if (diceImg.src == "") {
//     diceImg.setAttribute("src", "./images/diceFace" + rolledNo + ".png");
// } else {
//     diceImg.setAttribute("src", "./images/diceFace" + rolledNo + ".png");
// }

//     if (rolledNo === 1) {
//         dice.innerHTML = ""
//         dice.innerHTML = "<img src='./images/diceFace1.png' alt='1'>"
//     } else if (rolledNo === 2) {
//         dice.innerHTML = ""
//         dice.innerHTML = "<img src='./images/diceFace2.png' alt='2'>"
//     } else if (rolledNo === 3) {
//         dice.innerHTML = ""
//         dice.innerHTML = "<img src='./images/diceFace3.png' alt='3'>"
//     } else if (rolledNo === 4) {
//         dice.innerHTML = ""
//         dice.innerHTML = "<img src='./images/diceFace4.png' alt='4'>"
//     } else if (rolledNo === 5) {
//         dice.innerHTML = ""
//         dice.innerHTML = "<img src='./images/diceFace5.png' alt='5'>"
//     } else if (rolledNo === 6) {
//         dice.innerHTML = ""
//         dice.innerHTML = "<img src='./images/diceFace6.png' alt='6'>"
//     } else {
//         alert("There has been an error, please try again")
//     }

// console.log();
