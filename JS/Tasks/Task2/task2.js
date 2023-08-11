let number = +prompt("Istediyiniz ededi daxil edin!")

// switch(number){
//     case (number%3===0):
//         console.log("Fizz")
//         break;
//     case (number%5===0):
//         console.log("Buzz");
//         break;
//     case (number%3===0) & (number%5===0):
//         console.log("FizzBuzz")
//         break;
//     default:
//         console.log("Bele bir eded yoxdur!")
// }

if(number%3==0){
    console.log("Fizz")
}
else if(number%5==0){
    console.log("Buzz");
}
else if(number%3==0 && number%5==0){
    console.log("FizzBuzz")
}
else{
    console.log("Bele bir eded yoxdur!");
}