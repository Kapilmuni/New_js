function calculatePrefixPostfix(a, b) {
    let prefixResult = ++a; 
    let postfixResult = b++; 

    return {
        prefixResult: prefixResult, 
        postfixResult: postfixResult, 
        newBValue: b 
    };
}
console.log(calculatePrefixPostfix(10, 20));
