const removeDublicate = (arry)=>{
    return [...new Set(arry)];
}






console.log(removeDublicate([1,2,3,3,4,4,5]));
console.log(removeDublicate(["a","f","a","e"]));