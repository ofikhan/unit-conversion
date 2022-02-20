let number = document.getElementById("number");
let showNumber = document.getElementById("showNumber");
let lengthOutput = document.getElementById("length");
let volumeOutput = document.getElementById("volume");
let massOutput = document.getElementById("mass");

let input = 0;

function inputNumber() {
    input = number.value;
    showNumber.textContent = input;
    lengthOutput.textContent = `${input} meter = ${(3.281 * input).toFixed(3)} feet | ${input} feet = ${(0.305 * input).toFixed(3)} meter`;
    volumeOutput.textContent = `${input} Liters = ${(0.22 * input).toFixed(3)} Gallons | ${input} Gallons = ${(4.546 * input).toFixed(3)} Liters`;
    massOutput.textContent = `${input} Kilograms = ${(2.205 * input).toFixed(3)} Pounds | ${input} Pounds = ${(0.454 * input).toFixed(3)} Kilograms`;
    number.value = "";
}