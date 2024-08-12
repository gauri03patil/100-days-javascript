const findLongestWord = (str)=>{
if(str.trim().length === 0){
    return false;
}

words = str.split(" ");
// console.log(words);
words = words.sort((a,b)=> b.length - a.length);
console.log(words);
// return words.at(-1)
return words[0]

}


// method second 
// const findLongestWord =(str)=>{
//     let data = str.split(" ");
    
//     let longestSentence= "";

//     for(let char of data){
//         if(char.length > longestSentence.length){
//             longestSentence = char
//         }
//     }
//     return longestSentence;
// }


console.log(findLongestWord("hello my name is Gauri Patil and i am from maharashtra hehehehehehhehehehehhe"));



// to check which is the longest word in this sentence