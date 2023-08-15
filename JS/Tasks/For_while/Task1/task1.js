let number = 37
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
    case count===1:
        balance+=1000
        console.log(balance)
        console.log(`${count} defeye tapdin, ELA!`)
        break;
    case count===2,3,4,5:
        balance+=750
        console.log(balance)
        console.log(`${count} defeye tapdin, Yaxsi!`)
        break;
    case count===6,7,8,9:
        balance+=250
        console.log(balance)
        console.log(`${count} defeye tapdin, Normal!`)
        break;
    case count===10:
        balance+=0
        console.log(balance)
        console.log(`${count} defeye tapdin, Kafi!`)
        break;
    default:
        balance-=250
        console.log(balance)
        console.log(`${count} defeye tapdin, Pis!`)
}