// const reverseSreing = ((str)=>{

//     return str.split("").reverse().join("")
// })
// console.log(reverseSreing("hello"));

// const largestNumber = ((Arrayys)=>{
//     return Math.max(...Arrayys)
// })

// console.log(largestNumber([2,3,4,56,78,7,9,12]));

// const minNumber = (str)=>{
//     return Math.min(...str)
// }

// console.log(minNumber([3,-2,-4,-6,77]));
// console.log(minNumber([5,-3,0,12,-7]));
// console.log(minNumber([]));

// const camelCase = (str)=>{
//   let words = str.splite(/[\s-_]+/)
// //   console.log(words);
// return words
// }

// console.log(camelCase("hello world thapa"));

// const removeDuplicate = (arry)=>{
//     return [...new Set(arry)]
// }

// const removeDuplicate = (ary)=>{
//     return [...new Set(ary)]
// }

// console.log(removeDuplicate(["a","d","a","d","q","e"]));

// const sumArray = (ary)=>{
//     return ary.map((cur)=>{
//      return cur + cur
//     })
// }

// const sumArray = (ary)=>{
//     return ary.reduce((curVal, acum)=>{
//         return curVal + acum
//     },0)
// }

// console.log(sumArray([1, 2, 3, 4, 5])); // 15

// const evenNumber = (arrys)=>{
//     arrys.filter((val)=>{
//         if(val % 2=== 0){
//             return true;
//         }else{
//             return false
//         }
//     })
// }

// const evenNumber = (arryss)=>{
//     return arryss.filter((valCur)=>{
//         return valCur % 2 === 0
//     })
// }

// const evenNumber = (myNum)=>{
//     return myNum.filter((curVal)=>{
//         return curVal % 4 === 0
//     })
// }

// console.log(evenNumber([2,6,4,3,2,77,44,42,24,55,62]));

// const vowelsAlpha = (valuess)=>{
//     const vowelsAllowed = ["a", "e", "i", "o", "u"]
//     return valuess.filter((valCur)=>{
//         return vowelsAllowed.includes(valCur.toLowerCase());
//     })
// }

// console.log(vowelsAlpha(["e","r","o", "z","u","w", "A"]));

// const findLargest = (arryy)=>{
//     return arryy.map((val)=>{
//         if(val)
//     })
// }

// console.log(findLargest([3, 7, 2, 8, 1,1,2,4,5,78,9,3,4,5,6,7,9]))

// const palindrome = (str)=>{
//     return str.split("").reverse().join("");
// }

// const palindrome = (str)=>{
//     if(str.toLowerCase() === str.split("").reverse().join("")){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(palindrome("madam"));

// console.log(palindrome("gauri"));
// console.log(palindrome("deified"));
// console.log(palindrome("radar"));
// console.log(palindrome("naresh"));

// let str = "helllo"

// const myHello = (str)=>{
//     return str.split("").reverse().join("");
// }

// console.log(myHello(str));

// const evenNumber = (num)=>{
//     return num.filter((curVal)=>{
//         return curVal % 2 === 0;
//     })
// }

// console.log(evenNumber([2,4,7,6,9,9,2,1,12,11,34,44,32]));

// const primeNumber = (num)=>{
//     if(num <= 1){
//         return false
//     }else{
//         for(let i=2; i>)
//     }
// }

// console.log((primeNumber([2,4,7,6,9,9,2,1,12,11,34,44,32])));

// let numvers = [1,2,3]

// numvers[10] = 11;
// console.log(numvers);

// let arr = ["hello", "world","java","hello","java"]

// const countWorls = (p)=>{
//     let result = p.reduce((allName, name)=>{
//         if(name in allName){
//             allName[]
//         }
//     })
// }

// console.log(countWorls(arr));

// const capitalizeWords = (str)=>{
//     // return str.char(0).toUpperCase();
//     // return str.split(" ").charAt(0).toUpperCase();
//     return str.split("").map((word)=>{
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(" ")
// }

// console.log(capitalizeWords("hello world")); // Output: "Hello World"

// const capitalizeWords = (str) => {
//     return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// };

// console.log(capitalizeWords("hello world")); // Output: "Hello World"

