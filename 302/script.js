function funcd() {return (new Date).getDate();}
function funcy(){return (new Date).getFullYear();}
function funcm(){return (new Date).getMonth();}
let [year=funcy(), month=funcm(), day = funcd()] = arr;