const user = {
  name: "John",
  age: 30,
  hobby: "reading",
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
