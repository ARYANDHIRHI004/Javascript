const person = {
    x: 10,
    firstName: "Aryan",
    lastName: "Dhirhi",
    skills: ["python", "java", "javacript"],
    isPaid: false,
    getFullname: function(){
        return "Aryan Dhirhi"
    },
    address: {
        house: 1,
        street: 1,
        country: "India",
    }
}

console.log(person);
console.log(person.x);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.skills);
console.log(person.getFullname());
console.log(person.address.house);



let p2 = person;

// p2.fname = "Dhirhi"
console.log(p2);
console.log(person);

let p3 = {...person}
p3.address = "Aryan"
console.log(p3);
console.log(person);

let objStr = JSON.stringify(person)
let p4 = JSON.parse(objStr)
console.log(p4);








