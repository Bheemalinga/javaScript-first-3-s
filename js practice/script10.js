
// 10 - find the factorial of the given number

var num = prompt("Enter a number : ");

var fact = 1;

for(var i=1; i<=num; i++)
{
    fact = fact * i;
}

alert("Factorial of "+num+" is "+fact);