// const SpecificString = (str, count)=>{
//     if(str.length<count){
//         return "empty"
//     }
//     return str.slice(0, count)
// }

// console.log(SpecificString("welcome to my website", 5));
// console.log(SpecificString("", 5));
// console.log(SpecificString("welcome to my website", 10));

// const numberRange = (num1, num2)=>{
//     let aaaary = [];
//     for(let i=num1; i <= num2; i++){
//         // console.log(num1[i]);
//         // console.log(i);
//         aaaary.push(i);
//     }
//     return aaaary;
// }

// console.log(numberRange(2,10));
// console.log(numberRange(-3,5));

// const numberRange = (num1, num2)=>{

// }

// console.log(numberRange(2,10));

// const sumOfArray = (num)=>{
//    return  num.reduce((arry, accum)=>{
//         return  arry = arry + accum;
//     },0)
// }

// console.log(sumOfArray([2,2,2,2,2]));

// const reverseString = (str)=>{
//     return str.split("").reverse().join("");
// }

// console.log(reverseString("hello"));

// function findLongestWord(str) {
//     // Split the string into words using space as the delimiter
//     const words = str.split(' ');

//     // Initialize a variable to keep track of the longest word
//     let longestWord = '';

//     // Iterate through the words array
//     for (let word of words) {
//         // If the current word is longer than the longest word found so far
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }

//     // Return the longest word
//     return longestWord;
// }

// const findLongestWord = (str)=>{
//     const words = str.split(" ");

//     let longestWord = "";

//     for(let word of words){
//         if(word.length > longestWord.length){
//             longestWord = word;
//         }

//     }
//     return longestWord;
// }

// const findLongestWord = (str)=>{
//     const words = str.split(" ");
//     let longetWord = "";

//     for(let word of words){
//         if(words.length > longetWord.length){
//             longetWord = word;
//         }
//     }
//     return longetWord;
// }

// console.log(findLongestWord("hello my name is Gauri Patil and i am from maharashtra hehehehehehhehehehehhe"));

// const cars = ["BMW", "Volvo", "Mini"];
//  let text="";

//  for(let x of cars){
//     // console.log(x);
//     text = text + x + " ";
//  }
// //  return text;

// console.log(text.trim());

// let language = "javascript";

// let result= "";

// for(let x of language){
//     // console.log(x);
//     result += x +  "\n";
// }

// console.log(result);

// const genrateHash = (str)=>{
//     // return str.toUpperCase();
//     // return str.split(" ").charAt(0).toUpperCase();
//     // return str.charAt(0).toUpperCase() + str.slice(1);
//     let words = str.split(" ");

//     let upperCase = words.map((word)=>{
//         // return word.replace(word[0],word[0].toUpperCase())
//         // return word[0].toUpperCase();
//         return word.replace(word[0], word[0].toUpperCase());
//     })
//     let result = upperCase.join(" ");
//     return result;
// }

// console.log(genrateHash("hello welcome to my website"));

// const genrateHash =(str)=>{
//     let words = str.split(" ");

//     let sentence = words.map((word)=>{
//         // return word.charAt(0).toUpperCase() + word.slice(1);
//         return word.replace(word[0], word[0].toUpperCase())
//     })
//     let result = sentence.join(" ");

//     return result;
// }

// const genrateHash = (str)=>{
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// console.log(genrateHash("hello"));

// const removeDuplicates = (arry)=>{
//     // return [new Set(...arry)];
//     return [...new Set(arry)];
// }

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// const countCharacters = (str)=>{
//     let dataa = {};
//     for(let x of str){
//         dataa = x;
//     }
//     return dataa;
// }

// const countCharacters = (str)=>{
//     return str.map((data, index)=>{
//         return data ;
//     })
// }

// const countCharacters = (str)=>{
//     return str.split("").reduce((acc, arry, index)=>{
//         acc[arry] = index;
//         return acc;
//     }, {})
// }

// console.log(countCharacters("hello")); // { h:0, e:1, l:2, l:3, o:4}

// const countCharacters = (str) => {
//     return str.split('').reduce((acc, char, index) => {
//         acc[char] = index;
//         return acc;
//     }, {});
// }

