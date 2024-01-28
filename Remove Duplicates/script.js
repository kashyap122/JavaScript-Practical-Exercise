let array = [1, 4, 6, 12, 12, 31, 15, 2, 29, 29, 16, 22, 22];

function removeDuplicates() {
    return array.filter((item, index) => array.indexOf(item) === index);
}
document.getElementById("array").innerHTML = array;
document.getElementById("duplicate").innerHTML = removeDuplicates(array);
