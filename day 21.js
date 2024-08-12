const calculateMean = (arry)=>{
    if(arry.length === 0){
        return 0;
    }
    let sum = arry.reduce((accum, curVal)=>{
        return curVal= curVal+ accum;
    },0)
    return sum / arry.length;
}






console.log(calculateMean([1,2,3,4,5]));
console.log(calculateMean([10,20,30]));
console.log(calculateMean([]));
