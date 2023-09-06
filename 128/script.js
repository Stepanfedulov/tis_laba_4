let num = '22';
if (num < 10 || num > 99) {
}
if (num >= 10 && num <= 99) {
  let sum = parseInt(num[0]) + parseInt(num[1]);
  if (sum <= 9) {
    alert('Сумма цифр  не более 9, число однозначное');
  } else {
    alert('Число двузначное');
  }
}