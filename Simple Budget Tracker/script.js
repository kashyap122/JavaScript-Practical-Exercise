let balanceElement = document.getElementById('balance');
let incomeInput = document.getElementById('income');
let expensesInput = document.getElementById('expenses');
let passbookDataI = document.getElementById('dataI');
let passbookDataE = document.getElementById('dataE');

let balance = 0;

function updateBalance() {
    balanceElement.textContent = balance;
}

document.querySelector('label[for="income"] button').addEventListener('click', function() {
    let incomeValue = parseFloat(incomeInput.value);
    if (!isNaN(incomeValue)) {
        balance += incomeValue;
        updateBalance();
        incomeInput.value = '';
        passbookDataI.style.color = "green";
        passbookDataI.innerHTML += "+" + incomeValue + "<br>";
    }
});

document.querySelector('label[for="expenses"] button').addEventListener('click', function() {
    let expensesValue = parseFloat(expensesInput.value);
    if (!isNaN(expensesValue)) {
        balance -= expensesValue;
        updateBalance();
        expensesInput.value = '';
        passbookDataE.style.color = "red";
        passbookDataE.innerHTML += "-" + expensesValue + "<br>";
    }
});
