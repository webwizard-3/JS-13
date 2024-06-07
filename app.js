setInterval(updateTime, 1000)
function updateTime() {
    let date = new Date();
    document.getElementById("time").innerText = `Current Date and Time is: ${date}`;
}
document.write(`<hr>`)

document.write(`<h2>TASK 2</h2>`)
let date = new Date();
let month = date.getMonth();
let monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
document.write('Current Month is: ', monthList[month]);
document.write(`<hr>`)

document.write(`<h2>TASK 3</h2>`)
let day = date.getDay();
let dayList = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
document.write('Today is: ', dayList[day]);
document.write(`<hr>`)

document.write(`<h2>TASK 4</h2>`)
let days = date.getDay();
let daysList = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
if (daysList[days] == 'Sun ' || daysList[days] == 'Sat') {
    document.write('Today is a Funday');
}
document.write(`<hr>`)

document.write(`<h2>TASK 5</h2>`)
let dt = date.getDate();
if (dt <= 15) {
    document.write('First fifteen days of the month');
} else {
    document.write('Last fifteen days of the month');
}
document.write(`<hr>`)

document.write(`<h2>TASK 6</h2>`)
let dates = new Date('Jan 01 1970');
let minute = 1000 * 60;
document.write('Current Date: ', date, '<br>')
document.write(`Elapsed milliseconds since January 1, 1970: ${Date.now()}<br>`)
document.write(`Elapsed minutes since January 1, 1970: ${Date.now() / minute}`)
document.write(`<hr>`)

document.write(`<h2>TASK 7</h2>`)
let hours = dates.getHours();
let time = hours >= 12 ? 'PM' : 'AM';
document.write(`It's ${hours, time}<br>`)

document.write(`<hr>`)

document.write(`<h2>TASK 8</h2>`)
let date1 = new Date('Dec 31, 2023');
document.write(`Later Date: ${date1}`)

document.write(`<hr>`)

document.write(`<h2>TASK 9</h2>`)
var now1 = new Date("March 12, 2024");
var today = new Date();
var dayDifferent = today.getTime() - now1.getTime();
var days1 = ["Sun", "Mon", "Tues", "Wed", "Thus", "Fri", "Sat"];
var day1 = now1.getDay();
document.write("1st Ramazn is on: ", days1[day1], "<br>");

var diffBtwDay = Math.floor(dayDifferent / (1000 * 60 * 60 * 24));
document.write(diffBtwDay, " days have passed since the 1st of Ramadan in 2024.");
document.write(`<hr>`)

document.write(`<h2>TASK 10</h2>`)
let date2 = new Date(2015, 0, 1);
let now = new Date();
let diff = now.getTime() - date2.getTime();
let seconds = Math.floor(diff / 1000);
document.write(`On reference date ${date2.toDateString()} ${seconds} seconds had passed since the beginning of 2015.<br>`);
document.write(`<hr>`)

document.write(`<h2>TASK 11</h2>`)
let hour = today.getHours() + 1;
let min = today.getMinutes();
let sec = today.getSeconds();
document.write(`Current Date: ${today}<br>`)
document.write(`1 hour ago it was ${hour}:${min}:${sec}<br>`)
document.write(`<hr>`)

document.write(`<h2>TASK 12</h2>`)
let year = today.getFullYear() - 100;
document.write(`Current Date: ${today}<br>`)
document.write(`100 years back it was: ${year}<br>`)
document.write(`<hr>`)

document.write(`<h2>TASK 13</h2>`)
// let age = prompt('Enter your birth year');
let age = 2004;
let birthYear = today.getFullYear() - age;
document.write(`Your age is ${birthYear} <br> Your birth year is ${age}`)
document.write(`<hr>`)

document.write(`<h2>TASK 14</h2>`)
function bill() {
    // var customer = prompt('Enter your name');
    let customer = 'ABC';
    let month = today.getMonth();
    let monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    // var units = prompt('Enter your units');
    let units = '410';
    let perUnit = '16';
    let netAmount = units * perUnit;
    let latePayment = 350;
    let grossAmount = netAmount + latePayment;
    document.write(`Customer Name: ${customer}<br>`)
    document.write(`Month: ${monthList[month]}<br>`)
    document.write(`Number of units: ${units}<br>`)
    document.write(`Charges per unit: ${perUnit}<br>`)
    document.write(`Net Amount Payable (within Due Date): ${netAmount}<br>`)
    document.write(`Late Payment Surcharge: ${latePayment}<br>`)
    document.write(`Gross Amount Payable (after Due Date): ${grossAmount}<br>`)
}
bill();
document.write(`<hr>`)