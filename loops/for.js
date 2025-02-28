//for Loop
const arr = [1,2,3,4,5.5,"Aryan", true, {age:20, address:"India"}]

for (let i = 0; i < arr.length; i++) {
    console.log(`${i+1}: ${arr[i]}, ${typeof arr[i]}`);   
}



//for in loop
const obj ={
    name: "aryan",
    age:20,
    address: "india"
}

for (const key in obj) {
    const element = obj[key];
    console.log(element);

}



//for of loop
for (const element of arr) {
    console.log(element);
    
}
