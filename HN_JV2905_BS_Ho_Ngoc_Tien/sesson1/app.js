let array = [3, 5, , 56, 33, 67, 99, 34];
let max = array[0];
for (let i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}
console.log("Giá trị lớn nhất: " + max);
