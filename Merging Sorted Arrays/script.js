//Sorting of two arrays
let array1 = [36,241,9,78,58,96,22,18,6,42];
document.getElementById("array1").innerHTML = JSON.stringify(array1);

let array1Ascending = array1.sort(function (a, b) { return a - b });
document.getElementById("array1Ascending").innerHTML = JSON.stringify(array1Ascending);

let array1Desscending = array1.sort(function (a, b) { return b - a });
document.getElementById("array1Descending").innerHTML = JSON.stringify(array1Desscending);


let array2 = [21,11,64,69,100,93,89,78,53,35];
document.getElementById("array2").innerHTML = JSON.stringify(array2);

let array2Ascending = array2.sort(function (a, b) { return a - b });
document.getElementById("array2Ascending").innerHTML = JSON.stringify(array2Ascending);

let array2Desscending = array2.sort(function (a, b) { return b - a });
document.getElementById("array2Descending").innerHTML = JSON.stringify(array2Desscending);


//merging of two arrays
let array3 = array1.concat(array2);
console.log(array3);
document.getElementById("arrayMerged").innerHTML = JSON.stringify(array3);

let arrayMergedAsc = array3.sort(function (a, b) { return a - b });
document.getElementById("arrayMergedAsc").innerHTML = JSON.stringify(arrayMergedAsc);

let arrayMergedDes = array3.sort(function (a, b) { return b - a });
document.getElementById("arrayMergedDes").innerHTML = JSON.stringify(arrayMergedDes);
