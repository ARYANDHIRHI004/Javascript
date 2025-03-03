const obj1 = {
    fname: "aryan",
    lname: "dhirhi",
    getFullName: function(){
        return `${this.fname} ${this.lname}`
    }
}

const obj2 = {
    fname: "Arun",
    lname: "sahu",
}

obj2.__proto__ = obj1;
obj1.__proto__ = null;

console.log(obj2.getFullName());
console.log(obj2.toString());
