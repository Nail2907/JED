// let browser = prompt("Sizin brauzeriniz: ");

// if (browser == "Edge") {
//     alert("You have got");
// }
// else if (browser == "Chrome", "Firefox") {
//     alert("Okay we support these browsers too");
// }
// else{
//     alert("We hope that this page looks ok!");
// }


// let a = +prompt("1-ci eded");
// let b = +prompt("2-ci eded");
// operator = prompt("operatoru daxil edin");

// switch(operator){
//     case "+":
//         alert(a+b);
//         break;
//     case "-":
//         alert(a-b);
//         break;
//     case "*":
//         alert(a*b);
//         break;
//     case "/":
//         alert(a/b);
//         break;
// }



// let begin = prompt("Who is there?")

// switch(begin){
//     case null:
//         alert("Canceled");
//         break;
//     default:
//         alert("I dont know uu");
//         break;
//     case "Admin":
//         let pass = prompt("Password?");
//         if(pass == null){
//             alert("Canceled");
//         }
//         else if(pass == "TheMaster"){
//             alert("Welcome!")
//         }
//         else{
//             alert("Wrong password")
//         }
//         break;
// }

let a = 0

for(let i=1; i<=100; i++){
    if(i%2===1){
        console.log(i)
        a += i
    }
}
console.log(a)