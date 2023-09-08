let arr = [2, 4, 6, 8];

let result = arr.some(function(elem,index) {
	if (elem * index < 30) {
		return elem;}
});

console.log(result);
