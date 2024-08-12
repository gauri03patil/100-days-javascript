// const isEmptyObhect = (obj)=>{
//     // return Object.keys(obj).length === 0 ;

//     if(Object.keys(obj).length === 0){
//         return "it is empty";
//     }

//     return "it is not empty";
// }

// methof 2

// const isEmptyObhect  = (obj)=>{
//     for(let key in obj){
//         if(obj.hasOwnProperty(key)){
//             return "it is not empty"
//         }
//     }
//     return "it is empty"
// }


// method 3 

// const isEmptyObhect = (obj)=>{
//     return Object.keys(obj).length ===0 ? "it is empty" : "it is not empty";
// }





console.log(isEmptyObhect ({name: "gauri"}));
console.log(isEmptyObhect ({}));
console.log(isEmptyObhect ({keyWithNull: null}));
console.log(isEmptyObhect ({keyWithUndefined: undefined}));



// const fruits = ["Apple", "Banana", "Watermelon", "Orange"];

// // fruits.hasOwnProperty(5);
// console.log(fruits.hasOwnProperty(5));
// console.log(fruits.hasOwnProperty(0));
// console.log(fruits.hasOwnProperty(2));