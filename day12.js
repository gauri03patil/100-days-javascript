const removeDuplicate=(num)=>{
    let arry =[...new Set(num)];
    return arry;
}




console.log(removeDuplicate([1,2,4.3,3,2,12,2,1,5,7,43,3,4.3]));