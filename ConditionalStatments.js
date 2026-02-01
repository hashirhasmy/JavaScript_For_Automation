console.log("-----If condition-----");
function checkAge(age) {
    if (age >= 18) {
        return "You are an adult.";
    } else {
        return "You are a minor.";
    }
}
console.log(checkAge(20));

//nested if else
console.log("-----Nested If condition-----");
function checkGrade(marks) {
    let grade;
    if (marks >= 90) {
        grade = "A grade";
        return grade;
    } else {
        if (marks >= 75) {
            grade = "B grade";
            return grade;
        } else {
            grade = "C grade";
            return grade;
        }
    }
}
console.log(checkGrade(80));


//if-else if-else
console.log("-----If-Else If-Else Condition-----");
let browser = "Chrome";
if (browser === "Chrome") {
    console.log("You are using Chrome browser.");
} else if (browser === "Firefox") {
    console.log("You are using Firefox browser.");
} else if (browser === "Safari") {
    console.log("You are using Safari browser.");
} else {
    console.log("Unknown browser.");
}

console.log("-----Switch Case Example-----");
function getDayName(dayNumber) {
    let dayName;
    switch (dayNumber) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        case 7:
            dayName = "Sunday";
            break;
        default:
            dayName = "Invalid day number";
    }
    return dayName;
}
console.log(getDayName(3));