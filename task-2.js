const countProps = (object) => {
  const { ...prorerties } = object;

  Object.keys(object).length;
  return Object.keys(prorerties).length;
};
const object = {
  name: "Artur",
  age: 50,
  hobby: "teacher",
  mood: "unhappy",
  email: "artur@gmail.com",
};

console.log(countProps({})); // 0
console.log(countProps({ name: "Mango", age: 2 })); // 2
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
