// A: daha da yaxsi ede bilersen
let number = Math.floor(Math.random() * 50)
let user = +prompt("Ededi daxil edin!")
let count = 1
let balance = 0

while(number !== user){
    count++
    if(user>number){
        user = +prompt("Daha asagi eded daxil edin!")
    }
    else{
        user = +prompt("Daha yuxari ededi daxil edin!")
    }
}
switch(count){
    case 1:
        balance+=1000
        console.log(balance)
        console.log(`${count} defeye tapdin, ELA!`)
        break;
    case 2:
    case 3:
    case 4:
    case 5:
        balance+=750
        console.log(balance)
        console.log(`${count} defeye tapdin, Yaxsi!`)
        break;
    case 6:
    case 7:
    case 8:
    case 9:
        balance+=250
        console.log(balance)
        console.log(`${count} defeye tapdin, Normal!`)
        break;
    case 10:
        balance+=0
        console.log(balance)
        console.log(`${count} defeye tapdin, Kafi!`)
        break;
    default:
        balance-=250
        console.log(balance)
        console.log(`${count} defeye tapdin, Pis!`)
}
