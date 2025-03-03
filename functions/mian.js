//function declearation
function add(a,b){
    console.log("Hello from add function");
    return a + b;   
}
const result = add(4,5)
console.log(result);



//function expression
const greet = function(name){
    console.log(`hello ${name} from greet function`);
}
greet('aryan')



//Arrow Function
const arrow = () => console.log('Hello from arrow function');               
arrow() 


//First class function
function applyOperation(a,b,operation){
    return operation(a,b)
}
const result1 = applyOperation(5,2, (x,y)=> x/y)



//Function Prototype
Function.prototype.describe = function(){
    console.log(`Function name is ${this.name}`);
}

const greet2 = function(name){
    console.log(`hello ${name} from greet function`);
}

greet2.describe()

// (function(){
//     console.log('IIFE');
    
// })()

let person1 = {
    name: "ravi",

    greet: function(){
        console.log(`Hello ${this.name}`);   
    }
}

let person2 = {
    name: "Aryan",
}

person1.greet.call(person2)



