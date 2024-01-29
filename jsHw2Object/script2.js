/*let message = "Привіт фрілансер!";
let number = 5;

if (number > 50) {
    console.log("5 більше 50");
} else if (number > 7) {
    console.log("5 більше 7");
} else if (number > 4) {
    console.log("5 більше 4");
} else if (number > 1) {
    console.log("5 більше 1");
}
else {
    console.log("Вимога не зроблена! лол");
}*/ 

// ELSE IF!-----------------------

/*let num = 0;
while (num < 5) {
    console.log(num);
    num++;
}

let num = 0;
do {
    console.log(num);
    num++;
} while (num < 5);*/     
// while while do!!----------------------------

/*let num;
for (num = 0; num < 5; num++) {
    console.log(num);
    if (num == 2) break;
}
console.log(`Работа окончена, num = ${num}`);

firstFor: for (let num = 0; num < 2; num++) {
    for (let size = 0; size < 3; size++) {
        if (size == 2) {
            break firstFor;
        }
        console.log(size);
    }
}*/
/*
function calcSum(numOne, numTwo) {
    console.log(`Переменная numOne:${numOne}`);
    console.log(`Переменная numTwo:${numTwo}`);

    let newSum = numOne + numTwo;

    console.log(`Сумма:${newSum}`);
}

calcSum(5, 3);*/

/*let firstPart = "likes";
let userInfo = {
    name: "Вася",
    age: 30,
    [firstPart]: true,
};

let key = "name";
console.log(userInfo[key]);
//console.log(userInfo["name"]);
console.log(userInfo[firstPart]);*/

/*let id = Symbol("id");
let userInfo = {
    name: "Вася",
    age: 30,
    [id]: "НЕкоє значение" 
};
console.log(userInfo);*/

/*let userInfo = {
    name: "Вася",
    age: 30,
    adress: {
        city: "Uzhorod",
        street: "freedom",
    }
};
console.log(userInfo);
console.log(userInfo.adress);
console.log(userInfo.adress.city);*/

/*function makeUserInfo (name, age) {
    return {
        name: name,
        age: age,
    }
};

let user = makeUserInfo("Вася", 30);
console.log(user);*/

/*let userInfo = {
    name: "Вася",
}
console.log(userInfo);

userInfo.age = 30;

console.log(userInfo);

userInfo["likes javascript"] = true;

console.log(userInfo);

userInfo.adress = {
    city: "Zapiriththia",
    street: "Pirigova",
};

console.log(userInfo);       ДОДАТИ в обьект*/



/*let userInfo = {
    name: "Вася",
    age: 30,
    "likes javascript": true,
};
console.log(userInfo);

delete userInfo.age;

console.log(userInfo);

delete userInfo["likes javascript"];

console.log(userInfo); 

видалити з обьекту*/

/*let userInfo = {
    name: "Вася",
    age: 30,
    "likes javascript": true,
};

console.log(userInfo);

userInfo.age = 18;

console.log(userInfo);

userInfo["likes javascript"] = "javascriptus";

console.log(userInfo);

зміна в обьекті  значення в ключі

*/

/*let userInfo = {
    name: "Вася",
    age: 30,
};
Object.assign(userInfo, { ["likes javascript"]: true, city: "Zaporizhzhia"} ); додавання в обьект 
let user = Object.assign({}, userInfo); копия обьекта


user.age = 18;

console.log(userInfo);
console.log(user);*/

/*let userInfo = {
    name: "Вася",
    age: 30,
    adress: {
        city: "london",
        street: "Freedom",
    }
};

console.log(userInfo.age);

/*if (userInfo.age) {
    console.log(userInfo.age);
}*/

/*console.log(userInfo?.adress?.street);

if ("name" in userInfo) {
    alert("MOLODEC");       перевірка чи є ключ в обьекті
}*/


/*let userInfo = {
    name: "Вася",
    age: 30,
    adress: {
        city: "london",
        street: "Pirogova suka",
    },
    showInfo: function () {
        console.log(`${userInfo.name}, ${userInfo.age} лет. Адресс: г.${userInfo.adress.city.street}`);
    showInfo() {
        console.log(`${this.name}, ${this.age}  лет. Адресс: г.${this.adress.city}, ${this.adress.street}`);
    }
};

for (let key in userInfo) {
    console.log(key);
    console.log(userInfo[key]);
}

for (let key in userInfo.adress) {
    console.log(key);
    console.log(userInfo.adress[key]);
}

userInfo.showInfo();

let user = userInfo;
userInfo = null;
user.showInfo();
*/

/*function UserInfo (name) {
    this.name = name;
    this.age = 30;
}

console.log(new UserInfo("Vasia"));
console.log(new UserInfo("lena"));*/

/*let out = document.getElementById('out');
let tmp = '';

for (let i = 1; i<=9; i=i+1) {
    tmp = tmp + 7*i + '<br/>';
}

out.innerHTML = tmp;*/

// додавання в обьект
/*let userInfo = {
    name: "Jon",
    };
    console.log(userInfo)
    userInfo.age = 18;
    console.log(userInfo);
    userInfo.address =  {
      city: "London",
      street: "Freedom"
      };
    console.log(userInfo);

    userInfo.address.pidar = 85 ;
    console.log(userInfo);

    // видалення з обьекту
    //delete userInfo.age;
    //console.log(userInfo);
    /*delete userInfo.address;
    console.log(userInfo);
    delete userInfo.name;
    console.log(userInfo);*/

    /*userInfo.age = 32;
    console.log(userInfo);*/

    /*let userTwo = Object.assign({}, userInfo);
    userTwo.age = 32;
    console.log(userTwo);
    console.log(userInfo);

    let user = userInfo;
    user.age = 32;
    console.log(user);
    console.log(userInfo);*/

    /*let userInfo = {
        name: "Jon",
        age: 18,
        address: {
          city: "London",
          street: "Freedom"
          },
        };
        if (userInfo.age) {
          console.log(userInfo.age);
        }
         console.log(userInfo.age);
        if ("age" in userInfo) {
          console.log(userInfo.age);
        }

        for (let key in userInfo) {
            console.log(key);
            console.log(userInfo[key]);
          }*/
          
          /*let userInfo = {
            name: "Jon",
            age: 18,
            address: {
              city: "London",
              street: "Freedom",
              },
            /*showInfo: function () {
            console.log(`Hi ${userInfo.name} !`);
          }
          
          showInfo () {
            console.log(`Hi ${userInfo.name} !`);
          }
          };
          userInfo.showInfo();
          showInfo: function () {
            console.log(this);
            console.log(`Hi ${this.name} !`);
          }
        };
          userInfo.showInfo();*/
          
          
        
/*let arr = ['Ivan', 'Yehor', 'Liza',];
console.log(arr.length);

for (let i = 0; i < arr.length; i++ ) {
    console.log(arr[i]);
}*/

/*let arr = [
    [1,3,5],
    ['string', 'string2', true, {key: 'value'}],
  ]
 console.log(arr[1][3]["key"]);  // отримали валюэ*/

 let arr = [2,1,4,6,5,3];
 arr.sort();
 for (item of arr) {
   console.log(item);
 }
 
 
 
 
 
 
 

 

 
 

 



 

    



    