
// 12 - write the Student database program
// using switch case

// functionalities -
// Display all student details
// display who has the highest marks
// display how many student are failed 
// display their names
// display the average marks for all the students

var student = [
    ["Rahul", 78, 87, 65, 90],
    ["Raj", 45, 67, 87, 56],
    ["Ramesh", 67, 89, 45, 78],
    ["Rakesh", 78, 67, 90, 87],
    ["Ramu", 90, 78, 67, 56]
];

var choice = prompt("1. Display all student details\n2. Display who has the highest marks\n3. Display how many student are failed\n4. Display their names\n5. Display the average marks for all the students\nEnter your choice : ");

switch(choice){
    case "1":
        for(var i=0; i<student.length; i++)
            alert("Name : "+student[i][0]+"\nMarks : "+student[i][1]+", "+student[i][2]+", "+student[i][3]+", "+student[i][4]);
        break;
    
    case "2":
        var highest = 0;
        var high = [];

        for(var i=0; i<student.length; i++){
            var total = student[i][1] + student[i][2] + student[i][3] + student[i][4];
            if(total > highest){
                highest = total;
                high = student[i][0];
            }
        }
        alert("Highest marks scored by "+high);
        break;

    case "3":
        var failed = 0;
        for(var i=0; i<student.length; i++){
            var total = student[i][1] + student[i][2] + student[i][3] + student[i][4];
            if(total < 200)
                failed++;
        }
        alert("Number of students failed : "+failed);
        break;
    
    case "4":
        for(var i=0; i<student.length; i++){
            var total = student[i][1] + student[i][2] + student[i][3] + student[i][4];
            if(total < 200)
                alert(student[i][0]);
        }
        break;

    case "5":
        for(var i=0; i<student.length; i++){
            var total = student[i][1] + student[i][2] + student[i][3] + student[i][4];
            var avg = total/4;
            alert("Average marks of "+student[i][0]+" is "+avg);
        }
        break;
}