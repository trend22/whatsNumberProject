'use strict'

console.log(isNaN(parseFloat('enterNumber')));

const whatsNumber = function (myNumber) {
    let startGame;
    let endGame;

    startGame = confirm('Играем в Угадай число от 1 до 100?');

    if (startGame) {

        takeNumber(myNumber);

    } else endGame = alert('Игра завершается..')
} 

const takeNumber = function (unknowNum) {
    let enterNumber;

    enterNumber = prompt('Введите число от 1 до 100');

    if (enterNumber === null) {
        return alert('Игра окончена');
    }

    while (enterNumber.trim() == '' || !isFinite(enterNumber)) {
        alert('Введи число!');
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
    { return endGame = alert('Поздравляю, Вы угадали!!!')}

    takeNumber(unknowNum);
}

const numLessAlert = function () {

    alert('Загаданное число меньше');
}

const numMoreAlert = function () {

    alert('Загаданное число больше');
}

//запуск игры
whatsNumber(20);