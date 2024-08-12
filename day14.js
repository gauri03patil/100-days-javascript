//Solution 1
const isPowerofTwo =(num)=>{
    let op=false;
    for(let i=1; i<num; i++){
        if(2**i === num){
            op=true
        }
    }
    return op;
}



//solution 2



console.log(isPowerofTwo(8));
console.log(isPowerofTwo(7));
console.log(isPowerofTwo(1));
console.log(isPowerofTwo(2));
