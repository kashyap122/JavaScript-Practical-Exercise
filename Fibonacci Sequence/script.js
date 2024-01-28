function fibonacci() {
    let n1 = 0, n2 = 1, nextTerm;
    const num = document.getElementById("getNum").value;

    console.log('Fibonacci Sequence : ');

    for (let i = 0; i <= num; i++) {
        console.log(n1);

        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    const x = document.getElementById("print").innerHTML = n1;
}