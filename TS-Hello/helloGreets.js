var People = (function () {
    function People(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    return People;
}());
function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
// var p = {
//     firstName: "Maulin", 
//     lastName: "Soni"    
// };
var p = new People("Maulin", "B.", "Soni");
document.body.innerHTML = greeter(p);
