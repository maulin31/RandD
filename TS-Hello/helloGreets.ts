class People {
    fullName: string;
    constructor(public firstName, public middleName, public lastName) {
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
}
interface Person {
    firstName: string;
    lastName: string;
}
function greeter(person: Person) {
    return "Hello " + person.firstName + " " + person.lastName;
}

// var p = {
//     firstName: "Maulin", 
//     lastName: "Soni"    
// };

var p = new People("Maulin", "B.", "Soni");

document.body.innerHTML = greeter(p);