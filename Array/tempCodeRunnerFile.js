sole.log(arr6.copyWithin(0,2,5));


// if (!Array.prototype.myCopyWithin) {
//     Array.prototype.myCopyWithin = function(index, copyValueIndex, LastIndex){
//         for (let i = index; i < LastIndex-copyValueIndex; i++) {
//             if (!(LastIndex < i)) {
//                 this[i] = this[copyValueIndex+i]
//             }
//             else{
//                 break
//             }
//         }
                
//         return this
//     }
// }

// console.log(arr6.myCopyWithin(0,2,5));