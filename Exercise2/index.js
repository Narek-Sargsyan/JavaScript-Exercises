let arr = [4,6,5,10,3,2];
let str = 0;

for (let x = 0; x < arr.length; x++) {
  str += arr[x];
}

console.log(str/arr.length);