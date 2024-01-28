function calculate() {
    let billAmount = parseFloat(document.getElementById("billAmt").value);
    let tipPercentage = parseFloat(document.getElementById("tipPercentage").value);

    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        alert("Please enter valid numbers for bill amount and tip percentage.");
        return;
    }
    
    let tipAmount = (billAmount * tipPercentage) / 100;
    let totalAmount = billAmount + tipAmount;


    document.getElementById("tipAmt").innerHTML = tipAmount.toFixed(2);
    document.getElementById("mainTotal").innerHTML = totalAmount.toFixed(2);

}