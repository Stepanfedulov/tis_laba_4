let month = 8;
if (month >0 && month<3 || month == 12){
	console.log("зима")
} else if (month >2 && month <6){
	console.log("весна")
} else if (month >5 && month <9){
	console.log("лето")
} else if (month > 8 && month<12){
	console.log("осень")
}else{
	console.log("error")
}