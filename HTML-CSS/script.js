/*let name = "Keerthana";
var age = 19;
const height = "5.52"
console.log(name);
console.log(age);
console.log(height);
console.log(age + 5);
console.log(age-3);
console.log(age/2);
console.log(age*2);
console.log(age%4);
age+=3;
console.log(age);
age-=2;
console.log(age);
age/=3;
console.log(age);
age*=2;
console.log(age);
let age1 = "20";
console.log(age>age1);
console.log(age<age1);
console.log(age>=age1);
console.log(age<=age1);
console.log(age==age1);
console.log(age===age1);*/
/*let food = "Ghee";
let break_fast = "Dosa";
let food2 = "Idly";
let food3 = "Vada";
let food4 = "Pongal";
let food5 = "Utappam";
if (food == break_fast) {
    console.log("It's nice to have Ghee Dosa in the morning!")
}
else if(food2==break_fast)
{
    console.log("It's nice to have Idly in the morning!");
}*/
/*for(let i=1;i<=10;i++){
    for(let j=1;j<=10;j++){
        console.log("2 X "+i+" = "+(2*i));
    }
}*/
/*function cook()
{
    console.log("Pour the batter in tawa");
    console.log("Rub it in round order");
    console.log("spill oil above it and wait");
    console.log("twist it with dosa gareta");
    console.log("Atlast gently serve it in a plate");
}
for(let i=1;i<=5;i++){
    cook();
}*/
/*function dishwash(vessels){
    console.log("We have to wash")
}*/
/*function guess(n){
    let guess = Number(prompt("Enter a Number:"))
    if(n==guess){
        console.log("you guessed it right")
    }
    else if(n>guess){
        console.log("Try a small number.")
        guess(n);
    }
    else{
        console.log("try a big number.");
        guess(n);
    }
}
let number=Math.floor(Math.random()*100)+1;
guess(number);*/
/*function num(n)
{
    if(n>10){
        return;
    }
    console.log(n);
    n+=1;
    num(n);
}
num(1);*/
/*function guess(n) {
    let userGuess = Number(prompt("Enter a number:"));

    if (userGuess == n) {
        console.log("Congratulations! You guessed the number.");
    } else if (userGuess < n) {
        console.log("Too low! Try again.");
        guess(n);
    } else {
        console.log("Too high! Try again.");
        guess(n);
    }
}

let number = Math.floor(Math.random() * 100) + 1;
guess(number);
*/
let icecreams=["Chocolate","Vanilla","Pista","Butterscotch","Strawberry"];
let sales={
    keerthana:icecreams[0],
    Swetha:icecreams[1],
    keethana:icecreams[2],
    siddi:icecreams[3],
    varshi:icecreams[4]
};
console.log(sales)