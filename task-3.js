function findBestEmployee(employees) {
  let bestEmployee = "";
  let maxTasks = 0;

  for (const name in employees) {
    if (employees[name] > maxTasks) {
      bestEmployee = name;
      maxTasks = employees[name];
    }
  }

  return bestEmployee;
}
const employees = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(`Найкращий робітник ${findBestEmployee(employees)}`);
const { ann, david, helen, lorence } = employees;
console.log(ann);
console.log(david);
console.log(helen);
console.log(lorence);
