let arr = [8,2,5,1];
let value = arr[0];

for (let x = 0; x < arr.length; x++) {
  value < arr[x] ? value = arr[x] : null;
}

console.log(value);