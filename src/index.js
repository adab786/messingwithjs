import "./styles.css";

function myDisplayer(some) {
  document.getElementById("app").innerHTML = some;
}

function Sum(num1, num2) {
  let summ = num1 + num2;
  return summ;
}
let result = Sum(1, 3);

myDisplayer(result);

// now asycn await function
async function test() {
  console.log("1");
  console.log("2");
  await console.log("3");
  console.log("4");
}
console.log("6");
test();
console.log("7");

//
let list = ["one", "two", "three"];
let newlist = ["four", "five", "six"];
let spreadoperator = [...list, ...newlist];
console.log(spreadoperator);
// can also work in object
console.log(list);
const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red"
};

const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow"
};

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };
result = JSON.stringify(myUpdatedVehicle);
document.write(result);
