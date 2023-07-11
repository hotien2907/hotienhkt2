let day = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let month = parseInt(prompt("Nhập vào tháng"), 10);
let year = parseInt(prompt("Nhập vào năm"), 10);

// Kiểm tra năm nhuận
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Kiểm tra giá trị nhập vào
if (month >= 1 && month <= 12) {
  // Kiểm tra năm nhuận và tháng 2
  if (month === 2 && isLeapYear(year)) {
    console.log(`Tháng ${month} năm ${year} có ${day[month - 1] + 1} ngày.`);
  } else {
    console.log(`Tháng ${month} năm ${year} có ${day[month - 1]} ngày.`);
  }
} else {
  console.log("Giá trị tháng không hợp lệ.");
}
