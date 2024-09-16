function checkRelational(a,b){
    if (a>b){
        return "a is greater than b";
    } else if(a<b){
        return "a is less than b";
    } else{
        return "a is equal to b";
    }
}
console.log(checkRelational(5, 3));

