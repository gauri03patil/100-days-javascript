const startWith = (str, subStr)=>{
   return  str.toLowerCase().slice(0, subStr.length) === subStr.toLowerCase();
}


// method 2 

// const startWith = (str, subSte)=>{
//     return str.toLowerCase().startWith(subSte.toLowerCase());
// }



console.log(startWith("Hello world", "hello"));
console.log(startWith("Hello world", "world"));
console.log(startWith("Welcome webosite", "welcome"));
