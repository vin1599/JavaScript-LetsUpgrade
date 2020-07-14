console.time("time taken by js file")
var name = "Vinayak";
var person1 = {
    name : "Vinayak",
    place : "Mumbai"
}
var person2 = {
    name : "Prasad",
    place : "Mumbai"
}
console.log("Hi ",name);
console.error("customize error")
console.warn("This is warning")
console.table({person1,person2})
console.timeEnd("time taken by js file")
console.clear()
