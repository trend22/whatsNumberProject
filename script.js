'use strict'

const whatsNumber = function (myNumber) {
    let startGame;
    let endGame;
    let attempts = 10;

    startGame = confirm('Играем в Угадай число от 1 до 100?');

    if (startGame) {

        takeNumber(myNumber, attempts);

    } else endGame = alert('Игра завершается..')
} 

const takeNumber = function (unknowNum, attempts) {
    let enterNumber;

    console.log(attempts);

    enterNumber = prompt('Введите число от 1 до 100');

    if (enterNumber === null) {
        return alert('Игра окончена');
    }

    while (enterNumber.trim() == '' || !isFinite(enterNumber) || numOutOfRange(enterNumber)) {
        alert('Ошибка! Необходимо ввести число! Диапазон значений от 1 до 100.');
        enterNumber = prompt('Введите число от 1 до 100');
    } 

    enterNumber = Number(enterNumber);

    attempts--;

    if(enterNumber < unknowNum) {
        numLessAlert(attempts);
    } 
    
    if(enterNumber > unknowNum) {
        numMoreAlert(attempts);
    }

    if (enterNumber === unknowNum)
    { return alert('Поздравляю, Вы угадали!!!')}

    
    if(attempts === 0) {
        let choose;

        choose = confirm('Попытки закончились, хотите сыграть еще?')

        if(choose) {
            attempts = 10;
            unknowNum = 45;
        }
    }

    takeNumber(unknowNum, attempts);
}

const numLessAlert = function (attempt) {

    alert('Загаданное число меньше, осталось ' + attempt + ' попыток');
}

const numMoreAlert = function (attempt) {

    alert('Загаданное число больше, осталось ' + attempt + ' попыток');
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