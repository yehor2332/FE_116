/*let main = document.querySelector('main');
main.innerHTML = ('<section class="list"></section>')
let list =' ';
for (let i = 0; i < 3; i++) {
  let ul = document.createElement('ul');
  let list ='';
  for (let i = 1; i <= 5; i++) {
    list += `<li>${i}</li>`
  }
  ul.insertAdjacentHTML('beforeend', list);
  document.querySelector('section.list').append(ul)
}

let main = document.querySelector('main');
main.innerHTML = ('<section class="list"></section>')
let arr = [
  ['li-1-1', 'li-1-2', 'li-1-3', 'li-1-4', 'li-1-5'],
  ['li-2-1', 'li-2-2', 'li-2-3', 'li-2-4'],
  ['li-3-1', 'li-3-2', 'li-3-3', 'li-3-4', 'li-3-5', 'li-3-6'],
]
for (let i = 0; i < arr.length; i++) {
  let ul = document.createElement('ul');
  let list ='';
  for (let j = 0; j < arr[i].length; j++) {
    list += `<li>${arr[i][j]}</li>`
  }
  ul.insertAdjacentHTML('beforeend', list);
  document.querySelector('section.list').append(ul)
}
document.querySelector('section.list').style.cssText = 'display: flex; justify-content: space-between;';*/

//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка
//повинна показати “Іван”).

/*let name = "Ivan";
let city = "Kyiv";
city = name;
console.log(city);*/

//***2***
//Який буде результат виконання скрипта?
//let name = "Olga";
//console.log(`привіт ${1}`); // привіт 1
//console.log(`привіт ${"name"}`); // привіт name
//console.log(`привіт ${name}`); // ? привіт Olga





/*//***3***
//Видобути число зі змінних
let a = "5";
let b = "13cvb";
let c = "12.9sxdcfgv";
// вивести в консоль тип
console.log(Number(a));
console.log(parseInt(b));
console.log(parseFloat(c));
console.log(typeof Number(a));
console.log(typeof parseInt(b));
console.log(typeof parseFloat(c));*/



//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3
//console.log((0.1 * 10 + 0.2 * 10) / 10);


//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40
//console.log(Math.max(20, 10, 50, 40));



//***6**
//Поверніть випадкове число в діапазоні від 2 до 4
//console.log(Math.random()*(4-2)+2);



//***7**
//дізнатись довжину message
//const message = "Welcome to Bahamas!";
//console.log(message.length); 19!


//***8**
//вивести в консоль message великими літерами
//console.log(message.toUpperCase());
//console.log(message.toLowerCase());


//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль
//***10**
// За допомогою циклу “for…in” вивести в консоль ключі і значення об*єкта


/*let user = {};
user.name = "Olga";
user.age = 23;
user.city = "Kyiv";
//console.log(user);
delete user.city;
user['like flowers'] = true;
//console.log(user);

for (key in user) {
  console.log(key);
  console.log(user[key]);
}*/

//const userName = prompt("Please enter your name:");
//console.log(userName);

/*let cost;

const sub = "free";
switch(sub) {
  case "free":
    cost = 0;
    break;
  case "pro":
    cost = 100;
    break;
  case "premium":
    cost = 500;
}
console.log(cost);*/

/*const min = prompt("Введіть хвилину");

if (min >= 0 && min <= 14) {
  console.log("Persha chvert");
} else if (min >= 15 && min <=29) {
  console.log("Druga chvert");
} else if (min >= 30 && min <=44) {
  console.log("Tretia chvert");
} else if (min >= 45 && min <=60) {
  console.log("chetverta chvert");
} else console.log("vje pishla nastupna godina");*/

/*const value = prompt("Vvedit nazvu tovaru").toLowerCase();

let cost;

switch (value) {
  case "яблуко":
    cost = 10;
    alert(`${value} коштує ${cost} гривень`);
    break;
    case "вишня":
    cost = 45;
    alert(`${value} коштує ${cost} гривень`);
    break;
    case "кавун":
    cost = 14;
    alert(`${value} коштує ${cost} гривень`);
    break;
    case "чорниця":
    cost = 20;
    alert(`${value} коштує ${cost} гривень`);
    break;
    case "диня":
    cost = 77;
    alert(`${value} коштує ${cost} гривень`);
    break;

    default:
       alert(`Товару ${value}, немає в наявності`);
}*/