const loggedInUser = {
    name: "Max",
    age: 32,
    isAdmin: true,
};

for (const key in loggedInUser) {
    console.log(key);
    console.log(loggedInUser[key]);
}

let isFinished = false;

// while (!isFinished) {
//     isFinished = confirm("Do you want to quit?");
// }

console.log("Done!");
