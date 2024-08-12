// const sumOfDigit=(nums)=>{
//     let sum=0;
//     for(let i=0; i<nums.length; i++){
//         // sum += nums[i];
//         sum = sum+nums[i];
//     }  
//     return sum;
// }

// console.log(sumOfDigit([2, 2, 3, 4])); // this works because this is in array but we don't want this in array we want without array

// method 2

// const sumOfDigit=(nums)=>{
//    let arr = Array.from(String (nums), Number);
// return arr.reduce((accum, curVal)=> accum=accum+curVal,0)

// }


// console.log(sumOfDigit(1234));

// this type of is number and we use reduce method in array so we have to convert this typeof from number to array first

// method 3 

// const sumOfDigit=(nums)=>{
//     let digits = 
//     let sum=0;
//     for(let i=0; i<nums.length; i++){
//          sum=sum+nums[i];
//     }
//     return sum;
// }

const sumOfDigit=(num)=>{
    let arry = num.toString().split("").map(Number);
    let sum=0;
    for(let i=0; i<arry.length; i++){
        sum=sum+arry[i];
    }
    return sum;
}


console.log(sumOfDigit(1234));