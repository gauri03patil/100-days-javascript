const numberRange = (num1, num2, arry =[])=>{

    if(num1<=num2){
        arry.push(num1);
        return numberRange (num1+1, num2, arry)
    }
    return arry;
}





console.log(numberRange(2,10));
console.log(numberRange(-3,5));


// recursive 