// const repeateString = (str,num)=>{
//     // return str.repeat(num);


//     // if(str === ""){
//     //     return false;
//     // }
//     // return str.repeat(num);

//     return num > 0 ? str.repeat(num): str;
// }

// method 2 

const repeateString = (str, num)=>{
    if(num <= 0){
        return "";
    }
    let result = "";
    for(let i=0; i<num; i++ ){
        result = result + str;
    }
    return result;
}




console.log(repeateString("gauri", 5));
console.log(repeateString("gauri", 10));
console.log(repeateString("gauri", 0));
console.log(repeateString("", 2));