function complexOperation(a, b) {
    console.log("Initial values:a =",a,",b=",b);
    let result1 = ++a;   
    console.log(result1);

    let result2 = b++;   
    console.log(result2);

    let result3 = a + b; 
    console.log(result3);
    return {
        finalA: a,
        finalB: b,
        finalResult: result5
    };
}
console.log(complexOperation(5, 10));
