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

// Part 2: Prime Time
// Now we will move onto something slightly more complex.
// Context: A prime number is any whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1. For example, the number 5 is prime because it cannot be divided by 4, 3, or 2; it can only be divided by itself (5) and 1. Similarly, the numbers 7 and 11 are prime. As numbers become larger, determining whether or not they are prime is increasingly difficult, but loops make this process relatively easy!
// Write a script that accomplishes the following:
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.
// Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.
// Be careful! If you set n to a number too large, your loop could take a long time to process.
