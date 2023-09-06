let day = 33;
if (day >30 && day < 32) {
	console.log('4 декада');
} else if (day >20 && day <31) {
	console.log('3 декада');
} else if (day > 10 && day<21) {
	console.log('2 декада');
} else if (day > 0 && day < 11) {
	console.log('1 декада');
} else {
	console.log('неверное значение переменной day'); 
}