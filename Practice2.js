// 1: // here there are two different output because of var and let and due to setTimeout  var has global function and till settime it print 3 times 3
// and let has block scope it will work only inside function so the output is 0,1,2

// for (var i=0; i<3; i++){
//     setTimeout(()=> console.log(i),1);
// }

// for (let i=0; i<3; i++){
//     setTimeout(()=> console.log(i),1);
// }

// 2
// let warn = (+ true);
// console.log(warn);       //1
// console.log(typeof +warn);     //number


// let check = (!"gauri");
// console.log(check);
// console.log(typeof("anil"));

// 3
// let data = "size";
// const bird = {
//     size: "small"
// };

// console.log(bird[data]);    
// console.log(bird["size"]);
// console.log(bird.size);    
// console.log(bird.data);  

// 4

// let c= {name:"peter"};
// let d;

// d=c;
// c.name = "anil";
// console.log(d.name);

// 5 
// var x;
// var x=10;
// console.log(x);

// var x;
// let x =10;
// console.log(x);

// 6 
// let a = 3;
// let b = new Number(3);
// console.log(a == b);    
// console.log(a === b);

// 7
// let name;
// naem= {}  //typo
// console.log(name);

//8 
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(1,"2"));

//9
// let numbers = 0;
// console.log(numbers++);
// console.log(++numbers);
// console.log(numbers);

// 10

// function getAge (...args){
//     console.log(typeof args);
// }

// getAge(21);

// 11
// const sum = eval ("10*10+5");
// console.log(sum);





