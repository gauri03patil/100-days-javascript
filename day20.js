// const reverseSting = (str)=>{
//     return str.split("").reverse().join("");
// }


// without using the method 

// const reverseSting = (str)=>{
//     let reversee = "";
//     for(let i=str.length-1; i>= 0; i--){
//         reversee= reversee + str[i];
//     }
//     return reversee;
// }



// console.log(reverseSting("hello"));




const reverseSting = (str)=>{
    let reversed = "";
    for(let i=str.length; i>0; i--){
        reversed = reversed + str[i]
    }
    return reversed;
}







console.log(reverseSting("hello"));