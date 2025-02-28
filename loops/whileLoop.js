//While Loop
const arr = [1,2,3,4,5,6]
let i = 0;
while (i < arr.length) {
    arr[i] = arr[i]**2
    console.log(arr[i]);
    i++
}

//Do-While Loop
const arr2 = [5,6,7,8,9]
let j = 0
do {
    arr2[j] = arr2[j]**2
    console.log(arr2[j]);
    j++
} while (j < arr2.length);