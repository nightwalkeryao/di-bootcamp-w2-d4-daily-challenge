/**
 * @author Yao Kan KOUASSI
 * @description DI Bootcamp Daily challenge: Words in the stars - W2-D4
 * @date 30 dec. 2022
 */

// Daily challenge: Words in the stars

// 1. Prompt the user for several words (separated by commas).
let input = prompt('Please enter several words separated by commas: ')
// 2. Put the words into an array.
let words = input.split(',').map(w => w.trim())
// 3. Console.log the words one per line, in a rectangular frame as seen below.
let longestWord = words[0]
for (let i = 0; i < words.length; i++) {
    if(longestWord.length < words[i].length)
        longestWord = words[i]
}
console.log("*".repeat(longestWord.length + 4))
words.forEach(w => console.log(`* ${w}${" ".repeat(longestWord.length - w.length)} *`));
console.log("*".repeat(longestWord.length + 4))