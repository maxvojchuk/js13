function findBestEmployee(employees) {
  let bestEmployee = "";
  let maxTasks = 0;
  const entries = Object.entries(employees);
  // for (let [prop, value] of entries) {
  //   console.log(prop, value);
  // }
  for (let [name, tasks] of entries) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestEmployee = name;
    }
    console.log(name, tasks);
  }

  return bestEmployee;
}
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
