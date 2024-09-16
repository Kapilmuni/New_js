function evaluateConditions(a,b,c){
    if (a>0&&b<0){
        return "a is positive and b is negative";
    } else if (b===0||isNaN(c)){
        return "b is zero or c is not a number";
    } else if(a!==b||c>10){
        return "a is not equal to b or c is greater than 10";
    } else{
        return "None of the conditions are true";
    }
}
console.log(evaluateConditions(5,-3,15));
