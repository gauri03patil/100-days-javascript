const arraysAreEqual=(num1, num2)=>{
   if(num1.length !== num2.length){
    return false;
   }
   return num1.every((cuVal, index)=>cuVal===num2[index])
}







console.log(arraysAreEqual([1,2,3],[1,2,3]));
console.log(arraysAreEqual([1,2,5],[1,2,3]));
console.log(arraysAreEqual([],[]));
console.log(arraysAreEqual([1,2.5,3],[1,2,3]));
