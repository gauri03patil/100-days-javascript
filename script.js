// const hello = document.getElementsByClassName("hello")
// const btn = document.getElementById("btn")

// btn.addEventListener("click", change(){
//     hello.style.backgroundColor = 'red';
// })

const checkStringLetter = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
        count++
    };
  }
  return count;
};

console.log(checkStringLetter("my name is gauri patil"));
