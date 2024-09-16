function compareNumbers(a,b) {
    if (a>b) {
        return "greater than";
    }else if(a<b){
        return "less than";
    }else{
        return "equal to";
    }
}
let x=compareNumbers(2,2);
console.log(x);
