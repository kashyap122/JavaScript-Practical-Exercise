function sumAndAvg() {
    let array = [23, 34, 56, 67, 78, 65, 45, 32, 67, 99, 100];
    document.getElementById("array").innerHTML = JSON.stringify(array);
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];

    }
    console.log(sum);
    document.getElementById("sum").innerHTML = sum;
    let avg = (sum / array.length);
    document.getElementById("avg").innerHTML = avg;
    console.log(avg);
}
