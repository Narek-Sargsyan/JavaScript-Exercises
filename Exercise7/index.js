let today = new Date();
let arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentDay;
let currentTime = today.toLocaleTimeString();

for (let x = 0; x < arr.length; x++) {
  if (today.getDay() == x) {
    currentDay = arr[x];
  }
}

console.log(`${currentDay} ${currentTime}`);