function isInRange(value,min,max){
    if (value>=min&&value<=max){
        return true;
    }else{
        return false;
    }
}
console.log(isInRange(2, 1, 10));
