
// 5 - Find the greatest number in the given array

var num = [1,65,42,87,34,54];

var greatest = num[0];

for(var i=1; i<num.length; i++)
    if(num[i] > greatest)
        greatest = num[i];

alert("Greatest number is "+greatest);
