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

const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];

theList.pop(); // Удаление первого элемента массива
theList.shift(); // Удаление последнего элемента массива
theList.unshift("First"); // Добавление значения в начало массива
theList[3] = "helloWorld"; // Присвоение значения 4 элементу
theList[2] = "MIDDLE"; // Присвоение значения элементу с третьим индексом
theList.push("LAST"); // Добавление значения в конец массива
console.log(theList);