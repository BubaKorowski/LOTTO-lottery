const numbers = [];
const numbersStorage = [];
const btnDraw = document.querySelector(".draw");
const btnShowResults = document.querySelector(".results");

const sortNumbers = (a, b) => {
  return a - b;
};
const clearNumbers = () => {
  numbers.length = 0;
};

const drawNumbers = () => {
  let draws = Number(document.querySelector(".drawNumber").value);
  let minNum = Number(document.querySelector(".minNumber").value);
  let maxNum = Number(document.querySelector(".maxNumber").value);

  //dodać warunek dla minusowych wartości
  if (!draws || !minNum || !maxNum) {
    alert("Uzupełnij wartości");
    return;
  }
  // else if (draws > maxNum) {
  //   alert("Liczba losowań powinna być mniejsza niż maksymalna liczba losowa");
  //   return;
  // }
  //powyższy warunek zawarty jest w poniższym warunku
  else if (draws >= maxNum - minNum) {
    alert(
      "Ilość liczb do wylkosowania nie może być mniejsza od różnicy pomiędzy największą a najmniejszą liczbą losową."
    );
    return;
  } else if (minNum > maxNum) {
    alert("Minimalna liczba nie może być większa od maksymalnej.");
    return;
  }
  while (numbers.length < draws) {
    const randomNumber = Math.floor(
      Math.random() * (maxNum - minNum + minNum) + minNum
    );
    if (numbers.indexOf(randomNumber) === -1) numbers.push(randomNumber);
  }

  numbers.sort(sortNumbers);
  document.querySelector(
    ".generated"
  ).innerHTML = `Twoje szczęśliwe liczby to: ${numbers.toString()}.`;
  numbersClone = numbers.slice();
  numbersStorage.push(numbersClone);
  // console.log(numbersStorage);

  //check win numbers checkWinningNumbers()
  checkWinningNumbers();
  clearNumbers();
};

//sprawzacz wygranej,
const checkWinningNumbers = () => {
  let arr = [1, 3, 6, 40, 33, 23];
  console.log(`Twoje trafione liczby to: ${_.intersection(numbers, arr)}`);
};
// https://www.w3resource.com/javascript-exercises/javascript-array-exercise-13.php
// poprawić pomyśleć
const showResults = () => {
  let e = "";
  for (var i = 0; i < numbersStorage.length; i++) {
    e += `Losowanie numer 
      ${i + 1}.
       Twoje szczęśliwe liczby to: 
      ${numbersStorage[i]} 
      <br/>`;
  }
  // console.log(e);
  document.querySelector(".display").innerHTML = e;
};

btnDraw.addEventListener("click", drawNumbers);
btnShowResults.addEventListener("click", showResults);
