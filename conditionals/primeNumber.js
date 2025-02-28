//Program to find weather the number is prime or not

let num = 9;
let count = 0;

for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        count++
    }
}
if(count === 2){
    console.log(`Number ${num} is prime`);
}
else{
    console.log(`Number ${num} is not prime`);
    
}

