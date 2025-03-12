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

// Use for loop to print eact type of tea in the array

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

//Create a function that adds a new guest list and return the updated list.
const friends = ["Aryan", "Rohan", "Salim", "Jay"]
function addGuest(guestList, newGuest){
    guestList.push(newGuest)
    return guestList
}
console.log(addGuest(friends, "Shubham"));

//Create a function that remove the last candy from the jar and return the updated jar
const candy =  ["Dairy Milk", "munch", "kitkat", "gum"]
function eatCandy(candyJar){
    candyJar.pop()
    return candyJar
}
console.log(eatCandy(candy));

//Create a function thath adds a puppy to the front of the queue and returns the updated queue
const puppys = ["Tom", "Jerry", "Spike"]
function addPuppy(queue, puppyName){
    queue.unshift(puppyName)
    return queue
}
console.log(addPuppy(puppys,"Max"));

//Create a function that removes the first student fromthe bus and returns the updated list.
const studentsBus = ["John", "Sarah", "Mike", "Emma"]
function removeStudent(bus){
    bus.shift()
    return bus
}
console.log(removeStudent(studentsBus));

//Create a function that sorts the books alphabatically and return the updatet list.
const booksShelf =  ["Maths", "English", "Science", "History"]
function sortBooks(books){
    books.sort()
    return books
}
console.log(sortBooks(booksShelf));

//Create a funciton that removes unhealthy food items(those containing burger) and return the updated list.
const foods = ["Salad", "Burger", "Apple", "Pizza", "Banana"]
function filterHealthy(foods){
    const updatedList = foods.filter((item)=> item !== "Burger")
    return updatedList
}
console.log(filterHealthy(foods));

//Create a function that finds the index of the "Phone" in the list of items and returns the index.
const items = ["Wallet", "Keys", "Phone","Glasses"]
function findPhone(items){
    return items.indexOf("Phone")
}
console.log(findPhone(items));

//Create a function that insert the name at the start of the message and returns the updated message.

const message = ["Thankyou", "so", "much"]
function writeLoveLetter(message, name){
    message.unshift(name)
    return message
}
console.log(writeLoveLetter(message, "Jesus"));













