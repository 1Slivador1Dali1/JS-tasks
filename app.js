// 3.2 ex
const buyList = ['Milk', 'Bread', 'Apples'];
console.log(buyList);

buyList.splice(1, 1, 'Bananas', 'Eggs');
console.log(buyList);

console.log(buyList.pop());
console.log(buyList);

console.log(buyList.sort());

let findIndex = buyList.indexOf('Milk');
console.log(findIndex);

buyList.splice(1, 0, 'Carrots', 'Lettuce');
console.log(buyList);

const buyListTwo = ['Juice', 'Pop'];

let arr1 = buyList.concat(buyListTwo);
let arr2 = arr1.concat(buyListTwo);
console.log(arr2);

let findIndex2 = arr2.lastIndexOf('Pop');
console.log(findIndex2);

