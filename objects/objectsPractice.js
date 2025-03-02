//Create an objects representing a type of tea with properties for name, type,and caffein contain 
const teas ={
    name:"Lemon tea",
    type: "Green",
    caffine: "low"
}

// Access and print the name and type property of the object 
console.log(teas.name);
console.log(teas["type"]);

// Add a new property origin to the object
teas.origin = "Assam"

//Change the caffein level of the tea object to "Medium"
teas.caffine = "Medium"

// Remove the type property from the tea object
delete teas.type

// Check if teh tea object has a property origin 
console.log('origin' in teas);

//Use a fro---in loop to print all properties of the object.
for (const key in teas) {
        console.log(`${key}: ${teas[key]}`);
}

// Create anested object representing different types of teas and their properties.
const myTeas = {
    greenTea: {
        name: "Green Tea"
    },
    blackTea: {
        name : "Black tea"
    }
}

//Create a copy of the tea object.
const teaCopy = {}

//Add custom method describe to the object that returns a description string.
Object.prototype.describe = function(){
    return `The name of the object is ${this}`;
}
const res = teas.describe()
console.log(res);

//Write a function takes name, age, grade as parameters and return a student object contining these properties

function createStudentProfile(name, age, grade){
    if(typeof name === 'string' && typeof age === 'number' && age > 5 ){
        return {
            "name": name,
            "age": age,
            "grade": grade
        }
    }
    return "Invalid input"
   
}
const student  = createStudentProfile("Aryan", 20, "A++")
console.log(student);


// Write a function that takes a car object and a color string then adds the color property to the object
function addCarColor(car, color){
    if(typeof car === "object" && 'brand' in car && 'model' in car && color.lenght !==0){
        car["color"] = color 
        return car
    }
    return "Invalid color"
}
addCarColor()



//Write a function thath checks if a product object has a discount property abd returns true or false
function hasDiscount(product){
    return product.hasOwnProperty("discount")
}
const dis = hasDiscount({name: "Phone", discount:10})
console.log(dis);

//Write a function that removes the password property from a user object and return the updated object

function removePassword(user){
    if('username' in user && 'password' in user){
        delete user.password
        return user
    }
    return user
}

const newUser = removePassword({"username": "Aryan", "password": "******"})
console.log(newUser);


//Write a function that returns the number of properties in an object.
function countProperties(user){
    const len = Object.keys(user).length
    if(len ===0) return 0
    return len
}
const len = countProperties({"username": "Aryan", "password": "******"})
console.log(len);



