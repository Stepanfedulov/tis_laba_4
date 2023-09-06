let arr = [1, 2, 3, -4, 5];
let summ=0
for (let elem of arr) {
	if (elem < 0) {
		console.log('есть');
		break; 
	} else{summ = summ+elem}
}
console.log(summ)