// Create an attay contianing different types of teas.
const teas = ["green tea", "black tea", "oolong tea", "white tea", "herbal Tea"]
console.log(teas);

// Add "chemomile Tea" to the existing list of teas
teas.push("chemomile Tea")

//Remove "Oolong tea" from the list of teas.
const index = teas.indexOf("oolong tea")
if (index > -1) {
    teas.splice(index, 1)
}

// Filter the list to only include teas that are caffeinated.
const caffeinated = teas.filter((item)=>item !== "herbal Tea")
console.log(caffeinated);

//Sort the list of teas in alphabetical order
teas.sort()
console.log(teas);

// Use to for loop to print eact type of tea in the array

for (let i = 0; i < teas.length; i++) {
    const element = teas[i];
    console.log(element);
}

//Use a for loop to find how many teas are caffeinated.
let count = 0;
for (let i = 0; i < teas.length; i++) {
    if (teas[i] !== "herbal Tea") {
        count++
    }
}
console.log(count);

//Use a for loop to create a new array with all tea names in uppercase.
const upperTeas = []
for (let i = 0; i < teas.length; i++) {
    upperTeas.push(teas[i].toUpperCase())
}

//Use a for loop to find tea name withe the most charecters.
let longest = "";
for (let i = 0; i < teas.length; i++) {
    if(longest.length < teas[i].length){
        longest = teas[i]
    }
}
console.log(longest);

// Use a for loop to reverse the order of teas in the array.
const reverse = []
for (let i = teas.length-1; i >=0; i--) {
    reverse.push(teas[i])
}

console.log(reverse);


