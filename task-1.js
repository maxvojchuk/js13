const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";

user.hobby = "skydiving";

user.premium = false;
const keys = Object.keys(user);
for (let key of keys) {
  console.log(`${key}: ${user[key]}`);
}

const { name, age, hobby } = user;

console.log(name);
console.log(age);
console.log(hobby);
