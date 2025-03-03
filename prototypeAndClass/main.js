class Person{
    constructor(fname, lname){
        this.fname = fname
        this.lname = lname
    }

    getFullName(){
        return `${this.fname} ${this.lname}`
    }
}

const obj = new Person("Aryan", "Dhirhi")
console.log(obj);
console.log(obj.getFullName());
