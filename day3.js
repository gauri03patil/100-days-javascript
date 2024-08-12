// question: weather in the given word below whether the particular letter is involved how many times 


// const countChar = (word,char)=>{
//     word = word.toLowerCase();
//     char = char.toLowerCase();


//     totalCount = word.split("").reduce((accum, curVal)=>{
//         if(curVal === char){
//             accum++;
//         }
//         return accum;

//     }, 0);
//     return totalCount;
// }

// console.log(countChar("Missingings", "I"));




// METHOD 2 

// const countChar = (word,char)=>{
//     return word.split(char).length-1;

// }

// console.log(countChar("datascienceaaswaaa", "a")); // Output: 2a