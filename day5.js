// write a function to sort  an array in an ascending order 

const sortAscending =(arr)=>{
    // return arr.sort((a,b)=> a-b);
    return arr.sort((a,b)=> b-a)
}




console.log(sortAscending([5,6,7,9,2]));