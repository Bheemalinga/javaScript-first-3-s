
// 1 - Find the greatest number among three intergers 
// using if-else statement

var one=prompt("Enter 1 st number : ");
var two=prompt("Enter 2 nd number : ");
var three=prompt("Enter 3 rd number : ");
var greatest;

if(one > two && one > three)
    greatest = one;
else if(two > three && two > one)
    greatest = two;
else
    greatest = three;

alert("Greatest number is "+greatest);