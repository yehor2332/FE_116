/*1 Створити масив «Список покупок». Кожен елемент масиву є об'єктом, який містить  
   назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:*/
let shoppingList = [
  {
    name: 'Sugar',
    number: 2,
    price: 5,
    isPurchased: true,
    total: 10,
  },
  {
    name: 'Bread',
    number: 1,
    price: 30,
    isPurchased: false,
    total: 30,
  },
  {
    name: 'Beetroot',
    number: 3,
    price: 2,
    isPurchased: true,
    total: 6,
  },
  { 
    name: 'Socks',
    number: 4,
    price: 15,
    isPurchased: false,
    total: 60,
  },
];
/*console.log(shoppingList[0].Total());
console.log(shoppingList[1].Total());
console.log(shoppingList[2].Total());
console.log(shoppingList[3].Total());

Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.


function showShoppingList () {
  return shoppingList.sort((current) => {
    if (current.isPurchased) {
      return 1;
    } else {
      return -1;
    }
  })
}
console.log(showShoppingList())*/

//Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

/*function buyProduct(productName) {
  for (item of shoppingList) {
    if (productName === item.name) {
      item.isPurchased = true;
    }
  }
}
buyProduct("Bread")
buyProduct("Socks")
console.log(shoppingList);

/*function buyProduct(productName) {
  for (index in shoppingList) {
    const item = shoppingList[index];
    if (productName === item.name) {
      item.isPurchased = true;
    }
  }
}
buyProduct("Bread")
buyProduct("Socks")
console.log(shoppingList);*/

//2 Видалення продукту зі списку (видалення повинно проводитися шляхом створення  нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)

/*function deleteProduct(productName) {
  const newShoppingList = shoppingList.slice();
  for(let i = 0; i < newShoppingList.length; i++){
    if(newShoppingList[i].name === productName){
       delete newShoppingList[i];
    } 
  }
  return newShoppingList
}

console.log(deleteProduct('Bread'));*/

//3 Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.*/

function addProduct(newProduct) {
  let foundProduct;
  for (const item of shoppingList) {
    if (item.name === newProduct.name) {
      foundProduct = item;
      break;
    }
  }

  if (foundProduct) {
    foundProduct.price = newProduct.price;
    foundProduct.number += newProduct.number;
    foundProduct.total = foundProduct.price * foundProduct.number;
  } else {
    shoppingList.push(newProduct);
  }
}

addProduct({name: "Bread", number: 2, price: 12, isPurchased: false});
addProduct({name: "Milk", number: 1, price: 24, isPurchased: false});
console.log(shoppingList);
