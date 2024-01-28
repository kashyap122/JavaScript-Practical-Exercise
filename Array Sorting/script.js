let marks = [80, 12, 100, 15, 45, 33, 99, 101, 25, 57, 75];
console.log("Original Array");
console.log(marks);
document.getElementById("originalArray").innerHTML = JSON.stringify(marks);


let sortedAscendingArray = marks.sort(function (a, b) { return a - b });
console.log("After sorting in Ascending order");
console.log(sortedAscendingArray);
document.getElementById("arrayAscending").innerHTML = JSON.stringify(sortedAscendingArray);


let sortedDescendingArray = marks.sort(function (a, b) { return b - a });
console.log("After sorting in Descending order");
console.log(sortedDescendingArray);
document.getElementById("arrayDescending").innerHTML = JSON.stringify(sortedDescendingArray);
