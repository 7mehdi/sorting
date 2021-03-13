function sortFunc() {
  arr.sort((a, b) => {
    return a.age - b.age;
  });
  console.log(arr);
}

var arr = [
  { name: "mouh", age: 32 },
  { name: "Edward", age: 17 },
  { name: "Christine", age: 583 },
  { name: "Sarah", age: 2 },
];
sortFunc(arr);
