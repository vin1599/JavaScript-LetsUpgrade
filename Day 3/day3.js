function number(){
    let num1 = Number(prompt("To check the number is even or odd!!!!!"))
    if (num1 % 2 == 0){
        console.log(`The Number entered is ${num1} and Number is Even`)
    }
    else{
        console.log(`The Number entered is ${num1} and Number is Odd`)
    }
}

function version(){
    let ver = prompt("Enter your os")
    ver = ver.split(" ")
    console.log(`The OS name is ${ver[0]} and version is ${ver[1]}`)
}

function marks(){
    let mark = Number(prompt("Enter Your marks"))
    let grade = (mark >= 90) ? ` Marks are ${mark} and grade is A+`:
                (mark >= 80) ? ` Marks are ${mark} and grade is A`:
                (mark >= 70) ? ` Marks are ${mark} and grade is B+`:
                (mark >= 60) ? ` Marks are ${mark} and grade is B`:
                (mark >= 50) ? ` Marks are ${mark} and grade is C+`:
                (mark >= 35) ? ` Marks are ${mark} and grade is C`:` Marks are ${mark} and grade is Fail`
    console.log(grade)
}