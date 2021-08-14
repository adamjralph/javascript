// let random = Math.random();
// if (random < 0.5) {
//     console.log("Your number is less than 0.5")
//     console.log(random)
// }
// if (random > 0.5) {
//     console.log("Your number is greater than 0.5")
//     console.log(random)
// }

const password = prompt("Please enter a new paswword");

// Password must by 6+ characters

if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log("Valid passowrd!");
    } else {
        console.log("Password cannot contain spaces!")
    }
} else {
    console.log("Password too short. Must be 6+ characters");
}

