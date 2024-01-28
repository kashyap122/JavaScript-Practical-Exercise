let person = {
    firstName : "Kashyap",
    lastName : "Chauhan",
    age : 20,
    country : "India",
    state : "Gujarat",
    city : "Ahmedabad"
};

person.getFullInfo = function() {
    return 'First Name : '+this.firstName +'<br>\nLast Name : '+ this.lastName + '<br>\nAge : '+ this.age+'<br>\nCountry : '+this.country+'<br>\nState : '+this.state+'<br>\nCity : '+this.city;
}
console.log(person.getFullInfo());
document.getElementById("obj").innerHTML =person.getFullInfo();