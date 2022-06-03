'use strict'

console.log(isNaN(parseFloat('enterNumber')));

const whatsNumber = function (myNumber) {
    let startGame;

    startGame = confirm('Играем в Угадай число от 1 до 100?');

    if (startGame) {

        takeNumber(myNumber);

    } else alert('Игра завершается..')
} 

const takeNumber = function (unknowNum) {
    let enterNumber;

    enterNumber = prompt('Введите число от 1 до 100');

    if (enterNumber === null) {
        return alert('Игра окончена');
    }

//    while (numOutOfRange(enterNumber)){
//         enterNumber = prompt('Введите число от 1 до 100');
//     }

    while (enterNumber.trim() == '' || !isFinite(enterNumber) || numOutOfRange(enterNumber)) {
        alert('Ошибка! Необходимо ввести число! Диапазон значений от 1 до 100. ');
        enterNumber = prompt('Введите число от 1 до 100');
    } 
  
    enterNumber = Number(enterNumber);

    if(enterNumber < unknowNum) {
        numLessAlert();
    } 
    
    if(enterNumber > unknowNum) {
        numMoreAlert();
    }

    if (enterNumber === unknowNum)
    { return alert('Поздравляю, Вы угадали!!!')}

    takeNumber(unknowNum);
}

const numLessAlert = function () {

    alert('Загаданное число меньше');
}

const numMoreAlert = function () {

    alert('Загаданное число больше');
}

const numOutOfRange = function (num) {
    let result;

    if (num < 1 || num > 100) {
        result = true;
    } else result = false;
    return result;
}

//запуск игры
whatsNumber(20);