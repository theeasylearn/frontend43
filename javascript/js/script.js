//arrow functions
//single line arrow function
let add = (num1, num2) => num1 + num2;
let sub = (num1, num2) => num1 - num2;
let min = (num1, num2) => (num1 < num2) ? num1 : num2;
//multiline arrow function
let max = (num1, num2) => {
    if (num1 > num2)
        return num1;
    else
        return num2;
}
let html = (tagId, value = null) => {
    if (value != null)
        document.getElementById(tagId).innerHTML = value;
    else
        return document.getElementById(tagId).innerHTML;
}
//default argument function
let getSimpleInterest = (amount, rate = 10, year = 1) => (amount * rate * year) / 100;
