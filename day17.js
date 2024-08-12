// const UpperCase = (char)=>{
//     if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
//         return true;
//     }else{
//         return false;
//     }
// }



// const lowerCase = (chhar)=>{
//     if(chhar.charCodeAt(0) >= 97 && chhar.charCodeAt(0) <= 122){
//         return true;
//     }else{
//         return false;
//     }
// }


// second method 

const UpperCase = (char)=>{
    if(char === char.toUpperCase()){
        return true;
    }else{
        return false;
    }
}


console.log(UpperCase("L"));

// console.log(lowerCase("j"));