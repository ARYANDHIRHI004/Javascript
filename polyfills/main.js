const arr = [1,2,3,4,5,6]

//Error .map function does not exist so create a .map function
// RealSignature - No return, function input, value, index
if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userFn){
        for (let i = 0; i < this.length; i++) {
             userFn(this[i], i)           
        }
    }
}
arr.myForEach((item, index) => {
  console.log(`My forEach method value at index ${index} is ${item}`);
})

//Error .map does not exist
//Real Signature - return-new array, Each element iterate, userfn

if (!Array.prototype.myMap) {
    Array.prototype.myMap = function(userFn){
        const newArr = []
        for (let i = 0; i < this.length; i++) {
            newArr.push(userFn(this[i], i))
        }
        return newArr
    }
}
const newArr = arr.myMap((item) => item*2)
console.log(newArr);
console.log(arr);

//Error .filter does not exist
//Real Signature - return-new array, Each element iterate, userfn
if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function(userFn){
        const newArray = [];
        for (let i = 0; i < this.length; i++) {
            const value = userFn(this[i]);
            if (value){
                newArray.push(this[i])
            }
        }
        return newArray
    }
}
const filteredArray = arr.myFilter((item)=> item %2 === 0)
console.log(filteredArray);


