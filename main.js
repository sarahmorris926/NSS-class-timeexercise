// ***** Playing with variables and values ******

let hoursInADay = 24;
let minsInAnHour = 60;
let daysInAYear = 365;
let secondsInAMin = 60;
let minsInAnHour = 60;

// How many hours in a year?

let hoursInAYear = hoursInADay * daysInAYear;


console.log("Hours in a year: ", hoursInAYear);

// How many minutes in a decade?

let yearsInADecade = 10;
let minsInDecade = minsInAnHour * hoursInADay * daysInAYear * yearsInADecade;

console.log("Minutes in a decade: ", minsInDecade);

// How many seconds in a day? 

let secondsInADay = secondsInAMin * minsInAnHour * hoursInADay;
console.log("Seconds in a day: ", secondsInADay);

// How many seconds old am I?

let myAge = 25;
let myAgeInSeconds = secondsInADay * daysInAYear * myAge;

console.log("I am: " + myAgeInSeconds + " seconds old");

// If I am older than some number, log "I am wise"
// If not, log "I am green"

if (myAgeInSeconds > 700000000) {
  console.log("I am wise");
} else {
  console.log("I am green");
}