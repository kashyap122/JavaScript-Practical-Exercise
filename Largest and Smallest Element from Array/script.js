function findMinMax() {
    const number = [122, 2, 38, 25, 12, 44, 99, 108, 225, 77, 39, 69];
    const max = Math.max(...number);
    const min = Math.min(...number);
    console.log("Largest number : " + max);
    console.log("Smallest number : " + min);
    document.getElementById("array").innerHTML = number;
    document.getElementById("max").innerHTML = max;
    document.getElementById("min").innerHTML = min;

}
findMinMax()