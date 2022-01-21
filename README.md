# Sprint Challenge - JavaScript Fundamentals

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in project. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied array methods, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a range of JavaScript problems.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. 

## Introduction

The index.js file contains all of your challenges. Please review it in full before answering the questions. If you complete the stretch goals please leave them in your file but commented out so that they do not affect the MVP tasks 

In meeting the minimum viable product (MVP) specifications listed below, you should have all tests passing. You can console.log to check your work and ensure you are submitting the correct results 

### Commits

Set up codegrade early and commit your code regularly and meaningfully. 

## Interview Questions
### (please edit this file and write your answer below each question.)
Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read.

1. Explain the differences between `.map`, `.reduce` and `.filter` and describe a use case for each. 

`.map`, `.reduce`, and `.filter` are array methods built into javascript which use callback functions.

`.map` takes the items from the given array and applies a callback function to them and then returns a new array of the resulting items.
This is useful when converting data in an array. For example, you would use `.map` if you had a list of decimal numbers that you would like to convert to integers.

`.reduce` takes two arguments, a running total and the items being processed. There is also an optional initial value. 
The reduce method goes through the array of items in order, applying the callback function to the current item being processed and redefining the running total to the result, which when all the items are finished processing is returned as a single value.
This method is usually used when multiplying or adding up a list of numbers. For example, if you had a list of cities with their populations and you would like the total population of all the cities you would use `.reduce`.

`.filter` takes the items and with a callback function checks if they are true or false. Items that are true are returned in a new array.
This method is used when filtering out items from an array but no manipulation of the values is necessary. For example, if you had a list of animals and their habitats but needed to know which of those animals belonged to a specific habitat you would use `.filter`.

2. Explain the difference between a callback and a higher order function.

A callback is a function that is passed into another function as an argument.
A higher order function is a function that receives other functions as an argument or returns a function as the result.

3. Explain what a closure is.

A closure happens when a function written inside of another function reaches into the outer function to access a piece of information defined there. 

4. Describe the four principles of the 'this' keyword.

  1. Window Binding - If there is no context to 'this' then it defaults to the global object in node or undefined in strict mode.
  2. Implicit Binding - When a there is a method call, the thing before the dot is what 'this' will refer to.
  3. New Binding - When using a constructor function, we use 'new' keyword to create an object with it. The new object is 'this'.
  4. Explicit Binding - To explicitly define 'this', you can use the functions .call, .apply, or .bind 

5. Why do we need super() in an extended class?

super() tells the extended class what to inherit from the parent class.



You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade. 

## Instructions

### Task 1: Set up Project

Using VSCode and Command Line:


1. Fork the repo
2. Go into canvas and connect your reop to codegrade
3. Clone your forked version of the repo
4. DO NOT CREATE A BRANCH. You will be pushing your changes to the main/master today
5. cd into your repo
6. open the terminal in your vs code and type `npm install`
7. next type `npm run test` in your terminal
8. Complete your work making regular commits to main/ master your codegrade score will update each time you make a push.


### Testing & Debugging

Open a second terminal inside of your project by clicking on the split terminal icon
![alt text](assets/split_terminal.png "Split Terminal")

Inside of your second terminal type `npm start` 
![alt text](assets/npm_start.png "type npm start")

You will be running your tests in one terminal and debugging in the other. As you work on your code you should make use of `console.log` to check your progress and debug.
![alt text](assets/tests_debug_terminal_final.png "your terminal should look like this")

### Task 2: Project Requirements (MVP)

You must complete all tasks inside of `index.js` and answer the questions above.

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Resources
 
 [Sprint Challenge Study Guide](https://www.notion.so/bloomtech/Unit-1-Sprint-3-Study-Guide-033a9a00659a4ef98c12eb97e49a6110)

## Submission format

Please submit your project via codegrade by following [these instructions](https://notion.so.bloomtech.BloomTech-Git-Flow-Step-by-step-269f68ae3bf64eb689a8328715a179f9) See part 2, submitting an assignment with codegrade
