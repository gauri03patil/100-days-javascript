// let numberss = [1,2,3]

// const myData = numberss.map((curVal)=>{return curVal * curVal}).reduce((CurrVal, accum)=>{
//     return CurrVal + accum

// }, 0)

// console.log(myData);


// method 2 

const sumOfSquare = (arrayy)=>{

    let sum = 0;
    for(let elem of arrayy){
        sum = sum + elem * elem
    }
    return sum;
}






console.log(sumOfSquare([1,2,3]));