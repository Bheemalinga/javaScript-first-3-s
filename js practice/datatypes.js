// var num = 1;
// console.log("\nThe number is : "+ num);
// // alert("The number is : "+ num);

// var str = "Hi there!";

// console.log("\nThe string is : "+ str);


// var arr=[10,20,30,40,50];

// console.log("\nThe array is : "+ arr);

// var bool = true;
// console.log("\nThe boolean value is : "+ bool);

// var arr2 = [10,20,30,"Hi there!",true];
// console.log("\nThe array is : "+ arr2);

// var arr3=[10,20,[30,35,39],40,50];
// console.log("\nThe array is : "+ arr3+"\n");


// var hour = 10;
// if(hour <= 12)
//     console.log("Good Morning!");
// else if(hour <12 && hour <= 18)
//     console.log("Good Afternoon!");
// else if(hour > 18 && hour <= 22)
//     console.log("Good Evening!")
// else
//     console.log("Good Night!");



var num = prompt("Enter a number : ");
if(num % 2 == 0)
    alert("Even Number!");
else
    alert("Odd Number!");



// switch case

var day = prompt("Enter a day : ");
switch(day){
    case "1":
        alert("Today is Monday!");
        break;
    case "2":
        alert("Today is Tuesday!");
        break;
    case "3":
        alert("Today is Wednesday!");
        break;
    case "4":
        alert("Today is Thursday!");
        break;
    case "5":
        alert("Today is Friday!");
        break;
    case "6":
        alert("Today is Saturday!");
        break;
    case "7":
        alert("Today is Sunday!");
        break;
    default:
        alert("Invalid Day!");
        break;
}