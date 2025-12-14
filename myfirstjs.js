let names = "Boluwatife"
let age = 23
let gender = "male"

console.log("My name is ", names , "and i am ", age, "years olds and i am", gender)

if (age < 18) {
    console.log("I am a minor")
} else {
    console.log("I am an adult")
}

for (let i = 0; i < 5; i++) {
    console.log("This is loop iteration number: ", i + 1)
}

function greet(name) {
    return "Hello, " + name + "!"
}

console.log(greet(names))

let hobbies = ["reading", "coding", "hiking"]
console.log("My hobbies are: ", hobbies.join(", "))

let person = {
    name: names,
    age: age,
    gender: gender
}

console.log("Person object: ", person)