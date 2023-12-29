/*let num  = 13;
if (num > 13) {
console.log(1);
} else if (num < 13) {
console.log(2);
} else {
console.log(false);
}*/


/*1 Створіть об'єкт room з параметри:
ключ height зі значенням 3
ключ tv зі значенням samsung
ключ big зі значенням true ------ЗРОБЛЕНО--------

2 Виведіть в alert тип даних параметра big ------ЗРОБЛЕНО-------- */
/*let room = {
  height: 3,
  tv: "samsung",
  big: true,
  };
  alert(typeof (room.big));*/

  //3 Перевірте, що цей об'єкт не є порожнім і що в ньому є ключ age. ------ЗРОБЛЕНО--------
  /*let user = {
    name: "John",
    age: 30
  };
  if ("age" in user) {
    console.log("molodec!");   
}
  if (Object.keys(user).length == 0) {
    console.log("тут пусто!");
  } else {
    console.log("тут шото есть!");
  }


 // 4 Отримайте з цього об'єкту елемент, де name == "Bob" і збережіть це в будь-якій змінній.
   /*let users = {
    user_1: {
      name: "John",
      age: 30
    },
    user_2: {
      name: "Bob",
      age: 21
    },
    user_3: {
      name: "Anna",
      age: 19
    }
  }

let findUser;

for (let key in users) {
  const user = users[key];
  if (user.name === 'Bob') {
    findUser = user;
  }
}
console.log(findUser);

for(let key in users) {
  const user = users[key];
  if (user.name === "Anna") {
    delete users[key];
  }
}
-------------------------------Видаліть із об'єктів (завдання 4) об'єкт з name == "Anna".-----------зроблено*/


//Отримайте з об'єкта obj значення id у констанду id, не використовуючи вираз obj.id

/*const obj = {
  id: 5,
  token: 12343423
};
const ID = obj["id"];

console.log(ID);*/

/*6 Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
Метод, який виводить на екран інформацію про автомобіль.
Додавання ім’я водія у список
Перевірка водія на наявність його ім’я у списку
Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. */

const auto = {
  make: "Mercedes",
  model: "c300",
  issueYear: "2015",
  averageSpeed: 80,
  fuelTank: 50,
  averageConsumption: 10,
  drivers: {},
  getInfo () {
    alert(
      `make: ${this.make}, model: ${this.model}, issueYear: ${this.issueYear},
       averageSpeed: ${this.averageSpeed}, fuelTank: ${this.fuelTank}, averageConsumption: ${this.averageConsumption} `
    );
  },
  addDriver(key, driverName) {
    this.drivers[key] = driverName;
  },
  hasDriver(driverName) {
    for (key in this.drivers) {    //проходится по кожному ключу драйверс, блок цикла 
      const value = this.drivers[key];
      if (value === driverName) {
        console.log('Driver is Hier!');
      }
    }
  },
  calc(distance) {
    const necessaryFuel = distance * this.averageConsumption / 100;
    const necessaryHours = distance / this.averageSpeed;
    const necessaryTime = necessaryHours + Math.floor(necessaryHours / 4);
    console.log("necessary fuel: ", necessaryFuel);
    console.log("necessary time: ", necessaryTime);
  }
}
auto.getInfo();
auto.addDriver('Driver1', 'Yehor');
auto.hasDriver('Yehor');
auto.hasDriver('Alex');
auto.calc(120);
console.log(auto);


/*ДЗ
1 Створіть об'єкт room з параметри:
ключ height зі значенням 3
ключ tv зі значенням samsung
ключ big зі значенням true ------ЗРОБЛЕНО--------

2 Виведіть в alert тип даних параметра big ------ЗРОБЛЕНО--------

3 Перевірте, що цей об'єкт не є порожнім і що в ньому є ключ age. ------ЗРОБЛЕНО--------
let user = {
  name: "John",
  age: 30
};
4 Отримайте з цього об'єкту елемент, де name == "Bob" і збережіть це в будь-якій змінній.
let users = {
  user_1: {
    name: "John",
    age: 30
  },
  user_2: {
    name: "Bob",
    age: 21
  },
  user_3: {
    name: "Anna",
    age: 19
  }
}
5 Видаліть із об'єктів (завдання 4) об'єкт з name == "Anna".
Отримайте з об'єкта obj значення id у констанду id, не використовуючи вираз obj.id
const obj = {
  id: 5,
  token: 12343423
};
6 Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
Метод, який виводить на екран інформацію про автомобіль.
Додавання ім’я водія у список
Перевірка водія на наявність його ім’я у списку
Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 
*/