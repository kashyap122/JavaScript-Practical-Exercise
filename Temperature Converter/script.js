function temperatureConverter(num) {
    num = parseFloat(num);
    document.getElementById("outputC").innerHTML = (num - 32) / 1.8;
}

function temperatureConverter2(num) {
    num = parseFloat(num);
    document.getElementById("outputF").innerHTML = (num * 1.8) + 32;
}
