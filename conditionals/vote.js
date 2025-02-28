const age = 50;

if(age > 18){
    if(age > 100){
        console.log("Invalid input");
    }
    else{
        console.log("You can vote");
    }
}
else if(age < 0){
    console.log("Invalid input");   
}
else{
    console.log("You can't vote");
}