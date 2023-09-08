function func(...nums) {
	if (nums.length === 0){
        return 0;
    }
	let sum=nums.reduce((acc,now)=>acc+now,0);
	return sum/nums.length;
}

let result = func(1, 2, 3);
console.log(result);