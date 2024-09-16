function CountFalsyValues(arr) {
    let val=[];
    for(i=0;i<arr.length;i++){
        if(arr[i]){
            val.push(arr[i]);
        }
    }
    return val;
}
let Arr = [0,1,NaN,undefined,2,"",null,33,4,85,123];
let x=CountFalsyValues(Arr);
console.log(x);