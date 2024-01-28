function prime() {

    let i, flag = true;
    let number = document.getElementById('number').value;
    // value = number;
    for (i = 2; i <= number - 1; i++) {
        if (number % i == 0) {
            flag = false;
            break;
        }
    }
    if (flag == true) {
        console.log(number + " is prime.");
        document.getElementById('prime').innerHTML = number + " is prime.";
    }
    else {
        console.log(number + " is not prime.");
        document.getElementById('prime').innerHTML = number + " is not prime.";
    }


}
prime()