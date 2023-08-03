
// 11 - Write a calculator program 
// using swich case for two operands
// functionalities - 
// Addition
// Sabtraction
// multiplication
// division
// remider
// factorial
// percentage
// average of two numbers
// print multiplaction table of given number

var one = prompt("Enter first number : ");
var two = prompt("Enter second number : ");
var choice = prompt("1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n5. Remainder\n 6. Factorial\n7. Percentage\n8. Average of two numbers\nEnter your choice : ");
var result = 0;

switch(choice){
    case "1":
        result = parseInt(one) + parseInt(two);
        break;
    case "2":
        result = one - two;
        break;
    case "3":
        result = one * two;
        break;
    case "4":
        result = one / two;
        break;
    case "5":
        result = one % two;
        break;
    case "6":
        result = 1;
        for(var i=1; i<=one; i++)
            result = result * i;
        break;
    case "7":
        result = (one/two)*100;
        break;
    case "8":
        result = (parseInt(one)+parseInt(two))/2;
        break;
    default:
        alert("Invalid choice");
}

alert("Result is "+result);
