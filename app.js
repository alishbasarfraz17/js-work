
function welcomeUser() {
    var city = prompt("Enter your city name:");
    if (city.toLowerCase() === "karachi") {
        alert("Welcome to city of lights");
    } else {
        alert("Welcome to " + city);
    }
}


function greetUser() {
    var gender = prompt("Enter your gender (male/female):");
    if (gender.toLowerCase() === "male") {
        alert("Good Morning Sir");
    } else if (gender.toLowerCase() === "female") {
        alert("Good Morning Ma’am");
    } else {
        alert("Good Morning");
    }
}


function showSignalMessage() {
    var color = prompt("Enter the color of the traffic signal:");
    if (color.toLowerCase() === "red") {
        alert("Must Stop");
    } else if (color.toLowerCase() === "yellow") {
        alert("Ready to move");
    } else if (color.toLowerCase() === "green") {
        alert("Move now");
    } else {
        alert("Invalid color");
    }
}


function checkFuel() {
    var fuel = parseFloat(prompt("Enter remaining fuel in car (in litres):"));
    if (fuel < 0.25) {
        alert("Please refill the fuel in your car");
    } else {
        alert("Fuel level is sufficient");
    }
}


welcomeUser();
greetUser();
showSignalMessage();
checkFuel();




function testConditionals() {
   
    var a = 4;
    if (++a === 5) {
        alert("given condition for variable a is true");
    }

    
    var b = 82;
    if (b++ === 83) {
        alert("given condition for variable b is true");
    }

    
    var c = 12;
    if (c++ === 13) {
        alert("condition 1 is true");
    }
    if (c === 13) {
        alert("condition 2 is true");
    }
    if (++c < 14) {
        alert("condition 3 is true");
    }
    if (c === 14) {
        alert("condition 4 is true");
    }

 
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost) {
        alert("The cost equals");
    }

  
    if (true) {
        alert("True");
    }
    if (false) {
        alert("False");
    }


    if ("car" < "cat") {
        alert("car is smaller than cat");
    }
}


testConditionals();



function computeGrade() {
    var subject1 = parseFloat(prompt("Enter marks obtained in subject 1:"));
    var subject2 = parseFloat(prompt("Enter marks obtained in subject 2:"));
    var subject3 = parseFloat(prompt("Enter marks obtained in subject 3:"));
    var totalMarks = parseFloat(prompt("Enter total marks:"));

    var obtainedMarks = subject1 + subject2 + subject3;
    var percentage = (obtainedMarks / totalMarks) * 100;
    var grade, remarks;

    if (percentage >= 80) {
        grade = 'A-one';
        remarks = 'Excellent';
    } else if (percentage >= 70) {
        grade = 'A';
        remarks = 'Good';
    } else if (percentage >= 60) {
        grade = 'B';
        remarks = 'You need to improve';
    } else {
        grade = 'Fail';
        remarks = 'Sorry';
    }

    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
        <h2>Results</h2>
        <p>Total Marks: ${totalMarks}</p>
        <p>Marks Obtained: ${obtainedMarks}</p>
        <p>Percentage: ${percentage.toFixed(2)}%</p>
        <p>Grade: ${grade}</p>
        <p>Remarks: ${remarks}</p>
    `;
}


computeGrade();



function guessGame() {
    var secretNumber = Math.floor(Math.random() * 10) + 1;
    var guess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
    if (guess === secretNumber) {
        alert("Bingo! Correct answer");
    } else if (guess + 1 === secretNumber) {
        alert("Close enough to the correct answer");
    } else {
        alert("Try again! The secret number was " + secretNumber);
    }
}


function checkDivisibleBy3() {
    var number = parseInt(prompt("Enter a number to check if it's divisible by 3:"));
    if (number % 3 === 0) {
        alert("The number is divisible by 3");
    } else {
        alert("The number is not divisible by 3");
    }
}


function checkEvenOrOdd() {
    var number = parseInt(prompt("Enter a number to check if it's even or odd:"));
    if (number % 2 === 0) {
        alert("The number is even");
    } else {
        alert("The number is odd");
    }
}


function checkTemperature() {
    var temperature = parseFloat(prompt("Enter the temperature:"));
    if (temperature > 40) {
        alert("It is too hot outside.");
    } else if (temperature > 30) {
        alert("The Weather today is Normal.");
    } else if (temperature > 20) {
        alert("Today’s Weather is cool.");
    } else if (temperature > 10) {
        alert("OMG! Today’s weather is so Cool.");
    } else {
        alert("It is very cold outside.");
    }
}


function simpleCalculator() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var operation = prompt("Enter the operation (+, -, *, /, %):");

    var result;
    if (operation === "+") {
        result = num1 + num2;
    } else if (operation === "-") {
        result = num1 - num2;
    } else if (operation === "*") {
        result = num1 * num2;
    } else if (operation === "/") {
        result = num1 / num2;
    } else if (operation === "%") {
        result = num1 % num2;
    } else {
        alert("Invalid operation");
        return;
    }

    alert("The result of " + num1 + " " + operation + " " + num2 + " is " + result);
}


guessGame();
checkDivisibleBy3();
checkEvenOrOdd();
checkTemperature();
simpleCalculator();