let array = [];
function addNumbers() {

    let input = document.getElementById("number").value;

    array.push(input);

    document.getElementById("numbers").innerHTML = JSON.stringify(array);
    // input.value = "";
    document.getElementById("number").value = "";
 
    let sortedAscendingArray = array.sort(function (a, b) { return a - b });
    console.log("After sorting in Ascending order");
    console.log(sortedAscendingArray);
    document.getElementById("arrayAscending").innerHTML = JSON.stringify(sortedAscendingArray);


    let sortedDescendingArray = array.sort(function (a, b) { return b - a });
    console.log("After sorting in Descending order");
    console.log(sortedDescendingArray);
    document.getElementById("arrayDescending").innerHTML = JSON.stringify(sortedDescendingArray);


}


