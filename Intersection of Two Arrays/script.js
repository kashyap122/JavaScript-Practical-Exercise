let array1 = [2,5,6,55,45,33,69,96,13,7];
let array2 = [23,2,7,37,45,56,69,75,13,1];

let commonArray = (array11,array22) => { 
    let newArray = [];
    for (let i = 0; i < array11.length; i++) {
        for (let j = 0; j < array22.length; j++) {
            if (array11[i] === array22[j]) {
                newArray.push(array11[i]);
            }
        }
    }
    return newArray;
};
document.getElementById("array1").innerHTML = JSON.stringify(array1);
document.getElementById("array2").innerHTML = JSON.stringify(array2);
document.getElementById("common").innerHTML = JSON.stringify(commonArray(array1, array2));
