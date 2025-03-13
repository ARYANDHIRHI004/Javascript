//1. Array.at()
// Signature - This method takes an integer value and returns the item at that index, allows for positive and negative index, Negative index count back from the last item in the array.
//if index < 0, index + array.length is accessed. Always returns undefined if index < -array.length or index >= array.length

const arr = [1,2,3,4,5,6]
const arr2 = ["JS", "JAVA", "RUST"]
// console.log(arr['-1']);

if (!Array.prototype.myAt) {
    Array.prototype.myAt = function(index){
        index = Number(index)
        if (index<0) {
            if (index < (-this.length)) return undefined;
            return this[index+this.length]

        }
        else{
            if (index >= this.length) return undefined;
            return this[index];
        }
    }
}
// console.log(arr.myAt(-7));

//2. Array.prototype.concate()
//The concate methodn of array is use to merge two or more array. This method does not change the existing array.
//Returns- New array,
const arr3 = [1,2,3,[4,5],6]
const arr4 = ["JS", "JAVA", "RUST"]
const arr5 = [1,2,3,[4,5],8,9]

const concatArray = arr3.concat(arr4)
// console.log(concatArray);

if (!Array.prototype.myConcate) {
    Array.prototype.myConcate = function(){
        const newArr = [];
        this.forEach((itme)=> newArr.push(itme));
        for (let i = 0; i < arguments.length; i++) {
            arguments[i].forEach((itme)=>newArr.push(itme));
        }
        return newArr        
    }
}
const myConcateMethod = arr3.myConcate(arr4, arr5)
// console.log(myConcateMethod);

//2. Array.prototype.copyWithin()
//This method of array instance shallow copies part of this array to another location i the same array.
//Returns- same array

const arr6 = [1,2,3,4,5,6]
const arr8 = [1,2,3,4,5,6]
const arr7 = ["JS", "JAVA", "RUST"]
console.log(arr6.copyWithin(0,2,5));


if (!Array.prototype.myCopyWithin) {
    Array.prototype.myCopyWithin = function(index, copyValueIndex, LastIndex){
        for (let i = index; i < LastIndex-copyValueIndex; i++) {
            if (!(LastIndex < i)) {
                this[i] = this[copyValueIndex+i]
            }
            else{
                break
            }
        }    
        return this
    }
}
console.log(arr8.myCopyWithin(0,2,5));




