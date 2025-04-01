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

//3. Array.prototype.copyWithin()
//This method of array instance shallow copies part of this array to another location i the same array.
//Returns- same array

const arr6 = [1,2,3,4,5,6]
const arr8 = [1,2,3,4,5,6]
const arr7 = ["JS", "JAVA", "RUST"]
// console.log(arr6.copyWithin(0,2,5));


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
// console.log(arr8.myCopyWithin(0,2,5));


//4. Array.prototype.entires() --------------Discuss 
//This method of array instance return a new array object that contains the key-value pairs for each index in the array.
//Returns- new array

const arr9 = [1,2,3,4,5,6];
const iterator = arr9.entries();
console.log(iterator);

if (!Array.prototype.myEntries) {
    Array.prototype.myEntries = function(){
        let keyValue;
        this.forEach((value, index)=>{
            const newArr = [];
            newArr.push(index,value)
            keyValue= newArr
        })
        return keyValue
    }
}
// const iterator = arr9.myEntries()

// for (const element of iterator) {
//     console.log(element);
    
// }


// 5. Array.prototype.every()
//This method of array instance tests weather all elements in the array pass the test implemented by the provided function
//Returns- boolean
const arr10 = [1,2,3,4,5,6];
// console.log(arr10.every((item)=>item<6));

if (!Array.prototype.myEvery) {
    let res
    Array.prototype.myEvery = function(cb){
        this.forEach((item)=>{
            res = cb(item)
        })
        return res
    }
}

// console.log(arr10.myEvery((item)=>item<2));

// 6. Array.prototype.fill()
//The fill() method of Array instances changes all elements within a range of indices in an array to a static value. It returns the modified array.
//Returns- array

const arr11 = [1,2,3,4,5,6];
// console.log(arr10.fill(2, 1,5));

if(!Array.prototype.myFill){
    Array.prototype.myFill = function(value, start, end){
        
        for (let i = start; i < end; i++) {
            this[i] = value
        }
        
        return this
    }
}
// console.log(arr11.myFill(5, 0,6));


// 7. Array.prototype.filter()
//The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
//Returns- array

const arr12 = [1,2,3,4,5,6];

// console.log(arr12.filter((item)=>item<4));

if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function(cb){
        const newArr = []
        for (let i = 0; i < this.length; i++) {
            const value = cb(this[i])
            if(value){
                newArr.push(this[i])
            }
        }
        return newArr
    }
}
// console.log(arr12.myFilter((item)=>item<5));


