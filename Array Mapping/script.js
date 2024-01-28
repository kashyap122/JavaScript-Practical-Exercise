function  arrayMapping(double) {
    let array = [1,2,3,4,5,6,7,8,9,10,11,12];

    let doubledArray = array.map(double => double*2);
    console.log(array);
    document.getElementById("array").innerHTML = array;
    console.log(doubledArray);
    document.getElementById("doubledArray").innerHTML = doubledArray;
}
arrayMapping()