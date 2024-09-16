let obj={}
function performArithmatic(a,b) {
    let sum=a+b;
    obj.sum=sum;
    let min=a-b;
    obj.min=min;
    return obj;
}
let x=performArithmatic(2,5);
console.log(obj);
