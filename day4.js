const checkTriangelType = (side1,side2,side3)=>{
    if(side1 === side2 && side2===side3)
        return "equal trang"
    if(side1===side2 || side2===side3||side1===side3)
        return "isolate"
    return "scale"

}







console.log(checkTriangelType(3,3,3));
console.log(checkTriangelType(3,4,3));
console.log(checkTriangelType(5,8,6));