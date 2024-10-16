"use strict";
const currency = {
    USD: 1,
    GBP: 1.32,
    JPY: 0.92,
    CAD: 0.78,
    MXN: 0.05,
    ZAR: 0.07,
    PKR: 280,
};
// HTML Elements
const form = document.getElementById('currency-form');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const amountInput = document.getElementById('amount');
const resultDisplay = document.getElementById('converted-amount');
// Event listener for the form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const fromValue = fromCurrency.value;
    const toValue = toCurrency.value;
    const amount = parseFloat(amountInput.value);
    if (!isNaN(amount)) {
        const convertedAmount = convertCurrency(fromValue, toValue, amount);
        resultDisplay.textContent = convertedAmount.toFixed(2);
    }
    else {
        resultDisplay.textContent = "Invalid amount!";
    }
});
// Currency Conversion Function
function convertCurrency(from, to, amount) {
    const fromRate = currency[from]; // Safe to use from here
    const toRate = currency[to]; // Safe to use to here
    const baseAmount = amount / fromRate;
    return baseAmount * toRate;
}
