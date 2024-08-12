const calculateAge =(birthdate)=>{
let todayDate=new Date();
birthdate = new Date(birthdate);


let age = todayDate.getFullYear() - birthdate.getFullYear();





}










console.log(calculateAge("1990-05-15"));
