const obj = {
    name: "gauri patil",
    age: 56,
    city: "Mumbai",
};

const data = Object.entries(obj);
console.log(data);
console.log(data.flat());

let newData = Object.fromEntries(data);
console.log(newData);


