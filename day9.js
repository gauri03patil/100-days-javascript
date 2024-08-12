const calculateAveg=(arr)=>{
    let total=arr.reduce((accumVal, curVal)=> accumVal+curVal,0)
    return total/arr.length;
}





console.log(calculateAveg([5,10,13,2,9]));
console.log(calculateAveg([5,5]));