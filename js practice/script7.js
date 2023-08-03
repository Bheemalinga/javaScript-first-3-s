
// 7 - Find the average  in the given array

var num = [65,42,1,87,34,54];

var average=0;

for(var i=0; i<num.length; i++)
    average+=num[i];

average = (average/num.length);

alert("Average of the array is "+average);