const countProps = (object) => Object.keys(object).length;

const object = {
  name: "Artur",
  age: 50,
  hobby: "teacher",
  mood: "unhappy",
  email: "artur@gmail.com",
};
const propsCount = countProps(object);
console.log(`Кількість властивостей: ${propsCount}`);
const { name, age, hobby, mood, email } = object;
console.log(name);
console.log(age);
console.log(hobby);
console.log(mood);
console.log(email);
