const isPalindrone=(stringss)=>{
   stringss = stringss.toLowerCase().replace(/\W/g, "");
   let rev_str = stringss.split("").reverse().join("");
   console.log(rev_str);
   return stringss === rev_str? true: false;
}






console.log(isPalindrone("racecar"));
console.log(isPalindrone("hello"));
console.log(isPalindrone("isi"));
// console.log(isPalindrone("gauruar"));



// check weather the string is Palindrome  or not 