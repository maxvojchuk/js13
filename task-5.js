const users = [
  {
    name: "John",
    age: 30,
    hobby: "reading",
  },
  {
    name: "ann",
    age: 25,
    hobby: "walking",
  },
  {
    name: "max",
    age: 15,
    hobby: "runing",
  },
];
const getAllPropValues = (arr, prop) => {
  const properties = [];

  for (const product of arr) {
    if (prop in product) {
      properties.push(product[prop]);
    }
  }

  return properties;
};
console.log(getAllPropValues(users, "name"));
console.log(getAllPropValues(users, "age"));
console.log(getAllPropValues(users, "hobby"));
const [
  { name, age, hobby },
  { name: SecondName, age: SecondAge, hobby: SecondHobby },
  { name: LastName, age: LastAge, hobby: lastHobby },
] = users;
console.log(name);
console.log(age);
console.log(hobby);
console.log(SecondName);
console.log(SecondAge);
console.log(SecondHobby);
console.log(LastName);
console.log(LastAge);
console.log(lastHobby);
