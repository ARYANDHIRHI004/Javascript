let fruits = ["apple", "cherry", "banana"]
let intFruits = new Array("kiwi", "avacado", "dragan fruit")

console.log("Type of fruits array ", typeof fruits);
console.log("Type of intFruits array", typeof intFruits);

console.log(fruits.length);
console.log(fruits[0]);

console.log(fruits);
fruits[0] = "Blueberry"
console.log(fruits);

//Array methods 

fruits.push("new item")
console.log(fruits);

fruits.unshift("another new item")
console.log(fruits);

let poped = fruits.pop()
console.log(fruits);
console.log(poped);
fruits.sort();


//Loops or Iteration;
let teas = ["masala", "ginger", "oolong", "rose", "lemon"]
console.log(teas[0]);

for (let i = 0; i < teas.length; i++) {
    const element = teas[i];
    console.log(element);    
}

let nums = [1,2,3,4,5,6]

function sumFactory(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]   
    }
    return sum
}

const result = sumFactory(nums)
console.log(result);




