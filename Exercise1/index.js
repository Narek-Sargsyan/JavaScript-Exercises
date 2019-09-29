let arr = [8,2,5,1];
let p1 = arr[0];

for (let i = 0; i < arr.length; i++) {
  p1 < arr[i] ? p1 = arr[i] : null;
}

console.log(p1);