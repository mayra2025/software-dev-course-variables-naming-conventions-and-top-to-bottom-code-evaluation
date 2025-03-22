/*

Objective:
In this activity, you will reinforce the skill of creating and using variables
while practicing best practices in variable naming conventions through a hands-on,
interactive coding challenge.

The code snippet below may include:
  - Ambiguous or incorrect variable names.
  - Missing variables that need to be created.
  - Scenarios that require the use of clear and descriptive variable names.

You will:
  - Identify Issues: Review the provided code and identify any variable names that:
  - Are unclear or too vague (e.g., a, b, c).
  - Do not follow best practices (e.g., camelCase, descriptive naming).
  - Refactor the Code: Rename the variables and rewrite the program using descriptive names that clearly convey the variable's purpose.
  - Enhance the Program: Add at least two additional variables to improve the program’s functionality or clarity.

Things to reflect on:
  - Why is it important to use meaningful variable names?
  - What are the common pitfalls to avoid when naming variables?
  - How do clear variable names benefit team collaboration?
  
*/

let userName = "Alice";//variable name unclear, changed to userName
let itemsBought = 5;//variable name unclear, changed to itemsBought
let costPerItem = 20;//variable name unclear, changed to costPerItem
let displayMessage = userName + " bought " + itemsBought + " items for $" + costPerItem + ".";//variable name unclear, updated with new variables 

// creating function to calculate total cost of items bought
function calculateTotalCost(itemsBought, costPerItem) { 
  return itemsBought * costPerItem;
}

let totalCost = calculateTotalCost(itemsBought, costPerItem); //added variable1
let totalCostMessage = "Total is $" + totalCost + ".";//added variable2

console.log(displayMessage);
console.log(totalCostMessage);//added total message 


