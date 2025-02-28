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
const arrow = () => { 
    console.log('Hello from arrow function');               
}
arrow() 


//Function Prototype
Function.prototype.describe = function(){
    console.log(`Function name is ${this.name}`);
}

const greet2 = function(name){
    console.log(`hello ${name} from greet function`);
}

greet2.describe()

