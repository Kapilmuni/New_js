function evaluateCondition(a,b,c){
    if(a>b&&a>c){
        return "a is the largest";
    } else if(b>a&&b<c){
        return "b is between a and c";
    } else if(c<a&&c<b) {
        return "c is less than a and b";
    } else {
        return "None of the conditions are true";
    }
}
console.log(evaluateCondition(10, 5, 2));
