
// 2 - Find the smallest number among three intergers using if-else

var one=prompt("Enter 1 st number : ");
var two=prompt("Enter 2 nd number : ");
var three=prompt("Enter 3 rd number : ");
var smallest;

if(one < two && one < three)
    smallest = one;
else if(two < three && two < one)
    smallest = two;
else
    smallest = three;

alert("Greatest number is "+smallest );