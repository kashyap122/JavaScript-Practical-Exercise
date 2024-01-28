function oddEven() {
    const array = [1,2,3,4,5,6,7,8,9,10,11,12];
    const odd = array.filter(
        function(num) {
            return num%2==1;
        }
    )
    const even = array.filter(
        function(num) {
            return num%2==0;
        }
    )
    document.getElementById("array").innerHTML = array;
    document.getElementById("odd").innerHTML = odd;
    document.getElementById("even").innerHTML = even;
}
oddEven()