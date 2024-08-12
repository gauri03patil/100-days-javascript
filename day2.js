// const genrateHash = (str)=>{
// if(str.length>280 || str.trim().length === 0){
// return false;
// }


// str = str.split(" ");
// // console.log(words);

// str = str.map((currElem)=>
//     currElem.replace(currElem[0], currElem[0].toUpperCase())
// );
// str = `#${str.join(" ")}`;
// console.log(str);
// return str;

// }


const genrateHash =(str)=>{
    let words = str.split(" ");

    let sentence = words.map((word)=>{
        // return word.charAt(0).toUpperCase() + word.slice(1);
        return word.replace(word[0], word[0].toUpperCase())
    })
    let result = sentence.join(" ");

    return result;
}

  



console.log(
    genrateHash("hello welcome to my website")
);


// convert first letter to uppercase 