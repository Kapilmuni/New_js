function calculateAverage(arr) {
    let sum=0;
    for(i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    avg=sum/arr.length;
    return avg;
}
let arr=[1,2,3,4];
let x=calculateAverage(arr);
console.log(x);
