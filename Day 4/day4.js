function fizzbuzz(){
    for (let i = 1;i <100;i++){
        if (i % 3 ==0){
            console.log(`loop is ${i} and it print fizz`)
        }
        if (i % 5 ==0){
            console.log(`loop is ${i} and it print buzz`)
        }
        if (i % 3 ==0 && i % 5 ==0){
            console.log(`loop is ${i} and it print fizzbuzz`)
        }
    }
}
const student = {
    name:"vinayak",
    age:20,
    projects:{
        name:"xyz"
    }
}
const {name,age,projects} = student;
console.log(name,age,projects)

let shopping_list = ['fruits','vegetable','bread','shirt']
let shopping_basket = ["milk",...shopping_list]
// let shopping_basket = shopping_list.slice().concat(["milk","jeans"])
console.log(shopping_list,shopping_basket);



function multiplyBy(){
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy(){ 
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 / num2;
}
function add(){
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 + num2;
}
function subtract(){
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 - num2;
}
function sqroot(){
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = `${Math.sqrt(num1)} and ${Math.sqrt(num2)}`;
}
function percentage(){
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML =100 * num1 / num2;
}

function reward(){
    console.clear();
    let sale = Number(prompt("whats your sale?"));
    let reward = (sale >=0) ? `${sale * 0.02}`:
                (sale >5000) ? `${sale * 0.05}`:
                (sale >10000) ? `${sale * 0.07}`:
                (sale > 20000) ? `${sale * 0.1}`: "please enter positive number"
    console.log(reward)
}

function visitor(){
    let num = Number(prompt("Enter no:"))
    // while (num >= 100 || num ==""){
    //     Number(prompt("Enter no:"))
    // }
    
}

function prime()
{
    var i,flag=0,number;
    number = Number(prompt("Enter No."));

    for(i=2; i <= number/2; i++)
    {
        if(number%i == 0)
        {
            flag = 1;
            break;
        }
    }
    if(flag == 0)
    {
        window.alert(number+"-The inputed number is Prime");
    }
    else
    {
        window.alert(number+"-The inputted number is not Prime");
    }
}

Let ask = (question, yes, no) => { if(confirm(question))yes()
    else no();
    }
    Ask("do you agree? ", 
    Yes=>{alert("You agreed") }, 
    No=>{alert(" You cancelled the execution") ;}
    ) ;