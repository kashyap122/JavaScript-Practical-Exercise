let array = [];

function addedInput() {
    let input = document.getElementById("enteredValue").value;

    array.push(input);

    document.getElementById("enteredValues").innerHTML = JSON.stringify(array);
    document.getElementById("enteredValue").value = "";
    
}
function indexOfArray() {
    let input = document.getElementById("indexOf").value;
    
    let index = array.indexOf(input);

    document.getElementById("enteredNum").innerHTML = JSON.stringify(input);
    document.getElementById("indexOfNum").innerHTML = JSON.stringify(index);
}

