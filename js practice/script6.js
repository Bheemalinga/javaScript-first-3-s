
// 6 - Find the smallest number in the given array

var num = [65,42,1,87,34,54];

var smallest = num[0];

for(var i=1; i<num.length; i++)
    if(num[i] < smallest)
        smallest = num[i];

alert("Greatest number is "+smallest);