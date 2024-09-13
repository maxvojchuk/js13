const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроїд", price: 400, quantity: 7 },
  { name: "Захоплення", price: 1200, quantity: 2 },
];

const calculateTotalPrice = (allProducts, productName) => {
  let sum = 0;
  for (let product of allProducts) {
    let { name, price, quantity } = product;
    if (name === productName) {
      sum = price * quantity;
    }
  }

  return sum;
};
console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Дроїд")); // 2800
