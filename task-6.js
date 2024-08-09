const toys = [
  { category: "toy", name: "car", price: 50, quantity: 100 },
  { category: "toy", name: "doll", price: 200, quantity: 50 },
  { category: "toy", name: "puzle", price: 40, quantity: 60 },
];
const calculateTotalPrice = (allProducts, productName) => {
  let sum = 0;
  for (let product of allProducts) {
    if (product.name === productName) {
      sum = product.price * product.quantity;
    }
  }
  return sum;
};
console.log(calculateTotalPrice(toys, "car"));
console.log(calculateTotalPrice(toys, "doll"));
console.log(calculateTotalPrice(toys, "puzle"));
const [
  { category, name, price, quantity },
  {
    category: SecondCategory,
    name: SecondName,
    price: SecondPrice,
    quantity: SecondQuantity,
  },
  {
    category: LastCategory,
    name: LastName,
    price: LastPrice,
    quantity: lastQuantity,
  },
] = toys;
console.log(category);
console.log(name);
console.log(price);
console.log(quantity);
console.log(SecondCategory);
console.log(SecondName);
console.log(SecondPrice);
console.log(SecondQuantity);
console.log(LastCategory);
console.log(LastName);
console.log(LastPrice);
console.log(lastQuantity);
