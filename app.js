// 3.2 ex
// const buyList = ['Milk', 'Bread', 'Apples'];
// console.log(buyList);

// buyList.splice(1, 1, 'Bananas', 'Eggs');
// console.log(buyList);

// console.log(buyList.pop());
// console.log(buyList);

// console.log(buyList.sort());

// let findIndex = buyList.indexOf('Milk');
// console.log(findIndex);

// buyList.splice(1, 0, 'Carrots', 'Lettuce');
// console.log(buyList);

// const buyListTwo = ['Juice', 'Pop'];

// let arr1 = buyList.concat(buyListTwo);
// let arr2 = arr1.concat(buyListTwo);
// console.log(arr2);

// let findIndex2 = arr2.lastIndexOf('Pop');
// console.log(findIndex2);

//----------------------------------------------------------------------------------------------------------------

// 3.5 ex

// const people = {frends:[]};

// const frend1 = {name: "Kiirill", lastname: "Blagovestnay", id: 1};
// const frend2 = {name: "Vlad", lastname: "Panamorev", id: 2};
// const frend3 = {name: "Maria", lastname: "Denisova", id: 3};

// people.frends.push(frend1, frend2, frend3);
// console.log(people);

//----------------------------------------------------------------------------------------------------------------

// Проект: Управление Массивом

// const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];

// theList.pop(); // Удаление первого элемента массива
// theList.shift(); // Удаление последнего элемента массива
// theList.unshift("First"); // Добавление значения в начало массива
// theList[3] = "helloWorld"; // Присвоение значения 4 элементу
// theList[2] = "MIDDLE"; // Присвоение значения элементу с третьим индексом
// theList.push("LAST"); // Добавление значения в конец массива
// console.log(theList);

//----------------------------------------------------------------------------------------------------------------

// Проект: Каталог продукции компании

// const inventory = []; // Массив для хранения перечня товаров магазина

// const item3 = {
//     name: "MacBook",
//     model: "Air",
//     cost: 700,
//     qty: 10
// };

// const item2 = {
//     name: "Iphone",
//     model: "ProMax",
//     cost: 500,
//     qty: 5
// };

// const item1 = {
//     name: "Ipad",
//     model: "Mini",
//     cost: 600,
//     qty:3
// };

// inventory.push(item1, item2, item3);
// console.log(inventory[2].qty);

//----------------------------------------------------------------------------------------------------------------

// 4.4 Ex - Магический шар судьбы

// let randomNumber = Math.floor(Math.random() * 6);
// let userAsk = prompt("You ask?");
// let message;

// switch(randomNumber) {
//     case 0 :
//     case 1 :
//     case 2 :
//         message = `${userAsk}` + " \nДа это стоит того!";
//     break;

//     case 3 :
//     case 4 :
//     case 5 :
//         message = `${userAsk}` + " \nНет это не стоит того!";
//     break;
// }

// console.log(message);

//----------------------------------------------------------------------------------------------------------------

//  4.5 Ex

// let prize = Number(prompt("Введите число от 0 до 10"));
// let message;
// let gift;

// switch(prize) {
//     case 0 :
//     case 3 :
//         gift = "You win Gold Coin";
//         message = alert("My Selection: " + `${gift}`);
//     break;
//     case 2 :
//     case 7 :
//         gift = "You win Silver Coin";
//         message = alert("My Selection: " + `${gift}`);
//     break;
//     default :
//         message = alert("You Loses!");
// }

//----------------------------------------------------------------------------------------------------------------

// Проект: Игра в рулетку

// let val = Number(prompt("Что за число?"))
// let num = 100;
// let message;

// if(val > num){
//     message = val + " больше " + num;
// }
// else if(val === num){
//     message = val + " и " + num + " равны";
// }
// else {
//     message = val + " меньше " + num;
// }

// console.log(message);

//----------------------------------------------------------------------------------------------------------------

// Проект: Проверь друга

// let person = prompt("Введите имя друга");
// let message;

// switch(person){
//     case "Кирилл":
//     case "Влад":
//         message = person + " ваш друг";
//     break;
//     default:
//         message = person + " не ваш друг";
// }

// console.log(message);

//----------------------------------------------------------------------------------------------------------------

// Проект: камень-ножницы-бумага

const myArr = ["Камень", "Бумага", "Ножницы"];
let computer = Math.floor(Math.random() * 3);
let people = Math.floor(Math.random() * 3);
let message = "Игрок: " + myArr[people] + " VS Компьютер: " + myArr[computer];

if(people === computer){
    message += " \nНичья!";
}
else if(people > computer) {
    if(computer === 0 && people === 2){
        message += " \n Компьтер Выиграл!";
    }
    else {
        message += " \nВыишрал Игрок!";
    }
}
else {
    if(computer === 2 && people === 0) {
        message += " \nВыиграл Игрок!";
    }
    else {
        message += " \n Компьтер Выиграл!";
    }
}

console.log(message);