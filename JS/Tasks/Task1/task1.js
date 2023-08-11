let word = prompt("Kim olduqunuz deyin!")

switch(word){
    case "user":
        console.log("Xos geldin istifadeci");
        break;
    case "admin":
        console.log("Xos geldin cenab admin");
        break;
    case "guest":
        console.log("Xos geldin qonaq");
        break;
    default:
        console.log("Siz taninmadiniz!");
}