// Write your code below this line.
// initial commit


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let randomLuckyNumber = num => {
    let randomNumber = []
    for (let i = 0; i < num; i++) {
        randomNumber.push(Math.floor(Math.random() * 11));
     } 
     return randomNumber
 }
console.log(randomLuckyNumber(6))