// console.log(countCharacters("hello")); // { h: 0, e: 1, l: 3, o: 4

// const numberRange = (num1,num2)=>{
//     let result = [];
//     for(let i=num1; i < num2; i++){
//         // console.log(i);
//         result.push(i);
//     }
//     return result;
// }

// console.log(numberRange(2,10));

// const numberRange = (num1,num2)=>{
//     let convertToArry = [];
//     for(let i=num1; i<=num2; i++){
//         // console.log(i);
//         convertToArry.push(i);
//     }
//     return convertToArry;
// }

// const isPalindrome = (str)=>{
//     return str.split(" ").reverse() === str ;
// }

// const isPalindrome = (str) => {
//     const myData = str.replaceAll(" ", "").toLowerCase();
// //    console.log(myData);
// //   console.log(str.split("").reverse().join("").toLowerCase());
//   if (myData.split("").reverse().join("") === myData) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("rcecar"));
// console.log(isPalindrome("A man a plan a canal Panama"));


// const findLargest = (num)=>{
//     let data = Math.max(...num);
//     console.log(data);
// }


// console.log(findLargest([1, 2, 3, 4, 5])); 


// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 


// const evenNumberOnly = (arryy)=>{
 
//    return arryy.filter((val)=>{
//     return val % 2 === 0;
//    })
// }

// console.log(evenNumberOnly([2,3,4,5,6,3,56,76,89,22,24,26]));

// const captitalizedString = (strinn)=>{
//     return strinn.split(" ").map((curVal)=>{
//         return curVal.charAt(0).toUpperCase() + curVal.slice(1);
//     })

// }

// console.log(captitalizedString("hey my name is gauri patil i am from mumbai"));


// let day = new Date();
// let today = day.getDay();
// console.log(today);

// // console.log(new Date());

// var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// console.log(`today is ${daylist[2]}`);

// let hour = getDay();
// log

// let day = new Date();
// console.log(day);

// let hour = day.getHours();
// let min = day.getMinutes();
// console.log(min);
// console.log(hour);


// let check = (hour >= 12) ? "PM" : "AM";
// console.log(check);

// for(let i=0; i<3; i++){
//     setTimeout(()=>{
//         console.log(i);
//     },900)
// }


// const arrNumber = [2,34,4,2,1,3,4,33,33,11,9];
// const dublicateArry = ((arrNumber)=>{
//    return arrNumber.filter((ele,index,arry)=>{
//     return arry.indexOf(ele);
//    })
// })

// console.log(dublicateArry(arrNumber));

// const arrNumber = [2, 34, 4, 2, 1, 3, 4, 33, 33, 11, 9];
// const duplicateArray = (arrNumber) => {
//     return arrNumber.filter((ele, index, arry) => {
//         return arry.indexOf(ele) !== index;
//     });
// }

// console.log(duplicateArray(arrNumber));


// const factorial = (num)=>{
//    let sum = 1;
//    for(let i=1; i<= num; i++){
//        sum = sum * i;
//    }
//    return sum;
// }


// console.log(factorial(5));
// console.log(factorial(6));
// console.log(factorial(10));


// const primeNumber = (num)=>{
//    if(num<=1){
//       return "false"
//    }
//    if(num === 2){
//       return true;
//    }
//    if(num % 2 === 0){
//       return false;
//    }
//    if(num % 3 === 0){
//       return true;
//    }
// }

// const primeNumber = (num)=>{
//    if(num<=1){
//       return false;
//    }
//    for(let i =2; i< num; i++){
//       if(num % i === 0){
//          return false;
//       }
//    }
//    return true;
// }


// console.log(primeNumber(7));
// console.log(primeNumber(30));
// console.log(primeNumber(12));


// const calculateMonthsBetweenDates = (d1,d2)=>{
//    let date1 = new Date(d1);
//    let date2 = new Date(d2);

//    let totalDate = Math.abs(date1-date2);

//    let diffDate = totalDate / (24*60*60*1000*7*2)
// }


// console.log(calculateMonthsBetweenDates("2024-01-01", "2024-07-01")); // Output: 6
