function prompt1(){
    let age = prompt("Whats Your Name: ")
    console.log(`My Name is ${age}`)
}


let str1 = "    Hello guys";
console.log(str1);
console.log(str1.trim());
let str2 = "dont replace me";
console.log(str2);
console.log(str2.replace("dont","plz"));
let str3 = "hello guys, Nice too meet you!!"
console.log(str3);
console.log(str3.search("Nice"))
let a = "vinayak,Rohan,Prasad";
console.log(a);
console.log(a.substr(8));
let arr1 = ["hello","I","am","Vinayak"]
console.log(arr1);
console.log(arr1.toString());
let arr2 = ["JS","is","Powerfull"]
console.log(arr2);
console.log(arr2.join(" "))
function age(){
    let age = parseInt(prompt("whats your age???"));
    if (age > 21) {
        console.log("You are eligible to Drink")
      } else {
        console.log("You are not eligible to Drink")
      }

}