function palindromeChecker(){
    let name = document.getElementById('palnum').value;
    let reverse = name.split("").reverse().join("");
    if (name==reverse) {
        console.log("it is palindrome");
        document.getElementById('print').innerHTML="it is palindrome";
        
    }
    else{
        console.log("it isn't palindrome");
        document.getElementById('print').innerHTML="it isn't palindrome";
    }
}