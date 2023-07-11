let arr = [3, 25, 38, 49, 12];
let temp;

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}

console.log(arr);

//cách 2 dùng hàm sort
arr.sort(function (a, b) {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
});
console.log(arr);
