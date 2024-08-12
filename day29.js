// method 1 with for loop  and then push in an array 


// const numberRange = (num1,num2)=>{
//     let convertToArry = [];
//     for(let i=num1; i<=num2; i++){
//         // console.log(i);
//         convertToArry.push(i);
//     }
//     return convertToArry;
// }


// method 2 with while loop 

const numberRange = (num1,num2) => 
    {
    convertArray=[];
    while(num1<=num2){
        convertArray.push(num1);
        num1++;
    }
    return convertArray;
}



console.log(numberRange(2,10));
console.log(numberRange(-3,5));