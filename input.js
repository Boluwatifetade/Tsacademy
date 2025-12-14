// Accepting inputs from users and manipulating inputs
// importing modules responsible for accepting inputs
const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

/* rl.question("Enter Your Name : ", (name)=> {
    console.log(`Hello ${name} how are you doing today?`);

    rl.close();
})


rl.question("Enter a num: ", (num)=> {
    console.log(`Hello your number is: ${num}`);

    rl.close();
}) */

/* rl.question(`Give me a number : `, (num1) => {
    rl.question(`Give me a second number : `, (num2) => {
        const result = parseInt(num1) + parseInt(num2);

    console.log(`Addition of Both is : ${result}`);

    rl.close();
    });
}); */


