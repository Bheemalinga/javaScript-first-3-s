
// 8 - Print the prime numbers for the given range

var range = prompt("Enter the range: ");
var prime = [];

for(var i=2; i<=range; i++)
{
    var flag=0;
    for(var j=2; j<i; j++)
    {
        if(i%j == 0)
        {
            flag=1;
            break;
        }
    }
    if(flag == 0)
        prime.push(i);
}

alert("Prime numbers in the given range are: "+prime);