function CountFalsyValues(arr) {
    let count=0;
    for(i=0;i<arr.length;i++){
        if(!arr[i]){
            count++
        }
    }
    return count;
}
let Arr = [0,1,NaN,undefined,2,"",null,33,4,85,123];
let x=CountFalsyValues(Arr);
console.log(x);
