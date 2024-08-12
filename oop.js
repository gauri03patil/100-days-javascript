// class hello{
//     message(){
//         console.log("hello everyone");
//     }
//     sorry(){
//         console.log("sorry everyone");
//     }
// }

// let a = new hello();

// a.message();
// a.sorry();


// class student{
//     constructor(){
//         let name;
//         console.log("this is constructor");
//     }
//     hello(){
//         console.log("helllo" + this.name);
//     }

// }

// let a = new student();
// a.name = "gauri patil";
// a.hello();


// class student{
//     constructor(name, age){
//         this.studentName = name;
//         this.studentAge = age;
//         console.log("this is constructor");
//     };
//     hello(){
//         console.log("HELLO " + this.studentName + "age is " + this.studentAge);
//     }
//     static staticMethod(){
//         console.log("static method");
//     }

// }

// let a = new student("heyy gauri patil", 67);
// let b = new student("sunil kumarr", 37);


// a.hello();
// student.staticMethod();
// b.hello();

class railwayForm{
    submit(){
        console.log( this.name + this.num +  " : form submitted");
    }
    cancelled(){
        console.log(this.name +  this.num + ": form cancelled");
    }
    fill(givename, givenNumber){
        this.name = givename;
        this.num = givenNumber;
    }
}

let gauri = new railwayForm();
gauri.fill("patil gauri", 1234);
let harry = new railwayForm();
harry.fill("harry potter", 43245)

gauri.submit();
harry.submit();
gauri.cancelled();