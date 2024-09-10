// FIZZ BUZZ

// To begin, solve the following classic “Fizz Buzz” problem. There are a few different ways to do this - experiment with what you think is the most efficient. Once you have solved the problem, ask yourself if there could be another way; and if so, would it be better.
// Accomplish the following:
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

// Created the for loop that console.log's FIZZBUZZ statment
for (let i = 1; i <= 100; i++) {
  //started from 1 but maxed to 100 with increments
  if (i % 3 === 0 && i % 5 === 0) {
    // making 3 with it's divison and 5 to say FizzBuzz with it's divison
    console.log("FizzBuzz"); //will be the final statement in the node console
  } else if (i % 3 === 0) {
    // secluded the 3 to only print fizz once its divisable by 3
    console.log("Fizz");
  } else if (i % 5 === 0) {
    // secluded the 5 to only print buzz once its diviable by 5
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
