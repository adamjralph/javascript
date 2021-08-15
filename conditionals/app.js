// let random = Math.random();
// if (random < 0.5) {
//     console.log("Your number is less than 0.5")
//     console.log(random)
// }
// if (random > 0.5) {
//     console.log("Your number is greater than 0.5")
//     console.log(random)
// }

// const password = prompt("Please enter a new paswword");

// Password must by 6+ characters

// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) {
//         console.log("Valid passowrd!");
//     } else {
//         console.log("Password cannot contain spaces!")
//     }
// } else {
//     console.log("Password too short. Must be 6+ characters");
// }

// const password = prompt("Enter your password");
// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log("Valid password")
// } else {
//     console.log("Incorrect format for password!")
// }

////////////////////
// 0-5 free
// 5-10 $10
// 10-65 $20
// 65+ free

const age = -1;
if(age >= 0 && age < 5 || age >= 65){
    console.log("Free");
} else if (age >= 5 && age < 10) {
    console.log("$10");
} else if (age >= 10 && age < 65){
    console.log("$20");
} else {
    console.log("Invalid age")
}