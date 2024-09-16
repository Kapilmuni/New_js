function logicalOperations(a,b){
    return{
        and:a&&b, 
        or:a||b,    
        notA:!a,     
        notB:!b    
    };
}
console.log(logicalOperations(true, false)); 
