let arr = [6, 12, 10, 3];
let newArr = [...arr];
newArr = newArr.filter((item) => item !== 10);
console.log(newArr);
